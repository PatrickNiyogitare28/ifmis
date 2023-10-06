import { Message } from "@/generated/graphql"
import axiosInstance from "@/lib/axios"
import downloadReport from "@/utils/downloadReport"
import formatTimestampToDate from "@/utils/formatTime"
import generateRandomNameId from "@/utils/randomId"
import { useEffect, useState } from "react"

export default function useFetchUserMessages(){
    const [messages, setMessages] = useState<Message[]>([])
    const fetchUserMessages = async() => {
        await axiosInstance.get(`/messages/admin`)
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

    const handleDownloadReport = () => {
        const data:any = [
            ["Name", "Email", "Phone", "Message", "Message Category", "Time","Status"],
          ];

          messages.forEach((msg) => {
            const row = [msg.User.FullName, msg.User.Email, msg.User.Phone, msg.Message, msg.Type, formatTimestampToDate(msg.CreatedAt as string), msg.Status]
            data.push(row);
          })
      
         downloadReport(data, "messages-"+generateRandomNameId())
    }

    useEffect(() => {
        fetchUserMessages();
    },[])

    const refetch = () => fetchUserMessages();
    return {
        messages,
        refetch,
        handleDownloadReport
    }
}