import { useCallback, useState } from 'react'

// Parameter is the boolean, with default "false" value
// TODO: switch to use a intersection of 'en' and 'fr'
const useLanguageToggle = (initialState: boolean = false): [boolean, any] => {
  const [state, setState] = useState<boolean>(initialState)
  const toggle = useCallback((): void => setState((state) => !state), [])
  return [state, toggle]
}
