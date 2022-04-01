import React, { useContext } from "react";
import { Button } from "../components";
import { useForm } from "react-hook-form";
import { ConnectContext } from "../context/connectContext";

const Profile = () => {
    const {defaultAccount}=useContext(ConnectContext)
    const { register, handleSubmit, errors } = useForm();
  return (
    <div className="flex-col p-7 items-center justify-center  bg-slate-800 h-screen w-full4">
        <h1 className="text-white my-4 text-4xl">Profile</h1>
        <div className="border text-white rounded-lg p-4">
           <span  className="text-white">Wallet Adress :</span> {defaultAccount}
        </div>
        <div className=" text-white text-xl mt-8 mb-8">
        Enter your username and wallet address for signin
    </div>
        <form onSubmit={handleSubmit} className="w-full ">
  <div className="flex-col items-center mb-6">
   
    <div className="flex items-center mb-6">
    <div className="w-1/3">
      <label className="block text-gray-500 font-bold text-left mb-1 mb-0 pr-4" for="inline-full-name">
        User name
      </label>
    </div>
    <div className="w-2/3">
      <input type="text" placeholder="User name " {...register("userName", {required:true})} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name"  />
    </div>
  </div>

<div className="flex items-center mb-6">
  <div className="w-1/3">
  <label className="block text-gray-500 font-bold text-left mb-1 mb-0 pr-4" for="inline-full-name">
     Wallet address
  </label>
</div>
  <div className="w-2/3">
  <input type="text" placeholder="Wallet Address" {...register("walletAdress", {required:true})} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"   />
</div>
</div>


  </div>
  <input type="submit" className="border text-white rounded-lg w-[30%] block my-16 h-10 mx-auto border-[#008ccd]" value="Signin"/>
 
 
</form>
     
    </div>
  );
};

export default Profile;