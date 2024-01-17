import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,f as t}from"./app-nb1Fahdj.js";const p={},o=t(`<h2 id="palindromo" tabindex="-1"><a class="header-anchor" href="#palindromo" aria-hidden="true">#</a> Palíndromo</h2><p>Crie uma função que verifica se uma palavra é um palíndromo.</p><details><summary>Solução 1</summary><h3 id="codigo" tabindex="-1"><a class="header-anchor" href="#codigo" aria-hidden="true">#</a> Código</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">function</span> <span class="token function">ehPalindromo</span><span class="token punctuation">(</span><span class="token parameter">palavra</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> palavraInvertida <span class="token operator">=</span> palavra<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> palavra <span class="token operator">===</span> palavraInvertida<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> palavra1 <span class="token operator">=</span> <span class="token string">&#39;radar&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> resultado1 <span class="token operator">=</span> <span class="token function">ehPalindromo</span><span class="token punctuation">(</span>palavra1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>palavra1<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> é um palíndromo? </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>resultado1 <span class="token operator">?</span> <span class="token string">&#39;Sim&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;Não&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> palavra2 <span class="token operator">=</span> <span class="token string">&#39;javascript&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> resultado2 <span class="token operator">=</span> <span class="token function">ehPalindromo</span><span class="token punctuation">(</span>palavra2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>palavra2<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> é um palíndromo? </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>resultado2 <span class="token operator">?</span> <span class="token string">&#39;Sim&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;Não&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="explicacao" tabindex="-1"><a class="header-anchor" href="#explicacao" aria-hidden="true">#</a> Explicação</h3><p>Nesta solução, criamos uma função ehPalindromo que recebe uma palavra como parâmetro. A função inverte a palavra usando os métodos split, reverse, e join, e então verifica se a palavra original é igual à palavra invertida. Chamamos a função com as palavras &#39;radar&#39; e &#39;javascript&#39; e imprimimos os resultados no console.</p></details><br><details><summary>Solução 2</summary><h3 id="codigo-1" tabindex="-1"><a class="header-anchor" href="#codigo-1" aria-hidden="true">#</a> Código</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">function</span> <span class="token function">ehPalindromo</span><span class="token punctuation">(</span><span class="token parameter">palavra</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> tamanho <span class="token operator">=</span> palavra<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> tamanho <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>palavra<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> palavra<span class="token punctuation">[</span>tamanho <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> palavra1 <span class="token operator">=</span> <span class="token string">&#39;level&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> resultado1 <span class="token operator">=</span> <span class="token function">ehPalindromo</span><span class="token punctuation">(</span>palavra1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>palavra1<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> é um palíndromo? </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>resultado1 <span class="token operator">?</span> <span class="token string">&#39;Sim&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;Não&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> palavra2 <span class="token operator">=</span> <span class="token string">&#39;openai&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> resultado2 <span class="token operator">=</span> <span class="token function">ehPalindromo</span><span class="token punctuation">(</span>palavra2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>palavra2<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> é um palíndromo? </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>resultado2 <span class="token operator">?</span> <span class="token string">&#39;Sim&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;Não&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="explicacao-1" tabindex="-1"><a class="header-anchor" href="#explicacao-1" aria-hidden="true">#</a> Explicação</h3><p>Nesta solução, criamos uma função ehPalindromo que utiliza um loop para comparar os caracteres da palavra original com seus correspondentes na posição oposta. Se em algum ponto esses caracteres não coincidirem, a função retorna false; caso contrário, retorna true. Chamamos a função com as palavras &#39;level&#39; e &#39;openai&#39; e imprimimos os resultados no console.</p></details>`,5),e=[o];function c(i,l){return a(),s("div",null,e)}const k=n(p,[["render",c],["__file","exercise5.html.vue"]]);export{k as default};
