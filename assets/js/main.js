const h1Element = document.querySelector('h1')

let i;

for (let i = 100; i > 0; i--) {
    
    if ( i % 3 === 0 && i % 5 === 0 ) {

        h1Element.insertAdjacentHTML('afterend', `<div class="box fizzBuzz"> FIZZBUZZ </div>`)
    } else if ( i % 3 === 0 ) {
        h1Element.insertAdjacentHTML('afterend', `<div class="box fizz"> Fizz </div>`)
    }  else if ( i % 5 === 0 ) {
        h1Element.insertAdjacentHTML('afterend', `<div class="box buzz"> buzz </div>`)
    } else {
        h1Element.insertAdjacentHTML('afterend', `<div class="box"> ${i} </div>`)
    }
    
    
    
};