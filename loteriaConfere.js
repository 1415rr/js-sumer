debugConsoleLog ('loteriaConfere.js');
function inicializaFaixas(limite=10){
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
            faixas[i].marcacaoDosAcertosPrimeiraAposta = [];
         };
      } // function
   )  //forEach

   return faixas;
  };  //inicializaFaixas


  function contabilizaAcertos (idVolanteAposta, volanteAposta, indicesDosAcertosDoVolante, faixas){ 
      let faixaDeAcerto = indicesDosAcertosDoVolante;

      if (faixas[faixaDeAcerto].quantidadeOcorrencias === 0) {
         faixas[faixaDeAcerto].idVolantePrimeiraAposta = idVolanteAposta;
         faixas[faixaDeAcerto].volantePrimeiraAposta = volanteAposta;

      };  //if
      faixas[faixaDeAcerto].quantidadeOcorrencias++;

      return faixas;
     }; //contabilizaAcertos

   function confereVolantes (volantePremiado, volanteAposta) {

      let marcacaoDosAcertos=[].fill(false, 0, volanteAposta.length);
      let quantidadeAcertos = 0;

      volantePremiado.forEach (
         function (e, i, arr) {
            let indiceDaDezenaNaAposta;
            if (1+(indiceDaDezenaNaAposta=volanteAposta.indexOf(e))) {
               marcacaoDosAcertos[indiceDaDezenaNaAposta]=true;
               quantidadeAcertos++;
            }; //if
         } // function
      );  //forEach
      
      marcacaoDosAcertosPrimeiraAposta=marcacaoDosAcertos;

      return {marcacaoDosAcertos, quantidadeAcertos};
      
   } ;//confereVolantes