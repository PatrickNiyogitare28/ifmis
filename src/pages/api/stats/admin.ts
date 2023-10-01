import { NextApiRequest, NextApiResponse } from 'next';
import { GetAdminStatisticsDocument, GetAdminStatisticsQuery, GetAdminVerifiedUsersStatsDocument, GetAdminVerifiedUsersStatsQuery } from '@/generated/graphql';
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
      const stats: GetAdminStatisticsQuery = await graphqlRequestClient.request(GetAdminStatisticsDocument)
      const appointments = stats.Appointment_aggregate.aggregate?.count;
      const messages = stats.Message_aggregate.aggregate?.count;
      const allUsers = stats.User.length;
      const organizations = stats.User_aggregate.aggregate?.count as number;
      const clients = allUsers -  organizations;

      // verified accounts stats
      const accountsStats: GetAdminVerifiedUsersStatsQuery = await graphqlRequestClient.request(GetAdminVerifiedUsersStatsDocument)
      const verifiedAccounts = accountsStats.User_aggregate.aggregate?.count as number;
      const nonVerifiedAccounts = allUsers - verifiedAccounts;

      const statsData = {
        appointments,
        messages,
        allUsers,
        organizations,
        clients,
        verifiedAccounts,
        nonVerifiedAccounts
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
