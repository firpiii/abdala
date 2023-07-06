class Formulario{
    constructor(dni,nombre,fechaN,genero,peso,altura){
        this.dni=dni;
        this.nombre=nombre;
        this.fechaN=fechaN;
        this.genero=genero;
        this.peso=peso;
        this.altura=altura;
    }

    CalcuSob(){
        const x=  this.peso/(this.altura*this.altura); 

        if(x>20){
            return 'Esta debajo el peso ideal'
        }
        if(x<=20&& x>=25){
            return 'Esta en su peso ideal'
        }
        if(x>25){
            return'Esta sobre el peso ideal'
        }

    }

    EsMenorEdad(){
            const FechaAct = new Date();
            const fechaNacimiento = new Date(this.Fecha);
            const Edad = FechaAct.getFullYear() - fechaNacimiento.getFullYear();
        
            return 'Es menor?'+ this.edad <= 18;
    }
    
}
const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(event)
{
    event.preventDefault();

        const dni= document.getElementById('dni').value;
        const nombre= document.getElementById('nombre').value;
        const fechaN= document.getElementById('fechaN').value;
        const genero= document.getElementById('genero').value;
        const peso= document.getElementById('peso').value;
        const altura= document.getElementById('altura').value;

        const persona = new Formulario(dni,nombre,fechaN,genero,peso,altura);

        const datos = document.getElementById('datos');
        anti.innerHTML= 'EL peso es: '+persona.CalcuSob();
        datos.innerHTML='Es menor de edad?'+persona.EsMenorEdad();
});