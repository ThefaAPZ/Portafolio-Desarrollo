import { useState } from 'react';
import flutter from '../assets/flutter.png';
import mongodb from '../assets/mongodb.png';
import css from '../assets/css.png';
import html from '../assets/html.png';
import netbeans from '../assets/netbeans.png';
import vmware from '../assets/vmware.png';
import postman from '../assets/postman.png';
import visual from '../assets/visual.png';
import python from '../assets/python.png';
import docker from '../assets/docker.png';
import react from '../assets/react.png';
import angular from '../assets/angular.png';
import javascript from '../assets/javascript.png';
import android from '../assets/android.png';
import '../Experience.css';

const technologies = {
  "Herramientas de Desarrollo": [
    { name: 'Visual Studio', img: visual },
    { name: 'Android Studio', img: android },
    { name: 'Postman', img: postman },
    { name: 'VMware Workstation', img: vmware },
    { name: 'Apache NetBeans', img: netbeans },
  ],
  "Tecnologías Frontend": [
    { name: 'HTML', img: html },
    { name: 'CSS', img: css },
    { name: 'JavaScript', img: javascript },
    { name: 'React', img: react },
    { name: 'Angular', img: angular },
    { name: 'Flutter', img: flutter },
  ],
  "Backend y Bases de Datos": [
    { name: 'Python', img: python },
    { name: 'MongoDB', img: mongodb },
    { name: 'Docker', img: docker },
  ]
};

function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedGroup, setSelectedGroup] = useState("Herramientas de Desarrollo");

  const handleNext = () => {
    const techArray = technologies[selectedGroup];
    setCurrentIndex((prevIndex) => (prevIndex + 1) % techArray.length);
  };

  const handlePrevious = () => {
    const techArray = technologies[selectedGroup];
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? techArray.length - 1 : prevIndex - 1));
  };

  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
    setCurrentIndex(0);
  };

  return (
    <section className="experience">
      <div className="content-wrapper">
        <h2 className="experience-title">Tecnologías de desarrollo</h2>
        <p className="experience-subtitle">Experiencia en desarrollo móvil con Flutter, bases de datos NoSQL y gestión de proyectos.</p>

        <div className="group-tabs">
          {Object.keys(technologies).map(group => (
            <button
              key={group}
              className={`group-tab ${group === selectedGroup ? 'active' : ''}`}
              onClick={() => handleGroupSelect(group)}
            >
              {group}
            </button>
          ))}
        </div>

        <div className="carousel-wrapper">
          <button className="arrow left-arrow" onClick={handlePrevious}>
            &#8249;
          </button>

          <div className="carousel-container">
            <div className="carousel">
              {technologies[selectedGroup].map((tech, index) => (
                <div
                  key={tech.name}
                  className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                  style={{
                    transform: `translateX(${(index - currentIndex) * 120}%)`
                  }}
                >
                  <div className="item-content">
                    <div className="image-wrapper">
                      <img src={tech.img} alt={tech.name} />
                    </div>
                    {index === currentIndex && (
                      <p className="tech-name">{tech.name}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="arrow right-arrow" onClick={handleNext}>
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
}

export default Experience;