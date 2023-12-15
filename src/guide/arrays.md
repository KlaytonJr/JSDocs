---
title: Arrays
icon: check
---

# Arrays

### 1. **Introdução aos Arrays:**
- Um array em JavaScript é uma estrutura de dados que armazena uma coleção ordenada de elementos. Cada elemento é identificado por um índice.

```javascript
let frutas = ['maçã', 'banana', 'laranja'];
```

#### Tabela Representando o Array:

| Índice |  0      |  1      |  2      |
|--------|---------|---------|---------|
| Elemento| 'maçã'  |'banana' |'laranja'|

### 2. **Acesso e Modificação de Elementos:**
- Os elementos de um array podem ser acessados e modificados usando índices.

```javascript
console.log(frutas[0]); // Saída: maçã
frutas[1] = 'morango';
console.log(frutas); // Saída: ['maçã', 'morango', 'laranja']
```

#### Tabela Representando o Array:

| Índice |  0      |  1      |  2      |
|--------|---------|---------|---------|
| Elemento| 'maçã'  |'morango' |'laranja'|

### 3. **Funções Importantes para Manipulação de Arrays:**

#### a. **`length`:**

Em JavaScript, a propriedade `length` de um array indica o número de elementos presentes no array. Essa propriedade fornece uma forma rápida e conveniente de determinar o tamanho ou comprimento de um array.

```javascript
console.log(frutas.length); // Saída: 3
```

Neste caso, a saída será `3` porque o array `frutas` possui três elementos: 'maçã', 'morango' e 'laranja'.

### Observações Importantes:

1. **Índices do Array:**
   - Os índices de um array começam em 0 e vão até `length - 1`. No exemplo, os índices válidos são 0, 1 e 2.

2. **Atualização Dinâmica:**
   - O `length` de um array é dinâmico, o que significa que ele pode ser alterado durante a execução do programa. Você pode adicionar ou remover elementos do array, afetando seu comprimento.

```javascript
frutas.push('uva'); // Adiciona 'uva' ao final do array
console.log(frutas.length); // Agora a saída será 4
```

3. **Propriedade Somente Leitura:**
   - Embora você possa acessar a propriedade `length`, ela é somente leitura. Tentar atribuir um novo valor diretamente a `length` não terá efeito real na quantidade de elementos no array.

```javascript
frutas.length = 10; // Isso não adicionará elementos ao array
console.log(frutas.length); // Continua sendo o número de elementos presentes (agora 4)
```

A propriedade `length` é uma ferramenta útil para iterar sobre todos os elementos de um array, especialmente quando você não conhece a quantidade exata de elementos antecipadamente.

#### b. **`push` e `pop`:**
- Adiciona e remove elementos no final do array. O pop retorna o valor excluído.

```javascript
frutas.push('uva'); // Adiciona 'uva' no final
frutas.pop(); // Remove o último elemento ('uva')
```

#### Tabela Representando o Array após o push:

| Índice |  0      |  1      |  2      |  3      |
|--------|---------|---------|---------|---------|
| Elemento| 'maçã' | 'morango' | 'laranja' | 'uva' |

#### Tabela Representando o Array após o pop:

| Índice |  0      |  1      |  2      |
|--------|---------|---------|---------|
| Elemento| 'maçã' | 'morango' | 'laranja' |

#### c. **`unshift` e `shift`:**
- Adiciona e remove elementos no início do array. O shift retorna o valor excluído.

```javascript
frutas.unshift('abacaxi'); // Adiciona 'abacaxi' no início
frutas.shift(); // Remove o primeiro elemento ('abacaxi')
```

#### Tabela Representando o Array após o unshift:

| Índice |  0      |  1      |  2      |  3      |
|--------|---------|---------|---------|---------|
| Elemento| 'abacaxi' | 'maçã' | 'morango' | 'laranja'|

#### Tabela Representando o Array após o shift:

| Índice  |  0     |  1        |  2        |
|---------|--------|-----------|-----------|
| Elemento| 'maçã' | 'morango' | 'laranja' |


#### d. **`splice`:**
- Adiciona, remove ou substitui elementos em posições específicas. Retorna o valor excluído.

```javascript
frutas.splice(1, 1, 'pêra', 'kiwi'); // Remove 1 elemento a partir da posição 1 e adiciona 'pêra' e 'kiwi'
```

#### Tabela Representando o Array após o splice:

| Índice  |  0     |  1     |  2     |  3        |
|---------|--------|--------|--------|-----------|
| Elemento| 'maçã' | 'pêra' | 'kiwi' | 'laranja' |

#### e. **`concat`:**
- Combina dois ou mais arrays, criando um novo array.

```javascript
let frutas2 = ['abacate', 'manga'];
let todasFrutas = frutas.concat(frutas2);
```

#### Tabela Representando o Array após o concat:

| Índice |  0      |  1      |  2      |  3      |  4      |  5      |
|--------|---------|---------|---------|---------|---------|---------|
| Elemento| 'maçã' | 'pêra' | 'kiwi' | 'laranja' | 'abacate' | 'manga' |

#### f. **`slice`:**
- Retorna uma parte do array, sem modificar o array original.

```javascript
let parteFrutas = frutas.slice(1, 3); // Retorna os elementos na posição 1 e 2
```

#### Tabela Representando o Array retornado no slice:

| Índice  |  0     |  1     |
|---------|--------|--------|
| Elemento| 'pêra' | 'kiwi' |

#### g. **`join`:**
- O método join cria e retorna uma string concatenando todos os elementos de um array, separados por um separador especificado.

```javascript
let frutas = ['maçã', 'banana', 'laranja'];
let resultado = frutas.join(', '); // 'maçã, banana, laranja'
```

#### h. **`indexOf`:**
- O método indexOf retorna o primeiro índice no qual um elemento específico é encontrado no array. Se o elemento não estiver presente, retorna -1.

```javascript
let frutas = ['maçã', 'banana', 'laranja'];
let indiceBanana = frutas.indexOf('banana'); // 1
let indiceUva = frutas.indexOf('uva'); // -1
```

#### i. **`reverse`:**
- O método reverse inverte a ordem dos elementos em um array. Modifica o array original.

```javascript
let frutas = ['maçã', 'banana', 'laranja'];
frutas.reverse(); // ['laranja', 'banana', 'maçã']
```

#### j. **`includes`:**
- O método includes verifica se um array contém um determinado elemento e retorna true ou false com base na presença do elemento.

```javascript
let frutas = ['maçã', 'banana', 'laranja'];
let temBanana = frutas.includes('banana'); // true
let temUva = frutas.includes('uva'); // false
```

### 4. **Iteração sobre Arrays:**

#### a. **`for`**:

```javascript
let frutas = ['maçã', 'banana', 'laranja'];

// Usando for
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
```

#### b. **`for...of`**:

```javascript
let frutas = ['maçã', 'banana', 'laranja'];

// Usando for...of
for (let fruta of frutas) {
    console.log(fruta);
}
```

A principal diferença é a sintaxe e a conveniência. O `for...of` é mais conciso e legível, pois elimina a necessidade de gerenciar manualmente o índice e o comprimento do array. Ele itera diretamente sobre os elementos do array, tornando o código mais limpo. O `for...of` é especialmente útil quando você não precisa do índice do elemento no loop.

#### c. **`forEach`:**
- Executa uma função para cada elemento do array.

```javascript
frutas.forEach(function(fruta) {
    console.log(fruta);
});
```

#### d. **`map`:**
- Cria um novo array com o resultado da aplicação de uma função a cada elemento do array original.

```javascript
let numeros = [1, 2, 3];
let aoQuadrado = numeros.map(function(numero) {
    return numero * numero;
});
```

#### e. **`filter`:**
- Cria um novo array com os elementos que atendem a uma condição específica.

```javascript
let numerosPares = numeros.filter(function(numero) {
    return numero % 2 === 0;
});
```

#### f. **`reduce`:**
- Reduz o array a um único valor, acumulando o resultado da aplicação de uma função.

```javascript
let soma = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
}, 0); // O segundo parâmetro (0) é o valor inicial do acumulador
```

### 5. **Array Destructuring:**
- Permite extrair valores de arrays e atribuí-los a variáveis.

```javascript
let [primeira, segunda] = frutas; // primeira = 'maçã', segunda = 'banana'
```

### Arrays de objetos

**Arrays de Objetos em JavaScript: Resumo**

### 1. **Estrutura Básica:**
- **Descrição:** Um array de objetos é uma coleção de objetos armazenados em uma estrutura de array. Cada objeto pode ter propriedades e métodos associados.

  ```javascript
  let pessoas = [
    { nome: 'Alice', idade: 25, cidade: 'Exemplo' },
    { nome: 'Bob', idade: 30, cidade: 'Teste' },
    // Outros objetos...
  ];
  ```

### 2. **Uso do for...of:**
- **Descrição:** O loop for...of é uma forma mais concisa e legível de iterar sobre elementos de um array, especialmente útil para arrays de objetos.

```javascript
  for (let pessoa of pessoas) {
  console.log(pessoa.nome);
}
```

### 3. **Acesso aos Elementos:**
- **Descrição:** Os elementos em um array de objetos podem ser acessados usando índices, assim como em arrays simples.

  ```javascript
  console.log(pessoas[0].nome); // 'Alice'
  ```

### 4. **Iteração sobre o Array:**
- **Descrição:** Métodos como `forEach` são úteis para iterar sobre arrays de objetos, permitindo a execução de uma função para cada objeto.

  ```javascript
  pessoas.forEach(function(pessoa) {
    console.log(pessoa.nome);
  });
  ```

### 5. **Adição e Remoção de Objetos:**
- **Descrição:** Elementos (objetos) podem ser adicionados ou removidos dinamicamente.

  ```javascript
  // Adicionando um novo objeto
  pessoas.push({ nome: 'Charlie', idade: 22, cidade: 'Amostra' });

  // Removendo um objeto pelo índice
  pessoas.splice(1, 1); // Remove o segundo objeto
  ```

### 6. **Filtragem e Busca:**
- **Descrição:** Métodos como `filter` podem ser usados para filtrar objetos com base em condições específicas.

  ```javascript
  let maioresDe30 = pessoas.filter(function(pessoa) {
    return pessoa.idade > 30;
  });
  ```

### 7. **Modificação de Propriedades:**
- **Descrição:** As propriedades dos objetos em um array podem ser modificadas diretamente.

  ```javascript
  pessoas[0].cidade = 'Nova Cidade';
  ```

### 8. **Manipulação Dinâmica:**
- **Descrição:** Arrays de objetos podem crescer ou diminuir dinamicamente durante a execução do programa.

### 9. **Combinação com Métodos de Array:**
- **Descrição:** Métodos de array, como `map`, `reduce` e `sort`, podem ser aplicados a arrays de objetos para realizar operações específicas.

Essas características tornam os arrays de objetos uma estrutura poderosa para organizar e manipular dados complexos em JavaScript, permitindo uma abordagem flexível e dinâmica na manipulação de informações em uma aplicação.

### Conclusão:
Arrays são estruturas fundamentais em JavaScript, oferecendo uma maneira eficiente de armazenar e manipular coleções de dados. As funções de array proporcionam flexibilidade e poder para trabalhar com esses conjuntos de dados de maneira concisa e expressiva. A iteração sobre arrays é uma prática comum para processar e transformar elementos de forma eficiente.