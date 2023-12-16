---
title: Storage e JSON
icon: check
---

# Storage e JSON

## Storage

Os storages do navegador referem-se a mecanismos de armazenamento de dados fornecidos pelos navegadores da web para que os desenvolvedores possam armazenar informações localmente no dispositivo do usuário. Os dois tipos principais de storages são o `localStorage` e o `sessionStorage`.

### **1. localStorage:**

#### **Explicação:**
O `localStorage` permite armazenar pares de chave-valor de forma persistente no dispositivo do usuário. Os dados armazenados no `localStorage` permanecem disponíveis mesmo após o navegador ser fechado e reaberto.

#### **Explicação de chave-valor:**

Em JavaScript, chave-valor refere-se a uma estrutura de dados onde dados são organizados e acessados por meio de uma chave única associada a cada valor correspondente. Cada par chave-valor em um conjunto de dados pode ser identificado exclusivamente pela chave, permitindo a recuperação eficiente do valor associado.

Exemplo:
```javascript
// Objeto com estrutura de chave-valor
const aluno = {
  nome: 'Alice',
  idade: 25,
  curso: 'Engenharia'
};

// Acessando valores por chaves
console.log(aluno.nome);   // Saída: Alice
console.log(aluno.idade);  // Saída: 25
console.log(aluno.curso);  // Saída: Engenharia
```

Nesse exemplo, `nome`, `idade` e `curso` são as chaves, e 'Alice', 25 e 'Engenharia' são os valores associados a essas chaves, respectivamente. A utilização de estruturas chave-valor é comum em objetos, mapas e outras implementações em JavaScript para organizar e acessar dados de maneira eficiente.

#### **Uso com JavaScript:**
```javascript
// Armazenar dados no localStorage
localStorage.setItem('chave', 'valor');

// Recuperar dados do localStorage
const valor = localStorage.getItem('chave');

// Remover item do localStorage
localStorage.removeItem('chave');

// Limpar todos os itens do localStorage
localStorage.clear();
```

### **2. sessionStorage:**

#### **Explicação:**
O `sessionStorage` funciona de maneira semelhante ao `localStorage`, mas os dados armazenados nele são válidos apenas durante a sessão do navegador. Os dados são perdidos quando o navegador é fechado.

#### **Uso com JavaScript:**
```javascript
// Armazenar dados no sessionStorage
sessionStorage.setItem('chave', 'valor');

// Recuperar dados do sessionStorage
const valor = sessionStorage.getItem('chave');

// Remover item do sessionStorage
sessionStorage.removeItem('chave');

// Limpar todos os itens do sessionStorage
sessionStorage.clear();
```

### **3. Cookies:**

#### **Explicação:**
Os cookies são pequenos arquivos de texto armazenados no dispositivo do usuário. Embora não sejam tecnicamente um storage, são frequentemente usados para armazenar dados temporários.

#### **Uso com JavaScript:**
```javascript
// Criar um cookie
document.cookie = 'nome=valor; expires=DataDeExpiracao; path=/';

// Recuperar um cookie
const cookie = document.cookie;

// Excluir um cookie
document.cookie = 'nome=; expires=DataDeExpiracao; path=/';
```

### **4. Uso Responsável e Considerações:**

- **Capacidade de Armazenamento:**
  - Ambos os storages têm limites de capacidade de armazenamento, geralmente em torno de 5 MB para o `localStorage`.
  
- **Segurança:**
  - Os dados armazenados nos storages são acessíveis apenas para scripts da mesma origem (mesmo protocolo, domínio e porta).

- **Persistência e Segurança:**
  - Use `localStorage` para dados persistentes e `sessionStorage` para dados temporários.
  
- **Cookies:**
  - Cookies têm limitações de tamanho e são frequentemente usados para armazenar dados temporários no lado do cliente.

- **APIs de Armazenamento Assíncrono:**
  - Novas APIs, como `IndexedDB`, fornecem capacidades de armazenamento mais avançadas e assíncronas.

Os storages do navegador oferecem uma maneira conveniente de armazenar dados localmente no navegador do usuário. A escolha entre `localStorage`, `sessionStorage` e cookies depende dos requisitos específicos da aplicação e da necessidade de persistência dos dados.


### **5. Percorrendo os storages:**

É possível obter todos os valores armazenados em localStorage ou sessionStorage com um loop. 

Mas não podemos usar for...of, porque não são objetos iteráveis, nem for...in, porque obtemos outras propriedades do objeto que não são valores armazenados.

O loop a ser usado é o for com o método key:

```javascript
//Loop para percorrer as chaves armazenadas no objeto localStorage
for (let i = 0; i < localStorage.length; i++) {
    let chave = localStorage.key(i);
    console.log("Chave: " + chave + "   Valor: " + localStorage.getItem(chave));
}
```

## JSON

### Armazenamento de objetos em string

Se quisermos armazenar a informação de um objeto em storage, é preciso considerar que tanto a chave quanto o valor são armazenados em strings. 

Qualquer outro tipo a ser armazenado, como um número ou um objeto, é convertido em cadeia de texto automaticamente. 

Então, ao tentar armazenar um objeto sem uma transformação prévia, armazenamos [object Object], a conversão por default de objeto para string. Para armazenar a informação corretamente, é preciso transformar o objeto em JSON.

```javascript
const produto1 = { id: 2, produto: "Arroz" };
localStorage.setItem("produto1", produto1);
// É armazenado [object Object]
```

Para evitar esse comportamento, armazenamos os dados de objeto transformadas em uma string JSON.

### **1. O que é JSON:**

- **Definição:** JSON (JavaScript Object Notation) é um formato leve de troca de dados que é fácil para humanos lerem e escreverem, e fácil para máquinas interpretarem e gerarem.

### **2. Sintaxe Básica:**

- **Objetos e Arrays:** 
  - Representação de dados em pares chave-valor.
  - Pode conter objetos aninhados e arrays.

  ```json
  {
    "nome": "Alice",
    "idade": 25,
    "cursos": ["Engenharia", "Informática"],
    "endereco": {
      "cidade": "Cidade Exemplo",
      "estado": "EX"
    }
  }
  ```

### **3. Uso em JavaScript:**

- **JSON.parse():**
  - Converte uma string JSON para um objeto JavaScript.

  ```javascript
  const jsonString = '{"nome": "Alice", "idade": 25}';
  const objeto = JSON.parse(jsonString);
  ```

- **JSON.stringify():**
  - Converte um objeto JavaScript para uma string JSON.

  ```javascript
  const objeto = { nome: 'Alice', idade: 25 };
  const jsonString = JSON.stringify(objeto);
  ```

### **4. Propriedades Importantes:**

- **Leve e Legível:**
  - Formato compacto e fácil de ler para humanos.

- **Suporte a Tipos de Dados Básicos:**
  - Strings, números, booleanos, objetos, arrays, null.

- **Não Suporta Funções:**
  - Não é possível incluir funções em JSON.

### **5. Utilização Comum:**

- **Comunicação entre Servidor e Cliente:**
  - Amplamente utilizado para enviar dados entre servidores e clientes.

- **Armazenamento de Configurações:**
  - Configurações e metadados podem ser armazenados em formato JSON.

- **Intercâmbio de Dados:**
  - Comum em APIs para troca de dados estruturados.

### **6. Boas Práticas:**

- **Validação:**
  - É recomendável validar strings JSON antes de fazer o parse.

- **Segurança:**
  - Evitar executar JSON proveniente de fontes não confiáveis.

### **7. Exemplo de Manipulação em JavaScript:**

```javascript
// Convertendo objeto para JSON
const objeto = { nome: 'Alice', idade: 25 };
const jsonString = JSON.stringify(objeto);

// Convertendo JSON para objeto
const objetoDeVolta = JSON.parse(jsonString);
```

O formato JSON é uma parte integral do ecossistema web, sendo amplamente utilizado para a comunicação entre sistemas, armazenamento de configurações e intercâmbio de dados estruturados em JavaScript e em muitas outras linguagens de programação.

### Armazenando array de objetos (exemplo):

```javascript
const produtos = [
    { id: 1, produto: "Arroz", preco: 125 },
    { id: 2, produto: "Macarrão", preco: 70 },
    { id: 3, produto: "Pão", preco: 50 },
    { id: 4, produto: "Pudim", preco: 100 }
];

const armazenarLocal = (chave, valor) => { localStorage.setItem(chave, valor) };
//Armazenar produto por produto
for (const produto of produtos) {
    armazenarLocal(produto.id, JSON.stringify(produto));
}
// ou armazenar array completo
armazenarLocal("listaProdutos", JSON.stringify(produtos));
```

### Pegar array de objetos (exemplo):

```javascript
class Produto {
    constructor(obj) {
        this.nome = obj.produto.toUpperCase();
        this.preco = parseFloat(obj.preco);
    }
    somaICMS() {
        this.preco = this.preco * 1.21;
    }
}
//Obtemos a lista de produtos armazenados
const armazenados = JSON.parse(localStorage.getItem("listaProdutos"));
const produtos = [];
//Iteramos os armazenados com for...of 
//para transformar todos seus objetos no tipo produto.
for (const objeto of armazenados)
    produtos.push(new Produto(objeto));
//Agora temos o objeto produtos e podemos usar seus métodos
for (const produto of produtos)
    produto.somaICMS();
```