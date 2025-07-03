// Tipi Primitivi

// Esercizio 1

let nome: string = "Linda";
let età: number = 29;
let attivo: boolean = false;
let punteggio: number = 10.5;
let valoreIndefinito: undefined = undefined;

console.log(nome, età, attivo, punteggio, valoreIndefinito);

// Esercizio 2

let nomeCorrezione: string = "Matteo";
let finito: boolean = true;

console.log(nomeCorrezione, finito);

// Esercizio 3

function statoCorso(
  nomeCorso: string,
  durata: number,
  completato: boolean
): string {
  return `Il corso ${nomeCorso} dura ${durata} ore. Stato: ${
    completato ? "finito" : "non finito"
  } `;
}
console.log(statoCorso("Boolean", 600, true));

// Esercizio 4 (Ho dovuto fare ricerca per symbol)

let nulla: null = null;
let indefinito: undefined = undefined;
let grande: bigint = 130n;
let chiave: symbol = Symbol("id");

console.log(nulla, indefinito, grande, chiave);

// Esercizio 5 (Ho dovuto fare ricerca)

function descriviVariabile(valore: any): string {
  return `il valore è ${typeof valore}`;
}
console.log(descriviVariabile(true));

//Bonus (Ho dovuto fare ricerca)

function esercizioBonus(valore: unknown): string {
  switch (typeof valore) {
    case "string":
      return `Il valore è una stringa di lunghezza ${valore.length}`;
    case "number":
      return `Il valore è un numero che vale ${valore}`;
    default:
      return "Non gestito";
  }
}
console.log(esercizioBonus(40));
