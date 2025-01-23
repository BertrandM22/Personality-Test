import React, { useState } from 'react';
import Hero from './Hero';  
import Header from './Header';  
import PersonalityTest from './PersonalityTest';

import image from "./image-removebg-preview.png";
import image1 from "./soft-skill-Optimisme-1024x585.jpg";
import image2 from "./arborescence-site.jpg.webp";
import image3 from "./methode.jpeg";
import image4 from "./colorFlash.jpg";

function App() {
  const [showTest, setShowTest] = useState(false); 
  const [isChecked, setIsChecked] = useState(false);
  
   
 
  
  const startTest = () => {
    setShowTest(true);  
  };

  return (
    <div>
      
      {!showTest ? (
        <div>
          <Hero /> 
        
          
          <Header startTest={startTest} />  
          <div className="divBtn">
        <button className="btn-Header" onClick={startTest} >Commencer le Test</button>
        </div>
        </div>
      ) : (
        <PersonalityTest  />  
      )}
      
    </div>
  );
}

export default App;

