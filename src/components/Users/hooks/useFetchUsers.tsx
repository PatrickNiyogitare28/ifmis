import { User } from "@/generated/graphql"
import axiosInstance from "@/lib/axios"
import downloadReport from "@/utils/downloadReport"
import formatTimestampToDate from "@/utils/formatTime"
import generateRandomNameId from "@/utils/randomId"
import { useEffect, useState } from "react"

export default function useFetchUsers(){
    const [users, setUsers] = useState<User[]>([])
    const fetchUsers = async() => {
        await axiosInstance.get('/users')
        .then((data) => {
            console.log("axios success")
            console.log(data.data.data);
            setUsers(data.data.data.User);
        })
        .catch((e)=>{
            console.log("axios error")
            console.log(e)
            console.log(e)
        })
    }

    const handleDownloadReport = () => {
        const data:any = [
            ["Name", "Email", "Phone", "Role", "Account Creation Date", "Status"],
          ];

          users.forEach((usr) => {
            const row = [usr.FullName, usr.Email, usr.Phone, usr.Role, formatTimestampToDate(usr.CreatedAt as string), usr.IsActive ? 'VERIFIED' : 'NOT VERIFIED']
            data.push(row);
          })
      
         downloadReport(data, "users-"+generateRandomNameId())
    }

    useEffect(() => {
        fetchUsers();
    },[])

    const refetch = () => fetchUsers();
    return {
        users,
        refetch,
        handleDownloadReport
    }
}