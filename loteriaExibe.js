debugConsoleLog ('loteriaExibe.js');

function exibeResultados (volantePremiado, volanteAposta, faixasDePremiacao){

   exibeCabecalho(volantePremiado);
   exibeSumario  (volantePremiado, faixasDePremiacao);

      
      
   };

   function exibeCabecalho (volantePremiado){
      console.log (`-----------------------------------------------------------`);
      console.log (`Sorteados ==> ${volantePremiado.join(' - ')}`);
      console.log (`-----------------------------------------------------------`);
      console.log (``);
   };

   function exibeSumario (volantePremiado, faixasDePremiacao){
      let quantidadeApostas=0;
      console.log (`acertos       quantidade      primeiro volante `);

      faixasDePremiacao.forEach(
         function (e, i, arr) {
            let textoSaida = "";
            textoSaida += `${e.nomeDisplay}                 `;
            textoSaida += `${fSeparaMilhar(e.quantidadeOcorrencias)}           `;
            textoSaida += `#${e.idVolantePrimeiraAposta}: `;
            textoSaida += `${formataExibicaoDoVolanteConferido (e)} `;

            quantidadeApostas+=e.quantidadeOcorrencias;
            console.log (textoSaida);
   
            }//function
         );//forEach
      
         console.log (`-----------------------------------------------------------`);
         console.log (`Total de apostas    : ${fSeparaMilhar(quantidadeApostas)}`);
         console.log (`-----------------------------------------------------------`);

         return ;

         function formataExibicaoDoVolanteConferido (faixa) {
            let prognosticosFormatados = [];

            faixa.volantePrimeiraAposta.forEach (
               function (e, i, arr ){
                  prognosticosFormatados[e]= (faixa.marcacaoDosAcertos.indexOf(i) < 0  ?  `  ${e}  `: ` -${e}- `);
               }   //function
            );  //forEach

            return prognosticosFormatados.join('');
         };
   };


   function fSeparaMilhar (numero, sThousandSeparator = "."){
      let sNumero = '';
      let sSaida = '';
      let iContaCaracteres = 0;
   
         sNumero = `${numero}`;
   
         for (iContaCaracteres = sNumero.length; iContaCaracteres > 0; iContaCaracteres-- ) {
            sSaida = sNumero[iContaCaracteres-1] + sSaida;
   //         console.log ("sSaida - inicio", sSaida, "sNumero.length", sNumero.length, "iContaCaracteres",iContaCaracteres, "sSaida", sSaida);
            if ((iContaCaracteres-sNumero.length-1)%3===0&&iContaCaracteres!==1) {
   //            console.log ("sNumero.length", sNumero.length, "iContaCaracteres",iContaCaracteres, "sSaida", sSaida);
               sSaida = sThousandSeparator + sSaida;
            };
         };
   
      return sSaida;
   };

