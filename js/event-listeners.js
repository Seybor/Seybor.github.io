import { s, all, css, attr, html, text, insert } from './modules/base.js';
import {
  buyAutoClicker,
  buyAutoClickerUpgrade,
  buyWhore,
  buyCar,
  buyHouse,
  buyGoldBar,
  buyPlatinum,
  buyDiamond,
} from './buy-improvement-1.js';

import { buyKaliforniy, buyOsmiy, buyRodiy, buyPluto, buyIridiy } from './buy-improvement-2.js';
import { buyNucklear, buyMoon, buyMars, buyAntimater, buyAntimaterbomb } from './buy-improvment-3.js';
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

function getListenters() {
  s('.btn-reset').addEventListener('click', resetGame);

  // обработчик кнопки "работать"
  s('.btn-work').addEventListener('click', () => {
    const workedGold = Math.ceil(getAllGoldPerSecond() * game.strengthOfImpruvement); // заработок с одного нажатия
    game.goldsOnButtonWork += workedGold;

    game.quantityClicksOnButtonWork += 1;
    if (game.quantityClicksOnButtonWork % 100 === 0) {
      game.strengthOfImpruvement += 0.01;
    }

    game.gold += workedGold;

    updateUI();

    // Плеер звука
    playSound('mp3/click-1.mp3');
  });

  s('.btn-storage').addEventListener('click', buyStoragePowerUpgrade);
  s('.btn-autoclick').addEventListener('click', buyAutoClicker);
  s('.btn-autoclickUpgrade').addEventListener('click', buyAutoClickerUpgrade);
  s('.shop-whore').addEventListener('click', buyWhore);
  s('.shop-car').addEventListener('click', buyCar);
  s('.shop-house').addEventListener('click', buyHouse);
  s('.shop-GoldBar').addEventListener('click', buyGoldBar);
  s('.shop-platinum').addEventListener('click', buyPlatinum);
  s('.shop-diamond').addEventListener('click', buyDiamond);

  // lvl 2
  s('.shop-kaliforniy').addEventListener('click', buyKaliforniy);
  s('.shop-osmiy').addEventListener('click', buyOsmiy);
  s('.shop-rodiy').addEventListener('click', buyRodiy);
  s('.shop-pluto').addEventListener('click', buyPluto);
  s('.shop-iridiy').addEventListener('click', buyIridiy);

  // lvl 3
  s('.shop-nucklear').addEventListener('click', buyNucklear);
  s('.shop-moon').addEventListener('click', buyMoon);
  s('.shop-mars').addEventListener('click', buyMars);
  s('.shop-antimater').addEventListener('click', buyAntimater);
  s('.shop-antimaterbomb').addEventListener('click', buyAntimaterbomb);
}

export { getListenters };
