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
    let maiorNumero = Math.max(num1, num2)
    let menorNumero;
    if (maiorNumero === num1) {
        menorNumero = num2
    } else {
        menorNumero = num1
    }
    maiorDivisivelPorMenor = maiorNumero % menorNumero === 0 ? true : false;
    let diferenca = maiorNumero - menorNumero;

    return {maiorNumero, maiorDivisivelPorMenor, diferenca}

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const primeirosPares = []
    let count = 0
    while (n > 0) {
        primeirosPares.push(count)
        count += 2;
        n--;
    }
    
    return primeirosPares

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB || ladoB === ladoC) {
        if (ladoA === ladoC) {
            return "Equilátero"
        } else {
            return "Isósceles"
        } 
    } else if (ladoA === ladoC) {
        return "Isósceles"
    } else {
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    if (array.length < 2) {
        return null
    } else if (array.length === 2) {
        return array.sort()
    }

    const uniqArray = []

    array.sort((a, b) => a - b).reverse().forEach(element => {
        if (!uniqArray.includes(element)) {
            uniqArray.push(element)
        }
    })

    const secondElements = []
    for (let i=0; i < uniqArray.length; i++) {
        if (i == 1 || i == uniqArray.length - 2) {
            secondElements.push(uniqArray[i])
        }
    }
    return secondElements

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let elenco = filme.atores.join(", ")
    console.log(elenco)
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${elenco}.`

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const anon = {...pessoa, nome: "ANÔNIMO"}
    return anon
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const allowedCrew = pessoas.filter(pessoa => pessoa.altura >= 1.5 && 60 > pessoa.idade && pessoa.idade > 14)
   return allowedCrew
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const disallowedCrew = pessoas.filter(pessoa => !(pessoa.altura >= 1.5 && 60 > pessoa.idade && pessoa.idade > 14))
    return disallowedCrew
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for (let i = 0; i < contas.length; i++) {
        let totalValue = 0 
        contas[i].compras.forEach(value => {
            totalValue += value
        })
        
        contas[i].saldoTotal -= totalValue
        while( typeof (j = contas[i].compras.shift()) !== 'undefined' ) {
            continue
        }
    }
    return contas

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}