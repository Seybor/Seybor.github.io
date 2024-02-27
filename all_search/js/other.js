const v = [
	{
		en: 'addicted [to]',
		ru: 'зависим [от чего-то]',
		tr: '[əˈdɪktɪd] [[tuː]]'
	},
	{ en: 'gambling', ru: 'азартные игры ', tr: '[ˈɡæmbᵊlɪŋ]' },
	{ en: 'ghost', ru: 'призрак, привидение', tr: '[ɡəʊst]' },
	{ en: 'heavily', ru: 'сильно', tr: '[ˈhɛvᵊli]' },
	{ en: 'pity', ru: 'жалость', tr: '[ˈpɪti]' },

	{ en: 'bitterly', ru: 'горько ', tr: '[ˈbɪtəli]' },
	{ en: 'excited [about]', ru: 'в восторге [от чего-то]', tr: '[ɪkˈsaɪtɪd]' },
	{ en: 'generation', ru: 'поколение', tr: '[ˌʤɛnəˈreɪʃᵊn]' },
	{ en: 'mess', ru: 'беспорядок', tr: '[mɛs]' },
	{ en: 'obviously', ru: 'очевидно', tr: '[ˈɒbviəsli]' },

	{ en: 'numerous', ru: 'многочисленный', tr: '[ˈnjuːmərəs]' },
	{ en: 'skyscraper', ru: 'небоскрёб', tr: '[ˈskaɪˌskreɪpə]' },
	{ en: 'purchase*', ru: 'покупка', tr: '[ˈpɜːʧəs]' },
	{ en: 'forward', ru: 'вперёд', tr: '[ˈfɔːwəd]' },
	{ en: 'crime', ru: 'преступление', tr: '[kraɪm]' },

	{ en: 'impatience', ru: 'нетерпение', tr: '[ɪmˈpeɪʃᵊns]' },
	{ en: 'murder', ru: 'убийство', tr: '[ˈmɜːdə]' },
	{ en: 'reply* [to]', ru: 'ответ [на что-то]', tr: '[rɪˈplaɪ] [[tuː]]' },
	{ en: 'robbery', ru: 'ограбление', tr: '[ˈrɒbəri]' },
	{ en: 'unacceptable', ru: 'неприемлемый', tr: '[ˌʌnəkˈsɛptəbᵊl]' },

	{ en: 'backache', ru: 'боль в спине', tr: '[ˈbækeɪk]' },
	{ en: 'headache', ru: 'головная боль', tr: '[ˈhɛdeɪk]' },
	{ en: 'report*', ru: 'отчёт', tr: '[rɪˈpɔːt]' },
	{
		en: 'addiction [to]',
		ru: 'зависимость [от чего-то]',
		tr: '[əˈdɪkʃᵊn] [[tuː]]'
	},
	{ en: 'advantage [of]', ru: 'преимущество [чего-то]', tr: '[ədˈvɑːntɪʤ]' },

	{ en: 'disadvantage [of]', ru: 'недостаток [чего-то]', tr: '[ˌdɪsədˈvɑːntɪʤ]' },
	{
		en: 'attitude [to / towards]',
		ru: 'отношение [к чему-то]',
		tr: '[ˈætɪtjuːd] [[tuː] / [təˈwɔːdz]]'
	},
	{ en: 'cancer', ru: 'рак', tr: '[ˈkænsə]' },
	{ en: 'cause*', ru: 'причина', tr: '[kɔːz]' },
	{ en: 'cheating', ru: 'мошенничество, списывание', tr: '[ˈʧiːtɪŋ]' },

	{ en: 'cure*', ru: 'лечение, лекарство', tr: '[kjʊə]*' },
	{ en: 'lack* [of]', ru: 'нехватка [чего-то]', tr: '[læk]*' },
	{ en: 'linguistics', ru: 'лингвистика', tr: '[lɪŋˈɡwɪstɪks]' },
	{ en: 'lung', ru: 'лёгкое', tr: '[lʌŋ]' },
	{ en: 'refusal', ru: 'отказ', tr: '[rɪˈfjuːzᵊl]' },
	{ en: 'temporary', ru: 'временный', tr: '[ˈtɛmpᵊrᵊri]' },
	{ en: 'influence* [on]', ru: 'влияние [на кого-то]', tr: '[ˈɪnflʊəns]' },
]

let arr = [
	[
		'Они зависимы от социальных сетей',
		"They's addicted to social networks"
	],
	[
		'Очень жаль видеть, что он зависим от азартных игр',
		"It's a real pity to see that he's addicted to gambling"
	],
	['Ты боишься привидений?', 'Are you afraid of ghost?'],
	[
		'Очень жаль видеть, что он зависит от курения так сильно',
		"It's a real pity to see him addicted to smoking so heavily"
	],
	['What a pity!', 'Какая жалость!'],
	['Я был горько разочарован', 'I was bitterly dissapointed'],
	[
		'Я действительно в восторге от этой поездки в Америку',
		"I'm really excited about this trip to America"
	],
	[
		'Это очень типично для людей её поколения',
		"It's very typical of people of her generation"
	],
	['Не устраивай беспорядок!', "Don't make a mess!"],
	['Очевидно, что вы глупы', "Obviously, you're silly"],
	['Многочисленные здания', 'Numerous buildings'],
	[
		'Город известен своими многочисленными небоскрёбами',
		'The city is famous for its numerous skyscrapers'
	],
	[
		'Она действительно разочарована этой покупкой',
		"She's really disappointed about this purchase"
	],
	['Идите только вперед', 'Only go forward'],
	[
		'Они обвинили его в очень серьёзном преступлении',
		'They accused him of a very serious crime'
	],
	['Его нетерпение мне не нравится', "I don't like his impatience"],
	['Они обвинил его в убийстве', 'They accused him of murder'],
	['Ответ на письмо', 'Reply to the letter'],
	['Он обвинил их в грабеже', 'He accused them of robbery'],
	[
		'Учителя часто кричат на него, что, конечно, недопустимо',
		'The teachers often shout at him which is, of course, unacceptable'
	],
	['Он страдает от боли в спине', 'He suffers from a backache'],
	[
		'Она часто страдает от головных болей',
		'She often suffers from headaches'
	],
	['Переделайте этот отчет', 'Remake this report'],
	[
		'Легко заметить его пристрастие к социальным сетям',
		'It is easy to notice his addiction to social networks'
	],
	[
		'Какие преимущества этого курса?',
		'What are the advantages of this course?'
	],
	[
		'Какие недостатки этого курса?',
		'What are the disadvantages of this course?'
	],
	[
		'Какое ваше отношение к курению?',
		'What is your attitude to/towards smoking?'
	],
	[
		'Курение − основная причина рака лёгких',
		'Smoking is the leading cause of lung cancer'
	],
	['Это было причиной его смерти', 'It was the cause of his death'],
	[
		'Какое твоё отношение к мошенничеству?',
		'What is your attidude to/toward cheating?'
	],
	[
		'Они не могут найти лекарства от этой болезни',
		"They can't find a cure for this disease"
	],
	['У неё нехватка опыта', 'She has a lack of experience'],
	[
		'Она специализируется на лингвистике',
		"She's specializing in linguistics"
	],
	['У меня больные легкие', 'I have a bad lungs'],
	['Твой отказ неприемлем', 'Your refusal is unacceptable'],
	[
		'Это было временное решение нашей проблемы',
		'It was a temporary solution to our problem'
	],
	[
		'Он оказал на меня сильное влияние',
		'He had a strong influence on me'
	]
]

arr.forEach((el, id) => {
	v[id].ru_example = el[0]
	v[id].en_example = el[1]
})

console.log(v)