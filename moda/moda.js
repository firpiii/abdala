function calcularModa() {
    var N = parseInt(prompt("Ingrese el tamaño del vector:"));
    var A = [];
    for (var i = 0; i < N; i++) {
        A.push(Math.floor(Math.random() * 600));
    }

    A.sort(function (a, b) {
        return a - b;
    });

    var frecuencias = {};
    for (var i = 0; i < N; i++) {
        if (frecuencias[A[i]] == undefined) {
            frecuencias[A[i]] = 1;
        } else {
            frecuencias[A[i]]++;
        }
    }

    var moda = A[0];
    var max_frecuencia = 1;
    for (var i in frecuencias) {
        if (frecuencias[i] > max_frecuencia) {
            moda = i;
            max_frecuencia = frecuencias[i];
        }
    }

    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML =
        "<p>Vector A: " + A.join(", ") + "</p>" + "<p>Moda: " + moda + "</p>";
}