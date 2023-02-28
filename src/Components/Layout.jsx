import React from 'react'
import SiteNav from './SiteNav'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <header className='page-header'>
        <SiteNav />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout