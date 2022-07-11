/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */


const forma = document.querySelector('form');
const svorisKgInput = document.querySelector('#search');
const rodomSvori = document.querySelector('#output');

function svorioKonvertavimas(e) {
    e.preventDefault()

    let p1 = document.createElement('div');
    p1.innerHTML = `${svorisKgInput.value}kg = ${(svorisKgInput.value * 2.2046).toFixed(2)}lb`;
    rodomSvori.append(p1);

    let p2 = document.createElement('div');
    p2.innerHTML = `${svorisKgInput.value}kg = ${(svorisKgInput.value / 0.0010000).toFixed(2)}g`;
    rodomSvori.append(p2);

    let p3 = document.createElement('div');
    p3.innerHTML = `${svorisKgInput.value}kg = ${(svorisKgInput.value * 35.274).toFixed(2)}oz`;
    rodomSvori.append(p3);

    svorisKgInput.value = '';

}

forma.addEventListener('submit', svorioKonvertavimas);
