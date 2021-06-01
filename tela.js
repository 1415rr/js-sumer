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

// ? ---------------------------------------------------
// ? ---------------------------------------------------
// ? ---------------------------------------------------
function fCliqueOkTelaPrincipal(){
   let lTexto = fGetValueObjTela("id-txt-ent1");
   let lOper = fGetValueObjTela("id-cbo-operacao");

   lTexto = lOper + ' - ' + lTexto;

   fTelaControlaSaida ('STATUS', lTexto);

   // fTelaImprimeDigitando2 ("1234567890");
   // fTelaImprimeDigitando2 ("ABCDEFGHIJKLM");
   let xTexto = "";
   xTexto = `
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nisi ut ullamcorper molestie. Praesent elementum, lacus id lacinia porttitor, lorem enim egestas mi, vitae euismod quam lacus quis risus. Donec scelerisque mi ut sagittis ultricies. Mauris accumsan ligula vel vehicula pretium. Aliquam iaculis est ac cursus vulputate. Aliquam consequat molestie justo, a vehicula dolor ullamcorper ut. Ut tincidunt diam at nulla feugiat faucibus. Donec at mi vel leo tincidunt condimentum sed at augue. Integer bibendum, orci suscipit finibus tincidunt, felis tortor rutrum metus, id tempor nisi massa lacinia tortor. 
   <br><br>
   Curabitur euismod suscipit enim sagittis tincidunt. Nunc tempor auctor pellentesque. Nulla in convallis metus, a cursus turpis. Donec facilisis eget eros non condimentum. Morbi sit amet varius risus. Ut pharetra tempor lectus, in fringilla leo ultricies ut. Curabitur vel purus id mauris vehicula laoreet in a odio.
   <br><br>
   Praesent scelerisque tellus at bibendum cursus. Fusce sit amet vehicula mauris. Pellentesque neque velit, iaculis ut facilisis sed, rhoncus vitae tellus. Donec elit urna, iaculis sed eros ac, venenatis ullamcorper libero. Proin porttitor finibus mauris mollis blandit. Aliquam ac nibh efficitur, luctus diam non, rhoncus nisl. Suspendisse mattis non turpis eget pharetra. Pellentesque tincidunt odio arcu, ac auctor dui pretium feugiat. Aliquam suscipit vehicula dignissim.
         <br>Data: 30/MAI/2021
         <br>Autor: 1415rr
      `;

      fTelaImprimeDigitando(xTexto, 'id-div-infos1' , fHablilita);

  

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


function fTelaImprimeDigitando(texto, sObjeto, fHablilita) {
/*
objetivo: imprimir um texto com delay - como se o programa estivesse digitando em resposta ao usuário.
retorno: none
detalhes: 
   lTextoSaida é uma variavel temporária, para que o innerHTML absorva as tags corretamente.
      (quando eu incremento o innerHTML caracter p/caracter, ele considera as TAGs como texto corrido
      ex: <br> não quebra linha, escreve a string "<br>", mesmo )
   
   fHablitaTrue é usada para ser parâmetro do setTimeout ao final da impressão.

   fCaracteresPorMiliSegundo calcula quanto eu tenho de tempo para imprimir um caracter.

   fImprime efetivamente imprime o caracter da posicao "pos" da string "texto". O ultimo 
      parametro é o "tempo" já calculado que irá para setTimeout.
      a concatenacao é feita em lTextoSaida e replicada 
      para objSaida, se o caracter corrente não for "<".

   fImprime Proximo existe apenas no contexto de fImprime e é chamada por setTimeOut, 
      faz o incremento da posicao atual e chama a propria fImprime.
      quando fImprime chega ao ult caractere "(++pos<len) else", ele
      passa fHablitaTrue, no tempo do proximo caractere.

   ! FAZER UM imprime linha???

   Data: 31/MAI/2021
   Autor: 1415rr
*/

   let lTextoSaida = "";
   objSaida = fGetObjTela (sObjeto);

   let fHablilitaTrue = function() { fHablilita(true) };

   let fCaracteresPorMiliSegundo = function (texto, iTempoSaida){
      debugConsoleLog('tempo - caractere', iTempoSaida / texto.length);
      return (iTempoSaida / texto.length);
   };


   let fImprime = function (texto, pos, tempo){
      lTextoSaida +=texto[pos]
      if (lTextoSaida[lTextoSaida.length-1]!=="<") {
         objSaida.innerHTML = lTextoSaida;
      };
      let fImprimeProximo = function (){
         if (++pos < texto.length ) {
            fImprime(texto, pos, tempo);
         } else {
            setTimeout (fHablilitaTrue, tempo );
         };
      };
      setTimeout (fImprimeProximo, tempo );
   }

   let tempo = fCaracteresPorMiliSegundo(texto, 8000);
   //let tempo = 4;
   fHablilita(false);
   fImprime(texto, 0, tempo);
};