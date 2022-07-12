/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = Number(budget);
    }

    wasExpensive() {
        const { budget } = this;
        if (budget > 100000000) {
            console.log(true)
        }
        else {
            console.log(false)
        }
    }

}

const movie1 = new Movie('Avengers: Endgame', 'Joe Russo, Anthony Russo', 400000000);
const movie2 = new Movie('Ford v. Ferrari', 'James Mangold', 97600000);
const movie3 = new Movie('Pacific Rim', 'Guillermo del Toro', 190000000);
const movie4 = new Movie('Once Upon a Time…in Hollywood', 'Quentin Tarantino', 90000000);
console.log(movie1.wasExpensive(), movie2.wasExpensive(), movie3.wasExpensive(), movie4.wasExpensive());