let arr = [
	[
		'Back up',
		'поддерживать',
		'Can you back me up in this argument?',
		'Можешь поддержать меня в этом споре?'
	],
	[
		'Break in',
		'врываться',
		'Someone broke in while we were away.',
		'Кто-то вломился, пока нас не было.'
	],
	[
		'Break out',
		'вспыхнуть',
		'A fire broke out in the building.',
		'В здании вспыхнул пожар.'
	],
	[
		'Break up',
		'расставаться',
		'They decided to break up after two years.',
		'Они решили расстаться после двух лет.'
	],
	[
		'Call off',
		'отменить',
		'They called off the meeting due to bad weather.',
		'Они отменили встречу из-за плохой погоды.'
	],
	[
		'Calm down',
		'успокоиться',
		'You need to calm down before you speak.',
		'Тебе нужно успокоиться, прежде чем говорить.'
	],
	[
		'Carry on (+ with)',
		'продолжать',
		'Please carry on with your work.',
		'Пожалуйста, продолжайте свою работу.'
	],
	[
		'Check in',
		'зарегистрироваться',
		'We need to check in at the hotel by 3 PM.',
		'Нам нужно зарегистрироваться в отеле до 15:00.'
	],
	[
		'Check out',
		'проверить',
		'Check out this new restaurant!',
		'Проверь этот новый ресторан!'
	],
	[
		'Come across',
		'натолкнуться, случайно встретить',
		'I came across an old friend at the store.',
		'Я наткнулся на старого друга в магазине.'
	],
	[
		'Come down',
		'спуститься',
		'Please come down from the roof.',
		'Пожалуйста, спустись с крыши.'
	],
	[
		'Come in',
		'входить',
		'Please come in and make yourself comfortable.',
		'Пожалуйста, входите и чувствуйте себя как дома.'
	],
	[
		'Come up with',
		'придумать',
		'She came up with a great idea for the project.',
		'Она придумала отличную идею для проекта.'
	],
	[
		'Fall apart',
		'развалиться',
		'The old book fell apart after years of use.',
		'Старая книга развалилась после многих лет использования.'
	],
	[
		'Get along with',
		'ладить с кем-то',
		'I get along well with my colleagues.',
		'Я хорошо лажу с коллегами.'
	],
	[
		'Get in',
		'входить',
		'What time did you get in last night?',
		'Во сколько ты пришел прошлой ночью?'
	],
	[
		'Get out',
		'выходить',
		'We need to get out of the house more often.',
		'Нам нужно чаще выходить из дома.'
	],
	[
		'Get over',
		'преодолеть',
		'It took her a long time to get over the flu.',
		'Ей потребовалось много времени, чтобы преодолеть грипп.'
	],
	[
		'Give away',
		'раздавать',
		'They gave away free samples at the store.',
		'Они раздавали бесплатные образцы в магазине.'
	],
	[
		'Give back',
		'вернуть',
		'Please give back the book when you’re done.',
		'Пожалуйста, верни книгу, когда закончишь.'
	],
	[
		'Give in',
		'уступать',
		'He finally gave in to her demands.',
		'Он наконец уступил ее требованиям.'
	],
	[
		'Give up',
		'сдаваться',
		'He gave up smoking last year.',
		'Он бросил курить в прошлом году.'
	],
	[
		'Go on',
		'продолжать',
		'The show will go on despite the rain.',
		'Шоу продолжится, несмотря на дождь.'
	],
	[
		'Hang out',
		'проводить время',
		'We usually hang out at the mall.',
		'Мы обычно проводим время в торговом центре.'
	],
	[
		'Hold on',
		'подождать',
		'Hold on a second, I’ll be right back.',
		'Подожди секунду, я сейчас вернусь.'
	],
	[
		'Keep on',
		'продолжать',
		'Keep on trying until you succeed.',
		'Продолжай пытаться, пока не добьешься успеха.'
	],
	[
		'Keep up',
		'поддерживать',
		'I can’t keep up with the latest trends.',
		'Я не могу поддерживать последние тренды.'
	],
	[
		'Look after',
		'заботиться',
		"Can you look after my cat while I'm away?",
		'Можешь позаботиться о моей кошке, пока меня нет?'
	],
	[
		'Look back',
		'оглядываться',
		'Don’t look back; just keep moving forward.',
		'Не оглядывайся; просто продолжай двигаться вперед.'
	],
	[
		'Look forward to',
		'ждать с нетерпением',
		'I look forward to meeting you.',
		'Я с нетерпением жду встречи с тобой.'
	],
	[
		'Look into',
		'изучить',
		'The police will look into the matter.',
		'Полиция изучит этот вопрос.'
	],
	[
		'Look out',
		'быть осторожным',
		'Look out for cars when crossing the street.',
		'Будь осторожен с машинами при переходе улицы.'
	],
	[
		'Look up',
		'искать в словаре',
		'You should look up the word in the dictionary.',
		'Тебе следует найти это слово в словаре.'
	],
	[
		'Make out',
		'разглядеть',
		'I can’t make out what it says.',
		'Я не могу разглядеть, что там написано.'
	],
	[
		'Make up for',
		'компенсировать',
		'She tried to make up for her mistake.',
		'Она пыталась компенсировать свою ошибку.'
	],
	[
		'Pass by',
		'проходить мимо',
		'I passed by the bakery on my way home.',
		'Я проходил мимо пекарни по пути домой.'
	],
	[
		'Pass out',
		'терять сознание',
		'He passed out from exhaustion.',
		'Он потерял сознание от усталости.'
	],
	[
		'Pick up',
		'поднимать',
		'Can you pick up the groceries on your way home?',
		'Можешь забрать продукты по дороге домой?'
	],
	[
		'Put aside',
		'отложить',
		'I put aside some money for my vacation.',
		'Я отложил немного денег на отпуск.'
	],
	[
		'Put off',
		'откладывать',
		'I put off the meeting until next week.',
		'Я отложил встречу до следующей недели.'
	],
	[
		'Put on',
		'надевать',
		'She put on her coat before going outside.',
		'Она надела пальто перед выходом на улицу.'
	],
	[
		'Put up with',
		'терпеть',
		'I can’t put up with his behavior anymore.',
		'Я больше не могу терпеть его поведение.'
	],
	[
		'Run into',
		'столкнуться с (напр. проблемами); кого-то встретить',
		'I ran into an old friend at the café.',
		'Я столкнулся со старым другом в кафе.'
	],
	[
		'Run out',
		'истощаться',
		'We ran out of time before finishing the project.',
		'У нас закончилось время до завершения проекта.'
	],
	[
		'Run out of',
		'исчерпать',
		'We ran out of milk.',
		'У нас закончилось молоко.'
	],
	[
		'Set up',
		'организовать',
		'They set up a new office downtown.',
		'Они организовали новый офис в центре города.'
	],
	[
		'Show up',
		'появиться',
		'He didn’t show up for the meeting.',
		'Он не пришел на встречу.'
	],
	[
		'Stand up',
		'вставать',
		'Please stand up when the teacher enters the room.',
		'Пожалуйста, встаньте, когда учитель войдет в класс.'
	],
	[
		'Take care of о',
		'заботиться о',
		'I will take care of the arrangements.',
		'Я позабочусь о подготовке.'
	],
	[
		'Take down',
		'снимать',
		'He took down the poster from the wall.',
		'Он снял постер со стены.'
	],
	[
		'Take on',
		'брать на себя',
		'She decided to take on more responsibilities at work.',
		'Она решила взять на себя больше ответственности на работе.'
	],
	[
		'Take up заниматься',
		'начать заниматься',
		'She decided to take up painting.',
		'Она решила начать заниматься живописью.'
	],
	[
		'Turn down',
		'отклонять',
		'She turned down the job offer.',
		'Она отклонила предложение о работе.'
	],
	[
		'Turn up',
		'появляться',
		'She turned up late for the party.',
		'Она пришла на вечеринку с опозданием.'
	],
	[
		'Work out',
		'решать / заниматься спортом',
		'We need to work out a solution to this problem.',
		'Нам нужно решить эту проблему.'
	]
]

arr.forEach((el, id) => {
	let str = `<p data-id="${id + 1}">`
	el.forEach(els => {
		str += `<span>${els}</span>`
	})
	str += '</p>'

	document.querySelector('div').insertAdjacentHTML('beforeend', str);

})