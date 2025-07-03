// Array e Tuple

// Esercizio 1

let nomi: string[] = ["Giulia", "Linda", "Angela", "Giorgia"];
nomi.forEach((e) => console.log(e));

// Esercizio 2

let persona: [string, number] = ["Linda", 29];
console.log(persona);

// Esercizio 3

function calcolaMedia(numeri: number[]): number {
  const somma = numeri.reduce((acc, numero) => acc + numero, 0);
  return somma / numeri.length;
}
console.log(calcolaMedia([5, 10, 15]));

// Esercizio 4

function nomiMaiuscoli(nomi: string[]): string[] {
  return nomi.map((e) => e.toUpperCase());
}
console.log(nomiMaiuscoli(["leone", "fumetto"]));

// Esercizio 5

let nuovaPersona: [string, number, boolean] = ["Marta", 50, true];
nuovaPersona[0] = "Giacomo";

console.log(nuovaPersona[0]);
console.log(nuovaPersona[1]);
console.log(nuovaPersona[2]);

//Bonus

function personaBonus(dati: [string, number]): string {
  const [nome, età] = dati;
  return `${nome} ha ${età} anni`;
}
console.log(personaBonus(["Kevin", 87]));
