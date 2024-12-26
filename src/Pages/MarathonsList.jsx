import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MarathonListCard from '../Components/MarathonList/MarathonListCard';

const MarathonsList = () => {

    const loadedMarathonList = useLoaderData();
    const [marathonList, setMarathonList] = useState(loadedMarathonList);



    return (
        

        <div className='px-10'>
            {
                marathonList.map(list => <MarathonListCard 
                key={list._id}
                list={list}
                marathonList={marathonList}
                setMarathonList={setMarathonList}
                loadedMarathonList={loadedMarathonList}
                ></MarathonListCard>)
            }

        </div>
    );
};

export default MarathonsList;