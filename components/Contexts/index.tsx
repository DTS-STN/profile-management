import React, { useState } from 'react'
import { useStorage } from '../Hooks'

export const LanguageContext = React.createContext(null)

export function LanguageProvider({ children }) {
  if (typeof window !== 'undefined') {
    const [userLanguage, setUserLanguage] = useStorage<string>(
      'local',
      'lang',
      'en'
    )

    return (
      <LanguageContext.Provider
        value={{
          userLanguage,
          userLanguageChange: (selected) => setUserLanguage(selected),
        }}
      >
        {children}
      </LanguageContext.Provider>
    )
  }
  return <div></div>
}
