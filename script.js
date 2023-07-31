// Função para copiar o texto para a área de transferência
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

// Evento de clique nos círculos
const circles = document.querySelectorAll('.circle');
circles.forEach(circle => {
    circle.addEventListener('click', () => {
        let textoParaCopiar = '';
        if (circle.classList.contains('github')) {
            textoParaCopiar = 'https://github.com/Luis01Felipe';
        } else if (circle.classList.contains('whats')) {
            textoParaCopiar = '+55 11 989583064';
        } else if (circle.classList.contains('gmail')) {
            textoParaCopiar = 'luislf.tlhf@gmail.com';
        }

        if (textoParaCopiar !== '') {
            copyToClipboard(textoParaCopiar);
        }
    });
});