import React, { useState } from 'react'

interface LogoProps {
  className?: string
  variant?: 'default' | 'white'
}

const Logo: React.FC<LogoProps> = ({ className = '', variant = 'default' }) => {
  const [error, setError] = useState(false)
  // Updated logo source derived from user provided Google Drive link
  // ID: 1PEwWvWc7pFmdXIODwbGZX8cpaxBtKTVT
  const src = 'https://res.cloudinary.com/dshfmegep/image/upload/v1765542444/beta_logo_yrxlp9.png'

  const filterClass = variant === 'white' ? 'brightness-0 invert' : ''

  if (error) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <span
          className={`font-bold text-2xl tracking-tight leading-none ${
            variant === 'white' ? 'text-white' : 'text-slate-900'
          }`}
        >
          Ramify
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt="Ramify Logo"
      className={`object-contain ${filterClass} ${className}`}
      onError={() => setError(true)}
    />
  )
}

export default Logo
