function main() {
  console.log("test");
  // Variables
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
  const combinacionesGanadoras = [
    // horizontal row 1
    [true, true, true, false, false, false, false, false, false],
    // horizontal row 2
    [false, false, false, true, true, true, false, false, false],
    // horizontal row 3
    [false, false, false, false, false, false, true, true, true],
    // vertical column 1
    [true, false, false, true, false, false, true, false, false],
    // vertical column 2
    [false, true, false, false, true, false, false, true, false],
    // vertical column 3
    [false, false, true, false, false, true, false, false, true],
    // diagonal 1
    [true, false, false, false, true, false, false, false, true],
    // diagonal 2
    [false, false, true, false, true, false, true, false, false],
  ];

  let turno = "X";
  const fichas = ["O", "X"];
  let fichasPuestas = 0;
  let finPartida = false;

  // DOM elements.

  const botona1 = document.getElementsByClassName("a1-button")[0];
  const botona2 = document.getElementsByClassName("a2-button")[0];
  const botona3 = document.getElementsByClassName("a3-button")[0];
  const botonb1 = document.getElementsByClassName("b1-button")[0];
  const botonb2 = document.getElementsByClassName("b2-button")[0];
  const botonb3 = document.getElementsByClassName("b3-button")[0];
  const botonc1 = document.getElementsByClassName("c1-button")[0];
  const botonc2 = document.getElementsByClassName("c2-button")[0];
  const botonc3 = document.getElementsByClassName("c3-button")[0];
  const arrButtonElements = [
    botona1,
    botona2,
    botona3,
    botonb1,
    botonb2,
    botonb3,
    botonc1,
    botonc2,
    botonc3,
  ];
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

        // comprobar victoria
        // arraySeleccionesX == combinacionesGanadoras;
        // 3. cambio de turno
        turno = "O";

        break;

      // SELECCION O
      case "O":
        arraySeleccionesO[0] = true;
        botona1 = document.getElementsByClassName("a1-button")[0];
        botona1.innerHTML = "O";
        botona1.style.background = "#F8C471";
        console.log("turno", turno);
        // arraySeleccionesO[]
        break;
    }
    console.log("click");
  }
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
