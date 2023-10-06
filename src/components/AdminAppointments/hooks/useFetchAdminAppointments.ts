import { useEffect, useState } from "react"
import { Appointment, User } from "@/generated/graphql"
import axiosInstance from "@/lib/axios"
import { TSessionUser } from "@/types/user"
import * as XLSX from 'xlsx';
import formatTimestampToDate from "@/utils/formatTime";
import downloadReport from "@/utils/downloadReport";
import generateRandomNameId from "@/utils/randomId";

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

    const handleDownloadReport = () => {
        const data:any = [
            ["Name", "Phone", "Email", "Appointment", "Reason", "Appointment category", "Time", "Status"],
          ];

          appointments.forEach((app) => {
            const row = [app.User.FullName, app.User.Phone, app.User.Email, app.Title, app.Message, app.Type,  formatTimestampToDate(app.Time as string), app.Status]
            data.push(row);
          })
      
         downloadReport(data, "appointments-"+generateRandomNameId())
    }
    const refetch = () => fetchAppointments();
    return {
        appointments,
        refetch,
        handleDownloadReport
    }
}