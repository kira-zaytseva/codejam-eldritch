let ancientCards = document.querySelectorAll('.ancient-card');
let levels = document.querySelector('.levels-container');
let levelsBtns = document.querySelectorAll('.levels-btn');
let shuffle = document.querySelector('.shuffle-btn');
let deckContainer = document.querySelector('.deck-container');
let deckCards = document.querySelector('.deck-cards');
let currentCard = document.querySelector('.current-card');
let firstStage = document.querySelector('.first-stage');
let secondStage = document.querySelector('.second-stage');
let thirdStage = document.querySelector('.third-stage');
let greenDots = document.querySelectorAll('.green-dot');
let brownDots = document.querySelectorAll('.brown-dot');
let blueDots = document.querySelectorAll('.blue-dot');
let level = null;
let stage = null;
let gameDeck = [];

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

let cthulthuRules = {
    green: [0, 1, 3],
    brown: [2, 3, 4],
    blue: [2, 0, 0]
}

let shubNiggurathRules = {
    green: [1, 3, 2],
    brown: [2, 2, 4],
    blue: [1, 1, 0]
}

let iogSothothRules = {
    green: [0, 2, 3],
    brown: [2, 3, 4],
    blue: [1, 1, 0]
}

let azathothRules = {
    green: [1, 2, 2],
    brown: [2, 3, 4],
    blue: [1, 1, 0]
}

let blueEasyCards = ['blue3', 'blue4', 'blue5', 'blue10'];
let blueNormalCards = ['blue7', 'blue9', 'blue11', 'blue12'];
let blueHardCards = ['blue1', 'blue2', 'blue6', 'blue8'];

let brownEasyCards = ['brown11', 'brown12', 'brown13', 'brown14', 'brown21'];
let brownNormalCards = ['brown1', 'brown2', 'brown3', 'brown4', 'brown5', 'brown15', 'brown16', 'brown17', 'brown18', 'brown19', 'brown20'];
let brownHardCards = ['brown6', 'brown7', 'brown8', 'brown9', 'brown10'];

let greenEasyCards = ['green11', 'green16', 'green17', 'green18'];
let greenNormalCards = ['green7', 'green8', 'green9', 'green10', 'green11', 'green13', 'green14', 'green15'];
let greenHardCards = ['green2', 'green3', 'green4', 'green5', 'green6'];

let firstStageGreenAmount = 0;
let secondStageGreenAmount = 0;
let thirdStageGreenAmount = 0;
let firstStageBrownAmount = 0;
let secondStageBrownAmount = 0;
let thirdStageBrownAmount = 0;
let firstStageBlueAmount = 0;
let secondStageBlueAmount = 0;
let thirdStageBlueAmount = 0;
let greenAmount = 0;
let brownAmount = 0;
let blueAmount = 0;

ancientCards[0].addEventListener('click', () => {
    if (level === null) {
        ancientCards.forEach((el) => el.classList.remove('active'));
        ancientCards[0].classList.add('active');
        levels.style.display = 'flex';
        greenDots.forEach((dot, ind) => {
            dot.innerHTML = cthulthuRules.green[ind];
        })
        brownDots.forEach((dot, ind) => {
            dot.innerHTML = cthulthuRules.brown[ind];
        })
        blueDots.forEach((dot, ind) => {
            dot.innerHTML = cthulthuRules.blue[ind];
        })
        firstStageGreenAmount = cthulthuRules.green[0];
        secondStageGreenAmount = cthulthuRules.green[1];
        thirdStageGreenAmount = cthulthuRules.green[2];
        firstStageBrownAmount = cthulthuRules.brown[0];
        secondStageBrownAmount = cthulthuRules.brown[1];
        thirdStageBrownAmount = cthulthuRules.brown[2];
        firstStageBlueAmount = cthulthuRules.blue[0];
        secondStageBlueAmount = cthulthuRules.blue[1];
        thirdStageBlueAmount = cthulthuRules.blue[2];
    }
})

ancientCards[1].addEventListener('click', () => {
    if (level === null) {
        ancientCards.forEach((el) => el.classList.remove('active'))
        ancientCards[1].classList.add('active');
        levels.style.display = 'flex';
        greenDots.forEach((dot, ind) => {
            dot.innerHTML = shubNiggurathRules.green[ind];
        })
        brownDots.forEach((dot, ind) => {
            dot.innerHTML = shubNiggurathRules.brown[ind];
        })
        blueDots.forEach((dot, ind) => {
            dot.innerHTML = shubNiggurathRules.blue[ind];
        })
        firstStageGreenAmount = shubNiggurathRules.green[0];
        secondStageGreenAmount = shubNiggurathRules.green[1];
        thirdStageGreenAmount = shubNiggurathRules.green[2];
        firstStageBrownAmount = shubNiggurathRules.brown[0];
        secondStageBrownAmount = shubNiggurathRules.brown[1];
        thirdStageBrownAmount = shubNiggurathRules.brown[2];
        firstStageBlueAmount = shubNiggurathRules.blue[0];
        secondStageBlueAmount = shubNiggurathRules.blue[1];
        thirdStageBlueAmount = shubNiggurathRules.blue[2];
        greenAmount = firstStageGreenAmount + secondStageGreenAmount + thirdStageGreenAmount;
        brownAmount = firstStageBrownAmount + secondStageBrownAmount + thirdStageBrownAmount;
        blueAmount = firstStageBlueAmount + secondStageBlueAmount + thirdStageBlueAmount;
    }
})

ancientCards[2].addEventListener('click', () => {
    if (level === null) {
        ancientCards.forEach((el) => el.classList.remove('active'))
        ancientCards[2].classList.add('active');
        levels.style.display = 'flex';
        greenDots.forEach((dot, ind) => {
            dot.innerHTML = iogSothothRules.green[ind];
        })
        brownDots.forEach((dot, ind) => {
            dot.innerHTML = iogSothothRules.brown[ind];
        })
        blueDots.forEach((dot, ind) => {
            dot.innerHTML = iogSothothRules.blue[ind];
        })
        firstStageGreenAmount = iogSothothRules.green[0];
        secondStageGreenAmount = iogSothothRules.green[1];
        thirdStageGreenAmount = iogSothothRules.green[2];
        firstStageBrownAmount = iogSothothRules.brown[0];
        secondStageBrownAmount = iogSothothRules.brown[1];
        thirdStageBrownAmount = iogSothothRules.brown[2];
        firstStageBlueAmount = iogSothothRules.blue[0];
        secondStageBlueAmount = iogSothothRules.blue[1];
        thirdStageBlueAmount = iogSothothRules.blue[2];
    }
})

ancientCards[3].addEventListener('click', () => {
    if (level === null) {
        ancientCards.forEach((el) => el.classList.remove('active'))
        ancientCards[3].classList.add('active');
        levels.style.display = 'flex';
        greenDots.forEach((dot, ind) => {
            dot.innerHTML = azathothRules.green[ind];
        })
        brownDots.forEach((dot, ind) => {
            dot.innerHTML = azathothRules.brown[ind];
        })
        blueDots.forEach((dot, ind) => {
            dot.innerHTML = azathothRules.blue[ind];
        })
        firstStageGreenAmount = azathothRules.green[0];
        secondStageGreenAmount = azathothRules.green[1];
        thirdStageGreenAmount = azathothRules.green[2];
        firstStageBrownAmount = azathothRules.brown[0];
        secondStageBrownAmount = azathothRules.brown[1];
        thirdStageBrownAmount = azathothRules.brown[2];
        firstStageBlueAmount = azathothRules.blue[0];
        secondStageBlueAmount = azathothRules.blue[1];
        thirdStageBlueAmount = azathothRules.blue[2];
    }
})

levelsBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        level = e.target.dataset.level;
        shuffle.style.display = 'flex';
        ancientCards.forEach((el) => {
            if (el.classList.contains('active')) {
                return;
            } else {
                el.classList.add('disabled');
            }
        })
    })
})

shuffle.addEventListener('click', () => {
    deckContainer.style.display = 'flex';
    shuffle.disabled = true;
    levelsBtns.forEach((btn) => {
        if (btn.dataset.level !== level) {
            btn.disabled = true;
        } else btn.classList.add('active');
    });
    stage = 0;
    switch (level) {
        case 'first': {
            gameDeck = gameDeck.concat(blueEasyCards);
            gameDeck = gameDeck.concat(brownEasyCards);
            gameDeck = gameDeck.concat(greenEasyCards);
            shuffleArray(gameDeck);
            break;
        }
        case 'second': {
            gameDeck = gameDeck.concat(blueEasyCards);
            gameDeck = gameDeck.concat(brownEasyCards);
            gameDeck = gameDeck.concat(greenEasyCards);
            gameDeck = gameDeck.concat(blueNormalCards);
            gameDeck = gameDeck.concat(brownNormalCards);
            gameDeck = gameDeck.concat(greenNormalCards);
            shuffleArray(gameDeck);
            break;
        }
        case 'third': {
            gameDeck = gameDeck.concat(blueEasyCards);
            gameDeck = gameDeck.concat(brownEasyCards);
            gameDeck = gameDeck.concat(greenEasyCards);
            gameDeck = gameDeck.concat(blueNormalCards);
            gameDeck = gameDeck.concat(brownNormalCards);
            gameDeck = gameDeck.concat(greenNormalCards);
            gameDeck = gameDeck.concat(blueHardCards);
            gameDeck = gameDeck.concat(brownHardCards);
            gameDeck = gameDeck.concat(greenHardCards);
            shuffleArray(gameDeck);
            break;
        }
        case 'forth': {
            gameDeck = gameDeck.concat(blueNormalCards);
            gameDeck = gameDeck.concat(brownNormalCards);
            gameDeck = gameDeck.concat(greenNormalCards);
            gameDeck = gameDeck.concat(blueHardCards);
            gameDeck = gameDeck.concat(brownHardCards);
            gameDeck = gameDeck.concat(greenHardCards);
            shuffleArray(gameDeck);
            break;
        }
        case 'fifth': {
            gameDeck = gameDeck.concat(blueHardCards);
            gameDeck = gameDeck.concat(brownHardCards);
            gameDeck = gameDeck.concat(greenHardCards);
            shuffleArray(gameDeck);
            break;
        }
    }
})

let cardLink = ``;
let cardIndex = 0;
let currentElement = null;

function clickDeckCards() {
    currentCard.style.display = 'block';
    let checkBlue = gameDeck.filter((el) => el.includes('blue'));
    let checkBrown = gameDeck.filter((el) => el.includes('brown'));
    let checkGreen = gameDeck.filter((el) => el.includes('green'));
    if (thirdStageBlueAmount !== 0 && checkBlue.length === 0) {
        gameDeck = gameDeck.concat(blueNormalCards);
    }
    if (thirdStageBrownAmount !== 0 && checkBrown.length === 0) {
        gameDeck = gameDeck.concat(brownNormalCards);
    }
    if (thirdStageGreenAmount !== 0 && checkGreen.length === 0) {
        gameDeck = gameDeck.concat(greenNormalCards);
    }
    switch (stage) {
        case 0: {
            if (firstStageBlueAmount === 0 && firstStageBrownAmount === 0 && firstStageGreenAmount === 0) {
                ++stage;
                firstStage.style.opacity = '0.5';
            } else {
                if (gameDeck[cardIndex].includes('blue') && (firstStageBlueAmount === 0)) {
                    shuffleArray(gameDeck);
                    clickDeckCards();
                    break;
                }
                if (gameDeck[cardIndex].includes('brown') && (firstStageBrownAmount === 0)) {
                    shuffleArray(gameDeck);
                    clickDeckCards();
                    break;
                }
                if (gameDeck[cardIndex].includes('green') && (firstStageGreenAmount === 0)) {
                    shuffleArray(gameDeck);
                    clickDeckCards();
                    break;
                }
                currentElement = gameDeck.shift();
                if (currentElement.includes('blue')) {
                    cardLink = `./assets/MythicCards/blue/${currentElement}.jpg`
                    currentCard.src = cardLink;
                    blueDots[stage].innerHTML = --firstStageBlueAmount;
                }
                if (currentElement.includes('brown')) {
                    cardLink = `./assets/MythicCards/brown/${currentElement}.jpg`
                    currentCard.src = cardLink;
                    brownDots[stage].innerHTML = --firstStageBrownAmount;
                }
                if (currentElement.includes('green')) {
                    cardLink = `./assets/MythicCards/green/${currentElement}.jpg`
                    currentCard.src = cardLink;
                    greenDots[stage].innerHTML = --firstStageGreenAmount;
                }
                break;
            }
        }
        case 1: {
            if (secondStageBlueAmount === 0 && secondStageBrownAmount === 0 && secondStageGreenAmount === 0) {
                ++stage;
                secondStage.style.opacity = '0.5';
            } else {
                if (gameDeck[cardIndex].includes('blue') && (secondStageBlueAmount === 0)) {
                    shuffleArray(gameDeck);
                    clickDeckCards();
                    break;
                }
                if (gameDeck[cardIndex].includes('brown') && (secondStageBrownAmount === 0)) {
                    shuffleArray(gameDeck);
                    clickDeckCards();
                    break;
                }
                if (gameDeck[cardIndex].includes('green') && (secondStageGreenAmount === 0)) {
                    shuffleArray(gameDeck);
                    clickDeckCards();
                    break;
                }
                currentElement = gameDeck.shift();
                if (currentElement.includes('blue')) {
                    cardLink = `./assets/MythicCards/blue/${currentElement}.jpg`
                    currentCard.src = cardLink;
                    blueDots[stage].innerHTML = --secondStageBlueAmount;
                }
                if (currentElement.includes('brown')) {
                    cardLink = `./assets/MythicCards/brown/${currentElement}.jpg`
                    currentCard.src = cardLink;
                    brownDots[stage].innerHTML = --secondStageBrownAmount;
                }
                if (currentElement.includes('green')) {
                    cardLink = `./assets/MythicCards/green/${currentElement}.jpg`
                    currentCard.src = cardLink;
                    greenDots[stage].innerHTML = --secondStageGreenAmount;
                }
                break;
            }
        }
        case 2: {
            if (thirdStageBlueAmount === 0 && thirdStageBrownAmount === 0 && thirdStageGreenAmount === 0) {
                break;
            } else {
                if (gameDeck[cardIndex].includes('blue') && (thirdStageBlueAmount === 0)) {
                    shuffleArray(gameDeck);
                    clickDeckCards();
                    break;
                }
                if (gameDeck[cardIndex].includes('brown') && (thirdStageBrownAmount === 0)) {
                    shuffleArray(gameDeck);
                    clickDeckCards();
                    break;
                }
                if (gameDeck[cardIndex].includes('green') && (thirdStageGreenAmount === 0)) {
                    shuffleArray(gameDeck);
                    clickDeckCards();
                    break;
                }
                currentElement = gameDeck.shift();
                if (currentElement.includes('blue')) {
                    cardLink = `./assets/MythicCards/blue/${currentElement}.jpg`
                    currentCard.src = cardLink;
                    blueDots[stage].innerHTML = --thirdStageBlueAmount;
                }
                if (currentElement.includes('brown')) {
                    cardLink = `./assets/MythicCards/brown/${currentElement}.jpg`
                    currentCard.src = cardLink;
                    brownDots[stage].innerHTML = --thirdStageBrownAmount;
                }
                if (currentElement.includes('green')) {
                    cardLink = `./assets/MythicCards/green/${currentElement}.jpg`
                    currentCard.src = cardLink;
                    greenDots[stage].innerHTML = --thirdStageGreenAmount;
                }
                break;
            }
        }
    }

    if (thirdStageBlueAmount === 0 && thirdStageBrownAmount === 0 && thirdStageGreenAmount === 0) {
        deckCards.style.opacity = '0.5';
        deckCards.removeEventListener('click', clickDeckCards);
        thirdStage.style.opacity = '0.5';
    }
}

deckCards.addEventListener('click', clickDeckCards);

console.log("Everything is done, 100/100");