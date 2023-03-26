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
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Latest Disaster Information</h1>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-300 bg-white w-full">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Declaration Date</th>
                <th className="px-4 py-2">State</th>
                <th className="px-4 py-2">Incident Type</th>
                <th className="px-4 py-2">Incident Description</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {disasterData.map((disaster, index) => (
                <tr key={disaster.disasterNumber}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{disaster.declarationDate}</td>
                  <td className="border px-4 py-2">{disaster.state}</td>
                  <td className="border px-4 py-2">{disaster.incidentType}</td>
                  <td className="border px-4 py-2">{disaster.declarationTitle}</td>
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
