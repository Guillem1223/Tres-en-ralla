function main() {
  console.log("test");

  let turnoX = 1;
  const arraySeleccionesX = [
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
  let turnoO = 1;
  const arraySeleccionesO = [
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
  console.log("selecciones X", arraySeleccionesX);
  function handleclick() {
    // comprobar si la casilla ya a sido seleccionada
    if (arraySeleccionesX[0] == true) {
      return;
    }
    if (arraySeleccionesO[0] == true) {
      return;
    }
    console.log("turno", turno);
    switch (turno) {
      // SELECCION X
      case "X":
        // 1.guardar la informacion.
        arraySeleccionesX[0] = true;
        console.log("selecciones X", arraySeleccionesX);
        // 2.colocar la ficha X en UI
        const boton1 = document.getElementsByClassName("a1-button")[0];
        boton1.innerHTML = "X";
        boton1.style.background = "#d0d0d0";
        // 3. cambio de turno
        turno = "O";

        break;

      // SELECCION O
      case "O":
        console.log("turno", turno);
        // arraySeleccionesO[]
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
switch (key) {
  case value:
    break;

  default:
    break;
}
