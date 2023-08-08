import irisLogo from '../assets/iris-insa.png'
import jeLogo from '../assets/je.png'
import synopsysLogo from '../assets/synopsys.svg'
import worldlineLogo from '../assets/worldline.svg'
import { SourceT, useMainContext } from '../misc/MainContext'

const source: SourceT = {
  fr: {
    sectionTitle: 'Expériences professionnelles',
    wlNavigate: 'Cliquez pour naviguer vers le site de Worldline',
    wlDesc: 'Février - Août 2023 (6 mois)',
    wlTitle1: 'Stage - Ingénieur Étude et Développement',
    wlTitle2: 'pour la solution Sips,',
    wlTitle3: ', Tours (37)',
    wlItem1: 'Expérience du développement en Java sur un logiciel de paiement en ligne',
    wlItem2: 'Animation d\'une conférence sur les notions de cybersécurité et du pentest',
    synopsysNavigate: 'Cliquez pour naviguer vers le site de Synopsys',
    synopsysDesc: 'Avril - Août 2022 (4 mois)',
    synopsysTitle1: 'Stage - Consultant Sécurité Informatique',
    synopsysTitle2: ', Munich (Allemagne)',
    synopsysItem1: 'Pentesting : Applications Web & Mobile, Reverse-engineering, Embarqué',
    synopsysItem2: 'Échanges techniques avec les clients en anglais',
    jeNavigate: 'Cliquez pour naviguer vers le site d\'Iris INSA',
    jeDesc: 'Janvier 2021 - Février 2022',
    jeTitle1: 'Junior Entreprise - Chef de projet',
    jeTitle2: ', INSA Centre Val-de-Loire',
    jeItem1: 'Suivi et gestion de projet, intermédiaire entre les étudiants et les clients',
    jeItem2: 'Accompagnement de clients, établissement de cahier de charges',
  },
  en: {
    sectionTitle: 'Professional Experience',
    wlNavigate: 'Click to navigate to Worldline\'s website',
    wlDesc: 'February - August 2023 (6 months)',
    wlTitle1: 'Internship - Software Engineer',
    wlTitle2: 'for Sips,',
    wlTitle3: ', Tours (France, 37)',
    wlItem1: 'Java JEE development for an online payment software',
    wlItem2: 'Cybersecurity conference on security concepts and pentesting, for the development teams',
    synopsysNavigate: 'Click to navigate to Synopsys\'s website',
    synopsysDesc: 'April - August 2022 (4 months)',
    synopsysTitle1: 'Internship - Computer Security Consultant',
    synopsysTitle2: ', Munich (Germany)',
    synopsysItem1: 'Pentesting: Web & Mobile Applications, Reverse-engineering, Embedded',
    synopsysItem2: 'Technical discussions with clients in English',
    jeNavigate: 'Click to navigate to Iris INSA\'s website',
    jeDesc: 'January 2021 - February 2022',
    jeTitle1: 'Junior Enterprise - Project Manager',
    jeTitle2: ', INSA Centre Val-de-Loire (France, 18)',
    jeItem1: 'Project monitoring, main intermediary between students and clients',
    jeItem2: 'Client specifications establishment, relationship with companies',
}

}

export default function Experiences() {
  const { getText } = useMainContext()
  return (
    <section>
      <h4>{ getText(source, 'sectionTitle') }</h4>
      <div className="separator"></div>

      <a href="https://sips.worldline.com/fr/home.html" target="_blank" className="flex flex-col" title={getText(source, 'wlNavigate')}>
        <p className="description">{ getText(source, 'wlDesc') }</p>
        <div className="title">
          <h5>{ getText(source, 'wlTitle1') }</h5>
          <p>&nbsp;{ getText(source, 'wlTitle2') }</p>
          <img src={worldlineLogo} alt="Worldline logo" className="h-[0.65rem] mx-1 relative top-[0.08rem]" />
          <p>{ getText(source, 'wlTitle3') }</p>
        </div>
        <ul>
          <li>{ getText(source, 'wlItem1') }</li>
          <li>{ getText(source, 'wlItem2') }</li>
        </ul>
      </a>

      <a href="https://www.synopsys.com/software-integrity.html" target="_blank" className="flex flex-col" title={getText(source, 'synopsysNavigate')}>
        <p className="description">{ getText(source, 'synopsysDesc') }</p>
        <div className="title">
          <h5>{ getText(source, 'synopsysTitle1') }</h5>
          <p>,</p>
          <img src={synopsysLogo} alt="Synopsys logo" className="h-[0.85rem] ml-1 relative top-[0.2rem]" />
          <p>{ getText(source, 'synopsysTitle2') }</p>
        </div>
        <ul>
          <li>{ getText(source, 'synopsysItem1') }</li>
          <li>{ getText(source, 'synopsysItem2') }</li>
        </ul>
      </a>

      <a href="https://iris.insa-cvl.fr/" target="_blank" className="flex justify-between" title={getText(source, 'jeNavigate')}>
        <div>
          <p className="description">{ getText(source, 'jeDesc') }</p>
          <div className="title">
            <h5>{ getText(source, 'jeTitle1') }</h5>
            <p>&nbsp;{ getText(source, 'jeTitle2') }</p>
          </div>
          <ul>
            <li>{ getText(source, 'jeItem1') }</li>
            <li>{ getText(source, 'jeItem2') }</li>
          </ul>
        </div>
        <div className="flex gap-2">
          <img src={irisLogo} alt="" className="h-6 self-end justify-self-center relative -top-1 right-5" />
          <img src={jeLogo} alt="" className="h-6 self-end justify-self-center relative -top-1 right-5" />
        </div>
      </a>
    </section>
  )
}