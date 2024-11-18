import cv from '../assets/cv.pdf';
import '../DownloadCV.css'; // Asegúrate de importar el CSS

function DownloadCV() {
  return (
    <section id="download-cv" className="download-cv">
      <h2 className='titulo'>Curriculum Vitae</h2>
      <p className='p'>Haz clic en el siguiente enlace para descargar mi currículum en formato PDF:</p>
      <a href={cv} download="Mireya_CV.pdf">Descargar CV</a>
    </section>
  );
}

export default DownloadCV;
