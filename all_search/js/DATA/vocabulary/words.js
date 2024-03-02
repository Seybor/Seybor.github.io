const WORDS = [
	[
		{
			en: 'granddaughter',
			ru: 'внучка',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'grandson',
			ru: 'внук',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{ en: 'uncle', ru: 'дядя', ru_example: '', en_example: '', tr: '' },
		{ en: 'aunt', ru: 'тётя', ru_example: '', en_example: '', tr: '' },
		{
			en: 'niece',
			ru: 'племянница',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'nephew',
			ru: 'племянник',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'great-grandmother',
			ru: 'прабабушка',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'great-grandfather',
			ru: 'прадед',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'great-grandchild',
			ru: 'правнук',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'great-granddaughter',
			ru: 'правнучка',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{ en: 'widow', ru: 'жена', ru_example: '', en_example: '', tr: '' },
		{
			en: 'wedding',
			ru: 'свадьба',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'bride',
			ru: 'невеста',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{ en: 'groom', ru: 'жениж', ru_example: '', en_example: '', tr: '' },
		{
			en: 'honeymoon',
			ru: 'медовый месяц',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'funeral',
			ru: 'похороны',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{ en: 'tooth', ru: 'зуб', ru_example: '', en_example: '', tr: '' },
		{ en: 'teeth', ru: 'зубы', ru_example: '', en_example: '', tr: '' },
		{ en: 'ear', ru: 'ухо', ru_example: '', en_example: '', tr: '' },
		{ en: 'mouth', ru: 'рот', ru_example: '', en_example: '', tr: '' },
		{ en: 'lip', ru: 'губа', ru_example: '', en_example: '', tr: '' },
		{ en: 'neck', ru: 'шея', ru_example: '', en_example: '', tr: '' },
		{ en: 'nail', ru: 'ноготь', ru_example: '', en_example: '', tr: '' },
		{
			en: 'thumb',
			ru: 'большой палец(на руке)',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'finger',
			ru: 'палец(на руке)',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'shoulder',
			ru: 'плечо',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'arm',
			ru: 'рука(от плеча до кисти)',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'leg',
			ru: 'нога (от бедра до ступни)',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{ en: 'knee', ru: 'колено', ru_example: '', en_example: '', tr: '' },
		{
			en: 'feet',
			ru: 'ноги, ступни',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'toe',
			ru: 'палец(на ноге)',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'chest',
			ru: 'грудная клетка',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{ en: 'side', ru: 'бок', ru_example: '', en_example: '', tr: '' },
		{
			en: 'stomach',
			ru: 'живот',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'tummy',
			ru: 'животик, живот',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{ en: 'waist', ru: 'талия', ru_example: '', en_example: '', tr: '' },
		{ en: 'hip', ru: 'бедро', ru_example: '', en_example: '', tr: '' },
		{ en: 'tie', ru: 'галстук', ru_example: '', en_example: '', tr: '' },
		{
			en: 'suitcase',
			ru: 'чемодан',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'tights',
			ru: 'колготки',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'slim',
			ru: 'стройный',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'thin',
			ru: 'худой, тощий',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'overweight',
			ru: 'избыточный вес',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{ en: 'beard', ru: 'борода', ru_example: '', en_example: '', tr: '' },
		{
			en: 'moustache',
			ru: 'усы',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'good-looking',
			ru: 'приятная внешность',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'average-looking',
			ru: 'обычная внешность',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'middle-aged',
			ru: 'средних лет',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{ en: 'vomit', ru: 'рвота', ru_example: '', en_example: '', tr: '' },
		{
			en: 'toothache',
			ru: 'зубная боль',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'headache',
			ru: 'головная боль',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'sneeze',
			ru: 'чихать',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{ en: 'asthma', ru: 'астма', ru_example: '', en_example: '', tr: '' },
		{
			en: 'malaria',
			ru: 'малярия',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'cholera',
			ru: 'холера',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'thirsty',
			ru: 'жаждущий',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'greeting',
			ru: 'приветствие',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'bless',
			ru: 'благословить',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'cupboard',
			ru: 'кухонный шкаф',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{ en: 'shelf', ru: 'полка', ru_example: '', en_example: '', tr: '' },
		{
			en: 'worktop',
			ru: 'рабочий стол',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'dishwasher',
			ru: 'посудомоечная машина',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'washing-up liquid',
			ru: 'посудомечное средство',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'tea tower',
			ru: 'кухонное полотенце',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'saucepan',
			ru: 'кастрюля',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'frying pan',
			ru: 'сковородка',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'teapot',
			ru: 'чайник',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'coffee maker',
			ru: 'кофеварка',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{ en: 'cloth', ru: 'тряпка', ru_example: '', en_example: '', tr: '' },
		{
			en: 'kitchen roll',
			ru: 'бумажные полотенца',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{ en: 'bowl', ru: 'миска', ru_example: '', en_example: '', tr: '' },
		{ en: 'cup', ru: 'чашка', ru_example: '', en_example: '', tr: '' },
		{ en: 'mug', ru: 'кружка', ru_example: '', en_example: '', tr: '' },
		{ en: 'glass', ru: 'стакан', ru_example: '', en_example: '', tr: '' },
		{
			en: 'chopsticks',
			ru: 'китайские палочки',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{ en: 'spoon', ru: 'ложка', ru_example: '', en_example: '', tr: '' },
		{
			en: 'bedside lamp',
			ru: 'прикроватная лампа',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'bedside table',
			ru: 'прикроватный стол',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'alarm clock',
			ru: 'будильник',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'chest of drawers',
			ru: 'комод',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'mirrror',
			ru: 'зеркало',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'hairbrush',
			ru: 'щетка для волос',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'comb',
			ru: 'расчёстка',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'wardrobe',
			ru: 'шкаф',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'dressing table',
			ru: 'туалетный столик',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{ en: 'shower', ru: 'душ', ru_example: '', en_example: '', tr: '' },
		{ en: 'soap', ru: 'мыло', ru_example: '', en_example: '', tr: '' },
		{
			en: 'shampoo',
			ru: 'шампунь',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'shower gel',
			ru: 'гель для душа',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{ en: 'razor', ru: 'бритва', ru_example: '', en_example: '', tr: '' },
		{
			en: 'toothpaste',
			ru: 'зубая паста',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'toothbrush',
			ru: 'зубная щётка',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'toilet',
			ru: 'туалет',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'basin',
			ru: 'умывальник',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'towel',
			ru: 'полотенце',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'actually',
			ru: 'на самом деле, честно говоря',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'cheers',
			ru: 'будем здоровы (произносят во время тостов)',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{ en: 'peas', ru: 'горох', ru_example: '', en_example: '', tr: '' },
		{
			en: 'onion',
			ru: 'луковица',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'orange',
			ru: 'апельсин',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{ en: 'apple', ru: 'яблоко', ru_example: '', en_example: '', tr: '' },
		{
			en: 'bananas',
			ru: 'банан',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{ en: 'pear', ru: 'груша', ru_example: '', en_example: '', tr: '' },
		{
			en: 'grapes',
			ru: 'виноград',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'strawberries',
			ru: 'клубника',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'pineapple',
			ru: 'ананас',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'bean',
			ru: 'боб, фасоль',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'potato',
			ru: 'картофель',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'garlic',
			ru: 'чеснок',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'mushroom / fungus',
			ru: 'гриб',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'bin',
			ru: 'мусорная корзина',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'cooker',
			ru: ' плита',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'freezer',
			ru: 'морозильник',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'washing machine',
			ru: 'стиральная машина',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{ en: 'tap', ru: 'кран', ru_example: '', en_example: '', tr: '' },
		{
			en: 'sink',
			ru: 'раковина',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'excuse me — простите; извините (если отвлекли человека)',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'well done',
			ru: 'молодец',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'eat too much / overeat',
			ru: 'переедать',
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'poo (Br), poop (Am), defecate (formal)',
			ru: "сходить 'по большому'",
			ru_example: '',
			en_example: '',
			tr: ''
		},
		{
			en: 'pee (formal), urinate [formal]',
			ru: "моча, мочиться, сходить 'по маленькому' ",
			ru_example: '',
			en_example: '',
			tr: ''
		},
	]

]