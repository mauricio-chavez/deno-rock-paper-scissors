import {
  getUserChoice,
  getComputerChoice,
  game,
  outputResult,
} from './utils.ts';

if (import.meta.main) {
  const userChoice = getUserChoice();
  const computerChoice = getComputerChoice();
  const result = game(userChoice, computerChoice);
  outputResult(result, computerChoice);
}
