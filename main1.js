//carrusel-----------------------------------------------------------------

const grande = document.querySelector('.grande');
const punto = document.querySelectorAll('.punto');

punto.forEach( (cadaPunto, i) => { 

  punto[i].addEventListener("click", () => {

  	let posiciones = i
  	let operacion = posiciones * -50

    grande.style.transform = `translateX( ${operacion}% ) `

    punto.forEach( (cadaPunto, i) => {
        punto[i].classList.remove('activo')

      })
    punto[i].classList.add('activo')

  	})
  
  })