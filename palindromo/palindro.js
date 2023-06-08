let texto = prompt("");
let poli = texto.split('');
poli = poli.reverse("").join('');


if (texto == poli) {
    alert("es palindromo");
}else{
    alert("no es palindromo");
}

document.write(poli+"<br>   ");
document.write(texto);
