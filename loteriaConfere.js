debugConsoleLog ('loteriaConfere.js');
function inicializaFaixas(limite=10, quantidadeDezenasVolanteApostas=6){
   let descricaoFaixas=['ZERO', 'Uno', 'Duque', 'Terno', 'Quadra', 'Quina', 'Sena', 'Sétoma', 'Ótona', 'Nóvona', 'Décona'];
   let faixas =[];
   descricaoFaixas.forEach(
      function (nome, i, arr) {
         if (i<=limite) {
            faixas[i]={};
            faixas[i].nomeDisplay = nome;
            faixas[i].quantidadeOcorrencias = 0;
            faixas[i].idVolantePrimeiraAposta = 0;
            faixas[i].volantePrimeiraAposta = [];
            faixas[i].marcacaoDosAcertos=[];

         };
      } // function
   )  //forEach

   return faixas;
  };  //inicializaFaixas


  function contabilizaAcertos (idVolanteAposta, volanteAposta, faixas, marcacaoDosAcertos){ 
      let faixaDeAcerto = marcacaoDosAcertos.length;

      if (faixas[faixaDeAcerto].quantidadeOcorrencias === 0) {
         faixas[faixaDeAcerto].idVolantePrimeiraAposta = idVolanteAposta;
         faixas[faixaDeAcerto].volantePrimeiraAposta = volanteAposta;
         faixas[faixaDeAcerto].marcacaoDosAcertos = marcacaoDosAcertos;
      };  //if
      faixas[faixaDeAcerto].quantidadeOcorrencias++;

      return faixas;
     }; //contabilizaAcertos

   function confereVolantes (volantePremiado, volanteAposta) {

      let marcacaoDosAcertos=[];
      let quantidadeAcertos = 0;

      volantePremiado.forEach (
         function (e, i, arr) {
            let indiceDaDezenaNaAposta;
            if (1+(indiceDaDezenaNaAposta=volanteAposta.indexOf(e))) {
               marcacaoDosAcertos.push(indiceDaDezenaNaAposta);
            }; //if
         } // function
      );  //forEach
      
      return marcacaoDosAcertos;
      
   } ;//confereVolantes