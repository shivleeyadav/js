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