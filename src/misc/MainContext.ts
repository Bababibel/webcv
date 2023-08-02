import { createContext, useContext } from 'react'

export type MainContextT = {
  isDarkMode: boolean
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
  downloadModalRef: React.MutableRefObject<HTMLDialogElement | null>
}

export const MainContext = createContext({} as MainContextT)

export function useMainContext() {
  return useContext(MainContext)
}