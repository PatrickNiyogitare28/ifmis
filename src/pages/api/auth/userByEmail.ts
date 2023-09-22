import { NextApiRequest, NextApiResponse } from 'next';
import { GetUserWithEmailDocument, GetUserWithEmailQuery } from '@/generated/graphql';
import graphqlRequestClient from '@/lib/client';
import { HttpStatusCode } from 'axios';

type Data = {
  error?: string;
  message?: string;
  data?: unknown;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    try {
      const user: GetUserWithEmailQuery = await graphqlRequestClient.request(GetUserWithEmailDocument, req.body)
      if(user.User.length > 0){
          return res.status(HttpStatusCode.Created).json({ message: 'Email exists', data: {user: user.User, emailExists: true }});
      }
      else{
        return res.status(HttpStatusCode.Created).json({ message: 'Email is not used', data: {user: user.User, emailExists: false} });
      }
    } catch (error) {
        console.log("in error")
        console.log(error);
      return res.status(HttpStatusCode.InternalServerError).json({ error: 'Error occured' });
    }
  } else {
    res.status(HttpStatusCode.MethodNotAllowed).json({ error: 'Method Not Allowed' });
  }
}
