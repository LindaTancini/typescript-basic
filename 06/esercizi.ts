// Oggetti e Interfacce

// Esercizio 1

interface Libro {
  nome: string;
  autore: string;
  anno: number;
}

const mioLibro: Libro = {
  nome: "Se i gatti scomparissero dal mondo",
  autore: "Genki Kawamura",
  anno: 2012,
};
console.log(mioLibro);

// Esercizio 2

function descrizioneLibro(libro: Libro): void {
  console.log(
    `${libro.nome} , con autore ${libro.autore} è stato pubblicato nel ${libro.anno}`
  );
}

// Esercizio 3

interface PrezzoLibro extends Libro {
  prezzo: number;
}

// Esercizio 4

type Studente = {
  nome: string;
  matricola: number;
  corso: string[];
};

const studente1: Studente = {
  nome: "Gabriella",
  matricola: 1,
  corso: ["Matematica", "Fisica", "Chimica"],
};
console.log(studente1);

// Esercizio 5

function isDisponibile(libro: Libro & { disponibile: boolean }): string {
  return libro.disponibile ? "Disponibile" : "Non disponibile";
}

// Bonus (fatto ricerca)

function descriviPersona(p: {
  nome: string;
  età?: number;
  attivo: boolean;
}): void {
  const stato = p.attivo ? "attivo" : "non attivo";

  if (p.età !== undefined) {
    console.log(`${p.nome} ha ${p.età} anni ed è ${stato}.`);
  } else {
    console.log(`${p.nome} ha un'età sconosciuta ed è ${stato}.`);
  }
}
