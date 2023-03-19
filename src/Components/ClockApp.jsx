import React, {useState, useEffect} from 'react'
import Clock from './Clock';

function ClockApp() {
  const [date, setDate] = useState(new Date());
  const [localeSelector, setLocaleSelector] = useState("en-GB")
  const [timezoneSelector, setTimezoneSelector] = useState("Europe/London")
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
    <div>
      <Clock date={date} locale={localeSelector} timezone={timezoneSelector} />
    </div>
    <button onClick={() => setLocaleSelector("en-GB") && setTimezoneSelector("Europe/London")}>GB time</button>
    <button onClick={() => setLocaleSelector("ko-KR") && setTimezoneSelector("South Korea")}>KR time</button>
    </>
  );
}

export default ClockApp