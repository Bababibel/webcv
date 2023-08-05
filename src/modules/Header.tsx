import { SourceT, useMainContext } from '../misc/MainContext'

const source: SourceT = {
  fr: {
    title: 'Ingénieur Sécurité et Technologies Informatiques',
    lookup: 'Recherche d\'un premier emploi dans le monde de la cybersécurité',
    lookup2: 'à Tours (37) ou en full remote',
    interests: 'Domaines d`\'intérêt : pentest, développement orienté sécurité, expertise-conseil en sécurité'
  },
  en: {
    
  }
}


export default function Header() {
  const { getText } = useMainContext()
  return (
    <header className="flex flex-col text-center pt-3 px-4">
      <h1 className="drop-shadow-2xl text-3xl font-bold text-primary">Baptiste GAUTHIER</h1>
      <h2 className="font-bold text-gray-600 text-2xl text-secondary">{ getText(source, 'title') }</h2>
      <h3 className="text-xl text-primary mt-2">{ getText(source, 'lookup') }</h3>
      <p className="text-sm text-primary">{ getText(source, 'lookup2') }</p>
      <p className="italic text-base text-secondary mt-1">{ getText(source, 'interests') }</p>
    </header>
  )
}