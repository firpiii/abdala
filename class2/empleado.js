class Empleado{
    constructor(nombre,ingreso,salario,direc){
        this.nombre=nombre;
        this.ingreso=ingreso;
        this.salario=salario;
        this.direc=direc;
    }

    PedirDatos(datos){
        return `<br> * Nombre: ${this.nombre}<br>* Año de Ingreso: ${this.ingreso}<br>* Salario: ${this.salario}<br>* Direccion: ${this.direc}`;
    }

    PedirAntiguedad(){
        return  2023-this.ingreso;
    }
}
const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(event)
{
    event.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const ingreso = document.getElementById('ingreso').value;
  const salario= document.getElementById('salario').value;
  const direc= document.getElementById('direc').value;  



  const empleado = new Empleado(nombre,ingreso,salario,direc);

  const datos = document.getElementById('datos');
  datos.innerHTML ='Los datos del empleado son:  '+ empleado.PedirDatos();
  anti.innerHTML ='Los años de antiguedad son:  '+ empleado.PedirAntiguedad();

  if(direc=='WallStreet'){
    document.write("Vivie en WallStreet");
  }
  else{
    document.write("No vivie en WallStreet");
  }
});


