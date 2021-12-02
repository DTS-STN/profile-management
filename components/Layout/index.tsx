import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { Breadcrumbs } from '../Breadcrumbs'
import { LanguageContext } from '../Contexts'
import { useInternationalization } from '../Hooks'
import { NavigationHeader } from '../NavigationHeader'
import { Footer } from './Footer'

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
        <div className="container mx-auto flex flex-col mb-16">
          <div className="flex justify-end my-4">
            <button
              className="btn-link btn"
              onClick={(e) => userLanguageChange(otherLang)}
            >
              {otherLangNameFull}
            </button>
          </div>
          <Breadcrumbs items={['Service Canada', 'OAS/GIS Account', title]} />
          <h1 className="h1 my-8 mb-10">
            {useInternationalization('welcome')}, {`${data.firstName}`}
          </h1>
          <NavigationHeader path={router.pathname} />
          <hr className="border-b border-black/20 my-10" />
          {children}
        </div>
      </div>
      <Footer />
    </main>
  )
}
