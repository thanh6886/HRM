import React from 'react'
import { Outlet } from 'react-router-dom'
import HeadAuth from 'src/components/HeadAuth'

interface Props {
  children?: React.ReactNode
}

export default function AuthLayout({ children }: Props) {
  return (
    <div>
      <HeadAuth />
      {children}
      <Outlet />
    </div>
  )
}
