import { NextApiRequest, NextApiResponse } from 'next';
import { AddMessageReplyDocument, CreateMessageDocument, CreateUserDocument } from '@/generated/graphql';
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
      const messageReply = await graphqlRequestClient.request(AddMessageReplyDocument, req.body)
      res.status(HttpStatusCode.Created).json({ message: 'Message reply created successfully, you will wait for decision', data: messageReply });
    } catch (error) {
        console.log("error")
        console.log(error)
      res.status(HttpStatusCode.InternalServerError).json({ error: 'Failed to send message' });
    }
  } else {
    res.status(HttpStatusCode.MethodNotAllowed).json({ error: 'Method Not Allowed' });
  }
}
