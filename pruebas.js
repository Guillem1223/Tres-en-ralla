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

const esVictoria = (arraySelecciones) => {
  let gana = false;
  combinacionesGanadoras.forEach((combinacionArr) => {
    // devuelve array true/false si es coincidencia
    const coincidenciasFor = [];
    // Tambien se podria hacer con for pero solo tendriamos acceso a indice y tendiramos que crear el array coincidenciasFor
    // for (let index = 0; index < combinacionArr.length; index++) {
    //   const casilla = combinacionArr[index];
    //   coincidenciasFor[indice] = false;
    // }
    // con .map conseguimos ahorrar lineas de codigo, hacerlo mas entendible y compacto
    const coincidencias = combinacionArr.map((casilla, indice) => {
      // casilla, indice, arraySelecciones
      if (arraySelecciones[indice] == casilla) {
        coincidenciasFor[indice] = true;

        return true;
      } else {
        coincidenciasFor[indice] = false;

        return false;
      }
    });

    console.log("coincidencias for", coincidenciasFor);
    const coincide = coincidencias.filter((casilla, indice) => {
      return;
    });
    if (coincide.lenght == 9) {
      gana = true;
    }
    // si la array coincide tiene una longitud de 9 gana debe convertirse en true
    // coincide.lenght == 9? gana = true
  });
  return gana;
};
esVictoria(pruebaSelecciones);
