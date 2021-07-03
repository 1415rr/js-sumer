debugConsoleLog ('loteria.js');
/*
0		1		2		3		4		   5		      6
50   	40   	10   	1   	0.05   	0.0005    	0.0000050
+1		-2		-1		               +/-  2      1/200mil
                                             (6a casa)
*/

function fMegaSena (){
   fSimulaLoteria (  quantidadeApostas = 50001313,
                     //quantidadeApostas = 100,
                     limiteMinimoDeAcertosParaListar = 3, // lista quem fez terno ou mais
                     numeroMinimoDoSorteio = 01, // mega-sena = 1 a 60
                     numeroMaximoDoSorteio = 60, // mega-sena = 1 a 60
                     quantidadeDezenasVolantePremiado = 6, // mega-sena sao 6 dezenas premiadas
                     quantidadeDezenasVolanteApostas = 6); // Os volantes de megasena permitem apostas de 6 a 10 dezenas)
};

//prox etapas:
// corrigir o total de apostas - ok
// marcacaoDosAcertosPrimeiraAposta - ok
// colocar o percentual das quantidades
// colocar o ranking dos melhores pontos (selecionado ou automatico - melhor colocacao ex: todas as quinas se nao tiver nenhuma sena)
// formatar a saida


function fSimulaLoteria (quantidadeApostas, 
                        listarAcertosAPartirDe, 
                        numeroMinimoDoSorteio, 
                        numeroMaximoDoSorteio, 
                        quantidadeDezenasVolantePremiado,
                        quantidadeDezenasVolanteApostas ){
      /* exemplo de chamada para  testar mega sena com  100  volantes 
      de apostas de 7 dezenas com listando vencedores terno ou superior: 
      fSimulaLoteria (quantidadeApostas = 100,
                     limiteMinimoDeAcertosParaListar = 3, //terno
                     numeroMinimoDoSorteio = 01, // mega-sena = 1 a 60
                     numeroMaximoDoSorteio = 60, // mega-sena = 1 a 60
                     quantidadeDezenasVolantePremiado = 6, // mega-sena sao 6 dezenas premiadas
                     quantidadeDezenasVolanteApostas = 7); // Os volantes de megasena permitem apostas de 6 a 10 dezenas)
      */

      let faixas = [];
      let volanteAposta=[];
      let volantePremiado = criaVolante (min=numeroMinimoDoSorteio, 
                           max=numeroMaximoDoSorteio, 
                           qtd=quantidadeDezenasVolantePremiado);
   


      faixas = inicializaFaixas(quantidadeDezenasVolantePremiado, quantidadeDezenasVolanteApostas);
      for (let contadorVolanteAposta = 1; contadorVolanteAposta<=quantidadeApostas; contadorVolanteAposta++) {

         let quantidadeDezenasVolanteAposta = quantidadeDezenasVolantePremiado;
         volanteAposta = criaVolante (min=numeroMinimoDoSorteio, 
                                       max=numeroMaximoDoSorteio, 
                                       qtd=quantidadeDezenasVolanteApostas); 

         let marcacaoDosAcertos = confereVolantes (volantePremiado, volanteAposta);

         faixas = contabilizaAcertos (contadorVolanteAposta, 
                                       volanteAposta, 
                                       faixas.slice(),
                                       marcacaoDosAcertos) ;

         let decideImprimirParcial = () => (contadorVolanteAposta%(parseInt(quantidadeApostas/10)) === 0 );
         let executaImprimirParcial = () => {
            console.log (`${fSeparaMilhar(contadorVolanteAposta)} de ${fSeparaMilhar(quantidadeApostas)}.`)
         };

         if (decideImprimirParcial()) {executaImprimirParcial()};

      }; //for contadorVolanteAposta

         exibeResultados (volantePremiado, volanteAposta, faixas);


      function criaVolante (min, max, qtd) {
         let arrRetorno =[];
         let iNumeroSorteado;
      
         for (let i=0; i<qtd ;i++) {
            do {
               iNumeroSorteado = getRandomInt (min, max+1);
         } while (arrRetorno.indexOf(iNumeroSorteado) >= 0) ;
            
            arrRetorno[i] = iNumeroSorteado;
         }

         return arrRetorno.sort((a,b) => (a - b));
         
      };
      

   // maximo é "exclusive".
      function getRandomInt(min, max) {
         min = Math.ceil(min);
         max = Math.floor(max);
         return Math.floor(Math.random() * (max - min)) + min;
      };
};  //fSimulaLoteria
