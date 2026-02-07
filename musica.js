const audio = document.getElementById("musica");
const boton = document.getElementById("btnMusica");

boton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    document.body.classList.add("musica-activa");
    console.log("Música ON");
  } else {
    audio.pause();
    document.body.classList.remove("musica-activa");
    console.log("Música OFF");
  }
});
