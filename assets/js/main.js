const h1Element = document.querySelector('h1')

for (let i = 100; i > 0; i--) {
    
    h1Element.insertAdjacentHTML('afterend', `<div class="box center-flex"> ${i} </div>`)
};