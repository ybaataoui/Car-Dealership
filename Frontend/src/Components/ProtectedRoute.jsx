import { Navigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import api from "../api"
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants"
import { useState, useEffect } from "react"

function ProtectedRoute({ children }) {
    const [isAuthorized, setAuthorized] = useState(null)

    useEffect(() => {
        auth().catch(() => setAuthorized(false))
    }, [])

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN)

        try {
            const res = await api.post("/api/token/refresh/", { refresh: refreshToken });
            if (res.status == 200) {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                setAuthorized(true)
            } else {
                setAuthorized(false)
            }

        } catch (error) {
            console.log(error);
            setAuthorized(false)
        }
    }

    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN)
        if (!token) {
            setAuthorized(false)
            return
        }
        const decode = jwtDecode(token)
        const tokenExpiration = decode.exp
        const now = Date.now() / 1000

        if (tokenExpiration < now) {
            await refreshToken()
        } else {
            setAuthorized(true)
        }
    }

    if (isAuthorized === null) {
        return <div>Loading...</div>
    }

    return isAuthorized ? children : <Navigate to="/login" /> //if it is authorized go to the children if not return to login page

}

export default ProtectedRoute