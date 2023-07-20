import React from 'react'
import Avatar from '../Avatar'

const InboxCard = ({name, lastMsgTime, lastMsg, unseenMsg }) => {
  return (
    <div className='flex shadow-md  dark:bg-slate-600 transition duration-1000 m-2 p-2 rounded-md'>
        <div className='flex w-14 m-auto'>
            <Avatar/>
        </div>
        <div className='flex flex-col gap-2 mx-5 w-full'>
            <div className='flex justify-between'>
                <p className='font-bold '>{name}</p>
                <p>{lastMsgTime}</p>
            </div>
            <div className='flex justify-between'>
                <p>{lastMsg}</p>
                {unseenMsg && 
                    <div className="flex bg-green-600 text-white rounded-full px-2 font-semibold ">
                        <p>{unseenMsg}</p>
                    </div>
                }
            </div>
        </div>
    </div>
  )
}

export default InboxCard