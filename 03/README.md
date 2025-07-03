# 📘 Array E Tuple

## 🔍 Introduzione
In JavaScript siamo abituati a usare array in modo molto flessibile, ma questo può portare a errori difficili da individuare, come mischiare tipi o dimenticare l’ordine dei valori in strutture specifiche.

Con TypeScript, possiamo tipizzare in modo preciso sia gli array (liste di elementi dello stesso tipo), sia le tuple (strutture ordinate con tipi specifici per ciascuna posizione).

## 🧠 Differenze chiave
🔹 *Array*
Contengono una serie di elementi dello stesso tipo.
Sintassi: `tipo[]` oppure `Array<tipo>`

```ts
let nomi: string[] = ["Anna", "Luca", "Marco"];
```

🔸 *Tuple*
Contengono un numero fisso di elementi, ciascuno con il proprio tipo in posizione precisa.
Utili quando la posizione ha un significato.

```ts
let persona: [string, number] = ["Mario", 30];
```

## 🎯 Obiettivi degli esercizi
Con questi esercizi imparerai a:
- Tipizzare correttamente gli array
- Usare le tuple per rappresentare strutture fisse
- Iterare su un array e manipolarne i valori
- Passare array a funzioni e restituire risultati
- Accedere e modificare singoli elementi di una tupla

## 🚀 Conclusioni
🔹 Gli array sono utili per rappresentare liste omogenee
🔸 Le tuple ti aiutano a modellare strutture fisse e ordinate.

👉 Entrambi, se tipizzati correttamente, rendono il codice più affidabile, chiaro e più semplice da mantenere.

📌 Se accedi spesso a una tupla per nome (es. utente[0] per nome), considera in alternativa un oggetto con proprietà.

## Esercizi
📌 Usa un ciclo for o forEach per iterare.

**ESERCIZIO 1**
Crea un array di nomi (`string[]`) e stampali uno ad uno.

---
⚠️ Attenzione all’ordine dei tipi.

**ESERCIZIO 2**
Definisci una tupla `[nome: string, età: number]` e stampala.

---
📌 Tipizza il parametro come array di numeri e il ritorno come number.

**ESERCIZIO 3**
Scrivi una funzione che accetta `number[]` e restituisce la media.

---
💡 Usa `map()` per trasformare i dati.

**ESERCIZIO 4**
Scrivi una funzione `nomiMaiuscoli(nomi: string[]): string[]` che restituisce un array con tutti i nomi in maiuscolo.

---
🔍 Accedi agli elementi tramite indice (`[0]`, `[1]`, `[2]`), assegna nuovi valori se necessario.

**ESERCIZIO 5**
Crea una tupla `[nome: string, età: number, attivo: boolean]`, modificala e stampa ogni elemento singolarmente.

---

### 🧩 Extra (Facoltativo)
> 🔸 Le tuple permettono di definire array con tipi e lunghezze fisse, utili per dati strutturati con posizioni ben definite.

Prova a scrivere una funzione che accetta una tupla `[nome: string, età: number]` e restituisce una stringa del tipo:
  > "Mario ha 30 anni"