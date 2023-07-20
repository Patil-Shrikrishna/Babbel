import React from 'react'
import Sidebar from './components/navigation/Sidebar'
import InboxCard from './components/messageComponents/InboxCard'
import MessageCard from './components/messageComponents/MessageCard'

function App() {
  
  return (
    <div className='bg-gray-100  dark:bg-slate-800 transition duration-1000 dark:text-gray-200 h-screen flex '>
      
      {/* Container for sidebar */}
      <div 
        className='dark:bg-slate-700 transition duration-1000 w-1/12 my-4 mx-4 bg-white rounded-xl shadow-xl'>
        <Sidebar/>
      </div>
      
      {/* Container for Inbox */}
      <div 
        className='dark:bg-slate-700 transition duration-1000 w-3/12 my-4 bg-white rounded-xl shadow-xl'>
          <p className='text-3xl pl-12 pt-12 pb-4 uppercase'>Inbox</p>
          <InboxCard name='Shrikrishna patil' lastMsgTime='02:11 pm' lastMsg='Hey!' unseenMsg='2'/>
          <InboxCard name='Shrikrishna patil' lastMsgTime='02:11 pm' lastMsg='Hey!' unseenMsg='2'/>
          <InboxCard name='Shrikrishna patil' lastMsgTime='02:11 pm' lastMsg='Hey!' unseenMsg='2'/>
        </div>
      
      {/* Container for messages */}
      <div 
        className='dark:bg-slate-700 transition duration-1000 w-8/12 my-4 mx-4 bg-white rounded-xl shadow-xl'>
        <MessageCard msg="Lorem ipsum dolor sit amet consectetur adipisicing elit." msgTime="02:32pm"/>
      </div>
      
    </div>
  )
}

export default App
