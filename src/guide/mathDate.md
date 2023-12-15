---
title: Math e Date
icon: check
---

# Math e Date

## Math

O objeto `Math` em JavaScript fornece métodos e propriedades para realizar operações matemáticas. Aqui está um resumo das principais propriedades e métodos do objeto `Math`:

### **Propriedades:**

1. **`Math.E`:**
   - **Descrição:** Retorna a base do logaritmo natural, aproximadamente igual a 2.718.
   - **Exemplo:**
     ```javascript
     console.log(Math.E); // Saída: 2.718281828459045
     ```

2. **`Math.PI`:**
   - **Descrição:** Retorna o valor de PI (π), a constante matemática.
   - **Exemplo:**
     ```javascript
     console.log(Math.PI); // Saída: 3.141592653589793
     ```

### **Métodos:**

1. **`Math.abs(x)`:**
   - **Descrição:** Retorna o valor absoluto de um número.
   - **Exemplo:**
     ```javascript
     console.log(Math.abs(-5)); // Saída: 5
     ```

2. **`Math.sqrt(x)`:**
   - **Descrição:** Retorna a raiz quadrada de um número.
   - **Exemplo:**
     ```javascript
     console.log(Math.sqrt(25)); // Saída: 5
     ```

3. **`Math.pow(x, y)`:**
   - **Descrição:** Retorna a base elevada à potência de um expoente.
   - **Exemplo:**
     ```javascript
     console.log(Math.pow(2, 3)); // Saída: 8
     ```

4. **`Math.floor(x)`:**
   - **Descrição:** Retorna o maior número inteiro menor ou igual a um determinado número.
   - **Exemplo:**
     ```javascript
     console.log(Math.floor(5.7)); // Saída: 5
     ```

5. **`Math.ceil(x)`:**
   - **Descrição:** Retorna o menor número inteiro maior ou igual a um determinado número.
   - **Exemplo:**
     ```javascript
     console.log(Math.ceil(5.1)); // Saída: 6
     ```

6. **`Math.round(x)`:**
   - **Descrição:** Retorna o valor arredondado de um número para o inteiro mais próximo.
   - **Exemplo:**
     ```javascript
     console.log(Math.round(5.4)); // Saída: 5
     console.log(Math.round(5.6)); // Saída: 6
     ```

7. **`Math.random()`:**
   - **Descrição:** Retorna um número pseudoaleatório entre 0 (inclusive) e 1 (exclusive).
   - **Exemplo:**
     ```javascript
     console.log(Math.random()); // Saída: Valor aleatório entre 0 e 1
     ```

    Para gerar números aleatórios dentro de um conjunto desejado, diferente de 0-1, podemos multiplicar seu resultado pelo conjunto esperado.

    - **Exemplo:**
     ```javascript
     // números entre 0 e 10
     console.log(Math.random() * 10)
     // números entre 0 e 50
     console.log(Math.random() * 50)
     // números entre 20 e 50
     console.log(Math.random() * 30 + 20)
     ```

8. **`Math.sin(x)`, `Math.cos(x)`, `Math.tan(x)`:**
   - **Descrição:** Funções trigonométricas que retornam o seno, cosseno e tangente de um ângulo, respectivamente.
   - **Exemplo:**
     ```javascript
     console.log(Math.sin(Math.PI / 2)); // Saída: 1 (seno de 90 graus)
     ```

9. **`Math.max(x, y, ...)`, `Math.min(x, y, ...)`:**
   - **Descrição:** Retorna o maior (ou menor) valor de um conjunto de números.
   - **Exemplo:**
     ```javascript
     console.log(Math.max(3, 7, 2, 8)); // Saída: 8
     ```

10. **`Math.log(x)`:**
    - **Descrição:** Retorna o logaritmo natural (base e) de um número.
    - **Exemplo:**
      ```javascript
      console.log(Math.log(Math.E)); // Saída: 1
      ```

Estes são apenas alguns dos muitos métodos e propriedades disponíveis no objeto `Math`. Ele é uma ferramenta fundamental para realizar operações matemáticas em JavaScript.

## Date

**Classe Date em JavaScript: Resumo Completo**

A classe `Date` em JavaScript é usada para trabalhar com datas e horas. Ela oferece construtores e métodos que permitem criar, manipular e exibir datas. Aqui está um resumo dos principais aspectos da classe `Date`:

### **1. Criando uma Instância Date:**
   - Pode ser criada sem argumentos para representar a data e hora atuais ou com argumentos para uma data específica.

    ```javascript
    // Data e hora atuais
    let dataAtual = new Date();
    console.log(dataAtual); // Fri Dec 15 2023 17:52:37 GMT-0300 (Horário Padrão de Brasília)

    // Data específica (ano, mês - 1, dia, hora, minuto, segundo, milissegundo)
    let dataEspecifica = new Date(2023, 0, 15, 12, 30, 0, 0);
    ```

    Para criar datas específicas, podemos usar o modelo apresentado anteriormente ou outros como vemos a seguir:

    ```javascript
    console.log(new Date(2023, 1, 25))
    // Sat Feb 25 2023 00:00:00 GMT-0300 (Horário Padrão de Brasília)

    const quaseNatal = new Date(2024, 11, 24, 23, 59, 59)
    console.log(quaseNatal)
    // Wed Dec 24 2024 23:59:59 GMT-0300 (Horário Padrão de Brasília)

    // Criando apartir de string
    const quaseNatal = new Date("December 24, 2021 23:59:59")
    console.log(quaseNatal)
    // Fri Dec 24 2021 23:59:59 GMT-0300 (Horário Padrão de Brasília)
    ```

### **2. Métodos Principais:**

#### **`getDate()`, `getMonth()`, `getFullYear()`:**
   - Obtêm o dia, mês e ano da data.

    ```javascript
    console.log(dataAtual.getDate());    // Dia
    console.log(dataAtual.getMonth() + 1); // Mês (0 a 11, adicionamos 1)
    console.log(dataAtual.getFullYear()); // Ano
    ```

#### **`getHours()`, `getMinutes()`, `getSeconds()`:**
   - Obtêm a hora, minutos e segundos da data.

    ```javascript
    console.log(dataAtual.getHours());    // Hora
    console.log(dataAtual.getMinutes());  // Minutos
    console.log(dataAtual.getSeconds());  // Segundos
    ```

#### **`getTime()`:**
   - Retorna o número de milissegundos desde 1 de janeiro de 1970 (Epoch).

    ```javascript
    console.log(dataAtual.getTime()); // Milissegundos desde 1 de janeiro de 1970
    ```

### **3. Métodos de Modificação:**

#### **`setFullYear(year)`, `setMonth(month)`, `setDate(day)`:**
   - Define o ano, mês e dia da data.

    ```javascript
    dataAtual.setFullYear(2024);
    dataAtual.setMonth(3); // Mês (0 a 11)
    dataAtual.setDate(25); // Dia
    ```

#### **`setHours(hours)`, `setMinutes(minutes)`, `setSeconds(seconds)`:**
   - Define a hora, minutos e segundos da data.

    ```javascript
    dataAtual.setHours(14);    // Hora
    dataAtual.setMinutes(45);  // Minutos
    dataAtual.setSeconds(30);  // Segundos
    ```

### **4. Formatação de Data:**

#### **Formato de String Personalizado:**
   - Para formatar uma data como uma string, muitas vezes é usado em conjunto com métodos de `toLocaleString()`.

    ```javascript
    let dataFormatada = dataAtual.toLocaleString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    });
    ```

### **5. Exemplo de Uso Real:**
   - Um exemplo comum é criar uma função que exibe a data atual de forma amigável.

    ```javascript
    function exibirDataAtual() {
      let agora = new Date();
      let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      console.log(agora.toLocaleDateString('pt-BR', options));
    }

    exibirDataAtual();
    ```

A classe `Date` fornece uma ampla gama de funcionalidades para trabalhar com datas e horas em JavaScript, sendo essencial para muitas aplicações que envolvem manipulação de tempo.

### Exibição de valor singular

A classe também possui diferentes métodos de exibir a data, com diversos formatos possíveis do tipo string. 
De acordo com o elemento que quisermos apresentar, poderemos optar por uma das seguintes opções:

```javascript
const data = new Date("December 17, 2024")

console.log(data.toDateString()) // Tue Dec 17 2024
console.log(data.toLocaleString()) // 17/12/2024, 00:00:00
console.log(data.toLocaleDateString()) // 17/12/2024
console.log(data.toTimeString()) // 00:00:00 GMT-0300 (Horário Padrão de Brasília)
```

Mais opções disponíveis que podem ser visualizadas na documentação ([Date - JavaScript | MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date))