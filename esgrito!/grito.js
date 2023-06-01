function EsGrito(text){
    let replace = document.getElementById('replaceText');
    if(text.charAt(text.length-1) == '!'){
        document.write('Es Grito');
    }if(text.charAt(text.length-1) != '!'){
        document.write('No es grito');
    }
}