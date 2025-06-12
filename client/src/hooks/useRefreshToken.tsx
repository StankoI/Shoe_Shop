import axios from "axios"
import useAuth from "./useAuth"


const useRefreshToken = () => {
    const { setAuth } = useAuth()

    const refresh = async () => {
        const responce = await axios.get('http://localhost:8080/client/refresh', {
            withCredentials: true
        })

        setAuth((prev) => {
            console.log(responce.data.accessToken)
            return { ...prev, accessToken: responce.data.accessToken }
        })

        return responce.data.accessToken
    }

    return refresh;
}

export default useRefreshToken;