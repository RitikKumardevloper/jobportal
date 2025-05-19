import React from 'react'

export default function NavBar() {

  return (
    <>
      <div className='flex justify-between items-center bg-[#e6f7ff] px-10 py-5'>
        <div>
          <h1 className='cursor-pointer text-3xl'>My Job Portal</h1>
        </div>
        <div>
          <ul className='flex justify-evenly w-[700px]'>
            <li className='cursor-pointer text-xl font-bold'>Home</li>
            <li className='cursor-pointer text-xl hover:underline'>Find Jobs</li>
            <li className='cursor-pointer text-xl hover:underline'>Job Alerts</li>
            <li className='cursor-pointer text-xl hover:underline'>Find Candidates</li>
            <li className='cursor-pointer text-xl hover:underline'>Career Advice</li>
          </ul>
        </div>
        <div>
          <button className='bg-[#1ab6ff] hover:bg-[#66cfff] px-5 py-3 font-bold text-md text-white rounded-3xl cursor-pointer'>Register Now</button>
        </div>
      </div>

    </>
  )
}

