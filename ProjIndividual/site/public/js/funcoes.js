function validarSessao(adm) {
    if (adm && sessionStorage.ADMIN != 1) {
        window.location = './index.html';
    } else if (!adm && sessionStorage.ID_USUARIO == undefined) {
        window.location = './index.html';
    }
}

function printarHeader() {
    var texto = `
        <div class="icone" onclick="window.location = 'index.html';">
        O Violista
        <img src="./img/icon_underline.svg">
        </div>
        <ul>
            <li onclick="window.location = 'index.html'"><a>Home</a></li>`;
    if (sessionStorage.ID_USUARIO != null) {
        if (sessionStorage.ADMIN == 1) {
            texto += `<li onclick="window.location = 'post.html'"><a>Criar novo Post</a></li>`;
        }
        texto += `
                <li onclick="window.location = 'busca.html'"><a>Busca</a></li>
                <li onclick="window.location = 'dashboard.html'"><a>Dados</a></li>
                <li onclick="logout()" class="loginButton"><img src="./img/logout.svg" alt="Logout"></li>
            </ul>`;
    } else {
        texto += `
                <li onclick="window.location = 'cadastro.html'"><a>Cadastro</a></li>
                <li onclick="window.location = 'busca.html'"><a>Busca</a></li>
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
                divCategorias.innerHTML = 'Categorias: <br>';
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