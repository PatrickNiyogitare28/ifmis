import Image from 'next/image'
import Login from './auth/login';
import {Toaster} from 'react-hot-toast';
import { GetServerSideProps } from 'next';
import getSessionUser from '@/utils/get-user';
import Admin from './admin';
import Account from './account';
import { TSessionUser } from '@/types/user';
import { useRouter } from 'next/router';
export default function Home(props:any) {
  const router = useRouter();
  const SessionUser= props.SessionUser as TSessionUser;

  if(SessionUser.Role === 'STANDARD USER'){
   return <Account User={SessionUser} />
  }
  else{
    return <Admin User={SessionUser}/>
  }
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