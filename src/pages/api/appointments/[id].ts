import { NextApiRequest, NextApiResponse } from 'next';
import { CreateUserDocument } from '@/generated/graphql';
import graphqlRequestClient from '@/lib/client';
import { HttpStatusCode } from 'axios';
import { UpdateAppointmentStatusDocument } from '@/generated/backendGraphql';

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
      const updateResponse = await graphqlRequestClient.request(UpdateAppointmentStatusDocument, {...req.body, Id: req.query.id})
      res.status(HttpStatusCode.Ok).json({ message: 'Appointment updated successfully, you will wait for decision', data: updateResponse });
    } catch (error) {
        console.log("error")
        console.log(error)
      res.status(HttpStatusCode.InternalServerError).json({ error: 'Failed to sign up' });
    }
  } else {
    res.status(HttpStatusCode.MethodNotAllowed).json({ error: 'Method Not Allowed' });
  }
}
