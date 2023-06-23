document.addEventListener('DOMContentLoaded', function (event) {
    vaciarCeldas(); // Llamada a la función para vaciar las celdas
    seleccionarCelda();

    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            moverCeldas(event.key);
            comprobarEstadoJuego();
        }
    });
});

function victoria() {
    const celdas = document.getElementsByClassName('cell');

    for (let i = 0; i < celdas.length; i++) {
        if (celdas[i].textContent.trim() === '2048') {
            return '¡Felicidades! ¡Has ganado!';
        }
    }

    return null;
}

function gameOver(posicionInicial) {
    const posicionC = posicionInicial;
    const celdas = document.getElementsByClassName('cell');

    // Comprobar si todas las celdas están llenas
    let todasLlenas = true;
    for (let i = 0; i < celdas.length; i++) {
        if (celdas[i].innerText.trim() === '') {
            todasLlenas = false;
            break;
        }
    }

    if (todasLlenas) {
        // Comprobar si se puede hacer algún movimiento
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if ((j < 3 && posicionC[i][j] === posicionC[i][j + 1]) || (i < 3 && posicionC[i][j] === posicionC[i + 1][j])) {
                    return null; // Aún se pueden hacer movimientos
                }
            }
        }

        return '¡GAME OVER!';
    }

    return null;
}

function comprobarEstadoJuego() {
    const mensajeVictoria = victoria();

    if (mensajeVictoria) {
        alert(mensajeVictoria);
        // Realizar acciones para victoria
    } else {
        const posicionC = mPosicionC();
        const mensajeGameOver = gameOver(posicionC);

        if (mensajeGameOver) {
            alert(mensajeGameOver);
        } else {
            seleccionarCelda();
        }
    }
}

function valorAleatorio() {
    const valores = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048];
    const probabilidad = [0.4, 0.3, 0.2, 0.05, 0.02, 0.01, 0.01, 0.005, 0.002, 0.001, 0.001];

    let totalPesos = probabilidad.reduce((sum, peso) => sum + peso, 0);
    let valorAleatorio = Math.random() * totalPesos;

    for (let i = 0; i < valores.length; i++) {
        valorAleatorio -= probabilidad[i];
        if (valorAleatorio <= 0) {
            return valores[i];
        }
    }

    return null;
}

function vaciarCeldas() {
    const celdas = document.querySelectorAll('.cell p');

    celdas.forEach((celda) => {
        celda.innerText = '';
        celda.removeAttribute('id-lleno');
    });
}

function matrizIds() {
    const celdas = {};

    for (let fila = 1; fila <= 4; fila++) {
        for (let columna = 1; columna <= 4; columna++) {
            const id = `c${(fila - 1) * 4 + columna}`;
            celdas[id] = { fila, columna };
        }
    }

    return celdas;
}

function seleccionarCelda() {
    const celdas = matrizIds(); // Obtener la matriz de IDs de celdas
    const celdasIds = Object.keys(celdas);
    const indice = Math.floor(Math.random() * celdasIds.length);
    const celdaAleatoria = celdasIds[indice];

    const valorCelda = valorAleatorio();

    const celdaSeleccionada = document.getElementById(celdaAleatoria);
    const textoCelda = document.createElement('p');
    textoCelda.style.fontSize = '240%'; // Establecer el tamaño de fuente
    textoCelda.innerText = valorCelda;
    celdaSeleccionada.innerHTML = '';
    celdaSeleccionada.appendChild(textoCelda);
    celdaSeleccionada.setAttribute('id-lleno', '');

    return celdaAleatoria;
}

function mPosicionC() {
    const posicionC = [];

    for (let i = 0; i < 4; i++) {
        posicionC[i] = [
            document.getElementById(`c${i * 4 + 1}`).innerText.trim(),
            document.getElementById(`c${i * 4 + 2}`).innerText.trim(),
            document.getElementById(`c${i * 4 + 3}`).innerText.trim(),
            document.getElementById(`c${i * 4 + 4}`).innerText.trim(),
        ];
    }

    return posicionC;
}

function actualizarCeldas(posicionC) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const celda = document.getElementById(`c${i * 4 + j + 1}`);
            const textoCelda = document.createElement('p');
            textoCelda.style.fontSize = '240%'; // Establecer el tamaño de fuente
            textoCelda.innerText = posicionC[i][j];
            celda.innerHTML = '';
            celda.appendChild(textoCelda);
        }
    }

    seleccionarCelda();
}
function seleccionarCelda() {
    const celdas = matrizIds(); // Obtener la matriz de IDs de celdas
    const celdasIds = Object.keys(celdas);
    const indice = Math.floor(Math.random() * celdasIds.length);
    const celdaAleatoria = celdasIds[indice];

    const valorCelda = valorAleatorio();

    const celdaSeleccionada = document.getElementById(celdaAleatoria);

    // Verificar si la celda está vacía antes de asignar el valor
    if (celdaSeleccionada.innerText.trim() === '') {
        const textoCelda = document.createElement('p');
        textoCelda.style.fontSize = '240%';
        textoCelda.innerText = valorCelda;
        celdaSeleccionada.innerHTML = '';
        celdaSeleccionada.appendChild(textoCelda);
        celdaSeleccionada.setAttribute('id-lleno', '');
    }

    return celdaAleatoria;
}

function moverCeldas(tipe) {
    const posicionC = mPosicionC();

    switch (tipe) {
        case 'ArrowUp':
            for (let y = 0; y < 4; y++) {
                for (let g = 0; g < 4; g++) {
                    for (let b = 3; b > 0; b--) {
                        if (posicionC[b][g] !== '' && posicionC[b - 1][g] === '') {
                            // Realizar intercambio
                            const temp = posicionC[b][g];
                            posicionC[b][g] = '';
                            posicionC[b - 1][g] = temp;
                        } else if (posicionC[b][g] !== '' && posicionC[b][g] === posicionC[b - 1][g]) {
                            // Sumar valores
                            const suma = parseInt(posicionC[b][g]) + parseInt(posicionC[b - 1][g]);
                            posicionC[b][g] = suma.toString();
                            posicionC[b - 1][g] = '';
                        }
                    }
                }
            }
            break;
        case 'ArrowDown':
            for (let y = 0; y < 4; y++) {
                for (let g = 0; g < 4; g++) {
                    for (let b = 0; b < 3; b++) {
                        if (posicionC[b][g] !== '' && posicionC[b + 1][g] === '') {
                            // Realizar intercambio
                            const temp = posicionC[b][g];
                            posicionC[b][g] = '';
                            posicionC[b + 1][g] = temp;
                        } else if (posicionC[b][g] !== '' && posicionC[b][g] === posicionC[b + 1][g]) {
                            // Sumar valores
                            const suma = parseInt(posicionC[b][g]) + parseInt(posicionC[b + 1][g]);
                            posicionC[b][g] = suma.toString();
                            posicionC[b + 1][g] = '';
                        }
                    }
                }
            }
            break;
        case 'ArrowRight':
            for (let y = 0; y < 4; y++) {
                for (let b = 0; b < 4; b++) {
                    for (let g = 0; g < 3; g++) {
                        if (posicionC[b][g] !== '' && posicionC[b][g + 1] === '') {
                            // Realizar intercambio
                            const temp = posicionC[b][g];
                            posicionC[b][g] = '';
                            posicionC[b][g + 1] = temp;
                        } else if (posicionC[b][g] !== '' && posicionC[b][g] === posicionC[b][g + 1]) {
                            // Sumar valores
                            const suma = parseInt(posicionC[b][g]) + parseInt(posicionC[b][g + 1]);
                            posicionC[b][g] = suma.toString();
                            posicionC[b][g + 1] = '';
                        }
                    }
                }
            }
            break;
        case 'ArrowLeft':
            for (let y = 0; y < 4; y++) {
                for (let b = 0; b < 4; b++) {
                    for (let g = 3; g > 0; g--) {
                        if (posicionC[b][g] !== '' && posicionC[b][g - 1] === '') {
                            // Realizar intercambio
                            const temp = posicionC[b][g];
                            posicionC[b][g] = '';
                            posicionC[b][g - 1] = temp;
                        } else if (posicionC[b][g] !== '' && posicionC[b][g] === posicionC[b][g - 1]) {
                            // Sumar valores
                            const suma = parseInt(posicionC[b][g]) + parseInt(posicionC[b][g - 1]);
                            posicionC[b][g] = suma.toString();
                            posicionC[b][g - 1] = '';
                        }
                    }
                }
            }
            break;
    }

    actualizarCeldas(posicionC);
}