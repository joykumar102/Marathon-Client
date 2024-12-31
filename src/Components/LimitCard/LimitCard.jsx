import React from 'react';
import LimitCardShow from './LimitCardShow';

const LimitCard = ({limit}) => {


    return (
       <div className='pt-10'>
         <h2 className='text-4xl font-bold text-center py-5'>Upcoming Marathon</h2>
        <div className='lg:grid lg:grid-cols-3 border-2 w-11/12 mx-auto p-10 gap-5'>
            
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