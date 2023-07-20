import React from 'react'
import Avatar from '../Avatar'

const MessageCard = ({msg, msgTime}) => {
  return (
    <div className='flex justify-between w-fit px-4 py-2'>
        <div className='w-10 m-auto'>
            <Avatar/>
        </div>
        <div className='flex justify-between gap-10 my-4 mx-4 dark:bg-slate-600 rounded-md shadow-xl w-fit px-4 py-2'>
            <p>{msg}</p>
            <p>{msgTime}</p>
        </div>
    </div>
  )
}

export default MessageCard