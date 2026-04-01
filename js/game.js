const s = (el) => {
  return document.querySelector(el);
};

// Игровое состояние
const game = {
  gold: 0, // текущее золото
  goldPerSecond: 1, // золото в секунду от автокликов
  autoClicker: 1, // сколько золота даёт один автоклик
  autoClickerQuantity: 0, // количество улучшений автокликера
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
  whoreCost: 1000_000, // цена шлюхи
  carsCost: 5_000_000, // цена машины
  houseCost: 25_000_000, // цена дома,
  goldBarCost: 50_000_000, // цена золотого слитка
  platinumCost: 75_000_000, // цена платины
  diamondCost: 100_000_000, // цена алмаза
  whoreGoldPerSecond: 10_000, // количество золота от одной шлюхи
  carGoldPerSecond: 50_000, // количество золота с одной машины
  houseGoldPerSecond: 250_000, // количество золота с одного дома
  goldBarGoldPerSecond: 500_000, // кол-во золота от одного золотого слитка
  platinumGoldPerSecond: 750_000, // платина в секунду
  diamondGoldPerSecond: 1_000_000, // алмазы в секунду
};

// Система достижений
const achievements = {
  clicks1000: false,
  whores100: false, // куплено 100 шлюх
  cars100: false,
  houses100: false,
  goldBars100: false,
  platinums100: false,
  diamonds100: false,
};

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

const elButtonReset = document.querySelector('btn-reset');

// Секундный тик (пассивный доход)
setInterval(() => {
  game.gold += getAllGoldPerSecond();
  updateUI();
}, 1000);

// количество золота в секунду от всех источников
function getAllGoldPerSecond() {
  return Math.floor(
    game.goldPerSecond +
      game.houses * game.houseGoldPerSecond +
      game.cars * game.carGoldPerSecond +
      game.whores * game.whoreGoldPerSecond +
      game.goldBar * game.goldBarGoldPerSecond +
      game.platinum * game.platinumGoldPerSecond +
      game.diamond * game.diamondGoldPerSecond,
  );
}

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

  // если >= 10 — не показываем знаки после запятой, иначе — 3 знака
  const decimals = shortened >= 10 ? 3 : 3;

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
  s('#autoClickerQuantity').textContent = formatNumber(game.autoClickerQuantity);

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

  // достижения
  s('#clicks1000-status').textContent = achievements.clicks1000 ? '✅' : '❌';
  s('#whores100-status').textContent = achievements.whores100 ? '✅' : '❌';
  s('#cars100-status').textContent = achievements.cars100 ? '✅' : '❌';
  s('#houses100-status').textContent = achievements.houses100 ? '✅' : '❌';
  s('#goldBars100-status').textContent = achievements.goldBars100 ? '✅' : '❌';
  s('#platinums100-status').textContent = achievements.platinums100 ? '✅' : '❌';
  s('#diamonds100-status').textContent = achievements.diamonds100 ? '✅' : '❌';
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
function playSound(music) {
  const coinSound = new Audio(music);
  coinSound.play().catch((err) => {
    console.warn('Звук не проигрался (например, нет взаимодействия пользователя):', err);
  });
}

// обновление денег (кроме автокликов, там другая механика)
function improveGold(improveCost, whatImprove, powerImprove = 1.01, howManyImprove = 1) {
  game.gold -= game[improveCost];
  game[improveCost] = Number((game[improveCost] * powerImprove).toFixed(2));
  game[whatImprove] += howManyImprove;
}

// Проверка достижений
function getAchievements(achievementQuantity, achievementType, quantity) {
  if (achievementQuantity === quantity && !achievements[achievementType]) {
    achievements[achievementType] = true;
    playSound('mp3/achievements-1.mp3');
    alert('Достижение получено: Ваша награда: 100м');
    // дать бонус
    game.gold += 100_000_000;
    saveAchievements();
  }
}

// Покупка одного «автокликера»
function buyAutoClicker() {
  // Плеер когда не достаточно денег
  if (!playSoundNotEnoughMoney(game.autoClickerCost)) {
    return;
  }

  improveGold('autoClickerCost', 'goldPerSecond', 1.01, game.autoClicker);
  game.autoClickerQuantity += 1;

  getAchievements(game.autoClickerQuantity, 'clicks1000', 1000);

  updateUI();
  // animateClickEffect(); // ← анимация при клике

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
  // animateClickEffect();

  // Плеер звука
  playSound('mp3/yes-my-lord.mp3');
}

// Апгрейд хранилища
function buyStoragePowerUpgrade() {
  // Плеер когда не достаточно денег
  if (!playSoundNotEnoughMoney(game.storagePowerImproveCost)) {
    return;
  }

  improveGold('storagePowerImproveCost', 'storagePower', 1.05, 300);

  updateUI();
  // animateClickEffect();

  // Плеер звука
  playSound('mp3/improve-level.mp3');
}

// купить шлюху
function buyWhore() {
  // Плеер когда не достаточно денег
  if (!playSoundNotEnoughMoney(game.whoreCost)) {
    return;
  }

  improveGold('whoreCost', 'whores', 1.025);
  getAchievements(game.whores, 'whores100', 100);

  updateUI();
  // animateClickEffect();

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
  getAchievements(game.cars, 'cars100', 100);

  updateUI();
  // animateClickEffect();

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
  getAchievements(game.houses, 'houses100', 100);

  updateUI();
  // animateClickEffect();

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
  getAchievements(game.goldBar, 'goldBars100', 100);

  updateUI();
  // animateClickEffect();

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
  getAchievements(game.platinum, 'platinums100', 100);

  updateUI();
  // animateClickEffect();

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
  getAchievements(game.diamond, 'diamonds100', 100);

  updateUI();
  // animateClickEffect();

  // Плеер звука
  playSound('mp3/shop-diamond.mp3');
}

// reset
function resetGame() {
  const answer = prompt('Для сброса прогресса введите: рестарт');

  if (answer?.trim().toLowerCase() === 'рестарт') {
    // 1) остановить автосохранение
    clearInterval(autosaveInterval);

    // 2) очистить localStorage
    localStorage.clear();

    // 3) перезагрузить страницу
    location.reload();
  } else {
    alert('Слово введено неверно или отменено. Прогресс не сброшен.');
  }
}
loadGame(); // загрузить сохранённый прогресс при старте
loadAchievements(); // загрузить прогресс достижений
updateUI(); // пересчитать goldPerSecond
// drawBackground(); // обновить канвас
