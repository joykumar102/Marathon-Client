import React, { useState } from 'react';
import Swal from 'sweetalert2';

const MarathonListCard = ({ list, marathonList, setMarathonList }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedMarathon, setSelectedMarathon] = useState(list);

    const {
        _id,
        title,
        startRegistrationDate,
        endRegistrationDate,
        marathonStartDate,
        location,
        runningDistance,
        description,
        photo,
        newDate
    } = list;

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-11-server-zeta-seven.vercel.app/addMarathon/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire("Deleted!", "Add Marathons has been deleted.", "success");
                        const remaining = marathonList.filter(mar => mar._id !== id);
                        setMarathonList(remaining);
                    });
            }
        });
    };

    const handleUpdateClick = (marathon) => {
        setSelectedMarathon(marathon);
        setShowModal(true);
    };

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        fetch(`https://assignment-11-server-zeta-seven.vercel.app/addMarathon/${selectedMarathon._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(selectedMarathon)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire("Updated!", "Marathon details have been updated.", "success");
                    // Update the marathon list with the updated marathon details
                    const updatedList = marathonList.map(marathon =>
                        marathon._id === selectedMarathon._id ? selectedMarathon : marathon
                    );
                    setMarathonList(updatedList);
                    setShowModal(false);
                }
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSelectedMarathon({ ...selectedMarathon, [name]: value });
    };

    return (
        <div className="overflow-x-auto max-w-5xl mx-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Location</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle h-20 w-20">
                                        <img src={photo} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold w-40">{title}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span className="badge badge-ghost badge-sm">{location}</span>
                        </td>
                        <td>{newDate}</td>
                        <th>
                            <button
                                onClick={() => handleUpdateClick(list)}
                                className="btn mr-5 hover:bg-blue-200 bg-gradient-to-r from-sky-400 to-pink-200 text-gray-700 border-none"
                            >
                                Update
                            </button>
                            <button
                                onClick={() => handleDelete(_id)}
                                className="btn hover:bg-red-400 bg-gradient-to-r from-sky-400 to-pink-200 text-gray-700 border-none"
                            >
                                Delete
                            </button>
                        </th>
                    </tr>
                </tbody>
            </table>

            {showModal && (
                <div className="flex items-center justify-center">
                    <div className="bg-white p-6 rounded shadow-md w-96">
                        <h2 className="text-xl font-bold mb-4">Update Marathon</h2>
                        <form onSubmit={handleUpdateSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={selectedMarathon.title}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium">Start Registration Date</label>
                                <input
                                    type="text"
                                    name="startRegistrationDate"
                                    value={selectedMarathon.startRegistrationDate}
                                    onChange={handleInputChange}
                                    readOnly
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium">End Registration Date</label>
                                <input
                                    type="text"
                                    name="endRegistrationDate"
                                    value={selectedMarathon.endRegistrationDate}
                                    onChange={handleInputChange}
                                    readOnly
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium">Marathon Start Date</label>
                                <input
                                    type="text"
                                    name="marathonStartDate"
                                    value={selectedMarathon.marathonStartDate}
                                    onChange={handleInputChange}
                                    readOnly
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium">Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    value={selectedMarathon.location}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <span className="label-text text-lg">Running Distance</span>
                                <select
                                    name="runningDistance"
                                    value={selectedMarathon.runningDistance}
                                    onChange={handleInputChange}
                                    className="select select-info w-full"
                                    required
                                >
                                    <option disabled>Select Distance</option>
                                    <option>25km</option>
                                    <option>10km</option>
                                    <option>3km</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium">Description</label>
                                <input
                                    type="text"
                                    name="description"
                                    value={selectedMarathon.description}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <span className="label-text text-lg">Image</span>
                                <input
                                    type="text"
                                    name="photo"
                                    value={selectedMarathon.photo}
                                    onChange={handleInputChange}
                                    placeholder="Image URL"
                                    required
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium">Date</label>
                                <input
                                    type="text"
                                    name="newDate"
                                    value={selectedMarathon.newDate}
                                    onChange={handleInputChange}
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="btn btn-secondary mr-2"
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MarathonListCard;
