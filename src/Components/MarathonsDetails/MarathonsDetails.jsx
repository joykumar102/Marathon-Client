import React from 'react';
import { Link,  useLoaderData } from 'react-router-dom';
import DetailsCard from '../DetailsCard/DetailsCard';

const MarathonsDetails = () => {


    const marathonDetails = useLoaderData();
    console.log(marathonDetails)
    const { _id, title, startRegistrationDate, endRegistrationDate, marathonStartDate, location, runningDistance, description, photo, newDate } = marathonDetails;

    return (
        <div className="card card-compact bg-base- shadow-xl max-w-3xl mx-auto my-10 ">
            <figure>
                <img
                    className='p-5 rounded-3xl'
                    src={photo}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className='text-xl font-bold'>Title: {title}</h2>

                <div className='flex justify-between'>
                    <p className='text-lg'>Registration Start Dates: {startRegistrationDate}</p>

                    <p className='text-lg'>Registration Ends Dates: { endRegistrationDate}</p>
                </div>
                <Link to={`/RegisterFrom/${_id}`}><button className='btn w-full bg-sky-400 text-white'>Register </button></Link>


            </div>
        </div>


    );
};

export default MarathonsDetails;