import { NextApiRequest, NextApiResponse } from 'next';
import { GetAllUsersDocument } from '@/generated/graphql';
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
  if (req.method === 'GET') {
    try {
      const usersResponse = await graphqlRequestClient.request(GetAllUsersDocument)
      res.status(HttpStatusCode.Ok).json({ message: 'Users fetched successfully', data: usersResponse });
    } catch (error) {
        console.log(error)
      res.status(HttpStatusCode.InternalServerError).json({ error: 'Failed to fetch data' });
    }
  } else {
    res.status(HttpStatusCode.MethodNotAllowed).json({ error: 'Method Not Allowed' });
  }
}