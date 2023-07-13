class PassWord{
    constructor(contrasena,longitud){
        this.contrasena=contrasena;
        this.longitud=longitud;
    }

   
    EsContrasenaFuerte() {
       let min=0;
       let may=0;
       let num=0;
      
        for (let i = 0; i < this.contrasena.length; i++) {
          let caracter;
          caracter = this.contrasena[i];
      
        
        if (/[A-Z]/.test(caracter)) {
            may++;
          }
        if (/[a-z]/.test(caracter)) {
            min++;
          }
        if (/[0-9]/.test(caracter)) {
            num++;
          }
    }

     if (may >= 2 && min >= 1 && num >= 5  ){
      return true;
    }
    else{
      return false;
    }
}
}
const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(event)
{
    event.preventDefault();
    
            const contrasena= document.getElementById('contrasena').value;

            const contra = new PassWord(contrasena);
    
            const datos = document.getElementById('datos');
            datos.innerHTML='Es segura la contraseña? '+contra.EsContrasenaFuerte();
});