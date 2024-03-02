const PHRASES_VERBS = [
	{
		en: 'be kind to + pronoun',
		ru: 'быть добрым к кому-то',
		ru_example: 'Он был так добр к тебе',
		en_example: 'He was kind to you'
	},
	{
		en: 'go to bed',
		ru: 'пойти спать',
		ru_example: 'Мне нужно идти спать',
		en_example: 'I have to go to bed'
	},
	{
		en: 'have a rest',
		ru: 'отдыхать',
		ru_example: 'Давай передохнём, а потом попробуем ещё раз',
		en_example: "Let's have a rest, and then we'll try again"
	},
	{
		en: 'look after your health',
		ru: 'заботиться о своём здоровье',
		ru_example: 'Ты должен позаботиться о своём здоровье',
		en_example: 'You have to look after your health'
	},
	{
		en: 'look it up in a dictionary',
		ru: 'посмотреть в словаре',
		ru_example: 'Если не знаешь слова, посмотри в словаре',
		en_example: "If you don't know the word, look it up in the dictionary"
	},
	{
		en: 'get rid of',
		ru: 'избавиться от',
		ru_example: 'Мне нужно избавиться от улик',
		en_example: 'I need to get rid of the evidence'
	},
	{
		en: 'get in touch with',
		ru: 'связаться с кем-то',
		ru_example: 'Ему нужно связаться с этими людьми',
		en_example: 'He needs to get in touch with these people'
	},

	{
		en: 'wakes + pronoun + up',
		ru: 'будить кого-то',
		ru_example: 'Не буди меня!',
		en_example: "Don't wake me up!"
	},
	{
		en: 'as much as I can',
		ru: 'столько, сколько я могу',
		ru_example: 'Я буду помогать тебе столько, сколько смогу',
		en_example: "I'll help you as much as I can"
	},
	{
		en: 'verb + with + noun(существительное)',
		ru: 'Сделать что-то с помощью чего-то',
		ru_example: 'Он убил его этим ножом',
		en_example: 'He killed him with this knife'
	},
	{
		en: 'fall ill',
		ru: 'заболеть',
		ru_example: 'Он заболел',
		en_example: 'He fell ill'
	},
	{
		en: 'point out mistakes',
		ru: 'указывать на ошибки',
		ru_example: 'Учитель указал на мои ошибки',
		en_example: 'The teacher pointed out my mistakes'
	},
	{
		en: 'take part',
		ru: 'принимать участие, участвовать',
		ru_example: 'Я не буду участвовать в этом соревновании',
		en_example: "I'm not taking part in this competition"
	},
	{
		en: 'take care off',
		ru: 'заботиться о ком-то',
		ru_example: 'Это человек забоится обо мне',
		en_example: 'This man takes care of me'
	},
	{
		en: 'fill in the gaps',
		ru: 'заполнить пропуски / пробелы',
		ru_example: 'Мне нужно заполнить пробелы в знаниях',
		en_example: 'I need to fill in the gaps in my knowledge'
	},
	{
		en: 'think about it / think it over',
		ru: 'обдумать',
		ru_example: 'Мне нужно это обдумать',
		en_example: 'I need to think about it'
	},
	{
		en: 'hope for the best',
		ru: 'надеяться на лучшее',
		ru_example: 'Я надеюсь на лучшее, но готовлюсь к худшему',
		en_example: "I'm hoping for the best, but preparing for the worst"
	},

	{
		en: 'help + verb',
		ru: 'можно без to',
		ru_example: 'Помоги мне сделать это',
		en_example: 'Help me do this'
	},
	{
		en: 'keep / stay in touch with',
		ru: 'поддерживать связь с кем-то',
		ru_example: 'Мы поддерживаем связь с ними',
		en_example: 'We keep in touch with them'
	},
	{
		en: 'fully support',
		ru: 'полностью поддерживать',
		ru_example: 'Я тебя полностью поддерживаю',
		en_example: 'I fully support you'
	},
	{
		en: 'touch + someone / something',
		ru: 'прикоснуться к кому-то / чему-то',
		ru_example: 'Я прикоснулся к ней',
		en_example: 'I touched her'
	},

	{
		en: 'recommend + pronoun + to + verb',
		ru: 'рекомендовать кому-то что-то сделать',
		ru_example: 'Я рекомендую тебе сделать это',
		en_example: 'I recommend you to do it'
	},
	{
		en: 'recommend + noun + to + pronoun',
		ru: 'рекомедовать кому-то какую-то вещь',
		ru_example: 'Я рекомендую тебе эту книгу',
		en_example: 'I recommend this book to you'
	},
	{
		en: 'wait a + time',
		ru: 'подождать какое-то время',
		ru_example: 'Подожди минутку',
		en_example: 'Wait a minute'
	},
]

const MAKE_DO = [
	{
		en: 'make a choice',
		ru: 'сделать выбор',
		ru_example: 'Ты должен сделать выбор',
		en_example: 'You have to make a choice'
	},
	{
		en: 'make good progress',
		ru: 'добиться хорошего прогресса',
		ru_example: 'Я хочу добиться хорошего прогресса',
		en_example: 'I want to make good progress'
	},
	{
		en: 'make somebody do something',
		ru: 'заставлять кого-то что-то сделать',
		ru_example: 'Он заставил его съесть жука',
		en_example: 'He made him eat a bug'
	},
	{
		en: 'make money',
		ru: 'зарабатывать деньги',
		ru_example: 'Моя мечта - заработать много денег',
		en_example: 'My dream is to make a lot of money'
	},
	{
		en: 'make a discovery',
		ru: 'сделать открытие',
		ru_example: 'Этот учёный сделал открытие',
		en_example: 'This scientist made a discovery'
	},
	{
		en: 'make an order',
		ru: 'сделать заказ',
		ru_example: 'Нам нужно сделать заказ',
		en_example: 'We need to make an order'
	},

	{
		en: 'do + business',
		ru: 'заниматься бизнесом',
		ru_example: 'Он занимается бизнесом',
		en_example: 'He does business'
	},
	{
		en: 'do / play sport',
		ru: 'заниматься спортом',
		ru_example: 'Я занимаюсь спортом',
		en_example: 'I do / play sport'
	},
	{
		en: 'do these physical exercises',
		ru: 'делать эти физические упражнения',
		ru_example: 'Тебе нужно делать эти физические упражнения',
		en_example: 'You need to do these physical exercises'
	},
	{
		en: 'do the shopping',
		ru: 'делать покупки',
		ru_example: 'Я люблю делать покупки',
		en_example: 'I like doing the shopping'
	},
	{
		en: 'do my best',
		ru: 'делаю все, что в моих силах / делать всё возможное',
		ru_example: 'Я буду делать всё что в моих силах',
		en_example: 'I will do my best'
	},
]

const VERBS_ING = [
	{
		en: 'be keen on + doing',
		ru: 'увлекаться чем-то',
		ru_example: 'Я увлекаюсь чтением книг',
		en_example: "I'm keen on reading books"
	},
	{
		en: 'be fond of + doing',
		ru: 'любить, обожать что-то делать',
		ru_example: 'Я обожаю это делать',
		en_example: 'I am fond of doing this'
	},
	{
		en: 'without + doing',
		ru: 'не делая что-то',
		ru_example: 'Я буду это делать не глядя',
		en_example: "I'll do it without looking"
	},
	{
		en: 'recommend + doing something',
		ru: 'рекомендовать что-то сделать',
		ru_example: 'Я рекомендую сделать это',
		en_example: 'I recommend doing this'
	},
	{
		en: 'like/love/continue + doing / to do',
		ru: 'после них может быть как глагол с ing, так и to',
		ru_example: 'Я продолжу заниматься',
		en_example: `I'll continue practicing`
	},

	{
		en: 'stop/enjoy/hate/finish/start + doing',
		ru: 'после них глагол + ing',
		ru_example: 'Я ненавижу танцевать',
		en_example: 'I hate dancing'
	},
]

const VERBS_NO_PREPOSITIONS = [
	{
		en: 'hit something',
		ru: 'ударить по чему-то',
		ru_example: 'Он ударил по столу',
		en_example: 'He hit the table'
	},
	{
		en: 'win + noun',
		ru: 'выиграть в чём-то',
		ru_example: 'Я выиграю в этом состязании',
		en_example: "I'm gonna win this contest"
	},
	{
		en: 'marry + pronoun',
		ru: 'жениться на ком-то, быть замужем за кого-то',
		ru_example: 'Он женился на мне',
		en_example: 'He married me'
	},
	{
		en: 'enter + noun',
		ru: 'войти / поступить куда-то',
		ru_example: 'Я вошёл в здание',
		en_example: 'I entered the building'
	},
	{
		en: 'attack + somenone',
		ru: 'атаковать кого-то / напасть на кого-то',
		ru_example: 'Он напал на меня',
		en_example: 'He attacked me'
	},
	{
		en: 'ride a + noun',
		ru: 'ездить на чём-то',
		ru_example: 'Я умею ездить на велосипеде',
		en_example: 'I can ride a bike'
	},
	{
		en: 'join + pronoun',
		ru: 'присоединяться к кому-то',
		ru_example: 'Он присоединился к нам',
		en_example: 'He joined us'
	},
	{
		en: 'contact + pronoun',
		ru: 'связаться с кем-то',
		ru_example: 'Свяжись со мной завтра',
		en_example: 'Contact me tomorrow'
	},
	{
		en: 'meet + pronoun',
		ru: 'встретиться с кем-то',
		ru_example: 'Давай завтра встретимся с ней',
		en_example: "Let's meet her tomorrow"
	},
]

const OTHER_PREPOSITIONS = [
	{
		en: 'apologise for',
		ru: 'извиняться за',
		ru_example: 'Я извиняюсь за своё плохое поведение',
		en_example: 'I apologize for my bad behavior'
	},
	{
		en: 'suffer from',
		ru: 'страдать от',
		ru_example: 'Я страдаю от алкоголизма',
		en_example: 'I suffer from alcoholism'
	},
	{
		en: 'depend on',
		ru: 'зависеть от',
		ru_example: 'Он зависит от меня',
		en_example: 'He depends on me'
	},
	{
		en: 'care about',
		ru: 'волноваться / заботиться об',
		ru_example: 'Меня это не волнует',
		en_example: 'I do not care about it'
	},
	{
		en: 'laugh at',
		ru: 'смеяться над чем-то/кем-то',
		ru_example: 'Они смеялись надо мной',
		en_example: 'They laughed at me'
	},
	{
		en: 'smile at',
		ru: 'улыбнуться кому-то',
		ru_example: 'Она мне улыбнулась',
		en_example: 'She smiled at me'
	},
	{
		en: 'live on',
		ru: 'жить на что-то',
		ru_example: 'Как ты будешь жить на эти деньги?',
		en_example: 'How will you live on that money?'
	},
	{
		en: 'put on',
		ru: 'положить куда-то',
		ru_example: 'Он положил это на стол',
		en_example: 'He put it on the table'
	},
	{
		en: 'move into',
		ru: 'переехать куда-то',
		ru_example: 'Когда вы въезжаете в свою квартиру, вы подписываете договор аренды',
		en_example: 'When you move into your apartment, you sign a lease'
	},
	{
		en: 'look at',
		ru: 'смотреть на',
		ru_example: 'Ты посмотришь на это?',
		en_example: 'Will you look at it?'
	},
	{
		en: 'prepare for',
		ru: 'готовиться к чему-то',
		ru_example: 'Я каждый день готовлюсь к экзаменам',
		en_example: 'I prepare for exams every day'
	},
	{
		en: 'happy about',
		ru: 'радоваться чему-то',
		ru_example: 'Я рад по этому поводу',
		en_example: "I'm happy about that"
	},
	{
		en: 'learn from',
		ru: 'учиться на чём-то',
		ru_example: 'Я учусь на своих ошибках',
		en_example: 'I learn from my mistakes'
	},
	{
		en: 'arrive in / arrive at',
		ru: 'прибывать в какую-то страну, город / прибывать в какое-то место',
		ru_example: '1)Он прибыл в город <br> 2)Он прибыл в это здание',
		en_example: '1)He arrived in town <br> 2)He arrived at this building'
	},
	{
		en: 'travel + to/around',
		ru: 'путешествовать по странам, городам / городу, стране, миру',
		ru_example: '1)Я путешествовал по странам <br> 2)Я путешествовал по миру',
		en_example: "1)I've traveled to countries <br> 2)I've traveled around the world"
	},
	{
		en: 'talk/speak + to/with + pronoun',
		ru: 'говорить с кем-то',
		ru_example: 'Я говорю с моим другом',
		en_example: "I'm speaking with my friend"
	},
	{
		en: 'cut into',
		ru: 'разрезать на',
		ru_example: 'Я разрезал это яблоко на 4 кусочка',
		en_example: 'I cut this apple into four slices'
	},
]

const VERBS_TO = [
	{
		en: 'lead to',
		ru: 'привести к',
		ru_example: 'Это приведёт нас к успеху',
		en_example: 'It will lead us to success'
	},
	{
		en: 'matter to',
		ru: 'иметь значение для кого-то',
		ru_example: 'Для меня это имеет значение',
		en_example: "It matters to me"
	},
	{
		en: 'lie to',
		ru: 'врать кому-то',
		ru_example: 'Хватит нам врать',
		en_example: 'Stop lying to us'
	},
	{
		en: 'invite to',
		ru: 'приглашать куда-то / если приглашать кого-то, то без to',
		ru_example: 'Меня пригласили на вечеринку',
		en_example: "I've been invited to a party"
	},
	{
		en: 'react to',
		ru: 'реагировать на что-то',
		ru_example: 'Не реагируй на это',
		en_example: "Don't react to it"
	},
	{
		en: 'adapt to',
		ru: 'адаптировать к чему-то',
		ru_example: 'Он адаптируется к этим условиям',
		en_example: "He's adapting to these conditions"
	},
	{
		en: 'complain to',
		ru: 'жаловаться кому-то',
		ru_example: 'Не жалуйся ему',
		en_example: "Don't complain to him"
	},
	{
		en: 'belong to',
		ru: 'принадлежать кому-то',
		ru_example: 'Эта вещь принадлежит мне',
		en_example: 'This thing belongs to me'
	},
	{
		en: 'happen to + pronoun',
		ru: 'случаться/происходить с кем-то',
		ru_example: 'Это случилось с ним недавно',
		en_example: 'It happened to him recently'
	},
	{
		en: 'pay attention to',
		ru: 'обращать внимание на',
		ru_example: 'Не обращай на это внимания',
		en_example: "Don't pay attention to it"
	},
	{
		en: 'married to + pronoun',
		ru: 'быть женатым на ком-то, выйти замуж за кого-то',
		ru_example: 'Я женат на ней',
		en_example: "I'm married to her"
	},
	{
		en: 'fall to',
		ru: 'падать на что-то',
		ru_example: 'Он упал на землю',
		en_example: 'He fell to the ground'
	},
	{
		en: 'point at/to',
		ru: 'указывать на',
		ru_example: 'Он указал на этот предмет',
		en_example: 'He pointed at/to this object'
	},
]

const PHRASES_VERBS_ALL = PHRASES_VERBS.concat(MAKE_DO.concat(VERBS_ING.concat(VERBS_NO_PREPOSITIONS.concat(OTHER_PREPOSITIONS.concat(VERBS_TO)))))

export default PHRASES_VERBS_ALL