function exibirLogin() {
    loginContainer.style.display = 'flex';
}

function entrar() {

    var nomeVar = inpNomeLogin.value;
    var senhaVar = inpSenhaLogin.value;

    if (nomeVar == "" || senhaVar == "") {
        //cardErro.style.display = "block"
        spanErroLogin.innerHTML = "Usuário ou senha inválidos";
        return false;
    }

    console.log("FORM LOGIN: ", nomeVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nomeServer: nomeVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            spanErroLogin.innerHTML = '';
            spanErroLogin.style.display = 'none';
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.username;
                sessionStorage.ID_USUARIO = json.idUsuario;

                setTimeout(function () {
                    window.location = "./index.html";
                }, 1000); // apenas para exibir o loading

            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");
            spanErroLogin.innerHTML = "Usuário ou senha inválidos";
            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}