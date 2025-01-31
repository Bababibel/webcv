import { SourceT, useMainContext } from "../misc/MainContext"

const source: SourceT = {
  fr: {
    sectionTitle: "Compétences",
    category1: "Expérimenté",
    category2: "Bonne compréhension",
    secToolsTitle: "Outils liés à la sécurité informatique",
    secToolsItems1: "Burp Suite, SentinelOne, Cybereason, Forescout",
    secToolsItems2:
      "Kali, Metasploit, CyberArk (Pcloud), Digital Guardian, Qualys",
    progTitle: "Technologies",
    progItems1: "Docker, HTML/CSS, JavaScript (React), Python, Java",
    progItems2: "C, SQL, C#,  PHP, Bash",
    osCategory: "Systèmes d'exploitation",
    osItems: "Unix & Windows",
    softSkillsCategory: "Savoir-être",
    softSkillsItems: "Curieux, Rigoureux, Persévérant",
  },
  en: {
    sectionTitle: "Skills",
    category1: "Experienced",
    category2: "Familiar",
    secToolsTitle: "Cybersecurity Tools",
    secToolsItems1: "Burp Suite, SentinelOne, Cybereason, Forescout",
    secToolsItems2:
      "Kali, Metasploit, CyberArk (Pcloud), Digital Guardian, Qualys",
    progTitle: "Technologies",
    progItems1: "Docker, HTML/CSS, JavaScript (React), Python, Java",
    progItems2: "C, SQL, C#, PHP, Bash",
    osCategory: "Operating Systems",
    osItems: "Unix & Windows",
    softSkillsCategory: "Soft Skills",
    softSkillsItems: "Curious, Thorough, Persistent",
  },
}

export default function Skills() {
  const { getText } = useMainContext()

  return (
    <section>
      <div>
        <h4>{getText(source, "sectionTitle")}</h4>
        <div className="separator"></div>
      </div>

      <div>
        <h5 className="text-subtitle">{getText(source, "secToolsTitle")}</h5>
        <ul>
          <li>
            <span className="flex">
              <p className="text-subtitle font-normal text-secondary/90 w-1/3">
                {getText(source, "category1")}
              </p>
              <p>{getText(source, "secToolsItems1")}</p>
            </span>
          </li>
          <li>
            <span className="flex">
              <p className="text-subtitle font-normal text-secondary/90 w-1/3">
                {getText(source, "category2")}
              </p>
              <p>{getText(source, "secToolsItems2")}</p>
            </span>
          </li>
        </ul>
      </div>

      <div>
        <h5 className="text-subtitle">{getText(source, "progTitle")}</h5>
        <ul>
          <li>
            <span className="flex">
              <p className="text-subtitle font-normal text-secondary/90 w-1/3">
                {getText(source, "category1")}
              </p>
              <p>{getText(source, "progItems1")}</p>
            </span>
          </li>
          <li>
            <span className="flex">
              <p className="text-subtitle font-normal text-secondary/90 w-1/3">
                {getText(source, "category2")}
              </p>
              <p>{getText(source, "progItems2")}</p>
            </span>
          </li>
        </ul>
      </div>

      <span className="flex">
        <h5 className="text-subtitle w-1/3">{getText(source, "osCategory")}</h5>
        <p className="ml-[0.7rem] text-lg">{getText(source, "osItems")}</p>
      </span>

      <span className="flex">
        <h5 className="text-subtitle w-1/3">
          {getText(source, "softSkillsCategory")}
        </h5>
        <p className="ml-[0.7rem] text-lg">
          {getText(source, "softSkillsItems")}
        </p>
      </span>
    </section>
  )
}
