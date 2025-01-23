import './Personaliter.css';
import React, { useState } from 'react';
import testData from './testData';
import App from './App';

const PersonalityTest = (backHome) => {
    // enregistre les reponse dans un tableau
  const [TabReponse, setTabReponse] = useState([]); 
  // index de la question en cours
  const [QuestionIndex, setQuestionIndex] = useState(0);
// va calculer le total de point a la fin
  const [result, setResult] = useState(null); 
//  va verifier la soumission
  const [isSubmitted, setIsSubmitted] = useState(false); 

  // Calculer le score total
  const calculateTotal = () => {
    return TabReponse.reduce((total, answer) => total + answer.value, 0); // Total des réponses
  };

  // Message par rapport au condition ( en fonction des points les points)
  const getResultMessage = () => {
    const total = calculateTotal();

    if (total >= 10 && total <= 25) {
      return "C'est pas top.";
    } else if (total > 25 && total <= 58) {
      return "Un peu mieux.";
    } else if (total >= 59 && total <= 65) {
      return "Ah oui, pas mal.";
    } else if (total >= 66 && total <= 90) {
      return "Tu es fort.";
    } else {
      return "Pas assez de points désolé...";
    }
  };



//    verifie les reponse (ID) et les rajoute
    const handleAnswerChange = (questionId, value) => {
        setTabReponse((prevAnswers) => {
        const updatedAnswers = [...prevAnswers];
        const index = updatedAnswers.findIndex((elem) => elem.questionId === questionId);
        if (index === -1) 
            // Ajoute la reponse de l'utilisateur par rapport a l'id
            { updatedAnswers.push({ questionId, value }); 
        } 
        return updatedAnswers;
        });
    };

  
  const handleNextQuestion = () => {
    if (QuestionIndex < testData.questions.length - 1) 
        // passe a la question suivante ( en fonction de l'index )
        {setQuestionIndex(QuestionIndex + 1); 
    } else 
    // si plus de question  alors soumet le formulaire pour avoir les résultats
    {handleSubmit(); 
    }
  };

  // soumet le formulaire pour avoir les résultats
  const handleSubmit = (event) => {
    
    const totalScore = calculateTotal(); 
    setResult(totalScore); 
    // SI soumis alors change le Submitted en true( val de base false)
    setIsSubmitted(true); 
  };

  
  const currentQuestion = testData.questions[QuestionIndex];

  return (
    <div>
      <div className="globalAll">
        
        <h2 className='h2Test'>Test de personnalité</h2>
        <form  className="questionAll"onSubmit={handleSubmit}>
          <div className="zero" key={currentQuestion.id}>
            <p>{currentQuestion.question}</p>
            {currentQuestion.options.map((option) => (
              <div className="question" key={option.value}>
                <input
                  type="radio"
                  name={currentQuestion.id}
                  value={option.value}
                  onChange={() => handleAnswerChange(currentQuestion.id, option.value)} 
                  // Désactiver les réponses après soumission
                  disabled={isSubmitted} 
                />
                {/*  affiche les reponse( checkbox) */}
                {option.answer}
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={handleNextQuestion}
            className={isSubmitted ? "hidden" : ""}
          >
            {QuestionIndex < testData.questions.length - 1
              ? 'Suivant'
              : 'Soumettre les réponses'}
          </button>
        </form>
      </div>

      {result !== null && (
        <div className='globalAllResult'>
          <h2>Résultats :</h2>
          <p>Votre score est : {result}</p>
          <p>Interprétation : Votre score total est de {result}. {getResultMessage()}</p>
          <button className='noneButton' ><a href="https://maxime-test.torvalds.be">Page d'acceuil</a></button>
        </div>
      )}
    </div>
  );
};

export default PersonalityTest;
