import React from 'react'

const Banner = () => {
  return (
    <div>
      <div className="w-full py-2.5 font-medium text-sm text-[#8B5E34] text-center"
        style={{
          /* Shimmer animation effect for visual emphasis */
          background: 'linear-gradient(90deg, #fdf6ee, #f5e6d3 40%, #fffaf5 60%, #fdf6ee)',
          backgroundSize: '200% auto',
          animation: 'shimmer 3s linear infinite',
        }}
      >
        <p className="flex items-center justify-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B5E34] opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8B5E34]"></span>
          </span>
          <span className="px-3 py-0.5 rounded-full text-white bg-[#8B5E34] text-xs font-semibold tracking-wide">
            {/* Tag for highlighting new product updates */}
            New
          </span>
          AI-Powered Resume Builder — Land your dream job faster
        </p>
      </div>
    </div>
  )
}

export default Banner