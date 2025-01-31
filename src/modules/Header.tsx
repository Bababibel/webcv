import { SourceT, useMainContext } from "../misc/MainContext"

const source: SourceT = {
  fr: {
    title: "Ingénieur Cybersécurité",
    lookup: "Recherche d'un poste dans le domaine de cybersécurité",
    lookup2: "à Tours (37) ou en hybride / full remote",
    interests:
      "Domaines d'intérêt : sécurité des systèmes d'information, automatisations, développement sécurisé, expertise-conseil en sécurité, gestion du risque",
  },
  en: {
    title: "French Cybersecurity Engineer",
    lookup: "Looking for an application security engineering job",
    lookup2: "Tours (France, 37) or full remote position",
    interests:
      "Interests : I.T. system security management, automation, security-oriented development, security consulting, risk assessment",
  },
}

export default function Header() {
  const { getText } = useMainContext()
  return (
    <header className="flex flex-col text-center px-4">
      <h1 className="drop-shadow-2xl text-3xl font-bold text-primary">
        Baptiste GAUTHIER
      </h1>
      <h2 className="font-bold text-gray-600 text-2xl text-secondary">
        {getText(source, "title")}
      </h2>
      <h3 className="text-xl text-primary mt-2">{getText(source, "lookup")}</h3>
      <p className="text-sm text-primary">{getText(source, "lookup2")}</p>
      <p className="italic text-base text-secondary mt-1">
        {getText(source, "interests")}
      </p>
    </header>
  )
}
