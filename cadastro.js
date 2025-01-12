document.addEventListener("DOMContentLoaded", () => {
    const novoFuncionarioBtn = document.getElementById("novoFuncionario");
    const tabela = document.getElementById("funcionarios").querySelector("tbody");

    let editando = false;

    novoFuncionarioBtn.addEventListener("click", () => {
        if (editando) return;

        editando = true;
        novoFuncionarioBtn.disabled = true;

        const novaLinha = document.createElement("tr");
        
        novaLinha.innerHTML = `
            <td class = "tabela"><input type="text" id="cpf" maxlength="14"><h5 class ="erro" id = 'valcpf'>CPF inválido</h5></td>
            
            <td class = "tabela" style = "text-align: left;"><input type="text" id="nome"><h5 class ="erro" id="valnome">Nome deve ter pelo menos 4 caracteres</h5></td>
            <td class = "tabela"><input type="date" id="nascimento"><h5 class ="erro" id="valdata">Data inválida</h5></td>
            <td class = "estadocivil">
                <input type="radio" name="estadoCivil" value="Solteiro"> Solteiro <br>
                <input type="radio" name="estadoCivil" value="Casado"> Casado<br>
                <input type="radio" name="estadoCivil" value="Viúvo"> Viúvo<br>
                <input type="radio" name="estadoCivil" value="Divorciado"> Divorciado<br>
                <h5 class ="erro" id="valest">Selecione uma opção</h5>
            </td>
            <td class = "tabela">
                <select id="funcao">
                    <option value="">— Selecione —</option>
                    <option value="Estagiário">Estagiário</option>
                    <option value="Suporte">Suporte</option>
                    <option value="Programador">Programador</option>
                    <option value="Analista Jr">Analista Jr</option>
                    <option value="Analista Pl">Analista Pl</option>
                    <option value="Analista Sr">Analista Sr</option>
                    <option value="Gerente">Gerente</option>
                </select>
                <h5 class ="erro" id ="valfunc">Selecione uma opção</h5>
            </td>
            <td class = "tabela"><input type="number" id="salario" min="1500" max="50000"><h5 class ="erro" id ="valsal">Salário inválido</h5></td>
            <td class = "tabela">
                <button id="salvar">Salvar</button>
                <button id="cancelar">Cancelar</button>
            </td>
        `;

        tabela.appendChild(novaLinha);

        const salvarBtn = novaLinha.querySelector("#salvar");
        const cancelarBtn = novaLinha.querySelector("#cancelar");

        salvarBtn.addEventListener("click", () => salvarFuncionario(novaLinha));
        cancelarBtn.addEventListener("click", () => cancelarEdicao(novaLinha));
    });

    function salvarFuncionario(linha) {
        const cpf = linha.querySelector("#cpf").value.trim();
        const nome = linha.querySelector("#nome").value.trim();
        const nascimento = linha.querySelector("#nascimento").value;
        const estadoCivil = linha.querySelector("input[name='estadoCivil']:checked")?.value;
        const funcao = linha.querySelector("#funcao").value;
        const salario = linha.querySelector("#salario").value;
        
        if (!validarDados({ cpf, nome, nascimento, estadoCivil, funcao, salario })) {
            return;
        }

        linha.innerHTML = `
            <td class = "tabela2">${formatarCPF(cpf)}</td>
            <td class = "tabela2" style = "text-align: left;">${nome}</td>
            <td class = "tabela">${formatarData(nascimento)}</td>
            <td class = "tabela">${estadoCivil}</td>
            <td class = "tabela">${funcao}</td>
            <td class = "tabela">${Number(salario).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
            <td class = "tabela">
                <button class="excluir">Excluir</button>
                <button class="alterar">Alterar</button>
            </td>
        `;

        linha.querySelector(".excluir").addEventListener("click", () => linha.remove());
        linha.querySelector(".alterar").addEventListener("click", () => editarFuncionario(linha));
        


        editando = false;
        novoFuncionarioBtn.disabled = false;
    }

    function cancelarEdicao(linha) {
        linha.remove();
        editando = false;
        novoFuncionarioBtn.disabled = false;
    }

    function validarDados({ cpf, nome, nascimento, estadoCivil, funcao, salario }) {
        let valido = true;
    
        if (cpf.length !== 11 || isNaN(cpf)) {
            document.getElementById('valcpf').style.display = 'block';
            valido = false;
        }
        else{document.getElementById('valcpf').style.display = 'none';}


        if (nome.length < 4) {
            document.getElementById('valnome').style.display = 'block';
            valido = false;
        }
        else{
            document.getElementById('valnome').style.display = 'none';
        }

        if (!nascimento || calcularIdade(nascimento) < 14) {
            document.getElementById('valdata').style.display = 'block';
            valido = false;
        }
        else{
            document.getElementById('valdata').style.display = 'none';
        }

        if (!estadoCivil) {
            document.getElementById('valest').style.display = 'block';
            valido = false;
        }
        else{
            document.getElementById('valest').style.display = 'none';
        }

        if (!funcao) {
            document.getElementById('valfunc').style.display = 'block';
            valido = false;
        }
        else{
            document.getElementById('valfunc').style.display = 'none';
        }

        if (salario < 1500 || salario > 50000) {
            document.getElementById('valsal').style.display = 'block';
            valido = false;
        }
        else{
            document.getElementById('valsal').style.display = 'none';
        }
        
        return valido;
    }

    function calcularIdade(dataNascimento) {
        const hoje = new Date();
        const nascimento = new Date(dataNascimento);
        let idade = hoje.getFullYear() - nascimento.getFullYear();
        const mes = hoje.getMonth() - nascimento.getMonth();
        if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
            idade--;
        }
        return idade;
    }

    function formatarCPF(cpf) {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }

    function formatarData(data) {
        const [ano, mes, dia] = data.split("-");
        return `${dia}/${mes}/${ano}`;
    }

    function editarFuncionario(linha) {
        novoFuncionarioBtn.disabled = true;
        const linhant = linha;
        const cpf = linha.querySelector("td:nth-child(1)").textContent.replace(/\D/g, '');
        const nome = linha.querySelector("td:nth-child(2)").textContent;
        const nascimento = linha.querySelector("td:nth-child(3)").textContent;
        const estadoCivil = linha.querySelector("td:nth-child(4)").textContent;
        const funcao = linha.querySelector("td:nth-child(5)").textContent;
        const salario = linha.querySelector("td:nth-child(6)").textContent.replace("R$ ", "").replace(/\./g, '').replace(',', '.');

    
        const novaLinha = document.createElement("tr");
        
        novaLinha.innerHTML = `
            <td class = "tabela2" ><input type="text" id="cpf" value="${cpf}" maxlength="14"><h5 class ="erro" id = 'valcpf'>CPF inválido</h5></td>
            <td class = "tabela2" style = "text-align: left;"><input type="text" id="nome" value="${nome}"><h5 class ="erro" id="valnome">Nome deve ter pelo menos 4 caracteres</h5></td>
            <td class = "tabela"><input type="date" id="nascimento" value="${formatarDataParaInputDate(nascimento)}"><h5 class ="erro" id="valdata">Data inválida</h5></td>
            <td class = "estadocivil">
                <input type="radio" name="estadoCivil" value="Solteiro" ${estadoCivil === "Solteiro" ? "checked" : ""}> Solteiro<br>
                <input type="radio" name="estadoCivil" value="Casado" ${estadoCivil === "Casado" ? "checked" : ""}> Casado<br>
                <input type="radio" name="estadoCivil" value="Viúvo" ${estadoCivil === "Viúvo" ? "checked" : ""}> Viúvo<br>
                <input type="radio" name="estadoCivil" value="Divorciado" ${estadoCivil === "Divorciado" ? "checked" : ""}> Divorciado<br>
                <h5 class ="erro" id="valest">Selecione uma opção</h5>
            </td>
            <td class = "tabela">
                <select id="funcao">
                    <option value="Estagiário" ${funcao === "Estagiário" ? "selected" : ""}>Estagiário</option>
                    <option value="Suporte" ${funcao === "Suporte" ? "selected" : ""}>Suporte</option>
                    <option value="Programador" ${funcao === "Programador" ? "selected" : ""}>Programador</option>
                    <option value="Analista Jr" ${funcao === "Analista Jr" ? "selected" : ""}>Analista Jr</option>
                    <option value="Analista Pl" ${funcao === "Analista Pl" ? "selected" : ""}>Analista Pl</option>
                    <option value="Analista Sr" ${funcao === "Analista Sr" ? "selected" : ""}>Analista Sr</option>
                    <option value="Gerente" ${funcao === "Gerente" ? "selected" : ""}>Gerente</option>
                </select>
                <h5 class ="erro" id ="valfunc">Selecione uma opção</h5>
            </td>
            <td class = "tabela"><input type="number" id="salario" value="${salario}" min="1500" max="50000"><h5 class ="erro" id ="valsal">Salário inválido</h5></td>
            <td class = "tabela">
                <button id="salvar">Salvar</button>
                <button id="cancelar">Cancelar</button>
            </td>
        `;

        linha.replaceWith(novaLinha);

        const salvarBtn = novaLinha.querySelector("#salvar");
        const cancelarBtn = novaLinha.querySelector("#cancelar");

        salvarBtn.addEventListener("click", () => salvarFuncionario(novaLinha));
        cancelarBtn.addEventListener("click", () => cancelarAlteracao(novaLinha, linhant));
    }

    function cancelarAlteracao(linha, linhant) {
        linha.replaceWith(linhant);
        editando = false;
        novoFuncionarioBtn.disabled = false;
    }

    function formatarDataParaInputDate(data) {
        const [dia, mes, ano] = data.split("/");
        return `${ano}-${mes}-${dia}`;
    }
    
});
