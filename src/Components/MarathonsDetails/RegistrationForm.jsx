import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2'

const RegistrationForm = () => {

    const form = useLoaderData();


    const { _id, title, startRegistrationDate, endRegistrationDate, marathonStartDate, location, runningDistance, description, photo, newDate } = form;

    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();

    // console.log(id, user);

    const registerAplication = e => {
        e.preventDefault();
        // e.target.reset();
        const title = e.target.title.value;
        const marathonStartDate = e.target.marathonStartDate.value;
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const contactNumber = e.target.contactNumber.value;
        const additionalInfo = e.target.additionalInfo.value;

        // console.log(title,  startDate, firstName, lastName, contactNumber, additionalInfo);

        const registerApply = {
            register_id: id,
            applicant_email: user.email,
            title,
            marathonStartDate,
            firstName,
            lastName,
            contactNumber,
            additionalInfo,
        }

        fetch('https://assignment-11-server-zeta-seven.vercel.app/register-apply/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(registerApply)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                        title: "Success!",
                        icon: "success",
                        draggable: true
                      });
                      navigate('/ApplyList');
                }
            })


    }
    return (
        <div className=''>
            <div className='w-11/12 mx-auto border py-20  bg-blue-400 bg-gradient-to-r from-sky-300  to-pink-200'>

                <div className='space-y-5 px-5 py-10 text-center border lg:w-[700px] mx-auto'>
                    <h2 className='text-3xl font-bold'>
                        Marathon Registration Form
                    </h2>

                </div>

                <form onSubmit={registerAplication}>
                    <div className='grid lg:grid-cols-2 w-10/12 mx-auto gap-5 py-10'>

                        <div>
                            <span className="label-text text-lg">Marathon Title</span>
                            <input
                                type="text"
                                name='title'
                                placeholder={title}
                                disabled={true}
                                defaultValue={title}
                                className="input input-bordered input-info w-full 
                                        font-bold
                                        text-xl " />
                        </div>


                        <div>
                            <span className="label-text text-lg">Marathon  Start Date </span>
                            <input
                                type="text"
                                name='marathonStartDate'
                                placeholder={marathonStartDate}
                                disabled={true}
                                defaultValue={marathonStartDate}
                                className="input input-bordered input-info w-full 
                                        font-bold
                                        text-xl" />
                        </div>

                        <div>
                            <span className="label-text text-lg">First Name</span>
                            <input
                                type="text"
                                name='firstName'
                                placeholder="First Name " 
                                required
                                className="input input-bordered input-info w-full" />
                        </div>
                        <div>
                            <span className="label-text text-lg">Last Name</span>
                            <input
                                type="text"
                                name='lastName'
                                placeholder="Last Name"
                                required
                                className="input input-bordered input-info w-full " />
                        </div>
                        <div>
                            <span className="label-text text-lg">Contact </span>
                            <input
                                
                                name='contactNumber'
                                placeholder="Contact Number"
                                required
                                className="input input-bordered input-info w-full " />
                        </div>
                        <div>
                            <span className="label-text text-lg">Additional Info</span>
                            <input
                                
                                name='additionalInfo'
                                placeholder="Additional Info"
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
    );
};

export default RegistrationForm;