function validar() {
    var usuario = form1.usuario.value;
    var senha = form1.senha.value;

    if (usuario == "") {
        alert("Preencha o campo com o seu usuário.");
    }else if (usuario.length < 6) {
        alert("Seu nome de usuário deve conter no mínimo 6 caracteres.")
    }else if (senha == "") {
        alert("Insira sua senha.");
    }else if(senha.length < 6) {
        alert("Sua senha deve conter 6 caracteres.");
    }
}