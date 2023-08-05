import { useMainContext } from '../../misc/MainContext'
import frFlagSvg from '../france-flag.svg'
import ukFlagSvg from '../uk-flag.svg'


export default function LanguageIcon(props : any) {
  const { lang } = useMainContext()

  switch(lang) {
    case 'fr':
      return (
        <img src={ukFlagSvg} alt="" />
      )
    case 'en': {
      return (
        <img src={frFlagSvg} alt="" />
      )
    }
  }
}