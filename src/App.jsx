import React from 'react'
import Sidebar from './components/navigation/Sidebar'

function App() {
  
  return (
    <div className='bg-gray-100 dark:bg-slate-800 transition duration-1000 dark:text-gray-200 h-screen flex '>
      {/* Container for sidebar */}
      <div className='dark:bg-slate-700 transition duration-1000 w-1/12 my-4 mx-4 bg-white rounded-xl shadow-md'><Sidebar/></div>
      {/* Container for Inbox */}
      <div className='dark:bg-slate-700 transition duration-1000 w-3/12 my-4 bg-white rounded-xl shadow-md'>Inbox will go here</div>
      {/* Container for messages */}
      <div className='dark:bg-slate-700 transition duration-1000 w-8/12 my-4 mx-4 bg-white rounded-xl shadow-md'>Messages will go here</div>
      
    </div>
  )
}

export default App
