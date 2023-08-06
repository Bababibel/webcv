import { useMainContext } from '../../misc/MainContext'
import frFlagSvg from '../france-flag.svg'
import ukFlagSvg from '../uk-flag.svg'


export default function LanguageIcon(props : any) {
  const { lang } = useMainContext()

  return (
    <div {...props}>
      <img 
        src={lang === 'fr' ? frFlagSvg : ukFlagSvg} 
        alt=""
        className="w-1/3 absolute top-1 left-1 z-30" />
      <img 
        src={lang === 'en' ? frFlagSvg : ukFlagSvg} 
        alt=""
        className="z-10" />
    </div>
  )
}