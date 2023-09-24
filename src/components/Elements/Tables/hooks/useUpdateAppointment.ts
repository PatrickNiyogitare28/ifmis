import axiosInstance from "@/lib/axios"
import toast from "react-hot-toast"

export default function useUpdateAppointment({refetch}: {refetch: () => void;}){
    const handleChangeStatus = (Status: 'APPROVED' | 'REJECTED' | 'PENDING', Id: string) => {
        axiosInstance.put(`/appointments/${Id}`, {Status})
        .then((data) => {
            refetch();
            toast.success("Appointment updated successfully")
        })
        .catch((e) => {
            toast.error("Appointment not updated, error occurred")
        })
    }
    return {
        handleChangeStatus
    }
}