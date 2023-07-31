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
        const textoParaCopiar = (circle.classList.contains('whats')) ? '+55 11 989583064' : 'luislf.tlhf@gmail.com';
        copyToClipboard(textoParaCopiar);
        alert('Texto copiado para a área de transferência: ' + textoParaCopiar);
    });
});
