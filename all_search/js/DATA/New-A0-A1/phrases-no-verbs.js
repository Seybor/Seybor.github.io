const PHRASES_NO_VERBS = [
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
	}
]


export default PHRASES_NO_VERBS
