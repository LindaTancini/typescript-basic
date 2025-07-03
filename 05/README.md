# 📘 Union E Literal Types

## 🔍 Introduzione
In TypeScript, spesso un valore può assumere più tipi diversi o può essere limitato a un insieme ristretto di valori specifici.
I Union types permettono di indicare che una variabile o un parametro può essere di più tipi (es. `string | number`).
I Literal types invece limitano il valore possibile a una serie definita di stringhe o numeri precisi, molto utile per vincolare input e migliorare l’autocompletamento e la sicurezza del codice.

## 🧠 Differenze chiave
🔹 Union Types
Permettono a una variabile di contenere valori di tipi diversi.

```ts
type ID = string | number;
```

🔸 Literal Types
Limitano una variabile a specifici valori letterali.

```ts
type Stato = "attivo" | "inattivo" | "sospeso";
```
Questi tipi combinati aiutano a scrivere funzioni più flessibili e sicure, controllando i valori ammessi a compile time.

## 🎯 Obiettivi degli esercizi
Con questi esercizi imparerai a:
- Definire tipi union per accettare più tipi
- Creare tipi letterali per limitare i valori ammessi
- Scrivere funzioni che sfruttano union e literal types
- Usare controlli tipo typeof per gestire union di tipi primitivi
- Applicare pattern con switch o if per gestire i valori letterali

## 🚀 Conclusioni
Union types aumentano la flessibilità accettando più tipi
Literal types migliorano sicurezza e chiarezza definendo valori ammessi
Usare insieme union e literal types è una potente strategia per definire API precise e robuste
Il controllo di tipo runtime (typeof) è spesso necessario per discriminare tipi uniti

👉 Questi strumenti rendono il tuo codice più tipizzato, prevenendo errori e migliorando l’esperienza di sviluppo.

## Esercizi

🔎 Funzione con parametro di tipo union stringa o numero.

**ESERCIZIO 1**
Crea una funzione `stampaID(id: string | number)`.

---
📌 Definisci un tipo literal per ruoli utente.

**ESERCIZIO 2**
Usa un tipo letterale per definire `RuoloUtente = "admin" | "user"`.

---
💡 Funzione che accetta solo valori specifici come direzioni.

**ESERCIZIO 3**
Scrivi una funzione che accetta solo direzioni: `"su" | "giu" | "dx" | "sx"`.

---
🔎 Gestione di casi diversi tramite tipo literal e switch.

**ESERCIZIO 4**
Definisci un tipo `Esito = "ok" | "errore" | "caricamento"` e una funzione `mostraEsito(e: Esito): void` che stampa un messaggio diverso per ciascun caso.

---
📌 Uso di typeof per discriminare tipi uniti.

**ESERCIZIO 5**
Crea una funzione `stampaValore(val: number | boolean)` che stampa se il valore è un numero o un booleano (usa `typeof`).

---

### 🧩 Extra (Facoltativo)
> 🔸 Combinare union e literal types permette di modellare situazioni reali con valori molto precisi.

Prova a scrivere una funzione che accetta un parametro di tipo union fra literal numerici e stringhe, e stampa un messaggio diverso a seconda del valore ricevuto.