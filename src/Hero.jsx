import './Hero.css';
import logo from './image-removebg-preview.png';

function Hero() {
  return (
    <>
      <div className="global">
        <div className="hero">
          <span className="logo">
            <img src={logo} alt="Logo de l'application" />
          </span>
          <div className="menu">
            <span>Accueil</span>
            <span>Contact</span>
            <span>Portfolio</span>
            <span>Plus</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
