let value = document.querySelector('h2')
let span = document.querySelectorAll('span')


span.forEach((span)=>{
    span.addEventListener('click', ()=>{
       if(span.innerHTML == '='){
        value.innerHTML = eval(value.innerHTML)
       }else{
        if(span.innerHTML === 'clear'){
            value.innerHTML ='';
        }else{
            value.innerHTML += span.innerHTML
        }
       }
    })
})
   

