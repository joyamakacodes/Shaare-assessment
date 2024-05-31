import React, { useState } from 'react';
import { Contents } from './Contents';
import progress from '../assets/Progress bar.png';

const ServiceButtons = () => {
  const [checkedServices, setCheckedServices] = useState({});
  const [selectedService, setSelectedService] = useState(null);
  const [visibleDetails, setVisibleDetails] = useState({});
  const [warning, setWarning] = useState(false)
  
  const handleSelectService = (index) => {
    const serviceTitle = Contents[index].title.toLowerCase();
    const isCleaningService = serviceTitle.includes('cleaning');

    // Toggle service selection
    setCheckedServices((prev) => {
      const newCheckedServices = {
        ...prev,
        [index]: !prev[index],
      };

      // Count the number of selected cleaning services
      const cleaningServicesCount = Object.keys(newCheckedServices).filter(
        (key) => newCheckedServices[key] && Contents[key].title.toLowerCase().includes('cleaning')
      ).length;

      // Set warning if more than one cleaning service is selected
      setWarning(cleaningServicesCount > 1);

      return newCheckedServices;
    });

    setVisibleDetails((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));

    setSelectedService(index);
  };




  const toggleDetails = (index) => {
    setVisibleDetails((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="p-8 text-start">
      <img src={progress} alt="bar" className="mb-4" />
      <h2 className='text-xl font-semibold'>What service would you like to book?</h2>
      <p className={`${warning ? 'text-red-500' : 'text-black'}`}>
        You can select one type of cleaning and extra tasks
        </p>
      <div className="flex flex-col items-start">
        {Contents.map((content, index) => (
          <div key={index} className="my-4 w-full max-w-lg">
            <div className="flex justify-between items-center px-4">
              <label className="inline-flex">
                <span className="ml-2">{content.title}</span>
              </label>
              <input
                type="checkbox"
                className="form-checkbox text-purple-600"
                checked={checkedServices[index] || false}
                onChange={() => handleSelectService(index)}
              />
            </div>
            {selectedService === index && (
              <button
                className="text-red-400 ml-[220px]"
                onClick={() => toggleDetails(index)}
              >
                {visibleDetails[index] ? 'Hide details' : 'Show details'}
              </button>
            )}

            {selectedService === index && visibleDetails[index] && (
              <div className="mt-2 p-4 border rounded-lg bg-gray-100 h-96 overflow-y-scroll">
                {content.description.map((desc, idx) => (
                  <div key={idx} className="mb-4">
                    <h3 className="font-semibold">{desc.subtitle}</h3>
                    <ul className="list-disc ml-6">
                      {desc.lists.map((listItem, listIdx) => (
                        <li key={listIdx}>{listItem}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        <button className='bg-red-500 text-white my-6 mx-auto px-4 py-2 rounded-lg w-[300px] '>Next</button>
      </div>
    </div>
  );
};

export default ServiceButtons;
