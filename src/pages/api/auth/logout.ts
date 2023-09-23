import { NextApiRequest, NextApiResponse } from 'next';
import { HttpStatusCode } from 'axios';

type Data = {
  error?: string;
  message?: string;
  data?: unknown;
  authToken?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    try {
      res.setHeader('Set-Cookie', 'accessToken=; Path=/; HttpOnly; Expires=Thu, 01 Jan 1970 00:00:00 GMT');
      res.status(HttpStatusCode.Ok).json({ message: 'Logged out successfully' });
    } catch (error) {
      res.status(HttpStatusCode.InternalServerError).json({ error: 'Failed to logout' });
    }
  } else {
    res.status(HttpStatusCode.MethodNotAllowed).json({ error: 'Method Not Allowed' });
  }
}