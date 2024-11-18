import '../Header.css';
import gmail from '../assets/gmail.png';
import telefono from '../assets/telefono.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import foto from '../assets/foto_persona.png';

function Header() {
  return (
    <>
      {/* Contenido del Header Principal */}
      <header className="header-container">
        <div className="header-content">
          <div className="text-section">
            <p className="greeting">👋 ¡Hola! Soy</p>
            <h1>
              <span className="highlight">Mireya Apaza</span>, <br />
              <span className="role">Frontend Developer</span>
            </h1>
            <p className="description">
              Con experiencia en <span className="highblue">desarrollo web</span> y apasionada por
              crear experiencias de usuario intuitivas y efectivas. Me especializo en
              <span className="highpurple"> React, JavaScript, HTML, CSS</span> y
              tecnologías frontend modernas.
            </p>
            <div className="social-links">
              <a href="https://wa.me/51951781333" target="_blank" rel="noopener noreferrer">
                <img src={telefono} alt="Telefono" />
              </a>
              <a href="mailto:mireyaapaza13@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src={gmail} alt="Correo" />
              </a>
              <a href="https://github.com/ThefaAPZ" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/mireya-apaza/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" />
              </a>
            </div>
          </div>
          <div className="avatar-section d-none d-md-block">
            <img src={foto} alt="Mireya Apaza" className="avatar-img" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;