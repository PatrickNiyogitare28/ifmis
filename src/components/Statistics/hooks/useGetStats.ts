import axiosInstance from "@/lib/axios";
import { useEffect, useState } from "react";

interface IStat  {
    appointments: number | 0,
    messages: number | 0,
    allUsers: number | 0,
    organizations: number | 0,
    clients: number | 0,
    verifiedAccounts: number | 0,
    nonVerifiedAccounts: number | 0
}
export default function useGetStats (){
    const [data, setData] = useState<IStat>({appointments: 0, messages: 0, allUsers: 0, organizations: 0, clients: 0,verifiedAccounts: 0, nonVerifiedAccounts: 0});

    useEffect(() => {
        getStats();
    },[])

    const getStats = () => {
        axiosInstance.get('/stats/admin')
        .then((data) => {
            setData(data?.data?.data);
        })
    }

    return {
        data
    }
}