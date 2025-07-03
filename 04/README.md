# 📘 Funzioni Tipizzate

## 🔍 Introduzione
In JavaScript puoi scrivere funzioni liberamente, senza specificare che tipo di dati aspettano o restituiscono. Questo è comodo, ma pericoloso: potresti involontariamente passare valori sbagliati o ottenere comportamenti inattesi.

TypeScript risolve questo problema permettendoti (e incoraggiandoti!) a tipizzare le funzioni.

**Questo significa specificare:**
✅ Il tipo dei parametri che la funzione accetta
✅ Il tipo del valore di ritorno della funzione

👉 Questo rende il codice più chiaro, auto-documentato, e più sicuro da usare.

## 🧠 Perché tipizzare le funzioni?
**Vantaggi:**
- Previeni errori di tipo durante lo sviluppo
- Migliori l'autocompletamento nei tuoi editor (es. VS Code)
- Rendi le tue funzioni più leggibili per te e per gli altri
- Rendi il refactoring e il debug più semplici

## 🛠️ Sintassi base
```ts
function nomeFunzione(par1: Tipo1, par2: Tipo2): TipoRitorno {
  // corpo della funzione
  return valore;
}
```

```ts
function somma(a: number, b: number): number {
  return a + b;
}
```

## 🎯 Obiettivi degli esercizi
Con questi esercizi imparerai a:
- Tipizzare i parametri delle funzioni
- Tipizzare correttamente i valori restituiti
- Usare parametri opzionali (?) e valori predefiniti
- Gestire i tipi booleani, stringhe, numeri

## 🚀 Conclusioni
✍️ In TypeScript, tipizzare le funzioni non è solo "buona pratica", è fondamentale.
Aiuta te e i tuoi colleghi a usare le funzioni nel modo giusto, previene errori, e rende tutto il progetto più robusto.

👉 In progetti reali, tutte le funzioni dovrebbero avere parametri e valori di ritorno ben tipizzati.

## Esercizi
🔎  Qui pratichi la tipizzazione di una stringa in input e una stringa in output.

**ESERCIZIO 1**
Scrivi una funzione `saluta(nome: string): string` che restituisce "Ciao, nome!".

---

📌 Due numeri come input, un numero come risultato. Ottimo per testare operazioni aritmetiche con tipi.

**ESERCIZIO 2**
Scrivi `moltiplica(a: number, b: number): number`.

---

🔢 Usi l’operatore modulo `%` per verificare se un numero è pari. La funzione restituisce `true` o `false`, quindi il tipo di ritorno è boolean.

**ESERCIZIO 3**
Scrivi una funzione `isPari(n: number): boolean`.

---
📌 Qui introduciamo:
- Parametro opzionale (?)
- Uso del ternario per controllare se ruolo esiste o no.

**ESERCIZIO 4**
Scrivi una funzione `benvenuto(nome: string, ruolo?: string): string`. Se ruolo è fornito, la stringa sarà "Benvenuto Mario, il tuo ruolo è Admin", altrimenti "Benvenuto Mario".

---

💡 Questo esercizio mostra:
- Come assegnare valori predefiniti ai parametri
- Come effettuare un semplice calcolo matematico con la tipizzazione

**ESERCIZIO 5**
Scrivi una funzione `calcolaSconto(prezzo: number, sconto: number = 0.1): number` che restituisce il prezzo scontato.

---

### 🧩 Extra (Facoltativo)
> 💡 Le funzioni generiche permettono di scrivere codice riutilizzabile che funziona con diversi tipi senza perdere il controllo di tipo.

Prova a scrivere una funzione generica `log<T>(valore: T): void` che stampa un valore di qualsiasi tipo, e crea 2-3 esempi usando stringhe, numeri e boolean.