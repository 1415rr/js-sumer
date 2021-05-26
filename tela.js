debugConsoleLog ('tela.js');

function fTelaImprime (idSaida, texto) {
/*
objetivo: fazer a impressão do texto no componente indicado.
retorno: none
observacoes: 
Data: 23/MAI/2021
Autor: 1415rr
*/
let elementoTela = window.document.getElementById(idSaida);
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
   let lTexto = "";
   lTexto = window.document.getElementById ("id-txt-ent1").value;

   fTelaControlaSaida ('STATUS', lTexto);

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