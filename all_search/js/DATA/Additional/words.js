const ADJECTIVES = [
	{
		en: 'amazing / astonishing', tr: '[əˈmeɪzɪŋ] / [əˈstɑːnɪʃɪŋ]', ru: 'удивительный [поразительный]',
		ru_example: 'Ты удивительный человек',
		en_example: "You're an amazing / astonishing person",
	},
	{ en: 'wonderful', tr: '[ˈwʌndərfl]', ru: 'чудесный', ru_example: 'Ты чудесный человек', en_example: "You're a wonderful person", },
	{ en: 'awesome', tr: '[ˈɔːsəm]', ru: 'потрясающий', ru_example: 'Ты потрясающий человек', en_example: "You're an awesome person" },
	{ en: 'splendid', tr: '[ˈsplendɪd]', ru: 'великолепный, роскошный', ru_example: 'Вы великолепная женщина', en_example: "You're a splendid woman" },
	{ en: 'fantastic', tr: '[fænˈtæstɪk]', ru: 'фантастический', ru_example: 'Ты фантастический человек', en_example: "You're a fantastic person" },
	{ en: 'lovely', tr: '[ˈlʌvlɪ]', ru: 'прекрасный', ru_example: 'Ты прекрасный человек', en_example: "You're a lovely person" },
	{ en: 'surprising', tr: '[səˈpraɪzɪŋ]', ru: 'удивительный [неожиданный]', ru_example: 'Вряд ли это неожиданная новость', en_example: "This is hardly surprising news" },
	{
		en: 'annoying', tr: '[əˈnɔɪɪŋ]', ru: 'неприятный', ru_example: 'Было неприятно слышать, как они спорят', en_example: "It was annoying to hear them arguing",
	},
	{
		en: 'obsolete', tr: '[ˈɒbsəliːt]', ru: 'устаревший', ru_example: 'Это устаревшее свойство', en_example: "It's an obsolete property",
	},
	{
		en: 'whole / entire', tr: '[həʊl] / [ɪnˈtaɪə]', ru: 'весь, целый', ru_example: 'Вы выпили всю бутылку?', en_example: "Have you drunk the whole / entire bottle?",
	},
	{
		en: 'whenever', tr: '[wenˈevər]', ru: 'всякий раз когда', ru_example: 'Он ездит в Англию всякий раз, когда у него длительныe каникулы', en_example: "He goes to England whenever he has a long holiday",
	},
	{
		en: 'almost / nearly', tr: '[ˈɔːlməʊst] / [ˈnɪrlɪ]', ru: 'почти', ru_example: 'Он почти сделал это', en_example: "He almost / nearly did it",
	},
	{
		en: 'according', tr: '[əˈkɔːdɪŋ]', ru: 'согласно', ru_example: 'согласно расписанию', en_example: "according to schedule",
	},
	{
		en: 'probably', tr: '[ˈprɑːbəblɪ]', ru: 'вероятно', ru_example: 'Мы, наверное, выйдем сегодня вечером', en_example: "We'll probably go out this evening",
	},
	{
		en: 'postcard',
		ru: 'открытка',
		ru_example: '',
		en_example: '',
		tr: '[ˈpəʊstkɑːrd]'
	},
	{
		en: 'disgusting',
		ru: 'отвратительный',
		ru_example: '',
		en_example: '',
		tr: '[dɪsˈɡʌstɪŋ]'
	},
	{
		en: 'fascinating',
		ru: 'очаровательный',
		ru_example: '',
		en_example: '',
		tr: '[ˈfæsɪneɪtɪŋ]'
	},
	{
		en: 'fascinated',
		ru: 'очарованный',
		ru_example: '',
		en_example: '',
		tr: '[ˈfæsɪneɪtɪd]'
	},
	{
		en: 'poacher',
		ru: 'браконьер',
		ru_example: '',
		en_example: '',
		tr: '[ˈpəʊtʃər]'
	},
	{
		en: 'chase',
		ru: 'преследование',
		ru_example: '',
		en_example: '',
		tr: '[tʃeɪs]'
	},
	{
		en: 'day off',
		ru: 'выходной',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{
		en: 'selfish',
		ru: 'эгоистичный',
		ru_example: "Ты не должен быть таким эгоистичным!",
		en_example: "You mustn't be so selfish!",
		tr: '[ˈselfɪʃ]'
	},
	{
		en: 'passion',
		ru: 'страсть',
		ru_example: 'Есть ли у него какие-нибудь пристрастия?',
		en_example: 'Does he have any passions?',
		tr: '[ˈpæʃn]'
	},
	{
		en: 'wet',
		ru: 'мокрый Моя одежда мокрая',
		ru_example: 'My clothes are wet',
		en_example: '[wet]',
		tr: ''
	},
	{
		en: 'buzz',
		ru: 'жужжание',
		ru_example: 'жужжание пчёл',
		en_example: 'the buzz from the bees',
		tr: '[bʌz]'
	},
	{
		en: 'humiliation',
		ru: 'унижение',
		ru_example: 'терпеть унижение',
		en_example: 'to suffer humiliation',
		tr: '[hjuːˌmɪlɪˈeɪʃn]'
	},
	{
		en: 'humiliating',
		ru: 'унизительный',
		ru_example: 'унизительное положение',
		en_example: 'a humiliating situation',
		tr: '[hjuːˈmɪlɪeɪtɪŋ]'
	},
	{
		en: 'weird',
		ru: 'странный',
		ru_example: '',
		en_example: '',
		tr: '[wɪəd]'
	},
	{
		en: 'beyond',
		ru: 'за пределами',
		ru_example: '',
		en_example: '',
		tr: '[bɪˈjɒnd]'
	},
	{
		en: 'graveyard',
		ru: 'кладбище',
		ru_example: '',
		en_example: '',
		tr: '[ˈɡreɪvjɑːd]'
	},
	{
		en: 'dreadful',
		ru: 'ужасный',
		ru_example: '',
		en_example: '',
		tr: '[ˈdrɛdfᵊl]'
	},
	{
		en: 'goody',
		ru: 'ханжеский; ханжа',
		ru_example: '',
		en_example: '',
		tr: '[ˈɡʊdɪ]'
	},
]






