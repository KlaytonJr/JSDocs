---
title: Funções de ordem superior
icon: check
---

# Funções de ordem superior

## Abstração
Para iniciarmos vou trazer um conceito muito importante de **abstração**.

Suponhamos que temos o seguinte código:

```javascript
let total = 0

for (let i = 1; i <= 10; i++) {
    total += i
}

console.log(total)  //  55
```

Podemos colocar esse código em uma função resultando no seguinte trecho de código:

```javascript
function somarConjunto(inicio, fim) {
    let total = 0
    
    for (let i = inicio; i <= fim; i++) {
        total += i
    }
    
    console.log(total)  //  55
}
```

Abstraindo o código para uma função, o uso dela fica muito mais simples, precisando chamar uma única linha para referir-se ao código. Como mostrado no exemplo abaixo:

```javascript
console.log(somarConjunto(1, 10)) //  55
```

Resumimos um grupo complexo de instruções em uma palavra-chave (função) que especifica qual é a ação executada por ela.  

As abstrações ocultam detalhes sobre a operação a ser resolvida e nos permitem “falar” sobre os problemas em um nível mais alto (ou com um maior grau de abstração).

Como desenvolvedores(as), estamos constantemente criando funções e abstrações para podermos pensar em um nível mais alto e construir soluções complexas para os problemas que encontramos. 

No JS, existem muitos métodos nativos incorporados que, assim como as abstrações, nos oferecem soluções para problemas recorrentes; além de podermos declarar nossos próprios métodos.

## Definição

Funções de ordem superior (em inglês Higher order functions) são aquelas que retornam ou recebem uma função por parâmetro. 

Esse tipo de função nos permite abstrair não só valores, mas também ações.

## Retorno de funções

Podemos ter uma função que retorna outra função, o que nos permitiria criar funções com um esquema superior.

- Exemplo 1:

```javascript
function maiorQue(n) {
    return (m) => m > n
}

let maiorQueDez = maiorQue(10)
// let maiorQueDez = (m) => m > 10

console.log(maiorQueDez(12))  //  true
console.log(maiorQueDez(8))  //  false
```

-> Quando fazemos o seguinte código, podemos perceber que a função `maiorQue` vai ser encarregada de retornar uma função que compara se o número recebido como parâmetro é maior do que o passado como paramêtro para ela.

- Exemplo 2:

```javascript
function atribuirOperacao(op) {
    if (op == "somar") {
        return (a, b) => a + b
    } else if (op == "subtrair") {
        return (a, b) => a - b
    }
}

let soma = atribuirOperacao("somar")
let subtracao = atribuirOperacao("subtrair")

console.log(soma(4, 6))  //  10
console.log(subtracao(5, 3))  //  2
```

-> Nesse exemplo, podemos ver que a função inicial vai receber uma string com a operação no início e retornar uma função referente a operação.

## Retronando funções por parâmetros

Significa escrever funções que possam receber outras funções por parâmetro.

```javascript
function porCadaUm(array, funcao) {
    for (const item of array) {
        funcao(item);
    }
}
const numeros = [1, 2, 3, 4];
porCadaUm(numeros, console.log);
```

-> Nesse exemplo, quando a função `porCadaUm` chamar o argumento `funcao`, ele irá executar a função que foi passada nos parâmetros na hora da chamada da função.

#### Atribuindo função criada

```javascript
let total = 0;
const numeros = [1, 2, 3, 4];

function porCadaUm(array, funcao) {
    for (const item of array) {
        funcao(item);
    }
}

function acumular(num) {
    total += num
}

porCadaUm(numeros, acumular)
console.log(total) // 10
```

-> Nesse exemplo, ao invés de retornar um console.log que já é uma função nativa, ele está retornando uma função criada no próprio código.

#### Usando arrow function

```javascript
const quadrados = []
const numeros = [1, 2, 3, 4];

function porCadaUm(array, funcao) {
    for (const item of array) {
        funcao(item);
    }
}

porCadaUm(numeros, (o) => {
    quadrados.push(o * 2)
})

console.log(quadrados) // [2, 4, 6, 8]
```

-> Nesse exemplo, ao invés de referenciar uma função nos parâmetros, ele está construindo uma arrow function diretamente nos parâmetros, que fará o mesmo efeito e executará corretamente.

É comum definir a função diretamente sobre o parâmetro como uma função anônima, aproveitando a sintaxe de arrow function (função seta). Isso permite definir ações mais dinâmicas.

## Métodos de busca e transformação

### Métodos de Busca:
1. **`forEach`:**
   - **Descrição:** Itera sobre os elementos de um array e executa uma função para cada elemento.
   - **Exemplo:**
     ```javascript
     array.forEach(function(elemento) {
       // Código para cada elemento
     });
     ```
   - **Exemplo prático:**
     ```javascript
     const numeros = [1, 2, 3, 4, 5, 6]

     numeros.forEach((num) => {
        console.log(num)
     })

     // 1
     // 2
     // 3
     // 4
     // 5
     // 6
     ```

2. **`find`:**
   - **Descrição:** Retorna o primeiro elemento do array que satisfaça uma condição especificada.
   - **Exemplo:**
     ```javascript
     const cursos = [
        { nome: 'Javascript', preco: 15000 },
        { nome: 'ReactJS', preco: 22000 },
     ]

     const resultado = cursos.find((o) => o.nome === "ReactJS")
     const resultado2 = cursos.find((o) => o.nome === "Python")

     console.log(resultado) // {nome: 'ReactJS', preco: 22000}
     console.log(resultado2) // undefined
     ```
   - **Exemplo prático:**
     ```javascript
     let encontrado = array.find(function(elemento) {
       return elemento > 5;
     });
     ```

3. **`filter`:**
   - **Descrição:** Cria um novo array com todos os elementos que passam por um teste especificado.
   - **Exemplo:**
     ```javascript
     let filtrado = array.filter(function(elemento) {
       return elemento % 2 === 0;
     });
     ```
   - **Exemplo prático:**
     ```javascript
     const cursos = [
        { nome: "JavaScript", preco: 15000 },
        { nome: "ReactJS", preco: 22000 },
        { nome: "AngularJS", preco: 22000 },
        { nome: "Dev Web", preco: 16000 },
     ]

     const resultado = cursos.filter((o) => o.nome.includes("JS"))
     const resultado2 = cursos.filter((o) => o.preco < 14000)

     console.log(resultado)
     //[{nome: "ReactJS", preco: 22000},
     //{nome: "AngularJS", preco: 22000}]

     console.log(resultado2) // []
     ```

4. **`some`:**
   - **Descrição:** Verifica se pelo menos um elemento do array satisfaz uma condição.
   - **Exemplo:**
     ```javascript
     let algumMaiorQueDez = array.some(function(elemento) {
       return elemento > 10;
     });
     ```
   - **Exemplo prático:**
     ```javascript
     const cursos = [
        { nome: "JavaScript", preco: 15000 },
        { nome: "ReactJS", preco: 22000 },
        { nome: "AngularJS", preco: 22000 },
        { nome: "Dev Web", preco: 16000 },
     ];

     console.log(cursos.some((o) => o.nome == "Dev Web")) // true
     console.log(cursos.some((o) => o.nome == "VueJS")) // false
     ```

### Métodos de Transformação:
1. **`map`:**
   - **Descrição:** Cria um novo array com os resultados de chamar uma função para cada elemento.
   - **Exemplo:**
     ```javascript
     let mapeado = array.map(function(elemento) {
       return elemento * 2;
     });
     ```
   - **Exemplo prático:**
     ```javascript
     const cursos = [
        { nome: "JavaScript", preco: 15000 },
        { nome: "ReactJS", preco: 22000 },
        { nome: "AngularJS", preco: 22000 },
        { nome: "Dev Web", preco: 16000 },
     ];

     const atualizado = cursos.map((o) => {
        return {
            nome: o.nome,
            preco: o.preco * 1.25
        }
     })

     console.log(atualizado)
     /* [
        { nome: 'JavaScript', preco: 18750 },
        { nome: 'ReactJS', preco: 27500 },
        { nome: 'AngularJS', preco: 27500 },
        { nome: 'Dev Web', preco: 20000 }
     ] */
     ```

2. **`reduce`:**
   - **Descrição:** Executa uma função redutora (fornecida por você) para cada elemento do array, resultando em um único valor acumulado.
   - **Exemplo:**
     ```javascript
     let somatorio = array.reduce(function(acumulador, elemento) {
       return acumulador + elemento;
     }, 0);
     ```
   - **Exemplo prático:**
     ```javascript
     const minhaCompra = [
        { nome: 'Dev Web', preco: 20000 },
        { nome: 'JavaScript', preco: 18750 },
        { nome: 'ReactJS', preco: 27500 }
     ]

     const total = minhaCompra.reduce((soma, o) => soma + o.preco, 0)
     console.log(total) // 66250
     ```

3. **`sort`:**
   - **Descrição:** Ordena os elementos de um array com base em uma função de comparação.
   - **Exemplo:**
     ```javascript
     let ordenado = array.sort(function(a, b) {
       return a - b;
     });
     ```
   - **Exemplo prático:**
     ```javascript
     const numeros = [40, 1, 5, 200];

     var crescente = numeros.sort((a, b) => a - b);
     console.log(crescente)// [ 1, 5, 40, 200 ]

     var decrescente = numeros.sort((a, b) => b - a);
     console.log(decrescente) // [ 200, 40, 5, 1 ]
     ```
    > Cuidado! Esse método é destrutivo, ou seja, modifica o array sobre o qual é chamado. 

Estes métodos são essenciais para realizar operações comuns em arrays, proporcionando uma forma mais expressiva e funcional de manipular dados em JavaScript.