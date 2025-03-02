import React from 'react';
import LimitCardShow from './LimitCardShow';

const LimitCard = ({limit}) => {


    return (
       <div className='pt-10 '>
         <h2 className='text-4xl font-bold text-center py-10'>Upcoming Marathon</h2>
        <div className='lg:grid lg:grid-cols-3 w-11/12 mx-auto  gap-10'>
            
            {
                limit.map(addCard => <LimitCardShow 
                    addCard={addCard}
                    key={addCard._id}
                ></LimitCardShow>)
            }

        </div>
       </div>
    );
};

export default LimitCard;