console.log ("debug.js");

{
let debug = false;

   function debugConsoleJs (...param) {
   if (debug) {
      console.log(...param);
   }
};
}