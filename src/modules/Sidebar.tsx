import profilePicture from '../assets/baptiste-gauthier.png'
import franceFlag from '../assets/france-flag.svg'
import linkedinLogo from '../assets/linkedin.svg'
import spainFlag from '../assets/spain-flag.svg'
import ukFlag from '../assets/uk-flag.svg'
import { SourceT, useMainContext } from '../misc/MainContext'

const source: SourceT = {
  fr: {
    infoTitle: 'Informations',
    infoWebHeader: 'Site Web',
    infoPhoneHeader: 'Téléphone',
    infoEmailHeader: 'Email',
    infoLocationHeader: 'Localisation',
    infoLocationDetail: 'Tours, 37',
    infoDrivingHeader: 'Permis B',
    infoDrivingDetail: 'Avec véhicule',
    langTitle: 'Langues parlées',
    langFrHeader: 'Français',
    langFrDetail: 'Langue native',
    langEnHeader: 'Anglais',
    langEnDetail1: 'Compétences professionnelles',
    langEnDetail2: 'Certification TOEIC (930/990) en Avril 2022',
    langEsHeader: 'Espagnol',
    langEsDetail: 'Niveau A2 - Débutant',
    investTitle: 'Investissements personnels',
    investItem1: 'Développement & déploiement d\'une application mobile d\'automatisation de processus industriels',
    investItem2: '10+ ans de batterie, prestations sur scène et en orchestre',
    investItem3: 'Engagement auprès de plusieurs associations en école supérieure',
    linksTitle: 'Liens',
    linksLinkedin: 'Profil LinkedIn',
  },
  en: {
    infoTitle: 'Informations',
    infoWebHeader: 'Website',
    infoPhoneHeader: 'Phone',
    infoEmailHeader: 'E-mail',
    infoLocationHeader: 'Location',
    infoLocationDetail: 'France (Tours, 37)',
    infoDrivingHeader: 'Driving license',
    infoDrivingDetail: 'With personal vehicule',
    langTitle: 'Languages',
    langFrHeader: 'French',
    langFrDetail: 'Native tongue',
    langEnHeader: 'English',
    langEnDetail1: 'Proficient - Professional skills',
    langEnDetail2: 'TOEIC certification (930/990) in April 2022',
    langEsHeader: 'Spanish',
    langEsDetail: 'A2 level - Beginner',
    investTitle: 'Personal investments',
    investItem1: 'Mobile application development & deployment for industrial process automation',
    investItem2: 'Drummer for 10+ years, multiple shows on stage & orchestra',
    investItem3: 'Multiple school association involvments',
    linksTitle: 'Lins',
    linksLinkedin: 'Visit my LinkeIn profile',
  }
}

export default function Sidebar() {
  const { isPictureDisplayed, getText } = useMainContext()

  return (
    <nav className="flex flex-col justify-evenly bg-background-secondary w-[38%] p-2">
        <div className={`flex flex-col items-center gap-2 ${isPictureDisplayed ? 'block' : 'hidden'}`}>
          <img src={profilePicture} alt="Profile picture" className="w-full" />
        </div>

        <div className="blocInfo">
          <h4>{ getText(source, 'infoTitle') }</h4>
          <div>
            <h5>{ getText(source, 'infoWebHeader') }</h5>
            <p>bgauthier.fr</p>
          </div>
          <a href="tel:+33783068780" className="hover:text-primary flex flex-col">
            <h5>{ getText(source, 'infoPhoneHeader') }</h5>
            <p>+33 (0)7 83 06 87 80</p>
          </a>
          <a href="mailto:contact@bgauthier.fr" className="hover:text-primary flex flex-col">
            <h5>{ getText(source, 'infoEmailHeader') }</h5>
            <p>contact@bgauthier.fr</p>
          </a>
          <div>
            <h5>{ getText(source, 'infoLocationHeader') }</h5>
            <p>{ getText(source, 'infoLocationDetail') }</p>
          </div>
          <div>
            <h5>{ getText(source, 'infoDrivingHeader') }</h5>
            <p>{ getText(source, 'infoDrivingDetail') }</p>
          </div>
        </div>

        <div className="blocInfo">
          <h4>{ getText(source, 'langTitle') }</h4>
          <div>
            <h5 className="flex items-baseline gap-1">
              <img src={franceFlag} alt="" className="h-2" />
              { getText(source, 'langFrHeader') }
            </h5>
            <p>{ getText(source, 'langFrDetail') }</p>
          </div>
          <div>
            <h5 className="flex items-baseline gap-1">
              <img src={ukFlag} alt="" className="h-2" />
              { getText(source, 'langEnHeader') }
            </h5>
            <p>{ getText(source, 'langEnDetail1') }</p>
            <p className="italic text-xsm">{ getText(source, 'langEnDetail2') }</p>
          </div>
          <div>
            <h5 className="flex items-baseline gap-1">
              <img src={spainFlag} alt="" className="h-2" />
              { getText(source, 'langEsHeader') }
            </h5>
            <p>{ getText(source, 'langEsDetail') }</p>
          </div>
        </div>

        <div className="blocInfo">
          <h4 className="leading-5">{ getText(source, 'investTitle') }</h4>
          <ul>
            <li>{ getText(source, 'investItem1') }</li>
            <li>{ getText(source, 'investItem2') }</li>
            <li>{ getText(source, 'investItem3') }</li>
          </ul>
        </div>

        <div>
          <h4>{ getText(source, 'linksTitle') }</h4>
          <div className="flex mt-2">
            <a href="https://www.linkedin.com/in/baptiste-gauthier-cybersecurity/" target="_blank" className="w-1/6 hover:border-none hover:scale-110" title={getText(source, 'linksLinkedin')}>
              <img src={linkedinLogo} alt="LinkedIn logo" />
            </a>
          </div>
        </div>
    </nav>
  )
}