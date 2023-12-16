import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as n,f as e}from"./app-6QF_qIwV.js";const o={},t=e(`<h1 id="variaveis" tabindex="-1"><a class="header-anchor" href="#variaveis" aria-hidden="true">#</a> Variáveis</h1><h2 id="tipos-de-dados" tabindex="-1"><a class="header-anchor" href="#tipos-de-dados" aria-hidden="true">#</a> Tipos de dados</h2><p>No JavaScript os dados podem ser definidos nos seguintes tipos:</p><p>String -&gt; Em formato de texto, vem entre aspas simples ou duplas, ou no estilo <code>template string</code>. <code>ex.: &quot;Klayton&quot;</code></p><p>Integer -&gt; É do tipo número inteiro. <code>ex.: 10</code></p><p>Float -&gt; É do tipo número inteiro. <code>ex.: 50.5</code></p><p>Boolean -&gt; É do tipo lógico, os tipos serão true ou false, ou seja, verdadeito ou falso. <code>ex.: true</code></p><h2 id="variaveis-1" tabindex="-1"><a class="header-anchor" href="#variaveis-1" aria-hidden="true">#</a> Variáveis</h2><p>Uma variável é um espaço reservado na memória que, como seu nome indica, <strong>pode mudar de conteúdo ao longo da execução de um programa.</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> cliente <span class="token operator">=</span> <span class="token string">&#39;Klayton&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> quantidade <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> preco <span class="token operator">=</span> <span class="token number">50.5</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ehNovo <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="var-x-let" tabindex="-1"><a class="header-anchor" href="#var-x-let" aria-hidden="true">#</a> var x let</h3><p>No JavaScript, <code>var</code> e <code>let</code> são ambos utilizados para declarar variáveis, mas existem diferenças importantes entre eles em termos de escopo e hoisting. Aqui estão as principais diferenças:</p><ol><li><p><strong>Escopo:</strong></p><ul><li><strong><code>var</code>:</strong> Possui escopo de função, o que significa que a variável é visível em toda a função onde foi declarada. Se uma variável <code>var</code> for declarada dentro de um bloco (por exemplo, dentro de um loop), ela ainda será visível fora desse bloco.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">exemploVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Será 10, mesmo fora do bloco if</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong><code>let</code>:</strong> Possui escopo de bloco, o que significa que a variável é visível apenas dentro do bloco onde foi declarada. Se uma variável <code>let</code> for declarada dentro de um bloco, ela não será visível fora desse bloco.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">exemploLet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Erro: y não está definido nesta linha</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>Hoisting:</strong></p><ul><li><strong><code>var</code>:</strong> É &quot;hoisted&quot; para o topo do escopo em que foi declarado. Isso significa que você pode usar a variável antes mesmo de ela ser declarada no código, mas seu valor será <code>undefined</code>.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Será undefined</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong><code>let</code>:</strong> Também é &quot;hoisted&quot;, mas não é inicializado até o ponto em que a declaração é encontrada no código. Tentar usar a variável antes da declaração resultará em um erro.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Erro: b não está definido nesta linha</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>Em geral, é recomendado o uso de <code>let</code> em vez de <code>var</code>, pois <code>let</code> oferece um escopo mais previsível e evita alguns dos problemas associados ao hoisting em <code>var</code>. O uso de <code>const</code> também é preferido quando se trata de variáveis que não serão reatribuídas.</p><h2 id="const" tabindex="-1"><a class="header-anchor" href="#const" aria-hidden="true">#</a> const</h2><p>Em JavaScript, <code>const</code> é uma palavra-chave utilizada para declarar uma constante, ou seja, uma variável cujo valor não pode ser reatribuído após a sua inicialização. As principais características do <code>const</code> são:</p><ol><li><p><strong>Atribuição inicial obrigatória:</strong> Uma variável declarada com <code>const</code> deve ser atribuída com um valor no momento da sua declaração.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> pi <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>Imutabilidade:</strong> Uma vez atribuído um valor a uma constante, não é possível reatribuir um novo valor a ela. Isso implica que o valor da constante permanecerá o mesmo durante todo o escopo em que foi definida.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> pi <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>
<span class="token comment">// pi = 3.14159; // Isso resultaria em um erro, pois não é possível reatribuir a uma constante.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>Escopo de bloco:</strong> Assim como <code>let</code>, as variáveis declaradas com <code>const</code> têm escopo de bloco. Elas são visíveis apenas dentro do bloco em que foram declaradas.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> localVar <span class="token operator">=</span> <span class="token string">&#39;Apenas visível dentro deste bloco&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// console.log(localVar); // Isso resultaria em um erro, pois localVar não está definido fora do bloco.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>O uso de <code>const</code> é recomendado sempre que você tem uma variável cujo valor não deveria ser alterado após a inicialização. Isso não significa que o valor da constante seja imutável (no caso de objetos e arrays), apenas que a referência à constante não pode ser alterada. Se você precisar de imutabilidade profunda (por exemplo, em objetos aninhados), pode ser necessário usar técnicas adicionais, como bibliotecas específicas ou a imutabilidade fornecida por algumas linguagens como o TypeScript.</p>`,18),i=[t];function c(p,r){return s(),n("div",null,i)}const u=a(o,[["render",c],["__file","variables.html.vue"]]);export{u as default};
