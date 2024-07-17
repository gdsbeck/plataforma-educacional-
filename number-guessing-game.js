let numeroAleatorio;
let tentativasRestantes;

function iniciarJogoAdivinhacaoNumeros() {
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    tentativasRestantes = 10;

    document.getElementById('gameContainer').innerHTML = `
        <h3>Adivinhe o Número</h3>
        <p>Tente adivinhar o número entre 1 e 100. Você tem 10 tentativas.</p>
        <input type="number" id="palpite" min="1" max="100">
        <button onclick="verificarPalpite()">Verificar</button>
        <p id="resultado"></p>
    `;
}

function verificarPalpite() {
    const palpite = Number(document.getElementById('palpite').value);
    tentativasRestantes--;

    if (palpite === numeroAleatorio) {
        document.getElementById('resultado').innerText = 'Parabéns! Você acertou!';
        mostrarBotaoJogarNovamente();
    } else if (tentativasRestantes === 0) {
        document.getElementById('resultado').innerText = `Você perdeu! O número era ${numeroAleatorio}.`;
        mostrarBotaoJogarNovamente();
    } else {
        const dica = palpite < numeroAleatorio ? 'maior' : 'menor';
        document.getElementById('resultado').innerText = `Errado! O número é ${dica}. Você tem ${tentativasRestantes} tentativas restantes.`;
    }
}

function mostrarBotaoJogarNovamente() {
    document.getElementById('gameContainer').innerHTML += `
        <button onclick="iniciarJogoAdivinhacaoNumeros()">Jogar Novamente</button>
    `;
}
