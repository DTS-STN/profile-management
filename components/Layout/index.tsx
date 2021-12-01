import React from 'react'
import { Breadcrumbs } from '../Breadcrumbs'
import { NavigationHeader } from '../NavigationHeader'

export const Layout: React.VFC<{ children: React.ReactNode; data: any }> = ({
  children,
  data,
}) => (
  <main>
    <div className="mx-4 min-h-screen">
      <div className="container mx-auto flex flex-col mb-16">
        <Breadcrumbs
          items={['Service Canada', 'OAS/GIS Account', 'Personal Information']} // last item is page name
        />
        {/* 
      TODO: h1's require red underlines according to spec, talk to Ishita
       */}
        <h1 className="h1 my-8 mb-10">Welcome, {`${data.firstName}`}</h1>
        <NavigationHeader />
        <hr className="border-b border-black/20 my-10" />
        {children}
      </div>
    </div>
  </main>
)
