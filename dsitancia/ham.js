function Hamming(a, b) {
    let z = 0
    let u = a.length;

    for(let v = 0; v < u; v++) {
        if(a.charAt(v) != b.charAt(v)) {
            z++;
        }
    }

    return z;
}