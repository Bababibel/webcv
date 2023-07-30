export default function Education() {
  return (
    <section>
      <h4>Formations</h4>
      <div className="separator"></div>

      <p className="description">Diplôme remis en Septembre 2023</p>
      <h5 className="">Ingénieur en Sécurité et Technologies Informatiques, INSA Centre Val-de-Loire</h5>
      <ul>
        <li>2 ans de classe préparatoire intégrée</li>
        <li>4 mois de stage à l’étranger dans un environnement anglophone</li>
        <li>Projets de groupe :
          <ul className="sublist">
            <li>Développement Web (React & Express)</li>
            <li>Attaques et défense de jeux de données anonymisées</li>
            <li>Développement d’un jeu en réseau (Python & C)</li>
            <li>Gestion d’une entreprise, stratégie et marketing</li>
          </ul>
        </li>
        <li>Enseignements d’exploration :
          <ul className="sublist">
            <li>Cryptographie des communications</li>
            <li>Objets connectés</li>
            <li>Virtualisation et services Cloud</li>
          </ul>
        </li>
      </ul>
    </section>
  )
}