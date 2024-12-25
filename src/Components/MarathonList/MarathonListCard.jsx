import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MarathonListCard = ({list, setMarathonList, marathonList}) => {

    const {_id, title, startRegistrationDate, endRegistrationDate, marathonStartDate, location, runningDistance, description, photo, newDate} = list;
    
    const handleDelete = _id => {
        console.log(_id);
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
          

            
            fetch(`http://localhost:5000/addMarathon/${_id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                    Swal.fire({
                title: "Deleted!",
                text: "Add Marathons has been deleted.",
                icon: "success"
              });
              const remaining = marathonList.filter(mar => mar._id !== _id);
              setMarathonList(remaining);
            })
            }
          });
    }
    return (
        <div className="overflow-x-auto max-w-5xl mx-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th> Image</th>
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
                                        <img
                                            src={photo}
                                            alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold w-40"> {title}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span className="badge badge-ghost badge-sm">{location}</span>
                        </td>
                        <td>{newDate} </td>
                        <th>
                           <Link to={`/Update/${_id}`}> <button className="btn mr-5 hover:bg-blue-200 bg-gradient-to-r from-sky-400  to-pink-200 text-gray-700 border-none">Update</button></Link>

                            <button onClick={() => handleDelete(_id)} className="btn  hover:bg-red-400 bg-gradient-to-r from-sky-400  to-pink-200 text-gray-700 border-none">Delete</button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MarathonListCard;