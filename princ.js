
fTelaExibe ("ABERTURA");

for (gAnocorrente=1; gAnocorrente <= kTotalAnos; gAnocorrente++) {
   garrItem = fCarregaItens();
   garrItem = fDefinePrecos (garrItem);
   
   fTelaExibe ("INICIO-DO-ANO", gAnocorrente);

   fTelaExibe ("PAINEL", garrItem);


};

kObj.nome = 'rafael';
fTelaImprime (kObj);
kObj.sobrenome = 'reis';
fTelaImprime (kObj);
kObj.sobrenome = 'moreira';
fTelaImprime (kObj);

