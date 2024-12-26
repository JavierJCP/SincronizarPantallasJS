const contador = document.getElementById("contador");
const buttonIncrementar = document.getElementById("incrementar");
const buttonDecrementar = document.getElementById("decrementar");

let number = 0;
contador.textContent = number;


buttonIncrementar.addEventListener('click', () => {
  number++;
  contador.textContent = number;
})

buttonDecrementar.addEventListener('click', () => {
  number--;
  if(number <0 ) {
    number = 0
  }
  contador.textContent = number;
})