import React from 'react'
import { Link } from 'react-router-dom'
import { Sparkles } from 'lucide-react'

const CallToAction = () => {
    return (
    <div id="cta" className="border-y border-dashed border-slate-200 w-full max-w-5xl mx-auto px-16 scroll-mt-12 my-16">
        <div className="flex flex-col md:flex-row text-center md:text-left items-center justify-between gap-10 px-3 md:px-10 border-x border-dashed border-slate-200 py-20 -mt-10 -mb-10 w-full">
            <div>
              <p className="text-2xl font-semibold max-w-sm leading-snug text-slate-800">
                Build a professional resume that gets you <span className="text-[#8B5E34]">noticed and hired.</span>
              </p>
              <p className="mt-2 text-slate-500 text-sm max-w-xs md:text-left text-center">Join 10,000+ professionals who've landed their dream roles.</p>
            </div>
            <Link
              to="/login?state=register"
              className="flex items-center gap-2 rounded-full py-3 px-8 bg-gradient-to-r from-[#8B5E34] to-[#704b2a] hover:from-[#9c6b3c] hover:to-[#8B5E34] transition-all duration-300 text-white shadow-lg shadow-[#704b2a]/30 active:scale-95 whitespace-nowrap"
            >
                <Sparkles size={18} />
                <span>Get Started Free</span>
            </Link>
        </div>
    </div>
);

}

export default CallToAction