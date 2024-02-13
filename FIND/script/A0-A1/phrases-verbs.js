const PHRASES_VERBS = [

	{
		en: 'be afraid of',
		ru: 'бояться чего-то',
		ru_example: 'Он боится собак',
		en_example: "He's afraid of dogs"
	},
	{
		en: 'be absent',
		ru: 'отсутствовать',
		ru_example: 'Я вчера отсутствовал на уроке',
		en_example: 'I was absent from class yesterday'
	},
	{
		en: 'be present',
		ru: 'присутствовать',
		ru_example: 'Я вчера присутствовал на митинге',
		en_example: 'I was present at a meeting yesterday'
	},
	{
		en: 'be ill',
		ru: 'быть больным, болеть',
		ru_example: 'Я болею уже долгое время',
		en_example: 'I have been ill for a long time'
	},
	{
		en: 'be interested in',
		ru: 'быть заинтересованным в чём-то',
		ru_example: 'Я заинтересован в изучении английского языка',
		en_example: 'I am interested in learning English'
	},
	{
		en: 'be late',
		ru: 'опаздывать',
		ru_example: 'Я сильно опоздал на урок',
		en_example: 'I was really late for class'
	},
	{
		en: 'be proud of',
		ru: 'гордиться чем-то/кем-то',
		ru_example: 'Я горжусь своим сыном',
		en_example: 'I am proud of my son'
	},
	{
		en: 'be tired of',
		ru: 'устать от чего-то',
		ru_example: 'Он устал от этой жизни',
		en_example: "He's tired of this life"
	},
	{
		en: 'be keen on + глагол + ing',
		ru: 'увлекаться чем-то',
		ru_example: 'Я увлекаюсь чтением книг',
		en_example: "I'm keen on reading books"
	},
	{
		en: 'be fond of + глагол + ing',
		ru: 'любить, обожать что-то делать',
		ru_example: 'Я обожаю это делать',
		en_example: 'I am fond of doing this'
	},
	{
		en: 'be able to',
		ru: 'быть способным, смочь, суметь (будущее время для can)',
		ru_example: 'Я смогу сделать это завтра',
		en_example: 'I will be able to do it tomorrow'
	},
	{
		en: 'be ready for',
		ru: 'готов к чему-то',
		ru_example: 'Я готов к этому тесту',
		en_example: "I'm ready for this test"
	},
	{
		en: 'be kind to + pronoun',
		ru: 'быть добрым к кому-то',
		ru_example: 'Он был так добр к тебе',
		en_example: 'He was kind to you'
	},
	{
		en: 'go for a walk',
		ru: 'пойти гулять; пойти на прогулку',
		ru_example: 'Он ушёл гулять',
		en_example: 'He went for a walk'
	},
	{
		en: 'go on a picnic',
		ru: 'пойти на пикник',
		ru_example: 'Мы пошли на пикник',
		en_example: 'We went on a picnic'
	},
	{
		en: 'go swimming',
		ru: 'ходить плавать, заниматься плаванием',
		ru_example: 'Я хожу на плавание два раза в неделю',
		en_example: 'I go swimming twice a week.'
	},
	{
		en: 'go skiing',
		ru: 'кататься на лыжах',
		ru_example: 'Я люблю кататься на лыжах',
		en_example: 'I like to go skiing'
	},
	{
		en: 'go jogging',
		ru: 'бегать трусцой',
		ru_example: 'Мне нравится бегать трусцой',
		en_example: 'I like to go jogging'
	},
	{
		en: 'go snowboarding',
		ru: 'кататься на сноуборде',
		ru_example: 'Он любит кататься на сноуборде',
		en_example: 'He likes to go snowboarding'
	},
	{
		en: 'go cycling',
		ru: 'ездить на велосипеде ',
		ru_example: 'Я люблю ездить на велосипеде',
		en_example: 'I like to go bicycling'
	},
	{
		en: 'go to bed',
		ru: 'пойти спать',
		ru_example: 'Мне нужно идти спать',
		en_example: 'I have to go to bed'
	},
	{
		en: 'have a job',
		ru: 'иметь работу, есть работа',
		ru_example: 'У меня есть работа',
		en_example: 'I have a job'
	},
	{
		en: 'have time for',
		ru: 'иметь время для / есть время на',
		ru_example: 'У меня есть время на эти вещи',
		en_example: 'I have time for these things'
	},
	{
		en: 'have fun',
		ru: 'веселиться',
		ru_example: 'Мои друзья веселятся без меня',
		en_example: 'My friends are having fun without me'
	},
	{
		en: 'have breakfast / lunch / dinner',
		ru: 'завтракать / обедать / ужинать',
		ru_example: 'Мы обедаем',
		en_example: 'We are having lunch'
	},
	{
		en: 'have a good time',
		ru: 'хорошо провести время',
		ru_example: 'Я желаю тебе хорошо провести время',
		en_example: 'I wish you have a good time'
	},
	{
		en: 'have a great time',
		ru: 'отлично провести время',
		ru_example: 'Я желаю тебе отлично провести время',
		en_example: 'I wish you have a great time'
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
		en: 'look out of',
		ru: 'выглянуть в/из',
		ru_example: 'Я выглянул из окна',
		en_example: 'I looked out of the window'
	},
	{
		en: 'look old / young',
		ru: 'выглядеть старым/молодым',
		ru_example: 'Он выглядит таким старым',
		en_example: 'He looks so old'
	},

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
		en: 'get married',
		ru: 'пожениться',
		ru_example: 'Давай поженимся',
		en_example: "Let's get married"
	},
	{
		en: 'get divorced',
		ru: 'развестись',
		ru_example: 'Когда они развелись?',
		en_example: 'When did they get divorced?'
	},
	{
		en: 'get tired',
		ru: 'устать',
		ru_example: 'Я могу сменить вас, если вы устали',
		en_example: 'I can take over if you get tired'
	},
	{
		en: 'get to',
		ru: 'добраться до',
		ru_example: 'Я добрался до школы',
		en_example: 'I got to school'
	},
	{
		en: 'get there / here / home / back',
		ru: 'добраться ...[без to]',
		ru_example: 'Я добрался до сюда',
		en_example: 'I got here'
	},

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
		en_example: "That's what matters to me"
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
		en: 'wakes + ponoun + up',
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
		en: 'hit something',
		ru: 'ударить по чему-то',
		ru_example: 'Он ударил по столу',
		en_example: 'He hit the table'
	},
	{
		en: 'win + существительное',
		ru: 'выиграть в чём-то (без предлога)',
		ru_example: 'Я выиграю в этом состязании',
		en_example: "I'm gonna win this contest"
	},
	{
		en: 'prepare for',
		ru: 'готовиться к чему-то',
		ru_example: 'Я каждый день готовлюсь к экзаменам',
		en_example: 'I prepare for exams every day'
	},
	{
		en: 'happen to + pronoun',
		ru: 'случаться/происходить с кем-то',
		ru_example: 'Это случилось с ним недавно',
		en_example: 'It happened to him recently'
	},
	{
		en: 'jump over the + …',
		ru: 'перепрыгнуть через что-то',
		ru_example: 'Он перепрыгнул через реку',
		en_example: 'He jumped across the river'
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
		en: 'pay attention to',
		ru: 'обращать внимание на',
		ru_example: 'Не обращай на это внимания',
		en_example: "Don't pay attention to it"
	},
	{
		en: 'perfectly realise/realize',
		ru: 'прекрасно осознавать',
		ru_example: 'Я прекрасно осознаю важность этих событий',
		en_example: 'I perfectly recognize the importance of these events'
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
		en: 'marry + pronoun',
		ru: 'жениться на ком-то, быть замужем за кого-то',
		ru_example: 'Он женился на мне',
		en_example: 'He married me'
	},
	{
		en: 'married to + pronoun',
		ru: 'быть женатым на ком-то, выйти замуж за кого-то',
		ru_example: 'Я женат на ней',
		en_example: "I'm married to her"
	},
	{
		en: 'think about it / think it over',
		ru: 'обдумать',
		ru_example: 'Мне нужно это обдумать',
		en_example: 'I need to think (about it / it over)'
	},
	{
		en: 'hope for the best',
		ru: 'надеяться на лучшее',
		ru_example: 'Я надеюсь на лучшее, но готовлюсь к худшему',
		en_example: "I'm hoping for the best, but preparing for the worst"
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
	{
		en: 'enter + noun',
		ru: 'войти / поступить куда-то',
		ru_example: 'Я вошёл в здание',
		en_example: 'I entered the building'
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
		en: 'attack + somenone',
		ru: 'атаковать кого-то / напасть на кого-то',
		ru_example: 'Он напал на меня',
		en_example: 'He attacked me'
	},
	{
		en: 'touch + someone / something',
		ru: 'прикоснуться к кому-то / чему-то',
		ru_example: 'Я прикоснулся к ней',
		en_example: 'I touched her'
	},
	{
		en: 'cut into',
		ru: 'разрезать на',
		ru_example: 'Я разрезал это яблоко на 4 кусочка',
		en_example: 'I cut this apple into four slices'
	},
	{
		en: 'let somebody do something',
		ru: 'позволить кому-то сделать что-то',
		ru_example: 'Позволь мне сделать это',
		en_example: 'Let me do it'
	},
	{
		en: 'without + глагол + ing',
		ru: 'не делая что-то',
		ru_example: 'Я буду это делать не глядя',
		en_example: "I'll do it without looking"
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
		en: 'ride a + существительное',
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
		en: 'wait a + time',
		ru: 'подождать какое-то время',
		ru_example: 'Подожди минутку',
		en_example: 'Wait a minute'
	},

]

export default PHRASES_VERBS

