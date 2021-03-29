'use strict';

let userName=prompt('Hello, What is your name?');
alert('Welcome to my page '+userName);

let myName=prompt('Is my name Yazan?');
if (myName.toLowerCase() ==='yes' || myName.toLowerCase() ==='y') {
//   console.log('You are correct!');
  alert('You are correct!');

} else if (myName.toLowerCase() ==='no' || myName.toLowerCase() ==='n') {
//   console.log('You are wrong!');
  alert('You are wrong!');
} else{
  alert('Please answer with a yes or no only');
}

let age=prompt('Am I 25 years old?');
if (age.toLowerCase() ==='yes' || age.toLowerCase() ==='y') {
//   console.log('You are correct!');
  alert('You are correct!');
} else if(age.toLowerCase() ==='no'|| age.toLowerCase() ==='n') {
//   console.log('You are wrong!');
  alert('You are wrong!');
} else{
  alert('Please answer with a yes or no only');
}

let city=prompt('Do I live in Al Zarqa?');
if (city.toLowerCase() ==='yes' || city.toLowerCase() ==='y') {
//   console.log('You are wrong!');
  alert('You are wrong!');

} else if(city.toLowerCase() ==='no'|| city.toLowerCase() ==='n') {
//   console.log('You are correct!');
  alert('You are correct!');
} else{
  alert('Please answer with a yes or no only');
}

let uniMajor=prompt('Am I an accountant?');
if (uniMajor.toLowerCase() ==='yes' || uniMajor.toLowerCase() ==='y') {
//   console.log('You are wrong!');
  alert('You are wrong!');
}

else if(uniMajor.toLowerCase() ==='no'|| uniMajor.toLowerCase() ==='n') {
//   console.log('You are correct!');
  alert('You are correct!');
} else{
  alert('Please answer with a yes or no only');
}


let university=prompt('Did I graduate from the University of Jordan?');
if (university.toLowerCase() ==='yes' || university.toLowerCase() ==='y') {
//   console.log('You are correct!');
  alert('You are correct!');
} else if(university.toLowerCase() ==='no'|| university.toLowerCase() ==='n') {
//   console.log('You are wrong!');
  alert('You are wrong!');
} else{
  alert('Please answer with a yes or no only');
}

alert('Thank you for visiting my website ' +userName);
