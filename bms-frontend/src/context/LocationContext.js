import { createContext, useEffect, useState } from "react";

const LocationContext = createContext()

export const LocationProvid = ({children}) => {

    const[location, setLocation] = useState(null);
    const[loading, setLoading] = useState(true);
    const [ error, setError] = useState(null);

    useEffect(()=>{


        // Logic to fetch and set location
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const {latitude, longitude} = position.coords;
                fetchLocationData(latitude, longitude);
            },
            ()=>{
                setError("Unable to retrieve your location");
                setLoading(false);
            }
        )
    },[])
    return(
        <LocationContext.Provider value={{location, loading, error}}>
            {children}
        </LocationContext.Provider>
    )
}