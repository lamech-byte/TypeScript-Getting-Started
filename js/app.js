function startGame() {
    //starting a new game
    var playerName = getInputValue('playername');
    logPlayer(playerName);
    postScore(80, playerName);
    postScore(-5, playerName);
}
function logPlayer(name) {
    if (name === void 0) { name = 'MultiMath player'; }
    console.log("New game starting for player: ".concat(name));
}
function getInputValue(elementID) {
    var inputElement = document.getElementById(elementID);
    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
function postScore(score, playerName) {
    if (playerName === void 0) { playerName = 'MultiMath player'; }
    var logger;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }
    var scoreElement = document.getElementById('postedScores');
    scoreElement.innerText = "".concat(score, " - ").concat(playerName);
    logger("Score: $(score)");
}
document.getElementById('startGame').addEventListener('click', startGame);
var logMessage = function (message) { return console.log(message); };
function logError(err) {
    console.error(err);
}
var firstPlayer = new Player();
firstPlayer.name = 'Lanier';
console.log(firstPlayer.formatName());
