
function MontiorInputs(item,reason,functionToCall){let textInput = document.getElementById(item);textInput.addEventListener(reason,function input(input){setTimeout(function test(){functionToCall(input.target.value,input.key)},5)},false)}
function element(type,text,id,parent,className){let newElement = document.createElement(type);if(document.getElementById(id) === null){newElement.innerHTML = text;newElement.id = id;let FoundParent = document.getElementById(parent);FoundParent.appendChild(newElement)};if(!(document.getElementById(id) === null)){newElement.innerHTML = text};if(!(className === undefined)){newElement.className = className}}
function updateText(id,text,wipeValue){let Node = document.getElementById(id);Node.innerHTML = text;if(wipeValue){Node.value = text}}
function WindowMonitor(ReturnFunc){history.move = (body) => {let Root = document.body;Root.innerHTML = '';history.pushState('','',body);ReturnFunc()}}
function RouterPoint(location,exact,component){if(exact){if(window.location.pathname === location){component()}};if(exact === false){if(window.location.pathname.startsWith(location)){component()}}}
function Link(href,text,id,parent,className){element('button',text,id,parent,className);MontiorInputs(id,'click',(value) => {if(!(href === window.location.pathname)){history.move(href)}})}

let colors = ['red','blue','green']
let i = 0
let hello = document.getElementById('element')
let text = 'this changes'

function PageTest(){;element('h1',text,'MainText','body')}

function ConstantElements(){Link('/','HomePage','1','body','nav-button');Link('/pages','pages','5','body','nav-button');Link('/mathsQuiz','Maths Quiz','50','body','nav-button')}
function MathsQuiz(){;let Operator = ['+','-'][Math.round((Math.random() * 1))];let firstNum = Math.round((Math.random() * 10));let secondNum = Math.round((Math.random() * 10));let yourScore = 0;let guess = '';element('h1',firstNum + Operator + secondNum,'Question','body');element('h2','Your score is ' + yourScore,'Score','body');;element('input','','QuestionBox','body');element('button','Submit','QuestionSubmit','body');;element('h1','your guess: ','Debug','body','guess');function WorkOutAnswer(){if(Operator === '+'){if(Number(guess) === firstNum + secondNum){yourScore = yourScore + 1}};if(Operator === '-'){if(Number(guess) === (firstNum - secondNum)){yourScore = yourScore + 1}};Operator = ['+','-'][Math.round((Math.random() * 1))];firstNum = Math.round((Math.random() * 10));secondNum = Math.round((Math.random() * 10));updateText('Question',firstNum + Operator + secondNum);updateText('Score','Your score is ' + yourScore);updateText('QuestionSubmit','Submit');updateText('QuestionBox','',true);updateText('Debug','your guess: ')};;MontiorInputs('QuestionBox','keydown',(value,key) => {guess = value;updateText('Debug','your guess: ' + value);if(key === 'Enter'){WorkOutAnswer()}});;MontiorInputs('QuestionSubmit','click',(value) => {WorkOutAnswer()})}
function Homepage(){element('h1','Welcome to my website this website it purely written in the .Harvey framework which manipulates the DOM','Homepage','body')}
function RouterRoot(){ConstantElements();;RouterPoint('/pages',true,PageTest);RouterPoint('/mathsQuiz',true,MathsQuiz);RouterPoint('/',true,Homepage)}

RouterRoot()

WindowMonitor(RouterRoot)

