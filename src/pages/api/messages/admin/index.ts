import { NextApiRequest, NextApiResponse } from 'next';
import {GetAppointmentsForAdminDocument} from '@/generated/graphql';
import graphqlRequestClient from '@/lib/client';
import { HttpStatusCode } from 'axios';
import { GetMessagesForAdminDocument } from '@/generated/backendGraphql';

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
      const messagesResponse = await graphqlRequestClient.request(GetMessagesForAdminDocument)
      res.status(HttpStatusCode.Ok).json({ message: 'Messages fetched successfully', data: messagesResponse });
    } catch (error) {
        console.log(error)
      res.status(HttpStatusCode.InternalServerError).json({ error: 'Failed to fetch data' });
    }
  } else {
    res.status(HttpStatusCode.MethodNotAllowed).json({ error: 'Method Not Allowed' });
  }
}
