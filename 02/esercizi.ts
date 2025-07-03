// Tipi Speciali

// Esercizio 1 (Void = si usa per indicare che una funzione non restituisce alcun valore. Utile per console.log, alert, salvare dati.)
function log(msg: string): void {
  console.log(msg);
}
log("Ciao");

// Esercizio 2 (Never = per lanciare un errore  o se non hai un valore di ritorno valido )
//function throwError(msg: string): never {
//  throw new Error(msg);
//}

//throwError("Qualcosa non va");

// Esercizio 3 (Unknow = ti obbliga a controllare il tipo prima di usarlo)
//let valore: unknown = "Ciao";
//console.log(valore.length);

// Esercizio 4 (Any= Disabilità i controlli di ogni tipo)
let altroValore: any = "Fuori di testa";
altroValore = 6;

// Esercizio 5
function esercizioCinque(valore: unknown): void {
  if (typeof valore === "string") {
    console.log("E' una stringa lunga:", valore.length);
  } else if (typeof valore === "number") {
    console.log("E' un numero", valore);
  } else {
    console.log("Valore non gestito", valore);
  }
}
esercizioCinque("Ciao");
esercizioCinque(5);

//Bonus (Funzione che restituisce una stringa se valore è uguale a stringa, sennò restituisce null)

function esercizioBonus(valore: any): string | null {
  if (typeof valore === "string") {
    return valore;
  } else {
    return null;
  }
}

console.log(esercizioBonus("Linda"));
console.log(esercizioBonus(24));
