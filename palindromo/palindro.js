const espalidd= (text)=>{
    let flag = false;
    let splitText= [...text];
    let reversedText= splitText.reverse();
    let joinedText= reversedText.join('');
    for(leti=0; i<text.length;i++){
        if(text.charAt(i) == reversedText.charAt(i)){
            flag = true;
        }
        if(text.charAt(i) != reversedText.charAt(i)){
            flag = false;
        }
    }
   return flag;
}


function espalin(text) {
    if (espalin(text) == true) {
        document.write('Es Palindromo');
    } if (espalin(text) == false) {
        document.write('No es Palindromo');
    }
}
espalin('uz verde');