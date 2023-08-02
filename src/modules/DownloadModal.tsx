import { useMainContext } from '../misc/MainContext'

export default function DownloadModal() {

  let { downloadModalRef } = useMainContext()

  return (
    <dialog ref={downloadModalRef} open>
      <p>coucou</p>
    </dialog>
  )
}