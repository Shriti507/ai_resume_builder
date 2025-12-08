import React, { useEffect, useState } from 'react'
import {FilePenIcon, PencilIcon, PlusIcon, TrashIcon, UploadCloudIcon, XIcon} from 'lucide-react'
import {useNavigate} from 'react-router-dom'
import { dummyResume } from '../assets/assests'

const Dashboard = () => {
  const navigate=useNavigate()
  const colors = ["#356859", "#5177ca", "#59bd9f", "#3b5cb0"];

  const [allResumes , setAllResumes]=useState([])
  const [showCreateResume , setShowCreateResume]=useState(false)
  const [showUploadResume , setShowUploadResume]=useState(false)
  const [title , setTitle]=useState("")
  const [resume , setResume]=useState(null)
  const [editResumeId , setResumeId]=useState("")




  const loadAllResumes=()=>{
    setAllResumes(dummyResume)
  }

  const createResume=async (event)=>{
    event.preventDefault()
    setShowCreateResume(false)
    navigate(`/app/builder/res123`)
  }
  useEffect(()=>{
    loadAllResumes()

  },[])
  return (
    <div>
      <div className='max-w-7xl mx-auto px-4 py-8'>
        <p className='text-2xl font-medium mb-6 bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent sm:hidden' >Welcome, user name</p>
        <div className='flex gap-4'>
        <button onClick={()=>setShowCreateResume(true)} className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer'>
            <PlusIcon className='size-11 transition-all duration-300 p-2.5 bg-gradient-to-r from-[#59bd9f] to-[#356859] text-white rounded-full'/>
            <p className='text-sm group-hover:text-[#a0522d] transition-all duration-300'>Create Resume</p>
          </button>
          <button className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer'>
            <UploadCloudIcon className='size-11 transition-all duration-300 p-2.5 bg-gradient-to-r from-[#3b5cb0] to-[#5177ca] text-white rounded-full'/>
            <p className='text-sm group-hover:text-[#a0522d] transition-all duration-300'>Upload existing file</p>
          </button>
        </div>
        <hr className='border-slate-300 my-6 sm:w-[305px]'/>
        <div className='grid grid-cols-2 sm:flex flex-wrap gap-4'>
          {allResumes.map((resume,index)=>{
              const baseColor=colors[index%colors.length];
              return (
                <button 
                key={index} 
                className="
                  relative w-full sm:max-w-36 h-48 flex flex-col items-center 
                  justify-center rounded-lg gap-2 border group hover:shadow-lg 
                  transition-all duration-300 cursor-pointer
                  "
                  style={{
                  background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}40)`,
                  borderColor: baseColor + '40',
                  }}
                >
                <FilePenIcon
                  className="size-7 group-hover:scale-105 transition-all"
                  style={{ color: baseColor }}
                />


                  <p
                  className="text-sm group-hover:scale-105 transition-all px-2 text-center"
                  style={{color:baseColor}}
                  >
                  {resume.title}
                  </p>
                  <p
                    className="absolute bottom-1 text-[11px] text-slate-400 
                              group-hover:text-slate-500 transition-all duration-300 px-2 text-center"
                    style={{ color: baseColor + '90' }}
                  >
                    Updated on {new Date(resume.updatedAt).toLocaleDateString()}
                  </p>


                <div className="absolute top-1 right-1 group-hover:flex items-center hidden">
                <TrashIcon
                  className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors"
                />
                <PencilIcon
                  className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors"
                />
              </div>


                </button>
              )
          })}
        </div>

        {/* for making the poping window */}
        {showCreateResume && (
          // only when it is true  
          <form onSubmit={createResume} onClick={()=>setShowCreateResume(false)} className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center'>
            <div onClick={e=>e.stopPropagation()} className='relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6'>
              <h2 className='text-xl font-bold mb-4'>Create a Resume</h2>
              <input 
                type="text" 
                placeholder='Enter resume title' 
                className='w-full px-4 py-2 mb-4 focus:border-[#a0522d] ring-[#a0522d]' 
                required 
              />
             <button className='w-full py-2 bg-[#b67d0d] text-white rounded  hover:bg-[#b79453] transition-colors'>Create Resume</button>
             <XIcon className='absolute top-4 right-4 text-slate-400  hover:text-slate-600 cursor-pointer transition-colors' onClick={() => { setShowCreateResume(false) ; setTitle('') }}/>
            </div>
          </form>
        )}
      </div>
    </div>
  )

}

export default Dashboard