#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"
function Start_playGame() {
    inquirer.prompt([
            {
                type: "list",
                name: "player_Choice",
                message: chalk.yellowBright("Which move do you want to choose:"),
                choices: ["Rock", "Paper", "Scissors"]
            }
        ])
        .then((answers) => {
            const choices = ["Rock", "Paper", "Scissors"];
            const player2 =
                choices[Math.floor(Math.random() * choices.length)];
            const player_Choice = answers.player_Choice;

            console.log(chalk.green(`You choose: ${player_Choice}`));
            console.log(chalk.blue(`player2: ${player2}`));

            if (player_Choice === player2) {
                console.log(chalk.redBright("This Game is tie!"));
            } else if (
                (player_Choice === "Rock" && player2 === "Scissors")||
                (player_Choice === "Paper" && player2 === "Rock")||
                (player_Choice === "Scissors" && player2 === "Paper")
            ) {
                console.log(chalk.green("You win!"));
            } else {
                console.log(chalk.blueBright("player2 wins!"));
            }

           
            inquirer.prompt([
                    {
                        type: "confirm",
                        name: "Play_Again",
                        message: chalk.greenBright("Do you want to play again?"),
                        default: true
                    }
                ])
                .then((answers) => {
                    if (answers.Play_Again) {
                        Start_playGame(); // Play again
                    } else {
                        console.log(chalk.magentaBright("Thanks for playing!"));
                    }
                });
        });
}


Start_playGame();