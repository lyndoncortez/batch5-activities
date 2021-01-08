var Question = function(question , answer1 , answer2, answer3 , correctAnswer) {
    this.question = question;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.correctAnswer = correctAnswer;
    this.askQuestion = function() {
        console.log(this.question);
        console.log(this.answer1);
        console.log(this.answer2);
        console.log(this.answer3);
    }
    this.checkQuestion = function(){
        var answerQuestion = prompt('Answer the question');
        console.log(answerQuestion);
        if (answerQuestion ==  this.correctAnswer ){
            console.log(answerQuestion + '--- is correct answer');
            scorePlayer ++;
            console.log("Your score is ---" + scorePlayer);
            initGame()
        } else if (answerQuestion == "exit"){
            alert('game is stopped');

        }else {
            console.log(answerQuestion + '--- wrong answer')
            console.log("Your score is ---" + scorePlayer);
            initGame()
        }

    }

}



var q1 = new Question('What does HTML stand for?', 
                        '0:Hyper Text Markup Language', 
                        '1:Hot Mail', 
                        '2:How to Make Lasagna', 
                        '0');

var q2 = new Question('How many tags are in a regular element?', 
                        '0:2', 
                        '1:1', 
                        '2:3', 
                        '0');

var q3 = new Question('what is the difference in an opening tag and a closing tag?',
                        '0:Opening tag has a / in front', 
                        '1:Closing tag has a / in front', 
                        '2:There is no difference', 
                        '1');

var q4 = new Question('< br/ >; What type of tag is this?', 
                        '0:Break tag', 
                        '1:A broken one', 
                        '2:An opening tag', 
                        '0');

var q5 = new Question('< body >: Is this an opening tag or a closing tag?',
                        '0:Opening', 
                        '1:Closing',  
                        '0');

var q6 = new Question('< / body >: Is this an opening tag or a closing tag?',
                        '0:Opening', 
                        '1:Closing',
                        '1');

var q7 = new Question('where is the meta tag only found?',
                        '0:The last page', 
                        '1:The home page', 
                        '2:The second page', 
                        '1');

var q8 = new Question('which is the correct way to tag an image?', 
                        '0:src=”image.jpg/gif” alt=”type some text”', 
                        '1:Src=”image.jpg/gif” alt=”type some text”', 
                        '2:How to Make Lasagna', 
                        '0');

var q9 = new Question('What is an element that does not have a closing tag called?',
                        '0:Tag', 
                        '1:Empty element', 
                        '2:Closed element', 
                        '0');

var q10 = new Question('Which of the following is an example of an empty element?', 
                        '0:< img / >', 
                        '1:< img > < / img >', 
                        '2:< / img>', 
                        '1');

var q11 = new Question('What should values always be enclosed in?',
                        '0:Quotation marks', 
                        '1:Commas', 
                        '2:Parenthesis', 
                        '0');

var q12 = new Question('Where do all items for the same web site need to be saved?',
                        '0:In the same folder', 
                        '1:Where ever is fine', 
                        '2:In different folders', 
                        '0');

var q13 = new Question('What does < a  h r e f = ”h t t p : / / w w w . g o o g l e . c o m“  t i t l e = ” L i n k  t o   G o o g l e  ” t a r g e t = ” _  b l a n k  ” > G o o g l e  < / a > do?',
                        '0:Adds a link to google on the page', 
                        '1:Adds a search engine to the page', 
                        '2:Nothing', 
                        '0');

var q14 = new Question('What is always a welcome page, and explains the purpose or topic of the site?',
                        '0:Page 4', 
                        '1:Homepage', 
                        '2:Table of contents', 
                        '1');

var q15 = new Question('What does View Source do?',
                        '0:Nothing', 
                        '1:Brings up a note pad with the HTML code already used for the site.', 
                        '2:Opens a new website.', 
                        '1');



                        
var arrayQuestions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15];




var scorePlayer = 0;

function initGame() {
var randomNumber = Math.floor(Math.random()*15);
arrayQuestions[randomNumber].askQuestion();
arrayQuestions[randomNumber].checkQuestion();

}

