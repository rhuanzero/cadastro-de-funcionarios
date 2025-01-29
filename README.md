# cadastro-de-funcionarios
Este projeto é uma aplicação front-end desenvolvida em HTML, CSS e JavaScript para administrar o cadastro de funcionários. Ele permite incluir, editar e excluir funcionários, com validações de dados e persistência dos registros na própria página.

Funcionalidades:

Tabela de Funcionários:
Inicialmente, a tabela está vazia, exibindo apenas o cabeçalho.
Ao clicar no botão "Novo Funcionário", uma nova linha é adicionada à tabela para inclusão de dados.

Inclusão de Funcionários:
Campos para inclusão de novos funcionários:
CPF: Número inteiro de 11 dígitos.
Nome: Mínimo de 4 caracteres.
Data de Nascimento: Funcionário deve ter 14 anos ou mais.
Estado Civil: Seleção obrigatória entre "Casado", "Solteiro", "Viúvo" e "Divorciado".
Função: Seleção obrigatória entre "Estagiário", "Suporte", "Programador", "Analista Jr", "Analista Pl", "Analista Sr" e "Gerente".
Salário: Valor entre 1.500,00 e 50.000,00.
Validação dos dados e exibição de mensagens de erro, se necessário.
Botões "Salvar" e "Cancelar" para confirmar ou cancelar a inclusão.

Edição de Funcionários:
Ao clicar no botão "Alterar", os campos do funcionário são habilitados para edição.
Validação dos dados atualizados.
Botões "Salvar" e "Cancelar" para confirmar ou cancelar a edição.

Exclusão de Funcionários:
Ao clicar no botão "Excluir", o funcionário é removido da tabela.

Formatação dos Dados:
CPF: Exibido no formato 999.999.999-99.
Data de Nascimento: Exibida no formato DD/MM/AAAA.
Salário: Exibido com vírgula decimal (ex: R$ 1.500,00).

Tecnologias Utilizadas
HTML: Estrutura da página e tabela de funcionários.
CSS: Estilização da tabela, botões e campos de formulário.
JavaScript: Lógica de programação para validação, inclusão, edição e exclusão de funcionários.

Como Usar
Clone o repositório:
git clone https://github.com/seu-usuario/cadastro-de-funcionarios.git
Abra o arquivo cadastro.html no seu navegador.

Incluir Funcionários:
Clique no botão "Novo Funcionário" e preencha os campos com os dados do funcionário.
Clique em "Salvar" para confirmar ou "Cancelar" para descartar.

Editar Funcionários:
Clique no botão "Alterar" na linha do funcionário desejado.
Faça as alterações necessárias e clique em "Salvar" para confirmar ou "Cancelar" para descartar.

Excluir Funcionários:
Clique no botão "Excluir" na linha do funcionário que deseja remover.

Estrutura do Projeto
cadastro.html: Contém a estrutura HTML da página.
cadastro.css: Contém os estilos CSS para a página.
cadastro.js: Contém a lógica JavaScript para manipulação dos dados e interações.
