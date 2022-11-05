const fs = require('fs')
const readline = require('readline')
const factorial = require('./second')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const questions = ['name', 'age', 'job']
let i = 0

function ask() {
    if(questions.length != i) {
        console.log(`What is your ${questions[i]}?`);
        rl.prompt();
        i++
    }else {
        console.log("Thanks for info")
        rl.close()
    }
}

ask()

rl.on('line', (line) => {
    fs.appendFile('db.txt', line + "\n", (err) => {
        if(err) throw err;
        ask();
    })
})

rl.on('close', () => {
    fs.appendFileSync('db.txt', '*************************** \n')
})

/* const rand = Math.floor(Math.random() * 5);

console.log('pogodi magicni broj')

rl.prompt()

rl.on('line', (line) => {
    line == rand ? console.log('pogodili ste magican broj') : console.log('netacno, pokusajte poonovo')
    rl.close()
}) */