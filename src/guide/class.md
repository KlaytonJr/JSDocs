---
title: Classes
icon: check
---

# Classes

### Introdução às Classes:
- Classes são uma forma de criar objetos em JavaScript usando uma sintaxe mais orientada a objetos.
- Introduzido no ECMAScript 2015 (ES6), as classes fornecem uma sintaxe mais clara e orientada a objetos para a criação de objetos e herança.

### Sintaxe de uma Classe:
- A declaração de uma classe inclui um construtor e métodos associados.

Exemplo:
```javascript
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    saudacao() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

let pessoa1 = new Pessoa("Maria", 30);
pessoa1.saudacao(); // Saída: Olá, meu nome é Maria e tenho 30 anos.
```

### Construtor:
- O método `constructor` é chamado automaticamente quando uma instância da classe é criada.
- É usado para inicializar as propriedades do objeto.

### Métodos e Propriedades:
- Métodos são funções definidas dentro da classe.
- Propriedades são variáveis associadas à classe e geralmente são inicializadas no construtor.

### Herança em Classes:
- Classes suportam herança, permitindo que uma classe herde propriedades e métodos de outra.

Exemplo:
```javascript
class Estudante extends Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade); // Chama o construtor da classe pai
        this.curso = curso;
    }

    estudar() {
        console.log(`${this.nome} está estudando ${this.curso}.`);
    }
}

let estudante1 = new Estudante("João", 25, "Matemática");
estudante1.saudacao(); // Herda método da classe Pessoa logo Saída: Olá, meu nome é João e tenho 25 anos.
estudante1.estudar(); // Saída: João está estudando Matemática.
```

### Palavra-chave `super`:
- A palavra-chave `super` é usada para chamar métodos da classe pai em uma classe filha.

### Método Estático:
- Um método estático é chamado na classe, não em uma instância.
- Definido usando a palavra-chave `static`.

Exemplo:
```javascript
class Utilitario {
    static somar(a, b) {
        return a + b;
    }
}

console.log(Utilitario.somar(5, 3)); // Saída: 8
```

### Tipos de variáveis

Em JavaScript, até a versão ES2021, o suporte nativo para modificadores de acesso (`public`, `private`, `protected`) não é totalmente fornecido. No entanto, a proposta de campos privados de classe (Class Fields) permite a simulação de propriedades privadas com o uso de cerquilha (`#`). 

Vale notar que essa funcionalidade está presente em navegadores modernos e ambientes que suportam ES6 e versões mais recentes. Dito isso, vejamos como simular os diferentes tipos de variáveis em classes:

### 1. **Variáveis Públicas:**
- Não há uma palavra-chave explícita para declarar variáveis públicas. Todas as variáveis declaradas dentro da classe sem o uso de `#` são públicas.

```javascript
class Exemplo {
    propPublica = "Variável pública";

    mostrarPublica() {
        console.log(this.propPublica);
    }
}

const objeto = new Exemplo();
console.log(objeto.propPublica); // Saída: Variável pública
objeto.mostrarPublica(); // Saída: Variável pública
```

### 2. **Variáveis Privadas:**
- Usando a proposta de campos privados de classe, você pode simular variáveis privadas adicionando `#` antes do nome da variável.

```javascript
class Exemplo {
    #propPrivada = "Variável privada";

    mostrarPrivada() {
        console.log(this.#propPrivada);
    }
}

const objeto = new Exemplo();
// console.log(objeto.#propPrivada); // Erro: SyntaxError
objeto.mostrarPrivada(); // Saída: Variável privada
```

### 3. **Variáveis Protegidas:**
- Atualmente, não há suporte nativo para variáveis protegidas em JavaScript. No entanto, você pode simular encapsulamento protegido por meio de convenções de nomenclatura (por exemplo, prefixar com `_`).

```javascript
class Exemplo {
    _propProtegida = "Variável protegida";

    mostrarProtegida() {
        console.log(this._propProtegida);
    }
}

const objeto = new Exemplo();
// console.log(objeto._propProtegida); // Pode ser acessada, mas é uma convenção, não uma restrição real
objeto.mostrarProtegida(); // Saída: Variável protegida
```

### Resumo:

- **Públicas (`public`):** Variáveis declaradas sem `#` são públicas e podem ser acessadas de fora da classe.
- **Privadas (`private`):** Usando `#` antes do nome da variável, simula-se uma variável privada, acessível apenas dentro da classe.
- **Protegidas (`protected`):** Atualmente, não há suporte nativo. A convenção de nomenclatura, como prefixar com `_`, pode indicar proteção, mas não impede o acesso.

É importante observar que esses conceitos são mais convenções e simulações, uma vez que o JavaScript não fornece suporte nativo para modificadores de acesso. O uso adequado dessas convenções ajuda a garantir um código mais seguro e de fácil manutenção.