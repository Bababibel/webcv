import { createContext, useContext } from 'react'

export type LanguageT = 'fr'|'en'
type MapT = { [key: string]: string }
export type SourceT = { [l in LanguageT]: MapT }


export type MainContextT = {
  isDarkMode: boolean
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
  isDownloadModalOpen: boolean
  setIsDownloadModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  isPictureDisplayed: boolean
  setIsPictureDisplayed: React.Dispatch<React.SetStateAction<boolean>>
  getText: (source: SourceT, key: string) => string 
  lang: LanguageT
  setLang: React.Dispatch<React.SetStateAction<LanguageT>>
}

export const MainContext = createContext({} as MainContextT)

export function useMainContext() {
  return useContext(MainContext)
}