debugConsoleLog ("sumer.js");
const kTotalAnos = 10;
var   gAnocorrente = 1;

/* 
sumerObjItem será global pois é uma informação que é pertinente a toda a aplicação.
nas funções, eu vou tratá-lo em uma variavel local, pois não sei se poderá haver
uma implementação melhor no futuro.
Data: 23/MAI/2021
Autor: 1415rr
*/

let  sumerObjItem = {
   indice: {},
   itens: [], 
   fSetItem: function (indice, item, valor) {
      if (typeof this.itens[indice] === "undefined") {this.itens[indice]={}};
      this.itens[indice][item]=valor;
   },
   fGetIndex: function (nomeIndice){
      let lRetorno = -1;
      if (typeof this.indice[nomeIndice] !== "undefined") { lRetorno = this.indice[nomeIndice]};
      return lRetorno;
   },
};

function fSumerInicializaObj() {
   /*
   objetivo: inicializar o objeto sumerObjItem com os itens e indices necessarios.
   retorno: none
   observacoes: usa uma funcao local lfSetItem para encapsular o setitem do objeto.
               esta funcao é especialmente util, pois cria os indices para 
               navegar nos itens.
               as funcoes de setPreco e SetQuantidade nao entram junto com inicializacao,
               pois sao outra regras de negocio independentes.
   Data: 23/MAI/2021
   Autor: 1415rr
   */
   let i=0,
      lSumerObjItem = sumerObjItem;

   function lfSetItem (indice, nomeIndice, pNome, pUnidade){
      lSumerObjItem.indice[nomeIndice] = indice;
      lSumerObjItem.fSetItem (indice, "nome", pNome);
      lSumerObjItem.fSetItem (indice, "unidade", pUnidade);
   };

   lfSetItem ( i++, "ouro", "Ouro", "Moedas");
   lfSetItem ( i++, "ferro", "Ferro", "Libras");
   lfSetItem ( i++, "terra", "Terra", "Hectares");
   lfSetItem ( i++, "madeira", "Madeira", "Hectares");
   lfSetItem ( i++, "populacao", "População", "Pessoas");
   lfSetItem ( i++, "camponeses", "Camponeses", "Pessoas");
   lfSetItem ( i++, "soldados", "Soldados", "Pessoas");
   lfSetItem ( i++, "armas", "Armas", "Unidades");
   lfSetItem ( i++, "colheita", "Colheita", "Hectares");
   lfSetItem ( i++, "pecuaria", "Pecuária", "Hectares");
};

function fSumerInicializaObjQuantidade() {
   /*
   objetivo: carregar as quantidades iniciais do ojbSumer.
   retorno: none
   observacoes: usa uma funcao local lfSetQuantidade para encapsular o setItem do objeto.
   Data: 23/MAI/2021
   Autor: 1415rr
   */
   let lSumerObjItem = sumerObjItem;

   function lfSetQuantidade (nomeIndice, valor){
      lSumerObjItem.fSetItem (lSumerObjItem.fGetIndex(nomeIndice), "quantidade", valor);
      debugConsoleLog ("sumer.js", "lfSetQuantidade", "nomeIndice", nomeIndice, 
      "lSumerObjItem", lSumerObjItem, "lSumerObjItem.fGetIndex" , lSumerObjItem.fGetIndex(nomeIndice) );
   };

   lfSetQuantidade ("ouro", 1000);
   lfSetQuantidade ("ferro", 10000);
   lfSetQuantidade ("terra", 10);
   lfSetQuantidade ("madeira", 10);
   lfSetQuantidade ("populacao", 100000);
   lfSetQuantidade ("camponeses", 1000);
   lfSetQuantidade ("soldados", 800);
   lfSetQuantidade ("armas", 500);
   lfSetQuantidade ("colheita", 4);
   lfSetQuantidade ("pecuaria", 1);
};

function fSumerInicializaObjPreco() {
   /*
   objetivo: carregar os precos iniciais do ojbSumer.
   retorno: none
   observacoes: usa uma funcao local lfSetQuantidade para encapsular o setItem do objeto.
   Data: 23/MAI/2021
   Autor: 1415rr
   */
   let lSumerObjItem = sumerObjItem;

   function lfSetPreco (nomeIndice, valor){
      lSumerObjItem.fSetItem (lSumerObjItem.fGetIndex(nomeIndice), "preco", valor);
   };

   lfSetPreco ("ouro", 1);
   lfSetPreco ("ferro", 1);
   lfSetPreco ("terra", 2);
   lfSetPreco ("madeira", 2);
   lfSetPreco ("populacao", 1);
   lfSetPreco ("camponeses", 2);
   lfSetPreco ("soldados", 3);
   lfSetPreco ("armas", 15);
   lfSetPreco ("colheita", 15);
   lfSetPreco ("pecuaria", 15);

      /* para saber como foram obtidos os valores, 
      consulte o arquivo obtendo-valores.txt 
      com todo o registro da pesquisa.
      */
   lfSetPreco ("ferro", 4.4);
   lfSetPreco ("terra", 1.6);
   lfSetPreco ("pessoas", 1.535);
   lfSetPreco ("madeira", 3.33);
   lfSetPreco ("soldados", 60);

};


   function fDefinePrecos(arrItem) {

      //arrItem[kArmas   ].decValor = ;
      //arrItem[kColheita].decValor = ;
      //arrItem[kPecuaria].decValor = ;
   
      return arrItem;
      
   }


function fAleatorio(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max+1); //max era exclusive
   return Math.floor(Math.random() * (max - min)) + min;
}