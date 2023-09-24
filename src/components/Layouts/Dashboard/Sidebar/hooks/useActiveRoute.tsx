import React from 'react';
import { useRouter } from 'next/router';

export default function useActiveRoute(){
    const route = useRouter();
    const checkIsActiveRoute = (routeName: string, strict: boolean, isHome?: boolean) => {
        console.log(routeName+" "+strict);
        console.log("testing...")
        // alert(route.pathname);
        console.log(isHome)
        if(!strict){
            if(route.pathname.includes(routeName)) return true;
            return false;
        }
        if(strict){
            if(route.pathname === routeName){
                return true;
            }
            return false;
        }
    }
    const onRoute = (routeName: string) => {
        route.push(routeName);
    }

    return {
        checkIsActiveRoute,
        onRoute
    }
}