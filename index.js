const chalk = require('chalk');
const readLine = require('readline-sync');

var score = 0;
const questions = [
  {
    question : 'Which team won 2011 world cup?',
    answer : 'india',
    type: 'ask'
  },
  {
    question : 'Does two teams play a match ?',
    answer : 'Y',
    type: 'YN'
  },
  {
    question : 'How many players for each team ?',
    answer : '11',
    type: 'ask'
  },
  {
    question : 'How many batsman can play at a time ?',
    answer : 1,
    type: 'multiple',
    choices: [1,2]
  },
  {
    question : 'IPL is implementation of which format',
    answer : 0,
    type: 'multiple',
    choices: ['T20', 'ONE DAY', 'TEST']
  },
];
const name = readLine.prompt({prompt: 'whats your name : '});
for(var i=0; i<questions.length ; i++){
  const qtn = questions[i];
  if(qtn.type === 'ask'){
    const ans = readLine.question(chalk.red(qtn.question));
    if(qtn.answer !== null && qtn.answer.toLowerCase() === ans.toLowerCase()){
      score++;
    }
  } else if(qtn.type === 'YN'){
    const ans = readLine.keyInYN(chalk.cyanBright(qtn.question));
    if(ans){
      score++;
    }
  } else if(qtn.type === 'multiple'){
    const ans = readLine.keyInSelect(qtn.choices, qtn.question, {cancel:false});
    if(ans === qtn.answer){
      score++;
    }
  }
}

console.log(chalk.cyan(name) +  chalk.green(' your score is : ') + chalk.yellow(score));