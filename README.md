Why, because I could!
(not really I started working on this when repl did the language challenge)

Why Javascript?
So it can be used on the web, use `<get "element"> which is equivelent to document.getElementById("element"), use case:

`
<letsmake Hello <get "element">>
<assign Hello.innerHTML <string "Goodbye">>
`
This take the inner HTML of a element and changes it to goodbye, to use it on the web hit the run button and go to ./dist/index.js and use that as your website script.

How does it work?
With Dificulty.

What can it do (basically everything JS can do)

A Discord bot??
```
<letsmake TOKEN <string "TOKEN" >>
<letsmake Discord <iNeed <string "discord.js">>>
<letsmake client <new <call Discord.Client>>>

<call client.on "ready" <function data <body 
    <sendOut <add <string Current Logged in as > <var client.user.username> <string "#"> <var client.user.discriminator>>>
    <sendOut <add "Current in " <var client.guilds.cache.size <sring servers> >>>
>>>

<call client.on "message" <async <Arrowfunc message 
    <body 
        <if <and <equal message.content "hello"> <equal <ToNumber message.author.bot> <false>>>
            <body 
                <call message.reply "hello">
            >
        >
    >
>>>
```

Just replace TOKEN with your bot token and you are good to go

Promises?
```
<letsmake PromiseMaker <Arrowfunc input <body
    <promise resolve reject <body
    <sendOut <var input>>
    <if <equal <var input> "'hello'"> <body
        <call reject <string "Not going to lie there is a errror">>
    >>
     <if <notequal <var input> "'hello'"> <body
        <call resolve>
    >>
    >>
>>>
<letsmake reponse <call PromiseMaker <string "hello">>>
<error <Arrowfunc input <body <sendOut <add <string"There was a error "> <var input>>>>>>
```
I might write a full documentation if people want it but you can go play around in the environment, the best part is plugins there is a example plugin in the plugin folder, reply to this with any problems.

Happy Hacking!

Harvey :)