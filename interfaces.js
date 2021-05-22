function fLeItens(pObj) {
   let i = 0;
   
   let fSetItem = function(paramObjItem, indice, nome, unidade) {
      paramObjItem.itens[indice] = {nome, unidade};
   };

   pObj = fSetItem(pObj, pObj.indice.ouro = i++, "Ouro", "Moedas");
   pObj = fSetItem(pObj, pObj.indice.ferro = i++, "Ferro", "Moedas");
   pObj = fSetItem(pObj, pObj.indice.terra = i++, "Terra", "Hectares");
   pObj = fSetItem(pObj, pObj.indice.ouro = i++, "População", "Pessoas");
   pObj = fSetItem(pObj, pObj.indice.ouro = i++, "Madeira", "Hectares");
   pObj = fSetItem(pObj, pObj.indice.ouro = i++, "Camponeses", "Pessoas");
   pObj = fSetItem(pObj, pObj.indice.ouro = i++, "Soldados", "Pessoas");
   pObj = fSetItem(pObj, pObj.indice.ouro = i++, "Armas", "Unidades");
   pObj = fSetItem(pObj, pObj.indice.ouro = i++, "Colheita", "Hectares");
   pObj = fSetItem(pObj, pObj.indice.ouro = i++, "Pecuaria", "Hectares");

   return pObj;
}

