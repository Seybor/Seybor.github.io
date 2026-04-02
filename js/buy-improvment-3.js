import { game } from './game-obj.js';
import { updateUI } from './update-ui.js';
import {
  resetGame,
  getAllGoldPerSecond,
  formatNumber,
  playSoundNotEnoughMoney,
  playSound,
  improveGold,
  getAchievements,
  buyStoragePowerUpgrade,
} from './game.js';

const achive = 1;
const reward_1 = 1_000_000_000_000_000;

function buyNucklear() {
  // Плеер когда не достаточно денег
  if (!playSoundNotEnoughMoney(game.nucklearCost)) {
    return;
  }

  improveGold('nucklearCost', 'nucklear', 1.055);
  getAchievements(game.nucklear, 'nucklear100', achive, reward_1);

  updateUI();

  // Плеер звука
  playSound('mp3/cash.mp3');
}
function buyMoon() {
  // Плеер когда не достаточно денег
  if (!playSoundNotEnoughMoney(game.moonCost)) {
    return;
  }

  improveGold('moonCost', 'moon', 1.065);
  getAchievements(game.moon, 'moon100', achive, reward_1 * 5);

  updateUI();

  // Плеер звука
  playSound('mp3/cash.mp3');
}
function buyMars() {
  // Плеер когда не достаточно денег
  if (!playSoundNotEnoughMoney(game.marsCost)) {
    return;
  }

  improveGold('marsCost', 'mars', 1.075);
  getAchievements(game.mars, 'mars100', achive, reward_1 * 25);

  updateUI();

  // Плеер звука
  playSound('mp3/cash.mp3');
}
function buyAntimater() {
  // Плеер когда не достаточно денег
  if (!playSoundNotEnoughMoney(game.antimaterCost)) {
    return;
  }

  improveGold('antimaterCost', 'antimater', 1.085);
  getAchievements(game.antimater, 'antimater100', achive, reward_1 * 125);

  updateUI();

  // Плеер звука
  playSound('mp3/cash.mp3');
}
function buyAntimaterbomb() {
  // Плеер когда не достаточно денег
  if (!playSoundNotEnoughMoney(game.antimaterbombCost)) {
    return;
  }

  improveGold('antimaterbombCost', 'antimaterbomb', 1.01);
  getAchievements(game.antimaterbomb, 'antimaterbomb100', achive, reward_1 * 625);

  updateUI();

  // Плеер звука
  playSound('mp3/cash.mp3');
}

export { buyNucklear, buyMoon, buyMars, buyAntimater, buyAntimaterbomb };
