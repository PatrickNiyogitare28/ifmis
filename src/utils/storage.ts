import axiosInstance from '@/lib/axios'
import { isBrowser } from '.'

export const storage = {
    getAccessToken: () => {
        if (!isBrowser) return
        if (localStorage.getItem('app_token') !== null)
            return localStorage.getItem('app_token')
    },
    setAccessToken: (token: string) => {
        localStorage.setItem('app_token', token)
        axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    getRefreshToken: () => {
        if (!isBrowser) return
        if (localStorage.getItem('app_refreshToken') !== null)
            return localStorage.getItem('app_refreshToken')
    },
    setRefreshToken: (token: string) => {
        localStorage.setItem('app_refreshToken', token)
    },
    clear: () => {
        if (!isBrowser) return
        localStorage.removeItem('app_token')
        localStorage.removeItem('app_refreshToken')
    }
}