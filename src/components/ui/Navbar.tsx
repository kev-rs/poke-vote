import React from 'react'

export const Navbar = () => {
  return (
    <div className='relative'>
      <nav className='flex justify-between w-full text-white bg-red-500 h-9 rounded-b shadow-md'>
        <div>Logo</div>
        <div>Dashboard</div>
        <div className='flex justify-between w-[10%]'>
          <div>Login</div>
          <div>Register</div>
        </div>
      </nav>
    </div>
  )
}
