import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as c,c as r,b as a,d as n,e,f as i}from"./app-6QF_qIwV.js";const p={},l=a("h1",{id:"funcoes",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#funcoes","aria-hidden":"true"},"#"),n(" Funções")],-1),u=a("p",null,"Função é um conjunto de instruções que se agrupam para realizar uma tarefa concreta.",-1),d=a("h2",{id:"vantagens-de-usar-funcoes",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#vantagens-de-usar-funcoes","aria-hidden":"true"},"#"),n(" Vantagens de usar funções")],-1),m={href:"https://pt.wikipedia.org/wiki/Don't_repeat_yourself",target:"_blank",rel:"noopener noreferrer"},k={href:"https://pt.wikipedia.org/wiki/Princ%C3%ADpio_KISS",target:"_blank",rel:"noopener noreferrer"},v={href:"https://pt.wikipedia.org/wiki/YAGNI",target:"_blank",rel:"noopener noreferrer"},h=a("li",null,"Fornecem maior organização e clareza ao código",-1),f=a("li",null,"Proporcionam facilidade e rapidez para fazer modificações",-1),g=i(`<h3 id="declaracao-de-funcao" tabindex="-1"><a class="header-anchor" href="#declaracao-de-funcao" aria-hidden="true">#</a> Declaração de Função</h3><p>A declaração de funções no JavaScript é uma maneira fundamental de organizar e reutilizar blocos de código. Aqui está um resumo sobre como declarar e usar funções em JavaScript:</p><ol><li><p><strong>Declaração de Função Simples:</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">nomeDaFuncao</span><span class="token punctuation">(</span><span class="token parameter">parametro1<span class="token punctuation">,</span> parametro2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// corpo da função</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>Declaração de Função Anônima:</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">nomeDaFuncao</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">parametro1<span class="token punctuation">,</span> parametro2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// corpo da função</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>Arrow Function (Função de seta):</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">nomeDaFuncao</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">parametro1<span class="token punctuation">,</span> parametro2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// corpo da função</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><blockquote><p>As funções pode ter ou não ter parametros.</p></blockquote><h3 id="chamada-de-funcao" tabindex="-1"><a class="header-anchor" href="#chamada-de-funcao" aria-hidden="true">#</a> Chamada de Função:</h3><ol><li><p><strong>Chamada Simples:</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">nomeDaFuncao</span><span class="token punctuation">(</span>argumento1<span class="token punctuation">,</span> argumento2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>Atribuição do Resultado:</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> resultado <span class="token operator">=</span> <span class="token function">nomeDaFuncao</span><span class="token punctuation">(</span>argumento1<span class="token punctuation">,</span> argumento2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Atribui a variável o retorno da função chamada.</p></li></ol><h3 id="parametros-e-argumentos" tabindex="-1"><a class="header-anchor" href="#parametros-e-argumentos" aria-hidden="true">#</a> Parâmetros e Argumentos:</h3><ul><li><strong>Parâmetros:</strong> São variáveis listadas na declaração da função.</li><li><strong>Argumentos:</strong> São os valores reais passados para a função durante a chamada.</li></ul><h3 id="retorno-de-valor" tabindex="-1"><a class="header-anchor" href="#retorno-de-valor" aria-hidden="true">#</a> Retorno de Valor:</h3><ul><li>As funções podem ou não retornar valores.</li><li>Use a palavra-chave <code>return</code> para especificar o valor retornado.</li></ul><h3 id="exemplo-completo" tabindex="-1"><a class="header-anchor" href="#exemplo-completo" aria-hidden="true">#</a> Exemplo Completo:</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Declaração da função</span>
<span class="token keyword">function</span> <span class="token function">soma</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Chamada da função</span>
<span class="token keyword">const</span> resultadoSoma <span class="token operator">=</span> <span class="token function">soma</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>resultadoSoma<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Saída: 8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="funcoes-de-setas-arrow-functions" tabindex="-1"><a class="header-anchor" href="#funcoes-de-setas-arrow-functions" aria-hidden="true">#</a> Funções de Setas (Arrow Functions):</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">quadrado</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>

<span class="token keyword">const</span> resultadoQuadrado <span class="token operator">=</span> <span class="token function">quadrado</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>resultadoQuadrado<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Saída: 16</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Esses são conceitos básicos de declaração e uso de funções em JavaScript. Elas desempenham um papel crucial na estruturação do código, facilitando a modularidade e a reutilização de código.</p>`,15);function b(_,x){const s=t("ExternalLinkIcon");return c(),r("div",null,[l,u,d,a("ul",null,[a("li",null,[n("Evitam instruções duplicadas ("),a("a",m,[n("Princípio DRY"),e(s)]),n(")")]),a("li",null,[n("Solucionam um problema complexo utilizando tarefas simples ("),a("a",k,[n("Princípio KISS"),e(s)]),n(")")]),a("li",null,[n("Focam nas tarefas prioritárias para o programa ("),a("a",v,[n("Princípio YAGNI"),e(s)]),n(")")]),h,f]),g])}const S=o(p,[["render",b],["__file","functions.html.vue"]]);export{S as default};
