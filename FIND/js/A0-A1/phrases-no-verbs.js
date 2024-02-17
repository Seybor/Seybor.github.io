const PHRASES_NO_VERBS = [

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
	},
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
	},
	{
		en: 'the day before yesterday',
		ru: 'позавчера',
		ru_example: 'Позавчера было тепло',
		en_example: 'It was warm the day before yesterday'
	},
	{
		en: 'the day after tomorrow',
		ru: 'послезавтра',
		ru_example: 'Послезавтра будет холодно',
		en_example: "The day after tomorrow, it's going to be cold"
	},
	{
		en: 'country house',
		ru: 'загородный дом',
		ru_example: 'Я живу в загородном доме',
		en_example: 'I live in a country house'
	},
	{
		en: 'at all',
		ru: 'вовсе, совсем',
		ru_example: 'Я совсем не устал',
		en_example: "I'm not tired at all"
	},
	{
		en: 'work experience',
		ru: 'опыт работы',
		ru_example: 'Какой у вас опыт работы?',
		en_example: 'What is your work experience?'
	},
	{
		en: 'first of all',
		ru: 'прежде всего,  в первую очередь',
		ru_example: 'Нам нужно сделать это прежде всего ',
		en_example: 'We need to do that first of all'
	},
	{
		en: 'from time to time',
		ru: 'время от времени',
		ru_example: 'Я навещаю его время от времени ',
		en_example: 'I visit him from time to time '
	},
	{
		en: 'English learners',
		ru: 'изучающие английский(также для других языков)',
		ru_example: 'Изучающие английский как правило преуспевают в жизни',
		en_example: 'English learners tend to succeed in life'
	},
	{
		en: 'solution to + существительное',
		ru: 'решение чего-то(какой-то проблемы)',
		ru_example: 'Решение этой проблемы было очень эффективным',
		en_example: 'The solution to this problem has been very effective'
	},
	{
		en: 'a waste of time/money',
		ru: 'пустая трата времени/денег',
		ru_example: 'Всё что я делаю это пустая трата времени',
		en_example: 'Everything I do is a waste of time'
	},
	{
		en: 'human rights',
		ru: 'права человека',
		ru_example: 'Права человека это главное достижение западной цивилизации',
		en_example: 'Human rights are the main achievement of Western civilization'
	},
	{
		en: 'the memory of someone',
		ru: 'память о ком-то',
		ru_example: 'Память о нём всё ещё жива во мне',
		en_example: 'The memory of him is still alive in me'
	},
	{
		en: 'half an hour',
		ru: 'полчаса',
		ru_example: 'До встречи осталось полчаса',
		en_example: "We're half an hour away from the meeting"
	},
	{
		en: 'all of us/them',
		ru: 'всех нас/их',
		ru_example: 'Всех нас хотят убить',
		en_example: 'They want to kill all of us'
	},
	{
		en: 'on sale',
		ru: 'по распродаже',
		ru_example: 'Этот айфон продаётся по распродаже',
		en_example: 'This iPhone is on sale'
	},
	{
		en: 'sense of humour/humor',
		ru: 'чувство юмора',
		ru_example: 'У тебя отличное чувство юмора',
		en_example: 'You have a great sense of humor'
	},
	{
		en: 'as always/usual',
		ru: 'как всегда, как обычно',
		ru_example: 'Ты как всегда неправ',
		en_example: "You're wrong as always"
	},
	{
		en: 'noun + number',
		ru: 'номер чего-то',
		ru_example: 'Назовите номер телефона',
		en_example: 'Give me the phone number'
	},
	{
		en: 'useful for/to + местоимение',
		ru: 'для кого-то/полезно кому-то',
		ru_example: 'Это полезно тебе',
		en_example: "It's useful to you"
	},
	{
		en: 'sure about',
		ru: 'уверен в',
		ru_example: 'Я в этом абсолютно уверен',
		en_example: "I'm pretty sure about it"
	},
	{
		en: 'for hours',
		ru: 'часами, в течение нескольких часов',
		ru_example: 'Я могу говорить об этом часами',
		en_example: 'I could talk about it for hours'
	},
	{
		en: 'way of life',
		ru: 'образ жизни(как аналог слова lifestyle)',
		ru_example: 'Твой образ жизни приведёт тебя в тюрьму',
		en_example: 'Your way of life will land you in jail'
	},
	{
		en: 'mother tongue',
		ru: 'родной язык',
		ru_example: 'Какой твой родной язык?',
		en_example: 'What is your mother tongue?'
	},
	{
		en: 'on the left/right',
		ru: 'слева/справа',
		ru_example: 'Опасность слева',
		en_example: 'Danger on the left'
	},
	{
		en: 'on purpose',
		ru: 'специально, намеренно',
		ru_example: 'Ты специально меня провоцируешь',
		en_example: "You're provoking me on purpose"
	},
	{
		en: 'the latest',
		ru: 'последний',
		ru_example: 'Это последняя модель смартфона',
		en_example: 'This is the latest smartphone model'
	},
	{
		en: 'overcrowded with',
		ru: 'переполнен чем-то',
		ru_example: 'Улица переполнена машинами',
		en_example: 'The street is overcrowded with cars'
	},
	{
		en: 'as soon as possible',
		ru: 'как можно скорее',
		ru_example: 'Сделай это как можно скорее',
		en_example: 'Do it as soon as possible'
	},
	{
		en: 'on foot',
		ru: 'пешком',
		ru_example: 'Я пешком пойду до дома',
		en_example: "I'll walk on foot home"
	},
	{
		en: 'in front of',
		ru: 'спереди, напротив',
		ru_example: 'Это здание напротив тебя',
		en_example: "It's the building in front of you"
	},
	{
		en: 'in other words',
		ru: 'другими словами',
		ru_example: 'Другими словами, ты проиграл',
		en_example: 'In other words, you lost'
	},
	{
		en: 'the main + существительное',
		ru: 'главное что-то',
		ru_example: 'Это главный храм в городе',
		en_example: 'This is the main temple in the city'
	},
	{
		en: 'answer to',
		ru: 'ответ на что-то',
		ru_example: 'Ответ на этот вопрос оказался правильным',
		en_example: 'The answer to that question turned out to be correct'
	},
	{
		en: 'confident enough',
		ru: 'достаточно уверенно',
		ru_example: 'Я достаточно уверен в этом',
		en_example: "I'm confident enough about it"
	},
	{
		en: 'in + местоимение + free time',
		ru: 'в чьё-то свободное время',
		ru_example: 'В моё свободное время я читаю книги',
		en_example: 'In my free time, I read books'
	},
	{
		en: 'for a start',
		ru: 'для начала',
		ru_example: 'Давайте прогуляемся для начала',
		en_example: "Let's take a walk for a start"
	},
	{
		en: 'at present/at the present time',
		ru: 'в настоящее время',
		ru_example: 'В настоящее время это место пустует',
		en_example: 'At the present time, the place is empty'
	},
	{
		en: 'on + my/your + own',
		ru: 'самостоятельно',
		ru_example: 'Я самостоятельно выучил английский',
		en_example: 'I learned English on my own'
	},
	{
		en: 'the voice of your heart',
		ru: 'голос твоего сердца',
		ru_example: 'Слушай голос твоего сердца',
		en_example: 'Listen to the voice of your heart'
	},
	{
		en: 'all this/that',
		ru: 'все это',
		ru_example: 'Зачем всё это?',
		en_example: "What's all this for?"
	},
	{
		en: 'at first sight',
		ru: 'с первого взгляда',
		ru_example: 'Я влюбился в тебя с первого взгляда',
		en_example: 'I fell in love with you at first sight'
	},
	{
		en: 'all the best',
		ru: 'всего самого лучшего',
		ru_example: 'Я желаю тебе всего самого лучшего',
		en_example: 'I wish you all the best'
	},
	{
		en: 'the right way',
		ru: 'правильный путь',
		ru_example: 'Нужно выбрать правильный путь',
		en_example: 'We need to choose the right way'
	},
	{
		en: 'in public',
		ru: 'на публике, на людях',
		ru_example: 'На людях он такой тихий',
		en_example: "He's so quiet in public"
	},
	{
		en: 'full of',
		ru: 'полон чего-то',
		ru_example: 'Это здание полно тараканов',
		en_example: 'This building is full of cockroaches'
	},
	{
		en: 'in about',
		ru: 'примерно через',
		ru_example: "I'll be out in about an hour",
		en_example: 'Я выйду примерно через час'
	},
	{
		en: 'for free',
		ru: 'бесплатно',
		ru_example: 'Этот телефон вы можете получить совершенно бесплатно',
		en_example: 'You can get this phone for free'
	},
	{
		en: 'because of',
		ru: 'из-за',
		ru_example: 'Всё из-за тебя',
		en_example: "It's all because of you"
	},
	{
		en: 'more often',
		ru: 'чаще',
		ru_example: 'Чаще занимайся',
		en_example: 'Study more often'
	},
	{
		en: 'less often',
		ru: 'реже',
		ru_example: 'Реже смотри телевизор',
		en_example: 'Watch TV less often'
	},
	{
		en: 'at once',
		ru: 'сразу',
		ru_example: 'Бей его сразу',
		en_example: 'Hit him at once'
	},
	{
		en: "someone's",
		ru: 'чей-то',
		ru_example: 'Это чей-то телефон',
		en_example: "It's someone's cell phone"
	},
	{
		en: 'not a long time ago / not so long ago',
		ru: 'Не так давно',
		ru_example: 'Не так давно я был студентом',
		en_example: 'Not so long ago, I was a student'
	},
	{
		en: 'a speedy recovery',
		ru: 'скорейшего выздоровления',
		ru_example: 'Я желаю тебе скорейшего выздоровления',
		en_example: 'I wish you a speedy recovery'
	},
	{
		en: 'for the first time',
		ru: 'впервые, в первый раз',
		ru_example: 'Впервые в жизни я так счастлив',
		en_example: "For the first time in my life, I'm so happy"
	},
	{
		en: 'all of a sudden',
		ru: 'внезапно, вдруг, неожиданно',
		ru_example: 'Он так внезапно вернулся',
		en_example: 'He came back so all of a sudden'
	},
	{
		en: 'for other purposes',
		ru: 'для других целей',
		ru_example: 'Это нужно для других целей',
		en_example: "It's needed for other purposes"
	},
	{
		en: 'for no reason ',
		ru: 'без причины',
		ru_example: 'Он без причины меня оскорбил',
		en_example: 'He insulted me for no reason'
	},
	{
		en: 'fully satisfied with',
		ru: 'полностью удовлетворён чем-то',
		ru_example: 'Ты был полностью удовлетворён этим решением?',
		en_example: 'Were you fully satisfied with that decision?'
	},
	{
		en: 'in advance',
		ru: 'заранее',
		ru_example: 'Я заранее готовлюсь к свиданию',
		en_example: "I'm getting ready for a date in advance"
	},
	{
		en: 'at the age of + number',
		ru: 'в возрасте стольких-то лет',
		ru_example: 'Он скончался в возрасте двадцати лет',
		en_example: 'He passed away at the age of twenty'
	},
	{
		en: 'pronoun + horizons',
		ru: 'чей-то кругозор (horizons во множественном числе)',
		ru_example: 'Это расширяет мой кругозор',
		en_example: 'It broadens my horizons'
	},
	{
		en: 'a little later',
		ru: 'немного позже',
		ru_example: 'Давай немного позже поиграем, я занят',
		en_example: "Let's play a little later, I'm busy"
	},
	{
		en: 'at the end of the week',
		ru: 'в конце недели',
		ru_example: 'Я сдам тест в конце недели',
		en_example: "I'm taking the test at the end of the week"
	},
	{
		en: 'in good shape',
		ru: 'в хорошей форме',
		ru_example: 'Ты в хорошей форме',
		en_example: "You're in good shape"
	},
	{
		en: 'complete bargain',
		ru: 'очень выгодная сделка',
		ru_example: 'Это будет очень выгодная сделка?',
		en_example: 'Will it be a complete bargain?'
	},
	{
		en: 'the last bargain',
		ru: 'последняя выгодная сделка',
		ru_example: 'Это ваша последняя выгодная сделка',
		en_example: 'This is your last bargain'
	},
	{
		en: 'obvious to',
		ru: 'очевидно для',
		ru_example: 'Для меня это очевидно',
		en_example: "It's obvious to me"
	},
	{
		en: 'at the same time',
		ru: 'в то же самое время, одновременно',
		ru_example: 'Они сделали это одновременно',
		en_example: 'They did it at the same time'
	},
	{
		en: 'as much as possible',
		ru: 'настолько, насколько это возможно',
		ru_example: 'Ты должен стараться настолько, насколько это возможно',
		en_example: 'You have to try as much as possible'
	},



]



export default PHRASES_NO_VERBS

