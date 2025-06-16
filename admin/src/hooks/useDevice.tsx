import { useEffect, useState } from "react";


export type DeviceType = 'pc' | 'mobile'

const useDevice = (): DeviceType=> {
    
    const getDeviceType = (): DeviceType =>{
        return window.innerWidth < 768 ? 'mobile' : 'pc'; 
    }

    const[device, setDevice] = useState<DeviceType>(getDeviceType());

    useEffect(() => {
        const handleResize = () => {
            setDevice(getDeviceType())
        }
        window.addEventListener('resize', handleResize);
    },[]);

    return device;
}

export default useDevice;