import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Api() {
  const [disasterData, setDisasterData] = useState([]);

  useEffect(() => {
    async function fetchDisasterData() {
      const response = await axios.get('https://www.fema.gov/api/open/v2/DisasterDeclarationsSummaries?$orderby=declarationDate%20desc&$top=20');
      setDisasterData(response.data.DisasterDeclarationsSummaries);
    }

    fetchDisasterData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">Latest Disaster Information</h1>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-300 bg-white w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-4">#</th>
                <th className="px-6 py-4">Declaration Date</th>
                <th className="px-6 py-4">State</th>
                <th className="px-6 py-4">Incident Type</th>
                <th className="px-6 py-4">Incident Description</th>
              </tr>
            </thead>
            <tbody className="text-black">
              {disasterData.map((disaster, index) => (
                <tr key={disaster.disasterNumber}>
                  <td className="border px-6 py-4">{index + 1}</td>
                  <td className="border px-6 py-4">{disaster.declarationDate}</td>
                  <td className="border px-6 py-4">{disaster.state}</td>
                  <td className="border px-6 py-4">{disaster.incidentType}</td>
                  <td className="border px-6 py-4">{disaster.declarationTitle}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Api;
