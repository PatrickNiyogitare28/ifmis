import { NextApiRequest, NextApiResponse } from 'next';
import { CreateUserDocument } from '@/generated/graphql';
import graphqlRequestClient from '@/lib/client';
import { HttpStatusCode } from 'axios';
import { AddAppointmentDocument } from '@/generated/backendGraphql';

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
      const appointment = await graphqlRequestClient.request(AddAppointmentDocument, req.body)
      res.status(HttpStatusCode.Created).json({ message: 'Appointment created successfully, you will wait for decision', data: appointment });
    } catch (error) {
        console.log("error")
        console.log(error)
      res.status(HttpStatusCode.InternalServerError).json({ error: 'Failed to sign up' });
    }
  } else {
    res.status(HttpStatusCode.MethodNotAllowed).json({ error: 'Method Not Allowed' });
  }
}
