const PHRASES_VERBS = [
	[
		{ en: 'be afraid of', ru: 'бояться чего-то' },
		{ en: 'be away', ru: 'отсутствовать, быть в отъезде' },
		{ en: 'be absent', ru: 'отсутствовать' },
		{ en: 'be present', ru: 'присутствовать' },
		{ en: 'be out', ru: 'быть не дома' },
		{ en: 'be ill', ru: 'быть больным, болеть(чаще употребляется без указания конкретной болезни)' },
		{
			en: 'be interested in', ru: 'быть заинтересованным в чём-то'
		},
		{ en: 'be late', ru: 'опаздывать' },
		{ en: 'be proud of', ru: 'гордиться чем-то' },
		{ en: 'be tired of', ru: 'устать от чего-то' },
		{ en: 'be keen on + глагол + ing', ru: 'увлекаться чем-то' },
		{
			en: 'be fond of + глагол + ing', ru: 'любить, обожать что-то делать'
		},
		{ en: 'be able to', ru: 'быть способным, смочь, суметь (будущее время для can)' },
		{ en: 'be tired', ru: 'уставший, устать' },
		{ en: 'be ready for/to', ru: 'готов к чему-то/готов для чего-то' },
		{ en: 'be kind to + pronoun', ru: 'быть добрым к кому-то' },
	],
	[
		{ en: 'go for a walk', ru: 'пойти гулять; пойти на прогулку' },
		{ en: 'go on a picnic', ru: 'пойти на пикник' },
		{ en: 'go swimming', ru: 'ходить плавать, ходить на плавание, заниматься плаванием' },
		{ en: 'go skiing', ru: 'кататься на лыжах' },
		{ en: 'go jogging', ru: 'бегать трусцой' },
		{ en: 'go snowboarding', ru: 'кататься на сноуборде' },
		{ en: 'go cycling', ru: 'ездить на велосипеде ' },
		{ en: 'go up', ru: 'подниматься' },
		{ en: 'go down', ru: 'снижаться' },
		{ en: 'go to bed', ru: 'пойти спать' },
	],
	[
		{ en: 'have a job', ru: 'иметь работу, есть работа' },
		{ en: 'have time for', ru: 'иметь время для / есть время на' },
		{ en: 'have fun', ru: 'веселиться' },
		{ en: 'have breakfast / lunch / dinner', ru: 'завтракать / обедать / ужинать' },
		{ en: 'have a rest', ru: 'отдыхать' },
		{ en: 'have a good time', ru: 'хорошо провести время' },
		{ en: 'have a great time', ru: 'отлично провести время' },
	],
	[
		{ en: 'look for', ru: 'искать что-то' },
		{ en: 'look at', ru: 'смотреть на' },
		{ en: 'look after', ru: 'следить, присматривать' },
		{ en: 'look after your health', ru: 'заботиться о своём здоровье' },
		{ en: 'look it up in a dictionary', ru: 'посмотреть в словаре' },
		{ en: 'look out of', ru: 'выглянуть в/из' },
		{ en: `look after`, ru: 'заботиться о ком-то' },
		{ en: 'look old / young', ru: 'выглядеть старым/молодым' },
	],
	[
		{ en: `make a choice`, ru: 'сделать выбор' },
		{ en: `make good progress`, ru: 'добиться хорошего прогресса' },
		{ en: 'make up', ru: 'составлять' },
		{ en: 'make somebody do something', ru: 'заставлять кого-то что-то сделать' },
		{ en: 'make money', ru: 'зарабатывать деньги' },
		{ en: 'make a discovery', ru: 'сделать открытие' },
		{ en: 'make an order', ru: 'сделать заказ' },
	],
	[
		{ en: 'do + business', ru: 'заниматься бизнесом' },
		{ en: 'do sport / play', ru: 'заниматься спортом' },
		{ en: 'do these physical exercises', ru: 'делать эти физические упражнения' },
		{ en: 'do the shopping', ru: 'делать покупки' },
		{ en: 'do nothing', ru: 'ничего не делать' },
		{ en: 'do my best', ru: 'делаю все, что в моих силах / делать всё возможное' },
	],
	[
		{ en: 'get rid of', ru: 'избавиться от' },
		{ en: 'get in touch with', ru: 'связаться с кем-то' },
		{ en: 'get divorced', ru: 'развестись' },
		{ en: 'get up', ru: 'вставать(после сна)' },
		{ en: 'get tired', ru: 'уставший, устать (во втором случае с to be)' },
		{ en: 'get married', ru: 'пожениться' },
		{ en: 'get to', ru: 'добраться до' },
		{ en: 'get there / here / home / back', ru: 'исключения [без to]' },
	],


	[
		{ en: 'beat up', ru: 'избивать' },
		{ en: 'take part', ru: 'принимать участие, участвовать' },
		{ en: `take care off`, ru: 'заботиться о ком-то' },
		{ en: 'turn back/left/right', ru: 'повернуть назад / налево / направо' },
		{ en: 'turn on/off', ru: 'включить / выключить' },
		{ en: 'throw away', ru: 'выбрасывать' },
		{ en: 'fill in', ru: 'заполнить' },
		{ en: `fill in the gaps`, ru: 'заполнить пропуски / пробелы' },
		{ en: 'grow up', ru: 'вырасти где-то [про человека]' },
		{ en: 'run away', ru: 'убежать' },
	],

	[
		{ en: 'complain about', ru: 'жаловаться на что-то' },
		{ en: 'complain to', ru: 'жаловаться кому-то' },
		{ en: 'count on', ru: 'рассчитывать на' },
		{ en: 'fall ill', ru: 'заболеть' },
		{ en: 'fall from', ru: 'падать откуда-то' },
		{ en: 'point out', ru: 'заметить' },
		{ en: 'point out mistakes', ru: 'указывать на ошибки' },
		{ en: 'point at/to', ru: 'указывать на ' },
		{ en: 'break down', ru: 'сломаться' },
		{ en: 'sit down', ru: 'присесть' },
	],

	[
		{ en: 'fly away', ru: 'улетать' },
		{ en: 'fly back', ru: 'лететь обратно' },
		{ en: 'fly to', ru: 'летать куда-то' },
		{ en: 'fly abroad / home / there / here', ru: 'исключения [без to]' },
		{ en: 'stand up', ru: 'вставать(из положения сидя, лёжа)' },
		{ en: 'hurry up', ru: 'торопиться' },
		{ en: 'wake up', ru: 'просыпаться' },
		{ en: 'hit something', ru: 'ударить по чему-то' },
		{ en: 'win + существительное', ru: 'выиграть в чём-то (без предлога)' },
		{ en: 'cost a lot', ru: 'стоит много/дорого' },
	],


	[
		{ en: 'talk on the phone', ru: 'говорить по телефону' },
		{ en: 'keep this secret', ru: 'сохранить этот секрет' },
		{ en: 'support + someone', ru: 'поддерживать кого-то' },
		{ en: 'fully understand', ru: 'полностью понимать' },
		{ en: 'as much as I can', ru: 'столько, сколько я могу' },
		{
			en: "personal pronoun + need / don't / doesn't + need",
			ru: 'кому-то нужно / не нужно'
		},
		{ en: 'use the internet', ru: 'пользоваться интернетом' },
		{ en: 'find a job', ru: 'найти работу' },
		{ en: 'change this job', ru: 'сменить эту работу' },
		{
			en: 'work as a/an',
			ru: 'работать кем-то (обязательно с артиклем a/an)'
		}
	],
	[
		{ en: 'hope/think + so', ru: 'надеяться/думать' },
		{ en: 'swim in the + существительное', ru: 'плавать в чём-то' },
		{
			en: 'study at / study in',
			ru: 'учиться в каком-то заведении / в других случаях'
		},
		{ en: 'come back / be back / return / get back', ru: 'вернуться' },
		{
			en: 'finish work /finish + pronoun + work',
			ru: 'закончить работу / закончить чью-то работу'
		},
		{
			en: 'answer + существительное',
			ru: 'ответить на что-то(без предлога)'
		},
		{ en: 'happen to + pronoun', ru: 'случаться/происходить с кем-то' },
		{ en: 'jump over the + …', ru: 'перепрыгнуть через что-то' },
		{ en: 'happy about', ru: 'радоваться чему-то' },
		{ en: 'learn from', ru: 'учиться на чём-то' }
	],
	[
		{ en: 'pay attention to', ru: 'обращать внимание на' },
		{ en: 'perfectly realise/realize', ru: 'прекрасно осознавать' },
		{
			en: 'arrive in /  arrive at',
			ru: 'прибывать в какую-то страну, город / прибывать в какое-то место'
		},
		{ en: 'arrive home', ru: 'прибывать домой' },
		{ en: 'prepare for', ru: 'готовиться чему-то' },
		{
			en: 'go there / here / home / back / abroad / shopping',
			ru: 'исключения [без to]'
		},
		{ en: 'wait for + pronoun', ru: 'ждать (кого-то/чего-то)' },
		{ en: 'come to', ru: 'прийти в / прийти к кому-то' },
		{
			en: 'come there / here / home / back / abroad / shopping',
			ru: 'исключения'
		},
		{
			en: 'go/come/get + to the + noun',
			ru: 'ходить в / прийти в / добраться до'
		}
	],
	[
		{ en: 'move to', ru: 'переехать в какую-то страну / город' },
		{ en: 'move into', ru: 'переехать куда-то' },
		{
			en: 'move abroad / home / there / here',
			ru: 'исключения [без to]'
		},
		{
			en: 'invite to',
			ru: 'приглашать куда-то / если приглашать кого-то, то без to'
		},
		{ en: 'listen to', ru: 'слушать что-то или кого-то' },
		{
			en: 'it seems to + личное местоимение',
			ru: 'кому-то кажется; это кажется кому-то'
		},
		{
			en: 'stay at home',
			ru: 'сидеть дома / оставаться дома (иногда употребляется без at: stay home)'
		},
		{ en: 'laugh at', ru: 'смеяться над чем-то/кем-то' },
		{ en: 'smile at', ru: 'улыбнуться кому-то' },
		{ en: 'live on', ru: 'жить на что-то' }
	],
	[
		{ en: 'put on', ru: 'положить куда-то' },
		{ en: 'work on', ru: 'работать над чем-то ' },
		{ en: 'come from', ru: 'родом из' },
		{ en: 'belong to', ru: 'принадлежать кому-то' },
		{ en: 'sound great', ru: 'звучит великолепно' },
		{ en: 'perfectly understand', ru: 'прекрасно понимать' },
		{
			en: 'speak English fluently',
			ru: 'свободно говорить по-английски(любой другой язык тоже подходит)'
		},
		{ en: 'apologise for', ru: 'извиняться за' },
		{
			en: 'travel + to/around',
			ru: 'путешествовать по странам, городам / городу, стране, миру'
		},
		{
			en: 'speak a foreign language',
			ru: 'говорить на иностранном языке'
		}
	],
	[
		{ en: 'adapt to', ru: 'адаптировать к чему-то' },
		{ en: 'suffer from', ru: 'страдать от' },
		{ en: 'waste time', ru: 'тратить время впустую' },
		{
			en: 'spend + adverb + noun + on',
			ru: ' тратить чьё-то время на что-то'
		},
		{ en: 'depend on', ru: 'зависеть от' },
		{
			en: 'marry + pronoun',
			ru: 'жениться на ком-то, быть замужем за кого-то'
		},
		{
			en: 'married  to + pronoun',
			ru: 'быть женатым на ком-то, выйти замуж за кого-то'
		},
		{ en: 'married', ru: 'быть женатым / замужем' },
		{ en: 'talk/speak + to/with + pronoun', ru: 'говорить с кем-то' },
		{
			en: 'verb + with + noun(существительное)',
			ru: 'Сделать что-то с помощью чего-то'
		}
	],
	[
		{ en: 'call / ring + pronoun + back', ru: 'перезвонить кому-то' },
		{ en: 'lie down', ru: 'прилечь' },
		{ en: 'reach the next level', ru: 'достичь следующего уровня' },
		{
			en: 'leave home',
			ru: 'уходить из дома (предлог не нужен, также и для других мест)'
		},
		{ en: 'talk on the phone', ru: 'разговаривать по телефону' },
		{ en: 'care about', ru: 'волноваться / заботиться о чём-то' },
		{ en: 'think about it / think it over', ru: 'обдумать' },
		{ en: 'divide into', ru: 'делить на' },
		{ en: 'hope for the best', ru: 'надеяться на лучшее' },
		{ en: 'wakes + ponoun + up', ru: 'будить кого-то' }
	],
	[
		{ en: 'keep / stay in touch with Поддерживать связь с кем-то' },
		{ en: 'stay in', ru: 'оставаться дома' },
		{ en: 'react to', ru: 'реагировать на что-то' },
		{ en: 'contact + pronoun', ru: 'связаться с кем-то' },
		{ en: 'meet + pronoun', ru: 'встретиться с кем-то' },
		{ en: 'lead to', ru: 'привести к' },
		{ en: 'manage to do something', ru: 'суметь что-то сделать' },
		{ en: 'enter + noun', ru: 'войти / поступить куда-то' },
		{ en: 'help + verb', ru: 'можно без to' },
		{ en: 'matter to', ru: 'иметь значение для кого-то' }
	],
	[
		{ en: 'lie to', ru: 'врать кому-то' },
		{ en: 'fully support', ru: 'полностью поддерживать' },
		{ en: 'return to', ru: 'вернуться в' },
		{
			en: 'attack + somenone',
			ru: 'атаковать кого-то / напасть на кого-то'
		},
		{
			en: 'touch + someone / something',
			ru: 'прикоснуться к кому-то / чему-то'
		},
		{ en: 'place an order', ru: 'разместить заказ' },
		{ en: 'cut into', ru: 'разрезать на' },
		{
			en: 'let somebody do something',
			ru: 'позволить кому-то сделать что-то'
		},
		{ en: 'swam across the river', ru: 'переплыть реку' },
		{ en: 'without + глагол + ing', ru: 'не делая что-то' }
	],
	[
		{ en: 'recommend + pronoun + to + verb', ru: 'рекомендовать кому-то что-то сделать' },
		{ en: 'recommend + noun + to + pronoun', ru: 'рекомедовать кому-то какую-то вещь' },
		{ en: 'personal noune + like', ru: 'кому-то нравится' },
		{ en: 'speak + название языка', ru: ' говорить на языках ' },
		{ en: 'write/read + in + language', ru: 'писать или читать на языках' },
		{ en: 'think so', ru: 'думать так ' },
		{ en: 'talk about', ru: 'говорить о/об' },
		{ en: 'it costs less', ru: 'это стоит дешевле(less вместо cheap)' },
		{ en: 'it costs more', ru: 'это стоит дороже(more вместо expensive)' },
		{ en: 'follow + pronoun', ru: 'следовать за кем-то' },
	],
	[
		{ en: 'ride a + существительное', ru: 'ездить на чём-то' },
		{ en: 'join + pronoun', ru: 'присоединяться к кому-то' },
		{ en: 'graduate from', ru: 'окончить высшее учебное заведение' },
		{ en: 'wait a + time', ru: 'подождать какое-то время' },
		{ en: 'put it in that place', ru: 'положить это на то место' },
	],
]

let counter = 0
for (let key in PHRASES_VERBS) {
	counter += PHRASES_VERBS[key].length
}

console.log(counter)

export default PHRASES_VERBS

