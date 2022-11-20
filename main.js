function main() {
  console.log("test");
  // Variables
  const infoTurno = document.getElementById("infoTurno");
  let nombreJugador2 = "jugador 2";
  const nombreJugador2ElInput = document.getElementById("nombreJugador2");
  // asignar nombre por defecto
  nombreJugador2ElInput.value = nombreJugador2;

  nombreJugador2ElInput.addEventListener("blur", (e) => {
    nombreJugador2 = nombreJugador2ElInput.value;
    infoTurno.value = nombreJugador2;
    console.log("blur", e);
  });

  // const infoTurno = document.getElementById("infoTurno");
  const reiniciar = document.getElementById("reiniciarPartida");

  let reintento = false;

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

  const pruebaSelecciones = [
    false,
    true,
    false,
    false,
    true,
    false,
    true,
    false,
    false,
  ];

  // planteamiento comprobar victoria

  const esVictoria = (arraySelecciones) => {
    let gana = false;
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
    combinacionesGanadoras.forEach((combinacionArr) => {
      // devuelve array true/false si es coincidencia

      // coincidenciasFor es solo para testing y aprendizaje
      // const coincidenciasFor = [];
      // Tambien se podria hacer con for pero solo tendriamos acceso a indice y tendiramos que crear el array coincidenciasFor
      // for (let index = 0; index < combinacionArr.length; index++) {
      //   const casilla = combinacionArr[index];
      //   coincidenciasFor[indice] = false;
      // }

      // con .map conseguimos ahorrar lineas de codigo, hacerlo mas entendible y compacto

      // .map nos construye una array nueva, que es el resultado de la comparacion del foreach, ademas mirara el valor de cada casilla indice por indice
      const coincidencias = combinacionArr.map((casilla, indice) => {
        if (casilla == true) {
          //   const casilla = combinacionArr[index];
          // casilla, indice, arraySelecciones
          if (arraySelecciones[indice] == casilla) {
            // coincidenciasFor[indice] = true;

            return true;
          } else {
            // coincidenciasFor[indice] = false;

            return false;
          }
        } else {
          // coincidenciasFor[indice] = true;
          return true;
        }
      });

      // console.log("coincidencias for", coincidenciasFor);
      console.log("coincidencias", coincidencias);
      // .filter va casilla por casilla y si el return devuelve true lo mañadira a una array nueva y sino lo ignorara.
      const coincide = coincidencias.filter((casilla, indice) => {
        return casilla;
      });
      console.log("coincide", coincide);
      console.log("coincide.length", coincide.length);
      if (coincide.length == 9) {
        gana = true;
      }
      // si la array coincide tiene una longitud de 9 gana debe convertirse en true
      // coincide.length == 9? gana = true
    });
    console.log("gana", gana);
    return gana;
  };
  // esVictoria(pruebaSelecciones);

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

  // handle tirada se ejecuta al hacer click en cada uno de los Button
  function handleTirada(boton, index) {
    console.log(`es final de partida, ${esFinPartida}`);
    if (esFinPartida) {
      return;
    }

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
        // infoTurno.innerHTML = `${nombreJugador1}`;
        // console.log("nombre del jugador 1" + nombreJugador1);
        // para comprobar que no hay mas de 3 turnos O
        if (turnoX > 3) {
          return;
        }
        // sumamos un turno a X
        turnoX++;

        // 1.guardar la informacion.

        arraySeleccionesX[index] = true;
        boton.innerHTML = "X";

        boton.style.background = "#d0d0d0";
        console.log("selecciones X", arraySeleccionesX);
        // 2.colocar la ficha X en UI

        // comprobar victoria
        esFinPartida = esVictoria(arraySeleccionesX);
        if (esFinPartida) {
          //  mostrarUiVictoria()
          break;
        } else {
        }
        // 3. cambio de turno
        turno = "O";
        // infoTurno.innerHTML = `${nombreJugador2}`;
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

        boton.style.background = "#F8C471";
        console.log("turno", turno);
        turno = "X";
        // arraySeleccionesO[]
        break;
    }
    console.log("click");
  }

  // Usamos el forEach para repetir el evento en todos los botones sin tener que repetir la linea de codigo para cada uno de ellos.

  arrButtonElements.forEach((boton, index) => {
    function clickCallBack(e) {
      console.log("click", e);
      handleTirada(boton, index);
    }
    boton.addEventListener("click", clickCallBack);
  });
}
main();
