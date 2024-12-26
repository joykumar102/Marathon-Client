import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import { MdDeleteForever } from 'react-icons/md';
import { RxUpdate } from 'react-icons/rx';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ApplyList = () => {
    const { user } = useAuth();
    const [apply, setApply] = useState([]);
    const [searchText, setSearchText] = useState(""); // State for search input
    const [filteredApply, setFilteredApply] = useState([]); // State for filtered results

    useEffect(() => {
        // Fetch the user's applied marathons
        fetch(`http://localhost:5000/register-apply?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setApply(data);
                setFilteredApply(data); // Initialize filtered list with full data
            });
    }, [user?.email]);

    const handleSearch = (event) => {
        const searchValue = event.target.value.toLowerCase();
        setSearchText(searchValue);

        // Filter the applied marathons based on the title
        const filtered = apply.filter(app => app.title.toLowerCase().includes(searchValue));
        setFilteredApply(filtered);
    };

    const handleDelete = register_id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to recover this registration!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/register-apply/${register_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your registration has been deleted.",
                                icon: "success"
                            });

                            // Remove the deleted item from the local state
                            setFilteredApply(filteredApply.filter(app => app._id !== register_id));
                            setApply(apply.filter(app => app._id !== register_id));
                        }
                    });
            }
        });
    };

    return (
        <div>
            <div className="py-8">
                <h2 className="text-2xl text-center text-gray-600 font-bold">My Marathon Applications</h2>
                <hr className="w-[300px] mt-1 border-2 border-sky-400 mx-auto" />
            </div>

            {/* Search Bar */}
            <div className="lg:max-w-6xl mx-auto mb-6 px-5">
                <input
                    type="text"
                    value={searchText}
                    onChange={handleSearch}
                    placeholder="Search by marathon title..."
                    className="input input-bordered w-full max-w-xs"
                />
            </div>

            {/* Table */}
            <div className="lg:max-w-6xl mx-auto px-5">
                <table className="table">
                    <thead>
                        <tr className="text-xl">
                            <th>Name</th>
                            <th>Title</th>
                            <th>Marathon Start Date</th>
                            <th>Delete/Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredApply.map(app => (
                            <tr key={app._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="space-y-5">
                                            <div className="font-bold text-xl">{app.firstName} {app.lastName}</div>
                                            <div className="text-lg opacity-50">Contact: {app.contactNumber}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className='text-xl font-semibold'>{app.title}</td>
                                <td>{app.marathonStartDate}</td>
                                <th className="space-x-5">
                                    <button onClick={() => handleDelete(app._id)} className="btn bg-white hover:bg-sky-300">
                                        <MdDeleteForever />
                                    </button>
                                    <Link to={`/UpdateRegister/${app._id}`}>
                                        <button className="btn bg-white hover:bg-sky-300">
                                            <RxUpdate />
                                        </button>
                                    </Link>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Show a message if no results are found */}
                {filteredApply.length === 0 && (
                    <div className="text-center text-lg text-gray-600 mt-4">
                        No results found for "{searchText}".
                    </div>
                )}
            </div>
        </div>
    );
};

export default ApplyList;
