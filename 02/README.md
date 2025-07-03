# 📘 Tipi speciali (void, never, unknown, any)

## 🔍 Introduzione
TypeScript include tipi speciali con significati precisi:

`void`: funzione senza valore di ritorno
`never`: funzione che non termina normalmente
`unknown`: tipo sicuro generico da controllare
`any`: tipo senza controllo (da evitare)

## 🎯 Obiettivi degli esercizi
Comprendere il significato e uso di ogni tipo
Usare correttamente void e never nelle funzioni
Conoscere le differenze tra any e unknown

## 🚀 Conclusioni
Usare correttamente questi tipi speciali aiuta a scrivere codice robusto e con un controllo rigoroso.

## Esercizi

**ESERCIZIO 1**
Crea una funzione log(msg: string): void che stampa il messaggio.

---

**ESERCIZIO 2**
Crea una funzione throwError(msg: string): never che genera un errore.

---

**ESERCIZIO 3**
Dichiara una variabile di tipo unknown e prova a usarla senza controllo.

---

**ESERCIZIO 4**
Dichiara una variabile di tipo any e assegna diversi tipi senza errori.

---

**ESERCIZIO 5**
Scrivi una funzione che accetta un tipo unknown e restituisce un tipo specifico se è corretto.

---

### 🧩 Extra (facoltativo)
Scrivi una funzione che accetta un tipo any e restituisce un tipo specifico se è corretto.