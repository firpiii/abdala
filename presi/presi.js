function Presidenta(a, b) {
	let num = [];

	for (let i = a; i <= b; i++) {
	  	if (NumeroSecreto(i)) {
			num.push(i);
	  	}
	}
	return num.join(' ');
  }
  
function NumeroSecreto(z) {
	let u = String(z);
	let t = u.length;
	let suma = 0;
  
	if (!Primos(z)) {
		return false;
	}
  
	for (let a = 0; a < t; a++) {
	  	suma += parseInt(u.charAt(a), 10);
	}
  
	if (!Primos(suma)) {
	  	return false;
	}
  
	return z;
}
  
function Primos(v) {
	if (v <= 1) {
		return false;
	}
  
	for (let i = 2; i <= Math.sqrt(v); i++) {
	  	if (v % i === 0) {
			return false;
	  	}
	}
  
	return true;
  }  