import axios from "axios";
import React,{useContext, useEffect} from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Loading } from "../components";
import { Button } from "../components";
import 'react-toastify/dist/ReactToastify.css';
import {ConnectContext} from "../context/connectContext";
const Home = () => {
  const {errorMessage,connButtonText,conectWalletHandler}=useContext(ConnectContext)
  useEffect(()=>{
    toast(errorMessage)
  },[errorMessage])

  return (
    <>
      <div className="flex items-center justify-center bg-slate-800 h-screen">
        {/* <h1 className="font-bold text-4xl">خانه</h1>
        <Link to="/login">لینک ورود</Link>
        <Link to="/components">کامپوننت ها</Link>
        <Link to="/apis">seperate api files</Link> */}
        <Button onClick={()=>conectWalletHandler()}>{connButtonText }</Button>
       
      </div>
     
    </>
  );
};

export default Home;
