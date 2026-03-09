import React from 'react'

const Title = ({title, description}) => {
  return (
    <div className='text-center mt-6 text-slate-800'>
      <h2 className='text-3xl sm:text-4xl font-semibold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent'>
        {title}
      </h2>
      <p className='max-w-2xl mx-auto mt-4 text-slate-500 leading-relaxed'>{description}</p>
    </div>
  )
}

export default Title