import { useContext, useState } from 'react'
import { LanguageContext } from '../Contexts'
import { languageOptions, dictionaryList } from '../../i18n'

type StorageChoice = 'session' | 'local'

// Stuff's a user's data into the client side storage of the developer's choosing
export const useStorage = <T,>(
  type: StorageChoice,
  key: string,
  initialValue: T
) => {
  const store = type == 'local' ? window.localStorage : window.sessionStorage

  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = store.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      store.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }
  return [storedValue, setValue] as const
}

// For text heavy components, just pull in the correct language's dictionary and use dot notation to get your values
export const useTranslation = () => {
  const { userLanguage } = useContext(LanguageContext)

  // use current language to fetch the correct i18n data
  return dictionaryList[userLanguage]
}

// For one off text needs where you want a specific text value internationalized
export const useInternationalization = (key: string) => {
  const { userLanguage } = useContext(LanguageContext)

  return dictionaryList[userLanguage][key]
}

export const useIntlErrors = (key: string) => {
  const { userLanguage } = useContext(LanguageContext)

  return dictionaryList[userLanguage][key]
}
