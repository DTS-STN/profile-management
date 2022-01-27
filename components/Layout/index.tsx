import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { Breadcrumbs } from '../Breadcrumbs'
import { LanguageContext } from '../Contexts'
import { useInternationalization } from '../Hooks'
import { NavigationHeader } from '../NavigationHeader'
import { Footer } from './Footer'
import { Header } from './Header'

export const Layout: React.VFC<{
  children: React.ReactNode
  data: any
  title: string
}> = ({ children, data, title }) => {
  const router = useRouter()
  const otherLang = useInternationalization('otherLang')
  const otherLangNameFull = useInternationalization('otherLangFull')

  const { userLanguageChange } = useContext(LanguageContext)

  return (
    <main>
      <div className="mx-4 min-h-screen">
        <div className="container mx-auto">
          <div className="flex justify-end my-4">
            <button
              className="btn-link btn underline"
              onClick={(e) => userLanguageChange(otherLang)}
            >
              {otherLangNameFull}
            </button>
          </div>
        </div>
        <Header />
        <div className="bg-primary bg-auto -mx-4 ml-.80">
          <div className="flex flex-auto justify-between items-center container">
            <h3 className="text-h3 py-3 text-white font-bold">
              Service Canada
            </h3>
            <p className="font-bold text-white">Sign out</p>
          </div>
        </div>
        <div className="container mx-auto flex flex-col mb-16">
          <Breadcrumbs items={['Service Canada', 'OAS/GIS Account', title]} />
          <h1 className="h1 my-8 mb-10">
            {`${
              router.pathname !== '/' && data.firstName
                ? 'Welcome, ' + data.firstName
                : ''
            }`}
          </h1>
          {router.pathname !== '/' ? (
            <NavigationHeader path={router.pathname} />
          ) : (
            ''
          )}

          <hr className="border-b border-black/20 my-10" />
          {children}
        </div>
      </div>
      <Footer />
    </main>
  )
}
