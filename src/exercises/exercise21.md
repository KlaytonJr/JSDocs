---
title: Exercício 21
icon: dumbbell
order: 21
category:
  - Exercises
tag:
  - exercise
---

## Gerador de CPF

Crie uma função que gera um CPF válido.

<details>
  <summary>Solução</summary>

  ### Código
  ```js
    function gerarCPF() {
        function gerarDigitoVerificador(cpfParcial) {
            let soma = 0;
            let peso = 10;

            for (let i = 0; i < cpfParcial.length; i++) {
            soma += parseInt(cpfParcial[i]) * peso;
            peso--;
            }

            const resto = soma % 11;
            const digito = (resto < 2) ? 0 : 11 - resto;
            return digito.toString();
        }

        // Gera os nove primeiros dígitos do CPF
        let cpfParcial = '';
        for (let i = 0; i < 9; i++) {
            cpfParcial += Math.floor(Math.random() * 10).toString();
        }

        // Gera os dois dígitos verificadores
        const digito1 = gerarDigitoVerificador(cpfParcial);
        const digito2 = gerarDigitoVerificador(cpfParcial + digito1);

        // Retorna o CPF completo
        return cpfParcial + digito1 + digito2;
    }

    // Exemplo de uso
    const cpfGerado = gerarCPF();
    console.log('CPF gerado:', cpfGerado);
  ```

  ### Explicação
  Nesta função, primeiro geramos os nove primeiros dígitos do CPF aleatoriamente. Em seguida, calculamos os dois dígitos verificadores usando a função gerarDigitoVerificador. Finalmente, combinamos todos os elementos para formar um CPF válido.

  Por favor, note que este CPF gerado é apenas para fins educacionais e não deve ser utilizado para atividades ilegais ou fraudulentas.

  ### Mascarar e Desmascarar CPF

  ```js
    function formatarCPF(cpf) {
        // Adiciona a máscara ao CPF
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }

    function removerMascaraCPF(cpf) {
        // Remove a máscara do CPF
        return cpf.replace(/[^\d]/g, '');
    }

    // Exemplo de uso com o CPF gerado
    const cpfGerado = gerarCPF();
    const cpfFormatado = formatarCPF(cpfGerado);
    const cpfSemMascara = removerMascaraCPF(cpfFormatado);

    console.log('CPF gerado:', cpfGerado);
    console.log('CPF formatado:', cpfFormatado);
    console.log('CPF sem máscara:', cpfSemMascara);
  ```

  #### Explicação

  A função formatarCPF adiciona a máscara ao CPF, e a função removerMascaraCPF remove a máscara de um CPF formatado. Os exemplos demonstram como utilizar essas funções em conjunto com o CPF gerado pela função gerarCPF. Você pode testar as funções com outros CPFs conforme necessário.
</details>
