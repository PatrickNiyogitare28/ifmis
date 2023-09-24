import Dashboard from '@/components/Layouts/Dashboard';
import React from 'react';
import AdminMessagesList from '@/components/AdminMessges';
import { GetServerSideProps } from 'next';
import { TSessionUser } from '@/types/user';
import getSessionUser from '@/utils/get-user';

export default function AdminMessagesPage(props: any){
    return (
       <Dashboard User={props.SessionUser as TSessionUser}>
           <AdminMessagesList User={props.SessionUser as TSessionUser} />
       </Dashboard>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const accessToken = req.cookies.accessToken;
    if (!accessToken) {
      return {
        redirect: {
          destination: '/auth/login',
          permanent: false,
        },
      };
    }
    const SessionUser = getSessionUser(accessToken);
    if (!SessionUser) {
      return {
        redirect: {
          destination: '/auth/login',
          permanent: false,
        },
      };
    }
    console.log("In session getting...");
    console.log(SessionUser)
    return {
      props: {
        SessionUser
      },
    };
  };