import { defaultRoles } from "../roles";

export default function handleLogin({email, password}: {email: string, password: string}){
    let isAuthorized = false;
    let user = {};
    defaultRoles.forEach((role) => {
        if(role.email == email){
            if(password === password) {
                isAuthorized = true;
                return user = {name: role.name, email: role.email, role: role.role}
            };
        }
    })

    if(!isAuthorized) return {success:  false, message: 'Wrong credentials'}
    return {success: true, message: 'Logged In successfully', user}
}