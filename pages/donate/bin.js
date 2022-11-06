let dots = document.getElementsByClassName('donate__bar-circle')
let prices = document.getElementsByClassName('donate__price-element')
Array.from(prices).forEach(function(element) {
    element.addEventListener('click', function(){
        changeDot(element)
    });
  });
  Array.from(dots).forEach(function(element) {
    element.addEventListener('click', function(){
        changeDot(element)
    });
  });

function changeDot(element){
    dots[2].classList.remove("donate__rings")
    for(let i=0; i<dots.length; i++){
        console.log( dots[i].getAttribute('id'))
        let elementId = dots[i].getAttribute('id')
        document.getElementById(elementId).classList.remove("donate__rings")
        
    }
    let elementId = element.getAttribute('id').split('-')[1] ? element.getAttribute('id').split('-')[1] : element.getAttribute('id')

    document.getElementById(elementId).classList.add("donate__rings")


}