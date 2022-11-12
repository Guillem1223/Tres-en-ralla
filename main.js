function main() {
  console.log("test");
  let turnoX = 1;
  const arrayseleccionesX = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];
  let turnoO = 0;
  const arrayseleccionesO = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];
  let turno = "X";
  const fichas = ["O", "X"];
  let fichasPuestas = 0;
  let finPartida = false;
  function handleclick() {
    console.log("turno", turno);
    switch (turno) {
      // SELECCION X
      case "X":
        // 1.guardar la informacion.
        // arraySeleccionesX[0]
        // 2.colocar la ficha X en UI
        // a1-button = "X"
        // 3.cambiar de turno a O
        // turno = O

        break;
      // SELECCION O
      case "O":
        break;
    }
    console.log("click");
  }
  const boton1 = document.getElementsByClassName("a1-button")[0];
  boton1.addEventListener("click", handleclick);

  console.log("boton1", boton1);
}
main();
// window.addEventListener("load", main);
// do {
//   fichasPuestas == turno++;
// } while (fichasPuestas < 6);

// function ponerFicha(turno) {
//   let botonPulsado = turno;
//   if (condition) {
//   }
// }
