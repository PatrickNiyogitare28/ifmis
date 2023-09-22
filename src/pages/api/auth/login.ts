import { NextApiRequest, NextApiResponse } from 'next';
import * as _ from 'lodash';
import { verifyPassword } from '@/utils/hash-password';
import graphqlRequestClient from '@/lib/client';
import { HttpStatusCode } from 'axios';

type Data = {
  error?: string;
  message?: string;
  data?: unknown;
  authToken?: string;
};
import { GetUserForLoginDocument, GetUserForLoginQuery, User as User } from '@/generated/graphql';
import { signAccessToken, signRefreshToken } from '@/utils/token';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    try {
      const { Email,Password } = req.body;
      const data:any = await graphqlRequestClient.request(GetUserForLoginDocument, {Email});
      console.log(data);
      const userQuery: GetUserForLoginQuery = data;
      if(userQuery.User_aggregate.aggregate?.count === 0) return res.status(HttpStatusCode.Unauthorized).json({message: 'Invalid credentials'});
      const isVerified = await verifyPassword(Password, userQuery.User[0].Password);
      if(!isVerified) return res.status(HttpStatusCode.Unauthorized).json({message: 'Invalid credentials'});
      
      const accessToken = signAccessToken(_.omit(userQuery.User[0], ['Password']));
      res.setHeader('Set-Cookie', `accessToken=${accessToken}; Path=/; HttpOnly`);

      res.status(HttpStatusCode.Ok).json({data: {
        message: "Logged in successfully",
        accessToken: accessToken,
        refreshToken: signRefreshToken(_.omit(userQuery.User[0], ['Password']))
      } });
    } catch (error) {
        console.log(" fetch error ")
        console.log(error)
      res.status(HttpStatusCode.InternalServerError).json({ error: 'Failed to login' });
    }
  } else {
    res.status(HttpStatusCode.MethodNotAllowed).json({ error: 'Method Not Allowed' });
  }
}
