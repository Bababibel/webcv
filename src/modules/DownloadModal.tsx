import { useMainContext } from '../misc/MainContext'
import SwitchInput from '../misc/SwitchInput'

export default function DownloadModal() {

  let { isDownloadModalOpen, setIsDownloadModalOpen, isDarkMode, setIsDarkMode, isPictureDisplayed, setIsPictureDisplayed } = useMainContext()

  function handleClose() {
    setIsDownloadModalOpen(false)
  }
  function handleDownload() {
    window.print()
  }
  return (
    <dialog className={`HIDE_DOWNLOAD fixed top-1/2 -translate-y-1/2 flex flex-col gap-2 bg-background shadow-md text-tertiary p-6 shadow-secondary ${isDownloadModalOpen ? 'block' : 'hidden'}`}>
      <h5 className="mb-4 text-2xl">Télécharger au format PDF</h5>
      <label>
        <SwitchInput state={isDarkMode} setState={() => setIsDarkMode(prev => !prev)} />
        <p>Thème sombre</p>
      </label>
      <label>
        <SwitchInput state={isPictureDisplayed} setState={() => setIsPictureDisplayed(prev => !prev)} />
        <p>Inclure la photo de profil</p>
      </label>
      <div className="mt-4 text-secondary">
        <h6>Pour un rendu optimal, utilisez les paramètres suivants</h6>
        <ul>
          <li>Imprimante : <em className="text-secondary font-bold">Enregistrer au format PDF</em></li>
          <li>Marges : <em className="text-secondary font-bold">Aucune</em></li>
          <li>Format : <em className="text-secondary font-bold">A4</em></li>
        </ul>

      </div>
      <div className="mt-4 flex gap-2">
        <button onClick={handleDownload} className="bg-primary text-background w-full p-1">Télécharger</button>
        <button onClick={handleClose} className="bg-secondary text-background w-full p-1">Fermer</button>
      </div>
    </dialog>
  )
}