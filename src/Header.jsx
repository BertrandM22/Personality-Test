import "./Header.css";
import image from "./image-removebg-preview.png";
import image1 from "./soft-skill-Optimisme-1024x585.jpg";
import image2 from "./arborescence-site.jpg.webp";
import image3 from "./methode.jpeg";
import image4 from "./colorFlash.jpg";


function Header() {
  return (
    <>
      <div className="gridHeader" id="header">
        <div className="gridItem one">
          <img src={image1} className="imgAll" alt="Image 1" />
          <h2>Devis Sur Mesure</h2>
          <p>
            Chez <strong>LOREM IPSUM</strong>, nous nous engageons à fournir des
            devis personnalisés et détaillés, conçus pour répondre précisément à
            vos besoins. Chaque devis est préparé avec soin pour garantir votre
            satisfaction.
          </p>
        </div>
        <div className="gridItem two">
          <img src={image2} className="imgAll" alt="Image 2" />
          <h2>Apprendre à Se Comprendre</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
            perferendis dignissimos officiis, fuga aliquam totam sapiente magnam
            labore cumque sequi sit. 
          </p>
        </div>
        <div className="gridItem three">
          <img src={image3} className="imgAll" alt="Image 3" />
          <h2>Test de Personnalité Gratuit</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Magnam unde at libero, eos excepturi cupiditate, 
            accusamus sit illo fugit tempore expedita culpa. 
            Quod iste eos tempora dicta laudantium incidunt repudiandae?
          </p>
        </div>
      </div>
    </>
  );}
  

export default Header;
