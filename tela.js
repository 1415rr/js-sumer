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

   switch (lArrParams[0]) {
      case 'ABERTURA': 
         lsTexto = 'Bem-vido ao reinado de Sumer, Vossa Majestade. ' +
            'Estamos ao seu dispor para que o reinado seja longo e próspero';     
         lsIdLocalSaida =  'id-div-sai2';
         break;
      
      case 'PAINEL':
         lsTexto = lArrParams[1] ;
         lsIdLocalSaida =  'id-div-sai1';
         break;

      case 'STATUS':
         lsTexto = lArrParams[1] ;
         lsIdLocalSaida =  'id-div-sai2';
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