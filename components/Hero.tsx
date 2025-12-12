import React from 'react'
import Button from '@/components/Button'
import { TRUST_BADGES } from '@/constants'
import { Apple, Play, CheckCircle2 } from 'lucide-react'

const Hero = () => {
  const scrollToDownload = () => {
    const element = document.getElementById('download-app')
    if (element) {
      const headerOffset = 90
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Sales open early 2026
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-6">
              Save early. Buy smart. <br />
              <span className="text-primary">Secure your Festive ram</span> without stress.
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Flexible savings, guaranteed procurement, and insured delivery — from our verified
              farms directly to your doorstep.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <Button
                onClick={scrollToDownload}
                className="w-full sm:w-auto text-lg px-8 py-4 shadow-xl shadow-green-500/20"
              >
                Start Saving Now
              </Button>
              <div className="flex gap-3">
                <button
                  onClick={scrollToDownload}
                  className="flex items-center gap-2 bg-slate-900 text-white px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <Apple size={20} />
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] uppercase opacity-70">Coming soon to</span>
                    <span className="font-bold text-sm">App Store</span>
                  </div>
                </button>
                <button
                  onClick={scrollToDownload}
                  className="flex items-center gap-2 bg-slate-900 text-white px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <Play size={20} fill="currentColor" />
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] uppercase opacity-70">Coming soon to</span>
                    <span className="font-bold text-sm">Google Play</span>
                  </div>
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 opacity-80">
              {TRUST_BADGES.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-500"
                >
                  <CheckCircle2 size={14} className="text-primary" />
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Visualization - Image Replacement */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none relative flex justify-center items-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-green-200/50 to-amber-100/50 rounded-full blur-3xl -z-10"></div>

            <img
              src="https://res.cloudinary.com/dshfmegep/image/upload/v1765542565/Active_User_Dashboard_3-portrait_aihjlu.png"
              alt="Ramify Mobile App Interface"
              className="relative z-10 w-full max-w-[300px] h-auto drop-shadow-2xl rounded-[2.5rem]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
