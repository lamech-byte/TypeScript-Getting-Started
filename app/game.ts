import { getValue } from "./utility";
import { Result } from "./result";
import { Player } from "./player";
import { Scoreboard as ResultPane1 } from "./scoreboard";

export class Game {
    private scoreboard: ResultPane1 = new ResultPane1();

    constructor(public player: Player, public problemcount: number, public factor: number) {
    }

    displayGame(): void {

        // create the html for the current game
        let gameForm: string = '';
        for (let i = 1; i <= this.problemcount; i++) {
            gameForm += '<div class="form-group">';
            gameForm += '<label for="answer' + i + '" class="col-sm-2 control-label">';
            gameForm += String(this.factor) + ' x ' + i + ' = </label>';
            gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer' + i + '" size"5" /></div>'
            gameForm += '</div>';

            // add the new game to the page
            const gameElement: HTMLElement = document.getElementById('game')!;
            gameElement.innerHTML = gameForm;

            // enable the calculate score button
            document.getElementById('calculate')!.removeAttribute('disabled');
        }
    }
}



