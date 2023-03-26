import { useEffect, useState } from 'react';
import { ref, onValue, get, child } from "firebase/database";
import { db } from "../firebase.config"

function History() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const dbRef = ref(db);
    get(child(dbRef, 'donationData')).then((snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }, []);
  
  return (
    <div>
      {data ? (
        <div className='flex md:flex-row md:justify-center flex-col justify-center '>
          {Object.keys(data).map((key) => (
           <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
            <div className="p-4">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data[key].firstName} {data[key].lastName}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Phone: {data[key].phone}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Email: {data[key].email}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Type: {data[key].Type}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Item: {data[key].Item}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Address: {data[key].address}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Message: {data[key].message}</p>
            </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default History;




//  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//     <div className="p-5">
        
//             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//         <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//             Read more
//             <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
//         </a>
//     </div>
// </div> 
