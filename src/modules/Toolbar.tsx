import { useContext, useState } from 'react'

import DownloadIcon from '../assets/icons/DownloadIcon'
import LanguageIcon from '../assets/icons/LanguageIcon'
import moonIcon from '../assets/icons/moon.svg'
import sunIcon from '../assets/icons/sun.svg'
import { MainContext, SourceT } from '../misc/MainContext'

const source: SourceT = {
  fr: {
    switchToLightTheme: 'Passer en thème clair',
    switchToDarkTheme: 'Passer en thème sombre',
    switchLanguage: 'English version',
    downloadDesc: 'Imprimer/Télécharger en PDF'
  },
  en: {
    switchToLightTheme: 'Switch to light theme',
    switchToDarkTheme: 'Switch to dark theme',
    switchLanguage: 'Version originale (Français) / Original version (French)',
    downloadDesc: 'Print/Download PDF'
  }
}

export default function Toolbar() {
  const { isDarkMode, setIsDarkMode, setIsDownloadModalOpen, setLang, getText } = useContext(MainContext)
  const [isOpened, setIsOpened] = useState<boolean>(true)

  function toggleIsOpened() {
    setIsOpened(prev => !prev)
  }
  
  return (
    <div 
    className="HIDE_DOWNLOAD fixed left-0 top-1/2 -translate-y-1/2 bg-background-secondary flex justify-center transition-all shadow-sm shadow-secondary" 
    style={{ transform: isOpened ? 'none' : 'translateX(-2.5rem)' }}>
      <div className="flex flex-col w-10 bg-background cursor-pointer" id="toolbar">
        <img 
          title={isDarkMode ? getText(source, 'switchToLightTheme') : getText(source, 'switchToDarkTheme')}
          src={isDarkMode ? sunIcon : moonIcon}
          style={ isDarkMode ? {} : { padding: '0.4rem', position: 'relative', bottom: '0.1rem' } }
          alt={isDarkMode ? getText(source, 'switchToLightTheme') : getText(source, 'switchToDarkTheme')}
          onClick={() => setIsDarkMode(prev => !prev)} />
        <LanguageIcon
          title={getText(source, 'switchLanguage')}
          className="p-2 relative"
          onClick={() => setLang(prev => prev === 'fr' ? 'en' : 'fr')} />
        <DownloadIcon
          title={getText(source, 'downloadDesc')}
          className="p-2" 
          onClick={() => setIsDownloadModalOpen(true)} />
          
      </div>
      <button className="text-2xl flex items-center p-[0.15rem] cursor-pointer" onClick={toggleIsOpened}>
        {isOpened ? "<" : ">"}
      </button>
    </div>
  )
}