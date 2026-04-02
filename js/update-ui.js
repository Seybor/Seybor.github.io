import { s, all, css, attr, html, text, insert } from './modules/base.js';
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
import { game } from './game-obj.js';
import { achievements } from './achievements-obj.js';

// Обновление интерфейса
function updateUI() {
  s('#gold').textContent = formatNumber(game.gold);
  s('#gpm').textContent = formatNumber(getAllGoldPerSecond());
  s('#autoClicker').textContent = formatNumber(game.autoClicker);
  s('#autoClickerCost').textContent = formatNumber(game.autoClickerCost);
  s('#autoClickerImproveCost').textContent = formatNumber(game.autoClickerImproveCost);
  s('#storagePower').textContent = game.storagePower / 60;
  s('#storagePowerImproveCost').textContent = formatNumber(game.storagePowerImproveCost);

  s('.btn-work__impruvement').textContent = `${Math.trunc(game.strengthOfImpruvement * 100)}%`;
  s('#work-stat').textContent = formatNumber(game.goldsOnButtonWork);

  s('#shop-whores').textContent = formatNumber(game.whores);
  s('#shop-cars').textContent = formatNumber(game.cars);
  s('#shop-houses').textContent = formatNumber(game.houses);
  s('#shop-goldBar').textContent = formatNumber(game.goldBar);
  s('#shop-platinum').textContent = formatNumber(game.platinum);
  s('#shop-diamond').textContent = formatNumber(game.diamond);
  s('#autoClickerQuantity').textContent = formatNumber(game.autoClickerQuantity);

  s('#whoreCost').textContent = formatNumber(game.whoreCost);
  s('#carCost').textContent = formatNumber(game.carsCost);
  s('#houseCost').textContent = formatNumber(game.houseCost);
  s('#goldBarCost').textContent = formatNumber(game.goldBarCost);
  s('#platinumCost').textContent = formatNumber(game.platinumCost);
  s('#diamondCost').textContent = formatNumber(game.diamondCost);

  s('#statWhore').textContent = formatNumber(game.whores * game.whoreGoldPerSecond);
  s('#statCar').textContent = formatNumber(game.cars * game.carGoldPerSecond);
  s('#statHouse').textContent = formatNumber(game.houses * game.houseGoldPerSecond);
  s('#statGoldBar').textContent = formatNumber(game.goldBar * game.goldBarGoldPerSecond);
  s('#statPlatinum').textContent = formatNumber(game.platinum * game.platinumGoldPerSecond);
  s('#statDiamond').textContent = formatNumber(game.diamond * game.diamondGoldPerSecond);

  // достижения 1
  s('#clicks1000-status').textContent = achievements.clicks1000 ? '✅' : '❌';
  s('#whores100-status').textContent = achievements.whores100 ? '✅' : '❌';
  s('#cars100-status').textContent = achievements.cars100 ? '✅' : '❌';
  s('#houses100-status').textContent = achievements.houses100 ? '✅' : '❌';
  s('#goldBars100-status').textContent = achievements.goldBars100 ? '✅' : '❌';
  s('#platinums100-status').textContent = achievements.platinums100 ? '✅' : '❌';
  s('#diamonds100-status').textContent = achievements.diamonds100 ? '✅' : '❌';

  // lvl 2
  s('#shop-kaliforniy').textContent = formatNumber(game.kaliforniy);
  s('#kaliforniyCost').textContent = formatNumber(game.kaliforniyCost);
  s('#statKaliforniy').textContent = formatNumber(game.kaliforniy * game.kaliforniyPerSecond);
  s('#kaliforniy100-status').textContent = achievements.kaliforniy100 ? '✅' : '❌';

  s('#shop-osmiy').textContent = formatNumber(game.osmiy);
  s('#osmiyCost').textContent = formatNumber(game.osmiyCost);
  s('#statOsmiy').textContent = formatNumber(game.osmiy * game.osmiyPerSecond);
  s('#osmiy100-status').textContent = achievements.osmiy100 ? '✅' : '❌';

  s('#shop-rodiy').textContent = formatNumber(game.rodiy);
  s('#rodiyCost').textContent = formatNumber(game.rodiyCost);
  s('#statRodiy').textContent = formatNumber(game.rodiy * game.rodiyPerSecond);
  s('#rodiy100-status').textContent = achievements.rodiy100 ? '✅' : '❌';

  s('#shop-pluto').textContent = formatNumber(game.pluto);
  s('#plutoCost').textContent = formatNumber(game.plutoCost);
  s('#statPluto').textContent = formatNumber(game.pluto * game.plutoPerSecond);
  s('#pluto100-status').textContent = achievements.pluto100 ? '✅' : '❌';

  s('#shop-iridiy').textContent = formatNumber(game.iridiy);
  s('#iridiyCost').textContent = formatNumber(game.iridiyCost);
  s('#statIridiy').textContent = formatNumber(game.iridiy * game.iridiyPerSecond);
  s('#iridiy100-status').textContent = achievements.iridiy100 ? '✅' : '❌';

  // lvl3
  s('#shop-nucklear').textContent = formatNumber(game.nucklear);
  s('#nucklearCost').textContent = formatNumber(game.nucklearCost);
  s('#statNucklear').textContent = formatNumber(game.nucklear * game.nucklearPerSecond);
  s('#nucklear100-status').textContent = achievements.nucklear100 ? '✅' : '❌';

  s('#shop-moon').textContent = formatNumber(game.moon);
  s('#moonCost').textContent = formatNumber(game.moonCost);
  s('#statMoon').textContent = formatNumber(game.moon * game.moonPerSecond);
  s('#moon100-status').textContent = achievements.moon100 ? '✅' : '❌';

  s('#shop-mars').textContent = formatNumber(game.mars);
  s('#marsCost').textContent = formatNumber(game.marsCost);
  s('#statMars').textContent = formatNumber(game.mars * game.marsPerSecond);
  s('#mars100-status').textContent = achievements.mars100 ? '✅' : '❌';

  s('#shop-antimater').textContent = formatNumber(game.antimater);
  s('#antimaterCost').textContent = formatNumber(game.antimaterCost);
  s('#statAntimater').textContent = formatNumber(game.antimater * game.antimaterPerSecond);
  s('#antimater100-status').textContent = achievements.antimater100 ? '✅' : '❌';

  s('#shop-antimaterbomb').textContent = formatNumber(game.antimaterbomb);
  s('#antimaterbombCost').textContent = formatNumber(game.antimaterbombCost);
  s('#statAntimaterbomb').textContent = formatNumber(game.antimaterbomb * game.antimaterbombPerSecond);
  s('#antimaterbomb100-status').textContent = achievements.antimaterbomb100 ? '✅' : '❌';
}

export { updateUI };
