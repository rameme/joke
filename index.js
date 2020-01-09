/*
    create global objects and tokens to connect to discord
*/
const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token;

/*
    start the joke bot 
*/
bot.on('start', ()=>{
    console.log('beep beep beep!');
})

/*
    read in local joke files and store jokes in an array 
*/
const fs = require('fs');
let mamaJokes = fs.readFileSync('yomama.txt').toString().split("\n");
let computerJokes = fs.readFileSync('computerjokes.txt').toString().split("\n");

/*
    checks for joke commands, if found, tell a joke
*/
bot.on('message', msg=>{
    // send a yo mama joke 
    if(msg.content === "yomama"){
        let joke = Math.floor(Math.random() * 1041);
        msg.reply(mamaJokes[joke]);
    }
    // send a computer joke
    else if (msg.content === "computerjoke"){
        let joke = Math.floor(Math.random() * 170);
        msg.reply(computerJokes[joke]);
    }  
})

/*
    log in our bot
*/
bot.login(token);