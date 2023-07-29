import Header from './Header'
import Education from './Education'
import Experiences from './Experiences'
import Sidebar from './Sidebar'



export default function Main() {
  return (
    <div className="">
      <div className="flex">
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