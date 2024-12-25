import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AddMarathonCard from '../Components/AddMarathonCard/AddMarathonCard';

const Marathons = () => {
    const addMarathonData = useLoaderData();
    
    return (
        <div className='grid lg:grid-cols-3 gap-10 px-10 mx-auto max-w-6xl'>
           
            {
                addMarathonData.map(addMarathon => <AddMarathonCard 
                key={addMarathon._id}
                addMarathon={addMarathon}
                ></AddMarathonCard>)
            }
        </div>
    );
};

export default Marathons;