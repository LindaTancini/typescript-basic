# 📘 Tipi Primitivi

## 🔍 Introduzione
In JavaScript, siamo abituati a usare variabili senza specificare il tipo di dato. TypeScript invece aggiunge un sistema di tipi statici: questo significa che possiamo (e spesso dobbiamo) dichiarare esplicitamente il tipo di ogni variabile, parametro o valore di ritorno di una funzione.

👉 Questo rende il codice più chiaro, più sicuro, e più facile da mantenere, perché eventuali errori (come passare una stringa dove serve un numero) vengono segnalati prima dell'esecuzione, durante la fase di sviluppo.

## I tipi primitivi in TypeScript
I tipi primitivi sono i mattoni di base per rappresentare dati in TypeScript, proprio come in JavaScript. Vediamoli:
- `string`, `number`, `boolean`, `null`, `undefined`, `bigint`, `symbol`, `any` (da evitare)

## 🎯 Obiettivi degli esercizi
Questi esercizi ti aiuteranno a:
- Imparare a dichiarare tipi in modo esplicito.
- apire gli errori comuni di tipizzazione e correggerli.
- Familiarizzare con tipi meno usati come null, undefined, bigint, symbol.
- Usare il costrutto typeof per verificare il tipo di un dato a runtime.

## 🚀 Conclusioni
👉 TypeScript ti costringe a pensare prima a che tipo di dato stai gestendo.
I tipi primitivi sono la base per costruire tipi più complessi (oggetti, array, tuple, interfacce)
Scrivere tipi chiari rende il codice più leggibile, e i tool (come VS Code) ti aiutano con suggerimenti e autocomplete

## Esercizi
🔎 Qui stai imparando a usare la sintassi **nome: tipo** per associare un tipo specifico a ciascuna variabile.

**ESERCIZIO 1**
Dichiara correttamente 5 variabili con tipo esplicito: `nome`, `età`, `attivo`, `punteggio`, `valoreIndefinito`.

---

📌 In TypeScript, una stringa non è un numero e viceversa. Anche "sì" è una stringa, non un boolean.

**ESERCIZIO 2**
Correggi gli errori:
```ts
let nome: string = 123;
let finito: boolean = "sì";
```

---

**💡 Notare:**
- Tipi dei parametri
- Tipo di ritorno della funzione
- Uso del ternario per la condizione

**ESERCIZIO 3**
Crea una funzione `statoCorso(nomeCorso: string, durata: number, completato: boolean): string` che restituisce una frase tipo:
  > "Il corso TypeScript dura 30 ore. Stato: completato"

---

📌 **bigint** è utile per numeri più grandi del limite dei number in JavaScript.
📌 **symbol** è un tipo unico, anche se due simboli hanno lo stesso nome, non sono mai uguali.

**ESERCIZIO 4**
Usa i tipi `null`, `undefined`, `bigint`, `symbol` in 4 variabili diverse e stampale.

---

⚠️ **any** annulla il controllo di tipo: lo usiamo solo qui per poter testare qualsiasi valore. In codice reale, lo si evita il più possibile.

**ESERCIZIO 5**
Crea una funzione `descriviVariabile(valore: any): string` che ritorna il tipo del valore ricevuto (usa `typeof`).

---

### 🧩 Extra (facoltativo)
> 👉  L’uso di `unknown` è più sicuro di `any` perché richiede un controllo esplicito del tipo prima di usarlo.
> Il costrutto `switch(typeof value)` aiuta a gestire in modo chiaro e tipizzato i vari casi.

Prova a scrivere una funzione che accetta un parametro generico **value: unknown** e usa un `switch` su `typeof` per restituire una descrizione più dettagliata del tipo.