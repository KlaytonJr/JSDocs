---
title: Programação Orientada à Objetos (POO)
icon: check
---

# Programação Orientada à Objetos (POO)

### 1. **Definição de POO:**
   - A Programação Orientada a Objetos (POO) é um paradigma de programação que organiza o código em torno de objetos, que podem conter dados (atributos) e códigos (métodos).

### 2. **Quatro Pilares da POO:**
   - **Encapsulamento:** Agrupa dados (atributos) e métodos em uma unidade chamada objeto, ocultando os detalhes internos de implementação.
   
   ```javascript
   class Pessoa {
       #idade; // Encapsulado
       
       constructor(idade) {
           this.#idade = idade;
       }

       obterIdade() {
           return this.#idade;
       }
   }
   ```

   - **Herança:** Permite que uma classe herde propriedades e métodos de outra, promovendo a reutilização de código.
   
   ```javascript
   class Animal {
       comer() {
           console.log("Comendo...");
       }
   }

   class Cachorro extends Animal {
       latir() {
           console.log("Latindo...");
       }
   }
   ```

   - **Polimorfismo:** Permite que objetos de diferentes classes sejam tratados como objetos de uma classe comum.
   
   ```javascript
   class Forma {
       calcularArea() {
           console.log("Área não especificada para esta forma.");
       }
   }

   class Quadrado extends Forma {
       calcularArea() {
           console.log("Área do quadrado...");
       }
   }

   class Circulo extends Forma {
       calcularArea() {
           console.log("Área do círculo...");
       }
   }
   ```

   - **Abstração:** Simplifica complexidades do mundo real, fornecendo uma representação essencial.
   
   ```javascript
   class Veiculo {
       constructor(marca) {
           this.marca = marca;
       }

       acelerar() {
           console.log("Acelerando...");
       }
   }

   class Carro extends Veiculo {
       constructor(marca, modelo) {
           super(marca);
           this.modelo = modelo;
       }

       acelerar() {
           console.log(`Acelerando o ${this.marca} ${this.modelo}...`);
       }
   }
   ```

### 3. **Objetos em JavaScript:**
   - Em JavaScript, objetos podem ser criados usando a notação de objeto literal `{}` ou por meio de construtores de classes.

   ```javascript
   // Objeto Literal
   let pessoa = {
       nome: "Maria",
       idade: 30,
       saudacao: function() {
           console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
       }
   };

   // Usando Classe
   class Pessoa {
       constructor(nome, idade) {
           this.nome = nome;
           this.idade = idade;
       }

       saudacao() {
           console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
       }
   }
   ```

### 4. **Modificadores de Acesso em JavaScript:**
   - No JavaScript, até a versão ES2021, os modificadores de acesso são simulados usando convenções de nomenclatura (público, privado, protegido).

   ```javascript
   class Exemplo {
       propPublica = "Variável pública";

       #propPrivada = "Variável privada";

       _propProtegida = "Variável protegida";

       mostrarPropriedades() {
           console.log(this.propPublica);      // Pública
           console.log(this.#propPrivada);    // Privada
           console.log(this._propProtegida);   // Protegida
       }
   }
   ```

### Conclusão:
A Programação Orientada a Objetos fornece uma abordagem poderosa e organizada para o desenvolvimento de software, enfatizando a modularidade, reutilização e encapsulamento. A implementação em JavaScript pode ser realizada por meio de objetos literais ou classes, aproveitando os conceitos fundamentais da POO. A introdução de modificadores de acesso em versões mais recentes do JavaScript, como TypeScript, adiciona uma camada adicional de encapsulamento e segurança ao código.

<!-- 
A Programação Orientada a Objetos (POO) é um paradigma de programação que organiza o código em torno de objetos, que podem conter dados (atributos) e códigos (métodos). Aqui está uma lista abrangente do que você precisa saber sobre POO:

### Conceitos Fundamentais:

1. **Objeto:**
   - Um objeto é uma instância de uma classe e pode conter dados (atributos) e comportamentos (métodos).

2. **Classe:**
   - Uma classe é um modelo para criar objetos. Define atributos e métodos que os objetos dessa classe terão.

3. **Atributos:**
   - Atributos são características dos objetos, também conhecidos como campos, propriedades ou variáveis de instância.

4. **Métodos:**
   - Métodos são funções associadas a uma classe. Eles representam o comportamento dos objetos dessa classe.

### Pilares da Programação Orientada a Objetos:

5. **Encapsulamento:**
   - Encapsula atributos e métodos dentro de uma unidade, ocultando a implementação interna e protegendo os dados.

6. **Herança:**
   - Permite que uma classe herde características (atributos e métodos) de outra classe, promovendo a reutilização de código.

7. **Polimorfismo:**
   - Permite que objetos de diferentes classes sejam tratados como objetos de uma classe comum, simplificando o código.

8. **Abstração:**
   - Abstrai detalhes complexos do mundo real para fornecer uma representação essencial, simplificando a implementação.

### Modificadores de Acesso:

9. **Public:**
   - Atributos ou métodos públicos são acessíveis de qualquer lugar do código.

10. **Private:**
    - Atributos ou métodos privados são acessíveis apenas dentro da própria classe.

11. **Protected:**
    - Atributos ou métodos protegidos são acessíveis dentro da própria classe e suas subclasses.

### Exemplos em JavaScript:

12. **Objetos Literais:**
    ```javascript
    let pessoa = {
        nome: "Maria",
        idade: 30,
        saudacao: function() {
            console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
        }
    };
    ```

13. **Classes e Construtores:**
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
    ```

14. **Herança:**
    ```javascript
    class Animal {
        comer() {
            console.log("Comendo...");
        }
    }

    class Cachorro extends Animal {
        latir() {
            console.log("Latindo...");
        }
    }
    ```

15. **Polimorfismo:**
    ```javascript
    class Forma {
        calcularArea() {
            console.log("Área não especificada para esta forma.");
        }
    }

    class Quadrado extends Forma {
        calcularArea() {
            console.log("Área do quadrado...");
        }
    }

    class Circulo extends Forma {
        calcularArea() {
            console.log("Área do círculo...");
        }
    }
    ```

### Considerações Adicionais:

16. **Construtores e Destrutores:**
    - Construtores são métodos especiais chamados na criação de objetos. Destrutores (ou garbage collectors) lidam com a liberação de recursos.

17. **Interfaces e Abstração de Dados:**
    - Interfaces definem contratos para implementação, enquanto a abstração de dados simplifica representações complexas.

18. **Mensagens e Comunicação entre Objetos:**
    - Objetos interagem trocando mensagens, geralmente chamando métodos uns dos outros.

19. **Associação, Agregação e Composição:**
    - Conceitos que descrevem como os objetos podem se relacionar e se unir.

20. **Diagramas UML:**
    - Diagramas que representam visualmente classes, objetos, relações e comportamentos.

A Programação Orientada a Objetos fornece uma abordagem modular e organizada para o desenvolvimento de software, promovendo a reutilização de código, facilitando a manutenção e aumentando a flexibilidade.
 -->