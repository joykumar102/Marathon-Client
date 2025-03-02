import React from 'react';

const Banner = () => {
    return (
        <div className='mx-auto py-5  px-5'>

            <div className='text-center px-5 py-10 space-y-5 pb-20'>
                <h2 className='lg:text-5xl text-2xl font-bold'>Marathon Management</h2>
                <p className='lg:text-xl font-semibold'>
                A Marathon Management System streamlines event organization, including participant registration, race tracking, timing, route planning, result management, and communication, ensuring efficient coordination and an enhanced experience for runners and organizers.</p>
            </div>

            <div className=' mx-auto border-2 p-3 rounded-xl'>


                <div className="carousel rounded-xl">


                    <div id="slide1" className="carousel-item relative w-full flex lg:flex-row ">
                        <img
                            src="https://i.ibb.co.com/cwCMYQf/2024-Eugene-Marathon-Nelson-07.jpg"
                            className="" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className=" font-extrabold btn">❮</a>
                            <a href="#slide2" className="btn">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                            src=" https://i.ibb.co.com/C2n0zpT/Marathon-runners-BABAROGA.webp"
                            className="w-full " />
                            
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn ">❮</a>
                            <a href="#slide3" className="btn ">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src="https://i.ibb.co.com/j8RMzmL/133177154-gettyimages-1484427391.jpg"
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn ">❮</a>
                            <a href="#slide4" className="btn ">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                            src="https://i.ibb.co.com/6trbgd1/Marathon-shareholders-file-lawsuit-against-companys-top-management.jpg"
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn ">❮</a>
                            <a href="#slide1" className="btn ">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;