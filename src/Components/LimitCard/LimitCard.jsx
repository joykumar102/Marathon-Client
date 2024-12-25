import React from 'react';
import LimitCardShow from './LimitCardShow';

const LimitCard = ({limit}) => {


    return (
        <div className='lg:grid lg:grid-cols-3 border-2 w-11/12 mx-auto p-10 gap-5'>
            {
                limit.map(addCard => <LimitCardShow 
                    addCard={addCard}
                    key={addCard._id}
                ></LimitCardShow>)
            }

        </div>
    );
};

export default LimitCard;