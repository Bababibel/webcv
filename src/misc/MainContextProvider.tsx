import { useEffect, useState } from 'react'
import { MainContext, MainContextT } from './MainContext'

const defaultIsDarkMode = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)

export default function MainContextProvider({
  children
}: {
  children: React.ReactNode
}) {

  const [isDarkMode, setIsDarkMode] = useState<boolean>(defaultIsDarkMode)
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState<boolean>(false)
  const [isPictureDisplayed, setIsPictureDisplayed] = useState<boolean>(true)
  const defaultContext: MainContextT = { isDarkMode, setIsDarkMode, isDownloadModalOpen, setIsDownloadModalOpen, isPictureDisplayed, setIsPictureDisplayed }

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('theme-dark')
      document.documentElement.classList.remove('theme-light')
    }
    else {
      document.documentElement.classList.add('theme-light')
      document.documentElement.classList.remove('theme-dark')
    }
  }, [isDarkMode])

  return (
    <MainContext.Provider value={defaultContext}>
      { children }
    </MainContext.Provider>
  )
}