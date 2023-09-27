import axiosInstance from "@/lib/axios"
import toast from "react-hot-toast"

export default function useUpdateUserStatus({refetch,}: {refetch: () => void; }){
    const handleStatusUpdate = (value: {
        IsActive: boolean,
        UserId: string
    }) => {
        axiosInstance.put(`/users/${value.UserId}`, {IsActive: value.IsActive})
        .then((data) => {
            refetch();
            toast.success("User status updated successfully")
        })
        .catch((e) => {
            toast.error("User status not updated, error occurred")
        })
    }
    return {
        handleStatusUpdate
    }
}