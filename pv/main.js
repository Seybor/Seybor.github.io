let arr = [
	[
		'Back up',
		'поддерживать',
		'Can you back me up in this argument?',
		'Можешь поддержать меня в этом споре?',
	],
	[
		'Break down',
		'сломаться',
		'My car broke down on the way to work.',
		'Моя машина сломалась по пути на работу.',
	],
	[
		'Call off',
		'отменить',
		'They called off the meeting due to bad weather.',
		'Они отменили встречу из-за плохой погоды.',
	],
	[
		'Carry on',
		'продолжать',
		'Please carry on with your work.',
		'Пожалуйста, продолжайте свою работу.',
	],
	[
		'Come across',
		'натолкнуться',
		'I came across an old friend at the store.',
		'Я наткнулся на старого друга в магазине.',
	],
	[
		'Get along',
		'ладить',
		'I get along well with my colleagues.',
		'Я хорошо лажу с коллегами.',
	],
	[
		'Give up',
		'сдаваться',
		'He gave up smoking last year.',
		'Он бросил курить в прошлом году.',
	],
	[
		'Look after',
		'заботиться',
		"Can you look after my cat while I'm away?",
		'Можешь позаботиться о моей кошке, пока меня нет?',
	],
	[
		'Make up',
		'мириться',
		'They made up after their argument.',
		'Они помирились после ссоры.',
	],
	[
		'Pick up',
		'поднимать',
		'Can you pick up the groceries on your way home?',
		'Можешь забрать продукты по дороге домой?',
	],
	[
		'Put off',
		'откладывать',
		'I put off the meeting until next week.',
		'Я отложил встречу до следующей недели.',
	],
	[
		'Run out of',
		'исчерпать',
		'We ran out of milk.',
		'У нас закончилось молоко.',
	],
	[
		'Set up',
		'организовать',
		'They set up a new office downtown.',
		'Они организовали новый офис в центре города.',
	],
	[
		'Take off',
		'взлетать',
		'The plane will take off in ten minutes.',
		'Самолет взлетит через десять минут.',
	],
	[
		'Turn down',
		'отклонять',
		'She turned down the job offer.',
		'Она отклонила предложение о работе.',
	],
	[
		'Work out / заниматься спортом',
		'решать / заниматься спортом',
		'We need to work out a solution to this problem.',
		'Нам нужно решить эту проблему.',
	],
	[
		'Break up',
		'расставаться',
		'They decided to break up after two years.',
		'Они решили расстаться после двух лет.',
	],
	[
		'Calm down',
		'успокоиться',
		'You need to calm down before you speak.',
		'Тебе нужно успокоиться, прежде чем говорить.',
	],
	[
		'Come up with',
		'придумать',
		'She came up with a great idea for the project.',
		'Она придумала отличную идею для проекта.',
	],
	[
		'Fall apart',
		'развалиться',
		'The old book fell apart after years of use.',
		'Старая книга развалилась после многих лет использования.',
	],
	[
		'Hold on',
		'подождать',
		'Hold on a second, I’ll be right back.',
		'Подожди секунду, я сейчас вернусь.',
	],
	[
		'Look into',
		'изучить',
		'The police will look into the matter.',
		'Полиция изучит этот вопрос.',
	],
	[
		'Run into',
		'столкнуться',
		'I ran into an old friend at the café.',
		'Я столкнулся со старым другом в кафе.',
	],
	[
		'Show up',
		'появиться',
		'He didn’t show up for the meeting.',
		'Он не пришел на встречу.',
	],
	[
		'Take care of о',
		'заботиться о',
		'I will take care of the arrangements.',
		'Я позабочусь о подготовке.',
	],
	[
		'Turn up',
		'появляться',
		'She turned up late for the party.',
		'Она пришла на вечеринку с опозданием.',
	],
	[
		'Give in',
		'уступать',
		'He finally gave in to her demands.',
		'Он наконец уступил ее требованиям.',
	],
	[
		'Go on',
		'продолжать',
		'The show will go on despite the rain.',
		'Шоу продолжится, несмотря на дождь.',
	],
	[
		'Look forward to',
		'ждать с нетерпением',
		'I look forward to meeting you.',
		'Я с нетерпением жду встречи с тобой.',
	],
	[
		'Make out',
		'разглядеть',
		'I can’t make out what it says.',
		'Я не могу разглядеть, что там написано.',
	],
	[
		'Put up with',
		'терпеть',
		'I can’t put up with his behavior anymore.',
		'Я больше не могу терпеть его поведение.',
	],
	[
		'Run away',
		'убежать',
		'The dog ran away from home.',
		'Собака убежала из дома.',
	],
	[
		'Take up заниматься',
		'начать заниматься',
		'She decided to take up painting.',
		'Она решила начать заниматься живописью.',
	],
	[
		'Break out',
		'вспыхнуть',
		'A fire broke out in the building.',
		'В здании вспыхнул пожар.',
	],
	[
		'Come down',
		'спуститься',
		'Please come down from the roof.',
		'Пожалуйста, спустись с крыши.',
	],
	[
		'Get back to',
		'вернуться к',
		'I will get back to you later.',
		'Я вернусь к тебе позже.',
	],
	[
		'Give away',
		'раздавать',
		'They gave away free samples at the store.',
		'Они раздавали бесплатные образцы в магазине.',
	],
	[
		'Look up',
		'искать в словаре',
		'You should look up the word in the dictionary.',
		'Тебе следует найти это слово в словаре.',
	],
	[
		'Pass out',
		'терять сознание',
		'He passed out from exhaustion.',
		'Он потерял сознание от усталости.',
	],
	[
		'Put on',
		'надевать',
		'She put on her coat before going outside.',
		'Она надела пальто перед выходом на улицу.',
	],
	[
		'Take off',
		'снимать',
		'Please take off your shoes before entering.',
		'Пожалуйста, снимите обувь перед входом.',
	],
	[
		'Turn on',
		'включать',
		'Can you turn on the lights?',
		'Можешь включить свет?',
	],
	[
		'Turn off',
		'выключать',
		'Don’t forget to turn off the stove.',
		'Не забудь выключить плиту.',
	],
	[
		'Get over',
		'преодолеть',
		'It took her a long time to get over the flu.',
		'Ей потребовалось много времени, чтобы преодолеть грипп.',
	],
	[
		'Hang out',
		'проводить время',
		'We usually hang out at the mall.',
		'Мы обычно проводим время в торговом центре.',
	],
	[
		'Keep up',
		'поддерживать',
		'I can’t keep up with the latest trends.',
		'Я не могу поддерживать последние тренды.',
	],
	[
		'Look out',
		'быть осторожным',
		'Look out for cars when crossing the street.',
		'Будь осторожен с машинами при переходе улицы.',
	],
	[
		'Make up for',
		'компенсировать',
		'She tried to make up for her mistake.',
		'Она пыталась компенсировать свою ошибку.',
	],
	[
		'Put aside',
		'отложить',
		'I put aside some money for my vacation.',
		'Я отложил немного денег на отпуск.',
	],
	[
		'Take on',
		'брать на себя',
		'She decided to take on more responsibilities at work.',
		'Она решила взять на себя больше ответственности на работе.',
	],
	[
		'Break in',
		'врываться',
		'Someone broke in while we were away.',
		'Кто-то вломился, пока нас не было.',
	],
	[
		'Check in',
		'зарегистрироваться',
		'We need to check in at the hotel by 3 PM.',
		'Нам нужно зарегистрироваться в отеле до 15:00.',
	],
	[
		'Check out',
		'проверить',
		'Check out this new restaurant!',
		'Проверь этот новый ресторан!',
	],
	[
		'Come in',
		'входить',
		'Please come in and make yourself comfortable.',
		'Пожалуйста, входите и чувствуйте себя как дома.',
	],
	[
		'Get in',
		'входить',
		'What time did you get in last night?',
		'Во сколько ты пришел прошлой ночью?',
	],
	[
		'Get out',
		'выходить',
		'We need to get out of the house more often.',
		'Нам нужно чаще выходить из дома.',
	],
	[
		'Give back',
		'вернуть',
		'Please give back the book when you’re done.',
		'Пожалуйста, верни книгу, когда закончишь.',
	],
	[
		'Go back',
		'возвращаться',
		'I need to go back to the store for more supplies.',
		'Мне нужно вернуться в магазин за дополнительными принадлежностями.',
	],
	[
		'Keep on',
		'продолжать',
		'Keep on trying until you succeed.',
		'Продолжай пытаться, пока не добьешься успеха.',
	],
	[
		'Look back',
		'оглядываться',
		'Don’t look back; just keep moving forward.',
		'Не оглядывайся; просто продолжай двигаться вперед.',
	],
	[
		'Pass by',
		'проходить мимо',
		'I passed by the bakery on my way home.',
		'Я проходил мимо пекарни по пути домой.',
	],
	[
		'Run out',
		'истощаться',
		'We ran out of time before finishing the project.',
		'У нас закончилось время до завершения проекта.',
	],
	[
		'Stand up',
		'вставать',
		'Please stand up when the teacher enters the room.',
		'Пожалуйста, встаньте, когда учитель войдет в класс.',
	],
	[
		'Take down',
		'снимать',
		'He took down the poster from the wall.',
		'Он снял постер со стены.'
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