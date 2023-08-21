import { useEffect, useRef } from 'react'

import DownloadModal from './DownloadModal'
import Education from './Education'
import Experiences from './Experiences'
import Header from './Header'
import Sidebar from './Sidebar'
import Skills from './Skills'
import Toolbar from './Toolbar'


export default function Main() {
  
  const mainRef = useRef<null | HTMLElement>(null)

  useEffect(() => {
    function handleWindowResize() {
      const newSize = mainRef.current?.offsetWidth ? mainRef.current?.offsetWidth / 42 : 16 
      document.documentElement.style.fontSize = `${newSize}px`
    } 
    window.onresize = handleWindowResize
    window.addEventListener('resize', handleWindowResize)
    handleWindowResize()
    return window.removeEventListener('resize', handleWindowResize)
  }, [mainRef])

  return (
      <div className="flex w-full h-full justify-center items-center min-w-[500px]">
        <main className="flex aspect-A4 shadow-lg shadow-base/20 w-full max-w-[1000px]" ref={mainRef}>
          <div className="flex flex-col w-full">
            <Header />
            <Education />
            <Experiences />
            <Skills />
          </div>
          <Sidebar />
        </main>
        <Toolbar />
        <DownloadModal />
      </div>
  )
}