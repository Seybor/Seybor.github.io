const PHRASES = [
	{
		en: 'Where can I find a mug?',
		ru: 'Где я могу найти кружку?',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'Can I help with the washing-up?',
		ru: 'Могу ли я помочь с мытьем?',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'Where does this cup?',
		ru: 'Куда поставить эту чашку?',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'Where should I put this cup?',
		ru: 'Куда мне поставить эту чашку?',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'Put it in this cupboard, please',
		ru: 'Поставьте это в этот шкаф, пожалуйста',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'I prefer coffee to tea',
		ru: 'Я предпочитаю кофе чаю',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'I am thirsty',
		ru: 'Я хочу пить',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: "I'm going to be sick",
		ru: 'Меня сейчас стошнит',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'have a baby',
		ru: 'родить ребёнка',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'call him/her + name + after + name',
		ru: 'назвать его/её в честь кого-то',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'become ill',
		ru: 'заболеть',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'die of',
		ru: 'умереть от чего-то',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'heart attack',
		ru: 'сердечный приступ',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'be widowed',
		ru: 'овдоведь',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'break up',
		ru: 'расстаться, разойтись',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'blood type',
		ru: 'группа крови',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'a pair of',
		ru: 'пара чего-то [ед. число]',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'have (got) on',
		ru: 'надето',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'put on',
		ru: 'надевать (предмет одежды)',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'take off',
		ru: 'снять (предмет одежды)',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'get dressed',
		ru: 'одеваться',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'get undressed',
		ru: 'раздеваться',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'medium height',
		ru: 'среднего роста',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'dark skin',
		ru: 'смуглая кожа',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'fair skin',
		ru: 'светлая кожа',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'dark hair',
		ru: 'темные волосы ',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'brown eyes',
		ru: 'карие глаза',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'be well',
		ru: 'быть в хорошем самочувствии',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'feel well',
		ru: 'чувствовать себя хорошо',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'be fine',
		ru: 'быть в порядке',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'fell ill',
		ru: 'чувствовать себя больным',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'have (got) toothache',
		ru: 'болят зубы',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'have (got) a headache',
		ru: 'болит голова',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'have (got) a cold',
		ru: 'простудиться',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'hay fever',
		ru: 'сенная лихорадка (аллергия)',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'have asthma',
		ru: 'болеть астмой',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'healthy diet',
		ru: 'здоровая диета / здоровое питание',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'feel stressed',
		ru: 'чувствовать стресс',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'had a heart attack',
		ru: 'у него был сердечный приступ',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'good for you',
		ru: 'хорошо для тебя, повезло',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'good afternoon — добрый день',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'How do you do? ',
		ru: 'неформальная форма приветствия, аналог hello',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'see you soon',
		ru: 'скоро увидимся / разговорный вариант, используется среди друзей',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'sleep well',
		ru: 'приятных снов',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'merry christmas',
		ru: 'весёлого рождества',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'bless you (God bless you)',
		ru: 'будьте здоровы (обращаясь к чихнувшему)',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'go to the bathroom (idiom)',
		ru: 'иди в ванную (мочиться или испражняться)',
		ru_example: '',
		en_example: '',
		tr: ''
	}
]