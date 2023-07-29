export default function Taskbar() {
  function desktopMode() {

  }

  return (
    <nav>
        <ul className="taskbar">
            <li style={{backgroundImage: 'url("../images/linkedin.png")'}} data-desc="My LinkedIn profile">
                <a href="https://www.linkedin.com/in/baptiste-gauthier-cybersecurity/" target="_blank"></a>
            </li>
            <li style={{backgroundImage: 'url("../images/email.png")'}} data-desc="Contact me by Email">
                <a href="mailto:contact@bgauthier.fr" target="_blank"></a>
            </li>
            <li style={{backgroundImage: 'url("../images/cv_en.png")'}} data-desc="Download my English CV/Resume">
                <a href="../files/baptiste_gauthier_cv_en.pdf" target="_blank"></a>
            </li>
            <li style={{backgroundImage: 'url("../images/cv_fr.png")'}} data-desc="Download my French CV/Resume">
                <a href="../files/baptiste_gauthier_cv_fr.pdf" target="_blank"></a>
            </li>
        </ul>
        <span><a id="signature" onClick={desktopMode}></a></span>
    </nav>
  )
}