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