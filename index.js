const contador = document.getElementById("contador");
const buttonIncrementar = document.getElementById("incrementar");
const buttonDecrementar = document.getElementById("decrementar");

let number = 0;
contador.textContent = number;

//* crear un broadcast channel
const channel = new BroadcastChannel('contador');

buttonIncrementar.addEventListener('click', () => {
  number++;
  contador.textContent = number;
  //* enviamos la informacion al broadcast channel
  channel.postMessage(number);
})

buttonDecrementar.addEventListener('click', () => {
  number--;
  if(number <0 ) {
    number = 0
  }
  contador.textContent = number;
  //* enviamos la informacion al broadcast channel
  channel.postMessage(number);
})

//* escuchamos el broadcast channel
channel.onmessage = (event) => {
  const number = event.data;
  contador.textContent = number;
}

