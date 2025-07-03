# 📘 Enum

## 🔍 Introduzione
Gli enum sono tipi speciali in TypeScript che ti permettono di definire un insieme di valori costanti e nominati, utili per rappresentare categorie fisse come stati, ruoli o opzioni.

```ts
enum Stato { Attivo, Inattivo, Sospeso }
```

👉 Gli enum migliorano la leggibilità e prevengono errori rispetto all’uso di semplici stringhe o numeri sparsi nel codice.

## 🎯 Obiettivi degli esercizi
Questi esercizi ti aiuteranno a:
- Creare e usare enum di tipo numerico e stringa.
- Usare gli enum per assegnare stati a variabili.
- Usare enum in funzioni con controllo sui valori.
- Comprendere i vantaggi in termini di leggibilità, manutenzione e sicurezza dei tipi.

## 🚀 Conclusioni
👉 Usare gli enum ti permette di evitare valori “magici” nel codice ("admin", "guest", "active"...), rendendo tutto più chiaro, tipizzato e manutenibile.
Inoltre, grazie al supporto TypeScript, otterrai autocomplete e controllo sui valori ammessi in modo automatico.

## Esercizi

💡 Questo è un enum numerico. I valori partono da 0 per default (es: `Rosso = 0`, `Verde = 1`, ...). 

**ESERCIZIO 1**
Definisci un enum `Colore` con valori `Rosso`, `Verde`, `Blu`.

---
🔍 È importante tipizzare esplicitamente la variabile per abituarti alla sintassi `let colore: Colore = ...`

**ESERCIZIO 2**
Crea una variabile di tipo `Colore` e assegnale `Colore.Verde`.

---
💡 Ogni membro deve avere un valore stringa esplicito (`Lunedi = "Lunedì"`). Questo è utile per stampe leggibili o usi in interfaccia utente.

**ESERCIZIO 3**
Definisci un enum con valori stringa per i giorni della settimana.

---
📌 Usa un `switch` o `if` per discriminare i valori dell’enum. Può essere lo stesso `Stato` visto nella sezione introduttiva.

**ESERCIZIO 4**
Scrivi una funzione che riceve un enum `Stato` e stampa un messaggio differente per ogni valore.

---
💡 Puoi usare l’enum per limitare le opzioni valide per la variabile `livelloAccesso`, invece di usare un semplice numero o stringa.

**ESERCIZIO 5**
Crea un enum con valori numerici per i livelli di accesso (Admin, User, Guest) e usa un enum per rappresentare il livello di accesso di un utente.

---

🔍 Puoi usare una funzione generica che accetta qualsiasi tipo enum, oppure concentrarti su un enum specifico (es. `Stato` o `Colore`).

### 🧩 Extra (facoltativo)
Scrivi una funzione che accetta un enum e ritorna una stringa che descrive il valore.
**Sfida bonus**: restituisci una frase descrittiva e leggibile all’utente.