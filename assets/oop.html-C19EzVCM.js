import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as o,f as e}from"./app-dAsMf_Ww.js";const t={},p=e(`<h1 id="programacao-orientada-a-objetos-poo" tabindex="-1"><a class="header-anchor" href="#programacao-orientada-a-objetos-poo" aria-hidden="true">#</a> Programação Orientada à Objetos (POO)</h1><h3 id="_1-definicao-de-poo" tabindex="-1"><a class="header-anchor" href="#_1-definicao-de-poo" aria-hidden="true">#</a> 1. <strong>Definição de POO:</strong></h3><ul><li>A Programação Orientada a Objetos (POO) é um paradigma de programação que organiza o código em torno de objetos, que podem conter dados (atributos) e códigos (métodos).</li></ul><h3 id="_2-quatro-pilares-da-poo" tabindex="-1"><a class="header-anchor" href="#_2-quatro-pilares-da-poo" aria-hidden="true">#</a> 2. <strong>Quatro Pilares da POO:</strong></h3><ul><li><strong>Encapsulamento:</strong> Agrupa dados (atributos) e métodos em uma unidade chamada objeto, ocultando os detalhes internos de implementação.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Pessoa</span> <span class="token punctuation">{</span>
    #idade<span class="token punctuation">;</span> <span class="token comment">// Encapsulado</span>
    
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">idade</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>#idade <span class="token operator">=</span> idade<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">obterIdade</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#idade<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>Herança:</strong> Permite que uma classe herde propriedades e métodos de outra, promovendo a reutilização de código.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token function">comer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Comendo...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Cachorro</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token function">latir</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Latindo...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>Polimorfismo:</strong> Permite que objetos de diferentes classes sejam tratados como objetos de uma classe comum.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Forma</span> <span class="token punctuation">{</span>
    <span class="token function">calcularArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Área não especificada para esta forma.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Quadrado</span> <span class="token keyword">extends</span> <span class="token class-name">Forma</span> <span class="token punctuation">{</span>
    <span class="token function">calcularArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Área do quadrado...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Circulo</span> <span class="token keyword">extends</span> <span class="token class-name">Forma</span> <span class="token punctuation">{</span>
    <span class="token function">calcularArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Área do círculo...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>Abstração:</strong> Simplifica complexidades do mundo real, fornecendo uma representação essencial.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Veiculo</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">marca</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>marca <span class="token operator">=</span> marca<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">acelerar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Acelerando...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Carro</span> <span class="token keyword">extends</span> <span class="token class-name">Veiculo</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">marca<span class="token punctuation">,</span> modelo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>marca<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>modelo <span class="token operator">=</span> modelo<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">acelerar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Acelerando o </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>marca<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>modelo<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">...</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-objetos-em-javascript" tabindex="-1"><a class="header-anchor" href="#_3-objetos-em-javascript" aria-hidden="true">#</a> 3. <strong>Objetos em JavaScript:</strong></h3><ul><li>Em JavaScript, objetos podem ser criados usando a notação de objeto literal <code>{}</code> ou por meio de construtores de classes.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Objeto Literal</span>
<span class="token keyword">let</span> pessoa <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">nome</span><span class="token operator">:</span> <span class="token string">&quot;Maria&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">idade</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
    <span class="token function-variable function">saudacao</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Olá, meu nome é </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>nome<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> e tenho </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>idade<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> anos.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Usando Classe</span>
<span class="token keyword">class</span> <span class="token class-name">Pessoa</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">nome<span class="token punctuation">,</span> idade</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>nome <span class="token operator">=</span> nome<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>idade <span class="token operator">=</span> idade<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">saudacao</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Olá, meu nome é </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>nome<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> e tenho </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>idade<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> anos.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-modificadores-de-acesso-em-javascript" tabindex="-1"><a class="header-anchor" href="#_4-modificadores-de-acesso-em-javascript" aria-hidden="true">#</a> 4. <strong>Modificadores de Acesso em JavaScript:</strong></h3><ul><li>No JavaScript, até a versão ES2021, os modificadores de acesso são simulados usando convenções de nomenclatura (público, privado, protegido).</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Exemplo</span> <span class="token punctuation">{</span>
    propPublica <span class="token operator">=</span> <span class="token string">&quot;Variável pública&quot;</span><span class="token punctuation">;</span>

    #propPrivada <span class="token operator">=</span> <span class="token string">&quot;Variável privada&quot;</span><span class="token punctuation">;</span>

    _propProtegida <span class="token operator">=</span> <span class="token string">&quot;Variável protegida&quot;</span><span class="token punctuation">;</span>

    <span class="token function">mostrarPropriedades</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>propPublica<span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// Pública</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>#propPrivada<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// Privada</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_propProtegida<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// Protegida</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="conclusao" tabindex="-1"><a class="header-anchor" href="#conclusao" aria-hidden="true">#</a> Conclusão:</h3><p>A Programação Orientada a Objetos fornece uma abordagem poderosa e organizada para o desenvolvimento de software, enfatizando a modularidade, reutilização e encapsulamento. A implementação em JavaScript pode ser realizada por meio de objetos literais ou classes, aproveitando os conceitos fundamentais da POO. A introdução de modificadores de acesso em versões mais recentes do JavaScript, como TypeScript, adiciona uma camada adicional de encapsulamento e segurança ao código.</p>`,20);function c(i,l){return s(),a("div",null,[p,o(` 
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
    \`\`\`javascript
    let pessoa = {
        nome: "Maria",
        idade: 30,
        saudacao: function() {
            console.log(\`Olá, meu nome é \${this.nome} e tenho \${this.idade} anos.\`);
        }
    };
    \`\`\`

13. **Classes e Construtores:**
    \`\`\`javascript
    class Pessoa {
        constructor(nome, idade) {
            this.nome = nome;
            this.idade = idade;
        }

        saudacao() {
            console.log(\`Olá, meu nome é \${this.nome} e tenho \${this.idade} anos.\`);
        }
    }
    \`\`\`

14. **Herança:**
    \`\`\`javascript
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
    \`\`\`

15. **Polimorfismo:**
    \`\`\`javascript
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
    \`\`\`

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
 `)])}const d=n(t,[["render",c],["__file","oop.html.vue"]]);export{d as default};
