import React from 'react'
import { Outlet } from 'react-router-dom'
import HeadAuth from 'src/components/HeadAuth'
import './AuthLayout.scss'
interface Props {
  children?: React.ReactNode
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className='wrap-Auth'>
      <HeadAuth />
      {children}
      <Outlet />
    </div>
  )
}
