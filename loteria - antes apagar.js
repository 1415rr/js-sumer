/*
0		1		2		3		4		   5		      6
50   	40   	10   	1   	0.05   	0.0005    	0.0000050
+1		-2		-1		               +/-  2      1/200mil
                                             (6a casa)
*/

function fLoteria (){
   fSimulaLoteria (  quantidadeApostas = 100,
                     limiteMinimoDeAcertosParaListar = 3, // lista quem fez terno ou mais
                     numeroMinimoDoSorteio = 01, // mega-sena = 1 a 60
                     numeroMaximoDoSorteio = 60, // mega-sena = 1 a 60
                     quantidadeDezenasVolantePremiado = 6, // mega-sena sao 6 dezenas premiadas
                     quantidadeDezenasVolanteApostas = 7); // Os volantes de megasena permitem apostas de 6 a 10 dezenas)
};

function fSimulaLoteria (quantidadeApostas, listarAcertosAPartirDe, 
   numeroMinimoDoSorteio, numeroMaximoDoSorteio, 
   quantidadeDezenasVolantePremiado, quantidadeDezenasVolanteApostas ){
      /* exemplo de chamada para  testar mega sena com  100  volantes 
      de apostas de 7 dezenas com listando vencedores terno ou superior: 
      fSimulaLoteria (quantidadeApostas = 100,
                     limiteMinimoDeAcertosParaListar = 3, //terno
                     numeroMinimoDoSorteio = 01, // mega-sena = 1 a 60
                     numeroMaximoDoSorteio = 60, // mega-sena = 1 a 60
                     quantidadeDezenasVolantePremiado = 6, // mega-sena sao 6 dezenas premiadas
                     quantidadeDezenasVolanteApostas = 7); // Os volantes de megasena permitem apostas de 6 a 10 dezenas)
      */
      //-???? let mapaQuantidadeDeAcertos = carregaMapaQuantidadeDeAcertos();
      let volantePremiado = criaVolante (min=numeroMinimoDoSorteio, 
                                          max=numeroMaximoDoSorteio, 
                                          qtd=quantidadeDezenasVolantePremiado);

      let volanteAposta=[];

      let conferencia = {
         controleDeAcertos:{
            faixas:[],
            inicializaFaixas(){
               ['ZERO', 'Uno', 'Duque', 'Terno', 'Quadra', 'Quina', 'Sena', 'Sétoma', 'Ótona', 'Nóvona', 'Décona'].forEach(
                  function (nome, i, arr) {
                     faixas[i].nomeDisplay = nome;
                     faixas[i].quantidadeOcorrencias = 0;
                     faixas[i].idVolantePrimeiraAposta = 0;
                     faixas[i].volantePrimeiraAposta = [];
                     faixas[i].marcacaoDosAcertosPrimeiraAposta = [];
                  } // function
               )  //forEach
              }  //inicializaFaixas
         }, // controleDeAcertos
         confereVolantes (volantePremiado, volanteAposta, idVolanteAposta) {

            let contabilizaAcertos = function (idVolanteAposta, volanteAposta, indicesDosAcertosDoVolante){ 
               let faixaDeAcerto = indicesDosAcertosDoVolante.length;
               if (controleDeAcertos.faixas[faixaDeAcerto].quantidadeOcorrencias === 0) {
                  controleDeAcertos.faixas[faixaDeAcerto].idVolantePrimeiraAposta = idVolanteAposta;
                  controleDeAcertos.faixas[faixaDeAcerto].volantePrimeiraAposta = volanteAposta;
               };  //if
               controleDeAcertos.faixas[faixaDeAcerto].quantidadeOcorrencias++;
               controleDeAcertos.faixas[faixaDeAcerto].quantidadeOcorrencias++;
            }; //contabilizaAcertos
   

            let marcacaoDosAcertos=[].fill(false, 0, volanteAposta.length);
            let quantidadeAcertos = 0;

            volantePremiado.forEach (
               function (e, i, arr) {
                  if (1+(let indiceDaDezenaNaAposta=volanteAposta.indexOf(e))) {
                     marcacaoDosAcertos[indiceDaDezenaNaAposta]=true;
                     quantidadeAcertos++
                  } //if
               } // function
            )  //forEach
            contabilizaAcertos (volantePremiado, volanteAposta, marcacaoDosAcertos, quantidadeAcertos);
            marcacaoDosAcertosPrimeiraAposta=marcacaoDosAcertos;
            
         },
      }; // conferencia

      for (let contadorVolanteAposta = 1; contadorVolanteAposta<=quantidadeApostas; contadorVolanteAposta++) {

         let quantidadeDezenasVolanteAposta = quantidadeDezenasVolantePremiado;
         volanteAposta = criaVolante (min=numeroMinimoDoSorteio, 
                                       max=numeroMaximoDoSorteio, 
                                       qtd=quantidadeDezenasVolanteAposta); 

         conferencia.confereVolantes (volantePremiado, volanteAposta, contadorVolanteAposta);

         let decideImprimirParcial = () => (mod(contadorVolanteAposta, quantidadeApostas/10)=0);
         let executaImprimirParcial = () => {
            console.log (`${fSeparaMilhar(contadorVolanteAposta)} de ${fSeparaMilhar(quantidadeApostas)}.`)};

         if (decideImprimirParcial()) {executaImprimirParcial()};

      }; //for contadorVolanteAposta

      exibeResultados (volanteAposta, conferencia.controleDeAcertos.faixas);

      };  //fSimulaLoteria

      function exibeResultados (volanteAposta, faixasDePremiacao)(
         let quantidadeApostas=0;
         console.log (`-----------------------------------------------------------`);
         console.log (`Sorteados ==> ${volanteAposta.join(' - ')}`);
         console.log (`-----------------------------------------------------------`);
         console.log (``);

         faixasDePremiacao.forEach(
            let quantidadeApostas = 0;
            function (e, i, arr) {
               let textoSaida="";
               textoSaida += `acertos quantidade primeiro volante `;
               textoSaida += `${e.nomeDisplay} `;
               textoSaida += `${fSeparaMilhar(e.quantidadeOcorrencias)} `;
               textoSaida += `#${e.idVolantePrimeiraAposta}: `;
               textoSaida += `${formataExibicaoDoVolanteConferido (e.volantePrimeiraAposta, marcacaoDosAcertosPrimeiraAposta)} `;

               quantidadeApostas+=e.quantidadeOcorrencias;
               console.log (textoSaida);

            };

            console.log (`-----------------------------------------------------------`);
            console.log (`Total de apostas    : ${fSeparaMilhar(quantidadeApostas)}`);
            console.log (`-----------------------------------------------------------`);

            function formataExibicaoDoVolanteConferido = function (volante, acertou) => {
               let saidaFormatada = "";
               volante.forEach  (
                  function (e, i, arr){
                     if (acertou[i])  {
                        saidaFormatada += ` -${e}- `;
                     } else {
                        saidaFormatada += `  ${e}  `;
                     }; //if 
                  }; //function
               ); //forEach
               return saidaFormatada;
            };
            
            function fSeparaMilhar (numero, sThousandSeparator = "."){
               let sNumero = '',
                  sSaida = '',
                  iContaCaracteres = 0;
            
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
            
               faixas[i].nomeDisplay = nome;
               faixas[i].quantidadeOcorrencias = 0;
               faixas[i].idVolantePrimeiraAposta = 0;
               faixas[i].volantePrimeiraAposta = [];
               faixas[i].marcacaoDosAcertosPrimeiraAposta = [];

      

            };

            console.log (`-----------------------------------------------------------`);
            console.log (`Premiado ==> ${arrVolantePremiado.join(' - ')}`);
            console.log (`Corte em ${kQtdAcertosCorte} acertos.`);
            console.log (``);
            console.log (`Total de apostas    : ${fSeparaMilhar(resultados.length)}`);
            console.log (``);
            console.log (sCabecalho);
            console.log (fSaidaApostas ('ZERO', iLona));
            console.log (fSaidaApostas ('Uno', iUno));
            console.log (fSaidaApostas ('Duque', iDuque));
            console.log (fSaidaApostas ('Terno', iTerno));
            console.log (fSaidaApostas ('Quadra', iQuadra));
            console.log (fSaidaApostas ('Quina', iQuina));
            console.log (fSaidaApostas ('SENA', iSena));
         
   

         selecionados.forEach(
            function (e, i, arr) {
               let editado = fComparaVolantesDetalhado (arrVolantePremiado, volanteAposta[e] );
               console.log (`Volante: ${e}   Acertos: ${resultados[e]}:    ${editado.join(' - ')}        // ${arrVolantePremiado.join('    -    ')}`);
         }) ;
      
      
         let fSaidaApostas = (nome, valor) => (`${
            (nome+':'+' '.repeat(10)).substring(0,8)}    : ${
            (' '.repeat(15)+valor).substr(-10)}     ${
               (' '.repeat(15)+((100*valor/resultados.length).toFixed(7))).substr(-11)}%         ${
                  (' '.repeat(15)+fSeparaMilhar((valor/resultados.length *50 *1000 *1000 ).toFixed(0))).substr(-15)+' '
               }`);
         let sCabecalho = `${
            ('ACERTOS'+' '.repeat(10)).substring(0,8)}    : ${
            (' '.repeat(15)+'ACERTADORES').substr(-11)}     ${
               (' '.repeat(15)+'PERCENTUAL').substr(-11)}     ${
               'PARA 50 MILHOES PESSOAS '}
               `
         
         console.log (`-----------------------------------------------------------`);
         console.log (`Premiado ==> ${arrVolantePremiado.join(' - ')}`);
         console.log (`Corte em ${kQtdAcertosCorte} acertos.`);
         console.log (``);
         console.log (`Total de apostas    : ${fSeparaMilhar(resultados.length)}`);
         console.log (``);
         console.log (sCabecalho);
         console.log (fSaidaApostas ('ZERO', iLona));
         console.log (fSaidaApostas ('Uno', iUno));
         console.log (fSaidaApostas ('Duque', iDuque));
         console.log (fSaidaApostas ('Terno', iTerno));
         console.log (fSaidaApostas ('Quadra', iQuadra));
         console.log (fSaidaApostas ('Quina', iQuina));
         console.log (fSaidaApostas ('SENA', iSena));
      

      );

      /*
      conferencia
      for de numero tentativas
         cria volante
         conferencia.conferevolantes
         conferencia.contabilizaAcertos
         
      def mapaAcertos
      }
       */

      let arrayVolanteAposta, arrayVolantesAcertos;

      let fInternaComparacaoVolantes = (i) => {
         objVolanteConferido = fComparaVolanteApostaComPremiado (arrayVolanteAposta, arrayVolantePremiado );
         if   (lArrayQuantidadeDeAcertos [objVolanteConferido.quantidadeAcertos].qtdAcumulada++ ===0) {
            lArrayQuantidadeDeAcertos [objVolanteConferido.quantidadeAcertos].idPrimeiroVolante = i;
            lArrayQuantidadeDeAcertos [objVolanteConferido.quantidadeAcertos].sTextoPrimeiroVolante = objVolanteConferido.stringExibicao;
         };
      }if (limiteMinimoDeAcertosParaListar <= objVolanteConferido.quantidadeAcertos) {arrayVolantesAcertos[arrayVolantesAcertos.length] = objVolanteConferido};
   
         [quantidadeEncontrados, volanteFormatado.join(' - ')];
         resultados[i] = fComparaVolanteApostaComPremiado (volanteAposta[i], arrVolantePremiado );
         switch (resultados[i]) {
            case 0:{ iLona++; break; }
            case 1:{ iUno++; break; }
            case 2:{ iDuque++; break; }
            case 3:{ iTerno++; break; }
            case 4:{ iQuadra++; break; }
            case 5:{ iQuina++; break; }
            case 6:{ iSena++; break; }
         };
         if (resultados[i] >= kQtdAcertosCorte) {selecionados[[selecionados.length]] = i};
      };

                  
   };

function fLoteria(){
   const kQtdApostas      = 45 *1000;// *1000 ;
   const kQtdAcertosCorte = 6;
   const kQtdEtapas       = 1;
   let   lArrayObjetosDasFaixaDeAcertos = [];
   ['ZERO', 'Uno', 'Duque', 'Terno', 'Quadra', 'Quina', 'Sena', 'Sétoma', 'Ótona', 'Nóvona', 'Décona'].forEach(
      function (nome, i, arr) {lArrayObjetosDasFaixaDeAcertos[i] = {
         nome, qtdAcumulada:0, idPrimeiroVolante:0, sTextoPrimeiroVolante:'' } //curly do objeto.
      } 
   );
   let arrayVolantePremiado = fCriaVolante (min=1, max=60, qtd=6);
   let arrayVolanteAposta = [];
   let arrayVolantesAcertos = [];
   let objetoAcertos = {quantidade, stringExibicao};

let fInternaComparacaoVolantes = (i) => {
      let qtdAcertos, stringExibicaoAcertos;
      [qtdAcertos, stringExibicaoAcertos] = fComparaVolanteApostaComPremiado (arrayVolanteAposta, arrayVolantePremiado );
      if (lArrayObjetosDasFaixaDeAcertos[qtdAcertos].qtdAcumulada++ ===0) {
         lArrayObjetosDasFaixaDeAcertos[qtdAcertos].idPrimeiroVolante = i;
         lArrayObjetosDasFaixaDeAcertos[qtdAcertos].sTextoPrimeiroVolante = stringExibicaoAcertos;
      };
      if (kQtdAcertosCorte <= qtdAcertos) {arrayVolantesAcertos[arrayVolantesAcertos.length] = [qtdAcertos, stringExibicaoAcertos]};

      [quantidadeEncontrados, volanteFormatado.join(' - ')];
      resultados[i] = fComparaVolanteApostaComPremiado (volanteAposta[i], arrVolantePremiado );
      switch (resultados[i]) {
         case 0:{ iLona++; break; }
         case 1:{ iUno++; break; }
         case 2:{ iDuque++; break; }
         case 3:{ iTerno++; break; }
         case 4:{ iQuadra++; break; }
         case 5:{ iQuina++; break; }
         case 6:{ iSena++; break; }
      };
      if (resultados[i] >= kQtdAcertosCorte) {selecionados[[selecionados.length]] = i};
   };

// parei aqui.   objetoAcertos vai precisar virar um array para as saidas acima do corte.
// tbm sera usado para receber fComparaVolanteApostaComPremiado.


   let fInternaComparacaoVolantes = (i) => {
      let qtdAcertos, stringExibicaoAcertos;
      [qtdAcertos, stringExibicaoAcertos] = fComparaVolanteApostaComPremiado (arrayVolanteAposta, arrayVolantePremiado );
      if (lArrayObjetosDasFaixaDeAcertos[qtdAcertos].qtdAcumulada++ ===0) {
         lArrayObjetosDasFaixaDeAcertos[qtdAcertos].idPrimeiroVolante = i;
         lArrayObjetosDasFaixaDeAcertos[qtdAcertos].sTextoPrimeiroVolante = stringExibicaoAcertos;
      };
      if (kQtdAcertosCorte <= qtdAcertos) {arrayVolantesAcertos[arrayVolantesAcertos.length] = [qtdAcertos, stringExibicaoAcertos]};

      [quantidadeEncontrados, volanteFormatado.join(' - ')];
      resultados[i] = fComparaVolanteApostaComPremiado (volanteAposta[i], arrVolantePremiado );
      switch (resultados[i]) {
         case 0:{ iLona++; break; }
         case 1:{ iUno++; break; }
         case 2:{ iDuque++; break; }
         case 3:{ iTerno++; break; }
         case 4:{ iQuadra++; break; }
         case 5:{ iQuina++; break; }
         case 6:{ iSena++; break; }
      };
      if (resultados[i] >= kQtdAcertosCorte) {selecionados[[selecionados.length]] = i};
   };


   arrVolantePremiado.sort(function(a, b){return a-b});
   console.log (``);
   console.log (``);
   //console.log (`Premiado ==> ${arrVolantePremiado.join(' - ')}`);
   console.log (`Corte em ${kQtdAcertosCorte} acertos.`);

   for (let i=0; i<kQtdApostas; i++){
      volanteAposta[i] = fSelecionaVolante (min=1, max=60, qtd=6);
      volanteAposta[i].sort(function(a, b){return a-b});
      if (kQtdEtapas===1) {fInternaComparacaoVolantes(i)};
   };

   if (kQtdEtapas===2) {
      volanteAposta.forEach(
         function (e, i, arr) {
            fInternaComparacaoVolantes(i);
      }) ;
   };

   console.log (`-----------------------------------------------------------`);
   selecionados.forEach(
      function (e, i, arr) {
         let editado = fComparaVolantesDetalhado (arrVolantePremiado, volanteAposta[e] );
         console.log (`Volante: ${e}   Acertos: ${resultados[e]}:    ${editado.join(' - ')}        // ${arrVolantePremiado.join('    -    ')}`);
   }) ;


   let fSaidaApostas = (nome, valor) => (`${
      (nome+':'+' '.repeat(10)).substring(0,8)}    : ${
      (' '.repeat(15)+valor).substr(-10)}     ${
         (' '.repeat(15)+((100*valor/resultados.length).toFixed(7))).substr(-11)}%         ${
            (' '.repeat(15)+fSeparaMilhar((valor/resultados.length *50 *1000 *1000 ).toFixed(0))).substr(-15)+' '
         }`);
   let sCabecalho = `${
      ('ACERTOS'+' '.repeat(10)).substring(0,8)}    : ${
      (' '.repeat(15)+'ACERTADORES').substr(-11)}     ${
         (' '.repeat(15)+'PERCENTUAL').substr(-11)}     ${
         'PARA 50 MILHOES PESSOAS '}
         `
   
   console.log (`-----------------------------------------------------------`);
   console.log (`Premiado ==> ${arrVolantePremiado.join(' - ')}`);
   console.log (`Corte em ${kQtdAcertosCorte} acertos.`);
   console.log (``);
   console.log (`Total de apostas    : ${fSeparaMilhar(resultados.length)}`);
   console.log (``);
   console.log (sCabecalho);
   console.log (fSaidaApostas ('ZERO', iLona));
   console.log (fSaidaApostas ('Uno', iUno));
   console.log (fSaidaApostas ('Duque', iDuque));
   console.log (fSaidaApostas ('Terno', iTerno));
   console.log (fSaidaApostas ('Quadra', iQuadra));
   console.log (fSaidaApostas ('Quina', iQuina));
   console.log (fSaidaApostas ('SENA', iSena));


};


// maximo é "exclusive".
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}

   function fCriaVolante (min, max, qtd) {
      let arrRetorno =[];
      let iNumeroSorteado;
   
      for (let i=0; i<qtd ;i++) {
         do {
            iNumeroSorteado = getRandomInt (min, max+1);
      } while (arrRetorno.indexOf(iNumeroSorteado) >= 0) ;
         
         arrRetorno[i] = iNumeroSorteado;
      }
   
      return arrRetorno;
   };
   
   function fComparaVolanteApostaComPremiado (volanteAposta, volantePremiado ) {
      let volanteApostaFormatado = [],
         posicaoEncontrou = 0,
         quantidadeEncontrados = 0;
   
      volanteAposta.forEach(function (e, i, arr) {volanteFormatado[i] = ` ${e} `});
   
      volantePremiado.forEach(
         function (e, i, arr) {
            posicaoEncontrou = aposta.indexOf(e);
            if (posicaoEncontrou>-1) {
               quantidadeEncontrados++;
               volanteFormatado[posicaoEncontrou] = `!${e}!`;
            };
         } 
      );
      return [quantidadeEncontrados, volanteFormatado.join(' - ')];
   };


   function carregaMapaQuantidadeDeAcertos(){
      let   mapaQuantidadeDeAcertos = [];
      ['ZERO', 'Uno', 'Duque', 'Terno', 'Quadra', 'Quina', 'Sena', 'Sétoma', 'Ótona', 'Nóvona', 'Décona'].forEach(
         function (nome, i, arr) {mapaQuantidadeDeAcertos[i] = {
            nome, qtdAcumulada:0, idPrimeiroVolante:0, sTextoPrimeiroVolante:'' } //curly do objeto.
         };
      );
   };