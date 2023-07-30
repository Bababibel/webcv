import Header from './Header'
import Education from './Education'
import Experiences from './Experiences'
import Sidebar from './Sidebar'

export default function Main() {

  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('theme-dark')
  } else {
    document.documentElement.classList.remove('theme-dark')
  }

  function handleToggle() {
    if (document.documentElement.classList.contains('theme-dark')) {
      document.documentElement.classList.replace('theme-dark', 'theme-light')
    } else {
      document.documentElement.classList.replace('theme-light', 'theme-dark')
    }
  }
  handleToggle() // reset to light theme for debug

  return (
    <div className="flex w-full h-full justify-center items-center bg-background">
      <main className="flex aspect-A4 shadow-lg max-w-7xl w-full">
        <div className="flex flex-col w-full">
          <Header />
          <Education />
          <Experiences />
        </div>
        <Sidebar />
      </main>
      <button className="absolute bg-secondary text-base-dark" onClick={handleToggle}>Toggle</button>
    </div>
  )
}