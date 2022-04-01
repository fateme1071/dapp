import React,{useContext} from 'react';
import { ConnectContext } from '../context/connectContext';

const TokenPage=()=>{
    const {defaultAccount,userBalance}=useContext(ConnectContext);
    return(
        <div className="flex-col p-7 items-center justify-center  bg-slate-800 h-screen w-full">
            <p className='text-orange-500 text-lg text-clip'>balanace: <span className='text-white  text-clip'>{userBalance}</span></p>
            <p className='text-orange-500 text-lg text-clip'>address: <span className='text-white  text-clip'>{defaultAccount}</span></p>
        </div>
    )

}

export default TokenPage;