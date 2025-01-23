const testData = {
  questions: [
      {
          question: "Je me considère comme quelqu'un de créatif.",
          id: 1,
          options: [
              { answer: "Pas du tout d'accord", value: 1 },
              { answer: "Plutôt pas d'accord", value: 2 },
              { answer: "Neutre", value: 3 },
              { answer: "Plutôt d'accord", value: 4 },
              { answer: "Tout à fait d'accord", value: 5 },
          ],
      },
      {
          question: "Je préfère travailler seul.",
          id: 2,
          options: [
              { answer: "Pas du tout d'accord", value: 1 },
              { answer: "Plutôt pas d'accord", value: 2 },
              { answer: "Neutre", value: 3 },
              { answer: "Plutôt d'accord", value: 4 },
              { answer: "Tout à fait d'accord", value: 5 },
          ],
      },
      {
          question: "J'aime avoir de bons rapports avec mes collègues.",
          id: 3,
          options: [
              { answer: "Pas du tout d'accord", value: 1 },
              { answer: "Plutôt pas d'accord", value: 2 },
              { answer: "Neutre", value: 3 },
              { answer: "Plutôt d'accord", value: 4 },
              { answer: "Tout à fait d'accord", value: 5 },
          ],
      },
      {
          question: "J'ai une approche axée sur les solutions.",
          id: 4,
          options: [
              { answer: "Pas du tout d'accord", value: 1 },
              { answer: "Plutôt pas d'accord", value: 2 },
              { answer: "Neutre", value: 3 },
              { answer: "Plutôt d'accord", value: 4 },
              { answer: "Tout à fait d'accord", value: 5 },
          ],
      },
      {
          question: "J'aime diriger la direction des projets.",
          id: 5,
          options: [
              { answer: "Pas du tout d'accord", value: 1 },
              { answer: "Plutôt pas d'accord", value: 2 },
              { answer: "Neutre", value: 3 },
              { answer: "Plutôt d'accord", value: 4 },
              { answer: "Tout à fait d'accord", value: 5 },
          ],
      },
      {
          question: "Travailler en équipe est un plus pour moi.",
          id: 6,
          options: [
              { answer: "Pas du tout d'accord", value: 1 },
              { answer: "Plutôt pas d'accord", value: 2 },
              { answer: "Neutre", value: 3 },
              { answer: "Plutôt d'accord", value: 4 },
              { answer: "Tout à fait d'accord", value: 5 },
          ],
      },
      {
          question: "Les valeurs d'entreprise doivent correspondre aux miennes.",
          id: 7,
          options: [
              { answer: "Pas du tout d'accord", value: 1 },
              { answer: "Plutôt pas d'accord", value: 2 },
              { answer: "Neutre", value: 3 },
              { answer: "Plutôt d'accord", value: 4 },
              { answer: "Tout à fait d'accord", value: 5 },
          ],
      },
      {
          question: "Être le moteur d'un projet me motive.",
          id: 8,
          options: [
              { answer: "Pas du tout d'accord", value: 1 },
              { answer: "Plutôt pas d'accord", value: 2 },
              { answer: "Neutre", value: 3 },
              { answer: "Plutôt d'accord", value: 4 },
              { answer: "Tout à fait d'accord", value: 5 },
          ],
      },
      {
          question: "Je porte un réel intérêt au travail de groupe.",
          id: 9,
          options: [
              { answer: "Pas du tout d'accord", value: 1 },
              { answer: "Plutôt pas d'accord", value: 2 },
              { answer: "Neutre", value: 3 },
              { answer: "Plutôt d'accord", value: 4 },
              { answer: "Tout à fait d'accord", value: 5 },
          ],
      },
      {
          question: "Lors d'un conflit, je préfère réagir.",
          id: 10,
          options: [
              { answer: "Pas du tout d'accord", value: 1 },
              { answer: "Plutôt pas d'accord", value: 2 },
              { answer: "Neutre", value: 3 },
              { answer: "Plutôt d'accord", value: 4 },
              { answer: "Tout à fait d'accord", value: 5 },
          ],
      },
      {
          question: "J'ai un problème sur un projet, j'attends la dernière minute pour en parler.",
          id: 11,
          options: [
              { answer: "Pas du tout d'accord", value: 1 },
              { answer: "Plutôt pas d'accord", value: 2 },
              { answer: "Neutre", value: 3 },
              { answer: "Plutôt d'accord", value: 4 },
              { answer: "Tout à fait d'accord", value: 5 },
          ],
      },
      {
          question: "Je suis orienté résultats.",
          id: 12,
          options: [
              { answer: "Pas du tout d'accord", value: 1 },
              { answer: "Plutôt pas d'accord", value: 2 },
              { answer: "Neutre", value: 3 },
              { answer: "Plutôt d'accord", value: 4 },
              { answer: "Tout à fait d'accord", value: 5 },
          ],
      },
      {
          question: "J'aime avoir une ambiance familiale avec mes collègues.",
          id: 13,
          options: [
              { answer: "Pas du tout d'accord", value: 1 },
              { answer: "Plutôt pas d'accord", value: 2 },
              { answer: "Neutre", value: 3 },
              { answer: "Plutôt d'accord", value: 4 },
              { answer: "Tout à fait d'accord", value: 5 },
          ],
      },
      {
          question: "Je n'ai pas de difficulté à travailler seul.",
          id: 14,
          options: [
              { answer: "Pas du tout d'accord", value: 1 },
              { answer: "Plutôt pas d'accord", value: 2 },
              { answer: "Neutre", value: 3 },
              { answer: "Plutôt d'accord", value: 4 },
              { answer: "Tout à fait d'accord", value: 5 },
          ],
      },
      {
          question: "Être à l'heure ne fait pas partie de mes priorités.",
          id: 15,
          options: [
              { answer: "Pas du tout d'accord", value: 1 },
              { answer: "Plutôt pas d'accord", value: 2 },
              { answer: "Neutre", value: 3 },
              { answer: "Plutôt d'accord", value: 4 },
              { answer: "Tout à fait d'accord", value: 5 },
          ],
      },
      {
          question: "Je préfère travailler de chez moi.",
          id: 16,
          options: [
              { answer: "Pas du tout d'accord", value: 1 },
              { answer: "Plutôt pas d'accord", value: 2 },
              { answer: "Neutre", value: 3 },
              { answer: "Plutôt d'accord", value: 4 },
              { answer: "Tout à fait d'accord", value: 5 },
          ],
      },
      {
          question: "Je préfère travailler en présentiel.",
          id: 17,
          options: [
              { answer: "Pas du tout d'accord", value: 1 },
              { answer: "Plutôt pas d'accord", value: 2 },
              { answer: "Neutre", value: 3 },
              { answer: "Plutôt d'accord", value: 4 },
              { answer: "Tout à fait d'accord", value: 5 },
          ],
      },
      {
          question: "Partager mes connaissances fait partie de moi.",
          id: 18,
          options: [
              { answer: "Pas du tout d'accord", value: 1 },
              { answer: "Plutôt pas d'accord", value: 2 },
              { answer: "Neutre", value: 3 },
              { answer: "Plutôt d'accord", value: 4 },
              { answer: "Tout à fait d'accord", value: 5 },
          ],
      },
      {
          question: "Henrique est un bon coach ?",
          id: 19,
          options: [
              { answer: "Pas du tout d'accord", value: 1 },
              { answer: "Plutôt pas d'accord", value: 2 },
              { answer: "Neutre", value: 3 },
              { answer: "Plutôt d'accord", value: 4 },
              { answer: "Tout à fait d'accord", value: 5 },
          ],
      },
      {
          question: "Maxime a fait un chouette test de personnalité ?",
          id: 20,
          options: [
              { answer: "Pas du tout d'accord", value: 1 },
              { answer: "Plutôt pas d'accord", value: 2 },
              { answer: "Neutre", value: 3 },
              { answer: "Plutôt d'accord", value: 4 },
              { answer: "Tout à fait d'accord", value: 5 },
          ],
      },
  ],
};

export default testData;
