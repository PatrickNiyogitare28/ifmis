import { Appointment, User } from "@/generated/graphql"
import axiosInstance from "@/lib/axios"
import { TSessionUser } from "@/types/user"
import downloadReport from "@/utils/downloadReport"
import formatTimestampToDate from "@/utils/formatTime"
import generateRandomNameId from "@/utils/randomId"
import { useEffect, useState } from "react"

export default function useFetchUserAppointments({User}: {User: TSessionUser}){
    const [appointments, setAppointments] = useState<Appointment[]>([])
    const fetchAppointments = async() => {
        await axiosInstance.get(`/appointments/user/${User.Id}`)
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

    const handleDownloadReport = () => {
        const data:any = [
            ["Title", "Message", "Appointment Category", "Time", "Status"],
          ];

          appointments.forEach((app) => {
            const row = [app.Title, app.Message, app.Type,  formatTimestampToDate(app.Time as string), app.Status]
            data.push(row);
          })
      
         downloadReport(data, "appointments-"+generateRandomNameId())
    }

    useEffect(() => {
        fetchAppointments();
    },[])

    const refetch = () => fetchAppointments();
    return {
        appointments,
        refetch,
        handleDownloadReport
    }
}