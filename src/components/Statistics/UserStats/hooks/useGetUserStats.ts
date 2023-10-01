import axiosInstance from "@/lib/axios";
import { useEffect, useState } from "react";

interface IStat  {
    allAppointments: number | 0,
    approvedAppointment: number | 0,
    rejectedAppointments: number | 0,
    allMessages: number | 0,
    repliedMessages: number | 0,
    notRepliedMessages: number | 0,
}
export default function useGetUserStats ({userId}: {userId: string}){
    const [data, setData] = useState<IStat>({allAppointments: 0, approvedAppointment: 0, rejectedAppointments: 0, allMessages: 0, repliedMessages: 0,notRepliedMessages: 0});

    useEffect(() => {
        getStats();
    },[])

    const getStats = () => {
        axiosInstance.get('/stats/user/'+userId)
        .then((data) => {
            setData(data?.data?.data);
        })
    }

    return {
        data
    }
}