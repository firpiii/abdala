let fec = new Date();
let fech1 = new Date(2015, 4, 16);
let fech2 = new Date(2020, 6, 8);

document.write("Faltan " + CantidadDiasAnioNuevo(fec) + " días para Año Nuevo. <br>"); 
document.write("Somos campeones del mundo hace " + CantidadDiasqatar2022(fec) + " días. <br>"); 
document.write("Entre el 26 de abril del 2016 y el 7 de junio del 2019 pasaron " + CantidadAniosEntreAmbas(fech1, fech2)+ " años completos. <br>"); 

if(esDiaLaborable(fec) == true)
    document.write("Hoy es día laborable");
else    
    document.write("Hoy no es día laborable");

function CantidadDiasAnioNuevo(fec)
{
    fec = new Date(2024, 0, 1, 0, 0, 0, 0);

    let hoy = new Date();

    let diasFaltan = fec.getTime() - hoy.getTime();
    
    diasFaltan = Math.round(diasFaltan / (1000*60*60*24)); 

    return diasFaltan;
}

function CantidadDiasqatar2022(fec)
{
    fec = new Date(2022, 11, 18);

    let hoy = new Date();

    let diasDesdeEntonces = hoy.getTime() - fec.getTime();
    
    diasDesdeEntonces = Math.round(diasDesdeEntonces / (1000*60*60*24)); 

    return diasDesdeEntonces;    
}

function CantidadAniosEntreAmbas(fech1, fech2)
{
    let aniiotran = new Date(fech2.getTime() - fech1.getTime());
    
    aniiotran = Math.round(aniiotran / (1000*60*60*24*31*12)); 

    return aniiotran;    
}

function esDiaLaborable(fec)
{
    if((fec.getDay() == 0) || (fec.getDay() == 6))
        return false;
    else
        return true;
}