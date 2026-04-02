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
const reward_1 = 1_000_000_000_000;

function buyKaliforniy() {
  // Плеер когда не достаточно денег
  if (!playSoundNotEnoughMoney(game.whoreCost)) {
    return;
  }

  improveGold('kaliforniyCost', 'kaliforniy', 1.055);
  getAchievements(game.kaliforniy, 'kaliforniy100', achive, reward_1);

  updateUI();

  // Плеер звука
  playSound('mp3/cash.mp3');
}
function buyOsmiy() {
  // Плеер когда не достаточно денег
  if (!playSoundNotEnoughMoney(game.osmiyCost)) {
    return;
  }

  improveGold('osmiyCost', 'osmiy', 1.065);
  getAchievements(game.osmiy, 'osmiy100', achive, reward_1 * 5);

  updateUI();

  // Плеер звука
  playSound('mp3/cash.mp3');
}
function buyRodiy() {
  // Плеер когда не достаточно денег
  if (!playSoundNotEnoughMoney(game.rodiyCost)) {
    return;
  }

  improveGold('rodiyCost', 'rodiy', 1.075);
  getAchievements(game.rodiy, 'rodiy100', achive, reward_1 * 25);

  updateUI();

  // Плеер звука
  playSound('mp3/cash.mp3');
}
function buyPluto() {
  // Плеер когда не достаточно денег
  if (!playSoundNotEnoughMoney(game.plutoCost)) {
    return;
  }

  improveGold('plutoCost', 'pluto', 1.085);
  getAchievements(game.pluto, 'pluto100', achive, reward_1 * 125);

  updateUI();

  // Плеер звука
  playSound('mp3/cash.mp3');
}
function buyIridiy() {
  // Плеер когда не достаточно денег
  if (!playSoundNotEnoughMoney(game.iridiyCost)) {
    return;
  }

  improveGold('iridiyCost', 'iridiy', 1.1);
  getAchievements(game.iridiy, 'iridiy100', achive, reward_1 * 625);

  updateUI();

  // Плеер звука
  playSound('mp3/cash.mp3');
}

export { buyKaliforniy, buyOsmiy, buyRodiy, buyPluto, buyIridiy };
