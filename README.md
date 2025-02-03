# Cadastro de Funcionários

Este projeto é uma aplicação web interativa para gerenciamento de funcionários, permitindo cadastro, edição e exclusão de dados por meio de uma interface dinâmica.

## 📋 Funcionalidades

- **Adicionar funcionários** preenchendo os seguintes campos:
  - CPF (formato válido: `999.999.999-99`)
  - Nome (mínimo 4 caracteres)
  - Data de nascimento (idade mínima: 14 anos)
  - Estado civil (`Casado`, `Solteiro`, `Viúvo`, `Divorciado`)
  - Função (`Estagiário`, `Suporte`, `Programador`, `Analista Jr`, `Analista Pl`, `Analista Sr`, `Gerente`)
  - Salário (entre R$1500,00 e R$50000,00)
- **Excluir funcionários** da tabela.
- **Editar funcionários**, permitindo a alteração de seus dados.
- **Validações dinâmicas** com mensagens de erro exibidas abaixo dos campos inválidos.
- **Interface interativa**, sem necessidade de recarregar a página.

## 🛠️ Conceitos Utilizados

### 🔹 HTML
- Estruturação da página utilizando **tabelas (`<table>`)** para exibição dos dados.
- Formulários dinâmicos dentro da tabela, utilizando **`<input>` e `<select>`** para entrada de dados.
- Uso de **botões (`<button>`)** para interatividade (Novo Funcionário, Salvar, Editar, Excluir).

### 🎨 CSS
- Estilização da interface utilizando **seletores CSS** para diferenciar estados dos elementos.
- Uso de **Flexbox e Display Table** para organização dos elementos.
- Manipulação de cores e bordas para realçar estados (erros, botões desativados, etc.).

### ⚡ JavaScript
- Manipulação do **DOM** para adicionar, remover e modificar elementos da tabela.
- Uso de **event listeners** (`addEventListener`) para capturar ações do usuário.
- **Validação de entrada de dados** antes da inserção na tabela.
- Aplicação de **formatos específicos** (ex: CPF `999.999.999-99`, data `DD/MM/AAAA`).
- Alteração dinâmica de elementos via **`innerHTML` e `outerHTML`**.
- Uso de **query selectors** para recuperar e modificar valores de `<input>` e `<select>`.
- Implementação de **botões dinâmicos** (ativação/desativação conforme estado da interface).

## 📂 Estrutura do Projeto

📦 **cadastro-de-funcionarios**  
📜 **index.html** → Estrutura da página e tabela de funcionários  
📜 **styles.css** → Estilos visuais para a interface  
📜 **script.js** → Lógica para adicionar, editar e excluir funcionários  

## 🖥️ Como Executar

1. Clone o repositório:  
   ```sh
   git clone https://github.com/rhuanzero/cadastro-de-funcionarios.git

2. Acesse a pasta do projeto:
    ```sh
    cd cadastro-de-funcionarios
3. Abra o arquivo cadastro.html no navegador.


