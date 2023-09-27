import { NextApiRequest, NextApiResponse } from 'next';
import graphqlRequestClient from '@/lib/client';
import { HttpStatusCode } from 'axios';
import { UpdateUserStatusDocument } from '@/generated/graphql';

type Data = {
  error?: string;
  message?: string;
  data?: unknown;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'PUT') {
    try {
      const updateResponse = await graphqlRequestClient.request(UpdateUserStatusDocument, {...req.body, Id: req.query.id})
      res.status(HttpStatusCode.Ok).json({ message: 'User updated successfully', data: updateResponse });
    } catch (error) {
        console.log("error")
        console.log(error)
      res.status(HttpStatusCode.InternalServerError).json({ error: 'Failed to update status' });
    }
  } else {
    res.status(HttpStatusCode.MethodNotAllowed).json({ error: 'Method Not Allowed' });
  }
}
