import profilePicture from '../assets/baptiste-gauthier.png'
import insaLogo from '../assets/insa.png'
import linkedinLogo from '../assets/linkedin.svg'
import franceFlag from '../assets/france-flag.svg'
import ukFlag from '../assets/uk-flag.svg'
import spainFlag from '../assets/spain-flag.svg'

export default function Sidebar() {
  return (
    <nav className="flex flex-col justify-evenly bg-secondary/10 w-[38%] p-2">
        <div className="flex flex-col items-center gap-2">
          <img src={profilePicture} alt="Profile picture" className="w-full" />
          <img src={insaLogo} alt="INSA logo" className="w-1/2" />
        </div>

        <div className="blocInfo">
          <h4>Informations</h4>
          <h5>Site Web</h5>
          <p>bgauthier.fr</p>
          <a href="tel:+33783068780" className="hover:text-primary flex flex-col">
            <h5>Téléphone</h5>
            <p>+33 (0)7 83 06 87 80</p>
          </a>
          <a href="mailto:contact@bgauthier.fr" className="hover:text-primary flex flex-col">
            <h5>Email</h5>
            <p>contact@bgauthier.fr</p>
          </a>
          <h5>Permis B</h5>
          <p>Avec véhicule</p>
        </div>

        <div className="blocInfo">
          <h4>Langues parlées</h4>
          <h5 className="flex items-baseline gap-1">
            <img src={franceFlag} alt="" className="h-2" />
            Français
          </h5>
          <p>Langue native</p>
          <h5 className="flex items-baseline gap-1">
            <img src={ukFlag} alt="" className="h-2" />
            Anglais
          </h5>
          <p>Compétences professionnelles</p>
          <p className="italic text-xsm">Certification TOEIC (930/990) en Avril 2022</p>
          <h5 className="flex items-baseline gap-1">
            <img src={spainFlag} alt="" className="h-2" />
            Espagnol
          </h5>
          <p>Niveau A2 - Débutant</p>
        </div>

        <div className="blocInfo">
          <h4>Investissements personnels</h4>
          <ul>
            <li>Développement & déploiement d'une application mobile d'automatisation de processus industriels</li>
            <li>8+ ans de batterie, prestations sur scène et en orchestre</li>
            <li>Engagement auprès de plusieurs associations en école supérieure</li>
          </ul>
        </div>

        <div>
          <h4>Liens</h4>
          <div className="flex mt-2">
            <a href="https://www.linkedin.com/in/baptiste-gauthier-cybersecurity/" target="_blank" className="w-1/6">
              <img src={linkedinLogo} alt="LinkedIn logo" />
            </a>
          </div>
        </div>
    </nav>
  )
}