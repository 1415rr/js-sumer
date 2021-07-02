debugConsoleLog ('loteriaExibe.js');

function exibeResultados (volantePremiado, volanteAposta, marcacaoDosAcertosPrimeiraAposta, faixasDePremiacao){
   debugConsoleLog ( 'exibeResultados - dentro',
   'marcacaoDosAcertosPrimeiraAposta',marcacaoDosAcertosPrimeiraAposta,
   );


   exibeCabecalho(volantePremiado);
   exibeSumario  (volantePremiado, marcacaoDosAcertosPrimeiraAposta, faixasDePremiacao);

      
      
   };

   function exibeCabecalho (volantePremiado){
      console.log (`-----------------------------------------------------------`);
      console.log (`Sorteados ==> ${volantePremiado.join(' - ')}`);
      console.log (`-----------------------------------------------------------`);
      console.log (``);
   };

   function exibeSumario (volantePremiado, marcacaoDosAcertosPrimeiraAposta, faixasDePremiacao){
      let quantidadeApostas=0;
      console.log (`acertos       quantidade      primeiro volante `);
      debugConsoleLog ('exibeSumario', 
      'volantePremiado', volantePremiado,
      'faixasDePremiacao[1]', faixasDePremiacao[1],
      'marcacaoDosAcertosPrimeiraAposta', marcacaoDosAcertosPrimeiraAposta,
      'marcacaoDosAcertosPrimeiraAposta[1]', marcacaoDosAcertosPrimeiraAposta[1],
      )
      ;
      faixasDePremiacao.forEach(
         function (e, i, arr) {
            let textoSaida = "";
            textoSaida += `${e.nomeDisplay}                 `;
            textoSaida += `${fSeparaMilhar(e.quantidadeOcorrencias)}           `;
            textoSaida += `#${e.idVolantePrimeiraAposta}: `;
            textoSaida += `${formataExibicaoDoVolanteConferido (e.volantePrimeiraAposta, marcacaoDosAcertosPrimeiraAposta[i])} `;

            quantidadeApostas+=e.quantidadeOcorrencias;
            console.log (textoSaida);
   
            }//function
         );//forEach
      
         console.log (`-----------------------------------------------------------`);
         console.log (`Total de apostas    : ${fSeparaMilhar(quantidadeApostas)}`);
         console.log (`-----------------------------------------------------------`);

         return ;

         function formataExibicaoDoVolanteConferido (volante, acertou) {
            let saidaFormatada = "";
            volante.forEach (
               function (e, i, arr){
                  if (!!acertou[i])  {
                     saidaFormatada += ` -${e}- `;
                  } else {
                     saidaFormatada += `  ${e}  `;
                  }; //if 
               } //function
            ); //forEach
            return saidaFormatada;
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

