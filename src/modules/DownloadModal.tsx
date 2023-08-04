import Toggle from 'react-toggle'

import { useState } from 'react'
import { useMainContext } from '../misc/MainContext'
import SwitchInput from '../misc/SwitchInput'

export default function DownloadModal() {

  let { downloadModalRef } = useMainContext()
  const [isPictureEnabled, setIsPictureEnabled] = useState<boolean>(true)
  return (
    <dialog ref={downloadModalRef}>
      <label>
        <SwitchInput state={isPictureEnabled} setState={setIsPictureEnabled} />
        <span>No icons</span>
      </label>
    </dialog>
  )
}