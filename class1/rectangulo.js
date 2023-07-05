class Rectangulo{
    constructor(longitud, ancho){
        this.longitud=longitud;
        this.ancho=ancho;
    }

calcularArea(area){
    return this.longitud*this.ancho;
}
}

const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(event)
{
    event.preventDefault();
  const longitud = document.getElementById('longitud').value;
  const ancho = document.getElementById('ancho').value;

  const rectangulo = new Rectangulo(longitud, ancho);

  const area = document.getElementById('area');
  area.innerHTML ='El area del rectangulo es '+ rectangulo.calcularArea();
});