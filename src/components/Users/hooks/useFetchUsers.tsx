import { User } from "@/generated/graphql"
import axiosInstance from "@/lib/axios"
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

    useEffect(() => {
        fetchUsers();
    },[])

    const refetch = () => fetchUsers();
    return {
        users,
        refetch
    }
}