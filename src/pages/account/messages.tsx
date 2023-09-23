import UserMessages from '@/components/UserMessages';
import Dashboard from '@/components/Layouts/Dashboard';
import { TSessionUser } from '@/types/user';
import getSessionUser from '@/utils/get-user';
import { GetServerSideProps } from 'next';
import React from 'react';
import { Toaster } from 'react-hot-toast';

export default function MessagesPage(props: any){
    return (
       <Dashboard User={props.SessionUser as TSessionUser}>
            <Toaster />
            <UserMessages User={props.SessionUser as TSessionUser}/>
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