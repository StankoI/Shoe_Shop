import { useEffect, useState } from "react";
import { MOBILE_BREAKPOINT } from "../constants/deviceSize";

export type DeviceType = 'pc' | 'mobile'

const useDevice = (): DeviceType=> {
    
    const getDeviceType = (): DeviceType =>{
        return window.innerWidth < MOBILE_BREAKPOINT ? 'mobile' : 'pc'; 
    }

    const[device, setDevice] = useState<DeviceType>(getDeviceType());

    useEffect(() => {
        const handleResize = () => {
            setDevice(getDeviceType())
        }
        window.addEventListener('resize', handleResize);

        // return removeEventListener('resize', handleResize);

    },[]);

    return device;
}

export default useDevice;