// ключ для localStorage
const SAVE_KEY = 'idle_game_save';

// Сохранить прогресс
function saveGame() {
  game.lastSave = Date.now();
  localStorage.setItem(SAVE_KEY, JSON.stringify(game));
}

// Загрузить прогресс
function loadGame() {
  const saved = localStorage.getItem(SAVE_KEY);
  if (saved) {
    const data = JSON.parse(saved);

    // количество золота в секунду от всех источников
    function getAllGoldPerSecond() {
      return Math.floor(
        data.goldPerSecond +
          data.houses * data.houseGoldPerSecond +
          game.cars * data.carGoldPerSecond +
          data.whores * data.whoreGoldPerSecond +
          data.goldBar * data.goldBarGoldPerSecond +
          data.platinum * data.platinumGoldPerSecond +
          data.diamond * data.diamondGoldPerSecond,
      );
    }

    const now = Date.now();
    const offlineMs = now - (data.lastSave || now);
    const offlineSec = Math.min(offlineMs / 1000, data.storagePower); // максимум времени офлайн
    // добавляем золото так, как будто игра шла в фоне
    data.gold += getAllGoldPerSecond() * offlineSec;

    Object.assign(game, data);
  }
}
// авто‑сохранение каждые 3 секунды
let autosaveInterval = setInterval(saveGame, 1000);
