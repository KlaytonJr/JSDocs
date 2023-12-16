---
title: JavaScript na WEB
icon: check
---

# JavaScript na WEB

## **DOM (Document Object Model)**

### **O que é o DOM**

O DOM (Document Object Model) é uma representação em forma de árvore da estrutura de um documento HTML ou XML. Ele é fornecido pelo navegador e serve como uma interface para interagir e manipular dinamicamente os elementos presentes em uma página web.

### **Estrutura do DOM**

1. **Documento (Document):**
   - Representa a página web como um todo.

2. **Elementos (Elements):**
   - Representam as tags HTML na árvore do DOM.

3. **Atributos (Attributes):**
   - Propriedades dos elementos que fornecem informações adicionais.

4. **Texto (Text):**
   - Conteúdo de texto dentro de elementos.

5. **Nós (Nodes):**
   - Tudo no DOM é um nó, incluindo elementos, atributos e texto.

### **Como o DOM é Criado**

1. **Parse HTML:**
   - O navegador analisa o código HTML para criar a estrutura inicial do DOM.

2. **Construção da Árvore:**
   - A árvore do DOM é construída com base na hierarquia das tags HTML.

3. **Manipulação Dinâmica:**
   - JavaScript pode ser usado para adicionar, remover ou modificar elementos após o carregamento inicial da página.

### **Manipulação do DOM com JavaScript**

1. **Seleção de Elementos:**
   - Utilize métodos como `getElementById`, `getElementsByClassName`, `getElementsByTagName`, `querySelector`, e `querySelectorAll` para selecionar elementos.

   ```javascript
   const meuElemento = document.getElementById('meu-id');
   ```

2. **Manipulação de Conteúdo:**
   - Modifique o conteúdo dos elementos usando propriedades como `innerHTML` e `textContent`.

   ```javascript
   meuElemento.innerHTML = 'Novo Conteúdo';
   ```

3. **Atributos:**
   - Acesse e modifique atributos dos elementos.

   ```javascript
   meuElemento.setAttribute('atributo', 'valor');
   ```

4. **Manipulação de Classes:**
   - Adicione, remova ou verifique classes em elementos.

   ```javascript
   meuElemento.classList.add('minha-classe');
   ```

5. **Manipulação de Estilos:**
   - Altere estilos de elementos.

   ```javascript
   meuElemento.style.color = 'blue';
   ```

6. **Criação de Elementos:**
   - Crie novos elementos dinamicamente.

   ```javascript
   const novoElemento = document.createElement('div');
   ```

7. **Inserção e Remoção de Elementos:**
   - Adicione ou remova elementos da árvore do DOM.

   ```javascript
   meuElemento.appendChild(novoElemento);  // Adição
   meuElemento.removeChild(novoElemento);  // Remoção
   ```

### **Eventos no DOM**

1. **Adição de Eventos:**
   - Associe funções a eventos usando métodos como `addEventListener`.

   ```javascript
   meuElemento.addEventListener('click', minhaFuncao);
   ```

2. **Objeto de Evento:**
   - Informações sobre o evento são passadas para a função de manipulação.

   ```javascript
   function minhaFuncao(evento) {
     console.log(evento.target);
   }
   ```

3. **Tipos de eventos:**

Existem diversos tipos de eventos na DOM (Document Object Model), cada um representando uma interação ou ação do usuário com a página web. Aqui estão alguns tipos comuns de eventos na DOM:

   - **Eventos de Mouse:**
      - `click`: Ocorrência quando o botão do mouse é clicado.
      - `dblclick`: Ocorrência quando o botão do mouse é clicado duas vezes.
      - `mousedown`: Ocorrência quando um botão do mouse é pressionado.
      - `mouseup`: Ocorrência quando um botão do mouse é liberado.
      - `mousemove`: Ocorrência quando o mouse é movido sobre um elemento.

   - **Eventos de Teclado:**
      - `keydown`: Ocorrência quando uma tecla é pressionada.
      - `keyup`: Ocorrência quando uma tecla é liberada.
      - `keypress`: Ocorrência quando uma tecla é pressionada e liberada.

   - **Eventos de Formulário:**
      - `submit`: Ocorrência quando um formulário é enviado.
      - `change`: Ocorrência quando o valor de um elemento de formulário é alterado.
      - `input`: Ocorrência quando o valor de um campo de entrada é alterado (também inclui mudanças por meio de digitação).

   - **Eventos de Foco:**
      - `focus`: Ocorrência quando um elemento recebe foco.
      - `blur`: Ocorrência quando um elemento perde o foco.

   - **Eventos de Janela:**
      - `load`: Ocorrência quando a página é completamente carregada.
      - `unload`: Ocorrência quando a página é descarregada (fechamento da janela ou navegação para outra página).
      - `resize`: Ocorrência quando a janela do navegador é redimensionada.

   - **Eventos de Tempo:**
      - `setTimeout`: Ocorrência após um determinado intervalo de tempo.
      - `setInterval`: Ocorrência em intervalos regulares.

   - **Eventos de Arrastar e Soltar:**
      - `dragstart`: Ocorrência quando um elemento é arrastado.
      - `dragend`: Ocorrência quando o processo de arrastar é concluído.
      - `dragover`, `dragenter`, `dragleave`: Ocorrências relacionadas ao evento de arrastar sobre elementos.

   - **Eventos de Toque (em dispositivos móveis):**
      - `touchstart`, `touchend`, `touchmove`: Ocorrências relacionadas a eventos de toque na tela.

Esses são apenas alguns exemplos de eventos disponíveis na DOM. Cada tipo de elemento pode ter diferentes eventos associados a ele, e os desenvolvedores podem criar e disparar eventos personalizados conforme necessário.

### **Conclusão**

O DOM é essencial para a interatividade em páginas web, permitindo que desenvolvedores manipulem dinamicamente a estrutura, conteúdo e estilo dos elementos. A manipulação do DOM com JavaScript é uma parte fundamental do desenvolvimento web moderno, proporcionando uma experiência interativa aos usuários.