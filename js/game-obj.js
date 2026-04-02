// Игровое состояние
const game = {
  gold: 0, // текущее золото

  storagePower: 300, // сколько времени будет накапливаться счётчик с закрытой вкладкой (секунды)
  storagePowerImproveCost: 100, // улучшение хранилища

  quantityClicksOnButtonWork: 0, // количество кликов по кнопке "работать"
  strengthOfImpruvement: 0.01, // сила улучшения от текущего золота в секунду (1% вначале) при нажатии на кнопку "работать"
  goldsOnButtonWork: 0, //количество заработанного золота по кнопке "работать"

  lastSave: Date.now(), // время последнего сохранения

  goldPerSecond: 1, // золото в секунду от автокликов
  autoClicker: 1, // сколько золота даёт один автоклик
  autoClickerQuantity: 0, // количество улучшений автокликера
  autoClickerCost: 10, // стоимость покупки автоклика
  autoClickerImproveCost: 30, // стоимость усовершенствования автоклика

  whores: 0, // кол-во шлюх
  whoreCost: 1000_000, // цена шлюхи
  whoreGoldPerSecond: 10_000, // количество золота от одной шлюхи

  cars: 0, // кол-во машин
  carsCost: 5_000_000, // цена машины
  carGoldPerSecond: 50_000, // количество золота с одной машины

  houses: 0, // количество домов
  houseCost: 25_000_000, // цена дома
  houseGoldPerSecond: 250_000,

  goldBar: 0, // кол-во золотых слитков
  goldBarCost: 50_000_000, // цена золотого слитка
  goldBarGoldPerSecond: 500_000,

  platinum: 0, // кол-во платины
  platinumCost: 75_000_000, // цена платины
  platinumGoldPerSecond: 750_000,

  diamond: 0, // кол-во алмазов
  diamondCost: 100_000_000, // цена алмаза
  diamondGoldPerSecond: 1_000_000,

  kaliforniy: 0,
  kaliforniyCost: 5_000_000_000,
  kaliforniyPerSecond: 5_000_000_0,

  osmiy: 0,
  osmiyCost: 25_000_000_000,
  osmiyPerSecond: 25_000_000_0,

  rodiy: 0,
  rodiyCost: 50_000_000_000,
  rodiyPerSecond: 50_000_000_0,

  pluto: 0,
  plutoCost: 75_000_000_000,
  plutoPerSecond: 75_000_000_0,

  iridiy: 0,
  iridiyCost: 1_000_000_000_000,
  iridiyPerSecond: 1_000_000_000_0,

  nucklear: 0,
  nucklearCost: 10_000_000_000_000,
  nucklearPerSecond: 10_000_000_000_0,

  moon: 0,
  moonCost: 50_000_000_000_000,
  moonPerSecond: 50_000_000_000_0,

  mars: 0,
  marsCost: 100_000_000_000_000,
  marsPerSecond: 100_000_000_000_0,

  antimater: 0,
  antimaterCost: 250_000_000_000_000,
  antimaterPerSecond: 250_000_000_000_0,

  antimaterbomb: 0,
  antimaterbombCost: 500_000_000_000_000,
  antimaterbombPerSecond: 500_000_000_000_0,
};

export { game };
