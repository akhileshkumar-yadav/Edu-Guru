'use client';

import { useState } from 'react';

const schoolsData = {
  "Uttar Pradesh": {
    "Lucknow": ["Lucknow Public School", "St. Francis College"],
    "Kanpur": ["Delhi Public School, Kanpur"]
  },
  "Madhya Pradesh": {
    "Indore": ["Indore Public School"],
    "Bhopal": ["Bhopal Central School"]
  },
  "Rajasthan": {
    "Jaipur": ["Jaipur International School"],
    "Udaipur": ["Udaipur Academy"]
  }
};

export default function SchoolFilter() {
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [districts, setDistricts] = useState([]);
  const [filteredSchools, setFilteredSchools] = useState([]);

  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    setSelectedDistrict('');
    setDistricts(Object.keys(schoolsData[state] || {}));
    setFilteredSchools([]);
  };

  const handleDistrictChange = (event) => {
    const district = event.target.value;
    setSelectedDistrict(district);
    setFilteredSchools(schoolsData[selectedState]?.[district] || []);
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Select State & District to Find Schools</h2>
      
      <div className="flex gap-4 mb-4">
        <select
          className="w-1/2 p-2 border rounded"
          value={selectedState}
          onChange={handleStateChange}
        >
          <option value="">Select a State</option>
          {Object.keys(schoolsData).map((state) => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>

        <select
          className="w-1/2 p-2 border rounded"
          value={selectedDistrict}
          onChange={handleDistrictChange}
          disabled={!districts.length}
        >
          <option value="">Select a District</option>
          {districts.map((district) => (
            <option key={district} value={district}>{district}</option>
          ))}
        </select>
      </div>

      <h3 className="text-lg font-semibold">Schools in {selectedDistrict}, {selectedState}:</h3>
      <ul className="list-disc pl-5 mt-2">
        {filteredSchools.length > 0 ? (
          filteredSchools.map((school, index) => (
            <li key={index}>{school}</li>
          ))
        ) : (
          <p className="text-gray-500">No schools found.</p>
        )}
      </ul>
    </div>
  );
}
