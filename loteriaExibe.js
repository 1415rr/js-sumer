debugConsoleLog ('loteriaExibe.js');

function exibeResultados (volantePremiado, volanteAposta, faixasDePremiacao, quantidadeApostas, volantesRollMaioresAcertos){

   exibeCabecalho(volantePremiado);
   exibeSumario  (volantePremiado, faixasDePremiacao, quantidadeApostas, volantesRollMaioresAcertos);
      
   };

   function exibeCabecalho (volantePremiado){
      let volantePremiadoFormatado = volantePremiado.map( e => padRight(e, 2, '0') );
      imprimeSaida ('');
      imprimeSaida (`-----------------------------------------------------------`);
      imprimeSaida (`Sorteados ==> ${volantePremiadoFormatado.join(' - ')}`);
      imprimeSaida (`-----------------------------------------------------------`);
      imprimeSaida (``);
   };

  function exibeSumario (volantePremiado, faixasDePremiacao, quantidadeApostas, volantesRollMaioresAcertos){
      
      imprimeSaida (`${alinha("E", "acertos", 15)
                  }${alinha("E", "quantidade", 15)
                  }${alinha("E", "percentual", 15)
                  }${alinha("E", "primeiro volante", 20)
                  }${alinha("E", "prognósticos", 20)
               }`);

      let imprimeRollMaioresAcertos = (paramVolantes) => {
         let textoSaida;
         let volanteFormataSaida = {};

         paramVolantes.volantes.forEach (
            function (e, i, arr ){
//               arr.slice()
               volanteFormataSaida.volantes = e;
               volanteFormataSaida.marcacaoDosAcertos = paramVolantes.marcacaoDosAcertos[i];
               console.log ('volanteFormataSaida', volanteFormataSaida);
               textoSaida = `${alinha ('DIR', '#'+(i+1), 5)
                           }  ${alinha ("C", formataExibicaoDoVolanteConferido (volanteFormataSaida), 40)
                           } (#${ paramVolantes.idVolantes[i]}) `;
               imprimeSaida ( textoSaida );
            });
         imprimeSaida (`-----------------------------------------------------------`);
      };


      let converteFaixaVolante = (faixa) => {
         let objVolante={};
         objVolante.volantes = faixa.volantePrimeiraAposta;
         objVolante.marcacaoDosAcertos = faixa.marcacaoDosAcertos;
         return objVolante;
      };

      faixasDePremiacao.forEach(
         function (e, i, arr) {
            let textoSaida = "";
            textoSaida += `${alinha ("E",e.nomeDisplay, 10)} `;
            textoSaida += `${alinha ("D", fSeparaMilhar(e.quantidadeOcorrencias), 10)} `;
            textoSaida += ` `.repeat (3);
            textoSaida += `${alinha ("D", (e.quantidadeOcorrencias/quantidadeApostas*100).toFixed(4)+"%", 15)} `; //percentual... aqui parei
            textoSaida += ` `.repeat (5);
            textoSaida += `${alinha ("E", "#" + fSeparaMilhar(e.idVolantePrimeiraAposta), 12)} `;
            textoSaida += `: `;
            let eVolante = converteFaixaVolante(e);
            textoSaida += `${alinha ("C", formataExibicaoDoVolanteConferido (eVolante), 40)} `;

            imprimeSaida (textoSaida);
   
            }//function
         );//forEach

         imprimeSaida (`-----------------------------------------------------------`);
         imprimeSaida (`Quantidade de apostas    : ${fSeparaMilhar(quantidadeApostas)}`);
         imprimeSaida (`-----------------------------------------------------------`);
         imprimeSaida (`Maior faixa premiada     : ${faixasDePremiacao[maiorfaixapremiada(faixasDePremiacao)].nomeDisplay}`);
         imprimeSaida (`-----------------------------------------------------------`);
         imprimeSaida (``);
         imprimeSaida (alinha ('CENTRO', `Hall de acertos - ${faixasDePremiacao[maiorfaixapremiada(faixasDePremiacao)].nomeDisplay}`, 50));
         imprimeSaida (``);

         imprimeRollMaioresAcertos (volantesRollMaioresAcertos);

         return ;

         function formataExibicaoDoVolanteConferido (volanteConferido) {
            let prognosticosFormatados = [];

            volanteConferido.volantes.forEach (
               function (e, i, arr ){
                  prognosticosFormatados[e]= (volanteConferido.marcacaoDosAcertos.indexOf(i) < 0  ?  `  ${padRight(e, 2, '0')}  `: ` -${padRight(e, 2, '0')}- `);
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
            if ((iContaCaracteres-sNumero.length-1)%3===0&&iContaCaracteres!==1) {
               sSaida = sThousandSeparator + sSaida;
            };
         };
   
      return sSaida;
   };

   function alinha (lado, s, tamanho){
      let sRetorna = "";
      let sPreenche = ' ';
      
      switch (lado.toUpperCase()) {
         case "<":
         case "E":
         case "ESQ":
         case "ESQUERDA":
         case "L":
         case "LEFT": {
            sRetorna = padLeft (s, tamanho, sPreenche);
            break;
         };
         case ">":
         case "D":
         case "DIR":
         case "DIREITA":
         case "R":
         case "RIGHT": {
            //parei aqui
            sRetorna = padRight (s, tamanho, sPreenche);
            break;
         };
         case "|":
         case "C":
         case "CEN":
         case "CENTRO":
         case "CENTER": {
            sRetorna = padCenter (s, tamanho, sPreenche);
            break;
         };
      
      };

      return sRetorna;

   };

function padLeft (s, tamanho, caractere){
   let sRetorna = caractere.repeat(tamanho);
   sRetorna = (s + sRetorna).substring (0, tamanho);
   return sRetorna;
};
function padCenter (s, tamanho, caractere){
   let sobraTamanho = parseInt ((tamanho - s.length)/2) ;
   let sRetorna = caractere.repeat(Math.max(0,sobraTamanho)) + s;
   sRetorna = (sRetorna + caractere.repeat(Math.max(0,sobraTamanho))).substring(0, tamanho);
   return sRetorna;
};
function padRight (s, tamanho, caractere){
   let sRetorna = caractere.repeat(tamanho) + s;
   sRetorna = sRetorna.substring (sRetorna.length - tamanho);
   return sRetorna;
};

function imprimeSaida (texto) {
   let divSaida = document.getElementById ('id-div-saida-loteria');
   while (texto.indexOf(' ') >=0 ) {
      texto = texto.replace (' ', '&nbsp;');
   };
   divSaida.innerHTML += texto + "<br>";   
   //divSaida.innerText += texto + "\n";   
};