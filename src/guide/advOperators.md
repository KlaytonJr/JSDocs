---
title: Operadores Avançados
icon: check
---

# Operadores Avançados

## Sugar Syntax

É o nome dado aos operadores avançados que funcionam como simplificações de tarefas mais complexas. 

## Operadores

Os operadores `++` e `--` são operadores de incremento e decremento, respectivamente, em JavaScript. Eles são usados para aumentar ou diminuir o valor de uma variável numérica.

### **1. Uso de `++` (Incremento):**

- **Antes da Variável (`++x`):**
  - Incrementa o valor da variável antes de ser usado na expressão.
  - Conhecido como pré-incremento.

  ```javascript
  let x = 5;
  let y = ++x; // x é incrementado antes de ser atribuído a y
  // x agora é 6, y é 6
  ```

- **Depois da Variável (`x++`):**
  - Usa o valor atual da variável na expressão e, em seguida, incrementa.
  - Conhecido como pós-incremento.

  ```javascript
  let x = 5;
  let y = x++; // x é atribuído a y antes de ser incrementado
  // x agora é 6, y é 5
  ```

### **2. Uso de `--` (Decremento):**

- **Antes da Variável (`--x`):**
  - Decrementa o valor da variável antes de ser usado na expressão.
  - Conhecido como pré-decremento.

  ```javascript
  let x = 5;
  let y = --x; // x é decrementado antes de ser atribuído a y
  // x agora é 4, y é 4
  ```

- **Depois da Variável (`x--`):**
  - Usa o valor atual da variável na expressão e, em seguida, decrementa.
  - Conhecido como pós-decremento.

  ```javascript
  let x = 5;
  let y = x--; // x é atribuído a y antes de ser decrementado
  // x agora é 4, y é 5
  ```

### **Observações Importantes:**

- O comportamento do pré-incremento/decremento e pós-incremento/decremento é uma distinção sutil, mas pode ter impacto em expressões complexas.
- O uso adequado depende dos requisitos específicos da lógica de programação.
- É importante entender que, em expressões mais complexas, o resultado pode variar dependendo do momento do incremento ou decremento.

Em resumo, `++` e `--` são operadores úteis para incrementar ou decrementar variáveis numéricas em JavaScript. A escolha entre pré-incremento/decremento e pós-incremento/decremento depende das necessidades específicas da lógica de programação em questão.

### Usando para simplificação

Operação: Aumentar o valor da variável em 1.

Temos diferentes opções para conseguir a mesma coisa. Exceto o primeiro exemplo, os outros dois são exemplos de sugar syntax, no qual são aplicados operadores que são criados para simplificar a tarefa com muito menos código.

```javascript
let num = 10
console.log(num)

// aumentar o valor em 1
num = num + 1
console.log(num)

// primeira simplificação
num += 1
console.log(num)

// ou então
num++
console.log(num)
```

### Operadores ternários

É uma simplificação da estrutura condicional if...else. É uma condicional que consiste de três partes: 
  - a condição, 
  - o caso de execução se for verdadeira, 
  - e o caso else, se não for verdadeira.

Temos uma estrutura condicional padrão como essa: 

```javascript
let temperatura = 31

if (temperatura > 30) {
    alert("Dia quente!")
} else {
    alert("Dia agradável")
}
```

Então seguindo a sintaxe do operador ternário `condição ? caso1 : caso2` podemos fazer a mesma coisa com o condicional apenas com:

```javascript
let temperatura = 31

temperatura > 30 ? alert("Dia quente!") : alert("Dia agradável")
```

A condição executa true ou false.

No caso 1, a instrução a ser executada é escrita se a condição for verdadeira, e no caso 2 se for falsa. 

### Operador lógico AND (&&)

É uma redução de um condicional que tenta executar (ou retornar) algo somente se a condição for verdadeira, reduz um if simples com um único bloco de execução:

```javascript
const carrinho = []

// como já conhecemos
if (carrinho.length === 0) {
    console.log("O carrinho está vazio!")
}

// com operador AND
carrinho.length === 0 && console.log("O carrinho está vazio!")
```

### Operador lógico OR (||)

OR ( || ) é sintaticamente semelhante ao anterior, com a diferença de que consiste de dois operandos e não de uma condição explícita: operando1 || operando2. 

Se não for falsy (se for diferente de 0, null, undefined, NAN, false, ou string vazio), o operador OR ( || ) retorna operador1. 
Caso contrário, retorna operador2.

```javascript
console.log(0 || "Falsy")  // Falsy
console.log(40 || "Falsy")  // 40
console.log(null || "Falsy")  // Falsy
console.log(undefined || "Falsy")  // Falsy
console.log("Olá Mundo" || "Falsy") // Olá Mundo
console.log("" || "Falsy")  // Falsy
console.log(NaN || "Falsy")  // Falsy
console.log(true || "Falsy")  // true
console.log(false || "Falsy")  // Falsy
```

- Exemplo de uso:
```javascript
const usuario1 = {
    nome: "Maria",
    idade: 16
}

const usuario2 = null

console.log(usuario1 || "O usuário não existe")
// { nome: 'Maria', idade: 16 }

console.log(usuario2 || "O usuário não existe")
// O usuário não existe
```

Podemos usar a estrutura lógica OR para facilitar a inicialização de dados, como por exemplo:

- Exemplo sem OR
```javascript
let carrinho
const carrinhoAnterior = ['mouse', 'teclado', 'monitor']
if (carrinhoAnterior) {
    carrinho = carrinhoAnterior
} else {
    carrinho = []
}
console.log(carrinho)
```

- Exemplo com OR
```javascript
const carrinhoAnterior = ['mouse', 'teclado', 'monitor']
let carrinho = carrinhoAnterior || []
console.log(carrinho)
```

### Operador Nullish Coalescing

O Operador Nullish Coalescing (??) funciona da mesma forma que o Operador OR ( || ), a diferença é que admite mais valores como 'verdadeiros'. 

Neste caso, apenas obtemos Nullish em dois casos:

```javascript
console.log(0 ?? "Nullish")  // 0
console.log(40 ?? "Nullish")  // 40
console.log(null ?? "Nullish")  // Nullish
console.log(undefined ?? "Nullish")  // Nullish
console.log("Olá Mundo" ?? "Nullish")  // Olá Mundo
console.log("" ?? "Nullish")  // ""
console.log(NaN ?? "Nullish")  // NaN
console.log(true ?? "Nullish")  // true
console.log(false ?? "Nullish")  // false
```

### Comparação do || x ??

<!-- | Elemento       | `||` (Falsy) | `??` (Nullish) |
|----------------|--------------|----------------|
| 0              | ✅            | ❌              |
| 40             | ❌            | ❌              |
| null           | ✅            | ✅              |
| undefined      | ✅            | ✅              |
| "Olá Mundo"    | ❌            | ❌              |
| ""             | ✅            | ❌              |
| NaN            | ✅            | ❌              |
| true           | ❌            | ❌              |
| false          | ✅            | ❌              | -->

<table>
  <thead>
    <tr>
      <th>Elemento</th>
      <th>|| (Falsy)</th>
      <th>?? (Nullish)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td>✅</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>40</td>
      <td>❌</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>null</td>
      <td>✅</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>undefined</td>
      <td>✅</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>"Olá Mundo"</td>
      <td>❌</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>""</td>
      <td>✅</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>NaN</td>
      <td>✅</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>true</td>
      <td>❌</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>false</td>
      <td>✅</td>
      <td>❌</td>
    </tr>
  </tbody>
</table>

## Acesso condicional

### Acesso condiconal a um objeto

Se tentarmos acessar um objeto que não existe naturalmente, vamos ter um erro. Mas, se usarmos o operador ? sobre a referência de um objeto para condicionar seu acesso, podemos ter um melhor controle de erros na execução:

```javascript
const usuario = null

console.log(usuario.nome || "O usuário não existe")
// Erro: "Não é possível ler as propriedades de NULL"

console.log(usuario?.nome || "O usuário não existe")
// "O usuário não existe"
```

Também pode ser aplicado sobre propriedades que sejam objetos para avaliar sua existência/validade e controlar os fluxos do programa:

```javascript
let usuario = {
    nome: "Maria",
    idade: 16,
    cursos: {
        javascript: "aprovado"
    }
}

console.log(usuario?.cursos?.javascript || "A propriedade não existe")
// "aprovado"

console.log(usuario?.trabalhos?.coderhouse || "A propriedade não existe")
// "A propriedade não existe"
```

## Desestruturação

A desestruturação é uma característica poderosa em JavaScript que permite extrair valores de arrays ou propriedades de objetos de maneira concisa. Ela facilita a manipulação de dados e a atribuição de valores a variáveis. Vamos explorar a desestruturação em relação a arrays e objetos.

Declaramos variáveis e armazenamos nelas os valores das propriedades. Fazemos isso para trabalhar com **imutabilidade**, ou seja, usar esses valores sem o risco de alterar as propriedades do objeto.

Entretanto, podemos usar a desestruturação para simplificar e agilizar esse processo. Em que consiste? É uma técnica que permite declarar variáveis ​​onde se pode armazenar propriedades de um objeto de forma rápida e direta.

### Alias

Para que a desestruturação funcione, deve haver correspondência com os nomes das propriedades do objeto.

No entanto, às vezes, os nomes das propriedades podem não ser muito descritivos para o uso que queremos dar a elas, portanto, podemos desestruturá-las com um alias, ou seja, declarar a variável com um nome alternativo após ter desestruturado o objeto.

Fazemos isso simplesmente com o operador : após o nome da propriedade.

```javascript
const item = {
    item_id: 432,
    product_name: "Some product",
    price_per_unit: 5600
}

const {
    item_id: id,
    product_name: nome,
    price_per_unit: preco
} = item

console.log(id) // 432
console.log(nome) // "Some product"
console.log(preco) // 5600
```

### **Desestruturação com Arrays:**

#### **Explicação:**
A desestruturação de arrays permite extrair valores com base na posição deles no array. Isso é feito atribuindo os valores a variáveis correspondentes.

#### **Exemplo:**
```javascript
// Sem desestruturação
const numeros = [1, 2, 3];
const primeiro = numeros[0];
const segundo = numeros[1];

// Com desestruturação
const [primeiro, segundo] = numeros;
console.log(primeiro, segundo); // Saída: 1 2
```

### **Desestruturação com Objetos:**

#### **Explicação:**
A desestruturação de objetos permite extrair valores com base no nome das propriedades do objeto. As variáveis são atribuídas aos valores correspondentes.

#### **Exemplo:**
```javascript
// Sem desestruturação
const pessoa = { nome: 'Alice', idade: 25 };
const nome = pessoa.nome;
const idade = pessoa.idade;

// Com desestruturação
const { nome, idade } = pessoa;
console.log(nome, idade); // Saída: Alice 25
```

### **Desestruturação em Parâmetros de Função:**

#### **Explicação:**
A desestruturação pode ser usada diretamente nos parâmetros de uma função, facilitando a extração de valores de objetos ou arrays.

#### **Exemplo:**
```javascript
// Sem desestruturação
function imprimeNome(pessoa) {
  console.log(pessoa.nome);
}

// Com desestruturação
function imprimeNome({ nome }) {
  console.log(nome);
}

const pessoa = { nome: 'Bob', idade: 30 };
imprimeNome(pessoa); // Saída: Bob
```

### **Desestruturação com Valores Padrão:**

#### **Explicação:**
Valores padrão podem ser definidos para variáveis durante a desestruturação, fornecendo um valor caso a propriedade ou elemento não esteja presente.

#### **Exemplo:**
```javascript
// Com valores padrão
const { nome = 'Desconhecido', idade = 0 } = pessoa;
console.log(nome, idade); // Saída: Alice 25 (se a propriedade existir) ou Desconhecido 0 (se não existir)
```

A desestruturação é uma técnica poderosa que melhora a legibilidade e a concisão do código, especialmente ao lidar com dados complexos em JavaScript. Ela é amplamente utilizada em muitos contextos, como extração de propriedades de objetos e valores de arrays, tornando o código mais expressivo e fácil de entender.

## Spread

O operador de spread (`...`) em JavaScript é usado para espalhar elementos de arrays ou propriedades de objetos. Ele permite a criação de cópias ou combinações de dados de maneira mais concisa. Vamos explorar a teoria e exemplos de uso do spread em arrays e objetos.

### **Spread em Arrays:**

#### **Explicação:**
O spread em arrays é utilizado para espalhar os elementos de um array em outro array, facilitando a cópia ou a combinação de arrays.

#### **Exemplo:**
```javascript
// Cópia de arrays
const original = [1, 2, 3];
const copia = [...original];

// Combinação de arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinado = [...array1, ...array2];

console.log(copia);      // Saída: [1, 2, 3]
console.log(combinado);  // Saída: [1, 2, 3, 4, 5, 6]
```

### **Spread em Objetos:**

#### **Explicação:**
O spread em objetos é utilizado para espalhar as propriedades de um objeto em outro objeto, tornando a criação de cópias ou combinações de objetos mais eficiente.

#### **Exemplo:**
```javascript
// Cópia de objetos
const original = { nome: 'Alice', idade: 25 };
const copia = { ...original };

// Combinação de objetos
const objeto1 = { nome: 'Bob' };
const objeto2 = { idade: 30 };
const combinado = { ...objeto1, ...objeto2 };

console.log(copia);      // Saída: { nome: 'Alice', idade: 25 }
console.log(combinado);  // Saída: { nome: 'Bob', idade: 30 }
```

### **Uso em Funções:**

#### **Explicação:**
O spread pode ser usado para passar dinamicamente os elementos de um array como argumentos para uma função.

#### **Exemplo:**
```javascript
function soma(a, b, c) {
  return a + b + c;
}

const valores = [1, 2, 3];
const resultado = soma(...valores);

console.log(resultado);  // Saída: 6
```

### **Spread com Valores Adicionais:**

#### **Explicação:**
O spread pode ser usado para criar novos arrays ou objetos com valores adicionais.

#### **Exemplo:**
```javascript
const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4, 5];

const originalObjeto = { nome: 'Alice', idade: 25 };
const novoObjeto = { ...originalObjeto, cidade: 'Exemplo' };

console.log(newArray);   // Saída: [1, 2, 3, 4, 5]
console.log(novoObjeto); // Saída: { nome: 'Alice', idade: 25, cidade: 'Exemplo' }
```

### **Rest Parameters:**

#### **Explicação:**
O operador spread também pode ser usado dentro da declaração de uma função para indicar que queremos receber uma quantidade indeterminada de parâmetros.

Vamos supor que eu queira ter uma função para somar qualquer quantidade de números recebidos por parâmetro.

Eu posso fazer isso com o operador spread definindo rest parameters, o que significa que minha função vai receber uma quantidade indeterminada de parâmetros, mas vai agrupá-los dentro de um array com o nome que for definido.

Vemos que, com essa sintaxe, o parâmetro ...números é definido como um array onde são armazenados todos os argumentos enviados que correspondam a essa posição.

Desta forma, podemos escrever funções que recebam múltiplos parâmetros, sem saber com precisão quantos serão, podendo trabalhá-los posteriormente como um array dentro da função.

#### **Exemplo:**
```javascript
function somar(...numeros) {
    console.log(numeros)
}

somar(4, 2) // [ 4, 2 ]
somar(10, 15, 30, 5) // [ 10, 15, 30, 5 ]
```

#### **Exemplo 2:**
```javascript
function somar(...numeros) {
    return numeros.reduce((acc, n) => acc + n, 0)
}

console.log(somar(4, 2)) // 6
console.log(somar(10, 15, 30, 5)) // 60
console.log(somar(100, 300, 50)) // 450
```

O operador de spread é uma ferramenta poderosa para manipulação de dados em JavaScript, tornando mais fácil e legível a criação de cópias, combinações e manipulação de arrays e objetos. Ele é amplamente utilizado em situações onde é necessário espalhar ou reunir elementos de maneira eficiente.