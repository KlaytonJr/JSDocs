# Variáveis

## Tipos de dados

No JavaScript os dados podem ser definidos nos seguintes tipos: 

String -> Em formato de texto, vem entre aspas simples ou duplas, ou no estilo `template string`. `ex.: "Klayton"`

Integer -> É do tipo número inteiro. `ex.: 10`

Float ->  É do tipo número inteiro. `ex.: 50.5`

Boolean -> É do tipo lógico, os tipos serão true ou false, ou seja, verdadeito ou falso. `ex.: true`

## Variáveis

Uma variável é um espaço reservado na memória que, como seu nome indica, **pode mudar de conteúdo ao longo da execução de um programa.**

```js
var cliente = 'Klayton';
var quantidade = 10;
var preco = 50.5;
var ehNovo = true;
```

### var x let

No JavaScript, `var` e `let` são ambos utilizados para declarar variáveis, mas existem diferenças importantes entre eles em termos de escopo e hoisting. Aqui estão as principais diferenças:

1. **Escopo:**
   - **`var`:** Possui escopo de função, o que significa que a variável é visível em toda a função onde foi declarada. Se uma variável `var` for declarada dentro de um bloco (por exemplo, dentro de um loop), ela ainda será visível fora desse bloco.
   
   ```javascript
   function exemploVar() {
       if (true) {
           var x = 10;
       }
       console.log(x); // Será 10, mesmo fora do bloco if
   }
   ```

   - **`let`:** Possui escopo de bloco, o que significa que a variável é visível apenas dentro do bloco onde foi declarada. Se uma variável `let` for declarada dentro de um bloco, ela não será visível fora desse bloco.
   
   ```javascript
   function exemploLet() {
       if (true) {
           let y = 20;
       }
       console.log(y); // Erro: y não está definido nesta linha
   }
   ```

2. **Hoisting:**
   - **`var`:** É "hoisted" para o topo do escopo em que foi declarado. Isso significa que você pode usar a variável antes mesmo de ela ser declarada no código, mas seu valor será `undefined`.
   
   ```javascript
   console.log(a); // Será undefined
   var a = 5;
   ```

   - **`let`:** Também é "hoisted", mas não é inicializado até o ponto em que a declaração é encontrada no código. Tentar usar a variável antes da declaração resultará em um erro.
   
   ```javascript
   console.log(b); // Erro: b não está definido nesta linha
   let b = 10;
   ```

Em geral, é recomendado o uso de `let` em vez de `var`, pois `let` oferece um escopo mais previsível e evita alguns dos problemas associados ao hoisting em `var`. O uso de `const` também é preferido quando se trata de variáveis que não serão reatribuídas.

## const

Em JavaScript, `const` é uma palavra-chave utilizada para declarar uma constante, ou seja, uma variável cujo valor não pode ser reatribuído após a sua inicialização. As principais características do `const` são:

1. **Atribuição inicial obrigatória:** Uma variável declarada com `const` deve ser atribuída com um valor no momento da sua declaração.

   ```javascript
   const pi = 3.14;
   ```

2. **Imutabilidade:** Uma vez atribuído um valor a uma constante, não é possível reatribuir um novo valor a ela. Isso implica que o valor da constante permanecerá o mesmo durante todo o escopo em que foi definida.

   ```javascript
   const pi = 3.14;
   // pi = 3.14159; // Isso resultaria em um erro, pois não é possível reatribuir a uma constante.
   ```

3. **Escopo de bloco:** Assim como `let`, as variáveis declaradas com `const` têm escopo de bloco. Elas são visíveis apenas dentro do bloco em que foram declaradas.

   ```javascript
   if (true) {
       const localVar = 'Apenas visível dentro deste bloco';
   }
   // console.log(localVar); // Isso resultaria em um erro, pois localVar não está definido fora do bloco.
   ```

O uso de `const` é recomendado sempre que você tem uma variável cujo valor não deveria ser alterado após a inicialização. Isso não significa que o valor da constante seja imutável (no caso de objetos e arrays), apenas que a referência à constante não pode ser alterada. Se você precisar de imutabilidade profunda (por exemplo, em objetos aninhados), pode ser necessário usar técnicas adicionais, como bibliotecas específicas ou a imutabilidade fornecida por algumas linguagens como o TypeScript.