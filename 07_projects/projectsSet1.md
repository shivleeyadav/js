# Projects related to DOM

## project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-d39dmk?file=1-colorChanger%2Fchaiaurcode.js)

# Solution code

## project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target);
    switch(e.target){
      case grey:
        body.style.backgroundColor=e.target.id;
      case white:
        body.style.backgroundColor=e.target.id;
      case blue:
        body.style.backgroundColor=e.target.id;
      case yellow:
        body.style.backgroundColor=e.target.id;
      case purple:
        body.style.backgroundColor=e.target.id;
    }

    
  })
})

```

## project 2 solution code

```javascript
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault()

const height = parseInt(document.querySelector('#height').value)
const weight = parseInt(document.querySelector('#weight').value)
const results = document.querySelector('#results')

if(height === "" || height<0 || isNaN(height)){
  results.innerHTML = `Please give a valid height ${height}`;
}
else if(weight === "" || weight<0 || isNaN(weight)){
  results.innerHTML = `Please give a valid weight ${weight}`;
}
else{
 const BMI = (weight/((height*height)/10000)).toFixed(2)
 if(BMI<18.6){
    results.innerHTML = 
    `<span>${BMI}</span> "Under Weight"`
 }
 else if(BMI>18.6 && BMI<24.9){
   results.innerHTML = 
   `<span>${BMI}</span>  "Normal Range"`
 }
 else{
   results.innerHTML = 
   `<span>${BMI}</span> "Overweight"`
 }
}
})

```

## project 3

```javascript
const clock = document.getElementById('clock')

setInterval(function(){
  let date = new Date()
//console.log(date.toLocaleTimeString());
clock.innerHTML = date.toLocaleTimeString();
},1000)

```

## project 4

```javascript
let randomNumber = (parseInt(Math.random()*10+1));
const submit = document.querySelector('#submit');
const userInput = document.querySelector('#guessField');
const guessSLot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess);
    validateGuess(guess)
  })
}

function validateGuess(guess){
    if(isNaN(guess)){
      alert('Please enter a valid number')
    }
    else if(guess<1){
      alert('Please enter a valid number more than 1')
    }
    else if(guess>100){
      alert('Please enter a valid number less than 100')
    }
    else{
      prevGuess.push(guess);
      if(numGuess>10){
        displayGuess(guess)
        displayMessage(`Game Over. Random number was ${randomNumber}`)
        endGame()
      }
      else{
        displayGuess(guess)
        checkGuess(guess)
      }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
      displayMessage(`You guessed it right.`)
      endGame()
    }
    else if(guess < randomNumber){
      displayMessage(`Number is too low.`)
    }
    else if(guess > randomNumber){
      displayMessage(`Number is too high.`)
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSLot.innerHTML+= `${guess} , `
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new game.</h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
      randomNumber = (parseInt(Math.random()*10+1));
      prevGuess = []
      numGuess = 1
      guessSLot.innerHTML=''
      remaining.innerHTML= `${11- numGuess}`;
      userInput.removeAttribute('disabled')
      startOver.removeChild(p);
      playGame =true;
    })
}
```