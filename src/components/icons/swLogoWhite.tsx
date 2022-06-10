import React from 'react'
import swLogo from './sw-logo-white.png'

export const SwLogoWhite: React.FC = () => {
  return (
    <div style={{ display: 'flex', margin: '10px', justifyContent: 'center' }}>
      <img src={swLogo} alt="sw-Logo" style={{ margin: '0 0 auto' }} />
    </div>
  )
}
