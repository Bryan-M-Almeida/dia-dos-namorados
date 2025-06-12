const gameContainer = document.querySelector('.game-container');
let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let lockBoard = false; // trava o tabuleiro durante a animação

const cardValues = [
    '❤️', '❤️', '💋', '💋', '🌹', '🌹', '💕', '💕',
    '💑', '💑', '💌', '💌', '😍', '😍', '💖', '💖'
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createCards() {
    shuffleArray(cardValues);
    cardValues.forEach(value => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.value = value;

        const cardFront = document.createElement('div');
        cardFront.classList.add('card-front');
        cardFront.textContent = value;

        const cardBack = document.createElement('div');
        cardBack.classList.add('card-back');
        cardBack.textContent = '❓';

        card.appendChild(cardFront);
        card.appendChild(cardBack);
        gameContainer.appendChild(card);

        card.addEventListener('click', flipCard);
        cards.push(card);
    });
}

function flipCard() {
    if (lockBoard || this.classList.contains('flip') || this.classList.contains('matched')) return;

    this.classList.add('flip');
    flippedCards.push(this);

    if (flippedCards.length === 2) {
        lockBoard = true;
        setTimeout(checkMatch, 300); // tempo reduzido
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.value === card2.dataset.value) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedPairs++;
        flippedCards = [];
        lockBoard = false;

        if (matchedPairs === cardValues.length / 2) {
            setTimeout(() => {
                alert('Parabéns! Você completou o jogo com todo o seu amor! 💞');
                resetGame();
            }, 300);
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flip');
            card2.classList.remove('flip');
            flippedCards = [];
            lockBoard = false;
        }, 300); // reduzido também
    }
}

function resetGame() {
    gameContainer.innerHTML = '';
    cards = [];
    flippedCards = [];
    matchedPairs = 0;
    lockBoard = false;
    createCards();
}

createCards();
