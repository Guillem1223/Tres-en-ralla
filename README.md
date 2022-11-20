# Tic Tac Toe Version 1.0

## Tabla de Contenidos

- [Descripcion](#descripcion)
- [Estructura](#estructura)
- [Propuestas para proximas actualizaciones](#Propuestas_para_proximas_actualizaciones)

## Descripción <a name = "descripcion"></a>

Juego clásico tic tac toe.
He creado un tablero de juego donde podrás competir contra un amigo, las normas del juego consisten en conseguir tener tres fichas consecutivas en línea antes que tu adversario.
<br>
También podrás escoger un nombre para cada jugador y la interfaz te indicará de quien es el turno en cada ocasión, así como, si se da el caso, quien ha ganado la partida.

## Estructura <a name = "estructura"></a>

HTML: diferenciamos dos partes, la interfaz para cada uno de los jugadores y el tablero de juego.
<br><br>
CSS: diseños básicos para dar tamaño, colores y posición del tablero.
<br><br>
JS: Explicación detallada de todos los procesos dentro del código.
<br>

1. Gestión de los nombres de los jugadores 1 y 2 para la interfaz.
   <br>
2. Reiniciar y limpiar el tablero para crear una nueva partida.
   <br>
3. Gestión de victoria usando forEach + .map + .filter y gestión de detención de la partida en caso de que exista un ganador.
   <br>
   4.DOM elements.
   <br>
4. Gestión de los turnos, limitación de fichas por turno, introducción de fichas en UI mientras las reglas del juego lo permitan, comprobación de victoria por cada turno, mensaje de ganador en interfaz

### Propuestas para proximas actualizaciones o versiones <a name= "Propuestas_para_proximas_actualizaciones"></a>

El codigo esta preparado para poder generar varias actualizaciones mas:
<br><br>
En la próxima actualización está programado hacer:
<br>
1.una pantalla de inicio tipo menú para leer las normas del juego e iniciar una partida, para dar paso al tablero.
<br>
2.Cuando un usuario tenga el límite de 3 fichas puestas en el tablero, crearé la posibilidad de borrar una de ellas para permitir colocar otra en una casilla vacía.
<br>
3.Mejora del diseño.
