import { SourceT, useMainContext } from '../misc/MainContext'

const source: SourceT = {
  fr: {
    title: 'Ingénieur Sécurité et Technologies Informatiques',
    lookup: 'Recherche d\'un emploi dans le monde de la cybersécurité',
    lookup2: 'à Tours (37) ou en hybride / full remote',
    interests: 'Domaines d`\'intérêt : sécurité des systèmes d\'information, développement orienté sécurité, expertise-conseil en sécurité, gestion du risque'
  },
  en: {
    title: 'French I.T. Security engineer',
    lookup: 'Looking for a first job in Cybersecurity engineering',
    lookup2: 'Tours (France, 37) or full remote position',
    interests: 'Interests : I.T. system security management, security-oriented development, security consulting, risk assessment'
  }
}


export default function Header() {
  const { getText } = useMainContext()
  return (
    <header className="flex flex-col text-center px-4">
      <h1 className="drop-shadow-2xl text-3xl font-bold text-primary">Baptiste GAUTHIER</h1>
      <h2 className="font-bold text-gray-600 text-2xl text-secondary">{ getText(source, 'title') }</h2>
      <h3 className="text-xl text-primary mt-2">{ getText(source, 'lookup') }</h3>
      <p className="text-sm text-primary">{ getText(source, 'lookup2') }</p>
      <p className="italic text-base text-secondary mt-1">{ getText(source, 'interests') }</p>
    </header>
  )
}