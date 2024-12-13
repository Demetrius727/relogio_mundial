import { useState, useEffect } from 'react'

const TimeZoneClock = ({timeZone}) => {
    const [time, setTime] = useState("");
    const [continent, city] = timeZone.split("/") ? timeZone.split("/") : [timeZone, null];

    useEffect(() => {

        const intervalId = setInterval(() => {
            const date = new Date();
            const options = {
                timeZone,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            }

            const timeString = date.toLocaleTimeString("en-US", options);
            setTime(timeString);

        }, 1000)

        return () => clearInterval(intervalId);
    }, [timeZone])

  return (
    <div className='timezone'>
        <h2>{continent}</h2>
        <h2>{city ? city.replace(/_/g, " ") : ""}</h2>
        <h3>{time}</h3>
    </div>
  )
}

export default TimeZoneClock