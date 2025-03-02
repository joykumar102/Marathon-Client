import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const Navbar = () => {


    const navigate = useNavigate();
    const { user, singOutUser } = useContext(AuthContext);


    const handleLogOut = () => {
        singOutUser();
        navigate('/');

    }


    return (

        <div className='bg-sky-200 bg-opacity-50 sticky top-0 z-50 backdrop-blur-lg'>

        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg font-semibold gap-2">
                        <Link to='/'>Home</Link>
                        <Link to='/Marathons'> Marathons</Link>
                        {
                            user && < >
                                <Link to='/AddMarathons'>Add Marathon</Link>
                                <Link to='/MarathonsList'>My Marathons List </Link>
                                <Link to='/ApplyList'> My Apply List</Link></>
                        }
                    </ul>
                </div>
                <div className="pt-2 flex gap-2">
                    <Link to='/'>
                        <img className='w-20 border rounded-xl' src="https://i.ibb.co.com/CHWJLHX/istockphoto-1128637067-612x612.jpg" alt="" />
                    </Link>
                    <h2 className='text-xl font-bold py-5'> Marathon Management</h2>
                </div>
            </div>
            <div className="navbar-center  hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4 text-lg font-semibold">
                    <Link to='/'>Home</Link>
                    <Link to='/Marathons'> Marathons</Link>
                    {
                        user && < >
                            <Link to='/AddMarathons'>Add Marathon</Link>
                            <Link to='/MarathonsList'>My Marathons List </Link>
                            <Link to='/ApplyList'> My Apply List</Link></>
                    }
                </ul>
            </div>


            <div className="navbar-end gap-3">

                {
                    user ?
                        <div className='flex items-center gap-4'>
                            <Tooltip className='z-10' anchorSelect="#showTooltip" content={user.displayName}>
                            </Tooltip>
                            <div className="avatar online">
                                <div className="w-16 rounded-full">
                                    <Link ><img id="showTooltip" src={user.photoURL} /></Link>
                                </div>
                            </div>
                            <div><button onClick={handleLogOut} className="btn btn-accent">Log Out</button></div>
                        </div>


                        :
                        <div>
                            <Link to='/Login'><button className="btn btn-accent">LogIn</button></Link>
                            <Link to='/Register'> <button className="btn btn-accent">Register</button></Link>
                        </div>
                }

            </div>
        </div>
        </div>
    );
};

export default Navbar;