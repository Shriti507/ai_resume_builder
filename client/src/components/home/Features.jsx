import React from 'react'
import { FileText, Palette, Download } from 'lucide-react'
import Title from './Title';

/* Application Features Configuration */
const features = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 stroke-violet-600"><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313-12.454z"/><path d="m17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"/><path d="m19 11l1 1l-1 1"/></svg>,
    name: 'AI-Powered Writing',
    description: 'Let AI craft compelling bullet points, professional summaries and cover letters tailored to your target role.',
    hoverBg: 'group-hover:bg-violet-100',
    hoverBorder: 'group-hover:border-violet-300',
    activeBg: 'bg-violet-100',
    activeBorder: 'border-violet-300',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 stroke-green-600"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10"/><path d="M7 12h10"/><path d="M7 17h4"/></svg>,
    name: 'Beautiful Templates',
    description: 'Choose from dozens of ATS-friendly, recruiter-approved resume templates and customize every detail.',
    hoverBg: 'group-hover:bg-green-100',
    hoverBorder: 'group-hover:border-green-300',
    activeBg: '',
    activeBorder: '',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 stroke-orange-500"><path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/></svg>,
    name: 'One-Click PDF Export',
    description: 'Download a pixel-perfect PDF in seconds, ready to send directly to recruiters or upload to job portals.',
    hoverBg: 'group-hover:bg-orange-100',
    hoverBorder: 'group-hover:border-orange-300',
    activeBg: '',
    activeBorder: '',
  },
]

const Features = () => {
    const [isHover, setIsHover] = React.useState(false);

    return (
        <div id='features' className='flex flex-col items-center my-10 scroll-mt-12'>
          <div className="flex items-center gap-2 text-sm text-[#704b2a] bg-[#704b2a]/10 border border-[#704b2a]/40 rounded-full px-6 py-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              <span>Simple Process</span>
          </div>
          <Title
            title="Build your resume in minutes"
            description="Our AI-powered builder guides you step by step — from your personal info to an export-ready PDF. No design skills needed."
          />
            <div className="flex flex-col md:flex-row items-center justify-center xl:-mt-10 mt-6">
                <img className="max-w-2xl w-full xl:-ml-32" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png" alt="Resume builder preview" />
                <div className="px-4 md:px-0" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                    {features.map((feature, i) => (
                      <div key={i} className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
                        <div className={`p-6 border border-transparent flex gap-4 rounded-xl transition-colors duration-200 ${feature.hoverBg} ${feature.hoverBorder} ${i === 0 && !isHover ? `${feature.activeBg} ${feature.activeBorder}` : ''}`}>
                          {feature.icon}
                          <div className="space-y-2">
                            {/* Hover states and active transitions for interactivity */}
                            <h3 className="text-base font-semibold text-slate-700">{feature.name}</h3>
                            <p className="text-sm text-slate-600 max-w-xs">{feature.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default Features