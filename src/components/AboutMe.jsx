import laptop from '../assets/laptop1.png';
import '../AboutMe.css';

function AboutMe() {
  return (
    <section id="about-me" className="about-me-container">
      <div className="about-me-content">
        <div className="image-container">
          <img src={laptop} alt="Laptop" className="profile-image" />
        </div>
        <h2 className="about-me-title-overlay">Sobre Mí</h2>
        <div className="text-background">
          <p>Apasionada desarrolladora de software en formación, cursando el sexto ciclo de la carrera de Diseño y Desarrollo de Software a mis 19 años. Mi trayectoria académica combina el dominio de frameworks modernos y gestión de bases de datos, destacándome especialmente en el diseño de interfaces con una excepcional sensibilidad cromática que potencia la experiencia del usuario.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
