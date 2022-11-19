function main() {
  console.log("test");
  // Variables

  const nombreJugador2 = document.getElementById("nombreJugador2");
  // const infoTurno = document.getElementById("infoTurno");
  const reiniciar = document.getElementById("reiniciarPartida");

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
  const pruebaSelecciones = [
    false,
    false,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
  ];

  // planteamiento comprobar victoria
  combinacionesGanadoras.forEach((element) => {
    if (pruebaSelecciones == element) {
      // esFinPartida = true
      // arrButtonElements.ge
    }
    console.log("el elemento", element);
    console.log("selecciones jugador O", pruebaSelecciones);
    console.log(
      "condicion arraySeleccionesO == element",
      pruebaSelecciones == element
    );
  });

  let turno = "X";
  const nombreJugador1 = document.getElementById("nombreJugador1");
  infoTurno.innerHTML = turno;
  const fichas = ["O", "X"];
  let fichasPuestas = 0;
  let esFinPartida = false;

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
  console.log("arrButtElements", arrButtonElements);
  console.log("selecciones X", arraySeleccionesX);
  // handle tirada se ejecuta al hacer click en cada uno de los Button
  function handleTirada(boton, index) {
    console.log("boton y indice", boton, index);
    // comprobar si la casilla ya a sido seleccionada
    if (arraySeleccionesX[index] == true) {
      return;
    }
    if (arraySeleccionesO[index] == true) {
      return;
    }

    console.log("turno", turno);
    switch (turno) {
      // SELECCION X
      case "X":
        infoTurno.innerHTML = `${nombreJugador1}`;
        console.log("nombre del jugador 1" + nombreJugador1);
        // para comprobar que no hay mas de 3 turnos O
        if (turnoX > 3) {
          return;
        }
        // sumamos un turno a X
        turnoX++;

        // 1.guardar la informacion.

        arraySeleccionesX[index] = true;
        boton.innerHTML = "X";
        // Pruebas
        if (arraySeleccionesX == combinacionesGanadoras) {
          esFinPartida = true;
          arrButtonElements.innerHTML = "Player X WIN!";
        }
        console.log("esfinpartida ", esFinPartida);
        // fin pruebas

        boton.style.background = "#d0d0d0";
        console.log("selecciones X", arraySeleccionesX);
        // 2.colocar la ficha X en UI

        // comprobar victoria
        // arraySeleccionesX == combinacionesGanadoras;
        // 3. cambio de turno
        turno = "O";
        infoTurno.innerHTML = `${nombreJugador2}`;
        break;

      // SELECCION O
      case "O":
        // para comprobar que no hay mas de 3 turnos O
        if (turnoO > 3) {
          return;
        }
        // sumamos un turno a O
        turnoO++;
        //
        arraySeleccionesO[index] = true;
        boton.innerHTML = "O";
        // pruebas
        if (arraySeleccionesO == combinacionesGanadoras) {
          esFinPartida = true;
          arrButtonElements.innerHTML = "Player O WIN!";
        }
        // fin pruebas

        boton.style.background = "#F8C471";
        console.log("turno", turno);
        turno = "X";
        // arraySeleccionesO[]
        break;
    }
    console.log("click");
  }
  arrButtonElements.forEach((boton, index) => {
    function clickCallBack(e) {
      console.log("click", e);
      handleTirada(boton, index);
    }
    boton.addEventListener("click", clickCallBack);
  });
}
main();
reiniciarPartida = arrButtonElements.innerHTML = "";

// window.addEventListener("load", main);
// do {
//   fichasPuestas == turno++;
// } while (fichasPuestas < 6);

// function ponerFicha(turno) {
//   let botonPulsado = turno;
//   if (condition) {
//   }
// }
