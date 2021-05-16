function fTelaExibe (...lArrParams) {
   let lsTexto = '';

   switch (lArrParams[0]) {
      case "ABERTURA": 
         lsTexto = 'Bem-vido ao reinado de Sumer, Vossa Majestade. ' +
            'Estamos ao seu dispor para que o reinado seja longo e próspero';         
         break;
      
      case "INICIO-DO-ANO":
         lsTexto = `Vamos começar o ano ${lArrParams[1]}. Vou listar as posses do reino.`;
         break;
      
      case "PAINEL":
         lsTexto = lArrParams[1] ;
         break;

      Default:
         lsTexto = "fTelaExibe - Nao Cadastrada: " + lArrParams[0];
         break;
      
   }

   fTelaImprime (lsTexto);
};

function fTelaImprime (sTexto) {
   console.log (sTexto);
};
