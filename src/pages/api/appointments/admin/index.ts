import { NextApiRequest, NextApiResponse } from 'next';
import {GetAppointmentsForAdminDocument} from '@/generated/graphql';
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
      const appointmentResponses = await graphqlRequestClient.request(GetAppointmentsForAdminDocument)
      res.status(HttpStatusCode.Ok).json({ message: 'Appointments fetched successfully', data: appointmentResponses });
    } catch (error) {
        console.log(error)
      res.status(HttpStatusCode.InternalServerError).json({ error: 'Failed to fetch data' });
    }
  } else {
    res.status(HttpStatusCode.MethodNotAllowed).json({ error: 'Method Not Allowed' });
  }
}
