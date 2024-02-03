const PHRASES_NO_VERBS = [
	[
		{
			en: 'by accident',
			ru: 'случайно',
			ru_example: 'Она случайно порезала свой палец',
			en_example: 'She cut her finger by accident'
		},
		{
			en: 'by tomorrow',
			ru: 'к завтрашнему дню',
			ru_example: 'Ему нужно сделать это к завтрашнему дню',
			en_example: 'He needs to do it by tomorrow'
		},
		{
			en: 'by bus/car etc',
			ru: 'на автобусе/ на машине и т.д',
			ru_example: 'Мой отец не ездит на работу на автобусе',
			en_example: "My father doesn't go to work by bus"
		},
		{
			en: 'by myself / yourself',
			ru: 'сам, самостоятельно',
			ru_example: 'Я учил английский в основном сам',
			en_example: 'I learnt English mostly by myself'
		}
	],
	[
		{
			en: 'in the beginning / at the beginning of',
			ru: 'в начале / в начале чего-то',
			ru_example: 'Ты заметил это в начале разговора?',
			en_example: 'Did you notice it at the beginning of the conversation?'
		},
		{
			en: 'in the end / at the end of',
			ru: 'в конце(в конце концов) / в конце чего-то',
			ru_example: 'Ты понял это в конце разговора?',
			en_example: 'Did you understand it at the end of the conversation?'
		},
		{
			en: 'in the afternoon / evening / morning',
			ru: 'днём / вечером / утром',
			ru_example: 'Это было вечером',
			en_example: 'It was in the evening'
		},
		{
			en: 'in + time of year',
			ru: 'событие произошло в такое-то время года',
			ru_example: 'Это было зимой',
			en_example: 'It was in winter'
		},
		{
			en: 'in the box',
			ru: 'в коробке',
			ru_example: 'Это лежит в коробке',
			en_example: 'It lies in the box'
		},
		{
			en: 'in this photo',
			ru: 'на этой фотографии',
			ru_example: 'Я изображён на этой фотографии',
			en_example: "I'm pictured in this photo"
		}
	],

	[
		{ en: 'on holiday', ru: 'в отпуске' },
		{ en: 'this /next / last + time / week /month / year', ru: 'употребляются без предлога' },
		{ en: 'years old', ru: 'когда хотим сказать, что кому-то столько-то лет' },
		{ en: 'with + местоимение', ru: 'с кем-то' },
		{ en: 'on + день недели', ru: 'в такой-то день недели.' },
		{ en: 'at the weekend(Br) on the weekend (Am)', ru: 'В выходные / На выходных' },
		{ en: 'with greate pleasure', ru: 'с большим/огромным удовольствием' },
		{ en: 'name of the subject + lesson', ru: 'урок чего-то' },
		{ en: 'interesting for/to + местоимение', ru: 'интересно для кого-то / кому-то' },
		{ en: 'better/worse than me', ru: 'лучше/хуже меня' },

	],

	[
		{ en: 'at the moment', ru: 'в данный момент, в настоящий момент' },
		{ en: 'right now', ru: 'прямо сейчас' },
		{ en: 'this kind of / this sort of', ru: 'такого рода' },
		{ en: 'native speaker', ru: 'носитель языка' },
		{ en: 'each other', ru: 'друг друга' },
		{ en: 'casual wear', ru: 'повседневная одежда' },
		{ en: 'a cup of + … ', ru: 'чашка (чего-то)' },
		{ en: 'a glass of + …', ru: 'стакан (чего-то)' },
		{ en: 'on the floor', ru: 'на полу ' },
		{ en: 'the right answer / the correct answer', ru: 'правильный ответ' },
	],

	[
		{ en: 'one more time', ru: 'ещё раз; ещё один раз' },
		{ en: 'on the + table / bed / sofa / desk', ru: 'на столе / на кровати / на диване / на письменном столе' },
		{ en: 'every time', ru: 'каждый раз' },
		{ en: 'for + breakfast /  lunch / dinner ', ru: 'на завтрак / обед / ужин' },
		{ en: 'on paper', ru: 'на бумаге' },
		{ en: 'at the airport', ru: 'в аэропорту' },
		{ en: 'several times', ru: 'несколько раз' },
		{ en: 'many times', ru: 'много раз' },
		{ en: 'point of view/viewpoint', ru: 'точка зрения' },
		{ en: 'on the ground', ru: 'на земле' },
	],

	[
		{ en: 'most of all', ru: 'больше всего' },
		{ en: 'from here', ru: 'отсюда' },
		{ en: 'from there', ru: 'оттуда' },
		{ en: 'on/in time', ru: 'вовремя' },
		{ en: 'the day before yesterday', ru: 'позавчера' },
		{ en: 'the day after tomorrow', ru: 'послезавтра' },
		{ en: 'country house', ru: 'загородный дом' },
		{ en: 'living room', ru: 'гостиная' },
		{ en: 'at all', ru: 'вовсе, совсем' },
		{ en: 'cell phone, mobile phone', ru: 'мобильный телефон' },
	],

	[
		{ en: 'video blogger', ru: 'видеоблоггер' },
		{ en: 'work experience', ru: 'опыт работы' },
		{ en: 'first of all', ru: 'прежде всего,  в первую очередь' },
		{ en: 'from time to time', ru: 'время от времени' },
		{ en: 'twice a + year/month/week/day', ru: 'дважды(либо другое числительное) в год...' },
		{ en: 'two times a + year/month/week/day', ru: 'два раза(либо другое числительное) в год...', },
		{ en: 'shop assistant', ru: 'продавец магазина' },
		{ en: 'swimming pool', ru: 'бассейн, плавательный бассейн' },
		{ en: 'a large + family/room/house/apartment/number', ru: 'вместо big' },
		{ en: 'common mistake', ru: 'распространённая ошибка' },
	],

	[
		{ en: 'English learners', ru: 'изучающие английский(также для других языков)' },
		{ en: 'solution to + существительное', ru: 'решение чего-то(какой-то проблемы)' },
		{ en: 'a waste of time/money', ru: 'пустая трата времени/денег' },
		{ en: `human rights`, ru: 'права человека' },
		{ en: `the memory of someone`, ru: 'память о ком-то' },
		{ en: `half an hour`, ru: 'полчаса' },
		{ en: 'all of us/them', ru: 'всех нас/их' },
		{ en: 'sales manages', ru: 'менеджер по продажам' },
		{ en: 'lots of', ru: 'много чего-то' },
		{ en: 'on sale', ru: 'по распродаже' },
	],

	[
		{ en: 'in prison', ru: 'в тюрьме' },
		{ en: 'sense of humour/humor', ru: 'чувство юмора' },
		{ en: 'as always/usual', ru: 'как всегда, как обычно' },
		{ en: 'more important', ru: 'важнее' },
		{ en: 'in bed', ru: 'в кровати(без артикля)' },
		{ en: 'for example', ru: 'например' },
		{ en: 'noun + number', ru: 'номер чего-то' },
		{ en: 'useful for/to + местоимение', ru: ' для кого-то/полезно кому-то' },
		{ en: 'sure about', ru: 'уверен в' },
		{ en: 'for hours', ru: 'часами, в течение нескольких часов' },
	],

	[
		{ en: 'way of life', ru: 'образ жизни(как аналог слова lifestyle)' },
		{ en: 'mother tongue', ru: 'родной язык' },
		{ en: 'on the left/right', ru: 'слева/справа' },
		{ en: 'on purpose |ɑːn ˈpɜːrpəs|', ru: 'специально, намеренно' },
		{ en: 'the latest', ru: 'последний' },
		{ en: 'taxi driver', ru: 'водитель такси' },
		{ en: 'overcrowded with', ru: 'переполнен чем-то' },
		{ en: 'as soon as possible', ru: 'как можно скорее' },
		{ en: 'Who / What / How + else', ru: 'это всё вопросительная конструкция' },
		{ en: 'on foot', ru: 'пешком' },
	],

	[
		{ en: 'couple of', ru: 'пара чего-то' },
		{ en: 'in front of', ru: 'спереди, напротив' },
		{ en: 'in other words', ru: 'другими словами' },
		{ en: 'the main + существительное', ru: 'главное что-то' },
		{ en: 'anwser(существительное) to', ru: 'ответ на что-то' },
		{ en: 'confident enough', ru: 'достаточно уверенно' },
		{ en: 'any longer', ru: 'больше не' },
		{ en: 'job offer', ru: 'предложение работы' },
		{ en: 'in + местоимение + free time', ru: 'в чьё-то свободное время' },
		{ en: 'for a start', ru: 'для начала' },
	],

	[
		{ en: 'at present/at the present time', ru: 'в настоящее время' },
		{ en: 'on + my/your + own', ru: 'самостоятельно' },
		{ en: 'what', ru: 'в некоторых случаях: то, что' },
		{ en: 'after', ru: 'в некоторых случаях: после того как' },
		{ en: 'the voice of your heart', ru: 'голос твоего сердца' },
		{ en: 'all this/that', ru: 'все это' },
		{ en: 'at first sight', ru: 'с первого взгляда' },
		{ en: 'all the best', ru: 'всего самого лучшего' },
		{ en: 'the right way', ru: 'правильный путь' },
		{ en: 'in public', ru: 'на публике, на людях' },
	],

	[
		{ en: 'full of', ru: 'полон чего-то' },
		{ en: 'in about', ru: 'примерно через' },
		{ en: 'one day', ru: 'однажды' },
		{ en: 'for free', ru: 'бесплатно' },
		{ en: 'because of', ru: 'из-за' },
		{ en: 'more often', ru: 'чаще' },
		{ en: 'less often', ru: 'реже' },
		{ en: 'at once', ru: 'сразу' },
		{ en: "someone's", ru: 'чей-то' },
		{ en: 'not a long time ago / not so long ago', ru: 'Не так давно' },
	],

	[
		{ en: 'The majority of people', ru: 'Большинство людей' },
		{ en: 'a speedy recovery', ru: 'скорейшего выздоровления' },
		{ en: 'for the first time', ru: 'впервые, в первый раз' },
		{ en: 'all of a sudden', ru: 'внезапно, вдруг, неожиданно' },
		{ en: 'the following', ru: 'следующее' },
		{ en: 'social network', ru: 'социальная сеть' },
		{ en: 'for other purposes', ru: 'для других целей' },
		{ en: 'for no reason ', ru: 'без причины' },
		{ en: 'fully satisfied with', ru: 'полностью удовлетворён чем-то' },
		{ en: 'in advance', ru: 'заранее' },
	],

	[
		{ en: 'letter from', ru: 'письмо от кого-то' },
		{ en: 'as much as possible', ru: 'настолько, насколько это возможно' },
		{ en: 'at the age of + number', ru: 'в возрасте стольких-то лет' },
		{ en: 'for fun', ru: 'ради забавы/для веселья' },
		{ en: 'adverb + horizons', ru: 'чей-то кругозор (horizons во множественном числе)' },
		{ en: 'a little later', ru: 'немного позже' },
		{ en: 'at the end of the week', ru: 'в конце недели' },
		{ en: 'in good shape', ru: 'в хорошей форме' },
		{ en: 'complete bargain', ru: 'очень выгодная сделка' },
		{ en: 'the last bargain', ru: 'последняя выгодная сделка' },
	],

	[
		{ en: 'obvious to', ru: 'очевидно для' },
		{ en: 'far from', ru: 'далеко от' },
		{ en: 'much more', ru: 'намного больше, намного дороже' },
		{ en: 'much less', ru: 'намного меньше, намного дешевле' },
		{ en: 'much better', ru: 'намного лучше' },
		{ en: 'much worse', ru: 'намного хуже' },
		{ en: 'the same', ru: 'то же самое' },
		{ en: 'at the same time', ru: 'в то же самое время, одновременно' },
	],
]

let counter = 0
for (let key in PHRASES_NO_VERBS) {
	counter += PHRASES_NO_VERBS[key].length
}

console.log(counter)

export default PHRASES_NO_VERBS

