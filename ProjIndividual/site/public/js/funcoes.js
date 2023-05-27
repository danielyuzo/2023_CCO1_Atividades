function printarHeader() {
    var texto = `
        <div>
        </div>
        <ul>
            <li><a href="index.html">Home</a></li>`;
    console.log(texto);
    if (sessionStorage.ID_USUARIO != null) {
        if (sessionStorage.ADMIN == 1) {
            texto += `<li><a href="post.html">Criar novo Post</a></li>`;
        }
        texto += `
                <li><a href="busca.html">Busca</a></li>
                <li onclick="logout()">Logout</li>
            </ul>`;
    } else {
        texto += `
                <li><a href="cadastro.html">Cadastro</a></li>
                <li><a href="busca.html">Busca</a></li>
                <li onclick="exibirLogin()">Login</li>
            </ul>`;
    }
    console.log(texto);
    divHeader.innerHTML = texto
}

function printarFooter() {
    divFooter.innerHTML = ``;
}