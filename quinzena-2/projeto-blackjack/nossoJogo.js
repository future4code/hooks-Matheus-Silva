console.log("Boas vindas ao jogo de Blackjack!")
if(confirm("Quer iniciar uma nova rodada?")) {
   // iniciar rodada
   const carta1Jogador1 = comprarCarta()
   const carta1Jogador2 = comprarCarta()
   const carta2Jogador1 = comprarCarta()
   const carta2Jogador2 = comprarCarta()   
   pontuacaoJogador1 = carta1Jogador1.valor + carta2Jogador1.valor
   pontuacaoJogador2 = carta1Jogador2.valor + carta2Jogador2.valor

   console.log(`Usuário - cartas: ${carta1Jogador1.texto} ${carta2Jogador1.texto}  - pontuação ${pontuacaoJogador1}`)
   console.log(`Computador - cartas: ${carta1Jogador2.texto} ${carta2Jogador2.texto}  - pontuação ${pontuacaoJogador2}`)
   if (pontuacaoJogador1 > pontuacaoJogador2) {
      console.log("O usuário ganhou!")
   } else if (pontuacaoJogador1 < pontuacaoJogador2) {
      console.log("O computador ganhou!")
   } else {
      console.log("Empate!")
   }

} else {
   console.log("O jogo acabou")
}
