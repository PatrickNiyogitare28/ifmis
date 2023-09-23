import { Message } from "@/generated/graphql"
import axiosInstance from "@/lib/axios"
import { TSessionUser } from "@/types/user"
import { useEffect, useState } from "react"

export default function useFetchUserMessages({User}: {User: TSessionUser}){
    const [messages, setMessages] = useState<Message[]>([])
    const fetchUserMessages = async() => {
        await axiosInstance.get(`/messages/user/${User.Id}`)
        .then((data) => {
            console.log("axios success")
            console.log(data.data.data);
            setMessages(data.data.data.Message);
        })
        .catch((e)=>{
            console.log("axios error")
            console.log(e)
        })
    }

    useEffect(() => {
        fetchUserMessages();
    },[])

    const refetch = () => fetchUserMessages();
    return {
        messages,
        refetch
    }
}