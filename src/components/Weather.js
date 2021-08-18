import React, { useState, useEffect } from 'react'

export default function Weather() {
    const [weatherInfo, setWeatherInfo] = useState();

    useEffect(()=>{
        async function getInfo() {
          //fetch api, here mock up some data

          const data = await new Promise(resolve => 
            setTimeout(function () {
                resolve({ temperature: 17 }) ;
            }, 2000)           
          );

          setWeatherInfo(data);
        }
        getInfo();
    }, []);

    if (!weatherInfo) return <p>Loading...</p>;

    return (
        <div>
            <h1>Weather data</h1>
            <div>
                <strong>Temperature:</strong> <span>{weatherInfo.temperature}</span>
            
            </div>
    
        </div>
    )
}
