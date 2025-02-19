// Relatar problema
document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const problem = document.getElementById('problem').value;
    const location = document.getElementById('location').value;

    alert('Problema relatado com sucesso!');

    // Adiciona o relatório à lista de administração
    const reportItem = document.createElement('li');
    reportItem.textContent = `Problema: ${problem}, Localização: ${location}`;
    document.getElementById('reportsList').appendChild(reportItem);

    // Limpa o formulário
    document.getElementById('reportForm').reset();
});

// Funcionalidade de senha para acessar o Admin
document.getElementById('adminLink').addEventListener('click', function(event) {
    event.preventDefault();
    const password = prompt('Por favor, insira a senha de administrador:');
    if (password === 'admin123') {
        document.getElementById('admin').style.display = 'block';
        document.getElementById('home').style.display = 'none';
        document.getElementById('report').style.display = 'none';
        document.getElementById('contact').style.display = 'none';
        alert('Bem-vindo, administrador! Aqui você pode gerenciar os relatórios de problemas.');
    } else {
        alert('Senha incorreta!');
    }
});

// Volta para a página inicial
document.getElementById('homeLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('admin').style.display = 'none';
    document.getElementById('home').style.display = 'block';
    document.getElementById('report').style.display = 'block';
    document.getElementById('contact').style.display = 'block';
});

    // Adiciona a mensagem do usuário ao chat
    const userMessageDiv = document.createElement('div');
    userMessageDiv.textContent = `Usuário: ${userMessage}`;
    messages.appendChild(userMessageDiv);

