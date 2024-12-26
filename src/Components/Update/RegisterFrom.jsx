// import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
// import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const RegisterFrom = () => {


   const update = useLoaderData();
   const {   firstName, lastName, contactNumber, additionalInfo } = update;
    const  navigate = useNavigate();

   const handleUpdate = (e) =>{
    const updatedData = {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        contactNumber: e.target.contactNumber.value,
        additionalInfo: e.target.additionalInfo.value,
    };

    // Ensure you have the unique ID of the application to update
    fetch(`https://assignment-11-server-zeta-seven.vercel.app/application/${update._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Marathon Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool',
                });
                navigate('/ApplyList');
            } 
        }) 
   }

    return (
        <div>
            RegisterFrom : {firstName}
            <div className='py-20'>
                <div className='w-11/12 mx-auto border py-20  bg-blue-400 bg-gradient-to-r from-sky-300  to-pink-200'>

                    <div className='space-y-5 px-5 py-10 text-center border lg:w-[700px] mx-auto'>
                        <h2 className='text-3xl font-bold'>
                            Marathon Registration Update
                        </h2>

                    </div>

                    <form onSubmit={handleUpdate}>
                        <div className='grid grid-cols-2 w-10/12 mx-auto gap-5 py-10'>
                            <div>
                                <span className="label-text text-lg">First Name</span>
                                <input
                                    type="text"
                                    name='firstName'
                                    placeholder="First Name"
                                    defaultValue={firstName}
                                    required
                                    className="input input-bordered input-info w-full" />
                            </div>
                            <div>
                                <span className="label-text text-lg">Last Name</span>
                                <input
                                    type="text"
                                    name='lastName'
                                    placeholder="Last Name"
                                    defaultValue={lastName}
                                    required
                                    className="input input-bordered input-info w-full " />
                            </div>
                            <div>
                                <span className="label-text text-lg">Contact Number</span>
                                <input
                                    type="number"
                                    name='contactNumber'
                                    placeholder="Contact Number"
                                    defaultValue={contactNumber}
                                    required
                                    className="input input-bordered input-info w-full " />
                            </div>
                            <div>
                                <span className="label-text text-lg">Additional Info</span>
                                <input
                                    type="text"
                                    name='additionalInfo'
                                    placeholder="Additional Info"
                                    defaultValue={additionalInfo}
                                    required
                                    className="input input-bordered input-info w-full " />
                            </div>



                        </div>
                        <div className='px-24'>

                            <input type="submit" value="Submit" className='btn hover:bg-blue-700 bg-gradient-to-r from-blue-700  to-red-500 w-full text-white border-none' />

                        </div>
                    </form>


                </div>
            </div>

        </div>
    );
};

export default RegisterFrom;