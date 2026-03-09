import { User2Icon, Mail, Lock, Sparkles, Eye, EyeOff } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const query = new URLSearchParams(window.location.search)
    const urlState = query.get('state')
    const [state, setState] = useState(urlState || "login")
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        navigate('/app')
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const benefits = [
        'AI-generated bullet points tailored to your role',
        'Dozens of ATS-friendly templates',
        'One-click PDF export, ready to send',
        'Unlimited resume versions & edits',
    ]

    return (
        <div className='flex min-h-screen'>
            {/* Left branding panel */}
            <div className="hidden lg:flex flex-col justify-between w-[45%] min-h-screen bg-gradient-to-br from-[#3b1f08] via-[#5f3103] to-[#8B5E34] text-white px-16 py-12">
                <Link to="/">
                    <img src='/logo.svg' alt='logo' className='h-10 w-auto brightness-0 invert'/>
                </Link>
                <div>
                    <h1 className="text-4xl font-semibold leading-snug mb-6">
                        Your next job starts with a great resume.
                    </h1>
                    <ul className="space-y-3">
                        {benefits.map((b, i) => (
                            <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                                <span className="mt-0.5 flex-shrink-0 size-5 rounded-full bg-white/20 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                                </span>
                                {b}
                            </li>
                        ))}
                    </ul>
                </div>
                <p className="text-white/40 text-xs">© 2025 AI ResumeBuilder. All rights reserved.</p>
            </div>

            {/* Right form panel */}
            <div className='flex-1 flex flex-col items-center justify-center bg-slate-50 px-6 py-12'>
                {/* Mobile logo */}
                <Link to="/" className="lg:hidden mb-8">
                    <img src='/logo.svg' alt='logo' className='h-10 w-auto'/>
                </Link>

                <div className="w-full max-w-sm">
                    <div className="mb-8">
                        <h2 className="text-3xl font-semibold text-slate-900">
                            {state === "login" ? "Welcome back" : "Create account"}
                        </h2>
                        <p className="text-slate-500 text-sm mt-1">
                            {state === "login"
                                ? "Sign in to your account to continue"
                                : "Get started — it's free, no card required"}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {state !== "login" && (
                            <div className="flex items-center bg-white border border-gray-200 h-12 rounded-xl overflow-hidden px-4 gap-3 focus-within:border-[#8B5E34] focus-within:ring-1 focus-within:ring-[#8B5E34] transition-all">
                                <User2Icon size={16} className="text-slate-400 flex-shrink-0" />
                                <input
                                    type="text" name="name" placeholder="Full name"
                                    className="border-none outline-none ring-0 flex-1 text-sm bg-transparent"
                                    value={formData.name} onChange={handleChange} required
                                />
                            </div>
                        )}
                        <div className="flex items-center bg-white border border-gray-200 h-12 rounded-xl overflow-hidden px-4 gap-3 focus-within:border-[#8B5E34] focus-within:ring-1 focus-within:ring-[#8B5E34] transition-all">
                            <Mail size={16} className="text-slate-400 flex-shrink-0" />
                            <input
                                type="email" name="email" placeholder="Email address"
                                className="border-none outline-none ring-0 flex-1 text-sm bg-transparent"
                                value={formData.email} onChange={handleChange} required
                            />
                        </div>
                        <div className="flex items-center bg-white border border-gray-200 h-12 rounded-xl overflow-hidden px-4 gap-3 focus-within:border-[#8B5E34] focus-within:ring-1 focus-within:ring-[#8B5E34] transition-all">
                            <Lock size={16} className="text-slate-400 flex-shrink-0" />
                            <input
                                type={showPassword ? "text" : "password"} name="password" placeholder="Password"
                                className="border-none outline-none ring-0 flex-1 text-sm bg-transparent"
                                value={formData.password} onChange={handleChange} required
                            />
                            <button type="button" onClick={() => setShowPassword(p => !p)} className="text-slate-400 hover:text-slate-600 transition">
                                {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                            </button>
                        </div>

                        {state === "login" && (
                            <div className="text-right">
                                <button type="button" className="text-sm text-[#8B5E34] hover:underline">
                                    Forgot password?
                                </button>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full h-11 rounded-xl text-white font-medium bg-gradient-to-r from-[#8B5E34] to-[#704b2a] hover:from-[#9c6b3c] hover:to-[#8B5E34] transition-all duration-300 shadow-md shadow-[#704b2a]/20 active:scale-95 flex items-center justify-center gap-2"
                        >
                            <Sparkles size={16} />
                            {state === "login" ? "Sign In" : "Create Account"}
                        </button>
                    </form>

                    <p className="text-slate-500 text-sm mt-6 text-center">
                        {state === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
                        <button
                            onClick={() => setState(prev => prev === "login" ? "register" : "login")}
                            className="text-[#8B5E34] font-medium hover:underline"
                        >
                            {state === "login" ? "Sign up for free" : "Sign in"}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login