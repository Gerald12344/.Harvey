let fs = require("fs")
let array = [1,2,3,4,5,6,7,8,9]
for(let i=0;i<array.length;i=i+1){{console.log(array[i])}}
fs.writeFileSync('hello.json','HIIII!!!',(err)=>{console.log(err)});
fs.readFileSync('hello.json','utf8',(response,error)=>{console.log(response)});
console.log('hello', 'hello')

let TOKEN = 'TOKEN'
let Discord = require('discord.js')
let client = new Discord.Client()
client.on(ready,function data(){console.log('Current,Logged,in,as' + client.user.username + '#' + client.user.discriminator);console.log(Current in  + client.guilds.cache.size)})
client.on(message,async (message) => {if(message.content === hello && message.author.bot === false){message.reply(hello)}})
let functionIWant = (input,secondInput) => {console.log(input);console.log(secondInput)}
let AsyncFunction = async (input) => {console.log(input)}
functionIWant('hello','Second Input')
AsyncFunction(async)
.then((input) => {console.log(done)})
.catch((input) => {console.log('There was a error ' + input)})
let Newer = hello
function hello(input){return(input)}
let PromiseMaker = (input) => {return(new Promise((resolve, reject) => {console.log(input);if(input === 'hello'){reject('Not going to lie there is a errror')};if(!(input === 'hello')){resolve()}}))}
let reponse = PromiseMaker('hello')
.catch((input) => {console.log('There was a error ' + input)})
PromiseMaker('anything else')
.catch((input) => {console.log('There was a error ' + input)})
.then((input) => {console.log('Promises successful')})
PromiseMaker('hello')
.then((input) => {console.log('Promises successful')})
.catch((input) => {console.log('There was a error ' + input)})
client.login(TOKEN)