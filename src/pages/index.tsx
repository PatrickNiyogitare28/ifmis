import Image from 'next/image'
import Login from './auth/signin';
import {Toaster} from 'react-hot-toast';
export default function Home() {
  return (
    <div>
      <Toaster />
      <Login />
    </div>
      )
}
