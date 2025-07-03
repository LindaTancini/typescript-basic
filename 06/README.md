# 📘 Oggetti E Interfacce

## 🔍 Introduzione
In JavaScript possiamo creare oggetti liberamente, ma senza alcun vincolo sulla loro struttura. TypeScript introduce un controllo statico che ci permette di definire con precisione la forma degli oggetti, specificando quali proprietà devono esistere, il loro tipo, se sono obbligatorie o opzionali, e altro ancora.

👉 Per farlo, usiamo i costrutti interface e type, che ci permettono di modellare i dati in modo chiaro, riutilizzabile e mantenibile.

## 🥊 Interface vs Type
Entrambi sono molto simili e spesso intercambiabili:
| `interface`                    | `type`                                   |
| ------------------------------ | ---------------------------------------- |
| Pensata per descrivere oggetti | Può descrivere oggetti, unioni, funzioni |
| Supporta `extends`             | Supporta `extends` e unioni (`&`)        |
| Può essere **ridefinita**      | Una sola definizione per nome            |



```ts
interface Persona {
  nome: string;
  età: number;
  attivo?: boolean; // opzionale
}

type Studente = {
  nome: string;
  corsi: string[];
};
```

## 🎯 Obiettivi degli esercizi
In questa sezione imparerai a:
- Definire la struttura di oggetti con interface e type
- Utilizzare proprietà opzionali
- Estendere un’interfaccia per crearne una più specifica
- Usare oggetti come parametri di funzione
- Gestire tipi combinati con l’operatore & (intersection)

## 🚀 Conclusioni
Le interfacce (o i tipi) in TypeScript sono fondamentali per descrivere il tuo dominio di dati.
Definire tipi chiari per gli oggetti rende il codice prevedibile, scalabile, e più facile da manutenere, soprattutto in team o su progetti grandi.


## Esercizi
🔎 Qui impari a definire una interfaccia semplice con proprietà obbligatorie.

**ESERCIZIO 1**
Definisci un'interfaccia `Libro` con `titolo`, `autore`, `anno`.

---
📌 Le funzioni possono ricevere oggetti come parametri. Usare tipi espliciti aiuta a evitare errori.

**ESERCIZIO 2**
Crea una funzione che accetta un `Libro` e stampa una frase.

---
💡 Puoi estendere un’interfaccia per crearne una nuova più completa senza riscrivere tutto.

**ESERCIZIO 3**
Estendi `Libro` con `PrezzoLibro` che ha anche `prezzo`.

---
🔎 I tipi possono contenere anche array e altre strutture. I tipi personalizzati aiutano a mantenere il codice chiaro.

**ESERCIZIO 4**
Crea un tipo `Studente` con proprietà `nome`, `matricola`, `corso: string[]`. Crea una variabile `studente1` con dei dati di esempio.

--- 
📌 L’intersection type (`&`) unisce più tipi, obbligando un oggetto a rispettare entrambi.

**ESERCIZIO 5**
Scrivi una funzione `isDisponibile(libro: Libro & { disponibile: boolean }): string` che stampa "Disponibile" o "Non disponibile" a seconda del valore.

---

### 🧩 Extra (facoltativo)
> 💡 Quando una proprietà è opzionale, il codice deve gestirne l’eventuale assenza.

Crea una funzione `descriviPersona(p: { nome: string; età?: number; attivo: boolean })`
La funzione deve:
- Stampare sempre il nome
- Stampare l’età solo se presente
- Stampare "Attivo" o "Non attivo" a seconda del valore