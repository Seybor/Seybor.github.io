const NOUNS = [
	[
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
		}
	],
	[
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
			en_example: '2)We are on the fifth floor <br>This box lies on the floor'
		},
		{
			en: 'customer',
			tr: '[ˈkʌstəmə]',
			ru: 'покупатель, клиент',
			ru_example: 'Она имела дело с покупателями',
			en_example: 'She dealt with customers'
		}
	],
	[
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
		}
	],
	[
		{
			en: 'increase*',
			tr: '[ˈɪnkriːs]',
			ru: 'увеличение',
			ru_example: 'Каждый год цены на проживание растут',
			en_example: 'Every year, accommodation prices increase'
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
			en: 'impress*',
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
		}
	],
	[
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
		}
	],
	[
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
		}
	],
	[
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
		}
	],
	[
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
			en: 'midday / noon',
			tr: '[ˈmɪddeɪ] / [nuːn]',
			ru: 'полдень',
			ru_example: 'Она прибыла в Лондон в полдень',
			en_example: 'She arrived in London at midday / noon'
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
		}
	],
	[
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
		}
	],
	[
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
		}
	],
	[
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
		}
	]
]

export default NOUNS