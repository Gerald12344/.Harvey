let ReactFulVariableMaker = (interal, moreData, extraData) => { return { acompanyingData: moreData, eventMoreData: extraData, aInternal: interal, hooks: [], aListener: function(val) {}, set update(val) { this.aInternal = val; this.hooks.forEach(element => { element(val); }); this.aListener(val); }, get update() { return this.aInternal; }, registerListener: function(listener) { this.aListener = listener; }, addListener: function(listener){ this.hooks.push(listener) } } };var byteToHex = []; for (var iii = 0; iii < 256; ++iii) { byteToHex[iii] = (iii + 0x100).toString(16).substr(1); } function bytesToUuid(buf, offset) { var iii = offset || 0; var bth = byteToHex; return ([ bth[buf[iii++]], bth[buf[iii++]], bth[buf[iii++]], bth[buf[iii++]], '-', bth[buf[iii++]], bth[buf[iii++]], '-', bth[buf[iii++]], bth[buf[iii++]], '-', bth[buf[iii++]], bth[buf[iii++]], '-', bth[buf[iii++]], bth[buf[iii++]], bth[buf[iii++]], bth[buf[iii++]], bth[buf[iii++]], bth[buf[iii++]] ]).join(''); } var getRandomValues = (typeof (crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) || (typeof (msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto)); function uuidv4(options, buf, offset) { var rnds = new Array(16); var iii = buf && offset || 0; if (typeof (options) == 'string') { buf = options === 'binary' ? new Array(16) : null; options = null; } options = options || {}; let mathRNG = ()  => { for (var iii = 0, r; iii < 16; iii++) { if ((iii & 0x03) === 0) r = Math.random() * 0x100000000; rnds[iii] = r >>> ((iii & 0x03) << 3) & 0xff; } return rnds; }; var rnds = options.random || (options.rng || mathRNG)(); rnds[6] = (rnds[6] & 0x0f) | 0x40; rnds[8] = (rnds[8] & 0x3f) | 0x80; if (buf) { for (var ii = 0; ii < 16; ++ii) { buf[iii + ii] = rnds[ii]; } } return buf || bytesToUuid(rnds); } ;/* This library uses the new Harv Script Component System */ ;let numToWords = (n) => { const arr = (x) => Array.from(x); const num = (x) => Number(x) || 0; const isEmpty = (xs) => xs.length === 0; const take = (n) => (xs) => xs.slice(0, n); const drop = (n) => (xs) => xs.slice(n); const reverse = (xs) => xs.slice(0).reverse(); const comp = (f) => (g) => (x) => f(g(x)); const not = (x) => !x; const chunk = (n) => (xs) => isEmpty(xs) ? [] : [take(n)(xs), ...chunk(n)(drop(n)(xs))]; let a = [ "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", ]; let b = [ "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety", ]; let g = [ "", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion", "sextillion", "septillion", "octillion", "nonillion", ]; let makeGroup = ([ones, tens, huns]) => { return [ num(huns) === 0 ? "" : a[huns] + " hundred ", num(ones) === 0 ? b[tens] : (b[tens] && b[tens] + "-") || "", a[tens + ones] || a[ones], ].join(""); }; let thousand = (group, i) => (group === "" ? group : `${group} ${g[i]}`); if (typeof n === "number") return numToWords(String(n)); if (n === "0") return "zero"; return comp(chunk(3))(reverse)(arr(n)) .map(makeGroup) .map(thousand) .filter(comp(not)(isEmpty)) .reverse() .join("") .replace(/ /g, ""); };


//('Not all web pages were made the same, it is our job to fix that' - Harvey Randall 2020)
//(setTimeout(() => {let bodyMain = document.getElementsByTagName('BODY')[0];let headMain = document.getElementsByTagName('HEAD')[1];bodyMain.id = 'body';headMain.id = 'head'},500))
function makeAjaxRequest(url,typeIn,body,returnFunc){let ajax = new XMLHttpRequest();if(ajax === undefined){console.log('that a negetive Chief');return(false)};function RecieveData(){};ajax.onreadystatechange = RecieveData;ajax.open(typeIn,url,true);ajax.send(body)}
function MontiorInputs(item,reason,functionToCall){let textInput = document.getElementById(item);textInput.addEventListener(reason,function input(input){setTimeout(function test(){functionToCall(input.target.value,input.key)},5)},false)}
function element(type,text,id,parent,className){let newElement = document.createElement(type);if(document.getElementById(id) === null){newElement.innerHTML = text;newElement.id = id;let FoundParent = document.getElementById(parent);if(parent === 'body'){FoundParent = document.getElementsByTagName(parent)[0]};if(parent === 'head'){FoundParent = document.getElementsByTagName(parent)[0]};FoundParent.appendChild(newElement)};if(!(document.getElementById(id) === null)){newElement.innerHTML = text};if(!(className === undefined)){newElement.className = className};return(newElement)}
function updatelement(id,inner){let FoundParent = document.getElementById(id);FoundParent.innerHTML = inner}
function updateText(id,text,wipeValue){let Node = document.getElementById(id);Node.innerHTML = text;if(wipeValue){Node.value = text}}
function removeComponents(ArrayIn){ArrayIn.forEach((e) => {e.Element.remove()})}
let OpenFuns = []
function WindowMonitor(ReturnFunc){history.move = (body) => {for(let i=0;i<OpenFuns.length;i=i+1){let item = OpenFuns[i];if(!(item === undefined)){item()}};let Root = document.body;Root.innerHTML = '';history.pushState('','',body);ReturnFunc()};window.onpopstate = () => {console.log(window.location.pathname);for(let i=0;i<OpenFuns.length;i=i+1){let item = OpenFuns[i];if(!(item === undefined)){item()}};let Root = document.body;Root.innerHTML = '';history.pushState('','',window.location.pathname);ReturnFunc()}}
function RouterPoint(location,exact,component){if(exact){if(window.location.pathname === location){OpenFuns.push(component())}};if(exact === false){if(window.location.pathname.startsWith(location)){OpenFuns.push(component())}}}
function Link(href,text,id,parent,className){element('button',text,id,parent,className);MontiorInputs(id,'click',(value) => {if(!(href === window.location.pathname)){history.move(href)}})}
function createReactiveVariable(defaultState){return(ReactFulVariableMaker(defaultState))}
function ReactfulElement(ElementType,reactVar,parent,UUID,ClassName){if(UUID === undefined){UUID = uuidv4()};if('string' === typeof reactVar){if(ClassName === undefined){ClassName = {}};if(ClassName.aListener === undefined && !(ClassName === undefined)){let defaultState = ClassName;ClassName = {};ClassName.aInternal = defaultState};let Element = element(ElementType,reactVar,UUID,parent,ClassName.aInternal);let returnObj = {};if('object' === typeof ClassName && !(ClassName.aListener === undefined)){ClassName.addListener((value) => {Element.className = value});};returnObj['UUID'] = UUID;returnObj['Element'] = Element;return(returnObj)};if(ClassName === undefined){ClassName = {}};let Element = element(ElementType,reactVar.aInternal,UUID,parent,ClassName.aInternal);reactVar.addListener((value) => {Element.innerHTML = value});;if('object' === typeof ClassName && !(ClassName.aListener === undefined)){ClassName.addListener((value) => {Element.className = value});};let returnObj = {};returnObj['UUID'] = UUID;returnObj['Element'] = Element;return(returnObj)}
function reactiveTemplate(predefinedVars,defaultValueArray,valueTemplate,typeIn,parent){;let Var = ReactFulVariableMaker(valueTemplate);;Var.acompanyingData = valueTemplate;;let MetaData = {};for(let i=0;i<predefinedVars.length;i=i+1){MetaData[predefinedVars[i]] = defaultValueArray[i];valueTemplate = valueTemplate.replaceAll('%{'+predefinedVars[i]+'}%',defaultValueArray[i])};Var.update = valueTemplate;Var.eventMoreData = MetaData;ReactfulElement(typeIn,Var,parent);return(Var)}
function updateTemplate(varToUpdate,newVal,reactfulElement){;let Template = reactfulElement.acompanyingData;let ExistingData = reactfulElement.eventMoreData;ExistingData[varToUpdate] = newVal;reactfulElement.eventMoreData = ExistingData;for(let i=0;i<Object.entries(ExistingData).length;i=i+1){Template = Template.replaceAll('%{'+Object.entries(ExistingData)[i][0]+'}%',Object.entries(ExistingData)[i][1])};reactfulElement.update = Template}
function generateTemplateWithElement(predefinedVars,defaultValueArray,valueTemplate){;let Var = ReactFulVariableMaker(valueTemplate);;Var.acompanyingData = valueTemplate;;let MetaData = {};for(let i=0;i<predefinedVars.length;i=i+1){MetaData[predefinedVars[i]] = defaultValueArray[i];valueTemplate = valueTemplate.replaceAll('%{'+predefinedVars[i]+'}%',defaultValueArray[i])};Var.update = valueTemplate;Var.eventMoreData = MetaData;return(Var)}
function generateModernTemplate(template){template = template.replace(/\n/g,'');let templateIn = template.match(/\%{(.*?)\}%/gm);let variables = [];let defaultValues = [];templateIn.forEach((e) => {e = e.split('');e.splice(0,2);e.splice((e.length - 2),2);e = e.join('');let dataInToFunc = e.split('|');variables.push(dataInToFunc[0]);defaultValues.push(dataInToFunc[1])});;let firstStage = template.replace(/\%{(.*?)\}%/gm,'%%HARVEY_VARIABLE%%');let almostDone = firstStage.split('%%');let occurence = 0;let justifiedOut = [];almostDone.forEach((e) => {if(e === 'HARVEY_VARIABLE'){justifiedOut.push('%{'+variables[occurence]+'}%');occurence = occurence + 1;return};justifiedOut.push(e)});let templateDone = justifiedOut.join('');let TemplateOut = generateTemplateWithElement(variables,defaultValues,templateDone);return(TemplateOut)}
function ElementMaker(typeIn,defaultValue,parent){let Title = createReactiveVariable(defaultValue);let UUID = ReactfulElement(typeIn,Title,parent);Title.UUID = UUID;return(Title)}
require("axios")


function NavBarMaker(EntryLevel){let Home = 'notActive';let News = 'notActive';let Contact = 'notActive';let About = 'notActive';let currentLocation = window.location.pathname;if(currentLocation === '/'){Home = 'active'};if(currentLocation === '/News'){News = 'active'};if(currentLocation === '/Contact'){Contact = 'active'};if(currentLocation === '/About'){About = 'active'};return (() => {/* Basic Component Renderer */ let parent = EntryLevel;let components = [];/* Function To Remove Component*/ (() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('ul',"",parent, InternalUUID, ""); components.push(ElementWeWant); ((parent) => {(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('li',"",parent, InternalUUID, Home); components.push(ElementWeWant); ((parent) => {(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('button','Home',parent, InternalUUID, Home); let NewElement = ReactfulElement('a','Home',parent, "0e39c36d-2535-4446-aebb-a441a03ab810", "hidden_tag"); components.push(ElementWeWant); NewElement.Element.href = '/'; MontiorInputs(InternalUUID, "click", (value) => { if (!('/' === window.location.pathname)) { history.move('/');} });; ((parent) => {""})(InternalUUID)})();})(InternalUUID)})();;(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('li',"",parent, InternalUUID, News); components.push(ElementWeWant); ((parent) => {(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('button','News',parent, InternalUUID, News); let NewElement = ReactfulElement('a','News',parent, "8430f46a-bcbd-49f1-a84c-0a3ec88728c3", "hidden_tag"); components.push(ElementWeWant); NewElement.Element.href = '/News'; MontiorInputs(InternalUUID, "click", (value) => { if (!('/News' === window.location.pathname)) { history.move('/News');} });; ((parent) => {""})(InternalUUID)})();})(InternalUUID)})();;(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('li',"",parent, InternalUUID, Contact); components.push(ElementWeWant); ((parent) => {(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('button','Contact',parent, InternalUUID, Contact); let NewElement = ReactfulElement('a','Contact',parent, "46c82587-88c8-48e7-b71e-8f99d56e3210", "hidden_tag"); components.push(ElementWeWant); NewElement.Element.href = '/Contact'; MontiorInputs(InternalUUID, "click", (value) => { if (!('/Contact' === window.location.pathname)) { history.move('/Contact');} });; ((parent) => {""})(InternalUUID)})();})(InternalUUID)})();;(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('li',"",parent, InternalUUID, About); components.push(ElementWeWant); ((parent) => {(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('button','About',parent, InternalUUID, About); let NewElement = ReactfulElement('a','About',parent, "e6171705-f03c-40f2-849e-0a2a2a8016cb", "hidden_tag"); components.push(ElementWeWant); NewElement.Element.href = '/About'; MontiorInputs(InternalUUID, "click", (value) => { if (!('/About' === window.location.pathname)) { history.move('/About');} });; ((parent) => {""})(InternalUUID)})();})(InternalUUID)})();;(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('li',"",parent, InternalUUID, 'floatRight'); components.push(ElementWeWant); ((parent) => {(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('button','Login',parent, InternalUUID, 'notactive'); let NewElement = ReactfulElement('a','Login',parent, "f706b4df-f240-4148-a821-240389f3e828", "hidden_tag"); components.push(ElementWeWant); NewElement.Element.href = '/login'; MontiorInputs(InternalUUID, "click", (value) => { if (!('/login' === window.location.pathname)) { history.move('/login');} });; ((parent) => {""})(InternalUUID)})();})(InternalUUID)})();})(InternalUUID)})();;(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('style',"body { margin: 0;}.floatRight { float: right;}ul { list-style-type: none; margin: 0; padding: 0; overflow: hidden; background-color: #333; position: fixed; top: 0; width: 100%;}li { float: left;}button { background-color: #333; font-size: 1.3em; border: none;}li button { display: block; color: white; text-align: center; padding: 14px 16px; text-decoration: none;}li button:hover:not(.active) { background-color: #111;}li button:hover.active { background-color: #038c5a;}.active > button { background-color: #04AA6D;}",parent, InternalUUID, ""); components.push(ElementWeWant); ((parent) => {'body'})(InternalUUID)})();; return(() => {removeComponents(components)}) })()}
function footer(inputParent){;return (() => {/* Basic Component Renderer */ let parent = inputParent;let components = [];/* Function To Remove Component*/ (() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('footer',"",parent, InternalUUID, 'footer-distributed'); components.push(ElementWeWant); ((parent) => {(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('div',"",parent, InternalUUID, 'footer-left'); components.push(ElementWeWant); ((parent) => {(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('h3','Harvey Randall',parent, InternalUUID, ""); components.push(ElementWeWant); })();;(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('p',"",parent, InternalUUID, 'footer-links'); components.push(ElementWeWant); ((parent) => {(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('button','· Home',parent, InternalUUID, 'Footer-Links'); let NewElement = ReactfulElement('a','· Home',parent, "472ccd38-893f-48e9-84a0-be034b0fdcc5", "hidden_tag"); components.push(ElementWeWant); NewElement.Element.href = '/'; MontiorInputs(InternalUUID, "click", (value) => { if (!('/' === window.location.pathname)) { history.move('/');} });; })();;(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('button','· News',parent, InternalUUID, 'Footer-Links'); let NewElement = ReactfulElement('a','· News',parent, "fa642c59-b1a7-4e92-a945-cb4b3a898647", "hidden_tag"); components.push(ElementWeWant); NewElement.Element.href = '/News'; MontiorInputs(InternalUUID, "click", (value) => { if (!('/News' === window.location.pathname)) { history.move('/News');} });; })();;(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('button','· Contact',parent, InternalUUID, 'Footer-Links'); let NewElement = ReactfulElement('a','· Contact',parent, "877228b4-9111-448b-b7c4-860ee3fe17fb", "hidden_tag"); components.push(ElementWeWant); NewElement.Element.href = '/Contact'; MontiorInputs(InternalUUID, "click", (value) => { if (!('/Contact' === window.location.pathname)) { history.move('/Contact');} });; })();;(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('button','· About',parent, InternalUUID, 'Footer-Links'); let NewElement = ReactfulElement('a','· About',parent, "fce0b1f7-1e5b-45b6-8991-94726d078721", "hidden_tag"); components.push(ElementWeWant); NewElement.Element.href = '/About'; MontiorInputs(InternalUUID, "click", (value) => { if (!('/About' === window.location.pathname)) { history.move('/About');} });; })();;(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('button','· Login',parent, InternalUUID, 'Footer-Links'); let NewElement = ReactfulElement('a','· Login',parent, "29c0251d-efcc-4671-9b4b-6cca8cf346cd", "hidden_tag"); components.push(ElementWeWant); NewElement.Element.href = '/Login'; MontiorInputs(InternalUUID, "click", (value) => { if (!('/Login' === window.location.pathname)) { history.move('/Login');} });; })();})(InternalUUID)})();;(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('p','Harvey Randall ©2020-2021',parent, InternalUUID, 'footer-company-name'); components.push(ElementWeWant); })();})(InternalUUID)})();;(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('div',"",parent, InternalUUID, 'footer-center'); components.push(ElementWeWant); ((parent) => {(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('h3','“If its not broken do not fix it”',parent, InternalUUID, 'italis'); components.push(ElementWeWant); })();;(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('p','- Harvey Randall, Proud Advocator of the above quote',parent, InternalUUID, undefined); components.push(ElementWeWant); })();})(InternalUUID)})();;(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('div',"",parent, InternalUUID, 'footer-right'); components.push(ElementWeWant); ((parent) => {(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('p','About Harvey Randall',parent, InternalUUID, 'footer-company-about'); components.push(ElementWeWant); })();;(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('p','Harvey Randall is a really good programmer who made this amazing website, in his own programming language',parent, InternalUUID, 'footer-company-about'); components.push(ElementWeWant); })();})(InternalUUID)})();})(InternalUUID)})();;(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('style',".footer-center p, p, p { font-size: 1rem;}.footer-distributed h1, .footer-distributed h3, .footer-distributed p { text-decoration: none;}footer { position: relative; flex: 1 0 auto; flex-shrink: 0; bottom: 0; width: 100vw; overflow: hidden;}.footer-distributed { background-color: #2c3e50; box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12); box-sizing: border-box; width: 100%; text-align: left; margin-top: 10%; padding: 55px 50px; display: flex; direction: colomn; justify-content: center; align-items: center;}.footer-distributed > div { flex: 100%;}.footer-distributed .footer-left,.footer-distributed .footer-center,.footer-distributed .footer-right { display: inline-block; vertical-align: top;}.footer-distributed .footer-left { width: 33%;}.footer-distributed h3 { color: #ffffff; font-size: 36px; margin: 0;}.footer-distributed h3 span { color: #00a8ff;}.footer-center { text-align: left;}.footer-right { width: 20%;}.footer-distributed .footer-links { color: #ffffff; margin: 20px 0 12px; padding: 0;}.footer-distributed .footer-links button { display: block; line-height: 1.8; color: inherit; font-size: 1rem; background-color: transparent; cursor: pointer; text-decoration: underline;}.footer-distributed .footer-links button:hover { color: #cccccc;}.footer-distributed .footer-company-name { color: #8f9296; font-size: 14px; font-weight: normal; margin: 0;}.footer-distributed .footer-center { width: 35%;}.footer-distributed .footer-center i { background-color: #33383b; color: #ffffff; font-size: 25px; width: 38px; height: 38px; border-radius: 50%; text-align: center; line-height: 42px; margin: 10px 15px; vertical-align: middle;}.footer-distributed .footer-center i.fa-envelope { font-size: 17px; line-height: 38px;}.footer-distributed .footer-center p { display: inline-block; color: #ffffff; vertical-align: middle; margin: 0;}.footer-distributed .footer-center p span { display: block; font-weight: normal; font-size: 14px; line-height: 2;}.footer-distributed .footer-center p button { color: #00a8ff; text-decoration: none;}.italis { font-style: italic;}.footer-distributed .footer-company-about { line-height: 20px; color: #92999f; font-size: 13px; font-weight: normal; margin: 0;}.footer-distributed .footer-company-about span { display: block; color: #ffffff; font-size: 14px; font-weight: bold; margin-bottom: 20px;}.footer-distributed .footer-icons { margin-top: 25px;}.footer-distributed .footer-icons button { display: inline-block; width: 35px; height: 35px; cursor: pointer; background-color: #33383b; border-radius: 2px; font-size: 20px; color: #ffffff; text-align: center; line-height: 35px; margin-right: 3px; margin-bottom: 5px;}",parent, InternalUUID, ""); components.push(ElementWeWant); })();; return(() => {removeComponents(components)}) })()}
let CurrentOn = 0
function ProjectCards(parentIn,titleCard,titleDescription,titleUrl,titleImage){let elementID = numToWords(CurrentOn);CurrentOn = CurrentOn + 1;;let Template = generateModernTemplate("        .%{uuid|RandomTestVaraiable}%{            background-image: url(%{ImageURL|}%);        }    ");updateTemplate('uuid','PRODUCT_CARD_VALUE_'+elementID,Template);updateTemplate('ImageURL',titleImage,Template);return (() => {/* Basic Component Renderer */ let parent = parentIn;let components = [];/* Function To Remove Component*/ (() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('div',"",parent, InternalUUID, 'cardMain'); components.push(ElementWeWant); ((parent) => {(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('div',"",parent, InternalUUID, 'imageLocation '+'PRODUCT_CARD_VALUE_'+elementID); components.push(ElementWeWant); })();;(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('div',"",parent, InternalUUID, 'cardTextLocation'); components.push(ElementWeWant); ((parent) => {(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('h1',titleCard,parent, InternalUUID, undefined); components.push(ElementWeWant); })();;(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('p',titleDescription,parent, InternalUUID, undefined); components.push(ElementWeWant); })();;(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('button','View Project on Github',parent, InternalUUID, 'GithubButton'); let NewElement = ReactfulElement('a','View Project on Github',parent, "e9de2fe3-8998-4763-8196-8792a18cf236", "hidden_tag"); components.push(ElementWeWant); NewElement.Element.href = titleUrl; MontiorInputs(InternalUUID, "click", (value) => { if (!(titleUrl === window.location.pathname)) { history.move(titleUrl);} });; })();})(InternalUUID)})();;(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('style',Template,parent, InternalUUID, ""); components.push(ElementWeWant); })();})(InternalUUID)})();; return(() => {removeComponents(components)}) })()}

function Homepage(){;return (() => {/* Basic Component Renderer */ let parent = 'body';let components = [];/* Function To Remove Component*/ (() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('div',"",parent, InternalUUID, 'centerDiv'); components.push(ElementWeWant); ((parent) => {(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('h1','Harvey Randall',parent, InternalUUID, 'CenterPage'); components.push(ElementWeWant); })();;(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('p','Creating the Next Generation of Computer Science',parent, InternalUUID, 'CenterPage'); components.push(ElementWeWant); })();})(InternalUUID)})();;(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('div',"",parent, InternalUUID, 'underMainDiv'); components.push(ElementWeWant); ((parent) => {(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('h3','Scroll Down to look at past projects',parent, InternalUUID, undefined); components.push(ElementWeWant); })();})(InternalUUID)})();;(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('h1','Past Projects:',parent, InternalUUID, 'pastProjecTitle'); components.push(ElementWeWant); })();;(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('p','I have make a lot of projects in my over 5 years of progamming, so what does this consist of?',parent, InternalUUID, 'pastProjectCenter'); components.push(ElementWeWant); })();;(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('div',"",parent, InternalUUID, 'cardLocation'); components.push(ElementWeWant); ((parent) => {ProjectCards(parent,'My First Website','Although my first website is the most visualy appealing, the skills it has taught me with stay with me forever, this is what captivated my love for computer scienc and programming. It showed me that the web page was a blank canvas awaiting a artist. The core parts of this website is made of a simple html shell wiht some basic javascript for making a gif appear, little did I know that when I wrote that, that only 4.5 years later I would go on write my own programming lanaguage. This website is now avaliable on my repl.','https://github.com');ProjectCards(parent,'First Website','another test another testanother testanother testanother testanother testanother test another testanother testanother testanother testanother testanother testanother testanother testanother testanother testanother testanother testanother testanother testanother testanother testanother testanother testanother testanother testanother testanother test another testanother testanother testanother testanother testanother testanother testanother testanother testanother testanother testanother testanother testanother test');ProjectCards(parent,'First Website','another test')})(InternalUUID)})();;(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('div',"",parent, InternalUUID, 'cardLocation'); components.push(ElementWeWant); ((parent) => {ProjectCards(parent,'First Website','another test');ProjectCards(parent,'First Website','another test');ProjectCards(parent,'First Website','another test')})(InternalUUID)})();;(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('div',"",parent, InternalUUID, 'cardLocation'); components.push(ElementWeWant); ((parent) => {ProjectCards(parent,'First Website','another test');ProjectCards(parent,'First Website','another test','','https://www.gardeningknowhow.com/wp-content/uploads/2007/03/flowers-1.jpg');ProjectCards(parent,'First Website','another test')})(InternalUUID)})();;(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('div',"",parent, InternalUUID, 'cardLocation'); components.push(ElementWeWant); ((parent) => {ProjectCards(parent,'First Website','another test');ProjectCards(parent,'First Website','another test');ProjectCards(parent,'First Website','another test')})(InternalUUID)})();;(() => {let InternalUUID = uuidv4(); let ElementWeWant = ReactfulElement('style',".GithubButton { color: white; border-radius: 5px; padding: 10px; font-size: 1.2rem; cursor: pointer;}.GithubButton:hover { background-color: #4d4d4d;}.cardLocation { display: flex; justify-content: center; align-items: center; flex-wrap: no-wrap;}.cardMain { background-color: #00a8ff; margin: 10px; border-radius: 10px; display: flex; flex-direction: column; height: 400px; width: 30%; flex-shrink: 0.5; transition: 2s;}.cardMain h1 { font-size: 2rem;}.cardMain > div:nth-child(1) { flex: 100%; border-radius: 10px 10px 0px 0px; background-position: center; background-repeat: no-repeat; background-size: cover;}.cardMain > div:nth-child(2) { flex: 100%; padding: 0px 20px 0px 20px;}.cardMain p { display: -webkit-box; -webkit-line-clamp: 5; margin-top: 5px; overflow: hidden; -webkit-box-orient: vertical; text-transform: none;}.cardMain:hover { width: 50%;}.pastProjecTitle { font-size: 3rem; margin-top: 75px; text-align: center;}.pastProjectCenter { text-align: center;}.CenterPage { text-align: center;}h1, p { font-size: 8em; margin-bottom: 0px;}h1 > div, p > div { color: pink;}p, p { font-size: 4em;}.centerDiv { justify-content: center; display: flex; flex-direction: column; height: 92vh;}.underMainDiv { text-align: center; transition: bobble 0.2s ease-in-out; animation-name: bobble; font-size: 1.1em; animation-duration: 3s; animation-iteration-count: infinite;}@keyframes bobble { 0% {  transform: translate3d(0px, 0px, 0px);  animation-timing-function: ease-in; } 50% {  transform: translate3d(0px, 30px, 0px); } 100% {  transform: translate3d(0px, 0px, 0px); }}",parent, InternalUUID, ""); components.push(ElementWeWant); })();; return(() => {removeComponents(components)}) })()}
generateModernTemplate('Test string %{test|Default value}% more tests %{test2|Default value dfgjkdjkfg}%')

function RouterRoot(){;NavBarMaker('body');;RouterPoint('/',true,Homepage);;footer('body')}

window.addEventListener('load',() => {;RouterRoot();;WindowMonitor(RouterRoot)})