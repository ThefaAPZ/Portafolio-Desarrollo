import "../Projects.css";
import ager1 from "../assets/ager1.png";
import ager2 from "../assets/ager2.png";
import ager3 from "../assets/ager3.png";
import park from "../assets/park.png";

function Projects() {
  return (
    <section className="projects-section">
      <div className="background-image"></div>
      <h2 className="title">Proyectos Personales</h2>

      {/* Fila 1 - AgerLinks */}
      <div className="projects-row">
        <div className="project-card-text">
          <h3>AgerLinks</h3>
          <p>
            AgerLinks se centró en el desarrollo de un sistema de monitoreo IoT para la acuaponía en la ciudad de Arequipa, dirigido
            específicamente a los agricultores urbanos y a los usuarios de huertos. El desafío principal radicaba en la ausencia de sistemas
            de monitoreo eficaces que incorporaran tecnologías avanzadas, y en la imperiosa necesidad de hallar soluciones sostenibles para la
            producción de alimentos en un escenario de escasez de agua. Mi contribución en este proyecto fue la creación de una aplicación
            utilizando <strong>Android Studio</strong> y <strong>Jetpack Compose</strong>.
          </p>
        </div>
        <div className="project-card-images">
          <div className="project-image d-none d-xl-block">
            <img src={ager1} alt="AgerLinks 1" className="project-image-item" />
          </div>
          <div className="project-image d-none d-xl-block">
            <img src={ager2} alt="AgerLinks 2" className="project-image-item" />
          </div>
          <div className="project-image d-none d-xl-block">
            <img src={ager3} alt="AgerLinks 3" className="project-image-item" />
          </div>
        </div>
      </div>

      <hr/>

      {/* Fila 2 - Data Parking */}
      <div className="projects-row">
        <div className="project-card-image d-none d-xl-block">
          <img src={park} alt="Data Parking" className="project-image" />
        </div>
        <hr/>
        <div className="project-card-text">
          <h3>Data Parking</h3>
          <p>
            El Sistema de Parqueo es una solución tecnológica que facilita el registro y almacenamiento de información de vehículos en
            estacionamientos. Utilizando Java y una base de datos, este sistema reemplaza los métodos manuales y propensos a errores,
            proporcionando un registro preciso de la entrada y salida de vehículos, junto con detalles del propietario. Esto mejora la
            organización de los datos y previene problemas causados por la pérdida de registros manuales. Mi contribución al proyecto fue la
            creación de diagramas UML.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
