import { useContext, useState } from 'react'

import DownloadIcon from '../assets/icons/DownloadIcon'
import LanguageIcon from '../assets/icons/LanguageIcon'
import moonIcon from '../assets/icons/moon.svg'
import sunIcon from '../assets/icons/sun.svg'
import { MainContext } from '../misc/MainContext'

export default function Toolbar() {
  const { isDarkMode, setIsDarkMode, setIsDownloadModalOpen, setLang } = useContext(MainContext)
  const [isOpened, setIsOpened] = useState<boolean>(true)

  function toggleIsOpened() {
    setIsOpened(prev => !prev)
  }
  
  return (
    <div 
    className="HIDE_DOWNLOAD fixed left-0 top-1/2 -translate-y-1/2 bg-background-secondary flex justify-center transition-all shadow-sm shadow-secondary" 
    style={{ transform: isOpened ? 'none' : 'translateX(-2.5rem)' }}>
      <div className="flex flex-col w-10 bg-background cursor-pointer">
        <img 
          title={isDarkMode ? 'Passer en thème clair' : 'Passer en thème sombre'}
          src={isDarkMode ? sunIcon : moonIcon}
          style={ isDarkMode ? {} : { padding: '0.4rem', position: 'relative', bottom: '0.1rem' } }
          alt="Toggle dark mode" 
          onClick={() => setIsDarkMode(prev => !prev)} />
        <DownloadIcon
          title="Télécharger le CV en pdf"
          className="p-2" 
          onClick={() => setIsDownloadModalOpen(true)} />
        <LanguageIcon
          title="Changer la langue"
          className="p-2"
          onClick={() => {setLang(prev => prev === 'fr' ? 'en' : 'fr'); console.log("cc")}} />
          
      </div>
      <button className="text-2xl flex items-center p-[0.15rem] cursor-pointer" onClick={toggleIsOpened}>
        {isOpened ? "<" : ">"}
      </button>
    </div>
  )
}