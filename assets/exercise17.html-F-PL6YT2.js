import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as p}from"./app-nb1Fahdj.js";const o={},t=p(`<h2 id="calculadora-simples" tabindex="-1"><a class="header-anchor" href="#calculadora-simples" aria-hidden="true">#</a> Calculadora Simples</h2><p>Implemente uma calculadora simples que realiza operações básicas (adição, subtração, multiplicação, divisão).</p><details><summary>Solução</summary><h3 id="codigo" tabindex="-1"><a class="header-anchor" href="#codigo" aria-hidden="true">#</a> Código</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">function</span> <span class="token function">calcular</span><span class="token punctuation">(</span><span class="token parameter">operacao<span class="token punctuation">,</span> numero1<span class="token punctuation">,</span> numero2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">switch</span> <span class="token punctuation">(</span>operacao<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">case</span> <span class="token string">&#39;adição&#39;</span><span class="token operator">:</span>
              <span class="token keyword">return</span> numero1 <span class="token operator">+</span> numero2<span class="token punctuation">;</span>
          <span class="token keyword">case</span> <span class="token string">&#39;subtração&#39;</span><span class="token operator">:</span>
              <span class="token keyword">return</span> numero1 <span class="token operator">-</span> numero2<span class="token punctuation">;</span>
          <span class="token keyword">case</span> <span class="token string">&#39;multiplicação&#39;</span><span class="token operator">:</span>
              <span class="token keyword">return</span> numero1 <span class="token operator">*</span> numero2<span class="token punctuation">;</span>
          <span class="token keyword">case</span> <span class="token string">&#39;divisão&#39;</span><span class="token operator">:</span>
              <span class="token keyword">if</span> <span class="token punctuation">(</span>numero2 <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                  <span class="token keyword">return</span> numero1 <span class="token operator">/</span> numero2<span class="token punctuation">;</span>
              <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                  <span class="token keyword">return</span> <span class="token string">&#39;Não é possível dividir por zero.&#39;</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span>
          <span class="token keyword">default</span><span class="token operator">:</span>
              <span class="token keyword">return</span> <span class="token string">&#39;Operação inválida.&#39;</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Exemplos de uso</span>
  <span class="token keyword">const</span> resultado1 <span class="token operator">=</span> <span class="token function">calcular</span><span class="token punctuation">(</span><span class="token string">&#39;adição&#39;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;5 + 3 =&#39;</span><span class="token punctuation">,</span> resultado1<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> resultado2 <span class="token operator">=</span> <span class="token function">calcular</span><span class="token punctuation">(</span><span class="token string">&#39;subtração&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;10 - 4 =&#39;</span><span class="token punctuation">,</span> resultado2<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> resultado3 <span class="token operator">=</span> <span class="token function">calcular</span><span class="token punctuation">(</span><span class="token string">&#39;multiplicação&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;2 * 6 =&#39;</span><span class="token punctuation">,</span> resultado3<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> resultado4 <span class="token operator">=</span> <span class="token function">calcular</span><span class="token punctuation">(</span><span class="token string">&#39;divisão&#39;</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;8 / 2 =&#39;</span><span class="token punctuation">,</span> resultado4<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> resultado5 <span class="token operator">=</span> <span class="token function">calcular</span><span class="token punctuation">(</span><span class="token string">&#39;divisão&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;10 / 0 =&#39;</span><span class="token punctuation">,</span> resultado5<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="explicacao" tabindex="-1"><a class="header-anchor" href="#explicacao" aria-hidden="true">#</a> Explicação</h3><p>Nesta implementação, a função calcular recebe a operação desejada (&#39;adição&#39;, &#39;subtração&#39;, &#39;multiplicação&#39; ou &#39;divisão&#39;) e dois números como argumentos. A função utiliza um switch para realizar a operação correspondente e retorna o resultado. Há uma verificação para evitar a divisão por zero.</p></details>`,3),e=[t];function c(l,i){return s(),a("div",null,e)}const k=n(o,[["render",c],["__file","exercise17.html.vue"]]);export{k as default};
