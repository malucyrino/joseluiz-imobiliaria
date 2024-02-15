document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Validando os campos
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Aqui você pode enviar os dados do formulário para o servidor, por exemplo, usando AJAX
    // Neste exemplo, apenas exibimos uma mensagem de sucesso
    alert('Obrigado por entrar em contato!');
    document.getElementById('contactForm').reset(); // Limpa o formulário após o envio
});
