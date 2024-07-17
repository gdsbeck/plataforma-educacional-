function abrirJogo(scriptJogo) {
    document.getElementById('gameModal').style.display = 'block';
    const tituloJogo = scriptJogo.includes('color') ? 'Jogo 1: Sequência de Cores' : 'Jogo 2: Adivinhação de Número';
    document.getElementById('gameTitle').innerText = tituloJogo;

    const containerJogo = document.getElementById('gameContainer');
    containerJogo.innerHTML = '';
    
    const scriptExistente = document.getElementById('gameScript');
    if (scriptExistente) {
        scriptExistente.remove();
    }

    const script = document.createElement('script');
    script.src = scriptJogo;
    script.id = 'gameScript';
    script.onload = () => {
        if (scriptJogo.includes('number')) {
            iniciarJogoAdivinhacaoNumeros();
        } else {
            iniciarJogoSequenciaCores();
        }
    };
    containerJogo.appendChild(script);
}

function fecharJogo() {
    document.getElementById('gameModal').style.display = 'none';
}
