const bulka = document.getElementById('bulka');
const cucumber = document.getElementById('cucumber');
const gameScreen = document.getElementById('game');
const endGameScreen = document.getElementById('endGameScreen');
const bulkaSong = document.getElementById('bulkaSong');
const jumpKeyName = 'Space';
const jumpClassName = 'jump';

const init = () => {
    bulkaSong.play();

    bulkaSong.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
    }, false);
}

const jump = () => {
    if (bulka.classList !== jumpClassName) {
        bulka.classList.add(jumpClassName);

        setTimeout(() => bulka.classList.remove(jumpClassName), 300);
    }
};

const isAlive = setInterval(() => {
    const bulkaTop = parseInt(window.getComputedStyle(bulka).getPropertyValue('top'));
    const cucumberLeft = parseInt(window.getComputedStyle(cucumber).getPropertyValue('left'));

    if (cucumberLeft < 50 && cucumberLeft > 0 && bulkaTop >= 140) {
        gameScreen.classList.add('gameOver');
        endGameScreen.classList.add('active');
    };
}, 10);

document.addEventListener('keydown', ({ code }) => {
    if (code === jumpKeyName) jump();
});

init();