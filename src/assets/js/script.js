//Selecionando os elementos do html
let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");

let secondPlayer;   //  second player é uma variável criada sem valor.


//Contador de jogadas
let player1 = 0;
let player2 = 0;

//Adicionando o evento de click aos boxes
for (let i = 0; i < boxes.length; i++) {                //Aqui ele está pegando a quantidade de posições do box e contando , até chegar no limite que eu determinei no html, que são 9

    //Quando alguém clica na caixa
    boxes[i].addEventListener("click", function () {        //Adicioando um evento quando for clicado no box.Quando alguém clicar no boxe na posição do indice [i] ele vai adiconar a função abaixo.

        let elemento = checkElemento(player1, player2); //Entra na função checkElemento


        //Verifica se já têm x ou O
        if (this.childNodes.length == 0) {   //Se this que é o responsável pela interação tiver algun nó filho, se ele tiver ele vai entrar nesse If e não vai computar a jogada, porém se for zero ele vai computar a jogada pois ele não têm nenhum filho dentro do box. com isso ele não vai mais criar 2 elementos na mesma div ou box

            let cloneElemento = elemento.cloneNode(true);  //Aqui eu estou clonando a "let elemento", ou seja, toda vez que rodas o loop ele clona o elemento 

            this.appendChild(cloneElemento); //para que o elemento apareça dentro da div, é necessário utilizar o appendChild. Geralmente quando têm um addEventListener  ele acompanha de um appendChild


            //Computando a jogada
            if (player1 == player2) {    //Nesse caso ele vai incrementar o valor de play1, que no inicio começa com o valor de 0 depois ele vai acrescentando valor nesse sentido ele  quando rodar o loop do for na segunda vez ele entrará no else da linha 27, que nesse caso vai imprimir  "o"
                player1++;
            } else {
                player2++; //Aqui é a mesma lógica do player 1 vai incrementar o play 2 que vai ser igual ao do play 1 e vai imprimir "x"
            }

            //Chamanda da função de quem venceu
            checkWinCondition();

        }

    });

}


// evento para saber se é  2 players ou IA
for(let i = 0; i < buttons.length;  i++) {

    buttons[i].addEventListener("click", function() {
       
        secondPlayer = this.getAttribute("id");

        for(let j = 0;  j < buttons.length; j++) {
            buttons[j].style.display = 'none';
        }

        setTimeout(function(){

            let container = document.querySelector("#container");
            container.classList.remove("hide");
            
        }, 500);

    });
}

//Vê quem vai jogar
function checkElemento(player1, player2) {
    if (player1 == player2) {   //Se o play 1 for igual ao play 2  o "let elemento" receberá o valor de X
        //x
        elemento = x;
    } else {
        //o
        elemento = o;
    }

    return elemento;
}

//Vê quem ganhou
function checkWinCondition() {

    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

    // horizontal 
    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;        //Pegando o nome da classe do filho de b1
        let b2Child = b2.childNodes[0].className;        //Pegando o nome da classe do filho de b2
        let b3Child = b3.childNodes[0].className;        //Pegando o nome da classe do filho de b3



        if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
            //x
            declareWinner('x');
        } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
            //o
            declareWinner('o');

        }

    }

    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {

        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;



        if (b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
            //x
            declareWinner('x');
        } else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
            //o
            declareWinner('o');

        }

    }

    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;



        if (b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
            //x
            declareWinner('x');
        } else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
            //o
            declareWinner('o');

        }

    }

    //Vertical
    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;



        if (b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
            //x
            declareWinner('x');
        } else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
            //o
            declareWinner('o');

        }

    }

    if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {

        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;



        if (b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
            //x
            declareWinner('x');
        } else if (b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
            //o
            declareWinner('o');

        }

    }

    if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;


        if (b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
            //x
            declareWinner('x');
        } else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
            //o
            declareWinner('o');

        }

    }

    //Diagolnal

    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;


        if (b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
            //x
            declareWinner('x');
        } else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
            //o
            declareWinner('o');

        }

    }

    if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;


        if (b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
            //x
            declareWinner('x');
        } else if (b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
            //o
            declareWinner('o');

        }

    }

    //Deu Velha
    let counter = 0;

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].childNodes[0] != undefined) {           //Aqui estou checabdo se o boxes atual têm o childNOdes, ou seja se ele têm o elementos filho que é o "x" ou a "o"
            counter++;
        }
    }

    if (counter == 9) {
        declareWinner("Deu Velha");
    }


}

//Limpar o jogo, declara o vencedor e atualziar o placar
function declareWinner(winner){

    let scoreboardX = document.querySelector("#scoreboard-1");
    let scoreboardY = document.querySelector("#scoreboard-2");
    let msg ='';

    if(winner == 'x') {
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = "O joagador 1 venceu!"
    } else if(winner == 'o') {
        scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1;
        msg = "O jogador 2 venceu!";
    } else {
        msg ="Deu velha!!"
    }

    // exibe mensagem
    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide");


    //Esconde msg
    setTimeout(function() {
        messageContainer.classList.add("hide");
    }, 3000);

    // Zerando as jogadas
    player1 = 0;
    player2 = 0;

    let boxesToRemove = document.querySelectorAll(".box div")

    for(let i = 0; i < boxesToRemove.length; i++) {
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }

}