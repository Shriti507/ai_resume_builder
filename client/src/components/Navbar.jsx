import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LogOut } from 'lucide-react'

const Navbar = () => {
    const user = {name: 'Will'}
    const navigate = useNavigate()
    const logoutUser = () => {
        navigate('/')
    }
  return (
    <div className='shadow-sm bg-white border-b border-slate-100 sticky top-0 z-50'>
        <nav className='flex items-center justify-between max-w-7xl mx-auto px-4 py-3 text-slate-800 transition-all'>
            <Link to="/app">
                <img src='/logo.svg' alt='logo' className='h-10 w-auto'/>
            </Link>
            <div className='flex items-center gap-4 text-sm'>
                <div className='flex items-center gap-2'>
                    <div className='size-8 rounded-full bg-gradient-to-br from-[#8B5E34] to-[#704b2a] flex items-center justify-center text-white text-xs font-semibold'>
                        {user?.name?.charAt(0)}
                    </div>
                    <p className='max-sm:hidden font-medium text-slate-700'>Hi, {user?.name}</p>
                </div>
                <button
                  onClick={logoutUser}
                  className='flex items-center gap-1.5 bg-white hover:bg-slate-50 border border-gray-200 px-4 py-1.5 rounded-full active:scale-95 transition-all text-slate-600 hover:text-slate-800 text-sm'
                >
                  <LogOut size={14} />
                  <span>Logout</span>
                </button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar