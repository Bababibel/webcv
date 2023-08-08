import { SourceT, useMainContext } from '../misc/MainContext'
import SwitchInput from '../misc/SwitchInput'

const source: SourceT = {
  fr: {
    modalTitle: 'Imprimer ou Télécharger au format PDF',
    darkTheme: 'Thème sombre',
    profilePicture: 'Inclure la photo de profil',
    enVersion: 'Version anglaise / English version',
    recommendationsTitle: 'Pour un rendu optimal, utilisez les paramètres suivants :',
    recommendationsItem1: 'Marges : ',
    recommendationsDetail1: 'Aucune',
    recommendationsItem2  : 'Format : ',
    recommendationsDetail2: 'A4',
    exportToPdf: 'Pour exporter au format',
    recommendationsPdfItem: 'Imprimante : ',
    recommendationsPdfDetail: 'Enregistrer au format PDF',
    downloadButton: 'Télécharger',
    closeButton: 'Fermer',
  },
  en: {
    modalTitle: 'Print or Export to PDF',
    darkTheme: 'Dark theme',
    profilePicture: 'Include picture',
    enVersion: 'English version',
    recommendationsTitle: 'For an optimal result, please select the following parameters :',
    recommendationsItem1: 'Margins : ',
    recommendationsDetail1: 'None',
    recommendationsItem2  : 'Format : ',
    recommendationsDetail2: 'A4',
    exportToPdf: 'To export as',
    recommendationsPdfItem: 'Printer : ',
    recommendationsPdfDetail: 'Save as PDF',
    downloadButton: 'Download',
    closeButton: 'Close',
  },
}

export default function DownloadModal() {

  const { isDownloadModalOpen, setIsDownloadModalOpen, isDarkMode, setIsDarkMode, isPictureDisplayed, setIsPictureDisplayed, lang, setLang, getText } = useMainContext()

  function handleClose() {
    setIsDownloadModalOpen(false)
  }
  function handleDownload() {
    window.print()
  }
  return (
    <dialog className={`HIDE_DOWNLOAD fixed top-1/2 -translate-y-1/2 flex flex-col gap-2 bg-background shadow-md text-tertiary p-6 shadow-secondary ${isDownloadModalOpen ? 'block' : 'hidden'}`}>
      <h5 className="mb-4 text-2xl">{ getText(source, 'modalTitle') }</h5>
      <label>
        <SwitchInput state={isDarkMode} setState={() => setIsDarkMode(prev => !prev)} />
        <p>{ getText(source, 'darkTheme') }</p>
      </label>
      <label>
        <SwitchInput state={isPictureDisplayed} setState={() => setIsPictureDisplayed(prev => !prev)} />
        <p>{ getText(source, 'profilePicture') }</p>
      </label>
      <label>
        <SwitchInput state={lang === 'en'} setState={() => setLang(prev => prev === 'fr' ? 'en' : 'fr')} />
        <p>{ getText(source, 'enVersion') }</p>
      </label>
      <div className="mt-4 text-secondary">
        <h6>{ getText(source, 'recommendationsTitle') }</h6>
        <ul>
          <li>{ getText(source, 'recommendationsItem1') }<em className="text-secondary font-bold">{ getText(source, 'recommendationsDetail1') }</em></li>
          <li>{ getText(source, 'recommendationsItem2') }<em className="text-secondary font-bold">{ getText(source, 'recommendationsDetail2') }</em></li>
        </ul>
      </div>
      <div>
        <h6>{ getText(source, 'exportToPdf') } <strong className="text-[tomato]">PDF</strong> :</h6>
        <ul>
          <li>{ getText(source, 'recommendationsPdfItem') }<em className="text-secondary font-bold">{ getText(source, 'recommendationsPdfDetail') }</em></li>
        </ul>
      </div>
      <div className="mt-4 flex gap-2">
        <button onClick={handleDownload} className="bg-primary text-background w-full p-1">{ getText(source, 'downloadButton') }</button>
        <button onClick={handleClose} className="bg-secondary text-background w-full p-1">{ getText(source, 'closeButton') }</button>
      </div>
    </dialog>
  )
}