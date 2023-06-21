function result(al) {
    let tam = al.length, un = 0, dos = 0;
    al = al.toUpperCase();

    for (let i = 0; i < tam; i++) {
        let aux = al.charAt(i);

        if (aux === 'F') {
            break;
        }

        switch (aux) {
            case 'A':
                un += 1;
                break;
            case 'B':
                dos += 1;
                break;
        }
    }

    return un + ' - ' + dos;
}