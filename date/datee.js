function CantidadDiasAnioNuevo(fecha) {
    let anioNuevo = new Date(fecha.getFullYear(), 11, 31);
    let diferenciaTiempo = anioNuevo.getTime() - fecha.getTime();
    let faltan = Math.ceil(diferenciaTiempo / (1000 * 60 * 60 * 24));
    return faltan;
}
  
function CantidadDiasCatar2022(fecha) {
    let campeonato = new Date(2022, 11, 18);
    let diferenciaTiempo = fecha.getTime() - campeonato.getTime();
    let diasTranscurridos = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));
    return diasTranscurridos;
}

function cantidadAnios(fec1, fec2) {
    let anios = fec2.getFullYear() - fec1.getFullYear();
    return 'Han transcurrido: ' + anios + ' años.';
}
  
function diaLaborable(fecha) {
    let dia = fecha.getDay();
    if (dia >= 1 && dia <= 5) {
        return 'Es un día laboral';
    } else {
        return 'No es un día laboral';
    }
}