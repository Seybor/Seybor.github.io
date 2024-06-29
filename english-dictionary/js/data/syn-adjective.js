let adjective = [
  {
    ru: 'гордый',
    en: ['proud', 'arrogant', 'conceited'],
    desc: [
      'proud - общий термин, в позитивном контексте',
      'arrogant - гордый, высокомерный (в негативном контексте)',
      'conceited - тщеславный'
    ],
    ex: [
      "I've never been more proud - Я никогда не был более горд",
      'I have never met such an arrogant man - Я никогда не встречала такого надменного человека',
      'They are less conceited, and more teachable - Они менее тщеславны и более способны к обучению',
      ''
    ]
  },
  {
    ru: 'тихий',
    en: [
      'quiet',
      'silent',
      'noiseless',
      'inaudible [ɪnˈɔːdəbl]',
      'peaceful'
    ],
    desc: [
      'quiet - когда очень мало шума',
      'silent - молчаливый, беззвучный',
      'noiseless - бесшумный',
      'inaudible - неслышный',
      'uncommunicative [ˌʌnkəˈmjuːnɪkətɪv] - некоммуникабельный'
    ],
    ex: [
      'The kitchen overlooks a quiet courtyard - Из окон кухни можно увидеть тихий дворик',
      'Abstentions are then treated as silent consent - В данном случае бездействие воспринимается как молчаливый отказ',
      'This is a noiseless and effective method of heating any premises - Это эффективный и бесшумный способ обогрева любых помещений',
      'The beep is virtually inaudible, even in a quiet room - Шум от системы охлаждения практически неслышный даже в тихой комнате',
      'For Head of Communications, he was an extremely uncommunicative man - Для человека, отвечающего за связь, он был чертовски необщителен',
      ''
    ]
  },
  {
    ru: 'грустный',
    en: ['sad', 'unhappy', 'miserable', 'depressed', 'fed up'],
    desc: [
      'sad - общий термин',
      'unhappy - несчастный',
      'miserable - несчастный, жалкий, убогий',
      'depressed - подавленный',
      'fed up - (неформальный) сыт по горло'
    ],
    ex: [
      'It was a very sad story - Это была очень грустная история',
      'I hate to see you unhappy - Мне больно видеть, что ты несчастна',
      "He's a miserable old devil - Он несчастный старый бедняга",
      'He began to feel depressed and helpless - Он начал чувствовать себя подавленным и беспомощным',
      "I'm fed up with this job - Я сыт по горло этой работой",
      ''
    ]
  },
  {
    ru: 'маленький',
    en: [
      'small',
      'little',
      'tiny',
      'minute',
      'miniature',
      'microscopic [ˌmaɪkrəˈskɑːpɪk]'
    ],
    desc: [
      'small - небольшой в количестве или размере',
      'little - несет в себе положительную оценку и обыкновенно используется в сочетаниях с еще одним оценочным прилагательным',
      'tiny - очень маленький',
      'minute - мельчайший',
      'miniature - миниатюрный',
      'microscopic - микроскопический'
    ],
    ex: [
      'They live in a small house - Они живут в небольшом домике',
      'But this little baby surprised me - Но этот маленький мальчик удивил меня',
      'Their tiny tongues are like knives - Их крошечные языки похожи на ножи',
      'A minute particle of dust got in his eye - Маленькая пылинка попала ему в глаз',
      "She's her mother in miniature - Она — миниатюрная копия матери",
      'The seeds are microscopically small - Эти семена микроскопически малы',
      ''
    ]
  },
  {
    ru: 'глупый',
    en: ['stupid', 'silly', 'foolish', 'irresponsible', 'senseless'],
    desc: [
      'stupid - общий термин',
      'silly - глупый (с негативных контекстом)',
      'foolish - дурацкий',
      'irresponsible - ',
      'senseless - '
    ],
    ex: [
      "That's a really stupid question - А вот это очень глупый вопрос",
      'You made a lot of silly mistakes - Ты сделал много глупых ошибок',
      "Don't be such a foolish woman; sit down and take a grip on yourself! - Не будь такой дурой, сядь и возьми себя в руки!",
      ''
    ]
  },
  {
    ru: 'старый',
    en: ['old', 'ancient', 'elderly', 'antique', 'old-fashioned'],
    desc: [
      'old - общий термин',
      'ancient - древний',
      'elderly - пожилой',
      'antique - античный, антикварный',
      'old-fashioned - старомодный'
    ],
    ex: [
      'My old car was always breaking down - Мой старый автомобиль постоянно ломался',
      'Ancient Troy was a great city - Древняя Троя была огромным городом',
      'Millions of elderly people live in poverty - Миллионы пожилых людей живут в нищете',
      'The value of the antique is high - Ценность этой антикварной вещи — высокая',
      'Her clothes are so old-fashioned! - Она одевается так старомодно!',
      ''
    ]
  },
  {
    ru: 'худой',
    en: ['thin', 'skinny', 'slim', 'slender'],
    desc: [
      'Thin (тонкий) - просто худой, более с негативным оттенком',
      'Skinny [ˈskɪnɪ] (тощий) - крайне худой, болезненно худой',
      'Slim (стройный) - либо несёт нейтральный оттенок, либо положительный',
      'Slender [ˈslendər] (стройный) - приятная худоба'
    ],
    ex: [
      "She's such a thin girl - Она такая худенькая девушка",
      "He's such a skinny guy - Он такой тощий парень",
      'That woman is so slim - Эта женщина такая стройная',
      'A very beautiful and slender girl - Очень красивая и стройная девушка',
      ''
    ]
  },
  {
    ru: 'хрупкий',
    en: ['fragile', 'delicate', 'breakable', 'flimsy'],
    desc: [
      'Fragile - что-то сделанное из материла, который легко разбить',
      'Delicate - что-то сделанное тонких, лёгких материалов и их легко повредить',
      'Breakable - объект, который легко сломать',
      'Flimsy - что-то непрочное, хлипкое, потому что плохо сделано'
    ],
    ex: [
      "Be careful with the dishes, they're very fragile - Осторожней с посудой, она очень хрупкая",
      "It's a very delicate fabric - Это очень нежная ткань",
      'The breakable vase was handled with care - Хрупкая ваза обрабатывалась с осторожностью',
      'The flimsy tent was blown away by the wind - Непрочный шатер был разнесен ветром',
      ''
    ]
  },
  {
    ru: 'смешной',
    en: ['funny', 'comic', 'comical', 'humorous', 'witty', 'hilarious'],
    desc: [
      'Funny - общий термин',
      'Comic - что заставляет людей смеятся, особенно во время представлений',
      'Comical (комичный) - что-то странное, но смешное',
      'Humorous - что-то смешное, но в спокойном плане, что вызывает лёгкую улыбку',
      'Witty - может относиться к чему-либо, что демонстрирует интеллектуальный юмор или остроумие',
      'Hilarious - может относиться к чему-либо, что вызывает громкий смех или неудержимое веселье'
    ],
    ex: [
      'That joke was really funny - Эта шутка была очень смешной',
      'She has a great comic timing - У нее отличное чувство комического времени',
      'The comical situation was hard to believe - В эту комичную ситуацию трудно было поверить',
      'The humorous anecdote lightened the mood. - Юмористическая история улучшила настроение',
      'She has a very witty sense of humor - У нее очень остроумное чувство юмора',
      'Her hilarious impersonation was spot on - Ее очень забавная пародия была в точку',
      ''
    ]
  },
  {
    ru: 'хороший',
    en: ['good', 'satisfactory', 'acceptable', 'excellent', 'wonderful'],
    desc: [
      'good - общий термин',
      'satisfactory - удовлетворительный',
      'acceptable - приемлемый',
      'excellent - отличный',
      'wonderful - чудесный'
    ],
    ex: [
      'She is a good teacher - Она хороший учитель',
      'The test results were satisfactory - Результаты теста были удовлетворительными',
      'The hotel room was acceptable - Комната в отеле была приемлемой',
      'The restaurant served excellent food. - Ресторан предлагал отличную еду',
      'The sunset was wonderful - Закат был чудесный',
      ''
    ]
  },
  {
    ru: 'привлекательный',
    en: [
      'good-looking',
      'attractive',
      'beautiful',
      'handsome',
      'pretty',
      'lovely'
    ],
    desc: [
      'good-looking - человек с красивой внешностью, в основном про лицо',
      'attractive - физически привлекательный, также может использоваться для абстрактных предметов',
      'beautiful - общий термин, в отношении людей используется для описания женской красоты',
      'handsome - красивый в отношении мужчин',
      'pretty - симпатичная, в отношении женщин',
      'lovely - милый, когда приятно на что-то смотреть'
    ],
    ex: [
      'He is a good-looking man - Он симпатичный мужчина',
      "It's a very attractive place - Это очень привлекательное место",
      'She is a beautiful woman. - Она красива женщина',
      'He is a handsome man - Он красивый мужчина',
      'She is a pretty woman - Она симпатичная женщина',
      'What a lovely apartment - Какая прекрасная квартира',
      ''
    ]
  },
  {
    ru: 'талантливый, одарённый',
    en: ['talented [ˈtæləntɪd]', 'gifted [ˈɡɪftɪd]'],
    desc: [
      'gifted - общий термин',
      'talented - про творческие сбособности'
    ],
    ex: [
      "He's an extremely gifted student - Это чрезвычайно одарённый ученик",
      'She is a very talented writer - Она очень талантливый писатель',
      ''
    ]
  },
  {
    ru: 'легальный',
    en: ['legal', 'licenced', 'valid', 'legitimate', 'lawful'],
    desc: [
      'legal - правой (что дозволено законом)',
      'licenced - лицензированный (владеющим официальным разрешением на что-то)',
      'valid - действительный (что можно использовать до определённого времени)',
      'legitimate - законный (что дозволено законом)',
      'lawful - законный (формалильный термин)'
    ],
    ex: [
      'What I did was perfectly legal - То, что я сделал, было абсолютно законно',
      'I am licenced tour guide in NYC with over 10 years of experience - Я лицензированный гид в Нью-Йорке с более чем 10-летним опытом работы',
      'Foreign nationals must furnish a valid passport - Иностранным гражданам следует предъявить действительный паспорт с визой',
      "That's a perfectly legitimate question - Это совершенно законный вопрос",
      'Is it lawful to hunt deer in this state? - Не запрещено ли охотиться на оленей в этом штате?',
      ''
    ]
  },
  {
    ru: 'трогательный',
    en: ['moving', 'emotional', 'pathetic', 'stirring', 'touching'],
    desc: [
      'moving - что вызывает эмоцию',
      'emotional - эмоциональный ',
      'pathetic - жалкий',
      'stirring - волнующий',
      'touching - трогательный'
    ],
    ex: [
      'It was a moving moment of real reconciliation - Это был очень трогательный момент подлинного примирения',
      'Take note of the emotional shift that occurred - Обратите внимание на эмоциональный фон случившегося',
      'It was a pathetic act of pure cowardice - Это был жалкий поступок чистейшей трусости',
      "This decree is so stirring, isn't it? - Этот указ такой волнующий, правда?",
      'Watch the video of this touching moment here - Смотрите на видео этот трогательный момент',
      ''
    ]
  },
  {
    ru: 'обнажённый',
    en: ['naked', 'bare', 'nude', 'undressed'],
    desc: [
      'naked - голый, обнажённый',
      'bare - оголённые части тела',
      'nude - голый, обнажённый (когда это не приветствуется)',
      'undressed - раздетый (например, чтобы переодеться)'
    ],
    ex: [
      'I saw her naked this morning - Я видел ее голой этим утром',
      'She looked at his pale bare feet - Он с отвращением посмотрел на свою голую ногу',
      "Personally, I'd never go nude in public - Но ведь я никогда не бываю обнаженной на публике",
      'One of the options - rest undressed on a solid bed - Один из вариантов отдых раздетым на твердой кровати',
      ''
    ]
  },
  {
    ru: 'необходимый',
    en: ['necessary', 'essential', 'vital', 'required'],
    desc: [
      'necessary - что нужно сделать',
      'essential - самый необходимый',
      'vital - жизненно необходимый',
      'required - требуемый'
    ],
    ex: [
      'It was necessary for their survival - Это было необходимо для их выживания',
      'Essential grammar in use - Необходимая грамматика в использовании',
      'It becomes for many people a vital goal - Для многих сегодня это становится жизненной целью',
      'Root element is missing required attribute - В корневом элементе отсутствует требуемый атрибут',
      ''
    ]
  },
  {
    ru: 'новый',
    en: ['new', 'novel', 'innovative', 'fresh', 'brand-new', 'original'],
    desc: [
      'new - общий термин',
      'novel - новаторский, оригинальный',
      'innovative - инновационный',
      'fresh - свежий',
      'brand-new - совершенно новый',
      'original - оригинальный'
    ],
    ex: [
      'Do you like my new dress? - Тебе нравится мое новое платье?',
      'It might not seem a novel concept - Возможно, это не похоже на новаторский план',
      'Innovative design has proven to be one of the key success factors - Одним из ключевых факторов успеха стал инновационный дизайн',
      'I need fresh air and exercise - Мне нужны свежий воздух и движение',
      'It will be secured with this brand-new lock - Она будет закрыта на этот совершенно новый замок',
      'We sell only original and quality products - Мы торгуем только оригинальной и качественной продукцией',
      ''
    ]
  },
  {
    ru: 'соседний',
    en: ['next', 'nearby', 'neighbouring - [ˈneɪbərɪŋ]', 'adjacent'],
    desc: [
      'next - ближайшее место',
      'nearby - близлежащий, который не очень далеко',
      'neighbouring - кто недалеко',
      'adjacent - смежный, примыкающий'
    ],
    ex: [
      'Marriage will at the next auspicious date - Брак состоится в ближайший благоприятный день',
      'Then my father took me to a nearby hospital - Тогда меня отвезли в близлежащий госпиталь',
      'A man came over from a neighbouring table - Человек упал с балкона на соседний стол',
      'We stayed in adjacent rooms - Мы жили в соседних номерах',
      ''
    ]
  },
  {
    ru: 'шумный',
    en: ['noisy', 'loud', 'deafening', 'piercing', 'rowdy'],
    desc: [
      'noisy - что издаёт много шума',
      'loud - громко',
      'deafening - оглушительный',
      'piercing - пронзительный',
      'rowdy - шумный, буйный'
    ],
    ex: [
      'It is quite a popular and noisy area - Это достаточно большой и шумный город',
      'He gave a loud laugh - Он громко рассмеялся',
      'The noise rose to a deafening pitch - Шум сделался оглушительным',
      'A piercing shriek cut through the silence - Тишину прорезал пронзительный крик',
      "It's a crowded, rowdy evening - Это многолюдный, шумный вечер",
      ''
    ]
  },
  {
    ru: 'периодический',
    en: ['occasional', 'periodic', 'intermittent'],
    desc: [
      'occasional - случайный, что-то случается иногда, но не очень часто',
      'periodic - периодический',
      'intermittent - прерывистый'
    ],
    ex: [
      'I see my cousins only at occasional family gatherings - Я вижу своих дальних родственников только на редких семейных встречах',
      'Is it possible to disable periodic cleaning? - Можно ли отключить периодическую очистку?',
      'The forecast is for intermittent rain - Прогноз обещает кратковременный дождь',
      ''
    ]
  },
  {
    ru: 'правильный',
    en: ['right', 'correct', 'accurate', 'exact', 'true'],
    desc: [
      'right - употребляется в контектсе правильного поступка или неправильного ',
      'correct - больше про грамотность написания',
      'accurate - точный, тщательный, правельный в мелочах и деталях',
      'exact - точный, абсолютно верный, полностью точный в каждой детали',
      'true - правда, истина, что правильно в конкретной ситуации'
    ],
    ex: [
      'You did the right thing - Вы поступили правильно',
      "It's a correct sentence - Это правильное предложение",
      'Are the figures accurate? - Являются ли цифры точными?',
      'Can you tell me the exact words she used? - Можете ли вы сказать мне, какие именно слова она использовала?',
      'What he says is simply not true - То, что он говорит, просто неправда',
      ''
    ]
  },
  {
    ru: 'трудный, тяжёлый',
    en: ['hard', 'difficult', 'heavy'],
    desc: [
      'hard - обычно описывает что-то, что требует физического усилия или является физически тяжелым, усердно ',
      'difficult - обычно описывает что-то, что требует умственного усилия или является сложным ',
      'heavy - когда говорим про вес чего-то'
    ],
    ex: [
      'This box is hard to lift - Эту коробку трудно поднять',
      'Does he study very hard? - Он учится очень усердно? ',
      'This math problem is difficult to solve - Эта математическая задача сложна для решения',
      "It's a heavy bag - Это тяжёлая сумка",
      ''
    ]
  },
  {
    ru: 'умный',
    en: ['clever', 'smart ', 'intelligent'],
    desc: [
      'clever - способный к учению и быстро схватывающий новые сведения',
      'smart - умеющий использовать всякие преимущества, оценивать и регулировать создавшуюся обстановку',
      'intelligent - обладающий умственными способностями, хорошим пониманием и умением продумывать то, что происходит'
    ],
    ex: [
      'Не was clever enough nol to answer her. — У него хватило ума не отвечать ей',
      'Не was the smartest student in her class. — В ее классе он был самым сообразительным/находчивым учеником',
      'Monkeys are very intelligent animals. — Обезьяны очень умные животные',
      ''
    ]
  },
  {
    ru: 'быстрый',
    en: ['fast', 'quick', 'rapid'],
    desc: [
      'fast - в большей степени относится к скорости движения',
      'quick - к действиям, происходящим за короткое время',
      'rapid - к быстрым изменениям и росту'
    ],
    ex: [
      'We are going too fast - Мы идём слишком быстро',
      'She took a quick shower - Она приняла быстрый душ',
      'The company experienced rapid growth last year - Компания показала стремительный рост в прошлом году',
      ''
    ]
  },
  {
    ru: 'благодарный',
    en: ['grateful ', 'thankful'],
    desc: [
      'grateful - более конкретно указывает на конкретное действие или услугу, за которую вы благодарите.',
      'thankful - более широко выражает благодарность за все, что есть в вашей жизни.'
    ],
    ex: [
      'I am grateful for your help - Я благодарен за вашу помощь',
      'I am thankful for my family - Я благодарен за свою семью',
      ''
    ]
  },
  {
    ru: 'полезный',
    en: ['helpful', 'useful'],
    desc: [
      'helpful - в основном про людей',
      'useful - в основом про устройства'
    ],
    ex: [
      'You are very helpful - Ты очень полезен',
      'It is a very useful device - Это очень полезное устройство',
      ''
    ]
  },
  {
    ru: 'неловкий, неуклюжий',
    en: ['awkward', 'clumsy'],
    desc: [
      'awkward - больше сосредоточен на социальных взаимодействиях или ситуациях',
      'clumsy - как правило, фокусируется на физических движениях или действиях'
    ],
    ex: [
      '',
      "The clumsy waiter dropped the hot pizza in my girlfriend's lap - Неуклюжий официант уронил горячую пиццу на колени моей девушке",
      'The awkward silence between us was palpable - Неловкое молчание между нами было ощутимым',
      ''
    ]
  },
  {
    ru: 'странный',
    en: ['strange', 'bizarre', 'wierd', 'odd'],
    desc: [
      'strange - более найтрально по смыслу ',
      'bizarre - более негативно ',
      'wierd - что-то неприятное или неловкое',
      'odd - нейтрально по смыслу'
    ],
    ex: [
      "You're a strange man - Ты странный человек ",
      'This is a very bizarre murder - Это очень странное убийство',
      "He's looking at me so weird - Он на меня так странно смотрит",
      'You have an odd way of killing people - У тебя странный способ убивать людей',
      ''
    ]
  },
  {
    ru: 'целый',
    en: ['whole', 'entire'],
    desc: [
      'whole - указывает на 100% от одного предмета',
      'entire - указывает на 100% от общего количества'
    ],
    ex: [
      'I finished reading the whole book in three days. - Я закончил читать всю книгу за три дня (100% от одной книги)',
      'I drank the entire bottle of water. - Я выпил всю бутылку воды (100% от общего количества воды в бутылке)',
      ''
    ]
  },
  {
    ru: 'уверенный',
    en: ['sure', 'confident', 'certain'],
    desc: [
      'sure - может быть более поверхностной уверенностью',
      'confident - более глубокая уверенность в своих способностях',
      'certain - абсолютная уверенность в событии или факте'
    ],
    ex: [
      "I'm sure it will rain tomorrow - Я уверен, что завтра пойдет дождь",
      "He's confident in his ability to solve the problem - Он уверен в своей способности решить проблему",
      "I'm certain that I saw the movie last week - Я уверен, что смотрел этот фильм на прошлой неделе",
      ''
    ]
  },
  {
    ru: 'неуверенный',
    en: ['unsure', 'uncertain'],
    desc: [
      'unsure - относится к личным сомнениям или неуверенности',
      'uncertain - к общей неопределенности ситуации или события'
    ],
    ex: [
      "I'm unsure about my decision to move to a new city - Я не уверен в своем решении переехать в другой город",
      'The weather forecast is uncertain for the weekend - Прогноз погоды на выходные неясен',
      ''
    ]
  },
  {
    ru: 'чистый',
    en: ['clean', 'pure', 'spotless', 'hygienic'],
    desc: [
      'clean - обозначает отсутствие грязи или загрязнений',
      'pure - обозначает отсутствие загрязнений или загрязнителей',
      'spotless - обозначает отсутствие пятен или загрязнений',
      'hygienic - обозначает состояние, когда объект или место обеспечивает здоровье и не содержит загрязнений'
    ],
    ex: [
      'The room was clean and tidy. - В комнате было чисто и аккуратно.',
      'The water was pure and natural. - Вода была чистой и природной.',
      'a bottle of pure water - бутылка чистой воды',
      'a pure mountain stream - чистый горный ручей',
      'The shirt was spotless and white. - Рубашка была чистой и белой.',
      'The hospital was hygienic and clean. - Больница была гигиеничной и чистой.',
      ''
    ]
  },
  {
    ru: 'холодный',
    en: ['cold', 'cool', 'freezing', 'frozen', 'icy'],
    desc: [
      'cold - это общее слово для описания низкой температуры',
      'cool - для описания приятной, освежающей температуры',
      'freezing - для описания очень низкой температуры, при которой вода превращается в лед',
      'frozen - для описания состояния, когда что-либо превращается в лед или твердое вещество из-за очень низкой температуры.',
      'icy - для описания поверхности, покрытой льдом или очень холодной.'
    ],
    ex: [
      "It's cold outside today. - На улице сегодня холодно.",
      'The drink was cool and refreshing. - Напиток был прохладным и освежающим.',
      'The temperature was freezing last night. - Температура была ниже нуля прошлой ночью.',
      'The lake was frozen over in winter. - Озеро замерзло зимой.',
      'The road was icy and dangerous to drive on. - Дорога была обледенелой и опасной для вождения.',
      ''
    ]
  },
  {
    ru: 'теплый',
    en: ['warm', 'hot', 'boiling'],
    desc: [
      'warm - теплый',
      'hot - жаркий',
      'boiling - кипящий, очень жаркий'
    ],
    ex: [
      "It's warm today - Сегодня тепло",
      "It's hot today - Сегодня жара",
      'boiling water - Кипящая вода',
      ''
    ]
  },
  {
    ru: 'ужасный',
    en: ['terrible', 'horrible', 'awful', 'dreadful'],
    desc: [
      'terrible - как правило, фокусируется на страхе или ужасе, вызванном чем-то',
      'horrible - подчеркивает чувство отвращения или неприязни',
      'awful - как правило, фокусируется на неприятности или непривлекательности чего-то без коннотаций страха или ужаса.',
      'dreadful - как правило, фокусируется на страхе или ужасе, вызванном чем-то, подобно "terrible", но с более сильным акцентом на страхе.'
    ],
    ex: [
      'The movie was terrible (frightening or causing fear) - Фильм был ужасный (пугающий или вызывающий страх)',
      'The smell was horrible (unpleasantly bad or repulsive) - Запах был ужасный (неприятный или отталкивающий)',
      'The experience was awful (unpleasantly bad or unpleasantly shocking) - Опыт был ужасным (неприятно плохим или неприятно шокирующим)',
      'The disease was dreadful (frightening or causing fear) - Болезнь была ужасной (пугающей или вызывающей страх)',
      ''
    ]
  },
  {
    ru: 'сильный',
    en: ['strong', 'keen', 'powerful', 'heavy', 'severe'],
    desc: [
      'strong - часто подразумевает прочность',
      'keen - остроту или интенсивность, острый',
      'powerful - значительное влияние, мощный',
      'heavy - вес или бремя, тяжёлый',
      'severe - суровость, суровый'
    ],
    ex: [
      'She has a strong personality - Она обладает сильным характером',
      'Her keen wit impressed the audience - Ее остроумие произвело впечатление на аудиторию',
      'The powerful speech moved the crowd - Мощная речь взволновала толпу ',
      'The heavy rain made it difficult to walk - Из-за сильного дождя было трудно ходить',
      'The severe weather warning was issued for the entire region - Предупреждение о неблагоприятных погодных условиях было объявлено для всего региона',
      ''
    ]
  },
  {
    ru: 'мертвый',
    en: ['dead', 'late', 'extinct'],
    desc: [
      'dead - означает больше не живой и не функционирующий.',
      'late -  более вежливое слово чем dead, и используется о людях',
      'extinct - означает полностью вымерло и больше не существует, вымерший'
    ],
    ex: [
      'The bird is dead - Птица мертва',
      'The late president was known for his progressive policies - Покойный президент был известен своей прогрессивной политикой',
      'The dodo bird is an extinct species - Птица дронт - вымерший вид',
      ''
    ]
  },
  {
    ru: 'живой',
    en: ['live', 'alive'],
    desc: [
      'alive - в связке с глаголом be',
      'live - перед существительным'
    ],
    ex: [
      'Этот человек жив - this man is alive',
      'Живой человек - a live person',
      ''
    ]
  },
  {
    ru: 'грязный',
    en: ['dirty', 'filthy', 'grubby', 'grimy ', 'soiled', 'squalid'],
    desc: [
      'dirty  - подразумевает отсутствие чистоты или гигиены.',
      'filthy -  подразумевает более высокий уровень нечистоты или загрязнения.',
      'grubby, grimy - описывают физическую грязь или копоть, чумазый',
      'soiled  - подразумевает загрязнение или пятна, запачканный',
      'squalid -  означает грязное, неухоженное и часто неприятное место или ситуацию.'
    ],
    ex: [
      'The dirty dishes were piled up in the sink - Грязная посуда скапливалась в раковине',
      'The filthy conditions in the slum were a health hazard - Грязные условия в трущобах представляли опасность для здоровья',
      'The grubby hands of the child were covered in dirt - Грязные руки ребенка были покрыты грязью',
      "You're so grubby - Ты такой чумазый ",
      'The soiled clothes needed to be washed again - Испачканную одежду нужно было снова стирать',
      'The squalid conditions in the homeless shelter were a concern for the authorities - Убогие условия в приюте для бездомных вызывали беспокойство властей',
      ''
    ]
  },
  {
    ru: 'осведомлённый',
    en: ['aware', 'conscious', 'alert', 'informed', 'mindful'],
    desc: [
      'aware - когда вы знаете о вещах, которые происходят, или о каких-то фактах',
      'conscious - когда ты проснулся и понимаешь, что происходит вокруг тебя, сознательный, находящийся в сознании',
      'alert - наблюдать или слушать очень внимательно, когда вы готовы обратить внимание на самую мелкую деталь, бдительный, настороженный',
      'informed - имеющий много информации или имеющий самую актуальную информацию',
      'mindful (of) - внимательный, помнить или думать о чём-то очень внимательно, когда выполняете какое-то другое дело'
    ],
    ex: [
      "I'm not aware of any problems - Я не осведомлён ни о каких проблемах",
      'She was conscious during the operation - Она находилась в сознании во время операции',
      'The patient is still very alert mentaly - Пациент всё еще очень насторожен в эмоциональном плане',
      'The programme is aimed at highly informed viewers - Программа ориентирована на высокоинформированных зрителей',
      'He is mindful of his responsibilities as a parent - Он внимательно относится к своим родительским обязанностям',
      ''
    ]
  },
  {
    ru: 'знаменитый, известный',
    en: ['famous', 'well-known', 'renowned', 'infamous', 'notorious'],
    desc: [
      'Famous - подразумевает широкое признание благодаря достижениям',
      'Well-known (популярный) - подразумевает известность в определенной группе',
      'Renowned (прославленный) - подразумевает высокое уважение и восхищение',
      'Infamous, Notorious (печально известный, пользующийся дурной славой) - подразумевает широкое признание за что-то негативное'
    ],
    ex: [
      'Michael Jackson was a famous pop star - Майкл Джексон был известной поп-звездой.',
      'The principal of your school is well-known at school - Директор вашей школы хорошо известен в школе',
      'The renowned scientist won the Nobel Prize - Знаменитый ученый получил Нобелевскую премию',
      'The infamous serial killer was caught - Пойман печально известный серийный убийца',
      'The notorious gangster was arrested - Известный гангстер был арестован',
      ''
    ]
  },
  {
    ru: 'толстый',
    en: ['fat', 'plump', 'overweight', 'obese'],
    desc: [
      'Fat - базовывй термин, по отношению к людям может быть обидным',
      'Plump (пухлый) - чуть более формально и подразумевает округлый вид с положительным оттенком',
      'Overweight (весящий больше нормы) - это медицинский термин, используемый для описания человека, который подвержен риску развития проблем со здоровьем из-за своего веса',
      'Obese (страдающий ожирением) - это более серьезный медицинский термин, используемый для описания человека, который подвержен высокому риску развития серьезных проблем со здоровьем'
    ],
    ex: [
      "He's got a lot of fat on his belly - У него много жира на животе.",
      "She's a bit plump, but it suits her - Она немного полновата, но это ей идет",
      "He's overweight and needs to start exercising - У него лишний вес, и ему нужно начать заниматься спортом",
      "She's obese and needs to start a weight loss program - Она страдает ожирением и должна начать программу похудения",
      ''
    ]
  },
  {
    ru: 'роковой',
    en: ['fatal', 'lethal', 'deadly', 'mortal', 'terminal'],
    desc: [
      'Fatal - подчеркивает уверенность в смерти или серьезных последствиях',
      'Lethal (летальный), Deadly (смертоносный), Mortal (смертельный) - подчеркивают потенциальную возможность смерти или вреда',
      'Terminal (смертельная стадия) - более специфичен для медицинских контекстов и подразумевает тяжелую болезнь или состояние, которое, скорее всего, приведет к смерти'
    ],
    ex: [
      'The fatal accident occurred on the highway - Смертельная авария произошла на шоссе',
      'The lethal injection was used to execute the prisoner - Для казни заключенного была использована смертельная инъекция',
      'The deadly virus spread rapidly across the country - Смертельный вирус быстро распространился по стране',
      'The mortal wound was inflicted by the sword - Смертельная рана была нанесена мечом',
      'The terminal patient was given palliative care - Пациенту в терминальной стадии заболевания была оказана паллиативная помощь'
    ]
  },
  {
    ru: 'временный',
    en: ['temporary', 'fleeting', 'passing', 'shortlived'],
    desc: [
      'temporary - общий термин',
      'fleeting - мимолетный',
      'passing - проходящий',
      'shortlived - недолговечный'
    ],
    ex: [
      'The delay is only temporary - Это всего лишь временная заминка',
      'I caught a fleeting glimpse of the comet - Я заметил мимолётный проблеск кометы',
      'Negative consequences are mainly local and passing nature - Негативные последствия носят преимущественно локальный и проходящий характер',
      'This service also was shortlived - Однако и эта служба была недолгой',
      ''
    ]
  },
  {
    ru: 'непривлекательный',
    en: ['unattractive', 'ugly', 'unsightly', 'hideous', 'plain'],
    desc: [
      'unattractive - not attractive, общий термин',
      'ugly - уродливый',
      'unsightly - более вежливый заменитель ugly',
      'hideous - отвратительный',
      'plain - простой, никакой'
    ],
    ex: [
      'Who do you think is the most unattractive world leader? - Кто по твоему мнению самый непривлекательный мировой лидер?',
      'He has an ugly disposition - У него отвратительный характер',
      'Are you embarrassed by unsightly veins? - Бывает ли вам стыдно за некрасивые поступки?',
      'It was hideous to watch - Было отвратительно смотреть на это',
      'His two daughters are rather plain - Две его дочери довольно простенькие',
      ''
    ]
  },
  {
    ru: 'неуверенный',
    en: [
      'uncertain',
      'unsure',
      'doubtful',
      'in doubt',
      'dubious',
      'sceptical'
    ],
    desc: [
      'uncertain, unsure - общие термин',
      'doubtful - сомнительный',
      'in doubt - под вопросом',
      'dubious - подозрительный',
      'sceptical - скептичный'
    ],
    ex: [
      'I am uncertain about the outcome - Я не уверен в том, каким будет результат',
      "I am unsure whether I'll be able to come - Я не уверен, что смогу прийти",
      "That's the least effective and most doubtful method - Это наименее эффективный и весьма сомнительный способ",
      "The restaurant's fate was in doubt - Судьба ресторана была под вопросом",
      'He has a dubious record indeed - У него и впрямь сомнительная репутация',
      'He was sceptical about hypnotism - Он скептически относился к гипнозу',
      ''
    ]
  },
  {
    ru: 'обычный',
    en: ['usual', 'normal', 'routine', 'traditional', 'customary'],
    desc: [
      'usual - общий термин',
      'normal - нормальный, что обычно для большинства',
      'routine - обычный, текущий, шаблонный',
      'traditional - традиционный',
      'customary - (формал) синоним usual'
    ],
    ex: [
      'The policeman was on his usual nightly round - Полицейский совершал свой обычный ночной обход',
      "Normal people don't react that way - Нормальные люди так не реагируют",
      'He reacts badly to disturbance of his daily routine - Он терпеть не может, когда нарушается его распорядок дня',
      "They didn't follow the traditional form of the marriage service - Они не придерживались традиционной церемонии бракосочетания",
      'He did the work with his customary efficiency - Он выполнял работу, с привычной ему эффективностью',
      ''
    ]
  },
  {
    ru: 'слабый',
    en: ['weak', 'feeble', 'frail', 'гnhealthy'],
    desc: [
      'weak - общий термин',
      'feeble - хилый, немощный',
      'frail - хрупкий, хилый (более литературное)',
      'unhealthy - нездоровый'
    ],
    ex: [
      'A weak leader cannot be effective - Слабый лидер не может добиться успеха',
      'She was too feeble to leave her room - Она была слишком слаба, чтобы выходить из комнаты',
      'In his old age his health became increasingly frail - В старости его здоровье всё больше слабело',
      'He was stuck in an unhealthy relationship - Он увяз в нездоровых отношениях',
      ''
    ]
  },
  {
    ru: 'мокрый',
    en: ['wet', 'damp', 'moist', 'soaking', 'waterlogged'],
    desc: [
      'wet - общий термин',
      'damp - влажный',
      'moist - приятно влажный',
      'soaking - пропитанный влагой',
      'waterlogged - заболоченный'
    ],
    ex: [
      'His face was wet with sweat - Его лицо было мокрым от пота',
      'He pulled off his damp shirt - Он стянул с себя влажную рубашку',
      'She was moist with sweat and it turned me on - Она была влажной от пота, и это меня возбуждало',
      'The towel was soaking wet - Полотенце было очень мокрым',
      'The ground was completely waterlogged - Земля была полностью заболочена'
    ]
  },
  {
    ru: 'правильный',
    en: ['right', 'correct', 'accurate', 'exact', 'true'],
    desc: ['right - употребляется в контектсе оценку поступка',
      'correct - больше про грамотность написания', 'accurate - точный, тщательный, правельный в мелочах и деталях', 'exact - точный, абсолютно верный, полностью точный в каждой детали', 'true - правда, истина, что правильно в конкретной ситуации'],
    ex: ["You did the right thing - Вы поступили правильно",
      "It's a correct sentence - Это правильное предложение",
      "Are the figures accurate? - Являются ли цифры точными?",
      "Can you tell me the exact words she used? - Можете ли вы сказать мне, какие именно слова она использовала?",
      "What he says is simply not true - То, что он говорит, просто неправда"],
  },
  {
    ru: 'трудный, тяжёлый',
    en: ['hard', 'difficult', 'heavy'],
    desc: ['hard - обычно описывает что-то, что требует физического усилия или является физически тяжелым, усердно', 'difficult - обычно описывает что-то, что требует умственного усилия или является сложным', 'heavy - когда говорим про вес чего-то'],
    ex: ["This box is hard to lift - Эту коробку трудно поднять", "Does he study very hard? - Он учится очень усердно?", "This math problem is difficult to solve - Эта математическая задача сложна для решения", "It's a heavy bag - Это тяжёлая сумка"],
  },
  {
    ru: 'умный',
    en: ['clever', 'smart', 'intelligent'],
    desc: ['clever - способный к учению и быстро схватывающий новые сведения', 'smart - умеющий использовать всякие преимущества, оценивать и регулировать создавшуюся обстановку', 'intelligent - обладающий умственными способностями, хорошим пониманием и умением продумывать то, что происходит'],
    ex: ['Не was clever enough nol to answer her — У него хватило ума не отвечать ей', 'Не was the smartest student in her class — В ее классе он был самым сообразительным/находчивым учеником', 'Monkeys are very intelligent animals. — Обезьяны очень умные животные'],
  },
  {
    ru: 'быстрый',
    en: ['fast', 'quick', 'rapid'],
    desc: ['fast - в большей степени относится к скорости движения', 'quick - к действиям, происходящим за короткое время', 'rapid - к быстрым изменениям и росту'],
    ex: ['We are going too fast - Мы идём слишком быстро', 'She took a quick shower - Она приняла быстрый душ', 'The company experienced rapid growth last year - Компания показала стремительный рост в прошлом году'],
  },
  {
    ru: 'благодарный',
    en: ['grateful', 'thankful'],
    desc: ['grateful - более конкретно указывает на конкретное действие или услугу, за которую вы благодарите', 'thankful - более широко выражает благодарность за все, что есть в вашей жизни'],
    ex: ['I am grateful for your help - Я благодарен за вашу помощь', 'I am thankful for my family - Я благодарен за свою семью'],
  },
  {
    ru: 'полезный',
    en: ['helpful', 'useful'],
    desc: ['helpful - в основном про людей', 'useful - в основом про устройства'],
    ex: ['You are very helpful - Ты очень полезен', 'It is a very useful device - Это очень полезное устройство'],
  },
  {
    ru: 'неловкий, неуклюжий',
    en: ['awkward', 'clumsy'],
    desc: [
      'awkward - больше сосредоточен на социальных взаимодействиях или ситуациях',
      'clumsy - как правило, фокусируется на физических движениях или действиях'
    ],
    ex: [
      "The clumsy waiter dropped the hot pizza in my girlfriend's lap - Неуклюжий официант уронил горячую пиццу на колени моей девушке",
      'The awkward silence between us was palpable - Неловкое молчание между нами было ощутимым'
    ]
  },
  {
    ru: 'странный',
    en: ['strange', 'bizarre', 'wierd', 'odd'],
    desc: [
      'strange - более найтрально по смыслу',
      'bizarre - более негативно',
      'wierd - что-то неприятное или неловкое',
      'odd - нейтрально по смыслу'
    ],
    ex: [
      "You're a strange man - Ты странный человек",
      'This is a very bizarre murder - Это очень странное убийство',
      "He's looking at me so weird - Он на меня так странно смотрит",
      'You have an odd way of killing people - У тебя странный способ убивать людей'
    ]
  },
  {
    ru: 'целый',
    en: ['whole', 'entire'],
    desc: [
      'whole - указывает на 100% от одного предмета',
      'entire - указывает на 100% от общего количества'
    ],
    ex: [
      'I finished reading the whole book in three days. - Я закончил читать всю книгу за три дня (100% от одной книги)',
      'I drank the entire bottle of water. - Я выпил всю бутылку воды (100% от общего количества воды в бутылке)'
    ]
  },
  {
    ru: 'уверенный',
    en: ['sure', 'confident', 'certain'],
    desc: [
      'sure - может быть более поверхностной уверенностью',
      'confident - более глубокая уверенность в своих способностях',
      'certain - абсолютная уверенность в событии или факте'
    ],
    ex: [
      "I'm sure it will rain tomorrow - Я уверен, что завтра пойдет дождь",
      "He's confident in his ability to solve the problem - Он уверен в своей способности решить проблему",
      "I'm certain that I saw the movie last week - Я уверен, что смотрел этот фильм на прошлой неделе"
    ]
  },
  {
    ru: 'неуверенный',
    en: ['unsure', 'uncertain'],
    desc: [
      'unsure - относится к личным сомнениям или неуверенности',
      'uncertain - к общей неопределенности ситуации или события'
    ],
    ex: [
      "I'm unsure about my decision to move to a new city - Я не уверен в своем решении переехать в другой город",
      'The weather forecast is uncertain for the weekend - Прогноз погоды на выходные неясен'
    ]
  },
  {
    ru: 'чистый',
    en: ['clean', 'pure', 'spotless', 'hygienic'],
    desc: [
      'clean - обозначает отсутствие грязи или загрязнений',
      'pure - обозначает отсутствие загрязнений или загрязнителей',
      'spotless - обозначает отсутствие пятен или загрязнений',
      'hygienic - обозначает состояние, когда объект или место обеспечивает здоровье и не содержит загрязнений'
    ],
    ex: [
      'The room was clean and tidy. - В комнате было чисто и аккуратно.',
      'The water was pure and natural. - Вода была чистой и природной.',
      'a bottle of pure water - бутылка чистой воды',
      'a pure mountain stream - чистый горный ручей',
      'The shirt was spotless and white. - Рубашка была чистой и белой.',
      'The hospital was hygienic and clean. - Больница была гигиеничной и чистой.'
    ]
  },
  {
    ru: 'холодный',
    en: ['cold', 'cool', 'freezing', 'frozen', 'icy'],
    desc: [
      'cold - это общее слово для описания низкой температуры',
      'cool - для описания приятной, освежающей температуры',
      'freezing - для описания очень низкой температуры, при которой вода превращается в лед',
      'frozen - для описания состояния, когда что-либо превращается в лед или твердое вещество из-за очень низкой температуры.',
      'icy - для описания поверхности, покрытой льдом или очень холодной.'
    ],
    ex: [
      "It's cold outside today. - На улице сегодня холодно.",
      'The drink was cool and refreshing. - Напиток был прохладным и освежающим.',
      'The temperature was freezing last night. - Температура была ниже нуля прошлой ночью.',
      'The lake was frozen over in winter. - Озеро замерзло зимой.',
      'The road was icy and dangerous to drive on. - Дорога была обледенелой и опасной для вождения.'
    ]
  },
  {
    ru: 'теплый',
    en: ['warm', 'hot', 'boiling'],
    desc: [
      'warm - теплый',
      'hot - жаркий',
      'boiling - кипящий, очень жаркий'
    ],
    ex: [
      "It's warm today - Сегодня тепло",
      "It's hot today - Сегодня жара",
      'boiling water - Кипящая вода'
    ]
  },
  {
    ru: 'ужасный',
    en: ['terrible', 'horrible', 'awful', 'dreadful'],
    desc: [
      'terrible - как правило, фокусируется на страхе или ужасе, вызванном чем-то',
      'horrible - подчеркивает чувство отвращения или неприязни',
      'awful - как правило, фокусируется на неприятности или непривлекательности чего-то без коннотаций страха или ужаса.',
      'dreadful - как правило, фокусируется на страхе или ужасе, вызванном чем-то, подобно "terrible", но с более сильным акцентом на страхе.'
    ],
    ex: [
      'The movie was terrible (frightening or causing fear) - Фильм был ужасный (пугающий или вызывающий страх)',
      'The smell was horrible (unpleasantly bad or repulsive) - Запах был ужасный (неприятный или отталкивающий)',
      'The experience was awful (unpleasantly bad or unpleasantly shocking) - Опыт был ужасным (неприятно плохим или неприятно шокирующим)',
      'The disease was dreadful (frightening or causing fear) - Болезнь была ужасной (пугающей или вызывающей страх)'
    ]
  },
  {
    ru: 'сильный',
    en: ['strong', 'keen', 'powerful', 'heavy', 'severe'],
    desc: [
      'strong - часто подразумевает прочность',
      'keen - остроту или интенсивность, острый',
      'powerful - значительное влияние, мощный',
      'heavy - вес или бремя, тяжёлый',
      'severe - суровость, суровый'
    ],
    ex: [
      'She has a strong personality - Она обладает сильным характером',
      'Her keen wit impressed the audience - Ее остроумие произвело впечатление на аудиторию',
      'The powerful speech moved the crowd - Мощная речь взволновала толпу ',
      'The heavy rain made it difficult to walk - Из-за сильного дождя было трудно ходить',
      'The severe weather warning was issued for the entire region - Предупреждение о неблагоприятных погодных условиях было объявлено для всего региона'
    ]
  },
  {
    ru: 'мертвый',
    en: ['dead', 'late', 'extinct'],
    desc: [
      'dead - означает больше не живой и не функционирующий.',
      'late -  более вежливое слово чем dead, и используется о людях',
      'extinct - означает полностью вымерло и больше не существует, вымерший'
    ],
    ex: [
      'The bird is dead - Птица мертва',
      'The late president was known for his progressive policies - Покойный президент был известен своей прогрессивной политикой',
      'The dodo bird is an extinct species - Птица дронт - вымерший вид'
    ]
  },
  {
    ru: 'живой',
    en: ['live', 'alive'],
    desc: [
      'alive - в связке с глаголом be',
      'live - перед существительным'
    ],
    ex: [
      'Этот человек жив - this man is alive',
      'Живой человек - a live person'
    ]
  },
  {
    ru: 'грязный',
    en: ['dirty', 'filthy', 'grubby', 'grimy ', 'soiled', 'squalid'],
    desc: [
      'dirty  - подразумевает отсутствие чистоты или гигиены.',
      'filthy -  подразумевает более высокий уровень нечистоты или загрязнения.',
      'grubby, grimy - описывают физическую грязь или копоть, чумазый',
      'soiled  - подразумевает загрязнение или пятна, запачканный',
      'squalid -  означает грязное, неухоженное и часто неприятное место или ситуацию.'
    ],
    ex: [
      'The dirty dishes were piled up in the sink - Грязная посуда скапливалась в раковине',
      'The filthy conditions in the slum were a health hazard - Грязные условия в трущобах представляли опасность для здоровья',
      'The grubby hands of the child were covered in dirt - Грязные руки ребенка были покрыты грязью',
      "You're so grubby - Ты такой чумазый ",
      'The soiled clothes needed to be washed again - Испачканную одежду нужно было снова стирать',
      'The squalid conditions in the homeless shelter were a concern for the authorities - Убогие условия в приюте для бездомных вызывали беспокойство властей'
    ]
  },
  {
    ru: 'осведомлённый',
    en: ['aware', 'conscious', 'alert', 'informed', 'mindful'],
    desc: [
      'aware - когда вы знаете о вещах, которые происходят, или о каких-то фактах',
      'conscious - когда ты проснулся и понимаешь, что происходит вокруг тебя, сознательный, находящийся в сознании',
      'alert - наблюдать или слушать очень внимательно, когда вы готовы обратить внимание на самую мелкую деталь, бдительный, настороженный',
      'informed - имеющий много информации или имеющий самую актуальную информацию',
      'mindful (of) - внимательный, помнить или думать о чём-то очень внимательно, когда выполняете какое-то другое дело'
    ],
    ex: [
      "I'm not aware of any problems - Я не осведомлён ни о каких проблемах",
      'She was conscious during the operation - Она находилась в сознании во время операции',
      'The patient is still very alert mentaly - Пациент всё еще очень насторожен в эмоциональном плане',
      'The programme is aimed at highly informed viewers - Программа ориентирована на высокоинформированных зрителей',
      'He is mindful of his responsibilities as a parent - Он внимательно относится к своим родительским обязанностям'
    ]
  },
  {
    ru: 'большой',
    en: ['big', 'large', 'huge', 'enormous', 'vast', 'tremendous'],
    desc: [
      'big / large - что-то большого размера',
      'huge - очень большого размера, огромный',
      'enormous - крайне большой, гиганский',
      'vast - про большие площади, объёмы чего-либо',
      'tremendous - это слово, которое используется для выражения чрезвычайно большого размера, масштаба или силы чего-либо'
    ],
    ex: [
      'I want a big / large car - Я хочу большую машину',
      'Huge waves battered the ship - Огромные волны долбились о корабль',
      'The house is absolutely enormous - Дом просто гигантский',
      "Canada's vast mineral resources - Огромные минеральные ресурсы Канады",
      'She has done a tremendous job on her research project - Она проделала огромную работу над своим исследовательским проектом'
    ]
  },
  {
    ru: 'аккуратный, осторожный',
    en: [
      'careful',
      'conscientious',
      'thorough',
      'painstaking - [ˈpeɪnzteɪkɪŋ]'
    ],
    desc: [
      'careful - уделять внимание деталям',
      'conscientious - добросовестный, работать осторожно и хорошо',
      'thorough - тщательный, подробный, когда что-то включает всё что нужно, чтобы сделать дело хорошо',
      'painstaking - делать что-то медленно, дотошно, кропотливый'
    ],
    ex: [
      'We are always very careful to give accurate information - Мы всегда тщательно следим за тем, чтобы предоставлять точную информацию',
      "She's a very conscientious worker - Она очень добросовестный работни",
      'The police have carried out a thorough search of the woods - Полиция провела тщательный обыск в лесу',
      'The design is the result of years of painstaking effort - Этот дизайн - результат многолетней кропотливой работы'
    ]
  },
  {
    ru: 'осторожный, осмотрительный',
    en: [
      'cautious',
      'careful',
      'prudent',
      'vigilant',
      'wary',
      'secretive',
      'cagey'
    ],
    desc: [
      'cautious - тот, кто не желает рисковать',
      'careful - когда вы стараетесь не делать ошибок или причинять вреда',
      'prudent - когда вы поступаете умно и пользуетесь хорошими суждениями, благоразумный',
      'vigilant - очень внимательно относиться к вероятно опасности, бдительный',
      'wary - избегать возможных проблема, подозрительный',
      'secretive - тот, кто любит держать всё в секрете, скрытный',
      'cagey (informal) - неформальный фариант secretive скрытный'
    ],
    ex: [
      "She's a very cautious driver - Она очень осторожный водитель",
      'She is very careful about what she eats - Она очень осторожно относится к тому, что она ест',
      'You made a prudent choice - Ты сделал благоразумный выбор',
      'We remain vigilant against theft - Мы сохраняем бдительность в отношении краж',
      "I'm a bit wary of driving in this fog - Я немного опасаюсь вести машину в таком тумане",
      "She's very secretive about her private life - Она очень скрытна в своей личной жизни",
      'He was very cagey about the deal - Он был очень скрытен в отношении сделки'
    ]
  },
  {
    ru: 'знаменитый, известный',
    en: ['famous', 'well-known', 'renowned', 'infamous', 'notorious'],
    desc: [
      'Famous - подразумевает широкое признание благодаря достижениям',
      'Well-known (популярный) - подразумевает известность в определенной группе',
      'Renowned (прославленный) - подразумевает высокое уважение и восхищение',
      'Infamous, Notorious (печально известный, пользующийся дурной славой) - подразумевает широкое признание за что-то негативное'
    ],
    ex: [
      'Michael Jackson was a famous pop star - Майкл Джексон был известной поп-звездой.',
      'The principal of your school is well-known at school - Директор вашей школы хорошо известен в школе',
      'The renowned scientist won the Nobel Prize - Знаменитый ученый получил Нобелевскую премию',
      'The infamous serial killer was caught - Пойман печально известный серийный убийца',
      'The notorious gangster was arrested - Известный гангстер был арестован',
    ]
  },
  {
    ru: 'толстый',
    en: ['fat', 'plump', 'overweight', 'obese'],
    desc: [
      'Fat - базовывй термин, по отношению к людям может быть обидным',
      'Plump (пухлый) - чуть более формально и подразумевает округлый вид с положительным оттенком',
      'Overweight (весящий больше нормы) - это медицинский термин, используемый для описания человека, который подвержен риску развития проблем со здоровьем из-за своего веса',
      'Obese (страдающий ожирением) - это более серьезный медицинский термин, используемый для описания человека, который подвержен высокому риску развития серьезных проблем со здоровьем'
    ],
    ex: [
      "He's got a lot of fat on his belly - У него много жира на животе.",
      "She's a bit plump, but it suits her - Она немного полновата, но это ей идет",
      "He's overweight and needs to start exercising - У него лишний вес, и ему нужно начать заниматься спортом",
      "She's obese and needs to start a weight loss program - Она страдает ожирением и должна начать программу похудения",
    ]
  },
  {
    ru: 'роковой',
    en: ['fatal', 'lethal', 'deadly', 'mortal', 'terminal'],
    desc: [
      'Fatal - подчеркивает уверенность в смерти или серьезных последствиях',
      'Lethal (летальный), Deadly (смертоносный), Mortal (смертельный) - подчеркивают потенциальную возможность смерти или вреда',
      'Terminal (смертельная стадия) - более специфичен для медицинских контекстов и подразумевает тяжелую болезнь или состояние, которое, скорее всего, приведет к смерти'
    ],
    ex: [
      'The fatal accident occurred on the highway - Смертельная авария произошла на шоссе',
      'The lethal injection was used to execute the prisoner - Для казни заключенного была использована смертельная инъекция',
      'The deadly virus spread rapidly across the country - Смертельный вирус быстро распространился по стране',
      'The mortal wound was inflicted by the sword - Смертельная рана была нанесена мечом',
      'The terminal patient was given palliative care - Пациенту в терминальной стадии заболевания была оказана паллиативная помощь',
    ]
  },
]

export default adjective