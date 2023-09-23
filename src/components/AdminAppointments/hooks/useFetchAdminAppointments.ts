import { Appointment, User } from "@/generated/graphql"
import axiosInstance from "@/lib/axios"
import { TSessionUser } from "@/types/user"
import { useEffect, useState } from "react"

export default function useFetchAdminAppointments(){
    const [appointments, setAppointments] = useState<Appointment[]>([])
    const fetchAppointments = async() => {
        await axiosInstance.get(`/appointments/admin`)
        .then((data) => {
            console.log("axios success")
            console.log(data.data.data);
            setAppointments(data.data.data.Appointment);
        })
        .catch((e)=>{
            console.log("axios error")
            console.log(e)
        })
    }

    useEffect(() => {
        fetchAppointments();
    },[])

    const refetch = () => fetchAppointments();
    return {
        appointments,
        refetch
    }
}