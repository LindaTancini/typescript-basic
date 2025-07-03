// Funzioni Tipizzate
// Esercizio 1

function saluta(nome: string): string {
  return `Ciao, ${nome}`;
}
console.log(saluta("Linda"));

// Esercizio 2

function moltiplica(a: number, b: number): number {
  return a * b;
}
console.log(moltiplica(2, 3));

// Esercizio 3

function isPari(n: number): boolean {
  return n % 2 === 0;
}
console.log(isPari(4));

// Esercizio 4

function benvenuto(nome: string, ruolo?: string): string {
  return ruolo
    ? `Benvenuto ${nome} il tuo ruolo è ${ruolo}`
    : `Benvenuto ${nome}`;
}
console.log(benvenuto("Ilda", "Moderatore"));
console.log(benvenuto("Elda"));

// Esercizio 5

function calcolaSconto(prezzo: number, sconto: number = 0.1): number {
  return prezzo * (1 - sconto);
}
console.log(calcolaSconto(50, 0.2));

// Bonus (fatto ricerca)

function log<T>(valore: T): void {
  console.log("Ho passato il valore:", valore);
}
log("ciao");
log(8);
log(true);

log<string>("ciao con stringa specificata");
log<number>(8);
log<boolean>(true);
