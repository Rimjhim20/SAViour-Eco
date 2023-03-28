import { useEffect, useState } from 'react';
import { ref, onValue, get, child } from "firebase/database";
import { database } from "../../firebase";

function History() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const dbRef = ref(database);
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
           <div className=" w-100 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto mt-2">
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
