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

/* parei aqui:
fazer uma funcao maiorfaixapremiada - ok
   ok - reduce em faixas para retornar a maior premiada - reduce nao era a malhor solucao. a melhor era fazer a contagem regressiva.
se a faixa atual for a maior premiada:
      funcao que acrescenta volanteAposta a faixas[faixaDeAcerto]
se a quantidadeOcorrencias ==1 ( primeira ocorrencia ), apagar volanteAposta da faixa anterior (ZERO nao tem faixa anterior). 
      so testo maior premiada, se houver ocorrencia ==1.
      só rodarei a funcao de pesquisa 6 vezes.
      funcao para testar 1a ocorrencia ? pode ser.
      funcao para apagar volante anteiror ? sim.
      funcao para acumular volante ? sim.
 */

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

   function maiorfaixapremiada (faixa){
      let i;
      for( i=faixa.length -1; i>=0; i--) {
         if (faixa[i].quantidadeOcorrencias > 0) break;
      };
      return i;
   };

