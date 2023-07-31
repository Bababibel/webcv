import { useState } from 'react'

export default function Toolbar() {
  const [isOpened, setIsOpened] = useState<boolean>(true)
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 bg-secondary/10 flex justify-center transition-all border" style={{ transform: isOpened ? 'translateX(-2.5rem)' : 'none' }}>
      <div className="flex flex-col w-10">
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
      </div>
      <button className="" onClick={() => setIsOpened(prev => !prev)}>
        {isOpened ? "<<" : ">>"}
      </button>
    </div>
  )
}