import insaLogo from '../assets/insa.png'
import tryhackmeDarkLogo from '../assets/tryhackme-dark.png'
import tryhackmeLogo from '../assets/tryhackme.png'
import { SourceT, useMainContext } from '../misc/MainContext'

const source: SourceT = {
  fr: {
    sectionTitle: 'Formations',
    insaNavigate: 'Cliquez pour naviguer vers le descriptif de la filière',
    insaDesc: 'Septembre 2023',
    insaTitle1: 'Ingénieur en Sécurité et Technologies Informatiques',
    insaTitle2: ', INSA Centre Val-de-Loire',
    insaItem1: '2 ans de classe préparatoire intégrée',
    insaItem2: '4 mois de stage à l\'étranger dans un environnement anglophone',
    thmNavigate: 'Cliquez pour naviguer vers le site de TryHackMe',
    thmDesc: 'Janvier 2023',
    thmTitle1: 'Certification Junior Penetration Tester',
    thmTitle2: 'learning path, TryHackMe.com',
    thmRow: 'Plateforme d\'entrainement à la sécurité offensive & Capture The Flag orientés Web',
    bacDesc: 'Juillet 2018',
    bacTitle1: 'Bac général Scientifique',
    bacTitle2: ', lycée Augustin Thierry, Blois (41)',
    bacRow: 'Mention Très Bien, option Sciences de l\'Ingénieur (SI)',
  },
  en: {
    sectionTitle: 'Education',
    insaNavigate: 'Click to navigate to the department\'s presentation sheet',
    insaDesc: 'September 2023',
    insaTitle1: 'I.T. Security engineer',
    insaTitle2: ', INSA Centre Val-de-Loire, France',
    insaItem1: '2-year preparatory class',
    insaItem2: '4-month internship in an English-speaking country',
    thmNavigate: 'Click to navigate to TryHackMe\'s website',
    thmDesc: 'January 2023',
    thmTitle1: 'Junior Penetration Tester Certification',
    thmTitle2: 'learning path, TryHackMe.com',
    thmRow: 'Offensive Security training platform & Web-oriented Capture The Flag',
    bacDesc: 'July 2018',
    bacTitle1: 'General Scientific Baccalaureate',
    bacTitle2: ', Augustin Thierry High School, France (Blois, 41)',
    bacRow: 'Highest Honors, Engineering Sciences (SI) specialization'
  }
}

export default function Education() {

  const { isDarkMode, getText } = useMainContext()
  const tryhackmePath = isDarkMode ? tryhackmeDarkLogo : tryhackmeLogo 

  return (
    <section>
      <div>
        <h4>{ getText(source, 'sectionTitle') }</h4>
        <div className="separator"></div>
      </div>

      <a href="https://www.insa-centrevaldeloire.fr/fr/formation/securite-et-technologies-informatique" target="_blank" className="flex items-center justify-between" title={getText(source, 'insaNavigate')}>
        <div>
          <p className="description">{ getText(source, 'insaDesc') }</p>
          <div className="title">
            <h5>{ getText(source, 'insaTitle1') }</h5>
            <p>{ getText(source, 'insaTitle2') }</p>
          </div>
          <ul>
            <li>{ getText(source, 'insaItem1') }</li>
            <li>{ getText(source, 'insaItem2') }</li>
          </ul>
        </div>
        <img src={insaLogo} alt="" className="h-5 relative top-2 right-5" />
      </a>

      <a href="https://tryhackme.com/path/outline/jrpenetrationtester" target="_blank" className="flex justify-between" title={getText(source, 'thmNavigate')}>
        <div>
          <p className="description">{ getText(source, 'thmDesc') }</p>
          <div className="title">
            <h5>{ getText(source, 'thmTitle1') }</h5>
            <p>&nbsp;{ getText(source, 'thmTitle2') }</p>
          </div>
          <p className="text-base">{ getText(source, 'thmRow') }</p>
        </div>
        <img src={tryhackmePath} alt="" className="h-6 self-end justify-self-center relative -top-1 right-5" />
      </a>

      <div>
        <p className="description">{ getText(source, 'bacDesc') }</p>
        <div className="title">
          <h5>{ getText(source, 'bacTitle1') }</h5>
          <p>{ getText(source, 'bacTitle2') }</p>
        </div>
        <p className="text-base">{ getText(source, 'bacRow') }</p>
      </div>
    </section>
  )
}