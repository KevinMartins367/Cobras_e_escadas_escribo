// TIC TAC TOE
const CobrasEscadas = {


    // ATTRIBUTES
    // array referente ao tabuleiro
    board: [
        { "id": 100, "player": [" ", " "], "bonus": 0 },
        { "id": 99, "player": [" ", " "], "bonus": 19 },
        { "id": 98, "player": [" ", " "], "bonus": 0 },
        { "id": 97, "player": [" ", " "], "bonus": 0 },
        { "id": 96, "player": [" ", " "], "bonus": 0 },
        { "id": 95, "player": [" ", " "], "bonus": 20 },
        { "id": 94, "player": ["", " "], "bonus": 0 },
        { "id": 93, "player": [" ", " "], "bonus": 0 },
        { "id": 92, "player": [" ", " "], "bonus": 9 },
        { "id": 91, "player": [" ", " "], "bonus": 0 },
        { "id": 81, "player": [" ", " "], "bonus": 0 },
        { "id": 82, "player": [" ", " "], "bonus": 0 },
        { "id": 83, "player": [" ", " "], "bonus": 0 },
        { "id": 84, "player": [" ", " "], "bonus": 0 },
        { "id": 85, "player": [" ", " "], "bonus": 0 },
        { "id": 86, "player": [" ", " "], "bonus": 0 },
        { "id": 87, "player": [" ", " "], "bonus": -10 },
        { "id": 88, "player": [" ", " "], "bonus": 0 },
        { "id": 89, "player": [" ", " "], "bonus": 19 },
        { "id": 90, "player": [" ", " "], "bonus": 0 },
        { "id": 80, "player": [" ", " "], "bonus": 0 },
        { "id": 79, "player": [" ", " "], "bonus": 0 },
        { "id": 78, "player": [" ", " "], "bonus": -20 },
        { "id": 77, "player": [" ", " "], "bonus": 0 },
        { "id": 76, "player": [" ", " "], "bonus": 0 },
        { "id": 75, "player": [" ", " "], "bonus": 0 },
        { "id": 74, "player": [" ", " "], "bonus": 21 },
        { "id": 73, "player": [" ", " "], "bonus": 0 },
        { "id": 72, "player": [" ", " "], "bonus": 0 },
        { "id": 71, "player": [" ", " "], "bonus": -20 },
        { "id": 61, "player": [" ", " "], "bonus": 0 },
        { "id": 62, "player": [" ", " "], "bonus": 50 },
        { "id": 63, "player": [" ", " "], "bonus": 0 },
        { "id": 64, "player": [" ", " "], "bonus": 7 },
        { "id": 65, "player": [" ", " "], "bonus": 0 },
        { "id": 66, "player": [" ", " "], "bonus": 0 },
        { "id": 67, "player": [" ", " "], "bonus": 0 },
        { "id": 68, "player": [" ", " "], "bonus": 0 },
        { "id": 69, "player": [" ", " "], "bonus": 0 },
        { "id": 70, "player": [" ", " "], "bonus": 0 },
        { "id": 60, "player": [" ", " "], "bonus": 0 },
        { "id": 59, "player": [" ", " "], "bonus": 0 },
        { "id": 58, "player": [" ", " "], "bonus": 0 },
        { "id": 57, "player": [" ", " "], "bonus": 0 },
        { "id": 56, "player": [" ", " "], "bonus": 0 },
        { "id": 55, "player": [" ", " "], "bonus": 0 },
        { "id": 54, "player": [" ", " "], "bonus": 0 },
        { "id": 53, "player": [" ", " "], "bonus": 0 },
        { "id": 52, "player": [" ", " "], "bonus": 0 },
        { "id": 51, "player": [" ", " "], "bonus": -13 },
        { "id": 41, "player": [" ", " "], "bonus": 0 },
        { "id": 42, "player": [" ", " "], "bonus": 0 },
        { "id": 43, "player": [" ", " "], "bonus": 0 },
        { "id": 44, "player": [" ", " "], "bonus": 0 },
        { "id": 45, "player": [" ", " "], "bonus": 0 },
        { "id": 46, "player": [" ", " "], "bonus": 19 },
        { "id": 47, "player": [" ", " "], "bonus": 0 },
        { "id": 48, "player": [" ", " "], "bonus": 0 },
        { "id": 49, "player": [" ", " "], "bonus": 31 },
        { "id": 50, "player": [" ", " "], "bonus": 0 },
        { "id": 40, "player": [" ", " "], "bonus": 0 },
        { "id": 39, "player": [" ", " "], "bonus": 0 },
        { "id": 38, "player": [" ", " "], "bonus": 0 },
        { "id": 37, "player": [" ", " "], "bonus": 0 },
        { "id": 36, "player": [" ", " "], "bonus": -11 },
        { "id": 35, "player": [" ", " "], "bonus": 0 },
        { "id": 34, "player": [" ", " "], "bonus": 0 },
        { "id": 33, "player": [" ", " "], "bonus": 0 },
        { "id": 32, "player": [" ", " "], "bonus": 0 },
        { "id": 31, "player": [" ", " "], "bonus": 0 },
        { "id": 21, "player": [" ", " "], "bonus": -19 },
        { "id": 22, "player": [" ", " "], "bonus": 0 },
        { "id": 23, "player": [" ", " "], "bonus": 0 },
        { "id": 24, "player": [" ", " "], "bonus": 0 },
        { "id": 25, "player": [" ", " "], "bonus": 0 },
        { "id": 26, "player": [" ", " "], "bonus": 0 },
        { "id": 27, "player": [" ", " "], "bonus": 0 },
        { "id": 28, "player": [" ", " "], "bonus": -64 },
        { "id": 29, "player": [" ", " "], "bonus": 0 },
        { "id": 30, "player": [" ", " "], "bonus": 0 },
        { "id": 20, "player": [" ", " "], "bonus": 0 },
        { "id": 19, "player": [" ", " "], "bonus": 0 },
        { "id": 18, "player": [" ", " "], "bonus": 0 },
        { "id": 17, "player": [" ", " "], "bonus": 0 },
        { "id": 16, "player": [" ", " "], "bonus": 11 },
        { "id": 15, "player": [" ", " "], "bonus": -10 },
        { "id": 14, "player": [" ", " "], "bonus": 0 },
        { "id": 13, "player": [" ", " "], "bonus": 0 },
        { "id": 12, "player": [" ", " "], "bonus": 0 },
        { "id": 11, "player": [" ", " "], "bonus": 0 },
        { "id": 1, "player": [" ", " "], "bonus": 0 },
        { "id": 2, "player": [" ", " "], "bonus": -29 },
        { "id": 3, "player": [" ", " "], "bonus": 0 },
        { "id": 4, "player": [" ", " "], "bonus": 0 },
        { "id": 5, "player": [" ", " "], "bonus": 0 },
        { "id": 6, "player": [" ", " "], "bonus": 0 },
        { "id": 7, "player": [" ", " "], "bonus": -10 },
        { "id": 8, "player": [" ", " "], "bonus": -28 },
        { "id": 9, "player": [" ", " "], "bonus": 0 },
        { "id": 10, "player": [" ", " "], "bonus": 0 }
    ],
    // array de movimento realizado durante o jogo
    moviment: [],
    // object dos jogadores, (caso necessario adicionar mais reajustar função change)
    player: {
        options: ['⚪', '⚫'],
        turn_index: 0,
        change() {
            this.turn_index = (this.turn_index === 0 ? 1 : 0);
        }
    },
    //  element do tabuleiro
    container_element: null,
    // validar se ainda o jogo não acabou
    gameover: false,

    // FUNCTIONS
    init(container) {
        this.container_element = container;
    },

    // rolar dado de 6 faces (caso necessário mudar o tipo de dado só mudar o valor de 6 para o valor de face requerido)
    jogarDado() {
        let result = Math.floor(Math.random() * 6) + 1;
        return result;
    },

    jogar(dado1, dado2) {

        // verificar se o jogo ja acabou
        if (this.gameover || this.is_game_over()) {
            console.log('O jogo acabou!');
            return false;
        }
        var soma_dados = dado1 + dado2;

        // informar resultado dos dados
        document.getElementById("resultBox").innerHTML = "🎲 " + dado1 + " ⦁ 🎲 " + dado2 + " = " + soma_dados;
        var casa_origem = 0;
        var retornar_casas = 0;

        // pegar token do jogador 
        const currentSymbol = this.player.options[this.player.turn_index];

        // localizar a antiga posição do token e remover ele
        this.board.map((element, index) => {
            if (element.player[this.player.turn_index] === currentSymbol) {
                this.board[index].player[this.player.turn_index] = '';
                // somar os dados a antiga posição
                soma_dados = soma_dados + element.id;

                // caso a soma for superior a 100 subtrair a diferença de 100
                if (soma_dados > 100) {
                    retornar_casas = (soma_dados - 100);
                    soma_dados = 100 - (soma_dados - 100);
                }

                casa_origem = element.id;
            }
            return element;
        });

        // localizar a casa onde ele chegou
        casa_destino = this.board.findIndex((element, index, array) => {
            return element.id === soma_dados
        });

        // caso tenha uma cobra ou uma escada sera somado a diferença de onde ele deveria ir parar
        var casa_final = casa_destino + this.board[casa_destino].bonus;

        // logs das movimentações no tabuleiro
        if (retornar_casas != 0) {
            console.log("o Jogador " + (this.player.turn_index + 1) + " saiu de : " + casa_origem + " para: " + this.board[casa_destino].id + " retornar_casa saiu: " + retornar_casas + " foi para " + this.board[casa_final].id);

        } else {

            console.log("o Jogador " + (this.player.turn_index + 1) + " saiu de : " + casa_origem + " para: " + this.board[casa_destino].id + " com o bonus: " + this.board[casa_destino].bonus + " foi para " + this.board[casa_final].id);
        }

        // depois de adicionar o token na posição final que o jogador deveria chegar
        this.board[casa_final].player[this.player.turn_index] = currentSymbol;

        // adicionar o movimento ao histórico para mostrar na tela
        this.moviment.unshift({ player: (this.player.turn_index + 1) + " " + currentSymbol, house: this.board[casa_final].id });

        // reescrever o tabuleiro com as novas posições
        this.draw();
        // reescrever o histórico com as novas jogadas
        this.listMoviment();

        // verificar se o jogador chegou a casa 100 
        if (this.board[casa_final].id > 99) {
            this.game_is_over((this.player.turn_index + 1));
        } else {
            // validar se os dados são iguais para dar mais uma jogada para ele
            if (dado1 != dado2) {
                // caso não tenha mudar qual o próximo jogador
                this.player.change();

            }
        }

        return true;
    },

    game_is_over(player) {
        // mudar class dos buttons 
        document.getElementById("btn_restart").classList.remove('disabled');
        document.getElementById("game_over").classList.remove('d-none');
        document.getElementById("game_over").classList.add('d-block');
        document.getElementById("btn_dados").classList.add('disabled');

        // informar o final do jogo
        this.gameover = true;
        document.getElementById("game_over").innerHTML = `O jogo acabou! Jogador ${player} Venceu!`;
        console.log('O jogo acabou!');
    },

    is_game_over() {
        return this.board[0].player.includes([" ", " "]);
    },

    // iniciar jogo
    start() {
        // limpar tabuleiro
        this.board.map((element, index) => {
            if (element.player[0] != '') {
                this.board[index].player[0] = '';
            }
            if (element.player[1] != '') {
                this.board[index].player[1] = '';
            }
            return element;
        });
        // limpar o histórico
        while (this.moviment.length > 0) {
            this.moviment.pop();
        }
        // reconstruir tabuleiro
        this.draw();
        this.ResetMoviment();

        // mudar class dos buttons 
        document.getElementById("btn_restart").classList.add('disabled');
        document.getElementById("btn_dados").classList.remove('disabled');
        document.getElementById("game_over").classList.remove('d-block');
        document.getElementById("game_over").classList.add('d-none');
        this.gameover = false;
    },

    // restaurar o jogo ao inicio
    restart() {
        if (this.is_game_over() || this.gameover) {
            this.start();
            console.log('este jogo foi reiniciado!');
        } else if (confirm('Tem certeza que deseja reiniciar este jogo?')) {
            this.start();
            console.log('este jogo foi reiniciado!');
        }
    },

    // reescrever o histórico com as novas jogadas
    listMoviment() {
        document.getElementById("moviment").innerHTML = this.moviment.map((element, index) => `<tr>Jogador ${element.player} está na casa ${element.house}</tr>`).reduce((content, current) => content + current);
    },

    // zerar o histórico com as novas jogadas
    ResetMoviment() {
        document.getElementById("moviment").innerHTML = "";
        document.getElementById("resultBox").innerHTML = "🎲 ⦁ 🎲";

    },
    // reescrever o tabuleiro com as novas posições
    draw() {
        this.container_element.innerHTML = this.board.map((element, index) => `<div id="${index}"> ${element.player[0]} ${element.player[1]}</div>`).reduce((content, current) => content + current);
    },
};