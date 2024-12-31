import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const HomeMarathonDetails = () => {
    const marathonDetails = useLoaderData();
    const {
        _id,
        title,
        marathonStartDate,
        startRegistrationDate,
        endRegistrationDate,
        location,
        runningDistance,
        description,
        photo,
    } = marathonDetails;
    return (
        <div className="card card-compact bg-base-100 max-w-5xl mx-auto shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt="" />
            </figure>
            <div className="card-body space-y-5">
                <h2 className="card-title text-2xl font-bold">Title: {title}</h2>
               <div className='flex justify-between'>
               <p className='text-lg font-semibold text-gray-500'>Start Registration Date: {startRegistrationDate}</p>
               <p className='text-lg font-semibold text-gray-500'>End Registration Date: {endRegistrationDate}</p> 
               </div>
               <div  className='flex justify-between'>
               <p className='text-lg font-semibold text-gray-500'>MarathonStart Date: {marathonStartDate}</p>
               <p className='text-lg font-semibold text-gray-500'>RunningDistance: {runningDistance}</p>
               </div>
               <p className='text-lg font-semibold text-gray-500'>Location: {location}</p>
               <p className='text-lg font-semibold text-gray-500'>Description: {description}</p>
                <div className="w-full">
                <Link to={`/MarathonsDetails/${_id}`}><button className="btn w-full bg-sky-300">Register Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HomeMarathonDetails;