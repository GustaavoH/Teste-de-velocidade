document.addEventListener("DOMContentLoaded", function() {
    // Adicionar evento de clique ao botão de login
    document.getElementById("loginButton").addEventListener("click", function(event) {
      // Obter os valores do email e senha
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      
      // Verificar se o email e senha estão preenchidos
      if(email.trim() === "" || password.trim() === "") {
        // Exibir mensagem de erro se algum dos campos estiver vazio
        alert("Por favor, preencha todos os campos de email e senha.");
        return; // Encerrar a execução do código
      }
      
      // Credenciais pré-definidas
      var preDefinedEmail = "capinhanobru@gmail.com";
      var preDefinedPassword = "senha123";
      
      // Verificar se o email e a senha correspondem às credenciais pré-definidas
      if(email === preDefinedEmail && password === preDefinedPassword) {
        // Se forem válidos, redirecione para a próxima página
        window.location.href = "pgmain.html";
      } else {
        // Caso contrário, exiba uma mensagem de erro
        alert("Email ou senha incorretos. Por favor, tente novamente.");
      }
    });
});