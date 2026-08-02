// src/pages/Landing.jsx
import React from 'react';
import { Shield, ArrowRight, Users, Target, Globe } from 'lucide-react';
import { CORE_COMMITTEE } from '../data';

export default function Landing({ setRoute }) {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-orange-200">
      
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-orange-600 p-2 rounded-xl text-white">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-extrabold text-xl text-slate-900 tracking-tight">MSS Connect</h1>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Enterprise Portal</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setRoute('login')}
              className="hidden md:block font-bold text-slate-600 hover:text-orange-600 transition-colors"
            >
              Sign In
            </button>
            <button 
              onClick={() => setRoute('register')}
              className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-full font-bold shadow-lg transition-all flex items-center gap-2"
            >
              Join Network <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-bold mb-8">
            <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse"></span>
            Empowering Unity, Education & Leadership
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-8 leading-tight">
            Building a Stronger <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">Community Together.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Welcome to the official enterprise portal of MSS (Madhav Shakti Sangathan). Join us to connect, organize, and drive meaningful social and political change.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => setRoute('register')}
              className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-orange-600/20 transition-all"
            >
              Become a Member
            </button>
            <button 
              onClick={() => setRoute('login')}
              className="w-full sm:w-auto bg-white hover:bg-slate-50 border-2 border-slate-200 text-slate-800 px-8 py-4 rounded-2xl font-bold text-lg transition-all"
            >
              Member Login
            </button>
          </div>
        </div>
      </section>

      {/* CORE COMMITTEE SECTION */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Core Leadership</h3>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-slate-500 max-w-2xl mx-auto text-lg">The visionary minds and dedicated leaders driving the mission of MSS Connect forward.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_COMMITTEE.map((member) => (
              <div key={member.id} className="bg-slate-50 rounded-3xl p-6 border border-slate-100 hover:shadow-xl hover:border-orange-200 transition-all group">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center text-white text-xl font-black mb-6 shadow-md group-hover:scale-110 transition-transform">
                  {member.name.charAt(0)}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h4>
                <p className="text-sm font-bold text-orange-600 uppercase tracking-wide mb-4">{member.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <Shield className="w-8 h-8 text-slate-600 mx-auto mb-6" />
          <p className="font-bold text-white mb-2">MSS Connect Enterprise</p>
          <p className="text-sm max-w-md mx-auto leading-relaxed">
            Designed and managed by Rajneesh Kumar (Technical).<br/>
            © 2026 All Rights Reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}
