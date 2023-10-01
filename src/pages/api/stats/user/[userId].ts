import { NextApiRequest, NextApiResponse } from 'next';
import { GetAdminStatisticsDocument, GetAdminStatisticsQuery, GetAdminVerifiedUsersStatsDocument, GetAdminVerifiedUsersStatsQuery, GetAllUserAppointmentsDocument, GetAllUserAppointmentsQuery, GetAllUserMessagesDocument, GetAllUserMessagesQuery, GetAllUserStatusAppointmentsDocument, GetAllUserStatusAppointmentsQuery, GetAllUserStatusMessagesDocument } from '@/generated/graphql';
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
    const UserId = req.query.userId;
    try {
      const allAppointmentsQuery: GetAllUserAppointmentsQuery = await graphqlRequestClient.request(GetAllUserAppointmentsDocument, {UserId})
      const approvedQuery: GetAllUserStatusAppointmentsQuery = await graphqlRequestClient.request(GetAllUserStatusAppointmentsDocument, {UserId, Status: 'APPROVED'})
      const rejectedQuery: GetAllUserStatusAppointmentsQuery = await graphqlRequestClient.request(GetAllUserStatusAppointmentsDocument, {UserId, Status: 'REJECTED'})
      const allMessagesQuery: GetAllUserMessagesQuery = await graphqlRequestClient.request(GetAllUserMessagesDocument, {UserId});
      const repliedMessagesQuery: GetAllUserMessagesQuery = await graphqlRequestClient.request(GetAllUserStatusMessagesDocument, {UserId, Status: 'REPLIED'});
      const notRepliedMessagesQuery: GetAllUserMessagesQuery = await graphqlRequestClient.request(GetAllUserStatusMessagesDocument, {UserId, Status: 'NOT REPLIED'});

      const statsData = {
       allAppointments: allAppointmentsQuery.Appointment_aggregate.aggregate?.count,
       approvedAppointment: approvedQuery.Appointment_aggregate.aggregate?.count,
       rejectedAppointments: rejectedQuery.Appointment_aggregate.aggregate?.count,
       allMessages: allMessagesQuery.Message_aggregate.aggregate?.count,
       repliedMessages: repliedMessagesQuery.Message_aggregate.aggregate?.count,
       notRepliedMessages:  notRepliedMessagesQuery.Message_aggregate.aggregate?.count
      }

      res.status(HttpStatusCode.Ok).json({ message: 'Stats fetched successfully', data: statsData });
    } catch (error) {
        console.log(error)
      res.status(HttpStatusCode.InternalServerError).json({ error: 'Failed to fetch data' });
    }
  } else {
    res.status(HttpStatusCode.MethodNotAllowed).json({ error: 'Method Not Allowed' });
  }
}
