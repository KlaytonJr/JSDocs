---
title: Exercício 15
icon: dumbbell
order: 15
category:
  - Exercises
tag:
  - exercise
---

## Validação de CPF

Crie uma função que valida se um CPF é válido ou não.

<details>
  <summary>Solução</summary>

  ### Código
  ```js
    function validarCPF(cpf) {
        // Remove caracteres não numéricos
        cpf = cpf.replace(/\D/g, '');

        // Verifica se o CPF tem 11 dígitos
        if (cpf.length !== 11) {
            return false;
        }

        // Verifica se todos os dígitos são iguais
        if (/^(\d)\1+$/.test(cpf)) {
            return false;
        }

        // Calcula e verifica o primeiro dígito verificador
        let soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpf.charAt(i)) * (10 - i);
        }
        let resto = soma % 11;
        let digitoVerificador1 = resto < 2 ? 0 : 11 - resto;

        if (parseInt(cpf.charAt(9)) !== digitoVerificador1) {
            return false;
        }

        // Calcula e verifica o segundo dígito verificador
        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpf.charAt(i)) * (11 - i);
        }
        resto = soma % 11;
        let digitoVerificador2 = resto < 2 ? 0 : 11 - resto;

        return parseInt(cpf.charAt(10)) === digitoVerificador2;
    }

    // Exemplos
    const cpf1 = '123.456.789-09';
    console.log(`O CPF ${cpf1} é válido? ${validarCPF(cpf1) ? 'Sim' : 'Não'}`);

    const cpf2 = '111.222.333-44';
    console.log(`O CPF ${cpf2} é válido? ${validarCPF(cpf2) ? 'Sim' : 'Não'}`);
  ```

  ### Explicação
  Nesta implementação, a função validarCPF realiza os seguintes passos:

  1. Remove caracteres não numéricos do CPF.
  2. Verifica se o CPF possui 11 dígitos.
  3. Verifica se todos os dígitos do CPF são iguais, o que seria inválido.
  4. Calcula e verifica o primeiro dígito verificador.
  5. Calcula e verifica o segundo dígito verificador.
  
  Os exemplos demonstram como utilizar a função para validar CPFs específicos. Você pode testar com outros CPFs conforme necessário.
</details>