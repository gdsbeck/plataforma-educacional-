let sequencia = [];
let sequenciaUsuario = [];
let nivel = 0;
const cores = ['red', 'green', 'blue', 'yellow'];

function iniciarJogoSequenciaCores() {
    const containerJogo = document.getElementById('gameContainer');
    containerJogo.innerHTML = `
        <h3>Sequência de Cores</h3>
        <p>Siga a sequência correta de cores.</p>
        <button id="iniciarBotao">Iniciar Jogo</button>
        <div id="coresContainer"></div>
        <p id="sequencia"></p>
    `;

    const iniciarBotao = document.getElementById('iniciarBotao');
    iniciarBotao.addEventListener('click', () => {
        iniciarBotao.style.display = 'none';
        proximoNivel();
    });

    const coresContainer = document.getElementById('coresContainer');
    cores.forEach(cor => {
        const botaoCor = document.createElement('div');
        botaoCor.style.backgroundColor = cor;
        botaoCor.style.width = '100px';
        botaoCor.style.height = '100px';
        botaoCor.style.display = 'inline-block';
        botaoCor.style.margin = '10px';
        botaoCor.style.cursor = 'pointer';
        botaoCor.addEventListener('click', () => handleCliqueCor(cor));
        coresContainer.appendChild(botaoCor);
    });
}

function proximoNivel() {
    sequenciaUsuario = [];
    nivel++;
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    sequencia.push(corAleatoria);
    mostrarSequencia();
}

function mostrarSequencia() {
    const sequenciaContainer = document.getElementById('sequencia');
    sequenciaContainer.innerHTML = 'Sequência abaixo:';
    let i = 0;
    const intervalo = setInterval(() => {
        if (i < sequencia.length) {
            const cor = sequencia[i];
            const divCor = document.createElement('div');
            divCor.style.backgroundColor = cor;
            divCor.style.width = '100px';
            divCor.style.height = '100px';
            divCor.style.margin = '10px';
            divCor.style.display = 'inline-block';
            document.getElementById('gameContainer').appendChild(divCor);

            setTimeout(() => {
                document.getElementById('gameContainer').removeChild(divCor);
            }, 500);

            i++;
        } else {
            clearInterval(intervalo);
        }
    }, 1000);
}

function handleCliqueCor(cor) {
    sequenciaUsuario.push(cor);
    if (sequenciaUsuario.length === sequencia.length) {
        if (sequenciaUsuario.every((cor, indice) => cor === sequencia[indice])) {
            alert('Você acertou! Próximo nível!');
            proximoNivel();
        } else {
            alert('Você errou! Tente novamente.');
            sequencia = [];
            nivel = 0;
            proximoNivel();
        }
    }
}

document.addEventListener('DOMContentLoaded', iniciarJogoSequenciaCores);
