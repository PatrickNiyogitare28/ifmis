import axiosInstance from "@/lib/axios"
import toast from "react-hot-toast"

export default function useUpdateAppointment({refetch}: {refetch: () => void;}){
    const handleReply = () => {
        axiosInstance.put(`/messages/${Id}/replay`, {Status})
        .then((data) => {
            refetch();
            toast.success("Appointment updated successfully")
        })
        .catch((e) => {
            toast.error("Appointment not updated, error occurred")
        })
    }
    return {
        handleReply
    }
}