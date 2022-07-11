/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

// const rezultatai = document.querySelector('#output');
// const btn = document.querySelector('#btn');
// btn.addEventListener('click', gettData);

// function gettData() {
//     fetch(ENDPOINT).then(function (res) {
//         return res.json();
//     }).then(function (data) {
//         console.log(data);
//         duomenys(data)
//     }).catch(function (e) {
//         console.log(e);
//     })
// }


// function duomenys (arr) {
//     arr.forEach(elementas =>{
//         console.log(elementas.login);
//         console.log(elementas.avatar_url);
//         let elCard = document.createElement('div'); //sukurem tuscia elemnta
//         elCard.innerHTML = `${elementas.login} ${elementas.avatar_url}`
//         rezultatai.appendChild(elCard)
//     });
// }

const hideP = document.querySelector('#message');
const results = document.querySelector('#output');
const btn = document.querySelector('#btn');
btn.addEventListener('click', getData);

function getData() {

    fetch(ENDPOINT).then(function (res) {
        return res.json();
    }).then(function (data) {
        // console.log(data.results);
        data.forEach(el => {
            let userCard = document.createElement('div');
            userCard.textContent = `${el.login}`;
            let avatar = document.createElement('img');
            avatar.setAttribute('src', el.avatar_url);
            avatar.style.display = 'block';
            userCard.appendChild(avatar);
            results.appendChild(userCard);
            userCard.classList.add('userCard');
        });
    }).then(function () {
        hideP.classList.add('hide');
    })
}