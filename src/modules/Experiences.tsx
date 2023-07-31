import synopsysLogo from '../assets/synopsys.svg'
import worldlineLogo from '../assets/worldline.svg'

export default function Experiences() {
  return (
    <section>
      <h4>Expériences professionnelles</h4>
      <div className="separator"></div>

      <a href="https://sips.worldline.com/fr/home.html" target="_blank" className="flex flex-col">
        <p className="description">Avril - Août 2023 (6 mois)</p>
        <div className="title">
          <h5>Stage - Ingénieur développeur</h5>
          <p>&nbsp;pour la solution Sips,</p>
          <img src={worldlineLogo} alt="Worldline logo" className="h-[0.65rem] mx-1 relative top-[0.08rem]" />
          <p>, Tours (37)</p>
        </div>
        <ul>
          <li>Expérience du développement en Java sur un produit utilisé dans le monde entier</li>
          <li>Animation d'une conférence sur les notions de cybersécurité et du pentest</li>
        </ul>
      </a>

      <a href="https://www.synopsys.com/software-integrity.html" target="_blank" className="flex flex-col">
        <p className="description">Avril - Août 2022 (4 mois)</p>
        <div className="title">
          <h5>Stage - Consultant sécurité informatique</h5>
          <p>,</p>
          <img src={synopsysLogo} alt="Synopsys logo" className="h-[0.85rem] ml-1 relative top-[0.2rem]" />
          <p>, Software Integrity Group (Munich)</p>
        </div>
        <ul>
          <li>Immersion à l'international sur le site de Munich, Allemagne</li>
          <li>Pentesting : Application Web & Mobiles, Reverse-engineering, Embarqué</li>
          <li>Formation technique et suivis de projets sous clause de non-divulgation</li>
        </ul>
      </a>

      <div>
        <p className="description">Février 2021 - Mars 2022</p>
        <div className="title">
          <h5>Cours particuliers en programmation</h5>
          <p>, auto-entreprenariat</p>
        </div>
        <ul>
          <li>Initiation à la programmation, encadrement de projets scolaires et professionnels</li>
        </ul>
      </div>
    </section>
  )
}