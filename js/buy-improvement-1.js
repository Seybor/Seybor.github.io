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
const reward_1 = 50_000_000;

// Покупка одного «автокликера»
function buyAutoClicker() {
  // Плеер когда не достаточно денег
  if (!playSoundNotEnoughMoney(game.autoClickerCost)) {
    return;
  }

  improveGold('autoClickerCost', 'goldPerSecond', 1.01, game.autoClicker);
  game.autoClickerQuantity += 1;

  getAchievements(game.autoClickerQuantity, 'clicks1000', achive * 10, reward_1);

  updateUI();

  // Плеер звука
  playSound('mp3/money-1.mp3');
}

// Апгрейд автокликера
function buyAutoClickerUpgrade() {
  // Плеер когда не достаточно денег
  if (!playSoundNotEnoughMoney(game.autoClickerImproveCost)) {
    return;
  }

  improveGold('autoClickerImproveCost', 'autoClicker');
  updateUI();

  // Плеер звука
  playSound('mp3/yes-my-lord.mp3');
}

// купить шлюху
function buyWhore() {
  // Плеер когда не достаточно денег
  if (!playSoundNotEnoughMoney(game.whoreCost)) {
    return;
  }

  improveGold('whoreCost', 'whores', 1.025);
  getAchievements(game.whores, 'whores100', achive, reward_1 * 4);

  updateUI();

  // Плеер звука
  playSound('mp3/shop-whore.mp3');
}

// покупка машины
function buyCar() {
  // Плеер когда не достаточно денег
  if (!playSoundNotEnoughMoney(game.carsCost)) {
    return;
  }

  improveGold('carsCost', 'cars', 1.05);
  getAchievements(game.cars, 'cars100', achive, reward_1 * 20);

  updateUI();

  // Плеер звука
  playSound('mp3/shop-car.mp3');
}

// покупка дома
function buyHouse() {
  // Плеер когда не достаточно денег
  if (!playSoundNotEnoughMoney(game.houseCost)) {
    return;
  }

  improveGold('houseCost', 'houses', 1.06);
  getAchievements(game.houses, 'houses100', achive, reward_1 * 100);

  updateUI();

  // Плеер звука
  playSound('mp3/all-done.mp3');
}

// купить золотой злиток
function buyGoldBar() {
  // Плеер когда не достаточно денег
  if (!playSoundNotEnoughMoney(game.goldBarCost)) {
    return;
  }

  improveGold('goldBarCost', 'goldBar', 1.07);
  getAchievements(game.goldBar, 'goldBars100', achive, reward_1 * 400);

  updateUI();

  // Плеер звука
  playSound('mp3/cash.mp3');
}

// купить платину
function buyPlatinum() {
  // Плеер когда не достаточно денег
  if (!playSoundNotEnoughMoney(game.platinumCost)) {
    return;
  }

  improveGold('platinumCost', 'platinum', 1.085);
  getAchievements(game.platinum, 'platinums100', achive, reward_1 * 1600);

  updateUI();

  // Плеер звука
  playSound('mp3/shop-platinum.mp3');
}

// купить алмаз
function buyDiamond() {
  // Плеер когда не достаточно денег
  if (!playSoundNotEnoughMoney(game.diamondCost)) {
    return;
  }

  improveGold('diamondCost', 'diamond', 1.1);
  getAchievements(game.diamond, 'diamonds100', achive, reward_1 * 4800);

  updateUI();

  // Плеер звука
  playSound('mp3/shop-diamond.mp3');
}

export { buyAutoClicker, buyAutoClickerUpgrade, buyWhore, buyCar, buyHouse, buyGoldBar, buyPlatinum, buyDiamond };
