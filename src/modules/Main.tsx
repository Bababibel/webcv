import Header from './Header'
import Education from './Education'
import Experiences from './Experiences'
import Sidebar from './Sidebar'

export default function Main() {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="flex aspect-A4 shadow-lg">
        <div className="flex flex-col">
          <Header />
          <Education />
          <Experiences />
        </div>
        <Sidebar />
      </div>
    </div>
  )
}