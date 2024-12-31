import React, { useContext, useEffect, useState } from 'react';

import MarathonListCard from '../Components/MarathonList/MarathonListCard';

import AuthContext from '../Context/AuthContext';

const MarathonsList = () => {

   
    const [marathonList, setMarathonList] = useState([]);
    const {user} = useContext(AuthContext);
 
    

useEffect(() => {
    fetch(`http://assignment-11-server-zeta-seven.vercel.app/myMarathon/?email=${user?.email}`)
    .then(res => res.json())
    .then(data => {
        setMarathonList(data);
    })
    .catch(error => {
        console.log(error);
    })
}, [user]);


    return (
        <div className='px-10'>
            {
                marathonList.map(list => <MarathonListCard 
                key={list._id}
                list={list}
                marathonList={marathonList}
                
                setMarathonList={setMarathonList}
               
                ></MarathonListCard>)
            }

        </div>
    );
};

export default MarathonsList;