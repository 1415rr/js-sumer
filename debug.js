
/*
objetivo: 
retorno: none
observacoes: 
Data: 23/MAI/2021
Autor: 1415rr
*/

{
let lDebug = true;

   function debugConsoleLog (...param) {
   if (lDebug) {
      console.log(...param);
   }
};
}
debugConsoleLog ("debug.js");

/* let globalObj = {};
console.log ("globalObj antes", globalObj);

function fSetaLocal(){
   let localObj = globalObj;
   localObj.nome = "Rafael";
   console.log ("localObj ", localObj);
};

fSetaLocal(); */

let globalObj = {}
console.log('globalObj ant', globalObj)
let localObj = globalObj
localObj.nome ="Rafael"
console.log("globalObj", globalObj)
console.log("localObj", localObj)