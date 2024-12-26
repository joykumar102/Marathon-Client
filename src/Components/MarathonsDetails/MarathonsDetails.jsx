import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const MarathonsDetails = () => {
    const marathonDetails = useLoaderData();
    const {
        _id,
        title,
        startRegistrationDate,
        endRegistrationDate,
        location,
        runningDistance,
        description,
        photo,
    } = marathonDetails;

    // Correctly parse and convert the marathonStartDate
    const marathonStartDate = '2025-08-20'; // Example date in YYYY-MM-DD format
    const marathonStartTime = new Date(marathonStartDate).getTime();

    // Calculate current time and remaining time
    const currentTime = Date.now();
    const timeRemaining = Math.max((marathonStartTime - currentTime) / 1000, 0); // Avoid negative values

    // Formatter for countdown time
    const formatTime = (remainingTime) => {
        const days = Math.floor(remainingTime / (60 * 60 * 24));
        const hours = Math.floor((remainingTime % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((remainingTime % (60 * 60)) / 60);

        return `${days}d ${hours}h ${minutes}m`;
    };

    return (
      <div className=''>
        
          <div className="card card-compact bg-base-100 shadow-xl max-w-3xl mx-auto my-10">
          <div className="my-5 text-center space-y-4 text-green-600">
                    <h3 className="text-lg font-semibold">Countdown to Marathon Start:</h3>
                    {/* <p>Start Date: {new Date(marathonStartDate).toDateString()}</p> */}
                   <div className='lg:ml-[300px] sm:ml-[280px]'>
                   <CountdownCircleTimer
                   
                   isPlaying
                   duration={timeRemaining}
                   colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                   colorsTime={[timeRemaining, timeRemaining * 0.7, timeRemaining * 0.3, 0]}
                   onComplete={() => ({ shouldRepeat: false })}
               >
                   {({ remainingTime }) => <span>{formatTime(remainingTime)}</span>}
               </CountdownCircleTimer>
                   </div>
                </div>
            <figure>
                <img className="p-5 rounded-3xl" src={photo} alt="Marathon" />
            </figure>
            <div className="card-body">
                <h2 className="text-xl font-bold">Title: {title}</h2>

                <div className="flex justify-between">
                    <p className="text-lg">Registration Start Date: {startRegistrationDate}</p>
                    <p className="text-lg">Registration End Date: {endRegistrationDate}</p>
                </div>

                

                <Link to={`/RegisterFrom/${_id}`}>
                    <button className="btn w-full bg-sky-400 text-white">Register</button>
                </Link>
            </div>
        </div>
      </div>
    );
};

export default MarathonsDetails;
