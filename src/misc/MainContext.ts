import { createContext, useContext } from 'react'

export type MainContextT = {
  isDarkMode: boolean
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
  isDownloadModalOpen: boolean
  setIsDownloadModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  isPictureDisplayed: boolean
  setIsPictureDisplayed: React.Dispatch<React.SetStateAction<boolean>>
}

export const MainContext = createContext({} as MainContextT)

export function useMainContext() {
  return useContext(MainContext)
}