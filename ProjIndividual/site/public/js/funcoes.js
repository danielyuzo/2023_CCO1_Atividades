function validarSessao(adm) {
    if (adm && sessionStorage.ADMIN != 1) {
        window.location = './index.html';
    } else if (!adm && sessionStorage.ID_USUARIO == undefined) {
        window.location = './index.html';
    }
}

function printarHeader() {
    var texto = `
        <div>
        </div>
        <ul>
            <li><a href="index.html">Home</a></li>`;
    if (sessionStorage.ID_USUARIO != null) {
        if (sessionStorage.ADMIN == 1) {
            texto += `<li><a href="post.html">Criar novo Post</a></li>`;
        }
        texto += `
                <li><a href="busca.html">Busca</a></li>
                <li><a href="dashboard.html">Dados</a></li>
                <li onclick="logout()" class="loginButton"><img src="./img/logout.svg" alt="Logout"></li>
            </ul>`;
    } else {
        texto += `
                <li><a href="cadastro.html">Cadastro</a></li>
                <li><a href="busca.html">Busca</a></li>
                <li onclick="exibirLogin()" class="loginButton"><img src="./img/login.svg" alt="Login"></li>
            </ul>`;
    }
    divHeader.innerHTML = texto
}

function printarFooter() {
    divFooter.innerHTML = ``;
}

function obterCategorias() {
    fetch("/categoria/listar/").then((resposta) => {
        if (resposta.ok) {
            resposta.json().then(dados => {
                divCategorias.innerHTML = '';
                for (var i = 0; i < dados.length; i++) {
                    idCategorias.push(`inpCategoria${dados[i].idCategoria}`);
                    divCategorias.innerHTML += `<input id="${idCategorias[i]}" type="checkbox" value="${dados[i].idCategoria}">${dados[i].nome}<br>`;
                }
            });
        } else {
            console.log(resposta);
        }
    }).catch((erro) => {
        console.error(erro);
    });
}