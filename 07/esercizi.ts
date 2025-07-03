//Enum

// Esercizio 1
enum Colore {
  Verde,
  Rosso,
  Blu,
}
console.log(Colore);

// Esercizio 2

let mioColore: Colore = Colore.Verde;
console.log(mioColore);

// Esercizio 3
enum Settimana {
  Lunedì = "Lunedì",
  Martedì = "Martedì",
  Mercoledì = "Mercoledì",
  Giovedì = "Giovedì",
  Venerdì = "Venerdì",
  Sabato = "Sabato",
  Domenica = "Domenica",
}
console.log(Settimana);

// Esercizio 4
enum Stato {
  Attivo,
  Inattivo,
  Sospeso,
}
function messaggio(stato: Stato): void {
  switch (stato) {
    case Stato.Attivo:
      console.log("Lo stato è attivo");
      break;
    case Stato.Inattivo:
      console.log("Lo stato è inattivo");
      break;
    case Stato.Sospeso:
      console.log("Lo stato è in sospeso");
      break;
  }
}
messaggio(Stato.Attivo);
messaggio(Stato.Inattivo);
messaggio(Stato.Sospeso);

// Esercizio 5
enum Livello {
  Admin = 0,
  User = 1,
  Guest = 2,
}
let LivelloAccesso: Livello = Livello.Admin;
console.log(LivelloAccesso);
console.log(Livello[LivelloAccesso]);

// Bonus
function descrizioneColori(colore: Colore): void {
  switch (colore) {
    case Colore.Blu:
      console.log("Il blu è il colore del mare");
      break;
    case Colore.Verde:
      console.log("Il verde è il colore della natura");
      break;
    case Colore.Rosso:
      console.log("Il rosso è il colore dell'amore");
      break;
  }
}
descrizioneColori(Colore.Blu);
descrizioneColori(Colore.Verde);
descrizioneColori(Colore.Rosso);
