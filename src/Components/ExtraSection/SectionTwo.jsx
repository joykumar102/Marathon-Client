import React from 'react';
import { Link } from 'react-router-dom';

const SectionTwo = () => {
    return (
        <div className="container mx-auto px-5 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6"> Marathons</h2>
        <p className="text-lg text-gray-600 mb-12">The Marathons are long-distance running events, typically 42.195 kilometers (26.2 miles), challenging athletes to test endurance and speed. They promote health, community engagement, and often serve as charity fundraisers. </p>

        {/* Donation Impact */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Impact Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Customizable Features for Different Race Formats</h3>
            <p className="text-lg text-gray-600">Whether it's a marathon, half-marathon, relay, or charity event, the system can be customized to cater to different formats, including multiple start times, unique routes, and varied race categories.</p>
          </div>

          {/* Impact Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Post-Race Analytics & Reporting</h3>
            <p className="text-lg text-gray-600">The system provides detailed reports on race results, participant performance, and event statistics. It helps organizers analyze trends and improve future events, such as tracking the number of finishers, average race times, and health outcomes.</p>
          </div>

          {/* Impact Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Comprehensive Data Management</h3>
            <p className="text-lg text-gray-600">The system is designed to handle massive amounts of data seamlessly, from large-scale participant registrations to race result processing. It ensures that data is stored securely and is accessible for analysis, post-event reporting, and future race planning.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Join Us in Revolutionizing Marathon Management!</h3>
          <p className="text-lg text-gray-600 mb-6">Our Marathon Management System is designed to streamline event planning, race tracking, participant management, and volunteer coordination. Whether you're an organizer, participant, or volunteer, join us to experience an efficient and seamless race day.</p>
        <Link to="/AddMarathons"><button className="btn btn-accent">Add Marathon</button></Link>
         
        </div>
      </div>
      
    );
};

export default SectionTwo;