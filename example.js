"use strict";

// Das ist ein Zeilenkommentar

/*
  Dieses Kommentar geht über mehrere Zeilen
*/

// So definiert man Variablen:
var x;

// So definiert man Variablen und weist ihnen einen Wert zu:
var zahl = 123;

// mit console kann man Variablen inspizieren

// Einfache Ausgabe:
console.log("einfach");

// Warnung erstellen:
console.warn("Achtung Achtung!");

// Fehler ausgeben:
console.error("Hier gab es einen Fehler!");

// StackTrace (d.h. welche Befehle führten zu diesem Aufruf)
console.trace("ein Trace");

// Es können auch alle anderen Variablen übergeben werden:

console.log("Ein Objekt:", {empty:"object"}, "und ein Array", ["erstens", "zweitens", "drittens"])

// Datentypen bei JavaScript:
// Den Datentype kann man in JavaScript mit 'typeof' herausfinden:

console.log("Ein Wahrheitswert (Boolean) (wahr / unwahr bzw. true / false) hat den Datentyp: '" + typeof true + "'...");

console.log("Eine Zahl (Number) (123 oder 1.23 oder -55) hat den Datentyp: '" + typeof 123 + "'...");

console.log("Eine Zeichenkette (String) (\"Ein Text\") hat den Datentyp: '" + typeof "ein Text" + "'...");

console.log("Eine Objekt (Object) ({leeres:\"Object\"}) hat den Datentyp: '" + typeof {leeres:"Object"} + "'...");

console.log("Eine Funktion (function) (function(argument){console.log(argument);}) hat den Datentyp: '" + typeof function(argument){console.log(argument);} + "'...");


// Arbeiten mit Zahlen

var a = 5;
var b = 3;

console.log("Addieren", a+b);
console.log("Subtrahieren", a-b);
console.log("Multiplizieren", a*b);
console.log("Dividieren", a/b);

// Arbeiten mit Zeichenketten / Strings

var anrede = "Sehr geehrter";
var herr = "Herritsch";
var frau = "Frauke";

console.log("Mehrere Zeichenketten verbinden: ", anrede + " " + herr);

console.log("Mehrere Zeichenketten kürzen: ", anrede.substr(0, anrede.length-1));

console.log("Achtung bei: ", herr + a + b, herr + (a + b));

// Arbeiten mit Objekten

var associative= {
  unterpunkt: "irgendwas",
  nichtAssociative: ["erstens", "zweitens"],
  "was ganz anderes.":"geht auch..."
}


console.log("Kurzschreibweise", associative.unterpunkt);
console.log("Langschreibweise", associative["unterpunkt"]);
console.log("Langschreibweise", associative["was ganz anderes."]);


// Etwas arbeiten mit Objekten und Funktionen


var kontakte = {
  steve: {
    geburtstag: "11.11.",
    name: "Stephan Herritsch",
    lieblingsFarben: ["rot", "grün"]
  },
  markus:{
    geburtstag: "07.11.",
    name: "Markus Strauß",
    lieblingsFarben: ["blau", "grün"]
  },
  arne:{
    geburtstag: "25.10.",
    name: "Arne Schubert",
    lieblingsFarben: []
  }
};

kontakte.steve.geburtstag = "10.10.";

var getKontaktById = function(id){
  return kontakte[id];
};
var listKontaktIds = function(){
  var rg = [];
  var hash;
  for (hash in kontakte) {
    rg.push(hash);
  }
  return rg;
};

var getKontaktByFullName = function(name){
  var hash;
  for(hash in kontakte) {
    if(kontakte[hash].name === name) return kontakte[hash];
  }
};
var getKontakteByLieblingsfarbe = function(farbe){
  var hash;
  var rg = [];
  for(hash in kontakte) {
    if(kontakte[hash].lieblingsFarben.indexOf(farbe) >= 0) rg.push(kontakte[hash]);
  }
  return rg;
};

getKontaktByFullName("Markus Srauß");

getKontakt("steve");
t