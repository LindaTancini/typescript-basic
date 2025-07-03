// union e Literal Types

// Esercizio 1

function stampaID(id: string | number): void {
  console.log("l'id è:", id);
}
stampaID("Sono un ID");
stampaID(12345);

// Esercizio 2

type RuoloUtente = "admin" | "user";

// Esercizio 3

type Direzioni = "su" | "giu" | "dx" | "sx";
function tastiera(direzioni: Direzioni): void {
  console.log("Hai usato il tasto direzionale:", direzioni);
}
tastiera("dx");

// Esercizio 4

type Esito = "ok" | "errore" | "caricamento";
function mostraEsito(e: Esito): void {
  switch (e) {
    case "ok":
      console.log("E' andato tutto bene");
      break;
    case "errore":
      console.log("C'è un errore");
      break;
    case "caricamento":
      console.log("Attendi, caricamento in corso...");
      break;
  }
}
mostraEsito("ok");

// Esercizio  5

function stampaValore(val: number | boolean): void {
  if (typeof val === "number") {
    console.log(`Hai stampato il numero:`, `${val}`);
  } else if (typeof val === "boolean") {
    console.log(`Hai stampato il valore booleano:`, `${val}`);
  } else {
    console.log("Non hai stampato nulla");
  }
}
stampaValore(true);
stampaValore(9);

// Bonus

type Adozioni = "Adottato" | "Non Adottato" | "Sta arrivando al rifugio";
type Gatto = string | number;
function adozioni(gatto: Gatto, adozioni: Adozioni) {
  console.log(`Il gatto ${gatto} è ${adozioni}`);
}
adozioni("Felix", "Adottato");
