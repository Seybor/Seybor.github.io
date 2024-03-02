const PHRASAL_VERBS = [
  {
    en: 'be away',
    ru: 'отсутствовать, быть в отъезде',
    ru_example: 'Они были в отъезде',
    en_example: 'They were away'
  },
  {
    en: 'be out',
    ru: 'быть не дома',
    ru_example: 'Я был не дома',
    en_example: 'I was out'
  },
  {
    en: 'go up',
    ru: 'подниматься',
    ru_example: 'Солнце встанет через час',
    en_example: 'The sun will go up in an hour'
  },
  {
    en: 'go down',
    ru: 'снижаться',
    ru_example: 'Солнце скоро сядет',
    en_example: 'The sun will go down soon'
  },
  {
    en: 'look for',
    ru: 'искать что-то',
    ru_example: 'Она будет искать лучшую работу?',
    en_example: 'Will she look for the best job?'
  },
  {
    en: 'look after',
    ru: 'следить, присматривать',
    ru_example: 'Как ты следишь за своим здоровьем?',
    en_example: 'How do you look after your health?'
  },
  {
    en: 'look out [of]',
    ru: 'выглянуть в/из',
    ru_example: 'Я выглянул из окна',
    en_example: 'I looked out of the window'
  },
  {
    en: 'make up',
    ru: 'составлять',
    ru_example: 'Все они, по сути, составляют одну семью',
    en_example: 'Altogether they make up one family'
  },
  {
    en: 'get up',
    ru: 'вставать [после сна]',
    ru_example: 'Твой брат всегда так рано встаёт?',
    en_example: 'Does your brother always get up so early?'
  },
  {
    en: 'beat up',
    ru: 'избивать',
    ru_example: 'Мой отец может побить твоего отца',
    en_example: 'My dad could beat up your dad'
  },
  {
    en: 'fill in',
    ru: 'заполнить',
    ru_example: 'Мне нужно заполнить пробелы сейчас',
    en_example: 'I need to fill in the gaps now'
  },
  {
    en: 'fall off',
    ru: 'падать с чего-то',
    ru_example: 'Он упал с лошади',
    en_example: 'He fell off a horse'
  },
  {
    en: 'fall from',
    ru: 'падать откуда-то',
    ru_example: 'Яблоко упало с дерева',
    en_example: 'An apple fell from a tree'
  },
  {
    en: 'fall on',
    ru: 'падать на кого-то',
    ru_example: 'Он упал на человека',
    en_example: 'He fell on a man'
  },
  {
    en: 'turn on/off',
    ru: 'включить / выключить',
    ru_example: 'Выключи телевизор!',
    en_example: 'Turn off the TV!'
  },
  {
    en: 'throw away',
    ru: 'выбрасывать',
    ru_example: 'Выброси это!',
    en_example: 'Throw it away!'
  },
  {
    en: 'grow up',
    ru: 'вырасти где-то [про человека]',
    ru_example: 'Он вырос в Америке',
    en_example: 'He grew up in America'
  },
  {
    en: 'run away',
    ru: 'убежать',
    ru_example: 'Я убежал от испуга',
    en_example: 'I ran away from the scare'
  },
  {
    en: 'count on',
    ru: 'рассчитывать на',
    ru_example: 'Ты можешь рассчитывать только на себя',
    en_example: 'You can only count on yourself'
  },
  {
    en: 'point out',
    ru: 'заметить, отметить',
    ru_example: 'Я хотел бы отметить, что эта чрезвычайно важная вещь',
    en_example: `I'd like to point out that it's an extremely important thing`
  },
  {
    en: 'break down',
    ru: 'сломаться',
    ru_example: 'Машина сломалась',
    en_example: 'The car broke down'
  },
  {
    en: 'sit down',
    ru: 'присесть',
    ru_example: 'Нет времени просто присесть и почитать',
    en_example: 'I do not have time to just sit down and read'
  },
  {
    en: 'fly away',
    ru: 'улетать',
    ru_example: 'Обещай далеко не улетать',
    en_example: 'Promise not to fly away'
  },
  {
    en: 'fly back',
    ru: 'лететь обратно',
    ru_example: 'Через день мне пришлось лететь обратно',
    en_example: 'A day later, I had to fly back'
  },
  {
    en: 'stand up',
    ru: 'вставать(из положения сидя, лёжа)',
    ru_example: 'Я уверен, что смогу встать и сделать шаг',
    en_example: "I'm sure I can stand up and take a step"
  },
  {
    en: 'hurry up',
    ru: 'торопиться',
    ru_example: 'Вы поспешите закончить работу',
    en_example: 'You will hurry up and finish your work'
  },
  {
    en: 'wake up',
    ru: 'просыпаться',
    ru_example: 'В связи с этим просыпаться придется раньше',
    en_example: 'In order to have that, I would need to wake up earlier'
  },

  {
    en: 'work on',
    ru: 'работать над чем-то ',
    ru_example: 'Я каждый день работаю над этим проектом',
    en_example: 'I work on this project every day'
  },
  {
    en: 'come from',
    ru: 'родом из',
    ru_example: 'Он родом из России',
    en_example: 'He comes from Russia'
  },
  {
    en: 'lie down',
    ru: 'прилечь',
    ru_example: 'Приляг на кушетку',
    en_example: 'Lie down on the couch'
  },
  {
    en: 'divide into',
    ru: 'делить на',
    ru_example: 'Я разделил это на три части',
    en_example: 'I divided it into three parts'
  },
  {
    en: 'stay in',
    ru: 'оставаться дома',
    ru_example: 'Я говорю тебе, оставайся дома!',
    en_example: 'I am telling you to stay in!'
  },
  {
    en: 'jump over',
    ru: 'перепрыгнуть через что-то',
    ru_example: 'Он перепрыгнул через реку',
    en_example: 'He jumped across the river'
  },

]



export default PHRASAL_VERBS