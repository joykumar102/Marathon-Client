import React from 'react';
import { Link } from 'react-router-dom';

const LimitCardShow = ({addCard}) => {

    const {_id, title, startRegistrationDate, endRegistrationDate, marathonStartDate, location, runningDistance, description, photo, newDate} = addCard;
    return (
        <div className='w-11/12 mx-auto '>
              <div className="card bg-base-100  shadow-xl ">
               
                <div className="card-body space-y-5">
                    <h2 className="card-title font-bold"> Title: {title}</h2>
                    <p className='text-xl '>Location: {location}</p>
                    <p className='text-xl '>Registration Dates: {newDate}</p>
                    <div className="">
                        <Link to={`/MarathonsDetails/${_id}`}> <button className="btn w-full px-5 text-white bg-sky-500">See Details</button></Link>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LimitCardShow;