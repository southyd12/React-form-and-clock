import React, {useState} from 'react'

// const timezones = [
//   "Europe/London",
//   // "Africa/Addis_Ababa",
//   // "America/Buenos_Aires",
//   // "Asia/Tokyo",
//   // "Australia/Sydney"
// ];

// const locales = [
//   "en-GB",
//   // "ko-KR",
//   // "ar-EG"
// ];

function Clock({
  date,
  locale,
  timezone,
  options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  }
}) {
  // options.timezone = timezone;
  const formatter = Intl.DateTimeFormat(locale, options);
  return (
    <>
      <dl>
        <dt>
          {timezone} ({locale})
        </dt>
        <dd>{formatter.format(date)}</dd>
      </dl>
    </>
  );
}


export default Clock