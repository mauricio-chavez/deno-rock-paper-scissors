import {
  bgGreen,
  bgRed,
  bgWhite,
  white,
  black,
} from 'https://deno.land/std/fmt/colors.ts';
import { Result } from './enums.ts';

function choiceToWord(choice: string): string {
  switch (choice) {
    case 'r':
      return 'rock';
    case 'p':
      return 'paper';
    case 's':
      return 'scissors';
    default:
      throw new TypeError('Choice must be "r", "p" or "s".');
  }
}

export function getUserChoice(): string {
  const validChoices = ['rock', 'paper', 'scissors'];
  const choice: string = Deno.args[0];
  if (!choice || !validChoices.includes(choice.toLowerCase())) {
    throw new TypeError(
      'You must pass your choice through arguments. ' +
        'Choices are "rock", "paper", "scissors"'
    );
  } else {
    return choice[0];
  }
}

export function getComputerChoice(): string {
  const choices = ['r', 'p', 's'];
  const choiceNumber = Math.floor(Math.random() * 3);
  return choices[choiceNumber];
}

export function game(userChoice: string, computerChoice: string): Result {
  const choices = `${userChoice}-${computerChoice}`;
  const winCases = ['r-s', 'p-r', 's-p'];
  const loseCases = ['r-p', 'p-s', 's-r'];
  const drawCases = ['r-r', 'p-p', 's-s'];

  if (winCases.includes(choices)) {
    return Result.Win;
  } else if (loseCases.includes(choices)) {
    return Result.Lose;
  } else if (drawCases.includes(choices)) {
    return Result.Draw;
  } else {
    throw new TypeError('Invalid arguments.');
  }
}

export function outputResult(result: Result, computerChoice: string): void {
  const verboseComputerChoice = choiceToWord(computerChoice);
  let message = `Computer chose ${verboseComputerChoice}`;

  if (result === Result.Win) {
    message = bgGreen(black(`${message}, you winned!`));
  } else if (result === Result.Lose) {
    message = bgRed(white(`${message}, so you lost :(`));
  } else {
    message = bgWhite(black(`${message}, its seems like a draw.`));
  }

  console.log(message);
}
