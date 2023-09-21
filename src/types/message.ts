import { User } from "./user"

export type Message = {
    Id: string,
    User: User,
    Status: 'REPLIED' | 'NOT REPLIED',
    Message: string,
    Time: string,
}