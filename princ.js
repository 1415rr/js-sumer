
fTelaExibe ("ABERTURA");

for (gAnocorrente=1; gAnocorrente <= kTotalAnos; gAnocorrente++) {
   garrItem = fCarregaItens();
   garrItem = fDefinePrecos (garrItem);
   
   fTelaExibe ("INICIO-DO-ANO", gAnocorrente);

   fTelaExibe ("PAINEL", garrItem);



;}
