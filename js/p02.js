function faz_login(event){
    event.preventDefault()
    const email = document.getElementById("txt_email").value;
    const password = document.getElementById("txt_senha").value;

    if(email=="sabrina@gmail.com" && password == "Sabrina@123"){
        alert("Login realizado com Sucesso!");
        window.location.href="login02.html"
    }else{
        alert("Usuário não cadastrado, reveja seus dados.");
    }
}