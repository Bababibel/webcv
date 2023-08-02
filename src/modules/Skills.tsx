export default function Skills() {
  return (
    <section>
      <h4>Compétences</h4>
      <div className="separator"></div>

      <div>
        <h5 className="text-subtitle">Outils liés à la sécurité informatique</h5>
        <ul>
          <li className="">
            <span className="flex">
              <p className="text-subtitle font-normal text-secondary/90 w-1/3">Expérimenté</p>
              <p>Kali, Burp Suite, outils en CLI (Nmap, GuBuster, Fuff…)</p>
            </span>
          </li>
          <li className="">
            <span className="flex">
              <p className="text-subtitle font-normal text-secondary/90 w-1/3">Bonne compréhension</p>
              <p>Metasploit, Frida, Ghidra, GDB</p>
            </span>
          </li>
        </ul>
      </div>

      <div>
        <h5 className="text-subtitle">Programmation</h5>
        <ul>
          <li className="">
            <span className="flex">
              <p className="text-subtitle font-normal text-secondary/90 w-1/3">Expérimenté (projets)</p>
              <p>HTML/CSS, JavaScript (React), Python, C, Java</p>
            </span>
          </li>
          <li className="">
            <span className="flex">
              <p className="text-subtitle font-normal text-secondary/90 w-1/3">Bonne compréhension</p>
              <p>SQL, C#,  PHP, Bash</p>
            </span>
          </li>
        </ul>
      </div>

      <span className="flex">
        <h5 className="text-subtitle w-1/3">Systèmes d'exploitation</h5>
        <p className="ml-[0.7rem]">Unix & Windows</p>
      </span>

      <span className="flex">
        <h5 className="text-subtitle w-1/3">Savoir-être</h5>
        <p className="ml-[0.7rem]">Curieux, Rigoureux, Persévérant</p>
      </span>
    </section>
  )
}