import axiosInstance from "@/lib/axios"
import { useRouter } from "next/router"

export default function useLogout(){
 const router = useRouter();
 const handleLogout = async () => {
    await axiosInstance.get('/auth/logout')
    router.replace('/auth/login')
 } 
 return {
    handleLogout
 }
}