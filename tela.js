debugConsoleLog ('tela.js');

function fTelaImprime (idSaida, texto) {
/*
objetivo: fazer a impressão do texto no componente indicado.
retorno: none
observacoes: 
Data: 23/MAI/2021
Autor: 1415rr
*/
let elementoTela = fGetObjTela(idSaida);
   elementoTela.innerHTML = texto;
};


function fTelaControlaSaida (...lArrParams) {
/*
objetivo: ser a funcao que controla todas as saidas para cada elemento da tela.
retorno: none
observacoes: 
Data: 23/MAI/2021
Autor: 1415rr
*/

   let lsTexto = ''
   lsIdLocalSaida = '';
   const kDivPainel = 'id-div-painel1',
      kDivStatus = 'id-div-status1',
      kDivInfos1 = 'id-div-infos1';



   switch (lArrParams[0]) {
      case 'ABERTURA': 
         lsTexto = 'Bem-vido ao reinado de Sumer, Vossa Majestade. ' +
            'Estamos ao seu dispor para que o reinado seja longo e próspero';     
         lsIdLocalSaida =  kDivStatus;
         break;
      
      case 'PAINEL':
         lsTexto = lArrParams[1] ;
         lsIdLocalSaida =  kDivPainel;
         break;

      case 'STATUS':
         lsTexto = lArrParams[1] ;
         lsIdLocalSaida =  kDivInfos1;
         break;

      case 'INICIO-DO-ANO':
         lsTexto = `Vamos começar o ano ${lArrParams[1]}. Vou listar as posses do reino.`;
         break;
   
      Default:
         lsTexto = 'fTelaExibe - Nao Cadastrada: ' + lArrParams[0];
         break;
      
   }

   fTelaImprime (lsIdLocalSaida, lsTexto);

};


function fTelaExibePainel (){
/*
objetivo: exibe o painel corrente
retorno: none
observacoes: 
Data: 23/MAI/2021
Autor: 1415rr
*/
   let lSumerObjItem = sumerObjItem,
   lsSaidaPainel = '';

   let a="";
   for (a of lSumerObjItem.itens) {
      lsSaidaPainel += `${a.nome} - ${a.quantidade} ${a.unidade}- $${a.preco}<br>`;
   };
   fTelaControlaSaida ('PAINEL', lsSaidaPainel);
};

function fCliqueOkTelaPrincipal(){
   let lTexto = fGetValueObjTela("id-txt-ent1");
   let lOper = fGetValueObjTela("id-cbo-operacao");

   lTexto = lOper + ' - ' + lTexto;

   fTelaControlaSaida ('STATUS', lTexto);

   let xTextoString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nisi ut ullamcorper molestie. Praesent elementum, lacus id lacinia porttitor, lorem enim egestas mi, vitae euismod quam lacus quis risus. Donec scelerisque mi ut sagittis ultricies. Mauris accumsan ligula vel vehicula pretium. Aliquam iaculis est ac cursus vulputate. Aliquam consequat molestie justo, a vehicula dolor ullamcorper ut. Ut tincidunt diam at nulla feugiat faucibus. Donec at mi vel leo tincidunt condimentum sed at augue. Integer bibendum, orci suscipit finibus tincidunt, felis tortor rutrum metus, id tempor nisi massa lacinia tortor. 
   <br><br>   Curabitur euismod suscipit enim sagittis tincidunt. Nunc tempor auctor pellentesque. Nulla in convallis metus, a cursus turpis. Donec facilisis eget eros non condimentum. Morbi sit amet varius risus. Ut pharetra tempor lectus, in fringilla leo ultricies ut. Curabitur vel purus id mauris vehicula laoreet in a odio.
   <br><br>   Praesent scelerisque tellus at bibendum cursus. Fusce sit amet vehicula mauris. Pellentesque neque velit, iaculis ut facilisis sed, rhoncus vitae tellus. Donec elit urna, iaculis sed eros ac, venenatis ullamcorper libero. Proin porttitor finibus mauris mollis blandit. Aliquam ac nibh efficitur, luctus diam non, rhoncus nisl. Suspendisse mattis non turpis eget pharetra. Pellentesque tincidunt odio arcu, ac auctor dui pretium feugiat. Aliquam suscipit vehicula dignissim.
   <br>Data: 30/MAI/2021         <br>Autor: 1415rr
      `;
   let = xTextoArray = 
   [`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nisi ut ullamcorper molestie. Praesent elementum, lacus id lacinia porttitor, lorem enim egestas mi, vitae euismod quam lacus quis risus. Donec scelerisque mi ut sagittis ultricies. Mauris accumsan ligula vel vehicula pretium. Aliquam iaculis est ac cursus vulputate. Aliquam consequat molestie justo, a vehicula dolor ullamcorper ut. Ut tincidunt diam at nulla feugiat faucibus. Donec at mi vel leo tincidunt condimentum sed at augue. Integer bibendum, orci suscipit finibus tincidunt, felis tortor rutrum metus, id tempor nisi massa lacinia tortor. 
   `,`Curabitur euismod suscipit enim sagittis tincidunt. Nunc tempor auctor pellentesque. Nulla in convallis metus, a cursus turpis. Donec facilisis eget eros non condimentum. Morbi sit amet varius risus. Ut pharetra tempor lectus, in fringilla leo ultricies ut. Curabitur vel purus id mauris vehicula laoreet in a odio.
   `,`Praesent scelerisque tellus at bibendum cursus. Fusce sit amet vehicula mauris. Pellentesque neque velit, iaculis ut facilisis sed, rhoncus vitae tellus. Donec elit urna, iaculis sed eros ac, venenatis ullamcorper libero. Proin porttitor finibus mauris mollis blandit. Aliquam ac nibh efficitur, luctus diam non, rhoncus nisl. Suspendisse mattis non turpis eget pharetra. Pellentesque tincidunt odio arcu, ac auctor dui pretium feugiat. Aliquam suscipit vehicula dignissim.
   `,`Data: 30/MAI/2021
   `,`Autor: 1415rr
   `];
   
   //fTelaImprimeComEfeitos (xTextoString, 'id-div-infos1' , fHablilita);  
   fTelaImprimeComEfeitos (xTextoArray, 'id-div-infos1' , fHablilita);  
   //setTimeout (function (){fTelaImprimeComEfeitos (xTextoArray, 'id-div-infos1' , fHablilita);}, 2500);

};

function fTestaTab(){
   lObj = window.document.getElementById ("id-tabela-painel");
   ls = 
   "<tr> <td>1-1</td> <td>1-2</td> <td>1-3</td> </tr>" 
   + "<tr> <td>2-1</td> <td>2-2</td> <td>2-3</td> </tr>"
   + "<tr> <td>3-1</td> <td>3-2</td> <td>3-3</td> </tr>"
   + "<tr> <td>4-1</td> <td>4-2</td> <td>4-3</td> </tr>";
   lObj.innerHTML = ls;

   lObj2 = document.createElement("TABLE");
   lObj2.setAttribute("id", "id-tabela-painel2");
   let linha = lObj2.insertRow(0);
   let celula1 = linha.insertCell(0);
   let celula2 = linha.insertCell(1);
   let celula3 = linha.insertCell(2);
   let celula4 = linha.insertCell(3);
   celula4.innerHTML ="outra tabela";
   celula2.innerHTML ="caramba!";
   celula3.innerHTML ="é cachaca c*!";
   document.body.appendChild(lObj2);

   
};

function fGetValueObjTela(nomeObj){
   return fGetObjTela(nomeObj).value;
};

function fGetObjTela(nomeObj){
   return window.document.getElementById (nomeObj);
};

function fHablilita (param){
   fGetObjTela('id-cbo-operacao').disabled = !param;
   fGetObjTela('id-btn-ok-ent1').disabled = !param;
};


let fTelaImprimeComEfeitos = function (paramTexto, paramIdObjeto, fHablilita, iDelay=0) {
/*
objetivo: imprimir um texto com efeitos de delay 
      - como se o programa estivesse digitando em resposta ao usuário   OU
      - como se as linhas a serem impressas estivessem sendo processadas uma a uma.
argumentos:
   paramTexto - texto a imprimir. 
      se string, imprime caracter um-a-um;
      se array, imprime linha  uma-a-uma;
   paramIdObjeto - string com o id do objeto de saida.
   fHablilita - funcão que controla true/habilitar 
      ou false/desabilitar os campos da tela.
   iDelay - informa o delay para imprimir cada caracter ou linha.
      se receber ZERO (preferível), uso a fCalculaDelayImpressoes para definir um 
      tempo limite.
retorno: none
detalhes: Não trata concorrência (ao chamar duas vezes em seguida, vale apenas a última, pois 
   o campo de saída não concatena, apenas imprime o buffer). Não vou investir nisso. algum 
   "DP"/design pattern deve ser especifico para isso.
  
   Data: 03/JUN/2021
   Autor: 1415rr
*/


   let lBufferParaInnerHTML = "",
      objSaida = fGetObjTela (paramIdObjeto),
      iQuantidadeLinhasParaImprimir = Array.isArray(paramTexto) ? paramTexto.length : 1  ;

   let fImprimePosicaoAtualEFazRecursiva = (texto, iPosicaoAtual, iDelay) => {
      lBufferParaInnerHTML +=paramTexto[iPosicaoAtual];
      bCanRefreshInnerHTML = true;
      
      if (iQuantidadeLinhasParaImprimir > 1) { lBufferParaInnerHTML+="<br>";  // separa as linhas
      } else {
         //provoco o tratamento de tags pelo innerHTML antes de imprimir o "<"
         if (paramTexto[iPosicaoAtual]==="<") {bCanRefreshInnerHTML = false};
      };
      
      // atualizo a tela.
      if (bCanRefreshInnerHTML) {objSaida.innerHTML = lBufferParaInnerHTML};

      //ainda tenho mais a imprimir ?
      if (iPosicaoAtual < paramTexto.length-1) {
      
         // ? todo o esforço da função foi para executar a linha abaixo recursivamente.
         setTimeout (function (){fImprimePosicaoAtualEFazRecursiva (texto, ++iPosicaoAtual, iDelay)}, iDelay);
      
      } else {
         
         //já imprimi a ultima posicao, libero os campos.
         setTimeout (function (){fHablilita(true)}, iDelay);
      };
   };

   let fCalculaDelayImpressoes = (iQtdChamadas, iTempoLimite) => (iTempoLimite / iQtdChamadas);

   if (!iDelay) { iDelay = fCalculaDelayImpressoes(paramTexto.length, 4000) };

   fHablilita(false)
   fImprimePosicaoAtualEFazRecursiva(paramTexto, iPosicaoAtual=0, iDelay);

};