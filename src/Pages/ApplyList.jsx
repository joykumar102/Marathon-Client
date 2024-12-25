import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import { MdDeleteForever } from 'react-icons/md';
import { RxUpdate } from 'react-icons/rx';
// import { useLoaderData } from 'react-router-dom';

const ApplyList = () => {

    // const apply = useLoaderData();
    // const { _id, title, startRegistrationDate, endRegistrationDate, marathonStartDate, location, runningDistance, description, photo, newDate } = apply;
    const { user } = useAuth();
    const [apply, setAplly] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/register-apply?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setAplly(data))
    }, [user?.email]);


    return (
        <div>
            <div className='py-8'>
                <h2 className='text-2xl text-center  text-gray-600 font-bold'>Maratho Register List</h2>
                <hr className='w-[250px] mt-1 border-2 border-sky-400 mx-auto' />
            </div>
            <div className="max-w-6xl mx-auto">
                <table className="table ">

                    <thead>
                        <tr className='text-xl'>

                            <th>Name</th>
                            <th>TItle</th>
                            <th>Marathon Start Date</th>
                            <th>Delete/Update</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className=''>



                        {
                            apply.map(app => <tr key={app.register_id}
                                className=''>
                                
                                <td>
                                    <div className="flex items-center gap-3">

                                        <div className='space-y-5'>
                                            <div className="font-bold  text-xl">{app.firstName} {app.lastName} </div>
                                            <div className="text-lg opacity-50">Contact: {app.contactNumber}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {app.title}
                                </td>
                                <td>{app.marathonStartDate}</td>

                                <th className='space-x-5'>
                                    <button className='btn bg-white hover:bg-sky-300'><MdDeleteForever /></button>
                                    <button className="btn bg-white hover:bg-sky-300"><RxUpdate /></button>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ApplyList;