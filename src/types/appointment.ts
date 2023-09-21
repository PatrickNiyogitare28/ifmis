import { AppointmentType } from "./appointment-type"
import { User } from "./user"

export type Appointment = {
    Id: string,
    User: User,
    Status: 'PENDING' | 'APPROVED' | 'REJECTED',
    Reason: string,
    Time: string,
    AppointmentType: AppointmentType,
}