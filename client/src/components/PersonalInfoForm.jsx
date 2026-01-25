import { User } from 'lucide-react'
import React from 'react'

const PersonalInfoForm = ({data,onChange,removeBackground,setRemoveBackground}) => {
    const handleChange=(field,value)=>{
        onChange({...data,[field]:value})
    }
  return (
    <div>
        <h3 className='text-lg font-semibold text-gray-800'>Personal Information</h3>
        <p className='text-gray-600 text-sm'>Get started with personal Information</p>
        <div className='flex items-center gap-2'>
            <label>
                {data.image ? (<img src={typeof data.image==='string' ? data.image : URL.createObjectURL(data.image)} alt='User Image' className='w-16 h-16 rounded-full mt-5 object-cover ring ring-slate-300 hover:opacity-40'/>)
                :
                (
                    <div className='inline-flex items-center gap-2 mt-5 text-slate-500 hover:text-slate-700 cursor-pointer'>
                        <User className='size-10 p-2.5 border rounded-full'/>
                        Upload User Image
                    </div>
                )
                }
                <input type='file' accept='image/png, image/jpeg' className='hidden' onChange={(e)=>handleChange("image",e.target.files[0])}></input>
            </label>

            {typeof data.image ==='object' &&(
                <div className='flex flex-col mt-2 pl-4 text-sm gap-1'>
                    <p>Remove Background</p>
                    <label className='relative cursor-pointer inline-flex items-center gap-3 text-gray-900'>
                        <input type="checkbox" className='sr-only peer' onChange={()=>setRemoveBackground(prev=>!prev )} checked={removeBackground}/>
                    </label>
                </div>
            )}
        </div>
    </div>
  )
}

export default PersonalInfoForm