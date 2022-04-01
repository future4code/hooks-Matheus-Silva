```javascript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  nroDeOccorencias = arrayDeNumeros.filter((valor) => (valor === numeroEscolhido)).length;
  if (nroDeOccorencias === 0) {
    return "Número não encontrado"
  }
  else {
    return `O número ${numeroEscolhido} aparece ${nroDeOccorencias}x`
  }
}
```