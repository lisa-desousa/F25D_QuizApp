document.addEventListener("DOMContentLoaded", ()=>{
  const questionElement = document.getElementById("question");
  const buttons = document.querySelectorAll(".answer-btn");
  const scoreElement = document.getElementById("score");
  const answerStatus = document.getElementById("answer-status");

  let currentQuestion = 0;
  let score = 0;


  const questions = [
    {
      question: "Vad står HTML för?",
      answers: [
        "Hyper Trainer Markup Language",
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlink and Text Markup Language"
      ],
      correct: 1
    },
    {
      question: "Vilket CSS-egenskap används för att ändra textfärg?",
      answers: ["color", "text-color", "font-color", "background-color"],
      correct: 0
    },
    {
      question: "Hur skapar man en funktion i JavaScript?",
      answers: [
        "function: myFunction() {}",
        "function myFunction() {}",
        "def myFunction() {}",
        "create function myFunction() {}"
      ],
      correct: 1
    },
    {
      question: "Vilken CSS-egenskap används för att göra ett element osynligt?",
      answers: ["display: none", "visibility: hidden", "opacity: 0", "Alla ovanstående"],
      correct: 3
    },
    {
      question: "Vilken metod används för att lägga till ett element i slutet av en array i JavaScript?",
      answers: ["push()", "pop()", "shift()", "unshift()"],
      correct: 0
    },
    {
      question: "Vilket av följande är INTE ett giltigt sätt att deklarera en variabel i JavaScript?",
      answers: ["var x = 10;", "let x = 10;", "const x = 10;", "int x = 10;"],
      correct: 3
    },
    {
      question: "Vilket HTML-element används för att skapa en länk?",
      answers: ["<a>", "<link>", "<href>", "<url>"],
      correct: 0
    },
    {
      question: "Hur refererar man till det första elementet i en array i JavaScript?",
      answers: ["array(0)", "array[0]", "array.first()", "array{0}"],
      correct: 1
    },
    {
      question: "Vilken av följande enheter används INTE i CSS?",
      answers: ["px", "em", "pt", "sec"],
      correct: 3
    },
    {
      question: "Vilken av dessa operatorer används för strikt jämförelse i JavaScript?",
      answers: ["=", "==", "===", "!="],
      correct: 2
    }
  ]; //frågor genererade med chatGPT
  

  function loadQuestion(){
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;
    buttons.forEach((button, index) => {
      button.textContent = q.answers[index];
      button.onclick = () => {
        if(index === q.correct){
          score++;
          answerStatus.textContent = `Rätt!`;
          scoreElement.textContent = `Poäng: ${score}`;
          //lägg till "rätt svar" text
        } else {
          answerStatus.textContent = `Fel :(`;
        }
        currentQuestion++;
        if(currentQuestion < questions.length){ //om listan ej är slut forstätt visa frågor
          loadQuestion();
        } else { //om listan är slut visa resultat
          buttons.forEach(btn => btn.style.display = "none")
          answerStatus.textContent = "";

          if(score > (questions.length / 2)){ //"bra jobbat" om du fått mer än hälften rätt
            questionElement.textContent = `Spelet är slut, ditt slutgiltiga resultat blev ${score} / ${questions.length} poäng. Bra jobbat!`;
            
          } else { //"bättre kan du" om du fått mindre än hälften rätt
            questionElement.textContent = `Spelet är slut, ditt slutgiltiga resultat blev ${score} / ${questions.length} poäng. Bättre kan du!`;
            
          }
          
        }
      };
    });
  }

  loadQuestion();
});