import React from 'react'
import { useConfig } from 'nextra-theme-docs'

export const Logo = () => {
  const { darkMode, ...others } = useConfig()

  console.log(others)
  console.log(darkMode)

  return (
    <>
      <img
        style={{ width: '40px', marginRight: '10px', borderRadius: '100%' }}
        src={
          darkMode
            ? 'https://fastloyal-dev-image-storage.s3.eu-west-1.amazonaws.com//Group+1321315353+(2).png'
            : 'https://fastloyal-dev-image-storage.s3.eu-west-1.amazonaws.com//Group+1321315379.png'
        }
      />
      <h2 style={{ fontWeight: 'bold' }}>UNBX</h2>
    </>
  )
}
