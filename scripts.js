
// Relatar problema
document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Pega os valores dos campos
    const subject = document.getElementById('subject').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const location = document.getElementById('location').value;
    const media = document.getElementById('media').files[0]; // Pega o primeiro arquivo enviado

    // Validação simples para garantir que todos os campos foram preenchidos
    if (!subject || !description || !category || !location || !media) {
        alert('Por favor, preencha todos os campos e anexe uma mídia.');
        return;
    }

    alert('Problema relatado com sucesso!');

    // Adiciona o relatório à lista de administração
    const reportItem = document.createElement('li');
    reportItem.textContent = `Título: ${subject}, Descrição: ${description}, Categoria: ${category}, Localização: ${location}`;

    // Se houver mídia, mostrar nome do arquivo
    if (media) {
        const mediaInfo = document.createElement('span');
        mediaInfo.textContent = ` (Arquivo Anexado: ${media.name})`;
        reportItem.appendChild(mediaInfo);
    }

    // Adiciona o item ao painel de administração
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

// Exemplo para a funcionalidade de mapa - pode ser integrado com APIs de mapa
document.getElementById('mapBtn').addEventListener('click', function() {
    const location = document.getElementById('location').value;
    if (!location) {
        alert('Por favor, insira um endereço ou bairro para visualizar no mapa.');
        return;
    }
    
    // Exemplo simples - abrir o Google Maps com a localização do usuário
    const url = `https://www.google.com/maps?q=${encodeURIComponent(location)}`;
    window.open(url, '_blank');
});

