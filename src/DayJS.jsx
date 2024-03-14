import React from 'react';
import dayjs from 'dayjs';

const DayJS = () => {
    const currentDateTime = dayjs().format('dddd, MMMM D, YYYY HH:mm:ss');
    return <p>Current Date and Time: {currentDateTime}</p>;
};
export default DayJS;