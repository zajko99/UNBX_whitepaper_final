import React from 'react'
import { useConfig } from 'nextra-theme-docs'

export const Logo = () => {
  const { darkMode, ...others } = useConfig()

  return (
    <>
      <img
        style={{ width: '40px', marginRight: '10px', borderRadius: '100%' }}
        src={'https://fastloyal-dev-image-storage.s3.eu-west-1.amazonaws.com//Group+1321315353+(2).png'}
      />
      <h2 style={{ fontWeight: 'bold' }}>UNBX</h2>
    </>
  )
}
