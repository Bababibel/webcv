import insaLogo from '../assets/insa.png'
import tryhackmeDarkLogo from '../assets/tryhackme-dark.png'
import tryhackmeLogo from '../assets/tryhackme.png'
import { useMainContext } from '../misc/MainContext'

export default function Education() {

  const { isDarkMode } = useMainContext()
  const tryhackmePath = isDarkMode ? tryhackmeDarkLogo : tryhackmeLogo

  return (
    <section>
      <div>
        <h4>Formations</h4>
        <div className="separator"></div>
      </div>

      <a href="https://www.insa-centrevaldeloire.fr/fr/formation/securite-et-technologies-informatique" target="_blank" className="flex items-center between" title="Cliquez pour naviguer vers le descriptif de la filière">
        <div>
          <p className="description">Diplôme remis en Septembre 2023</p>
          <div className="title">
            <h5>Ingénieur en Sécurité et Technologies Informatiques</h5>
            <p>, INSA Centre Val-de-Loire</p>
          </div>
          <ul>
            <li>2 ans de classe préparatoire intégrée</li>
            <li>4 mois de stage à l'étranger dans un environnement anglophone</li>
            <li>Projets de groupe :
              <ul className="sublist">
                <li>Développement Web (React & Express)</li>
                <li>Attaques et défense de jeux de données anonymisées</li>
                <li>Développement d'un jeu en réseau (Python & C)</li>
                <li>Gestion d'une entreprise, stratégie et marketing</li>
              </ul>
            </li>
            <li>Enseignements d'exploration :
              <ul className="sublist">
                <li>Cryptographie des communications</li>
                <li>Objets connectés</li>
                <li>Virtualisation et services Cloud</li>
              </ul>
            </li>
          </ul>
        </div>
        <img src={insaLogo} alt="" className="h-6 self-center relative top-2" />
      </a>

      <a href="https://tryhackme.com/path/outline/jrpenetrationtester" target="_blank" className="flex justify-between" title="Cliquez pour naviguer vers le site de TryHackMe">
        <div>
          <p className="description">Janvier 2023</p>
          <div className="title">
            <h5>Certification Junior Penetration Tester </h5>
            <p>&nbsp;learning path, TryHackMe.com</p>
          </div>
          <p className="text-base">Plateforme d'entrainement à la sécurité offensive & Capture The Flag orientés Web</p>
        </div>
        <img src={tryhackmePath} alt="" className="h-6 self-end justify-self-center relative -top-1 right-5" />
      </a>

      <div>
        <p className="description">Juillet 2018</p>
        <div className="title">
          <h5>Bac général Scientifique</h5>
          <p>, lycée Augustin Thierry, Blois (41)</p>
        </div>
        <p className="text-base">Mention Très Bien, option Sciences de l'Ingénieur (SI)</p>
      </div>
    </section>
  )
}