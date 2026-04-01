// Игровое состояние
const game = {
  gold: 0, // текущее золото
  goldPerSecond: 1, // золото в секунду от автокликов
  autoClicker: 1, // сколько золота даёт один автоклик
  autoClickerCost: 10, // стоимость покупки автоклика
  autoClickerImproveCost: 30, // стоимость усовершенствования автоклика
  storagePower: 300, // сколько времени будет накапливаться счётчик с закрытой вкладкой (секунды)
  storagePowerImproveCost: 100, // улучшение хранилища
  lastSave: Date.now(), // время последнего сохранения
  whores: 0, // кол-во шлюх
  cars: 0, // кол-во машин
  houses: 0, // количество домов
  goldBar: 0, // кол-во золотых слитков
  platinum: 0, // кол-во платины
  diamond: 0, // кол-во алмазов
  whoreCost: 100_000, // цена шлюхи
  carsCost: 2_500_000, // цена машины
  houseCost: 10_000_000, // цена дома,
  goldBarCost: 20_000_000, // цена золотого слитка
  platinumCost: 25_000_000, // цена платины
  diamondCost: 30_000_000, // цена алмаза
  whoreGoldPerSecond: 1_000, // количество золота от одной шлюхи
  carGoldPerSecond: 25_000, // количество золота с одной машины
  houseGoldPerSecond: 100_000, // количество золота с одного дома
  goldBarGoldPerSecond: 200_000, // кол-во золота от одного золотого слитка
  platinumGoldPerSecond: 250_000, // платина в секунду
  diamondGoldPerSecond: 300_000, // алмазы в секунду
};

// количество золота в секунду от всех источников
function getAllGoldPerSecond() {
  return Math.floor(
    game.goldPerSecond +
      game.houses * game.houseGoldPerSecond +
      game.cars * game.carGoldPerSecond +
      game.whores * game.whoreGoldPerSecond +
      game.goldBar * game.goldBarGoldPerSecond,
  );
}

// DOM‑элементы
const elGold = document.getElementById('gold');
const elGpm = document.getElementById('gpm');
const elAutoClicker = document.getElementById('autoClicker');
const elAutoClickerCost = document.getElementById('autoClickerCost');
const elAutoClickerImproveCost = document.getElementById('autoClickerImproveCost');
const elStoragePower = document.getElementById('storagePower');
const elStoragePowerImproveCost = document.getElementById('storagePowerImproveCost');

const elHouses = document.getElementById('shop-houses');
const elCars = document.getElementById('shop-cars');
const elWhores = document.getElementById('shop-whores');
const elGoldBars = document.getElementById('shop-goldBar');
const elPlatinum = document.getElementById('shop-platinum');
const elDiamond = document.getElementById('shop-diamond');

const elHouseCost = document.getElementById('houseCost');
const elCarCost = document.getElementById('carCost');
const elWhoreCost = document.getElementById('whoreCost');
const elGoldBarCost = document.getElementById('goldBarCost');
const elPlatinumCost = document.getElementById('platinumCost');
const elDiamondCost = document.getElementById('diamondCost');

const elStatHouse = document.getElementById('statHouse');
const elStatCar = document.getElementById('statCar');
const elStatWhore = document.getElementById('statWhore');
const elStatGold = document.getElementById('statGoldBar');
const elStatPlatinum = document.getElementById('statPlatinum');
const elStatDiamond = document.getElementById('statDiamond');

const elButton = document.querySelector('button');

// Секундный тик (пассивный доход)
setInterval(() => {
  game.gold += getAllGoldPerSecond();
  updateUI();
}, 1000);

// обновленный вид золота и стоимости улучшений
function formatNumber(num) {
  if (num < 1000) {
    return Math.floor(num.toString());
  }

  // массив суффиксов: 1000, 1000000, 1000000000...
  const suffixes = ['', ' тыс.', ' млн', ' млрд', ' трлн'];
  const degree = Math.max(0, Math.min(suffixes.length - 1, Math.floor(Math.log10(num) / 3)));
  const suffix = suffixes[degree];
  const divisor = 10 ** (degree * 3);
  const shortened = num / divisor;

  // если >= 10 — не показываем знаки после запятой, иначе — 1 знак
  const decimals = shortened >= 10 ? 0 : 1;

  return shortened.toFixed(decimals) + suffix;
}

// Обновление интерфейса
function updateUI() {
  elGold.textContent = formatNumber(game.gold);

  elGpm.textContent = formatNumber(getAllGoldPerSecond());
  elAutoClicker.textContent = formatNumber(game.autoClicker);
  elAutoClickerCost.textContent = formatNumber(game.autoClickerCost);
  elAutoClickerImproveCost.textContent = formatNumber(game.autoClickerImproveCost);
  elStoragePower.textContent = game.storagePower / 60;
  elStoragePowerImproveCost.textContent = formatNumber(game.storagePowerImproveCost);

  elWhores.textContent = formatNumber(game.whores);
  elCars.textContent = formatNumber(game.cars);
  elHouses.textContent = formatNumber(game.houses);
  elGoldBars.textContent = formatNumber(game.goldBar);
  elPlatinum.textContent = formatNumber(game.platinum);
  elDiamond.textContent = formatNumber(game.diamond);

  elWhoreCost.textContent = formatNumber(game.whoreCost);
  elCarCost.textContent = formatNumber(game.carsCost);
  elHouseCost.textContent = formatNumber(game.houseCost);
  elGoldBarCost.textContent = formatNumber(game.goldBarCost);
  elPlatinumCost.textContent = formatNumber(game.platinumCost);
  elDiamondCost.textContent = formatNumber(game.diamondCost);

  elStatWhore.textContent = formatNumber(game.whores * game.whoreGoldPerSecond);
  elStatCar.textContent = formatNumber(game.cars * game.carGoldPerSecond);
  elStatHouse.textContent = formatNumber(game.houses * game.houseGoldPerSecond);
  elStatGold.textContent = formatNumber(game.goldBar * game.goldBarGoldPerSecond);
  elStatPlatinum.textContent = formatNumber(game.platinum * game.platinumGoldPerSecond);
  elStatDiamond.textContent = formatNumber(game.diamond * game.diamondGoldPerSecond);
  // elButton.disabled = game.gold < 10;
}

// проигрывание звука когда не достаточно денег
function playSoundNotEnoughMoney(type) {
  if (game.gold < type) {
    // Плеер звука
    const coinSound = new Audio('mp3/need-more-money.mp3');
    coinSound.play().catch((err) => {
      console.warn('Звук не проигрался (например, нет взаимодействия пользователя):', err);
    });
    return false;
  }
  return true;
}

// проигрывание звука при покупке или улучшение
function playSoundImrpoveOrBuy(music) {
  const coinSound = new Audio(music);
  coinSound.play().catch((err) => {
    console.warn('Звук не проигрался (например, нет взаимодействия пользователя):', err);
  });
}

// обновление денег (кроме автокликов, там другая механика)
function improveGold(improveCost, whatImprove, powerImprove = 1.01, howManyImprove = 1) {
  game.gold -= game[improveCost];
  // game[improveCost] = Math.floor(game[improveCost] * powerImprove);
  game[improveCost] = Number((game[improveCost] * powerImprove).toFixed(2));
  game[whatImprove] += howManyImprove;
}

// Покупка одного «автокликера»
function buyAutoClicker() {
  // Плеер когда не достаточно денег
  if (!playSoundNotEnoughMoney(game.autoClickerCost)) {
    return;
  }

  improveGold('autoClickerCost', 'goldPerSecond', 1.01, game.autoClicker);

  updateUI();
  animateClickEffect(); // ← анимация при клике

  // Плеер звука
  playSoundImrpoveOrBuy('mp3/money-1.mp3');
}

// Апгрейд автокликера
function buyAutoClickerUpgrade() {
  // Плеер когда не достаточно денег
  if (!playSoundNotEnoughMoney(game.autoClickerImproveCost)) {
    return;
  }

  improveGold('autoClickerImproveCost', 'autoClicker');
  updateUI();
  animateClickEffect();

  // Плеер звука
  playSoundImrpoveOrBuy('mp3/yes-my-lord.mp3');
}

// Апгрейд хранилища
function buyStoragePowerUpgrade() {
  // Плеер когда не достаточно денег
  if (!playSoundNotEnoughMoney(game.storagePowerImproveCost)) {
    return;
  }

  improveGold('storagePowerImproveCost', 'storagePower', 1.01, 300);

  updateUI();
  animateClickEffect();

  // Плеер звука
  playSoundImrpoveOrBuy('mp3/improve-level.mp3');
}

// покупка дома
function buyHouse() {
  // Плеер когда не достаточно денег
  if (!playSoundNotEnoughMoney(game.houseCost)) {
    return;
  }

  improveGold('houseCost', 'houses');
  updateUI();
  animateClickEffect();

  // Плеер звука
  playSoundImrpoveOrBuy('mp3/all-done.mp3');
}

// покупка машины
function buyCar() {
  // Плеер когда не достаточно денег
  if (!playSoundNotEnoughMoney(game.carsCost)) {
    return;
  }

  improveGold('carsCost', 'cars');

  updateUI();
  animateClickEffect();

  // Плеер звука
  playSoundImrpoveOrBuy('mp3/shop-car.mp3');
}

// купить шлюху
function buyWhore() {
  // Плеер когда не достаточно денег
  if (!playSoundNotEnoughMoney(game.whoreCost)) {
    return;
  }

  improveGold('whoreCost', 'whores');

  updateUI();
  animateClickEffect();

  // Плеер звука
  playSoundImrpoveOrBuy('mp3/shop-whore.mp3');
}

// купить золотой злиток
function buyGoldBar() {
  // Плеер когда не достаточно денег
  if (!playSoundNotEnoughMoney(game.goldBarCost)) {
    return;
  }

  improveGold('goldBarCost', 'goldBar');

  updateUI();
  animateClickEffect();

  // звук улучшения
  const upgradeSound = new Audio('mp3/cash.mp3'); // можно другой файл
  upgradeSound.play().catch(() => {});
}

// купить платину
function buyPlatinum() {
  // Плеер когда не достаточно денег
  if (!playSoundNotEnoughMoney(game.platinumCost)) {
    return;
  }

  improveGold('platinumCost', 'platinum');

  updateUI();
  animateClickEffect();

  // звук улучшения
  const upgradeSound = new Audio('mp3/shop-platinum.mp3'); // можно другой файл
  upgradeSound.play().catch(() => {});
}

// купить алмаз
function buyDiamond() {
  // Плеер когда не достаточно денег
  if (!playSoundNotEnoughMoney(game.diamondCost)) {
    return;
  }

  improveGold('diamondCost', 'diamond');

  updateUI();
  animateClickEffect();

  // звук улучшения
  const upgradeSound = new Audio('mp3/shop-diamond.mp3'); // можно другой файл
  upgradeSound.play().catch(() => {});
}

loadGame(); // загрузить сохранённый прогресс при старте
updateUI(); // пересчитать goldPerSecond
drawBackground(); // обновить канвас
