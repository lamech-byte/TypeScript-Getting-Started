/// <reference path="player.ts" />

function startGame() {
    //starting a new game
    let playerName: string | undefined = getInputValue('playername');
    logPlayer(playerName);

    postScore(80, playerName);
    postScore(-5, playerName);
}

function logPlayer(name: string = 'MultiMath player'): void {
    console.log(`New game starting for player: ${name}`);
}



function postScore(score: number, playerName: string = 'MultiMath player'): void {

    let logger: (value: string) => void;

    if (score < 0) {
        logger = logError;
    }

    else {
        logger = logMessage;
    }

    const scoreElement: HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;

    logger( `Score: $(score)`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);

const logMessage = (message: string) => console.log(message);

function logError(err: string): void {
    console.error(err);
}

const firstPlayer: Player = new Player();
firstPlayer.name = 'Lanier';
console.log(firstPlayer.formatName());
