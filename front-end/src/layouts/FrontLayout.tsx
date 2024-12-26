import { NavBar } from '@/components/Navbar'
import React from 'react'

interface FrontLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const FrontLayout: React.FC<FrontLayoutProps> = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  )
}
