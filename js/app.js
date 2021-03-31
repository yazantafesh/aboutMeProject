'use strict';

let score=0;

let userName=prompt('Hello, What is your name?');
alert('Welcome to my page '+userName);

function question1(){


let myName=prompt('Is my name Yazan?');
if (myName.toLowerCase() ==='yes' || myName.toLowerCase() ==='y') {
//   console.log('You are correct!');
  alert('You are correct!');
  score++;

} else if (myName.toLowerCase() ==='no' || myName.toLowerCase() ==='n') {
//   console.log('You are wrong!');
  alert('You are wrong!');
} else{
  alert('Please answer with a yes or no only');
}
}
question1();

function question2(){
let age=prompt('Am I 25 years old?');
if (age.toLowerCase() ==='yes' || age.toLowerCase() ==='y') {
//   console.log('You are correct!');
  alert('You are correct!');
  score++;
} else if(age.toLowerCase() ==='no'|| age.toLowerCase() ==='n') {
//   console.log('You are wrong!');
  alert('You are wrong!');
} else{
  alert('Please answer with a yes or no only');
}
}
question2();

function question3(){
let city=prompt('Do I live in Al Zarqa?');
if (city.toLowerCase() ==='yes' || city.toLowerCase() ==='y') {
//   console.log('You are wrong!');
  alert('You are wrong!');

} else if(city.toLowerCase() ==='no'|| city.toLowerCase() ==='n') {
//   console.log('You are correct!');
  alert('You are correct!');
  score++;
} else{
  alert('Please answer with a yes or no only');
}
}
question3();

function question4() {
  

let uniMajor=prompt('Am I an accountant?');
if (uniMajor.toLowerCase() ==='yes' || uniMajor.toLowerCase() ==='y') {
//   console.log('You are wrong!');
  alert('You are wrong!');
}

else if(uniMajor.toLowerCase() ==='no'|| uniMajor.toLowerCase() ==='n') {
//   console.log('You are correct!');
  alert('You are correct!');
  score++;
} else{
  alert('Please answer with a yes or no only');
}
}
question4();
function question5() {
  



let university=prompt('Did I graduate from the University of Jordan?');
if (university.toLowerCase() ==='yes' || university.toLowerCase() ==='y') {
//   console.log('You are correct!');
  alert('You are correct!');
  score++;
} else if(university.toLowerCase() ==='no'|| university.toLowerCase() ==='n') {
//   console.log('You are wrong!');
  alert('You are wrong!');
} else{
  alert('Please answer with a yes or no only');
}

for(let i=0; i<4; i++){
}
question5();

function question6() {
  

  let guessNum=prompt('Guess what my favourite number is. Between 1 and 10');
  if (guessNum>7) {
    alert('Too High');

  } else if (guessNum<7) {
    alert('Too Low');

  } else if (guessNum==7) {
    alert('That is right! Good job');
    score++;
    break;

  } else {
    alert('Please enter a number!');
  }
}
alert('The correct answer is 7');
}
question6();

let out=false;
let favFood=['pizza', 'burger', 'steak', 'mlokheye', 'msakhan', 'mansaf'];
for(let i=0; i<6;i++){
  let guessFood=prompt('Guess my favourite food');
  for(let j=0; j<favFood.length;j++){
    if (guessFood===favFood[j]) {
      alert('You are right!');
      score++;
      out=true;
      break;
    }
  }
  if (out==true) {
    break;
  }
}
alert('The correct answers are '+favFood);

alert(`You scored ${score} out of 7`);

alert('Thank you for visiting my website ' +userName);
