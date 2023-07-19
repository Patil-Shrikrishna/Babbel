import React from 'react'
import { AiOutlineMessage, AiOutlineSetting } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlinePeople } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineFolderMinus } from "react-icons/hi2";


import DarkModeToggle from '../darkmode/DarkModeToggle';
import Logo from '../Logo';
import Avatar from '../Avatar';


const Sidebar = () => {
  return (
    <div className='flex flex-col h-full'>
        <div className="my-5 mx-2">
            <Logo/>
        </div>
        <div className='flex flex-col h-full justify-between p-5 gap-10 mx-auto'>
            <div className="flex flex-col gap-8 text-slate-600 dark:text-slate-400 text-4xl mx-auto">
                <AiOutlineMessage />
                <IoCallOutline />
                <MdOutlinePeople />
                <RxDashboard />
                <HiOutlineFolderMinus />
                <AiOutlineSetting />
            </div>

            <div className="flex flex-col p-5 gap-10 ">
                <Avatar prop = 'w-8'/>
                <DarkModeToggle/>
            </div>
        </div>
    </div>
  )
}

export default Sidebar