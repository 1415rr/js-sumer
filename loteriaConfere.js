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


   var rollMaioresAcertos = {
      quantidade : 0,
      volantes : [],
      marcacaoDosAcertos : [],
      idVolantes : []
   };
   
  function contabilizaAcertos (idVolanteAposta, volanteAposta, faixas, marcacaoDosAcertos){ 
      let faixaDeAcerto = marcacaoDosAcertos.length;   

      if (faixas[faixaDeAcerto].quantidadeOcorrencias === 0) {
         faixas[faixaDeAcerto].idVolantePrimeiraAposta = idVolanteAposta;
         faixas[faixaDeAcerto].volantePrimeiraAposta = volanteAposta;
         faixas[faixaDeAcerto].marcacaoDosAcertos = marcacaoDosAcertos;
      };  //if
      faixas[faixaDeAcerto].quantidadeOcorrencias++;

      //trataRollMaioresAcertos
         let resetRollMaioresAcertos = (quantidade)=> { rollMaioresAcertos = { quantidade, volantes:[] , marcacaoDosAcertos:[] , idVolantes:[]} };
         let getRollMaioresAcertos = () => (rollMaioresAcertos.quantidade);
         let addRollMaioresAcertos = (volantes, marcacaoDosAcertos, idVolantes) => { 
            rollMaioresAcertos.volantes.push(volantes);
            rollMaioresAcertos.marcacaoDosAcertos.push(marcacaoDosAcertos) ;
            rollMaioresAcertos.idVolantes.push(idVolantes) ;
         };

         if (getRollMaioresAcertos() < faixaDeAcerto) {
            resetRollMaioresAcertos(faixaDeAcerto);
         };
         if (getRollMaioresAcertos() === faixaDeAcerto) {
            addRollMaioresAcertos(volanteAposta, marcacaoDosAcertos, idVolanteAposta);
         };
      //fim - trataRollMaioresAcertos

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


   ///closure aqui - daqui para baixo estou tentando implementar

   

   function addPrognostico (listaPrognosticos, volante) {
      listaPrognosticos.push(volante);
      return listaPrognosticos;
   };

   function quantidadeAcertosMereceRegistro (quantidadeParaRegistro, quantidadeAcertos) {
      return (quantidadeAcertos>=quantidadeParaRegistro);
   };

   // function setMaiorQuantidadeAcertos(quantidadeAcertos){
   //    if ( quantidadeAcertosClosure < quantidadeAcertos ){
   //       quantidadeAcertosClosure = quantidadeAcertos;
   //    };
   //    let quantidadeAcertosClosure = quantidadeAcertos;
   //    let getMaiorQuantidadeAcertos => quantidadeAcertosClosure; 
   // };
         

 

