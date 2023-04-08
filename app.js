
const startbutton = document.getElementById('start-btn');
const nextbutton = document.getElementById('next-btn');
const questioncontainerelement = document.getElementById('question-container')

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons')

let marks = 0;
let count = 0;

let shuffleQuestions;
let currentQuestionIndex;




startbutton.addEventListener('click' , startgame);
nextbutton.innerHTML = 'Next';
marks = 0;
nextbutton.addEventListener('click' ,() => {
    currentQuestionIndex++;
    setNextQuestion();
} )
function startgame(){


startbutton.classList.add('hide');
shuffleQuestions = questions.sort(() => Math.random() - 0.5);

currentQuestionIndex = 0;
questioncontainerelement.classList.remove('hide')

setNextQuestion();

}

function setNextQuestion(){
    resetState()
showQuestions(shuffleQuestions[currentQuestionIndex])
}

function showQuestions(question){
questionElement.innerText = question.question

question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if(answer.correct){
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click' , selectAnswer)
    answerButtonsElement.appendChild(button)
})
}

function resetState(){
    clearStatusClass(document.body)
    nextbutton.classList.add('hide');
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e){
const selectedButton =e.target;
const correct = selectedButton.dataset.correct;

setStatusClass(document.body , correct);
count = 1;
Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button , button.dataset.correct);

})
count = 0;
if(shuffleQuestions.length > currentQuestionIndex + 1){
    nextbutton.innerText = `Next ${marks}/20`
    nextbutton.classList.remove('hide');
}else{
    startbutton.innerText = `Restart ${marks}/20`;
    startbutton.classList.remove('hide');
    nextbutton.innerText ='Next';
    marks = 0;
   
}

}

function setStatusClass(element , correct){
clearStatusClass(element)
if(correct){
    element.classList.add('correct');
    if(count == 0){
        marks++;
    }

}else{
    element.classList.add('wrong');
}
}
function clearStatusClass(element){


element.classList.remove('correct');
element.classList.remove('wrong');
}

const questions = [
    {
        question : 'Best Anime in the World ?',  //1
        answers: [
            {text:'Death Note' , correct:false} ,
            {text:'Tokyo Revengers' , correct:false} ,
            {text:'Attack on Titan' , correct:true} , 
            {text:'Steins Gate' , correct:false}
        ]
    },
    {
        question : 'Best Web Series ?',           //2
        answers: [
            {text:'Breaking Bad' , correct:true} ,
            {text:'Vampire Diaries' , correct:false} ,
            {text:'Dexter' , correct:false} , 
            {text:'Teen Wolf' , correct:false}
        ]
    },
     {
         question : 'Best thing about Darshan Jain ?',  //3
         answers: [
            {text:'His Intelligence' , correct:true} ,
            {text:'His Good Looks ' , correct:true} ,
             {text:'His Humor' , correct:false} , 
             {text:'His Social Skills' , correct:false}
         ]
     },
    {
        question : 'Which is better Competitive Programming or Development ?',  //4
        answers: [
            {text:'Competitive Programming' , correct:false} ,
            {text:'Development ' , correct:true} ,
            
        ]
    }, {
        question : 'Best Korean Drama ? ',       //5
        answers: [
            {text:'Flower of Evil' , correct:false} ,
            {text:'Prison Playbook' , correct:false} ,
            {text:'Hospital Playlist' , correct:false} , 
            {text:'The Glory' , correct:true}
        ]
    }, {
        question : 'Most Emotional Anime ever Made ? ',     //6
        answers: [
            {text:'Clannad' , correct:false} ,
            {text:'Orange' , correct:false} ,
            {text:'Your Lie in April' , correct:true} , 
            {text:'Erased' , correct:false}
        ]
    }, {
        question : 'Girls are Attracted to ? ',      //7
        answers: [
            {text:'Humor' , correct:false} ,
            {text:'Cute' , correct:false} ,
            {text:'Casanova' , correct:true} , 
            {text:'Good Looks' , correct:false}
        ]
    }, {
        question : 'Best Programming language to learn ?',//8
        answers: [
            {text:'C++' , correct:false} ,
            {text:'Python' , correct:false} ,
            {text:'Javacript' , correct:false} , 
            {text:'Java' , correct:true}
        ]
    },
    {
        question : 'One Skill Darshan is great at ? ',  //9
        answers: [
            {text:'Dressing Sense' , correct:false} ,
            {text:'Programming skills' , correct:true} ,
            {text:'Manipulation' , correct:false} , 
            {text:'Social Awareness' , correct:false}
        ]
    },
    {
        question : 'In what country was Elon Musk born ?',                                     //10
        answers: [
            {text:'England' , correct:false} ,
            {text:'South Africa' , correct:true} ,
            {text:'Switzerland' , correct:false} , 
            {text:'Germany' , correct:false}
        ]
    },
    {
        question : 'The Most Influential Person in the World ?',                                     //11
        answers: [
            {text:'Bill Gates' , correct:false} ,
            {text:'Jeff Bezos' , correct:false} ,
            {text:'Elon Musk' , correct:true} , 
            {text:'Mark Zukerburg' , correct:false}
        ]
    },
    {
        question : 'Who owns most of the assets ? ',                                     //12
        answers: [
            {text:'BlackRock' , correct:true} ,
            {text:'Morgan Stanley' , correct:false} ,
            {text:'Vanguard' , correct:false} , 
            {text:'Goldman Sachs' , correct:false}
        ]
    },
    {
        question : 'Most Famous Hollywood Actor ?',                                     //13
        answers: [
            {text:'Tom Cruise' , correct:false} ,
            {text:'Brad Pitt' , correct:true} ,
            {text:'Leonardo DiCaprio' , correct:false} , 
            {text:'Robert Pattinson' , correct:false}
        ]
    },
    {
        question : 'Most Beautiful Actress in the World ?',                                     //14
        answers: [
            {text:'Emma Watson' , correct:false} ,
            {text:'Angelina Jolie' , correct:true} ,
            {text:'Jennifer Lawrence' , correct:false} , 
            {text:'Ana de Armes' , correct:false}
        ]
    },
    {
        question : 'Greatest Movie ever Made ?',                                     //15
        answers: [
            {text:'The Godfather' , correct:false} ,
            {text:'The Dark Night' , correct:true} ,
            {text:'The Matrix' , correct:false} , 
            {text:'Interstellar ' , correct:false}
        ]
    },
    {
        question : 'Best Turkish Series Ever Made ?',                                     //16
        answers: [
            {text:'Sen cal Kapimi' , correct:false} ,
            {text:'Kuzey Guney' , correct:false} ,
            {text:'Ask Laftan Anlamaz' , correct:false} , 
            {text:'Kara Sevda' , correct:true}
        ]
    },
    {
        question : "Percentage of girls's male bestfriend who are attracted to her ?",                                     //17
        answers: [
            {text:'10%' , correct:false} ,
            {text:'47%' , correct:false} ,
            {text:'63%' , correct:false} , 
            {text:'95%' , correct:true}
        ]
    },
    {
        question : 'Who is the Best Football Player in the World ?',                                     //18
        answers: [
            {text:'Cristiano Ronaldo' , correct:true} ,
            {text:'Lionel Messi' , correct:false} ,
            {text:'Neymar' , correct:false} , 
            {text:'Kylian Mbappe ' , correct:false}
        ]
    },
    {
        question : 'Who is the most powerful anime character ?',                                     //19
        answers: [
            {text:'Yuuichi Katagiri' , correct:false} ,
            {text:'Ayanokouji Kiyotaka' , correct:true} ,
            {text:'Light Yagami' , correct:false} , 
            {text:'Mikey' , correct:false}
        ]
    },
    {
        question : 'Most powerful skill Ayanokouji Kiyotaka possess ?',                                     //20
        answers: [
            {text:'Poker Face' , correct:false} ,
            {text:'Intelligence' , correct:false} ,
            {text:'Manipulation' , correct:true} , 
            {text:'Fighting ability' , correct:false}
        ]
    },
    
]