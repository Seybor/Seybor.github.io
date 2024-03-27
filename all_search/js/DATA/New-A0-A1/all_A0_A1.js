const IR = [
	{ en: 'be - was/were - been', tr: '[biː] - [wɒz]/[wɜː] - [biːn]', ru: 'быть' },
	{ en: 'beat - beat - beaten', tr: '[biːt] - [biːt] - [ˈbiːtᵊn]', ru: 'бить' },
	{ en: 'become - became - become', tr: '[bɪˈkʌm] - [bɪˈkeɪm] - [bɪˈkʌm]', ru: 'становиться' },
	{ en: 'begin - began - begun', tr: '[bɪˈɡɪn] - [bɪˈɡæn] - [bɪˈɡʌn]', ru: 'начинать' },
	{ en: 'blow - blew - blown', tr: '[bləʊ] - [bluː] - [bləʊn]', ru: 'дуть' },
	{ en: 'break* - broke - broken', tr: '[breɪk] - [brəʊk] - [ˈbrəʊkᵊn]', ru: 'ломать' },
	{ en: 'bring - brought - brought', tr: '[brɪŋ] - [brɔːt] - [brɔːt]', ru: 'приносить' },
	{ en: 'build - built - built', tr: '[bɪld] - [bɪlt] - [bɪlt]', ru: 'строить' },
	{ en: 'buy - bought - bought', tr: '[baɪ] - [bɔːt] - [bɔːt]', ru: 'купить' },
	{ en: 'catch - caught - caught', tr: '[kæʧ] - [kɔːt] - [kɔːt]', ru: 'поймать' },
	{ en: 'choose - chose - chosen', tr: '[ʧuːz] - [ʧəʊz] - [ˈʧəʊzᵊn]', ru: 'выбирать' },
	{ en: 'come - came - come', tr: '[kʌm] - [keɪm] - [kʌm]', ru: 'приходить' },
	{ en: 'cost - cost - cost', tr: '[kɒst] - [kɒst] - [kɒst]', ru: 'стоить' },
	{ en: 'cut - cut - cut', tr: '[kʌt] - [kʌt] - [kʌt]', ru: 'резать' },
	{ en: 'deal* - dealt - dealt', tr: '[diːl]* - [dɛlt] - [dɛlt]', ru: 'иметь дело' },
	{ en: 'do/does - did - done', tr: '[duː] - [dɪd] - [dʌn]', ru: 'делать [в значении выполнять]' },
	{ en: 'draw - drew - drawn', tr: '[drɔː] - [druː] - [drɔːn]', ru: 'рисовать' },
	{ en: 'drink - drank - drunk', tr: '[drɪŋk] - [dræŋk] - [drʌŋk]', ru: 'пить' },
	{ en: 'drive - drove - driven', tr: '[draɪv] - [drəʊv] - [ˈdrɪvᵊn]', ru: 'водить' },
	{ en: 'eat - ate - eaten', tr: '[iːt] - [eɪt] - [ˈiːtᵊn]', ru: 'есть, кушать' },
	{ en: 'fall - fell - fallen', tr: '[fɔːl] - [fel] - [ˈfɔːlən]', ru: 'упасть' },
	{ en: 'feed* - fed - fed', tr: '[fiːd]* - [fɛd] - [fɛd]', ru: 'кормить' },
	{ en: 'feel - felt - felt', tr: '[fiːl] - [felt] - [felt]', ru: 'чувствовать' },
	{ en: 'fight* - fought - fought', tr: '[faɪt]* - [fɔːt] - [fɔːt]', ru: 'бороться' },
	{ en: 'find - found - found', tr: '[faɪnd] - [faʊnd] - [faʊnd]', ru: 'находить' },
	{
		en: 'fit - fitted/fit - fitted/fit',
		tr: '[fɪt] - [ˈfɪtɪd]/[fɪt] - [ˈfɪtɪd]/[fɪt]',
		ru: 'подходить [по размеру]',
	},
	{ en: 'fly* - flew - flown', tr: '[flaɪ] - [fluː] - [fləʊn]', ru: 'летать' },
	{ en: 'forget - forgot - forgotten', tr: '[fəˈɡet] - [fəˈɡɒt] - [fəˈɡɒtᵊn]', ru: 'забыть' },
	{ en: 'forgive - forgave - forgiven', tr: '[fəˈɡɪv] - [fəˈɡeɪv] - [fəˈɡɪvᵊn]', ru: 'прощать' },
	{ en: 'get - got - got', tr: '[ɡet] - [ɡɒt] - [ɡɒt]', ru: 'получать; добираться' },
	{ en: 'give - gave - given', tr: '[ɡɪv] - [ɡeɪv] - [ˈɡɪvᵊn]', ru: 'дать' },
	{ en: 'go - went - gone', tr: '[ɡəʊ] - [went] - [ɡɒn]', ru: 'идти, ехать' },
	{ en: 'grow - grew - grown', tr: '[ɡrəʊ] - [ɡruː] - [ɡrəʊn]', ru: 'расти' },
	{ en: 'hang - hung - hung', tr: '[hæŋ] - [hʌŋ] - [hʌŋ]', ru: 'висеть, вешать' },
	{ en: 'have/has - had - had', tr: '[hæv]/[hæz] - [hæd] - [hæd]', ru: 'иметь' },
	{ en: 'hear - heard - heard', tr: '[hɪə] - [hɜːd] - [hɜːd]', ru: 'слышать' },
	{ en: 'hide - hid - hidden', tr: '[haɪd] - [hɪd] - [ˈhɪdᵊn]', ru: 'прятать' },
	{ en: 'hit - hit - hit', tr: '[hɪt] - [hɪt] - [hɪt]', ru: 'ударить ' },
	{ en: 'hurt* - hurt - hurt', tr: '[hɜːt]* - [hɜːt] - [hɜːt]', ru: 'ранить, повредит' },
	{ en: 'keep - kept - kept', tr: '[kiːp] - [kept] - [kept]', ru: 'держать, хранить' },
	{ en: 'know - knew - known', tr: '[nəʊ] - [njuː] - [nəʊn]', ru: 'знать' },
	{ en: 'lead - led - led', tr: '[liːd] - [lɛd] - [lɛd]', ru: 'вести, возглавлять, лидировать' },
	{ en: 'lie - lay - lain', tr: '[laɪ] - [leɪ] - [leɪn]', ru: 'лежать' },
	{
		en: 'learn - learnt/learned - learnt/learned',
		tr: '[lɜːn] - [lɜːnt]/[lɜːnt] - [lɜːnt]/[lɜːnt]',
		ru: 'учить',
	},
	{
		en: 'leave - left* - left',
		tr: '[liːv] - [left] - [left]',
		ru: 'уходить [с], выходить [из], покидать; уезжать [из]; оставлять; ',
	},
	{ en: 'lend - lent - lent', tr: '[lend] - [lent] - [lent]', ru: 'одалживать, давать взаймы' },
	{ en: 'let - let - let', tr: '[lɛt] - [lɛt] - [lɛt]', ru: 'позволять' },
	{ en: 'lose - lost - lost', tr: '[luːz] - [lɒst] - [lɒst]', ru: 'терять, проигрывать' },
	{
		en: 'make - made - made',
		tr: '[meɪk] - [meɪd] - [meɪd]',
		ru: 'делать [в значении создавать что-то заново]',
	},
	{ en: 'mean* - meant - meant', tr: '[miːn] - [ment] - [ment]', ru: 'означать, иметь в виду' },
	{ en: 'meet - met - met', tr: '[miːt] - [met] - [met]', ru: 'встречать, встречаться' },
	{ en: 'overcome - overcame - overcome', tr: '[ˌəʊvəˈkʌm] - [ˌəʊvəˈkeɪm] - [ˌəʊvəˈkʌm]', ru: 'преодолеть' },
	{ en: 'pay - paid - paid', tr: '[peɪ] - [peɪd] - [peɪd]', ru: 'платить' },
	{ en: 'put - put - put', tr: '[pʊt] - [pʊt] - [pʊt]', ru: 'положить' },
	{ en: 'read - read - read', tr: '[riːd] - [red] - [red]', ru: 'читать' },
	{ en: 'ride - rode - ridden', tr: '[raɪd] - [rəʊd] - [ˈrɪdᵊn]', ru: 'ездить' },
	{ en: 'ring* - rang - rung', tr: '[rɪŋ]* - [ræŋ] - [rʌŋ]', ru: 'звонить' },
	{ en: 'rise* - rose - risen', tr: '[raɪz]* - [rəʊz] - [ˈrɪzᵊn]', ru: 'поднимать' },
	{ en: 'run - ran - run', tr: '[rʌn] - [ræn] - [rʌn]', ru: 'бежать' },
	{ en: 'say - said - said', tr: '[seɪ] - [sed] - [sed]', ru: 'сказать' },
	{ en: 'see - saw - seen', tr: '[siː] - [sɔː] - [siːn]', ru: 'видеть' },
	{ en: 'sell - sold - sold', tr: '[sel] - [səʊld] - [səʊld]', ru: 'продать' },
	{ en: 'send - sent - sent', tr: '[send] - [sent] - [sent]', ru: 'присылать, посылать, отправлять' },
	{ en: 'set* - set - set', tr: '[sɛt]* - [sɛt] - [sɛt]', ru: 'устанавливать' },
	{ en: 'show* - showed - shown/showed', tr: '[ʃəʊ] - [ʃəʊd] - [ʃəʊn]/[ʃəʊd]', ru: 'показывать' },
	{ en: 'sing - sang - sung', tr: '[sɪŋ] - [sæŋ] - [sʌŋ]', ru: 'петь' },
	{ en: 'sit - sat - sat', tr: '[sɪt] - [sæt] - [sæt]', ru: 'сидеть [+ down если слово само по себе]' },
	{ en: 'sleep - slept - slept', tr: '[sliːp] - [slept] - [slept]', ru: 'спать' },
	{ en: 'speak - spoke - spoken', tr: '[spiːk] - [spəʊk] - [ˈspəʊkᵊn]', ru: 'говорить' },
	{ en: 'spend - spent - spent', tr: '[spend] - [spent] - [spent]', ru: 'проводить [время], тратить [деньги]' },
	{ en: 'stand - stood - stood', tr: '[stænd] - [stʊd] - [stʊd]', ru: 'встать' },
	{ en: 'steal* - stole - stolen', tr: '[stiːl]* - [stəʊl] - [ˈstəʊlᵊn]', ru: 'украсть' },
	{ en: 'swim - swam - swum', tr: '[swɪm] - [swæm] - [swʌm]', ru: 'плавать' },
	{ en: 'take - took - taken', tr: '[teɪk] - [tʊk] - [ˈteɪkᵊn]', ru: 'брать, принимать' },
	{ en: 'teach - taught - taught', tr: '[tiːʧ] - [tɔːt] - [tɔːt]', ru: 'преподавать' },
	{ en: 'tell - told - told', tr: '[tel] - [təʊld] - [təʊld]', ru: 'рассказывать' },
	{ en: 'think - thought - thought', tr: '[θɪŋk] - [θɔːt] - [θɔːt]', ru: 'думать' },
	{ en: 'throw*  - threw - thrown', tr: '[θrəʊ]* - [θruː] - [θrəʊn]', ru: 'бросать' },
	{
		en: 'understand - understood - understood',
		tr: '[ˌʌndəˈstænd] - [ˌʌndəˈstʊd] - [ˌʌndəˈstʊd]',
		ru: 'понимать, постигать',
	},
	{ en: 'wake - woke - woken', tr: '[weɪk] - [wəʊk] - [ˈwəʊkᵊn]', ru: 'просыпаться' },
	{ en: 'wear - wore - worn', tr: '[weə] - [wɔː] - [wɔːn]', ru: 'носить [на себе одежду]' },
	{ en: 'win - won - won', tr: '[wɪn] - [wʌn] - [wʌn]', ru: 'выиграть, одержать победу' },
	{
		en: 'withdraw - withdrew - withdrawn',
		tr: '[wɪðˈdrɔː] - [wɪðˈdruː] - [wɪðˈdrɔːn]',
		ru: 'изымать, отзывать, снимать [например деньги со счёта]',
	},
	{ en: 'write - wrote - written', tr: '[raɪt] - [rəʊt] - [ˈrɪtᵊn]', ru: 'писать' },
];

const PH = [
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
	{
		en: 'by heart',
		ru: 'наизусть',
		ru_example: 'Ему удалось выучить этот текст наизусть',
		en_example: 'He succeeded in learning this text by heart',
		tr: '[baɪ] [hɑːt]',
		en_example_tr: '[hi] [səkˈsiːdɪd] [ɪn] [ˈlɜːnɪŋ] [ðɪs] [tɛkst] [baɪ] [hɑːt]'
	},
	{
		en: 'by tomorrow',
		ru: 'к завтрашнему дню',
		ru_example: 'Ему нужно сделать это к завтрашнему дню',
		en_example: 'He needs to do it by tomorrow',
		tr: '[baɪ] [təˈmɒrəʊ]',
		en_example_tr: '[hi] [niːdz] [tə] [dʊ] [ɪt] [baɪ] [təˈmɒrəʊ]'
	},
	{
		en: 'in this photo',
		ru: 'на этой фотографии',
		ru_example: 'Я изображён на этой фотографии',
		en_example: "I'm pictured in this photo",
		tr: '[ɪn] [ðɪs] [ˈfəʊtəʊ]',
		en_example_tr: '[aɪm] [ˈpɪkʧəd] [ɪn] [ðɪs] [ˈfəʊtəʊ]'
	},
	{
		en: 'the day before yesterday',
		ru: 'позавчера',
		ru_example: 'Позавчера было тепло',
		en_example: 'It was warm the day before yesterday',
		tr: '[ðə] [deɪ] [bɪˈfɔː] [ˈjɛstədeɪ]',
		en_example_tr: '[ɪt] [wəz] [wɔːm] [ðə] [deɪ] [bɪˈfɔː] [ˈjɛstədeɪ]'
	},
	{
		en: 'the day after tomorrow',
		ru: 'послезавтра',
		ru_example: 'Послезавтра будет холодно',
		en_example: "The day after tomorrow, it's going to be cold",
		tr: '[ðə] [deɪ] [ˈɑːftə] [təˈmɒrəʊ]',
		en_example_tr: '[ðə] [deɪ] [ˈɑːftə] [təˈmɒrəʊ], [ɪts] [ˈɡəʊɪŋ] [tə] [bi] [kəʊld]'
	},
	{
		en: 'from time to time',
		ru: 'время от времени',
		ru_example: 'Я навещаю его время от времени ',
		en_example: 'I visit him from time to time ',
		tr: '[frəm] [taɪm] [tə] [taɪm]',
		en_example_tr: '[aɪ] [ˈvɪzɪt] [ɪm] [frəm] [taɪm] [tə] [taɪm] '
	},
	{
		en: 'the memory of someone',
		ru: 'память о ком-то',
		ru_example: 'Память о нём всё ещё жива во мне',
		en_example: 'The memory of him is still alive in me',
		tr: '[ðə] [ˈmɛmᵊri] [əv] [ˈsʌmwʌn]',
		en_example_tr: '[ðə] [ˈmɛmᵊri] [əv] [ɪm] [z] [stɪl] [əˈlaɪv] [ɪn] [miː]'
	},
	{
		en: 'half an hour',
		ru: 'полчаса',
		ru_example: 'До встречи осталось полчаса',
		en_example: "We're half an hour away from the meeting",
		tr: '[hɑːf] [ən] [aʊə]',
		en_example_tr: '[wɪə] [hɑːf] [ən] [aʊər] [əˈweɪ] [frəm] [ðə] [ˈmiːtɪŋ]'
	},
	{
		en: 'sure about',
		ru: 'уверен в',
		ru_example: 'Я в этом абсолютно уверен',
		en_example: "I'm pretty sure about it",
		tr: '[ʃɔːr] [əˈbaʊt]',
		en_example_tr: '[aɪm] [ˈprɪti] [ʃɔːr] [əˈbaʊt] [ɪt]'
	},
	{
		en: 'for hours',
		ru: 'часами, в течение нескольких часов',
		ru_example: 'Я могу говорить об этом часами',
		en_example: 'I could talk about it for hours',
		tr: '[fər] [aʊəz]',
		en_example_tr: '[aɪ] [kəd] [tɔːk] [əˈbaʊt] [ɪt] [fər] [aʊəz]'
	},
	{
		en: 'mother tongue',
		ru: 'родной язык',
		ru_example: 'Какой твой родной язык?',
		en_example: 'What is your mother tongue?',
		tr: '[ˈmʌðə] [tʌŋ]',
		en_example_tr: '[wɒt] [s] [jə] [ˈmʌðə] [tʌŋ]?'
	},
	{
		en: 'on purpose',
		ru: 'специально, намеренно',
		ru_example: 'Ты специально меня провоцируешь',
		en_example: "You're provoking me on purpose",
		tr: '[ɒn] [ˈpɜːpəs]',
		en_example_tr: '[jə] [prəˈvəʊkɪŋ] [mi] [ɒn] [ˈpɜːpəs]'
	},
	{
		en: 'the latest',
		ru: 'последний',
		ru_example: 'Это последняя модель смартфона',
		en_example: 'This is the latest smartphone model',
		tr: '[ðə] [ˈleɪtɪst]',
		en_example_tr: '[ðɪs] [ɪz] [ðə] [ˈleɪtɪst] [ˈsmɑːtfəʊn] [ˈmɒdᵊl]'
	},
	{
		en: 'overcrowded with',
		ru: 'переполнен чем-то',
		ru_example: 'Улица переполнена машинами',
		en_example: 'The street is overcrowded with cars',
		tr: '[ˌəʊvəˈkraʊdɪd] [wɪð]',
		en_example_tr: '[ðə] [striːt] [s] [ˌəʊvəˈkraʊdɪd] [wɪð] [kɑːz]'
	},
	{
		en: 'as soon as possible',
		ru: 'как можно скорее',
		ru_example: 'Сделай это как можно скорее',
		en_example: 'Do it as soon as possible',
		tr: '[əz] [suːn] [əz] [ˈpɒsəbᵊl]',
		en_example_tr: '[dʊ] [ɪt] [əz] [suːn] [əz] [ˈpɒsəbᵊl]'
	},
	{
		en: 'on foot',
		ru: 'пешком',
		ru_example: 'Я пешком пойду до дома',
		en_example: "I'll walk on foot home",
		tr: '[ɒn] [fʊt]',
		en_example_tr: '[aɪl] [wɔːk] [ɒn] [fʊt] [həʊm]'
	},
	{
		en: 'in front of',
		ru: 'спереди, напротив',
		ru_example: 'Это здание напротив тебя',
		en_example: "It's the building in front of you",
		tr: '[ɪn] [frʌnt] [ɒv]',
		en_example_tr: '[ɪts] [ðə] [ˈbɪldɪŋ] [ɪn] [frʌnt] [əv] [juː]'
	},
	{
		en: 'in other words',
		ru: 'другими словами',
		ru_example: 'Другими словами, ты проиграл',
		en_example: 'In other words, you lost',
		tr: '[ɪn] [ˈʌðə] [wɜːdz]',
		en_example_tr: '[ɪn] [ˈʌðə] [wɜːdz], [jʊ] [lɒst]'
	},
	{
		en: 'confident enough',
		ru: 'достаточно уверенно',
		ru_example: 'Я достаточно уверен в этом',
		en_example: "I'm confident enough about it",
		tr: '[ˈkɒnfɪdᵊnt] [ɪˈnʌf]',
		en_example_tr: '[aɪm] [ˈkɒnfɪdᵊnt] [ɪˈnʌf] [əˈbaʊt] [ɪt]'
	},
	{
		en: 'for a start',
		ru: 'для начала',
		ru_example: 'Давайте прогуляемся для начала',
		en_example: "Let's take a walk for a start",
		tr: '[fər] [ə] [stɑːt]',
		en_example_tr: '[lɛts] [teɪk] [ə] [wɔːk] [fər] [ə] [stɑːt]'
	},
	{
		en: 'the voice of your heart',
		ru: 'голос твоего сердца',
		ru_example: 'Слушай голос твоего сердца',
		en_example: 'Listen to the voice of your heart',
		tr: '[ðə] [vɔɪs] [əv] [jə] [hɑːt]',
		en_example_tr: '[ˈlɪsᵊn] [tə] [ðə] [vɔɪs] [əv] [jə] [hɑːt]'
	},
	{
		en: 'at first sight',
		ru: 'с первого взгляда',
		ru_example: 'Я влюбился в тебя с первого взгляда',
		en_example: 'I fell in love with you at first sight',
		tr: '[ət] [fɜːst] [saɪt]',
		en_example_tr: '[aɪ] [fɛl] [ɪn] [lʌv] [wɪð] [jʊ] [ət] [fɜːst] [saɪt]'
	},
	{
		en: 'the right way',
		ru: 'правильный путь',
		ru_example: 'Нужно выбрать правильный путь',
		en_example: 'We need to choose the right way',
		tr: '[ðə] [raɪt] [weɪ]',
		en_example_tr: '[wi] [niːd] [tə] [ʧuːz] [ðə] [raɪt] [weɪ]'
	},
	{
		en: 'in public',
		ru: 'на публике, на людях',
		ru_example: 'На людях он такой тихий',
		en_example: "He's so quiet in public",
		tr: '[ɪn] [ˈpʌblɪk]',
		en_example_tr: '[hiːz] [səʊ] [ˈkwaɪət] [ɪn] [ˈpʌblɪk]'
	},
	{
		en: 'full of',
		ru: 'полон чего-то',
		ru_example: 'Это здание полно тараканов',
		en_example: 'This building is full of cockroaches',
		tr: '[fʊl] [ɒv]',
		en_example_tr: '[ðɪs] [ˈbɪldɪŋ] [z] [fʊl] [əv] [ˈkɒkrəʊʧɪz]'
	},
	{
		en: 'in about',
		ru: 'примерно через',
		ru_example: 'Я выйду примерно через час',
		en_example: "I'll be out in about an hour",
		tr: '[ɪn] [əˈbaʊt]',
		en_example_tr: '[aɪl] [bi] [aʊt] [ɪn] [əˈbaʊt] [ən] [aʊə]'
	},
	{
		en: 'because of',
		ru: 'из-за',
		ru_example: 'Всё из-за тебя',
		en_example: "It's all because of you",
		tr: '[bɪˈkəz] [ɒv]',
		en_example_tr: '[ɪts] [ɔːl] [bɪˈkəz] [əv] [juː]'
	},
	{
		en: 'more / less + often',
		ru: 'чаще / реже',
		ru_example: '1)Чаще занимайся<br>2)Реже смотри телевизор',
		en_example: '1)Study more often<br>2)Watch TV less often',
		tr: '[mɔː] / [lɛs] [ˈɒfᵊn]',
		en_example_tr: "1)[ˈstʌdi] [mɔːr] [ˈɒfᵊn]<br>2)[wɒʧ] [ˌtiːˈviː] [lɛs] [ˈɒfᵊn]"
	},
	{
		en: 'at once',
		ru: 'сразу',
		ru_example: 'Бей его сразу',
		en_example: 'Hit him at once',
		tr: '[ət] [wʌns]',
		en_example_tr: '[hɪt] [ɪm] [ət] [wʌns]'
	},
	{
		en: 'for the first time',
		ru: 'впервые, в первый раз',
		ru_example: 'Впервые в жизни я так счастлив',
		en_example: "For the first time in my life, I'm so happy",
		tr: '[fə] [ðə] [fɜːst] [taɪm]',
		en_example_tr: '[fə] [ðə] [fɜːst] [taɪm] [ɪn] [maɪ] [laɪf], [aɪm] [səʊ] [ˈhæpi]'
	},
	{
		en: 'for other purposes',
		ru: 'для других целей',
		ru_example: 'Это нужно для других целей',
		en_example: "It's needed for other purposes",
		tr: '[fər] [ˈʌðə] [ˈpɜːpəsɪz]',
		en_example_tr: '[ɪts] [ˈniːdɪd] [fər] [ˈʌðə] [ˈpɜːpəsɪz]'
	},
	{
		en: 'for no reason ',
		ru: 'без причины',
		ru_example: 'Он без причины меня оскорбил',
		en_example: 'He insulted me for no reason',
		tr: '[fə] [nəʊ] [ˈriːzᵊn] ',
		en_example_tr: '[hi] [ɪnˈsʌltɪd] [mi] [fə] [nəʊ] [ˈriːzᵊn]'
	},
	{
		en: 'fully satisfied with',
		ru: 'полностью удовлетворён чем-то',
		ru_example: 'Ты был полностью удовлетворён этим решением?',
		en_example: 'Were you fully satisfied with that decision?',
		tr: '[ˈfʊli] [ˈsætɪsfaɪd] [wɪð]',
		en_example_tr: '[wə] [jʊ] [ˈfʊli] [ˈsætɪsfaɪd] [wɪð] [ðət] [dɪˈsɪʒᵊn]?'
	},
	{
		en: 'in advance',
		ru: 'заранее',
		ru_example: 'Я заранее готовлюсь к свиданию',
		en_example: "I'm getting ready for a date in advance",
		tr: '[ɪn] [ədˈvɑːns]',
		en_example_tr: '[aɪm] [ˈɡɛtɪŋ] [ˈrɛdi] [fər] [ə] [deɪt] [ɪn] [ədˈvɑːns]'
	},
	{
		en: 'at the age of + number',
		ru: 'в возрасте стольких-то лет',
		ru_example: 'Он скончался в возрасте двадцати лет',
		en_example: 'He passed away at the age of twenty',
		tr: '[ət] [ði] [eɪʤ] [ɒv] + [ˈnʌmbə]',
		en_example_tr: '[hi] [pɑːst] [əˈweɪ] [ət] [ði] [eɪʤ] [əv] [ˈtwɛnti]'
	},
	{
		en: 'a little later',
		ru: 'немного позже',
		ru_example: 'Давай немного позже поиграем, я занят',
		en_example: "Let's play a little later, I'm busy",
		tr: '[ə] [ˈlɪtᵊl] [ˈleɪtə]',
		en_example_tr: '[lɛts] [pleɪ] [ə] [ˈlɪtᵊl] [ˈleɪtə], [aɪm] [ˈbɪzi]'
	},
	{
		en: 'the last bargain',
		ru: 'последняя выгодная сделка',
		ru_example: 'Это ваша последняя выгодная сделка',
		en_example: 'This is your last bargain',
		tr: '[ðə] [lɑːst] [ˈbɑːɡɪn]',
		en_example_tr: '[ðɪs] [ɪz] [jə] [lɑːst] [ˈbɑːɡɪn]'
	},
	{
		en: 'as much as possible',
		ru: 'настолько, насколько это возможно',
		ru_example: 'Ты должен стараться настолько, насколько это возможно',
		en_example: 'You have to try as much as possible',
		tr: '[əz] [mʌʧ] [əz] [ˈpɒsəbᵊl]',
		en_example_tr: '[jʊ] [həv] [tə] [traɪ] [əz] [mʌʧ] [əz] [ˈpɒsəbᵊl]'
	},
	{
		en: 'on my own/on his own/by myself/by himself',
		ru: 'самостоятельно',
		ru_example: 'Он предпочитает изучать английский самостоятельно',
		en_example: 'He prefer to learn English on his own',
		tr: ''
	},
	{
		en: 'in my opinion / in my view',
		ru: 'по моему мнению, на мой взгляд',
		ru_example: 'По моему мнению, это было правильное решение',
		en_example: 'In my opinion it was the right decision',
		tr: ''
	},
	{
		en: 'have a good time',
		ru: 'хорошо провести время',
		ru_example: 'Я желаю тебе хорошо провести время',
		en_example: 'I wish you have a good time',
		tr: '[həv] [ə] [ɡʊd] [taɪm]',
		en_example_tr: '[aɪ] [wɪʃ] [jʊ] [həv] [ə] [ɡʊd] [taɪm]'
	},
	{
		en: 'have a great time',
		ru: 'отлично провести время',
		ru_example: 'Я желаю тебе отлично провести время',
		en_example: 'I wish you have a great time',
		tr: '[həv] [ə] [ɡreɪt] [taɪm]',
		en_example_tr: '[aɪ] [wɪʃ] [jʊ] [həv] [ə] [ɡreɪt] [taɪm]'
	},
	{
		en: 'all the best',
		ru: 'всего самого лучшего',
		ru_example: 'Я желаю тебе всего самого лучшего',
		en_example: 'I wish you all the best',
		tr: '[ɔːl] [ðə] [bɛst]',
		en_example_tr: '[aɪ] [wɪʃ] [jʊ] [ɔːl] [ðə] [bɛst]'
	},
	{
		en: 'a speedy recovery',
		ru: 'скорейшего выздоровления',
		ru_example: 'Я желаю тебе скорейшего выздоровления',
		en_example: 'I wish you a speedy recovery',
		tr: '[ə] [ˈspiːdi] [rɪˈkʌvᵊri]',
		en_example_tr: '[aɪ] [wɪʃ] [jʊ] [ə] [ˈspiːdi] [rɪˈkʌvᵊri]'
	},
]

const PV = [
	{
		en: 'be away',
		ru: 'отсутствовать, быть в отъезде',
		ru_example: 'Они были в отъезде',
		en_example: 'They were away',
	},
	{
		en: 'be out',
		ru: 'быть не дома',
		ru_example: 'Я был не дома',
		en_example: 'I was out',
	},
	{
		en: 'go up',
		ru: 'подниматься',
		ru_example: 'Солнце встанет через час',
		en_example: 'The sun will go up in an hour',
	},
	{
		en: 'go down',
		ru: 'снижаться',
		ru_example: 'Солнце скоро сядет',
		en_example: 'The sun will go down soon',
	},
	{
		en: 'look for',
		ru: 'искать что-то',
		ru_example: 'Она будет искать лучшую работу?',
		en_example: 'Will she look for the best job?',
	},
	{
		en: 'look after',
		ru: 'следить, присматривать',
		ru_example: 'Как ты следишь за своим здоровьем?',
		en_example: 'How do you look after your health?',
	},
	{
		en: 'look out [of]',
		ru: 'выглянуть в/из',
		ru_example: 'Я выглянул из окна',
		en_example: 'I looked out of the window',
	},
	{
		en: 'make up',
		ru: 'составлять',
		ru_example: 'Все они, по сути, составляют одну семью',
		en_example: 'Altogether they make up one family',
	},
	{
		en: 'get up',
		ru: 'вставать [после сна]',
		ru_example: 'Твой брат всегда так рано встаёт?',
		en_example: 'Does your brother always get up so early?',
	},
	{
		en: 'beat up',
		ru: 'избивать',
		ru_example: 'Мой отец может побить твоего отца',
		en_example: 'My dad could beat up your dad',
	},
	{
		en: 'fill in',
		ru: 'заполнить',
		ru_example: 'Мне нужно заполнить пробелы сейчас',
		en_example: 'I need to fill in the gaps now',
	},
	{
		en: 'fall off',
		ru: 'падать с чего-то',
		ru_example: 'Он упал с лошади',
		en_example: 'He fell off a horse',
	},
	{
		en: 'fall from',
		ru: 'падать откуда-то',
		ru_example: 'Яблоко упало с дерева',
		en_example: 'An apple fell from a tree',
	},
	{
		en: 'fall on',
		ru: 'падать на кого-то',
		ru_example: 'Он упал на человека',
		en_example: 'He fell on a man',
	},
	{
		en: 'turn on/off',
		ru: 'включить / выключить',
		ru_example: 'Выключи телевизор!',
		en_example: 'Turn off the TV!',
	},
	{
		en: 'throw away',
		ru: 'выбрасывать',
		ru_example: 'Выброси это!',
		en_example: 'Throw it away!',
	},
	{
		en: 'grow up',
		ru: 'вырасти где-то [про человека]',
		ru_example: 'Он вырос в Америке',
		en_example: 'He grew up in America',
	},
	{
		en: 'run away',
		ru: 'убежать',
		ru_example: 'Я убежал от испуга',
		en_example: 'I ran away from the scare',
	},
	{
		en: 'count on',
		ru: 'рассчитывать на',
		ru_example: 'Ты можешь рассчитывать только на себя',
		en_example: 'You can only count on yourself',
	},
	{
		en: 'point out',
		ru: 'заметить, отметить',
		ru_example: 'Я хотел бы отметить, что эта чрезвычайно важная вещь',
		en_example: `I'd like to point out that it's an extremely important thing`,
	},
	{
		en: 'break down',
		ru: 'сломаться',
		ru_example: 'Машина сломалась',
		en_example: 'The car broke down',
	},
	{
		en: 'sit down',
		ru: 'присесть',
		ru_example: 'Нет времени просто присесть и почитать',
		en_example: 'I do not have time to just sit down and read',
	},
	{
		en: 'fly away',
		ru: 'улетать',
		ru_example: 'Обещай далеко не улетать',
		en_example: 'Promise not to fly away',
	},
	{
		en: 'fly back',
		ru: 'лететь обратно',
		ru_example: 'Через день мне пришлось лететь обратно',
		en_example: 'A day later, I had to fly back',
	},
	{
		en: 'stand up',
		ru: 'вставать(из положения сидя, лёжа)',
		ru_example: 'Я уверен, что смогу встать и сделать шаг',
		en_example: "I'm sure I can stand up and take a step",
	},
	{
		en: 'hurry up',
		ru: 'торопиться',
		ru_example: 'Вы поспешите закончить работу',
		en_example: 'You will hurry up and finish your work',
	},
	{
		en: 'wake up',
		ru: 'просыпаться',
		ru_example: 'В связи с этим просыпаться придется раньше',
		en_example: 'In order to have that, I would need to wake up earlier',
	},

	{
		en: 'work on',
		ru: 'работать над чем-то ',
		ru_example: 'Я каждый день работаю над этим проектом',
		en_example: 'I work on this project every day',
	},
	{
		en: 'come from',
		ru: 'родом из',
		ru_example: 'Он родом из России',
		en_example: 'He comes from Russia',
	},
	{
		en: 'lie down',
		ru: 'прилечь',
		ru_example: 'Приляг на кушетку',
		en_example: 'Lie down on the couch',
	},
	{
		en: 'divide into',
		ru: 'делить на',
		ru_example: 'Я разделил это на три части',
		en_example: 'I divided it into three parts',
	},
	{
		en: 'stay in',
		ru: 'оставаться дома',
		ru_example: 'Я говорю тебе, оставайся дома!',
		en_example: 'I am telling you to stay in!',
	},
	{
		en: 'jump over',
		ru: 'перепрыгнуть через что-то',
		ru_example: 'Он перепрыгнул через реку',
		en_example: 'He jumped across the river',
	},
];

const W = [
	{
		en: 'satisfied',
		tr: '[ˈsætɪsfaɪd]',
		ru: 'удовлетворённый',
		ru_example: 'Ты был удовлетворён этим результатом?',
		en_example: 'Were you satisfied with this result?',
	},
	{
		en: 'depressed',
		tr: '[dɪˈprest]',
		ru: 'подавленный',
		ru_example: 'Тот человек чувствует себя подавленным?',
		en_example: 'Does that man feel depressed?',
	},
	{
		en: 'silly',
		tr: '[ˈsɪli]',
		ru: 'глупый',
		ru_example: 'Конечно, я смогу избавиться от этих глупых ошибок',
		en_example: "Of course, I'll be able to get rid of these silly mistakes",
	},
	{
		en: 'sudden / unexpected',
		tr: '[ˈsʌdn] / [ˌʌnɪkˈspektɪd]',
		ru: 'неожиданный',
		ru_example: 'Эти изменения очень неожиданные для них?',
		en_example: 'Are these changes very unexpected for them?',
	},
	{
		en: 'harmful',
		tr: '[ˈhɑːmfᵊl]',
		ru: 'вредный',
		ru_example: 'Курение очень вредно для нашего здоровья',
		en_example: 'Smoking is very harmful to our health',
	},
	{
		en: 'spare',
		tr: '[speə]',
		ru: 'запасной; свободный [про время; про что-то неиспользуемое]',
		ru_example: `1)Запасное колесо находится в багажнике <br> 2)Я обожаю заниматься этим в своё свободное время`,
		en_example: `1)The spare tyre is in the boot <br> 2)I enjoy doing this in my spare time`,
	},
	{
		en: 'disappointed',
		tr: '[ˌdɪsəˈpɔɪntɪd]',
		ru: 'разочарованный',
		ru_example: 'Эти мужчины очень разочарованы',
		en_example: 'These men are very disappointed',
	},
	{ en: 'fond', tr: '[fɒnd]', ru: 'любящий, нежный', ru_example: 'Я люблю спорт', en_example: "I'm fond of sport" },
	{
		en: 'ridiculous',
		tr: '[rɪˈdɪkjələs]',
		ru: 'смешной, нелепый',
		ru_example: 'Цена была так высока, и мы все понимали, что это было абсолютно нелепо',
		en_example: 'The price was so high and we all understood that it was absolutely ridiculous',
	},
	{
		en: 'overcrowded [with]',
		tr: '[ˌəʊvəˈkraʊdɪd]',
		ru: 'переполненный [чем-то]',
		ru_example: 'Та область переполнена туристами?',
		en_example: 'Is that area overcrowded with tourists?',
	},

	{
		en: 'shocking',
		tr: '[ˈʃɒkɪŋ]',
		ru: 'шокирующий',
		ru_example: 'Что там такого шокирующего?',
		en_example: 'What is so shocking there?',
	},
	{
		en: 'accurate',
		tr: '[ˈækjərət]',
		ru: 'точный',
		ru_example: 'Чьё описание более точное?',
		en_example: 'Whose description is more accurate?',
	},
	{
		en: 'experienced',
		tr: '[ɪkˈspɪəriənst]',
		ru: 'опытный',
		ru_example: 'Он очень опытный учитель',
		en_example: "He's a very experienced teacher",
	},
	{
		en: 'reliable',
		tr: '[rɪˈlaɪəbᵊl]',
		ru: 'надёжный',
		ru_example: 'Эта машина надежная?',
		en_example: 'Is this car reliable?',
	},
	{
		en: 'ambitious',
		tr: '[æmˈbɪʃəs]',
		ru: 'амбициозный',
		ru_example: 'Студент очень амбициозный',
		en_example: 'The student is very ambitious',
	},
	{ en: 'lonely', tr: '[ˈləʊnli]', ru: 'одинокий', ru_example: 'Она была одинока?', en_example: 'Was she lonely?' },
	{
		en: 'outstanding',
		tr: '[aʊtˈstændɪŋ]',
		ru: 'выдающийся',
		ru_example: 'Это было вадающееся достижение',
		en_example: 'It was an outstanding achievement',
	},
	{
		en: 'pleasant',
		tr: '[ˈplezᵊnt]',
		ru: 'приятный',
		ru_example: 'У неё очень приятная улыбка',
		en_example: 'She has a very pleasant smile',
	},
	{
		en: 'low-quality',
		tr: '[ləʊ]-[ˈkwɒləti]',
		ru: 'низкокачественный',
		ru_example: 'Никогда больше не соглашайтесь на низкокачественный контент',
		en_example: 'Never settle again for low-quality content',
	},
	{
		en: 'proud',
		tr: '[praʊd]',
		ru: 'гордый',
		ru_example: 'Ты гордишься своими достижениями?',
		en_example: 'Are you proud of your achievements?',
	},

	{
		en: 'tremendous',
		tr: '[trɪˈmɛndəs]',
		ru: 'огромный',
		ru_example: 'Я хотел бы поблагодарить тебя за твою огромную поддержку',
		en_example: "I'd like to thank you for your tremendous support",
	},
	{
		en: 'polite',
		tr: '[pəˈlaɪt]',
		ru: 'вежливый',
		ru_example: 'Я думаю, людям следует быть более вежливыми',
		en_example: 'I think people should be more polite',
	},
	{ en: 'mean*', tr: '[miːn]', ru: 'подлый', ru_example: 'Ты подлый человек', en_example: "You're a mean person" },
	{
		en: 'inexpensive',
		tr: '[ˌɪnɪkˈspensɪv]',
		ru: 'недорогой',
		ru_example: 'Это недорогие часы?',
		en_example: 'Is it an inexpensive watch?',
	},
	{
		en: 'independent',
		tr: '[ˌɪndɪˈpendənt]',
		ru: 'независимый',
		ru_example: 'Он не чувствует себя финансово независимым',
		en_example: "He doesn't feel financially independent",
	},
	{
		en: 'profitable',
		tr: '[ˈprɒfɪtəbᵊl]',
		ru: 'прибыльный',
		ru_example: 'Его бизнес не прибыльный',
		en_example: "His business isn't profitable",
	},
	{
		en: 'incorrect',
		tr: '[ˌɪnkəˈrekt]',
		ru: 'неправильный, неточный',
		ru_example: 'Этот ответ неверный?',
		en_example: 'Is this anwer incorrect?',
	},
	{
		en: 'tiring',
		tr: '[ˈtaɪərɪŋ]',
		ru: 'утомительный',
		ru_example: 'Поездка была совсем не утомительной',
		en_example: "The trip wasn't tiring at all",
	},
	{
		en: 'terrible / awful',
		tr: '[ˈterəbl] / [ˈɔːfᵊl]',
		ru: 'ужасный',
		ru_example: 'Те люди живут в ужасных условиях',
		en_example: 'Those people live in terrible / awful conditions',
	},
	{
		en: 'divorced',
		tr: '[dɪˈvɔːst]',
		ru: 'разведённый',
		ru_example: 'Когда он разведётся?',
		en_example: 'When will he get divorced?',
	},

	{
		en: 'obvious',
		tr: '[ˈɒbviəs]',
		ru: 'очевидный',
		ru_example: 'Это очевидный ответ',
		en_example: 'This is the obvious answer',
	},
	{ en: 'generous', tr: '[ˈʤenᵊrəs]', ru: 'щедрый', ru_example: 'Ты такой щедрый', en_example: "You're so generous" },
	{
		en: 'colourful',
		tr: '[ˈkʌləfᵊl]',
		ru: 'красочный',
		ru_example: 'Это красочный пейзаж',
		en_example: "It's a colorful landscape",
	},
	{
		en: 'complete*',
		tr: '[kəmˈpliːt]',
		ru: 'полный',
		ru_example: 'Почему это будет совершенно пустая трата времени?',
		en_example: 'Why will it be a complete waste of time?',
	},
	{
		en: 'urgent',
		tr: '[ˈɜːʤᵊnt]',
		ru: 'срочный',
		ru_example: 'Они информируют его, когда что-то действительно срочное происходит',
		en_example: 'They inform him when something really urgent happens',
	},
	{
		en: 'lovely',
		tr: '[ˈlʌvli]',
		ru: 'прекрасный',
		ru_example: 'Она живёт в прекрасном месте',
		en_example: 'She lives in a lovely place',
	},
	{
		en: 'convenient',
		tr: '[kənˈviːniənt]',
		ru: 'удобный, подходящий',
		ru_example: 'То время для них удобно?',
		en_example: 'Is that time convenient for them?',
	},
	{
		en: 'nearest',
		tr: '[ˈnɪərɪst]',
		ru: 'ближайший',
		ru_example: 'Эта дорога ведёт к ближайшему отелю',
		en_example: 'This road leands to the nearest hotel',
	},
	{
		en: 'acquaintance',
		tr: '[əˈkweɪntᵊns]',
		ru: 'знакомый',
		ru_example: 'Мой знакомый не хочет становиться предпринимателем, потому что он думает, это очень рисковано',
		en_example: "My acquaintance doesn't want to become an entrepreneur because he thinks it's very risky",
	},
	{
		en: 'prestigious',
		tr: '[presˈtɪʤəs]',
		ru: 'престижный',
		ru_example: 'Я хочу окончить очень престижный университет',
		en_example: 'I want to graduate from a very prestigious university',
	},

	{
		en: 'wise',
		tr: '[waɪz]',
		ru: 'мудрый',
		ru_example: 'Это было очень мудрое решение',
		en_example: 'It was a very wise decision',
	},
	{ en: 'rude', tr: '[ruːd]', ru: 'грубый', ru_example: 'Ты такой грубый', en_example: "You're so rude" },
	{
		en: 'attractive',
		tr: '[əˈtræktɪv]',
		ru: 'привлекательный',
		ru_example: 'Это для тебя действительно было привлекательное предложение?',
		en_example: 'Was it really an attractive offer for you?',
	},
	{
		en: 'unforgettable',
		tr: '[ˌʌnfəˈɡetəbᵊl]',
		ru: 'незабываемый',
		ru_example: 'Он думает, это будет назабываемая вечеринка',
		en_example: "He thinks it'll be an unforgettable party",
	},
	{
		en: 'patient*',
		tr: '[ˈpeɪʃnt]',
		ru: 'терпеливый',
		ru_example: 'Ты слишком терпеливый',
		en_example: "You're too patient",
	},
	{
		en: 'spoilt',
		tr: '[spɔɪlt]',
		ru: 'испорченный',
		ru_example: 'Это испорченное молоко',
		en_example: "It's spoiled milk",
	},
	{
		en: 'splendid',
		tr: '[ˈsplɛndɪd]',
		ru: 'великолепный, роскошный',
		ru_example: 'Мы забронировали великолепную квартиру с видом на океан',
		en_example: 'We booked a splendid apartament with a view of the ocean',
	},
	{
		en: 'predictable',
		tr: '[prɪˈdɪktəbᵊl]',
		ru: 'предсказуемый',
		ru_example: 'Результаты совсем не были предсказуемыми',
		en_example: "The results weren't predictable at all",
	},
	{ en: 'thin', tr: '[θɪn]', ru: 'худой', ru_example: 'Ты болезненно худой', en_example: "You're painfully thin" },
	{
		en: 'innocent',
		tr: '[ˈɪnəsᵊnt]',
		ru: 'невиновный',
		ru_example: 'Полиция должна остановить их, потому что они могут убивать невинных людей',
		en_example: 'The police must stop them because they can kill innocent people',
	},

	{
		en: 'huge',
		tr: '[hjuːʤ]',
		ru: 'огромный',
		ru_example: 'Я поблагодарил его за его огромную поддержку',
		en_example: 'I thanked him for his huge support',
	},
	{ en: 'confident', tr: '[ˈkɒnfɪdᵊnt]', ru: 'уверенный', ru_example: "Твой друг чувствует себя достаточно уверенно, когда говорит на иностранном языке?", en_example: "Does your friend feel confident enough when he speaks a foreign language?" },
	{
		en: 'promising',
		tr: '[ˈprɒmɪsɪŋ]',
		ru: 'многообещающий',
		ru_example: 'Я хотел бы принять это предложение, потому что это звучит очень многообещающе',
		en_example: "I'd like to take this offer because it sounds very promising",
	},
	{
		en: 'spacious',
		tr: '[ˈspeɪʃəs]',
		ru: 'просторный',
		ru_example: 'Это просторный дом',
		en_example: 'This is a spacious house',
	},
	{
		en: 'powerful',
		tr: '[ˈpaʊəfᵊl]',
		ru: 'мощный',
		ru_example: 'Компьютер не такой мощный',
		en_example: "The computer isn't so powerful",
	},
	{
		en: 'homemade',
		tr: '[ˌhəʊmˈmeɪd]',
		ru: 'домашний, домашнего изготовления',
		ru_example: 'Я действительно обожаю домашнюю еду',
		en_example: 'I really enjoy homemade food',
	},
	{ en: 'wide', tr: '[waɪd]', ru: 'широкий', ru_example: 'Это широкая улица', en_example: "It's a wide street" },

	{
		en: 'accidentally',
		tr: '[ˌæksɪˈdɛntəli]',
		ru: 'случайно',
		ru_example: 'Она случайно порезала свой палец',
		en_example: 'She cut her finger accidentally'
	},
	{
		en: 'somehow',
		tr: '[ˈsʌmhaʊ]',
		ru: 'как-то',
		ru_example: 'Он как-то может решить эту проблему?',
		en_example: 'Can he decide this problem somehow?'
	},
	{
		en: 'outdoors',
		tr: '[ˌaʊtˈdɔːz]',
		ru: 'на открытом воздухе',
		ru_example: 'Я прекрасно понимаю, что мне нужно есть здоровую пищу, заниматься спортом и проводить больше времени на открытом воздухе',
		en_example: 'I perfectly understand that I need to eat healthy food, practice sport and spend more time outdoors'
	},
	{
		en: 'thoroughly',
		tr: '[ˈθʌrəli]',
		ru: 'тщательно',
		ru_example: 'Мне нужно подумать над этим более тщательно',
		en_example: 'I need to think about it more thoroughly'
	},
	{
		en: 'daily*',
		tr: '[ˈdeɪlɪ]',
		ru: 'ежедневно',
		ru_example: 'Сколько электронных писем ты ежедневно получаешь?',
		en_example: 'How many emails do you get daily?'
	},
	{
		en: 'particularly',
		tr: '[pəˈtɪkjələli]',
		ru: 'особенно',
		ru_example: 'Я особенно увлекаюсь изучением иностранных языков',
		en_example: "I'm particularly keen on learning foreign languages"
	},
	{
		en: 'suddenly / unexpectedly',
		tr: '[ˈsʌdənlɪ] / [ˌʌnɪkˈspɛktɪdli]',
		ru: 'неожиданно, внезапно, вдруг',
		ru_example: 'Это случилось со мной так внезапно',
		en_example: 'It happened to me so unexpectedly'
	},
	{
		en: 'necessary*',
		tr: '[ˈnesəsᵊri]',
		ru: 'необходимо',
		ru_example: 'Что будет необходимо исправить?',
		en_example: 'What will be necessary to correct?'
	},
	{
		en: 'peacefully',
		tr: '[ˈpiːsfᵊli]',
		ru: 'мирно',
		ru_example: 'Молодая пара жила очень счастливо и мирно',
		en_example: 'A young couple lived very happily and peacefully'
	},
	{
		en: 'heroically',
		tr: '[hɪˈrəʊɪkᵊli]',
		ru: 'героически',
		ru_example: 'Солдат сражался действительно героически',
		en_example: 'The soldier fought really heroically'
	},

	{
		en: 'definitely',
		tr: '[ˈdefɪnətlɪ]',
		ru: 'определённо',
		ru_example: 'Определённо, я рекомендую посетить это место',
		en_example: 'Definitely, I recommend visiting this place'
	},
	{
		en: 'although / though',
		tr: '[ɔːlˈðəʊ] / [ðəʊ]',
		ru: 'хотя',
		ru_example: 'Она никогда не жаловалась, хотя это было очень трудно для неё',
		en_example: 'She never complained although / though it was very difficult for her'
	},
	{
		en: 'impolitely',
		tr: '[ˌɪmpəˈlaɪtli]',
		ru: 'невежливо',
		ru_example: 'Почему вы говорите со мной так невежливо?',
		en_example: 'Why do you speak so impolitely to me?'
	},
	{
		en: 'differently / otherwise',
		tr: '[ˈdɪfᵊrᵊntli] / [ˈʌðəwaɪz]',
		ru: 'по-другому, иначе',
		ru_example: 'Я думал иначе',
		en_example: 'I thought otherwise / differently'
	},
	{
		en: 'bravely / courageously',
		tr: '[ˈbreɪvli] / [kəˈreɪʤəsli]',
		ru: 'смело, отважно',
		ru_example: 'Солдаты сражались очень смело и отважно',
		en_example: 'The soldiers fought very bravely and courageously'
	},
	{
		en: 'luckily / fortunately',
		tr: '[ˈlʌkɪli] / [ˈfɔːʧᵊnətli]',
		ru: 'к счастью',
		ru_example: 'К счастью, им удалось спасти её жизнь',
		en_example: 'Luckily / Fortunately, they managed to save her life'
	},
	{
		en: 'during',
		tr: '[ˈdjʊərɪŋ]',
		ru: 'в течение, во время',
		ru_example: 'Я должен упомянуть это во время этого разговора',
		en_example: 'I must mention it during this coversation'
	},
	{
		en: 'behind',
		tr: '[bɪˈhaɪnd]',
		ru: 'позади, за',
		ru_example: 'Я стоял за ней',
		en_example: 'I stood behind her'
	},
	{
		en: 'fluently',
		tr: '[ˈfluːəntli]',
		ru: 'свободно, бегло',
		ru_example: 'Я хотел бы свободно говорить по-английски',
		en_example: `I'd like to speak English fluently`
	},
	{
		en: 'instead [of]',
		tr: '[ɪnˈstɛd]',
		ru: 'вместо [кого-то, чего-то]',
		ru_example: 'Я решил купить дом вместо квартиры',
		en_example: 'I decided to buy a house instead of a apartment'
	},
	{
		en: 'unfortunately',
		tr: '[ʌnˈfɔːʧᵊnətli]',
		ru: 'к несчастью, к сожалению',
		ru_example: 'К сожалению, у него не достаточно времени на это',
		en_example: `Unfortunately, he doesn't have enough time for it`
	},

	{
		en: 'accident',
		tr: '[ˈæksɪdənt]',
		ru: 'авария, происшествие, несчастный случай',
		ru_example: 'Все были шокированы той аварией',
		en_example: "Everyone was shocked by that accident"
	},
	{
		en: 'entrepreneur',
		tr: '[ˌɒntrəprəˈnɜː]',
		ru: 'предприниматель',
		ru_example: 'Мой знакомый не хочет становиться предпринимателем, потому что он думает, это очень рисковано',
		en_example: "My acquaintance doesn't want to become an entrepreneur because he thinks it's very risky"
	},
	{
		en: 'fortune',
		tr: '[ˈfɔːʧuːn]',
		ru: 'удача; состояние [про деньги]',
		ru_example: 'Это действительно стоит целое состояние',
		en_example: 'It really costs a fortune'
	},
	{
		en: 'neighbor',
		tr: '[ˈneɪbə]',
		ru: 'сосед',
		ru_example: 'У меня очень хороший сосед',
		en_example: 'I have a very good neighbor'
	},
	{
		en: 'illness',
		tr: '[ˈɪlnəs]',
		ru: 'болезнь [не сильная]',
		ru_example: 'Это не серьёзная болезнь',
		en_example: "It isn't a serious illness"
	},
	{
		en: 'thief(thieves)',
		tr: '[θiːf]([θiːvz])',
		ru: 'вор(воры)',
		ru_example: 'Они поймали того вора',
		en_example: 'They caught that thief'
	},
	{
		en: 'sign*',
		tr: '[saɪn]',
		ru: 'знак',
		ru_example: 'Это дорожный знак?',
		en_example: 'Is it a road sign?'
	},
	{
		en: 'surgeon',
		tr: '[ˈsɜːʤᵊn]',
		ru: 'хирург',
		ru_example: 'Он не хирург',
		en_example: "He isn't a surgeon"
	},
	{
		en: 'curtain',
		tr: '[ˈkɜːrtn]',
		ru: 'штора, занавеска',
		ru_example: 'Занавес с шумом поднялся',
		en_example: 'The curtain swooshed open'
	},
	{
		en: 'satisfaction',
		tr: '[ˌsætɪsˈfækʃᵊn]',
		ru: 'удовлетворение',
		ru_example: 'Работа не приносит ему удовлетворения',
		en_example: "Work doesn't bring him satisfaction"
	},
	{
		en: 'supplier',
		tr: '[səˈplaɪə]',
		ru: 'поставщик',
		ru_example: 'Он имел дело с поставщиками',
		en_example: 'He dealt with supplier'
	},
	{
		en: 'condition',
		tr: '[kənˈdɪʃᵊn]',
		ru: 'состояние; условие',
		ru_example: '1)Мой друг не хочет работать в этих условиях <br> 2)Он в плохом состоянии',
		en_example: "1)My friend doesn't want to work in these conditions <br> 2)He is in poor condition"
	},
	{
		en: 'tax',
		tr: '[tæks]',
		ru: 'налог',
		ru_example: 'Этот налог не такой маленький',
		en_example: "This tax isn't so little"
	},
	{
		en: 'treasure',
		tr: '[ˈtrɛʒə]',
		ru: 'сокровище',
		ru_example: 'Они спрятали это сокровище',
		en_example: 'They hid this treasure'
	},
	{
		en: 'corner',
		tr: '[ˈkɔːnə]',
		ru: 'угол',
		ru_example: 'В каком углу это было?',
		en_example: 'Which corner was it in?'
	},
	{
		en: 'vet',
		tr: '[vet]',
		ru: 'ветеринар',
		ru_example: 'Моя сестра работает ветеринаром',
		en_example: 'My sister work as a vet'
	},
	{
		en: 'foreigner',
		tr: '[ˈfɒrənə]',
		ru: 'иностранец',
		ru_example: 'Я хотел общаться с иностранцами',
		en_example: 'I wanted to communicate with foreigners'
	},
	{
		en: 'discussion',
		tr: '[dɪˈskʌʃᵊn]',
		ru: 'обсуждение',
		ru_example: 'Давайте начнём обсуждение этого вопроса',
		en_example: "Let's start a discussion on this issue"
	},
	{
		en: 'income',
		tr: '[ˈɪnkʌm]',
		ru: 'доход',
		ru_example: 'У твоего друга стабильный доход?',
		en_example: 'Does your friend have a stable income?'
	},
	{
		en: 'floor',
		tr: '[flɔː]',
		ru: 'этаж; пол',
		ru_example: '1)Мы на пятом этаже <br> 2)Эта коробка лежит на полу',
		en_example: '1)We are on the fifth floor <br> 2)This box lies on the floor'
	},
	{
		en: 'customer',
		tr: '[ˈkʌstəmə]',
		ru: 'покупатель, клиент',
		ru_example: 'Она имела дело с покупателями',
		en_example: 'She dealt with customers'
	},
	{
		en: 'fine*',
		tr: '[faɪn]',
		ru: 'штраф',
		ru_example: 'Мне выписали штраф',
		en_example: 'I was given a fine'
	},
	{
		en: 'measure*',
		tr: '[ˈmɛʒə]',
		ru: 'мера',
		ru_example: 'Он любил её без меры',
		en_example: 'He loved her beyond measure'
	},
	{
		en: 'knee',
		tr: '[niː]',
		ru: 'колено',
		ru_example: 'Я повредил колено',
		en_example: 'I hurt my knee'
	},
	{
		en: 'behaviour',
		tr: '[bɪˈheɪvjə]',
		ru: 'поведение',
		ru_example: 'Ваше поведение оставляет желать лучшего',
		en_example: 'Your behavior leaves a lot to be desired'
	},
	{
		en: 'lawyer',
		tr: '[ˈlɔɪə]',
		ru: 'юрист; адвокат',
		ru_example: 'Она стала юристом',
		en_example: 'She became a lawyer'
	},
	{
		en: 'notice*',
		tr: '[ˈnəʊtɪs]',
		ru: 'уведомление',
		ru_example: 'Я получил уведомление',
		en_example: 'I got a notice'
	},
	{
		en: 'cut*',
		tr: '[kʌt]',
		ru: 'порез, разрез',
		ru_example: 'У меня ужасный порез',
		en_example: 'I have a terrible cut'
	},
	{
		en: 'quality',
		tr: '[ˈkwɒləti]',
		ru: 'качество',
		ru_example: 'Качество этих продуктов действительно впечатляет меня',
		en_example: 'The quality of these produtcs really impresses me'
	},
	{
		en: 'reach*',
		tr: '[riːʧ]',
		ru: 'досягаемость',
		ru_example: 'Они вне досягаемости',
		en_example: "They're out of reach"
	},
	{
		en: 'conversation',
		tr: '[ˌkɒnvəˈseɪʃᵊn]',
		ru: 'разговор',
		ru_example: 'Ты понял это в конце разговора?',
		en_example: 'Did you understand it at the end of the conversation?'
	},

	{
		en: 'release*',
		tr: '[rɪˈliːs]',
		ru: 'релиз',
		ru_example: 'Релиз этой игры состоится в ближайшее время',
		en_example: 'The release of this game is coming soon'
	},
	{
		en: 'difference',
		tr: '[ˈdɪfᵊrᵊns]',
		ru: 'разница, различие',
		ru_example: 'Я вижу некоторые различия между этими вещами',
		en_example: 'I see some differences between these things'
	},
	{
		en: 'figure',
		tr: '[ˈfɪɡə]',
		ru: 'фигура',
		ru_example: 'У неё хорошая фигура',
		en_example: 'She has a good figure'
	},
	{
		en: 'remark',
		tr: '[rɪˈmɑːk]',
		ru: 'замечание',
		ru_example: 'Как ты отреагировал на эти замечания?',
		en_example: 'How did you react to these remarks?'
	},
	{
		en: 'impression',
		tr: '[ˈɪmprɛs]',
		ru: 'впечатление',
		ru_example: 'Это произвело на меня сильное впечатление',
		en_example: 'It made a strong impression on me'
	},
	{
		en: 'criminal',
		tr: '[ˈkrɪmɪnᵊl]',
		ru: 'преступник',
		ru_example: 'Полиция поймала тех преступников',
		en_example: 'The police caught those criminals'
	},
	{
		en: 'necklace',
		tr: '[ˈneklɪs]',
		ru: 'ожерелье',
		ru_example: 'Это дешёвое ожерелье',
		en_example: 'It is a cheap necklace'
	},
	{
		en: 'independence',
		tr: '[ˌɪndɪˈpɛndəns]',
		ru: 'независимость',
		ru_example: 'Они боролись за свободу и независимость',
		en_example: 'They fought for freedom and independence'
	},
	{
		en: 'mention*',
		tr: '[ˈmɛnʃᵊn]',
		ru: 'упоминание',
		ru_example: 'Я помню упоминание о нем',
		en_example: 'I remember a mention of him'
	},

	{
		en: 'roof',
		tr: '[ruːf]',
		ru: 'крыша',
		ru_example: 'Это лежит на крыше',
		en_example: 'It lies on the roof'
	},
	{
		en: 'way',
		tr: '[weɪ]',
		ru: 'путь',
		ru_example: 'Мне удалось преодолеть все эти трудности на моём пути',
		en_example: 'I managed to overcame all these difficulties in my way'
	},
	{
		en: 'guess*',
		tr: '[ɡes]',
		ru: 'предположение',
		ru_example: 'Это предположение оказалось верным',
		en_example: 'That guess proved to be correct'
	},
	{
		en: 'mountain',
		tr: '[ˈmaʊntn]',
		ru: 'гора',
		ru_example: 'Гора очень высокая?',
		en_example: 'Is the mountain very high?'
	},
	{
		en: 'crossroads',
		tr: '[ˈkrɒsˌrəʊdz]',
		ru: 'перекрёсток',
		ru_example: 'Я повернул налево на перекрёстке',
		en_example: 'I turned left at the crossroads'
	},
	{
		en: 'patience',
		tr: '[ˈpeɪʃᵊns]',
		ru: 'терпение',
		ru_example: 'Он потерял терпение',
		en_example: 'He lost patience'
	},
	{
		en: 'copybook',
		tr: '[ˈkɒpɪbʊk]',
		ru: 'тетрадь',
		ru_example: 'Дай мне эту тетрадь',
		en_example: 'Give me this notebook'
	},
	{
		en: 'miss*',
		tr: '[mɪs]',
		ru: 'промах',
		ru_example: 'Этот промах оказался фатальным',
		en_example: 'That miss proved fatal'
	},
	{
		en: 'masterpiece',
		tr: '[ˈmɑːstəpiːs]',
		ru: 'шедевр',
		ru_example: 'Этот фильм абсолютный шедевр',
		en_example: 'This movie is an absolute masterpiece'
	},
	{
		en: 'bargain',
		tr: '[ˈbɑːɡɪn]',
		ru: 'выгодная покупка / сделка',
		ru_example: 'Это будет выгодная покупка?',
		en_example: 'Will it be a bargain?'
	},

	{
		en: 'fame',
		tr: '[feɪm]',
		ru: 'слава',
		ru_example: 'Это бестселлер принёс ей известность и общественное признание',
		en_example: 'This bestseller brought her fame and public recognition'
	},
	{
		en: 'recognition',
		tr: '[ˌrɛkəɡˈnɪʃᵊn]',
		ru: 'признание',
		ru_example: 'Он хотел получить признание отца',
		en_example: "He wanted to get his father's recognition"
	},
	{
		en: 'throw*',
		tr: '[θrəʊ]',
		ru: 'бросок',
		ru_example: 'Это бросок был очень сильным',
		en_example: 'That throw was very strong'
	},
	{
		en: 'complaint',
		tr: '[kəmˈpleɪnt]',
		ru: 'жалоба',
		ru_example: 'Он в основном имеет дело с жалобами',
		en_example: 'He mostly deals with complaints'
	},
	{
		en: 'issue',
		tr: '[ˈɪʃuː]',
		ru: 'вопрос',
		ru_example: 'Это вопрос жизни и смерти',
		en_example: "It's a life and death issue"
	},
	{
		en: 'divorce*',
		tr: '[dɪˈvɔːs]',
		ru: 'развод',
		ru_example: 'Развод был очень дорогим',
		en_example: 'The divorce was very expensive'
	},
	{
		en: 'reason',
		tr: '[ˈriːzᵊn]',
		ru: 'причина',
		ru_example: 'В чём была причина его поступка?',
		en_example: 'What was the reason for his action?'
	},
	{
		en: 'lid',
		tr: '[lɪd]',
		ru: 'крышка',
		ru_example: 'He carefully lifted the lid of the box',
		en_example: 'Он осторожно поднял крышку коробки'
	},
	{
		en: 'tongue',
		tr: '[tʌŋ]',
		ru: 'язык [часть тела]',
		ru_example: 'У меня болит язык',
		en_example: 'My tongue hurts'
	},
	{
		en: 'yard',
		tr: '[jɑːd]',
		ru: 'двор',
		ru_example: 'Я был у себя во дворе',
		en_example: 'I was in my yard'
	},
	{
		en: 'break*',
		tr: '[breɪk]',
		ru: 'перерыв',
		ru_example: 'Тебе пора взять перерыв',
		en_example: "It's time for you to take a break"
	},
	{
		en: 'freedom',
		tr: '[ˈfriːdəm]',
		ru: 'свобода',
		ru_example: 'Они боролись за свободу и независимость',
		en_example: 'They fought for freedom and independence'
	},
	{
		en: 'thought*',
		tr: '[θɔːt]',
		ru: 'мысль',
		ru_example: 'Мне очень понравилась эта мысль',
		en_example: 'I really liked that thought'
	},
	{
		en: 'appearance',
		tr: '[əˈpɪərᵊns]',
		ru: 'внешний вид; появление',
		ru_example: 'Ты можешь описать его внешность?',
		en_example: 'Can you describe his appearance?'
	},
	{
		en: 'resort',
		tr: '[rɪˈzɔːt]',
		ru: 'курорт',
		ru_example: 'Я не рекомендую этот курорт тебе',
		en_example: "I don't recommend this resort to you"
	},
	{
		en: 'deal*',
		tr: '[diːl]',
		ru: 'сделка',
		ru_example: 'Это была плохая сделка',
		en_example: 'It was a bad deal'
	},
	{
		en: 'disease',
		tr: '[dɪˈziːz]',
		ru: 'болезнь [тяжёлая]',
		ru_example: 'У него очень серьезная болезнь',
		en_example: 'He has a very serious disease'
	},
	{
		en: 'statement',
		tr: '[ˈsteɪtmənt]',
		ru: 'утверждение',
		ru_example: 'Он согласен с этим утверждением',
		en_example: 'He agrees with this statement'
	},
	{
		en: 'cheek',
		tr: '[ʧiːk]',
		ru: 'щека',
		ru_example: 'У меня болит щека',
		en_example: 'My cheek hurts'
	},
	{
		en: 'loss',
		tr: '[lɒs]',
		ru: 'потеря',
		ru_example: 'Это была сильная потеря',
		en_example: 'It was a tough loss'
	},

	{
		en: 'imagination',
		tr: '[ɪˌmæʤɪˈneɪʃᵊn]',
		ru: 'воображение',
		ru_example: 'Это развивает наше воображение?',
		en_example: 'Does it develop our imagination?'
	},
	{
		en: 'understanding',
		tr: '[ˌʌndəˈstændɪŋ]',
		ru: 'понимание',
		ru_example: 'Понимание приходит с опытом',
		en_example: 'Understanding comes with experience'
	},
	{
		en: 'afternoon / midday / noon',
		tr: '[ˌɑːftəˈnuːn] / [ˈmɪddeɪ] / [nuːn]',
		ru: 'полдень',
		ru_example: 'Она прибыла в Лондон в полдень',
		en_example: 'She arrived in London at noon'
	},
	{
		en: 'performance',
		tr: '[pəˈfɔːməns]',
		ru: 'представление',
		ru_example: 'Тебе понравилось представление?',
		en_example: 'Did you like the performance?'
	},
	{
		en: 'majority',
		tr: '[məˈʤɒrəti]',
		ru: 'большинство',
		ru_example: 'Большинству людей не понравился этот новый закон',
		en_example: "The majority of people didn't like this new law"
	},
	{
		en: 'pillow',
		tr: '[ˈpɪləʊ]',
		ru: 'подушка',
		ru_example: 'Мне нравится эта подушка',
		en_example: 'I love this pillow'
	},
	{
		en: 'ability',
		tr: '[əˈbɪləti]',
		ru: 'способность',
		ru_example: 'Он обладает выдающимися способностями',
		en_example: 'He has outstanding abilities'
	},
	{
		en: 'invitation',
		tr: '[ˌɪnvɪˈteɪʃᵊn]',
		ru: 'приглашение',
		ru_example: 'Я не принял его приглашение',
		en_example: "I didn't accept his invitation"
	},
	{
		en: 'smell*',
		tr: '[smel]',
		ru: 'запах',
		ru_example: 'Какой чудесный запах',
		en_example: 'What a wonderful smell'
	},
	{
		en: 'palace',
		tr: '[ˈpælɪs]',
		ru: 'дворец',
		ru_example: 'Это чудесный дворец',
		en_example: "It's a wonderful palace"
	},

	{
		en: 'citizen',
		tr: '[ˈsɪtɪzᵊn]',
		ru: 'гражданин',
		ru_example: 'Он стал американским гражданином',
		en_example: 'He became an American citizen'
	},
	{
		en: 'stamp',
		tr: '[stæmp]',
		ru: 'печать; марка',
		ru_example: 'Он собирал марки',
		en_example: 'He collected stamps'
	},
	{
		en: 'confidence',
		tr: '[ˈkɒnfɪdᵊns]',
		ru: 'уверенность',
		ru_example: 'Мне нужно больше уверенности',
		en_example: 'I need more confidence'
	},
	{
		en: 'pond',
		tr: '[pɒnd]',
		ru: 'пруд',
		ru_example: 'Я плавал в пруду',
		en_example: 'I was swimming in the pond'
	},
	{
		en: 'contest',
		tr: '[ˈkɒntest]',
		ru: 'конкурс',
		ru_example: 'Я не буду участвовать в этом конкурсе',
		en_example: "I won't be entering this contest"
	},
	{
		en: 'importance',
		tr: '[ɪmˈpɔːtᵊns]',
		ru: 'важность',
		ru_example: 'Конечно, я осознаю важность этих событий',
		en_example: 'Certainly, I realise the importance of these events'
	},
	{
		en: 'marriage',
		tr: '[ˈmærɪʤ]',
		ru: 'брак, бракосочетание',
		ru_example: 'Когда у вас бракосочетание?',
		en_example: 'When are you getting married?'
	},
	{
		en: 'sight',
		tr: '[saɪt]',
		ru: 'зрение',
		ru_example: 'Ты веришь в любовь с первого взгляда?',
		en_example: 'Do you believe in love at first sight?'
	},
	{
		en: 'skiing',
		tr: '[ˈskiːɪŋ]',
		ru: 'катание на лыжах',
		ru_example: 'Его хобби − это езда на велосипеде, дайвинг и катание на лыжах',
		en_example: 'His hobbies − are cycling, diving and skiing'
	},
	{
		en: 'poverty',
		tr: '[ˈpɒvəti]',
		ru: 'бедность',
		ru_example: 'Так много людей живут в бедности',
		en_example: 'So many people live in poverty'
	},
	{
		en: 'opportunity',
		tr: '[ˌɒpəˈʧuːnəti]',
		ru: 'возможность',
		ru_example: 'У меня есть уникальная возможность выучить английский язык здесь',
		en_example: 'I have a unique opportunity to learn English here'
	},
	{
		en: 'case',
		tr: '[keɪs]',
		ru: 'случай',
		ru_example: 'Что ты будешь делать в этом случае?',
		en_example: 'What will you do in this case?'
	},
	{
		en: 'pocket',
		tr: '[ˈpɒkɪt]',
		ru: 'карман',
		ru_example: 'Это вещь была в моем кармане',
		en_example: 'This thing was in my pocket'
	},
	{
		en: 'hope*',
		tr: '[həʊp]',
		ru: 'надежда',
		ru_example: 'Надежда умирает последней',
		en_example: 'Hope is the last to die'
	},
	{
		en: 'breath',
		tr: '[breθ]',
		ru: 'дыхание',
		ru_example: 'У него неприятный запах изо рта',
		en_example: 'He has bad breath'
	},
	{
		en: 'shape',
		tr: '[ʃeɪp]',
		ru: 'форма, вид, фигура',
		ru_example: 'Ты пойдёшь в спортзал, чтобы попытаться быть в хорошей форме?',
		en_example: 'Will you go to the gym to try be in good shape?'
	},
	{
		en: 'graduate*',
		tr: '[ˈɡræʤuət]',
		ru: 'выпускник',
		ru_example: 'Выпускники были очень довольны',
		en_example: 'The graduates were very pleased'
	},
	{
		en: 'care*',
		tr: '[keə]',
		ru: 'забота',
		ru_example: 'Его забота помогла мне',
		en_example: 'His care helped me'
	},
	{
		en: 'belt',
		tr: '[belt]',
		ru: 'ремень',
		ru_example: 'Пристегните ремень безопасности',
		en_example: 'Fasten your seat belt'
	},
	{
		en: 'violin',
		tr: '[ˌvaɪəˈlɪn]',
		ru: 'скрипка',
		ru_example: 'Он хорошо играет на скрипке',
		en_example: 'He plays the violin well'
	},

	{
		en: 'government',
		tr: '[ˈɡʌvᵊnmənt]',
		ru: 'правительство',
		ru_example: 'Наше правительство должно контролировать это',
		en_example: 'Our government should control it'
	},
	{
		en: 'piece',
		tr: '[piːs]',
		ru: 'кусок',
		ru_example: 'Она разрезала это на два куска',
		en_example: 'She cut in into two pieces'
	},
	{
		en: 'anniversary',
		tr: '[ˌænɪˈvɜːsᵊri]',
		ru: 'годовщина, юбилей',
		ru_example: 'Мы будет отмечать нашу годовщину завтра',
		en_example: 'We will celebrate our anniversary tomorrow'
	},
	{
		en: 'purse',
		tr: '[pɜːs]',
		ru: 'кошелёк',
		ru_example: 'Я потеряла кошёлек',
		en_example: 'I lost my purse'
	},
	{
		en: 'resolve*',
		tr: '[rɪˈzɒlv]',
		ru: 'решимость, решение',
		ru_example: 'Его решимость поразила меня',
		en_example: 'His resolve amazed me'
	},
	{
		en: 'department',
		tr: '[dɪˈpɑːtmənt]',
		ru: 'отдел',
		ru_example: 'Он работает в другом отделе',
		en_example: 'He works in another department'
	},
	{
		en: 'housework',
		tr: '[ˈhaʊswɜːk]',
		ru: 'работа по дому',
		ru_example: 'Она делала работу по дому?',
		en_example: 'Did she do housework?'
	},
	{
		en: 'purpose',
		tr: '[ˈpɜːrpəs]',
		ru: 'цель',
		ru_example: 'Это была благородная цель',
		en_example: 'It was a noble purpose'
	},
	{
		en: 'to earn',
		tr: '[ɜːrn]',
		ru: 'зарабатывать',
		ru_example: 'Ему удалось заработать эту сумму денег',
		en_example: 'He succeeded in earning that sum of money'
	},

	{
		en: 'to worry',
		tr: '[ˈwɜːrɪ]',
		ru: 'волноваться, беспокоиться',
		ru_example: 'Не беспокойся по этому поводу',
		en_example: `Don't worry about it`
	},

	{
		en: 'to accept',
		tr: '[əkˈsept]',
		ru: 'принимать',
		ru_example: 'Они с большим удовольствием приняли моё предложение',
		en_example: 'They accepted my offer with great pleasure'
	},
	{
		en: 'to advance',
		tr: '[ədˈvɑːns]',
		ru: 'продвигать',
		ru_example: 'Он продвигал опасные идеи',
		en_example: 'He advanced dangerous ideas'
	},
	{
		en: 'to appear',
		tr: '[əˈpɪə]',
		ru: 'появляться',
		ru_example: 'Он внезапно здесь появился',
		en_example: 'He appeared suddenly here'
	},
	{
		en: 'to appreciate',
		tr: '[əˈpriːʃieɪt]',
		ru: 'ценить',
		ru_example: 'Мы действительно ценим твою помощь',
		en_example: 'We really appreciate your help'
	},
	{
		en: 'to attend',
		tr: '[əˈtend]',
		ru: 'посещать',
		ru_example: 'Ты будешь посещать те курсы?',
		en_example: 'Will you attend those courses?'
	},
	{
		en: 'to attract',
		tr: '[əˈtrækt]',
		ru: 'привлекать',
		ru_example: 'Это не привлекло внимание людей в начале',
		en_example: "It didn't attract people's attention in the beginning"
	},
	{
		en: 'to breathe',
		tr: '[briːð]',
		ru: 'дышать',
		ru_example: 'Мне нужно гулять в парке чаще, потому что я могу дышать там свежим воздухом',
		en_example: 'I need to walk in the park more often because I can breathe fresh air there'
	},
	{
		en: 'to broaden',
		tr: '[ˈbrɔːdᵊn]',
		ru: 'расширять, расширяться',
		ru_example: 'Она говорит, что ей действительно нравится путешествовать, и она также часто добавляет, что это расширяет её кругозор',
		en_example: 'She says that she really like travelling and she also often adds that it broadens her horizons '
	},
	{
		en: 'to care*',
		tr: '[keə]',
		ru: 'заботиться',
		ru_example: 'Кого это волнует?',
		en_example: 'Who cares about it?'
	},
	{
		en: 'to carry*',
		tr: '[ˈkæri]',
		ru: 'нести [что-то в руках]',
		ru_example: 'Он каждый день носит её сумку',
		en_example: 'He carries her bag every day'
	},
	{
		en: 'to collect',
		tr: '[kəˈlɛkt]',
		ru: 'коллекционировать, собирать; собираться',
		ru_example: '1)Он собирал марки <br> 2)Около минуты я собирался с мыслями',
		en_example: '1)He collected stamps <br> 2)I took a minute to collect my thoughts'
	},
	{

		en: 'to communicate',
		tr: '[kəˈmjuːnɪkeɪt]',
		ru: 'общаться',
		ru_example: 'Я хотел общаться с иностранцами',
		en_example: 'I wanted to communicate with foreigners'
	},
	{
		en: 'to complain [about]',
		tr: '[kəmˈpleɪn]',
		ru: 'жаловаться [на что-то]',
		ru_example: 'Он говорит, он не будет жаловаться на эту вещь',
		en_example: "He says he won't complain about this thing"
	},
	{
		en: 'to complete*',
		tr: '[kəmˈpliːt]',
		ru: 'завершать',
		ru_example: 'Нам нужно завершить начатое',
		en_example: 'We need to complete what we started'
	},
	{
		en: 'to concentrate [on]',
		tr: '[ˈkɒnsəntreɪt]',
		ru: '(сконцентрироваться, сосредоточиться) [на чём-то]',
		ru_example: 'Мы можем сосредоточиться на этой проблеме',
		en_example: 'We can concentrate on this problem'
	},
	{
		en: 'to confirm',
		tr: '[kənˈfɜːm]',
		ru: 'подтверждать',
		ru_example: 'Когда ты подтвердишь нашу встречу?',
		en_example: 'When will you confirm our meeting?'
	},
	{
		en: 'to consider',
		tr: '[kənˈsɪdə]',
		ru: 'рассматривать, считать [иметь мнение]',
		ru_example: 'Мои одногруппники не считают это очень важным',
		en_example: "My classmates doesn't consider it very important"
	},
	{
		en: 'to discover',
		tr: '[dɪˈskʌvə]',
		ru: 'обнаружить',
		ru_example: 'Я обнаружил несколько новых слов в этом тексте',
		en_example: 'I discovered some new words in this text'
	},
	{
		en: 'to divorce*',
		tr: '[dɪˈvɔːs]',
		ru: 'разводиться',
		ru_example: 'Когда он разведётся?',
		en_example: 'When will he get divorced?'
	},
	{
		en: 'to dress*',
		tr: '[dres]',
		ru: 'одевать',
		ru_example: 'Я быстро оделся',
		en_example: 'I dressed quickly'
	},

	{
		en: 'to exist',
		tr: '[ɪɡˈzɪst]',
		ru: 'существовать',
		ru_example: 'Большинство людей чувствуют, что Бог действительно существует',
		en_example: 'Most people feel that God really exists'
	},
	{
		en: 'to expect',
		tr: '[ɪkˈspekt]',
		ru: 'ожидать',
		ru_example: 'Что ты ожидаешь от него?',
		en_example: 'What do you expect from him?'
	},
	{
		en: 'to experience*',
		tr: '[ɪkˈspɪəriəns]',
		ru: 'испытывать',
		ru_example: 'Он испытал меня',
		en_example: 'He experienced me'
	},
	{
		en: 'to explain',
		tr: '[ɪkˈspleɪn]',
		ru: 'объяснять',
		ru_example: 'Эксперт это не объясняет',
		en_example: "The expert doesn't explain it"
	},
	{
		en: 'to express*',
		tr: '[ɪkˈspres]',
		ru: 'выражать, высказывать',
		ru_example: 'Позволь мне высказать свою точку зрения',
		en_example: 'Let me express my point of view'
	},
	{
		en: 'to fill*',
		tr: '[fɪl]',
		ru: 'заполнять',
		ru_example: 'Мне нужно заполнить пробелы сейчас',
		en_example: 'I need to fill in the gaps now'
	},
	{
		en: 'to frighten',
		tr: '[ˈfraɪtᵊn]',
		ru: 'пугать',
		ru_example: 'Те условия действительно пугали его',
		en_example: 'Those conditions really frightend him'
	},
	{
		en: 'to guess*',
		tr: '[ɡes]',
		ru: 'предполагать; угадывать',
		ru_example: 'Я угадал этот ответ',
		en_example: 'I guessed this answer'
	},
	{
		en: 'to hurry',
		tr: '[ˈhʌri]',
		ru: 'торопить, торопиться',
		ru_example: 'Я поспешил, чтобы не опоздать на этот автобус',
		en_example: 'I hurried up to not to miss this bus'
	},
	{
		en: 'to suit*',
		tr: '[suːt]',
		ru: 'подходить',
		ru_example: 'Эти вещи не подходят ему',
		en_example: "These things don't suit him"
	},

	{
		en: 'to imagine',
		tr: '[ɪˈmæʤɪn]',
		ru: 'вообразить, представить',
		ru_example: 'Я не могу представить свою жизнь без спорта',
		en_example: "I can't imagine my life without sport"
	},
	{
		en: 'to impress*',
		tr: '[ˈɪmprɛs]',
		ru: 'впечатлять',
		ru_example: 'Представление действительно впечатлило меня',
		en_example: 'The performance really impressed me'
	},
	{
		en: 'to inspire',
		tr: '[ɪnˈspaɪə]',
		ru: 'вдохновлять, внушать',
		ru_example: 'Этот пример действительно вдохновляет тебя?',
		en_example: 'Does this example really inspire you?'
	},
	{
		en: 'to interrupt',
		tr: '[ˌɪntəˈrʌpt]',
		ru: 'прерывать, перебивать',
		ru_example: 'Дети слишком часто его перебивают',
		en_example: 'The kids interrupt him too often'
	},
	{
		en: 'to introduce',
		tr: '[ˌɪntrəˈʤuːs]',
		ru: 'представлять [в смысле знакомить]',
		ru_example: 'Она представила нам своего мужа',
		en_example: 'She introduced her husband to us'
	},
	{
		en: 'to matter*',
		tr: '[ˈmætə]',
		ru: 'иметь значение',
		ru_example: 'Мне кажется, что эта вещь действительно не имеет значения',
		en_example: "It seems to me that this thing doesn't really matter"
	},
	{
		en: 'to measure*',
		tr: '[ˈmɛʒə]',
		ru: 'измерять',
		ru_example: 'Мы измерили температуру воды',
		en_example: 'We measured the water temperature'
	},
	{
		en: 'to mention*',
		tr: '[ˈmɛnʃᵊn]',
		ru: 'упоминать',
		ru_example: 'Я должен упомянуть это во время этого разговора',
		en_example: 'I must mention it during this coversation'
	},
	{
		en: 'to miss*',
		tr: '[mɪs]',
		ru: 'скучать; пропускать; упускать',
		ru_example: '1)Я буду скучать по тебе <br> 2)Я пропустил этот фильм <br> 3)Я упустил мой шанс',
		en_example: "1)I'll miss you <br> 2)I missed that movie <br> 3)I missed my chance"
	},
	{
		en: 'to notice*',
		tr: '[ˈnəʊtɪs]',
		ru: 'замечать',
		ru_example: 'Ты заметил это в начале разговора?',
		en_example: 'Did you notice it at the beginning of the conversation?'
	},

	{
		en: 'to offer*',
		tr: '[ˈɒfə]',
		ru: 'предлагать',
		ru_example: 'Он предложил мне сделать это',
		en_example: 'He offered to let me do it'
	},
	{
		en: 'to overpay',
		tr: '[ˌəʊvəˈpeɪ]',
		ru: 'переплачивать',
		ru_example: 'Мои родители не хотят переплачивать за это',
		en_example: "My parents don't want to overpay for it"
	},
	{
		en: 'to own*',
		tr: '[əʊn]',
		ru: 'владеть',
		ru_example: 'Кто владеет этой виллой? ',
		en_example: 'Who owns this villa?'
	},
	{
		en: 'to paint*',
		tr: '[peɪnt]',
		ru: 'красить',
		ru_example: 'Я покрасил забор',
		en_example: 'I painted the fence'
	},
	{
		en: 'to participate',
		tr: '[pɑːˈtɪsɪpeɪt]',
		ru: 'участвовать',
		ru_example: 'Он не будет принимать участие в этом чемпионате',
		en_example: "He won't participate in this championship"
	},
	{
		en: 'to present*',
		tr: '[prɪˈzent]',
		ru: 'дарить, вручать',
		ru_example: 'Он подарил мне это',
		en_example: 'He presented me with this'
	},
	{
		en: 'to provide',
		tr: '[prəˈvaɪd]',
		ru: 'предоставлять, обеспечивать',
		ru_example: 'Эта больница предоставляет лучший медицинский уход',
		en_example: 'This hospital provides the best medical care'
	},
	{
		en: 'to react',
		tr: '[riˈækt]',
		ru: 'реагировать',
		ru_example: 'Я не буду на это реагировать',
		en_example: "I won't react to it"
	},
	{
		en: 'to receive',
		tr: '[rɪˈsiːv]',
		ru: 'получать',
		ru_example: 'Я получил письмо от него',
		en_example: 'I received a letter from him'
	},
	{
		en: 'to record*',
		tr: '[ˈrekɔːd]',
		ru: 'записывать',
		ru_example: 'Он записывает разные видео ради забавы',
		en_example: 'He records different videos for fun'
	},

	{
		en: 'to reduce',
		tr: '[rɪˈdjuːs]',
		ru: 'сократить, уменьшить',
		ru_example: 'Они могли бы согратить расходы',
		en_example: 'They could reduce the costs'
	},
	{
		en: 'to refuse',
		tr: '[rɪˈfjuːz]',
		ru: 'отказываться',
		ru_example: 'Он отказывается брать эти деньги у меня',
		en_example: 'He refuses to take this money from me'
	},
	{
		en: 'to rent*',
		tr: '[rent]',
		ru: 'арендовать',
		ru_example: 'Мы будем арендовать эту машину?',
		en_example: 'Will we rent this car?'
	},
	{
		en: 'to require',
		tr: '[rɪˈkwaɪə]',
		ru: 'требовать',
		ru_example: 'Это требует постоянной работы',
		en_example: 'It requires constant work'
	},
	{
		en: 'to reserve*',
		tr: '[rɪˈzɜːv]',
		ru: 'резервировать',
		ru_example: 'Я зарезервировал столик у окна',
		en_example: 'I reserved a table by the window'
	},
	{
		en: 'to resolve*',
		tr: '[rɪˈzɒlv]',
		ru: 'решать, разрешить',
		ru_example: 'Он говорит, что они не смогут разрешить этот конфликт через пару дней',
		en_example: "He says that they won't be able to resolve this conflict in a couple of days"
	},
	{
		en: 'to satisfy',
		tr: '[ˈsætɪsfaɪ]',
		ru: 'удовлетворять',
		ru_example: 'Эта работа удовлетворяет тебя?',
		en_example: 'Does this job satisfy you?'
	},
	{
		en: 'to spoil',
		tr: '[spɔːɪl]',
		ru: 'портить',
		ru_example: 'Они специально всё портят?',
		en_example: 'Do they spoil everything on purpose?'
	},
	{
		en: 'to suffer',
		tr: '[ˈsʌfə]',
		ru: 'страдать',
		ru_example: 'Этот мужчина страдает от депрессии?',
		en_example: 'Does this man suffer from depression?'
	},
	{
		en: 'to supply*',
		tr: '[səˈplaɪ]',
		ru: 'поставлять',
		ru_example: 'Мы можем поставлять товары из нашего главного магазина',
		en_example: 'We can supply items from our main store'
	},

	{
		en: 'to translate',
		tr: '[trænzˈleɪt]',
		ru: 'переводить',
		ru_example: 'Мне нужно перевести этот текст',
		en_example: 'I need to translate this text'
	},
	{
		en: 'to trip*',
		tr: '[trɪp]',
		ru: 'споткнуться',
		ru_example: 'Я споткнулся об эту табуретку',
		en_example: 'I tripped over this stool'
	},
	{
		en: 'to type*',
		tr: '[taɪp]',
		ru: 'печатать',
		ru_example: 'Он очень быстро набрал текст',
		en_example: 'He typed very quickly'
	},
	{
		en: 'to warm*',
		tr: '[wɔːm]',
		ru: 'согреть',
		ru_example: 'Одеяло согреет вас',
		en_example: 'The blanket will warm you'
	},
	{
		en: 'to increase',
		tr: '[ˈɪnkriːs]',
		ru: 'увеличивать',
		ru_example: 'Каждый год цены на проживание растут',
		en_example: 'Every year, accommodation prices increase'
	},

	{
		en: 'at last / finally',
		ru: 'наконец',
		ru_example: 'Он наконец сдал этот экзамен',
		en_example: '1)He passed this exam at last<br>2)He finally passed this exam',
		tr: '[ət] [lɑːst] / [ˈfaɪnᵊli]'
	},
	{
		en: 'mostly / mainly',
		ru: 'в основном',
		ru_example: 'Я в основном учу английский для удовольствия',
		en_example: 'I mostly / mainly learn English for pleasure',
		tr: '[ˈməʊstli] / [ˈmeɪnli]'
	},
	{
		en: 'certainly / of course',
		ru: 'конечно',
		ru_example: 'Конечно, ты можешь сделать это',
		en_example: 'Certainly, you can do it',
		tr: '[ˈsɜːtᵊnli] / [əv] [kɔːs]'
	},
	{
		en: 'opinion',
		ru: 'мнение',
		ru_example: 'общественное мнение',
		en_example: 'public opinion',
		tr: '[əˈpɪnjən]'
	},
	{
		en: 'desk',
		ru: 'письменный стол',
		ru_example: '',
		en_example: '',
		tr: ''
	},
	{ en: 'bright', ru: 'яркий', ru_example: '', en_example: '', tr: '' },
	{
		en: 'maybe / perhaps',
		ru: 'возможно',
		ru_example: 'Возможно, я ему позвоню',
		en_example: "Maybe/Perhaps I'll call him",
		tr: '[ˈmeɪbɪ] / [pəˈhæps]'
	},
	{
		en: 'several',
		ru: 'несколько',
		ru_example: 'несколько раз',
		en_example: 'several times',
		tr: '[ˈsɛvᵊrᵊl]'
	},
	{
		en: 'afternoon',
		ru: 'полдень',
		ru_example: '',
		en_example: '',
		tr: '[ˌɑːftəˈnuːn]'
	},
	{
		en: 'church',
		ru: 'церковь',
		ru_example: 'Красивая церковь',
		en_example: 'Beautiful church',
		tr: '[ʧɜːʧ]'
	},
	{
		en: 'to realize',
		ru: 'понимать, осознавать',
		ru_example: '',
		en_example: '',
		tr: '[ˈrɪəlaɪz]'
	},
]

const A0_A1 = IR.concat(PH.concat(PV.concat(W)))

export {
	A0_A1
}