let adverb = [
	{
		ru: 'часто',
		en: [
			'often',
			'frequently',
			'repeatedly',
			'regularly',
			'again and again'
		],
		desc: [
			'often - общий термин',
			'frequently - регулярно',
			'repeatedly - неоднократно',
			'regularly [ˈreɡjʊləlɪ] - регулярно',
			'again and again - снова и снова'
		],
		ex: [
			'We often met over a cup of coffee - Мы часто встречались за чашкой кофе',
			'He was frequently drunk - Он часто был пьян',
			'The phone rang repeatedly, but no one answered - Телефон позвонил несколько раз, но никто не ответил',
			'We go to church regularly - Мы регулярно ходим в церковь',
			'That process can happen again and again - Этот процесс может повторяться снова и снова',
			''
		]
	},
	{
		ru: 'сейчас',
		en: ['now', 'presently', 'immediately', 'instantly', 'promptly'],
		desc: [
			'now - общий термин',
			'presently - в настоящее время',
			'immediately - сразу, немедленно',
			'instantly - мгновенно',
			'promptly - быстро, сразу'
		],
		ex: [
			'But now, he was angry - Но сейчас он был в ярости',
			'These attractions are presently in operation - Эти аттракционы работают и в настоящее время',
			'He set to work immediately - Он немедленно приступил к работе',
			'They can respond instantly to demand - Мы можем мгновенно реагировать на спрос',
			'They were promptly withdrawn from sale - Однако его быстро сняли с продажи',
			''
		]
	},
	{
		ru: 'через',
		en: ['across', 'through'],
		desc: [
			'across - когда нет препятствий',
			'through - когда есть препятствия'
		],
		ex: [
			'',
			'I usually go there through the park - Я обычно иду туда через парк',
			"We're going across the field - Мы идём туда через поле",
			''
		]
	},
	{
		ru: 'довольно',
		en: ['quite', 'pretty', 'rather'],
		desc: [
			'quite - более формально и используется в более широком контексте, обычно в положительном значении',
			'pretty - более неформально и используется в разговорном английском',
			'rather- часто подразумевает чувство удивления или неожиданности, обычно в негативном значении'
		],
		ex: [
			"It's a quite hot day - Это довольно жаркий день",
			"It's a pretty boring job - Это довольно скучная работа",
			"It's rather unexpected news - Это довольно неожиданная новость",
			''
		]
	},
	{
		ru: 'наоборот',
		en: ['contrary', 'on the contrary'],
		desc: [
			'contrary - это прилагательное, описывающее противостояние',
			'on the contrary - это фразеологизм, используемый для выражения контраста или опровержения предыдущего утверждения'
		],
		ex: [
			'I think we should go to the movies. On the contrary, I think we should stay home and watch TV - Я думаю, мы должны пойти в кино. Наоборот, я думаю, мы должны остаться дома и смотреть телевизор',
			'The weather was contrary to what we expected; it was sunny instead of rainy - Погода была противной тому, что мы ожидали; она была солнечной вместо дождливой',
			''
		]
	},
	{
		ru: 'легко',
		en: [
			'easy',
			'simple',
			'straightforward - [ˌstreɪtˈfɔːrwərd]',
			'uncomplicated - [ʌnˈkɑːmplɪkeɪtɪd]'
		],
		desc: [
			'Easy - подразумевает отсутствие усилий или трудностей, имеет самое широкое значение',
			'Simple - больше относится к лёгкости действий или понимания чего-либо',
			'Straightforward (простой) - подразумевает прямоту и ясность, лёгкое для исполнения (более формальный вариант)',
			'Uncomplicated (несложный) - действие могло бы быть сложным, но оно таким не является'
		],
		ex: [
			'The math problem was easy to solve - Математическую задачу было легко решить',
			'The recipe was simple to follow - Рецепт был прост в исполнении',
			'The instructions were straightforward and easy to follow - Инструкции были простыми и легко выполнимыми',
			'The plan was uncomplicated and easy to execute - План был несложным и легко выполнимым'
		]
	},
	{
		ru: 'очень',
		en: ['very', 'extremely', 'exceptionally', 'remarkably'],
		desc: [
			'very - общий термин',
			'extremely - чрезвычайно',
			'exceptionally - исключительно',
			'remarkably - удивительно'
		],
		ex: [
			'You are a very good doctor - Ты очень хороший врач',
			'She is an extremely moral woman - Она чрезвычайно высоконравственная женщина',
			'He was an exceptionally bright child - Это был исключительно смышлёный мальчик',
			'He was remarkably candid with me - Со мной он был на удивление откровенен'
		]
	},
	{
		ru: 'через',
		en: ['across', 'through'],
		desc: ['across - когда нет препятствий', 'through - когда есть препятствия'],
		ex: ['I usually go there through the park - Я обычно иду туда через парк', `We're going across the field - Мы идём туда через поле`],
	},
	{
		ru: 'довольно',
		en: ['quite', 'pretty', 'rather'],
		desc: ['quite - более формально и используется в более широком контексте, обычно в положительном значении', 'pretty - более неформально и используется в разговорном английском', 'rather- часто подразумевает чувство удивления или неожиданности, обычно в негативном значении'],
		ex: [`It's a quite hot day - Это довольно жаркий день`, `It's a pretty boring job - Это довольно скучная работа`, `It's rather unexpected news - Это довольно неожиданная новость`],
	},
	{
		ru: 'наоборот',
		en: ['contrary', 'on the contrary'],
		desc: [
			'contrary - это прилагательное, описывающее противостояние',
			'on the contrary - это фразеологизм, используемый для выражения контраста или опровержения предыдущего утверждения'
		],
		ex: [
			'I think we should go to the movies. On the contrary, I think we should stay home and watch TV - Я думаю, мы должны пойти в кино. Наоборот, я думаю, мы должны остаться дома и смотреть телевизор',
			'The weather was contrary to what we expected; it was sunny instead of rainy - Погода была противной тому, что мы ожидали; она была солнечной вместо дождливой'
		]
	},
	{
		ru: 'легко',
		en: [
			'easy',
			'simple',
			'straightforward - [ˌstreɪtˈfɔːrwərd]',
			'uncomplicated - [ʌnˈkɑːmplɪkeɪtɪd]'
		],
		desc: [
			'Easy - подразумевает отсутствие усилий или трудностей, имеет самое широкое значение',
			'Simple - больше относится к лёгкости действий или понимания чего-либо',
			'Straightforward (простой) - подразумевает прямоту и ясность, лёгкое для исполнения (более формальный вариант)',
			'Uncomplicated (несложный) - действие могло бы быть сложным, но оно таким не является'
		],
		ex: [
			'The math problem was easy to solve - Математическую задачу было легко решить',
			'The recipe was simple to follow - Рецепт был прост в исполнении',
			'The instructions were straightforward and easy to follow - Инструкции были простыми и легко выполнимыми',
			'The plan was uncomplicated and easy to execute - План был несложным и легко выполнимым',
		]
	},
]

export default adverb