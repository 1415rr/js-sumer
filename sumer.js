const kTotalAnos = 10;
var   gAnocorrente = 1;
var   garrItem;
var   kOuro;
var   kFerro;
var   kTerra;
var   kPessoas;
var   kMadeira;
var   kCampones;
var   kSoldados;
var   kArmas;
var   kColheita;
var   kPecuaria;



   function fSetItem (  nome, sUnidade, qtd, vlr, agio, tipoItem  )  {
   lobjItem = { nome, iQuant:qtd, sUnidade, decValor:vlr, iAgio:agio, tipoItem };
      return lobjItem;
   };


   function fCarregaItens() {
      let larrItem=[0];
      let i=0;

      kOuro = i++;
      larrItem[kOuro] = fSetItem ("Ouro", "Moedas", qtd=1000, vlr=1, agio=10, "MOEDA" );

      kFerro = i++;
      larrItem[kFerro] = fSetItem ("Ferro", 'Libras', qtd=10000, vlr=1, agio=10,  "MATERIAPRIMA" );
      
      kTerra = i++;
      larrItem[kTerra] = fSetItem ("Terra", 'Hectares', qtd=10, vlr=2, agio=15, "MATERIAPRIMA" );
      
      kPessoas = i++;
      larrItem[kPessoas] = fSetItem ("População", 'Pessoas', qtd=100000, vlr=1, agio=10,  "PESSOA" );

      kMadeira = i++;
      larrItem[kMadeira] = fSetItem ("Madeira", 'Hectares', qtd=10, vlr=2, agio=15, "MATERIAPRIMA" );

      kCampones = i++;
      larrItem[kCampones] = fSetItem ("Camponeses", 'Pessoas', qtd=1000, vlr=2, agio=15, "PESSOA" );

      kSoldados = i++;
      larrItem[kSoldados] = fSetItem ("Soldados", 'Pessoas', qtd=800, vlr=3, agio=25, "PESSOA" );

      kArmas = i++;
      larrItem[kArmas] = fSetItem ("Armas", 'Unidades', qtd=500, vlr=15, agio=25, "PRODUTO" );

      kColheita = i++;
      larrItem[kColheita] = fSetItem ("Colheita", 'Hectares', qtd=4, vlr=15, agio=25, "PRODUTO" );

      kPecuaria = i++;
      larrItem[kPecuaria] = fSetItem ("Pecuaria", 'Hectares', qtd=1, vlr=15, agio=25, "PRODUTO" );

      return larrItem ;
      
   }

   function fDefinePrecos(arrItem) {

      /* para saber como foram obtidos os valores, 
      consulte o arquivo obtendo-valores.txt 
      com todo o registro da pesquisa.
      */

      arrItem[kFerro   ].decValor = 4.4;
      arrItem[kTerra   ].decValor = 1.6;
      arrItem[kPessoas ].decValor = 1.535;
      arrItem[kMadeira ].decValor = 3.33;
      //arrItem[kCampones].decValor = ;
      arrItem[kSoldados].decValor = 60;
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