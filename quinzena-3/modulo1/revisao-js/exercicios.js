// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  reversed_array = [];
  array.forEach(element => {
      reversed_array.unshift(element)
  })
  return reversed_array  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    
    const divideArray = array => {
        if (array.length <= 1) {
            return array
        }

        const mediana = Math.floor(array.length / 2)

        const esquerda = array.slice(0, mediana);
        const direita = array.slice(mediana);

        return ordenaArray(divideArray(esquerda), divideArray(direita))

    }

    const ordenaArray = (esquerda, direita) => {

    let arrayOrdenado = [], indexEsquerda = 0, indexDireita = 0; 
    while (indexEsquerda < esquerda.length && indexDireita < direita.length) {
        if (esquerda[indexEsquerda] < direita[indexDireita]) {
            arrayOrdenado.push(esquerda[indexEsquerda]);
            indexEsquerda++
        } else {
            arrayOrdenado.push(direita[indexDireita]);
            indexDireita++
        }
    }

    return arrayOrdenado.concat(esquerda.slice(indexEsquerda)).concat(direita.slice(indexDireita))

    }   

    return divideArray(array)
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const pares = []
    array.forEach(element => {
        if (element % 2 === 0) {
            pares.push(element)
        }   
    })
    return pares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const paresElevados = []
    array.forEach(element => {
        if (element % 2 === 0) {
            paresElevados.push(element ** 2)
        }
    }) 
    return paresElevados
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return Math.max(...array)
 
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}