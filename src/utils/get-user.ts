import { decodeToken } from "./token";

export default function getSessionUser(token: string){
    const user = decodeToken(token);
    return user;
}