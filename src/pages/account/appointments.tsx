import Dashboard from '@/components/Layouts/Dashboard';
import UserAppointmentsList from '@/components/UserAppointments';
import { TSessionUser } from '@/types/user';
import getSessionUser from '@/utils/get-user';
import { GetServerSideProps } from 'next';
import React from 'react';
import { Toaster } from 'react-hot-toast';

export default function AppointmentsPage(props: any){
    const SessionUser= props.SessionUser as TSessionUser;
    return (
       <Dashboard User={SessionUser}>
           <Toaster />
            <UserAppointmentsList User={SessionUser}/>
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