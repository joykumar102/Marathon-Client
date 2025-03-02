import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {

    const update = useLoaderData();
    const { _id, title, startRegistrationDate, endRegistrationDate, marathonStartDate, location, runningDistance, description, photo, newDate } = update;

    const [startDate, setStartDate] = useState(new Date());

    const handleUpdate = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const startRegistrationDate = toString(e.target.startRegistrationDate.value);
        const endRegistrationDate = e.target.endRegistrationDate.value;
        const marathonStartDate = e.target.marathonStartDate.value;
        const location = e.target.location.value;
        const runningDistance = e.target.runningDistance.value;
        const description = e.target.description.value;
        const photo = e.target.photo.value;
        const newDate = startDate;
     

        const updatedData = {_id, title, startRegistrationDate, endRegistrationDate, marathonStartDate, location, runningDistance, description, photo, newDate }
        console.log(updatedData);

        // send data to the server 
        fetch(`https://assignment-11-server-zeta-seven.vercel.app/addMarathon/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Marathon Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })


    }

    return (
        <div className='py-20'>
            <div className='w-11/12 mx-auto border py-20  bg-blue-400 bg-gradient-to-r from-sky-300  to-pink-200'>

                <div className='space-y-5 px-5 py-10 text-center border lg:w-[700px] mx-auto'>
                    <h2 className='text-3xl font-bold'>
                        Update Marathon

                    </h2>

                    
                </div>

                <form onSubmit={handleUpdate}>
                    <div className='grid grid-cols-2 w-10/12 mx-auto gap-5 py-10'>

                        <div>
                            <span className="label-text text-lg">Title</span>
                            <input
                                type="text"
                                name='title'
                                placeholder="Title"
                                defaultValue={title}
                                className="input input-bordered input-info w-full" />
                        </div>
                        <div className='grid grid-cols-1'>
                            <span className="label-text text-lg">Start Registration Date</span>
                            <input
                                type="text"
                                name='startRegistrationDate'
                                placeholder="20-10-2024"
                                defaultValue={startRegistrationDate}
                                disabled={true}
                                className="input input-bordered input-info w-full font-extrabold text-green-800" />
                           
                        </div>
                        <div className='grid grid-cols-1'>
                            <span className="label-text text-lg">End Registration Date
                            </span>
                            <input
                                type="text"
                                name='endRegistrationDate'
                                placeholder=" 20-05-2025"
                                disabled={true}
                                defaultValue={endRegistrationDate}
                                className="input input-bordered input-info w-full font-extrabold text-green-800" />
                            {/* <DatePicker
                                      className='border p-2 rounder-xl w-full '
                                      selected={startDate}
                                      onChange={date => setStartDate(date)}
                                  ></DatePicker> */}
                        </div>
                        <div className='grid grid-cols-1'>
                            <span className="label-text text-lg">Marathon Start Date
                            </span>
                            <input
                                type="text"
                                name='marathonStartDate'
                                placeholder="20-08-2025"
                                defaultValue={marathonStartDate}
                                disabled={true}
                                className="input input-bordered input-info w-full font-extrabold text-green-800" />
                            {/* <DatePicker
                                      className='border p-2 rounder-xl w-full '
                                      selected={startDate}
                                      onChange={date => setStartDate(date)}
                                  ></DatePicker> */}
                        </div>
                        <div>
                            <span className="label-text text-lg">Location </span>
                            <input
                                type="text"
                                name='location'
                                placeholder="Location"
                                defaultValue={location}
                                className="input input-bordered input-info w-full" />
                        </div>
                        <div className=''>
                            <span className="label-text text-lg">Running Distance</span>

                            <select className="select select-info w-full " name='runningDistance'>
                                <option disabled selected>Select Distance</option>
                                <option>25km</option>
                                <option>10km</option>
                                <option>3km</option>
                            </select>
                        </div>
                        <div>
                            <span className="label-text text-lg">Description</span>
                            <input
                                type="text"
                                name='description'
                                placeholder="Description "
                                defaultValue={description}
                                className="input input-bordered input-info w-full" />
                        </div>
                        <div>
                            <span className="label-text text-lg">Image</span>
                            <input
                                type="text"
                                name='photo'
                                placeholder="image URL"
                                defaultValue={photo}
                                className="input input-bordered input-info w-full " />
                        </div>
                        <div className='grid grid-cols-1'>
                            <span className="label-text text-lg">New Date</span>
                            {/* <input
                                      type="text"
                                      name='newDate'
                                      placeholder="New Date"
                                      className="input input-bordered input-info w-full " /> */}

                            <DatePicker
                                className='border p-2 rounder-xl w-full '
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                            ></DatePicker>
                        </div>



                    </div>
                    <div className='px-24'>

                        <input type="submit" value="Update" className='btn hover:bg-blue-700 bg-gradient-to-r from-blue-700  to-red-500 w-full text-white border-none' />

                    </div>
                </form>


            </div>
        </div>
    );
};

export default Update;