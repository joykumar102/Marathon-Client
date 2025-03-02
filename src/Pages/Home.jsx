import React from 'react';
import Banner from '../Components/Banner/Banner';
import SectionOne from '../Components/ExtraSection/SectionOne';
import SectionTwo from '../Components/ExtraSection/SectionTwo';
import { useLoaderData } from 'react-router-dom';
import LimitCard from '../Components/LimitCard/LimitCard';

const Home = () => {
    const limit = useLoaderData();
  
    return (
        <div  className=''>
            <Banner></Banner>
            <LimitCard limit={limit}></LimitCard>
            <div className='py-20'>
            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>
            </div>
        </div>
    );
};

export default Home;