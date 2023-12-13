---
title: Objetos
icon: check
---

# Objetos

**Objetos em JavaScript: Resumo**

### Sintaxe de Objeto:
- Em JavaScript, os objetos são coleções de pares chave-valor.
- A sintaxe básica para criar um objeto é usando chaves `{}`.

Exemplo:
```javascript
let pessoa = {
    nome: "João",
    idade: 25,
    cidade: "Exemploville"
};
```

### Obtenção e Atribuição de Valores:
- Os valores em um objeto são acessados usando a notação de ponto (`objeto.propriedade`) ou a notação de colchetes (`objeto['propriedade']`).

Exemplo:
```javascript
console.log(pessoa.nome); // Saída: João
pessoa.idade = 26; // Atribuição de um novo valor à propriedade "idade"
```

### Constructor e `new` (Funções Construtoras):
- Construtores são funções especiais usadas para criar objetos com propriedades e métodos específicos.
- O operador `new` é usado para instanciar objetos a partir de uma função construtora.

Exemplo:
```javascript
function Carro(modelo, ano) {
    this.modelo = modelo;
    this.ano = ano;
}

let meuCarro = new Carro("Fusca", 1970);
```

### Uso do `this`:
- O `this` refere-se ao contexto atual de execução e é usado dentro de um objeto ou função construtora para se referir à instância atual.

Exemplo:
```javascript
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.apresentar = function() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    };
}

let pessoa1 = new Pessoa("Maria", 30);
pessoa1.apresentar(); // Saída: Olá, meu nome é Maria e tenho 30 anos.
```

### Exemplo Completo:
```javascript
function Animal(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
    this.emitirSom = function() {
        console.log(`O ${this.tipo} ${this.nome} faz um som.`);
    };
}

let cachorro = new Animal("Rex", "cachorro");
let gato = new Animal("Whiskers", "gato");

cachorro.emitirSom(); // Saída: O cachorro Rex faz um som.
gato.emitirSom(); // Saída: O gato Whiskers faz um som.
```

Em resumo, objetos em JavaScript são estruturas flexíveis e poderosas que permitem armazenar e organizar dados. A notação de ponto, funções construtoras, e o uso do `this` são aspectos essenciais ao trabalhar com objetos em JavaScript.

### Métodos para Objetos Personalizados:
- Métodos são funções associadas a objetos. Eles podem ser definidos como propriedades em objetos e executar ações específicas quando chamados.

Exemplo:
```javascript
let pessoa = {
    nome: "Ana",
    idade: 28,
    saudacao: function() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
};

pessoa.saudacao(); // Saída: Olá, meu nome é Ana e tenho 28 anos.
```

Exemplo 2 (utilizando this):
```javascript
function pessoa(nome, idade, rua) {
    this.nome = nome;
    this.idade = idade;
    this.rua = rua;
    this.falar = function () { 
        console.log("OLÁ, SOU " + this.nome) 
    }
}

const pessoa1 = new pessoa("Homer", 39, "Av. Sempre-verde 742");
const pessoa2 = new pessoa("Marge", 36, "Av. Sempre-verde 742");

pessoa1.falar(); // Saída: OLÁ, SOU Homer
pessoa2.falar(); // Saída: OLÁ, SOU Marge
```

### Função x Método:
- Uma função se torna um método quando é associada a um objeto.
- Métodos são funções que pertencem a um objeto específico.

Exemplo função:
```javascript
//uma função é um bloco de código escrito para 
//realizar algum conjunto específico de tarefas
function somar(a, b) {
    var soma = a + b;
    return soma;
}
console.log(somar(1, 2))
```

Exemplo método:
```javascript
//um método é uma propriedade de um objeto 
//que contém uma definição de função
let pessoa = {
    nome: "Mariana",
    idade: 25,
    informacoes: function () {
        return this.nome + " tem " + this.idade + " anos"
    }
}
console.log(pessoa.informacoes())
```

### Propriedades e Métodos em JavaScript:
- Propriedades são valores associados a um objeto.
- Métodos são funções associadas a um objeto.

Exemplo:
```javascript
let carro = {
    modelo: "Civic", // propriedade
    ano: 2022, // propriedade
    ligar: function() { // método
        console.log("O carro está ligado.");
    }
};

console.log(carro.modelo); // Saída: Civic
carro.ligar(); // Saída: O carro está ligado.
```

#### String como objetos

O JavaScript conta com seus próprios objetos, incluindo alguns que já usamos sem identificar que são objetos.

Por exemplo: Toda vez que criamos uma palavra, ela é criada automaticamente como uma instância do objeto String e, portanto, tem vários métodos/propriedades comuns disponíveis.

Exemplo:
```javascript
let texto = "Olá, Coder";

//Propriedade: Comprimento da texto.
console.log(texto.length);

//Método: Converter para minúscula.
console.log(texto.toLowerCase());

//Método: Converter para maiúscula.
console.log(texto.toUpperCase());
```

### Operador `in`:
- O operador `in` é usado para verificar se uma propriedade específica está presente em um objeto.
- Retorna `true` se a propriedade existir e `false` se não existir.

Exemplo:
```javascript
let pessoa = {
    nome: "João",
    idade: 25
};

console.log("nome" in pessoa); // Saída: true
console.log("altura" in pessoa); // Saída: false
```

### Operador `for...in`:
- O `for...in` é usado para iterar sobre as propriedades enumeráveis de um objeto.
- Itera sobre todas as propriedades próprias e enumeráveis, incluindo as herdadas.

Exemplo:
```javascript
let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
};

for (let propriedade in carro) {
    console.log(propriedade + ": " + carro[propriedade]);
}
// Saída:
// marca: Toyota
// modelo: Corolla
// ano: 2020
```
