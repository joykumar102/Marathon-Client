import React from 'react';

const SectionOne = () => {
    return (
        <div className='mx-auto mt-10 py-10 px-5  space-y-8 '>
        <h2 className='lg:text-4xl text-2xl text-center text-gray-600 font-bold'>Marathon Management system</h2>
        <p className='text-xl text-center px-3'>A Marathon Management System streamlines race organization, including participant registration, route planning, real-time tracking, results processing, and event logistics. It enhances efficiency, ensures security, and provides a seamless experience for runners, organizers, and spectators.</p>
        <div className='space-y-4 lg:flex lg:justify-between gap-5 p-5 border-2 px-5 rounded-xl '>
          <div className='lg:w-[700px] mt-5'>
          <h3 className='lg:text-3xl text-2xl'>Participant Registration and Management</h3>
            <ol className='space-y-5 mt-5'>
                <li>1. Online Registration: Allow participants to register through a user-friendly web or mobile interface.</li>
                <li>2.Data Management: Store participant information such as names, contact details, emergency contacts, and medical history securely.</li>
                <li>3. Participant Dashboard: Provide a personalized dashboard for participants to view their details, race updates, and event information.
                </li>
            </ol>
          </div>
            <div>
                <img 
                className='rounded-xl w-full h-full'
                src="https://i.ibb.co.com/5xRd4cR/unrig-summit-768x351.jpg" alt="" />
            </div>
        </div>

        <div className='space-y-4 lg:flex lg:justify-between gap-8 p-5 border-2 px-5 rounded-xl'>
        <div>
                <img 
                className='rounded-xl w-full h-full'
                src="https://i.ibb.co.com/Lz844hN/2023-Bank-of-America-Chicago-Marathon-live-streaming.webp" alt="" />
            </div>
          <div className='lg:w-[700px]'>
          <h3 className='lg:text-3xl text-2xl'>Live Race Tracking & Timing</h3>
            <ol className='space-y-5 mt-5'>
                <li>1. Real-Time GPS Tracking:
                Track participants' locations in real-time using GPS devices or mobile apps, ensuring organizers and spectators can monitor race progress. </li>
                <li>2. Automatic Timing with RFID:
                Utilize RFID chips or timing mats at various checkpoints to record accurate split times and final race results for each participant.</li>
                <li>3. TDynamic Leaderboard:
                Display real-time rankings based on participants' times and positions, allowing spectators to follow the race as it unfolds.</li>
            </ol>
          </div>
            
        </div>

        <div className='space-y-4 lg:flex lg:justify-between border-2 rounded-xl gap-5 p-5 px-5 '>
          <div className='lg:w-[700px] mt-5'>
          <h3 className='lg:text-3xl text-2xl'>Volunteer & Staff Coordination</h3>
          
            <ol className='space-y-5 mt-5'>
                <li>1.Volunteer Registration & Scheduling:
                Simplify the process of registering volunteers and assigning them to specific roles, such as water stations, medical aid, and race checkpoints, with clear scheduling for each.</li>
                <li>2. Event Day Check-In & Attendance:
                Track volunteer attendance on the day of the event using digital check-ins, ensuring accurate staffing and helping to manage last-minute changes.</li>
                <li>3. Feedback and Reporting:
                Collect feedback from volunteers and staff post-event to improve coordination for future races and ensure the satisfaction of the entire team.</li>
                
                
            </ol>
          </div>
            <div>
                <img 
                className='rounded-xl w-full h-full'
                src="https://i.ibb.co.com/KmjTqWY/volunteer01.png" alt="" />
            </div>
        </div>





    </div>
    );
};

export default SectionOne;