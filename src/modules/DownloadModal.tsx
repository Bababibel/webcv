import Toggle from 'react-toggle'

import { useState } from 'react'
import { useMainContext } from '../misc/MainContext'

export default function DownloadModal() {

  let { downloadModalRef } = useMainContext()
  const [isPictureEnabled, setIsPictureEnabled] = useState<boolean>(true)
  return (
    <dialog ref={downloadModalRef}>
      <label>
        <Toggle
          defaultChecked={false}
          onChange={e => setIsPictureEnabled(e.target.checked)} />
        <span>No icons</span>
      </label>
    </dialog>
  )
}