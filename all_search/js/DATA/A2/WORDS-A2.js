const WORDS_A2 = [
	{
		en: 'addicted [to]',
		ru: 'зависим [от чего-то]',
		tr: '[əˈdɪktɪd] [[tuː]]',
		ru_example: 'Они зависимы от социальных сетей',
		en_example: "They's addicted to social networks"
	},
	{
		en: 'gambling',
		ru: 'азартные игры ',
		tr: '[ˈɡæmbᵊlɪŋ]',
		ru_example: 'Очень жаль видеть, что он зависим от азартных игр',
		en_example: "It's a real pity to see that he's addicted to gambling"
	},
	{
		en: 'ghost',
		ru: 'призрак, привидение',
		tr: '[ɡəʊst]',
		ru_example: 'Ты боишься привидений?',
		en_example: 'Are you afraid of ghost?'
	},
	{
		en: 'heavily',
		ru: 'сильно',
		tr: '[ˈhɛvᵊli]',
		ru_example: 'Очень жаль видеть, что он зависит от курения так сильно',
		en_example: "It's a real pity to see him addicted to smoking so heavily"
	},
	{
		en: 'pity',
		ru: 'жалость',
		tr: '[ˈpɪti]',
		ru_example: 'What a pity!',
		en_example: 'Какая жалость!'
	},
	{
		en: 'bitterly',
		ru: 'горько ',
		tr: '[ˈbɪtəli]',
		ru_example: 'Я был горько разочарован',
		en_example: 'I was bitterly dissapointed'
	},
	{
		en: 'excited [about]',
		ru: 'в восторге [от чего-то]',
		tr: '[ɪkˈsaɪtɪd]',
		ru_example: 'Я действительно в восторге от этой поездки в Америку',
		en_example: "I'm really excited about this trip to America"
	},
	{
		en: 'generation',
		ru: 'поколение',
		tr: '[ˌʤɛnəˈreɪʃᵊn]',
		ru_example: 'Это очень типично для людей её поколения',
		en_example: "It's very typical of people of her generation"
	},
	{
		en: 'mess',
		ru: 'беспорядок',
		tr: '[mɛs]',
		ru_example: 'Не устраивай беспорядок!',
		en_example: "Don't make a mess!"
	},
	{
		en: 'obviously',
		ru: 'очевидно',
		tr: '[ˈɒbviəsli]',
		ru_example: 'Очевидно, что вы глупы',
		en_example: "Obviously, you're silly"
	},
	{
		en: 'numerous',
		ru: 'многочисленный',
		tr: '[ˈnjuːmərəs]',
		ru_example: 'Многочисленные здания',
		en_example: 'Numerous buildings'
	},
	{
		en: 'skyscraper',
		ru: 'небоскрёб',
		tr: '[ˈskaɪˌskreɪpə]',
		ru_example: 'Город известен своими многочисленными небоскрёбами',
		en_example: 'The city is famous for its numerous skyscrapers'
	},
	{
		en: 'purchase*',
		ru: 'покупка',
		tr: '[ˈpɜːʧəs]',
		ru_example: 'Она действительно разочарована этой покупкой',
		en_example: "She's really disappointed about this purchase"
	},
	{
		en: 'forward',
		ru: 'вперёд',
		tr: '[ˈfɔːwəd]',
		ru_example: 'Идите только вперед',
		en_example: 'Only go forward'
	},
	{
		en: 'crime',
		ru: 'преступление',
		tr: '[kraɪm]',
		ru_example: 'Они обвинили его в очень серьёзном преступлении',
		en_example: 'They accused him of a very serious crime'
	},
	{
		en: 'impatience',
		ru: 'нетерпение',
		tr: '[ɪmˈpeɪʃᵊns]',
		ru_example: 'Его нетерпение мне не нравится',
		en_example: "I don't like his impatience"
	},
	{
		en: 'murder',
		ru: 'убийство',
		tr: '[ˈmɜːdə]',
		ru_example: 'Они обвинил его в убийстве',
		en_example: 'They accused him of murder'
	},
	{
		en: 'reply* [to]',
		ru: 'ответ [на что-то]',
		tr: '[rɪˈplaɪ] [[tuː]]',
		ru_example: 'Ответ на письмо',
		en_example: 'Reply to the letter'
	},
	{
		en: 'robbery',
		ru: 'ограбление',
		tr: '[ˈrɒbəri]',
		ru_example: 'Он обвинил их в грабеже',
		en_example: 'He accused them of robbery'
	},
	{
		en: 'unacceptable',
		ru: 'неприемлемый',
		tr: '[ˌʌnəkˈsɛptəbᵊl]',
		ru_example: 'Учителя часто кричат на него, что, конечно, недопустимо',
		en_example: 'The teachers often shout at him which is, of course, unacceptable'
	},
	{
		en: 'backache',
		ru: 'боль в спине',
		tr: '[ˈbækeɪk]',
		ru_example: 'Он страдает от боли в спине',
		en_example: 'He suffers from a backache'
	},
	{
		en: 'headache',
		ru: 'головная боль',
		tr: '[ˈhɛdeɪk]',
		ru_example: 'Она часто страдает от головных болей',
		en_example: 'She often suffers from headaches'
	},
	{
		en: 'report*',
		ru: 'отчёт',
		tr: '[rɪˈpɔːt]',
		ru_example: 'Переделайте этот отчет',
		en_example: 'Remake this report'
	},
	{
		en: 'addiction [to]',
		ru: 'зависимость [от чего-то]',
		tr: '[əˈdɪkʃᵊn] [[tuː]]',
		ru_example: 'Легко заметить его пристрастие к социальным сетям',
		en_example: 'It is easy to notice his addiction to social networks'
	},
	{
		en: 'advantage [of]',
		ru: 'преимущество [чего-то]',
		tr: '[ədˈvɑːntɪʤ]',
		ru_example: 'Какие преимущества этого курса?',
		en_example: 'What are the advantages of this course?'
	},
	{
		en: 'disadvantage [of]',
		ru: 'недостаток [чего-то]',
		tr: '[ˌdɪsədˈvɑːntɪʤ]',
		ru_example: 'Какие недостатки этого курса?',
		en_example: 'What are the disadvantages of this course?'
	},
	{
		en: 'attitude [to / towards]',
		ru: 'отношение [к чему-то]',
		tr: '[ˈætɪtjuːd] [[tuː] / [təˈwɔːdz]]',
		ru_example: 'Какое ваше отношение к курению?',
		en_example: 'What is your attitude to/towards smoking?'
	},
	{
		en: 'cancer',
		ru: 'рак',
		tr: '[ˈkænsə]',
		ru_example: 'Курение − основная причина рака лёгких',
		en_example: 'Smoking is the leading cause of lung cancer'
	},
	{
		en: 'cause*',
		ru: 'причина',
		tr: '[kɔːz]',
		ru_example: 'Это было причиной его смерти',
		en_example: 'It was the cause of his death'
	},
	{
		en: 'cheating',
		ru: 'мошенничество, списывание',
		tr: '[ˈʧiːtɪŋ]',
		ru_example: 'Какое твоё отношение к мошенничеству?',
		en_example: 'What is your attidude to/toward cheating?'
	},
	{
		en: 'cure*',
		ru: 'лечение, лекарство',
		tr: '[kjʊə]*',
		ru_example: 'Они не могут найти лекарства от этой болезни',
		en_example: "They can't find a cure for this disease"
	},
	{
		en: 'lack* [of]',
		ru: 'нехватка [чего-то]',
		tr: '[læk]*',
		ru_example: 'У неё нехватка опыта',
		en_example: 'She has a lack of experience'
	},
	{
		en: 'linguistics',
		ru: 'лингвистика',
		tr: '[lɪŋˈɡwɪstɪks]',
		ru_example: 'Она специализируется на лингвистике',
		en_example: "She's specializing in linguistics"
	},
	{
		en: 'lung',
		ru: 'лёгкое',
		tr: '[lʌŋ]',
		ru_example: 'У меня больные легкие',
		en_example: 'I have a bad lungs'
	},
	{
		en: 'refusal',
		ru: 'отказ',
		tr: '[rɪˈfjuːzᵊl]',
		ru_example: 'Твой отказ неприемлем',
		en_example: 'Your refusal is unacceptable'
	},
	{
		en: 'temporary',
		ru: 'временный',
		tr: '[ˈtɛmpᵊrᵊri]',
		ru_example: 'Это было временное решение нашей проблемы',
		en_example: 'It was a temporary solution to our problem'
	},
	{
		en: 'influence* [on]',
		ru: 'влияние [на кого-то]',
		tr: '[ˈɪnflʊəns]',
		ru_example: 'Он оказал на меня сильное влияние',
		en_example: 'He had a strong influence on me'
	}
]

export default WORDS_A2