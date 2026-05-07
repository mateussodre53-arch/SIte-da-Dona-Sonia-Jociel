const FORM_CADASTRAR = document.getElementById("form-cadastrar")

if (FORM_CADASTRAR) {

    FORM_CADASTRAR.addEventListener("submit", function (event) {
        event.preventDefault()
       
       const usuario = {
            nome: document.getElementById("nome").value,
            sobrenome: document.getElementById("sobrenome").value,
            email: document.getElementById("email").value,
            senha: document.getElementById("senha").value,
            ddd: document.getElementById("ddd").value,
            telefone: document.getElementById("telefone").value,
            endereco: document.getElementById("endereco").value,
            numero: document.getElementById("numero").value,
            cidade: document.getElementById("cidade").value,
            cep: document.getElementById("cep").value,
            dataNascimento: document.getElementById("data-nascimento").value,
            genero: document.getElementById("genero").selectedOptions[0].text
        }
        /*set salva get pega*/
        localStorage.setItem("usuarioCadastrado", JSON.stringify(usuario))
        alert("Cadastro Realizado com SUCESSO!")
        window.location.href = "login.html"
    })
}

//partre de login

const FORM_LOGIN = document.getElementById("form")

if (FORM_LOGAR) {

    FORM_LOGAR.addEventListener("submit", function(event){
        event.preventDefault()

    const usuarioCadastrado = localStorage.getItem("usuarioCadastrado")
    
    if(usuarioCadastrado) {
            const usuarioEncontrado = JSON.parse(usuarioCadastrado)


            var emailDigitado = document.getElementById("email").value
            var senhaDigitada = document.getElementById("senha").value

            if (emailDigitado == usuarioEncontrado.email && senhaDigitada == usuarioEncontrado.senha) {
                alert("Usuário Logado com Sucesso!")
                window.location.href = "index.html"
            }else {
                alert("ATENÇÃO: Email ou senha Incorretos")
            }

        }else{
            alert("Nenhum usuário cadastrado encontrado")
        }

    })

}