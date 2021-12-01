import { useRouter } from 'next/router'
import React from 'react'
import { Breadcrumbs } from '../Breadcrumbs'
import { NavigationHeader } from '../NavigationHeader'
import { Footer } from './Footer'

export const Layout: React.VFC<{ children: React.ReactNode; data: any }> = ({
  children,
  data,
}) => {
  const router = useRouter()

  return (
    <main>
      <div className="mx-4 min-h-screen">
        <div className="container mx-auto flex flex-col mb-16">
          <Breadcrumbs
            items={[
              'Service Canada',
              'OAS/GIS Account',
              'Personal Information',
            ]}
          />
          <h1 className="h1 my-8 mb-10">Welcome, {`${data.firstName}`}</h1>
          <NavigationHeader path={router.pathname} />
          <hr className="border-b border-black/20 my-10" />
          {children}
        </div>
      </div>
      <Footer />
    </main>
  )
}
