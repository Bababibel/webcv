import { useContext, useEffect, useRef, useState } from 'react'

import Header from './Header'
import Education from './Education'
import Experiences from './Experiences'
import Sidebar from './Sidebar'
import Skills from './Skills'



export default function Main() {

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
  console.log(isDarkMode, setIsDarkMode)
  //setIsDarkMode(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('theme-dark')
      document.documentElement.classList.remove('theme-light')
    }
    else {
      document.documentElement.classList.add('theme-light')
      document.documentElement.classList.remove('theme-dark')
    }
    console.log("update", isDarkMode)
  }, [isDarkMode])
  
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
    <div className="flex w-full h-full justify-center items-center bg-background">
      <main className="flex aspect-A4 shadow-lg shadow-base/20 w-full max-w-[1000px] my-10" ref={mainRef}>
        <div className="flex flex-col w-full">
          <Header />
          <Education />
          <Experiences />
          <Skills />
        </div>
        <Sidebar />
      </main>
      <button className="absolute bg-secondary text-base-dark" onClick={() => setIsDarkMode(prev => !prev)}>Toggle</button>
    </div>
  )
}