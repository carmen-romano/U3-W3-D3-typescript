////Typescript è un linguaggio di programmazione basato su javascript, che a differenza di quest'ultimo è basato sui tipi di dato, 
///nasce come supporto agli sviluppatori, poiché grazie alla sua tipizzazione, permette a quest'ultimi di individuare
/// e prevenire molti errori.
//Il compilatore è essenziale poiché il browser non riesce a leggere direttamente in typescript,
// di conseguenza grazie ad esso, riusciamo a convertire il codice che scriviamo in codice javascript(riconosciuto dal browser)
///per usarlo dobbiamo innanzitutto installare  globalmente typscript (npm i -g typescript), successivamente nel nostro progetto,
/// creeremo due file (es. index.js e index.ts), inseriamo il file index.js nel nostro html (poichè è lui che alla fine verrà reindirizzato 
///sul broswer) e successivamento diamo il comando al terminale per iniziale la compilazione (tsc nomeFile.ts -w).Alcuni esempio di utilizzo di ts:
///Inizializzare una variabile che conterrà una stringa:
var string;
///string=2 in questo caso visual studio ci avvertirà sin da subito che "string" non pè assegnabile ad un numero poiché è stato definito che il suo tipo sarà string
string = "typescript string"; //questa è la sua assegnazione corretta
var number; //assegnazione di numero
var arr; //assegnazione array
var arrNum; //assegnazione di array che può contenere al suo interno solo numeri
var obj; //assegnazione object
/// TUPLA invece si usa per determinare a priori il numero ed il tipo di elementi che una variabile può contenere al suo interno, ad esempio:
var tuplaExample = [1, 2]; //in questo caso stiamo definendo che il nostro array può contenere un max di due valori, ed entrambi devo essere di tipo number
///TYPE INFERENCE è un assegnazione di dato che typescript determina automaticamenteda n base al valore che una variabile detiene, es:
var inferenceNum = 5; ///in questo caso, typescript riesce a stabilire da solo il type di num, quindi specificare escplicitamento il tipo(es. let inferenceNum:number) è ridondante e non necessario
///ANY è un tipo di dato che ci permette di essere il più generici possibile, al suo interno possiamo inserire qualsiasi valore , ad es
var any = 4;
any = "any";
any = [1, 2, 3, 4];
///è consigliabile utilizzarlo con cautela poiché ci fa uscire fuori dalle logiche di typescript e di conseguenza perdiamo i vantaggi della tipizzazione che questo linguaggio ci offre
// UNION ci permette di fare un unione di più tipi di dato, es
var union = 3; //in questo caso stiamo dicendo che la variabile "union" può contenere un dato di tipo stringa o di tipo number
var libro;
libro = {
    titolo: "example1",
    autore: "example1",
    id: 636329382
};
var libro1;
libro1 = {
    titolo: "example2",
    autore: "example2",
    id: 38264289
};
///Gli ENUM sono particolarmente utili poiché rendono il codice più facile da capire e meno soggetto a errori, possono essere usati per rappresentareuna serie di opzioni che appartengono ad un categoria, il tipo di account (standard,premium), ruolo (admin, user)ecc. Es
var TipoAccount;
(function (TipoAccount) {
    TipoAccount[TipoAccount["Standard"] = 0] = "Standard";
    TipoAccount[TipoAccount["Premium"] = 1] = "Premium";
    TipoAccount[TipoAccount["Admin"] = 2] = "Admin";
})(TipoAccount || (TipoAccount = {}));
var account = {
    nome: "Mario",
    cognome: "rossi",
    TipoAccount: TipoAccount.Premium
};
var VisualizzatoreUtenti = /** @class */ (function () {
    function VisualizzatoreUtenti() {
    }
    VisualizzatoreUtenti.prototype.visualizzaDettagliUtente = function (utente) {
        console.log("ID: ".concat(utente.id, ", Nome: ").concat(utente.nome, ", Email: ").concat(utente.email));
    };
    return VisualizzatoreUtenti;
}());
var visualizzatore = new VisualizzatoreUtenti();
var utente = { id: 1345433, nome: "Luca", email: "luca@email.com" };
visualizzatore.visualizzaDettagliUtente(utente);
/// La classe Macchina implementa entrambe le interfacce, fornendo le relative implementazioni per i metodi stop e guida,
/// oltre a un metodo aggiuntivo accendiLuci(). 
var Macchina = /** @class */ (function () {
    function Macchina() {
    }
    Macchina.prototype.stop = function () {
        console.log("Stop");
    };
    Macchina.prototype.accendiLuci = function () {
        console.log("Luci accese.");
    };
    Macchina.prototype.guida = function () {
        console.log("Guida la macchina.");
    };
    return Macchina;
}());
