import React from 'react';
import { Link } from 'react-router-dom';

const AddMarathonCard = ({addMarathon}) => {

    const {_id, title, startRegistrationDate, endRegistrationDate, marathonStartDate, location, runningDistance, description, photo, newDate} = addMarathon;
    return (
        <div className="card card-compact bg-base- shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className='text-xl font-bold'>Title: {title}</h2>
                <h4 className='text-lg'>Location: {location}</h4>
                <p className='text-lg'>Registration Start Dates: {startRegistrationDate}</p>

                <p className='text-lg'>Registration Ends Dates: {endRegistrationDate}</p>
                
                    <Link to={`/MarathonsDetails/${_id}`}><button className="btn w-full btn-primary">See Details</button></Link>
                    
                
            </div>
        </div>
    );
};

export default AddMarathonCard;