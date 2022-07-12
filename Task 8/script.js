/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
// pasinaudoti  konstruktoriaus funkcija: function... 15 uzduotis


function Calculator(a, b) {
    this.a = Number(a);
    this.b = Number(b);
}

// negerai cia viskas

let sum = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b;

const numbers = new Calculator(5, 3);
console.log(numbers.sum(), numbers.subtraction(), numbers.multiplication(), numbers.division(),);