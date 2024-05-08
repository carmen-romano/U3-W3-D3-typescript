////Typescript è un linguaggio di programmazione basato su javascript, che a differenza di quest'ultimo è basato sui tipi di dato, 
///nasce come supporto agli sviluppatori, poiché grazie alla sua tipizzazione, permette a quest'ultimi di individuare
/// e prevenire molti errori.
//Il compilatore è essenziale poiché il browser non riesce a leggere direttamente in typescript,
// di conseguenza grazie ad esso, riusciamo a convertire il codice che scriviamo in codice javascript(riconosciuto dal browser)
///per usarlo dobbiamo innanzitutto installare  globalmente typscript (npm i -g typescript), successivamente nel nostro progetto,
/// creeremo due file (es. index.js e index.ts), inseriamo il file index.js nel nostro html (poichè è lui che alla fine verrà reindirizzato 
///sul broswer) e successivamento diamo il comando al terminale per iniziale la compilazione (tsc nomeFile.ts -w).Alcuni esempio di utilizzo di ts:

///Inizializzare una variabile che conterrà una stringa:
let string:string
///string=2 in questo caso visual studio ci avvertirà sin da subito che "string" non pè assegnabile ad un numero poiché è stato definito che il suo tipo sarà string
string="typescript string" //questa è la sua assegnazione corretta
let number:number //assegnazione di numero
let arr:[] //assegnazione array
let arrNum: number[] //assegnazione di array che può contenere al suo interno solo numeri
let obj:{} //assegnazione object


/// TUPLA invece si usa per determinare a priori il numero ed il tipo di elementi che una variabile può contenere al suo interno, ad esempio:
let tuplaExample: [number, number] = [1,2] //in questo caso stiamo definendo che il nostro array può contenere un max di due valori, ed entrambi devo essere di tipo number

///TYPE INFERENCE è un assegnazione di dato che typescript determina automaticamenteda n base al valore che una variabile detiene, es:

let inferenceNum = 5 ///in questo caso, typescript riesce a stabilire da solo il type di num, quindi specificare escplicitamento il tipo(es. let inferenceNum:number) è ridondante e non necessario

///ANY è un tipo di dato che ci permette di essere il più generici possibile, al suo interno possiamo inserire qualsiasi valore , ad es
let any:any  = 4
any="any"
any = [1,2,3,4] 
///è consigliabile utilizzarlo con cautela poiché ci fa uscire fuori dalle logiche di typescript e di conseguenza perdiamo i vantaggi della tipizzazione che questo linguaggio ci offre


// UNION ci permette di fare un unione di più tipi di dato, es
let union: string | number = 3 //in questo caso stiamo dicendo che la variabile "union" può contenere un dato di tipo stringa o di tipo number

//I CUSTOM TYPE, sono molto utili da utilizzare, sopratutto negli oggetti poiché ci consente di definire una sola volta il codice e successivamente 
//poterlo riutilizzare all'interno del codice, es
type Libro = {
    titolo: string,
    autore: string,
    id: number,
}
let libro: Libro
libro = {
    titolo: "example1",
    autore: "example1",
    id: 636329382
}
let libro1:Libro
libro1 = {
    titolo: "example2",
    autore: "example2",
    id: 38264289
}
///Gli ENUM sono particolarmente utili poiché rendono il codice più facile da capire e meno soggetto a errori, possono essere usati per rappresentareuna serie di opzioni che appartengono ad un categoria, il tipo di account (standard,premium), ruolo (admin, user)ecc. Es
enum TipoAccount {
    Standard,
    Premium,
    Admin,
  }
const account ={
    nome:"Mario",
    cognome:"rossi",
    TipoAccount: TipoAccount.Premium
}  
///Di base sono assegnati a dei numeri, ad esempio (standard è 0), di conseguenza possiamo assegnarli la nostra "etichetta" personalizzata
//enum TipoAccount {
//   Standard ="standard",
//  Premium="premium",
 //Admin="admin"


 ///Le interfacce sono un costrutto simile alle classi, ma vengono utilizzate principalmente per definire la struttura dei dati e successivamente 
 //essere implentate all interno delle classi in modo che possano avere funzionalità aggiuntive specificate dall'interfaccia. 
 
 interface Utente{
    id: number;
    email: string;
    nome:string //all'interno delle interfacce non possiamo inizializzare proprietà
 }
 class VisualizzatoreUtenti {
    visualizzaDettagliUtente(utente: Utente): void {
      console.log(`ID: ${utente.id}, Nome: ${utente.nome}, Email: ${utente.email}`);
    }
  }
  
  const visualizzatore = new VisualizzatoreUtenti();
  const utente: Utente = { id: 1345433, nome: "Luca", email: "luca@email.com" };
  visualizzatore.visualizzaDettagliUtente(utente);
  
////Con le interfacce, a differenza della classi, possiamo estendere ed implementare qualsiasi cosa, inclusi altri tipi di dati e interfacce stesse. 
//Questo significa che possiamo creare nuove interfacce basate su altre interfacce esistenti o combinare più interfacce, es

///ESEMPIO DI UTLIZZO
interface Veicolo {
    stop(): void;
  }
  
  interface Guidatore {
    guida(): void;
  }
  
  /// La classe Macchina implementa entrambe le interfacce, fornendo le relative implementazioni per i metodi stop e guida,
  /// oltre a un metodo aggiuntivo accendiLuci(). 
  class Macchina implements Veicolo, Guidatore {
    stop() {
      console.log("Stop");
    }
  
    accendiLuci() {
      console.log("Luci accese.");
    }
  
    guida() {
      console.log("Guida la macchina.");
    }
  }

