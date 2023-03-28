import React, { useState } from "react";

function Receive() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    type: "",
    item:"",
    address: "",
    message: "",
  });
  let name, value;
  const postUserData = (event)=>{
   name = event.target.name;
   value = event.target.value;
   setUserData({...userData, [name]:value});
  };
  const submitData = async (event)=>{
    event.preventDefault();
    const { firstName, lastName, phone, email, Type, Item, address, message }= userData;
    if( firstName&& lastName&& phone&& email&& Type&& Item && address&& message){
    const res = await fetch('https://solution-f5982-default-rtdb.asia-southeast1.firebasedatabase.app/donationData.json',
   {
    method : "POST",
    headers : {
      "Content-Type":"application/json",
    },
    body:JSON.stringify({
      firstName, lastName, phone, email, Type, Item, address, message
    })
  })
  if(res){
    setUserData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      Type: "",
      Item:"",
      address: "",
      message: "",
    })
    alert("Data Stored")
  }
  else{
    alert("please fill the data ")
  }
  }else{
    alert("please fill the data ")
  }
}
  return (
    <div className="flex justify-center">
      <form method="POST"  className=" w-96 p-4 border-2 border-black rounded-xl bg-blue-500 mt-7 md:w-96">
      <div className="grid gap-6 mb-6 md:grid-cols-2 ">
<img src="https://cdn-icons-png.flaticon.com/512/1180/1180245.png" alt="" height={150} width={200} className="m-auto"/>
          <div>
            <label
              htmlfor="first_name"
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              First name
            </label>
            <input
              type="text"
           
              name="firstName"
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required value={userData.firstName} onChange={postUserData}
            />
          </div>
          <div>
            <label
              htmlfor="last_name"
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Doe"
              value={userData.lastName} onChange={postUserData}
              required

            />
          </div>

          <div>
            <label
              htmlfor="phone"
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Phone number
            </label>
            <input
              type="tel"
              
              name = "phone"
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123-45-678"
              value={userData.phone} onChange={postUserData}
              pattern="[0-9]{10}"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlfor="email"
            className="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Email address
          </label>
          <input
            type="email"
            name = "email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={userData.email} onChange={postUserData}
            placeholder="john.doe@company.com"
            required
          />
        </div>
<div className="mb-6">
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-white dark:text-white"
        >
         Type
        </label>
        <select  
          name = "Type"
          
          className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={userData.Type} onChange={postUserData}
        >
          <option value>Select</option>
      
          <option value="Receive">Receive</option>
        </select>
        </div>
        <div className="mb-6">
        <label
          htmlFor="Type"
          className=" mb-2 text-sm font-medium text-white dark:text-white"
        >
        Item  
        </label>
        <select
          name="Item"
          value={userData.Item} onChange={postUserData}
          className="bg-gray-50 border border-gray-300   text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value>Select</option>
          <option value="clothes">Clothes</option>
          <option value="food">Food</option>
        </select>
        </div>
        <div className="mb-6">
          <label
            htmlfor="small-input"
            className=" block mb-0 mt-2 text-sm font-medium text-white dark:text-white"
          >
            Address
          </label>
          <input
            type="text"
            
            name = "address"
            className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={userData.address} onChange={postUserData} placeholder="Your Address"
          />
        </div>
        <div className="mb-6">
        <label
          htmlfor="message"
          className="block mb-2 text-sm font-medium text-white dark:text-white"
        >
          Your message
        </label>
        <textarea
        
          name = "message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
          placeholder="Write your thoughts here..."
          value={userData.message} onChange={postUserData}
        ></textarea>

</div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={submitData}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Receive;
