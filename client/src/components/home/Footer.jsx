import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    /* Social identity links for the footer */
    const socials = [
        {
            href: '#',
            label: 'Facebook',
            svg: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        },
        {
            href: '#',
            label: 'Instagram',
            svg: <><path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 11.37a4 4 0 1 1-7.914 1.173A4 4 0 0 1 16 11.37m1.5-4.87h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>
        },
        {
            href: '#',
            label: 'LinkedIn',
            svg: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6M6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>
        },
        {
            href: '#',
            label: 'Twitter',
            svg: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        },
    ]
    return (
        <footer className="flex flex-col items-center justify-center w-full py-16 bg-gradient-to-b from-[#3b1f08] to-[#5f3103] text-white/70">
            <Link to="/">
                <img src='/logo.svg' alt='AI ResumeBuilder' className='h-10 w-auto brightness-0 invert opacity-90 mb-3' />
            </Link>
            <p className="text-sm font-medium text-white/80 mb-1">AI ResumeBuilder</p>
            <p className="mt-2 text-center text-sm text-white/50">© 2025 AI ResumeBuilder. All rights reserved.</p>
            <div className="flex items-center gap-5 mt-6">
                {socials.map((s, i) => (
                    <a key={i} href={s.href} aria-label={s.label} className="hover:-translate-y-1 hover:text-white transition-all duration-300">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {s.svg}
                        </svg>
                    </a>
                ))}
            </div>
        </footer>
    );
}

export default Footer