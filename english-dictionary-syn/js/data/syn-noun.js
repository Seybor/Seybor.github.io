let noun = [
	{
		ru: 'запах',
		en: ['smell', 'odour', 'aroma', 'scent', 'stink'],
		desc: [
			'smell - нейтральный по смылу',
			'odour - часто про неприятный запах',
			'aroma - аромат, благоухание',
			'scent - приятный запах',
			'stink - (неформальный) вонь'
		],
		ex: [
			'I love the smell of archidhea - Мне нравится запах архидеи',
			'The odour clung to the room for hours - Запах держался в комнате в течение нескольких часов',
			'The wine has a fruity aroma - Вино обладает фруктовым ароматом',
			"There's a nice scent in the air - Что за приятный запах в воздухе",
			"I couldn't stand the stink of it - Я не могла выносить эту вонь",
			''
		]
	},
	{
		ru: 'друг',
		en: ['friend', 'acquaintance', 'companion', 'mate', 'pal'],
		desc: [
			'Friend - общий термин',
			'Acquaintance - про кого-то знакомого',
			'Companion - означает «спутник» или «сопровождающий»',
			'Mate (informal) - старый термин, обозначающий товарища в основном между мужчинами',
			'Pal (informal) - неформальный синоним friend'
		],
		ex: [
			'She is my best friend - Она моя лучшая подруга',
			"He's an acquaintance of a friend of mine - Он знакомый моего друга",
			'He is a good companion for a hike - Он хороший спутник для похода',
			'He is my mate in the game - Он мой партнер в игре',
			'She met some pales at the party - Она встретила несколько друзей на вечеринке',
			'We are great pals - Мы большие друзья',
			''
		]
	},
	{
		ru: 'группа',
		en: ['group', 'crowd', 'gang', 'mob'],
		desc: [
			'Group - общий термин',
			'Crowd - толпа, народ (нейтральный термин)',
			'Gang - банда, шайка',
			'Mob - толпа, чернь (более агрессивно настроенные)'
		],
		ex: [
			'a group of teenage girls - группа девушек-подростков',
			'the dull roar of the crowd - негромкий шум толпы',
			'gang of thieves - шайка воров',
			'A mob of angry people - Толпа разъяренных людей',
			''
		]
	},
	{
		ru: 'чудо',
		en: ['wonder', 'marvel', 'miracle'],
		desc: [
			'wonder - эмоц. выр. чего-то необычного',
			'marvel - синоним wonder',
			'miracle - подразумевает что-то сверхъестественное'
		],
		ex: [
			"You're a wonder, not a child - Ты чудо, а не ребёнок",
			'The new smartphone is a marvel of engineering - Новый смартфон - чудо инженерной мысли',
			'His recovery was a true miracle - Его выздоровление было настоящим чудом',
			''
		]
	},
	{
		ru: 'привычка',
		en: ['habit', 'custom', 'tradition', 'practice', 'routine'],
		desc: [
			'habit - что человек делает регулярно',
			'custom - обычай, менее длителен про продолжительности чем традиция',
			'tradition - традиция, что выполняется на протяжении поколений',
			'practice - практика, что все делают на регулярной основе',
			'routine - распорядок, заведенный порядок, режим'
		],
		ex: [
			'Thinking negatively can become a habit - Негативное мышление может стать привычкой',
			'The old custom is dead - Этот старый обычай уже не соблюдают',
			'Tradition is the enemy of progress - Традиция — враг прогресса',
			'Walking the dogs before breakfast has always been our practice - Выгуливать собак перед завтраком - это всегда было нашей практикой',
			'This is my daily routine - Это мой ежедневный распорядок дня',
			''
		]
	},
	{
		ru: 'помощь',
		en: ['help', 'support', 'assistance', 'aid'],
		desc: [
			'help - что облегчает выполнение чего-то',
			'support - поддержка в чём-то',
			'assistance - содействие в чём-то',
			'aid - помощь обычно едой, деньгами и прочим для нуждающихся'
		],
		ex: [
			'Do you need help with that bag? - Тебе нужна помощь с этой сумкой?',
			'His support helped me - Его поддержка помогла мне',
			'His assistance was a pleasure - Его помощь была приятной',
			'humanitarian aid - гуманитарная помощь',
			''
		]
	},
	{
		ru: 'знание',
		en: ['knowledge', 'information', 'wisdom'],
		desc: [
			'knowledge - какие-то общеизвестные факты',
			'information - информация [факты о чём-то]',
			'wisdom - мудрость [знания о жизни, понимание как справляться с трудными ситуациями и людьми]'
		],
		ex: [
			'Their knowledge is very basic - Их знания — самые элементарные',
			'He gave me valuable information - Он сообщил мне ценные сведения',
			'That wisdom is still valid today - Эта мудрость актуальна до сих пор',
			''
		]
	},
	{
		ru: 'недостаток',
		en: ['lack', 'shortage', 'deficiency', 'deficit'],
		desc: [
			'lack - общий термин',
			'shortage - когда что-то нужно, а этого нет',
			'deficiency - как синоним к слову deficit, так и shortage',
			'deficit - дефицит'
		],
		ex: [
			'This situation indicates a lack of coffee - Эта ситуация указывает на недостаток кофе',
			'There is a chronic shortage of teachers - Учителей хронически не хватает',
			'There are several deficiencies in his plan - В его плане есть несколько недостатков',
			'Many countries have a big deficit in food supply - Многие страны испытывают большой дефицит продуктов питания',
			''
		]
	},
	{
		ru: 'язык',
		en: [
			'language',
			'speech',
			'dialect',
			'vocabulary',
			'slang',
			'jargon'
		],
		desc: [
			'language - способ речи или письма',
			'speech - речь (способность говорить слова)',
			'dialect - диалект (разновидность какого-то языка)',
			'vocabulary - словарный запас, лексика (все слова, которыми пользуется человек или группа людей)',
			'slang - сленг (неформальные популярные слова или словосочетания, использущиеся определёнными группами людей)',
			'jargon - жаргон (особый тип языка, у разных профессий)'
		],
		ex: [
			'How many languages do you speak? - На скольких языках вы говорите?',
			'I lost my power of speech - Я потерял дар речи',
			'The author uses dialect in his writing - В своих произведениях автор использует диалекты',
			'She has a poor vocabulary - У неё бедный словарный запас',
			'Slang is used mostly in informal speech - Сленг в основном используется в разговорной речи',
			'Can you translate this technical jargon? - Вы можете перевести этот технический жаргон?',
			''
		]
	},
	{
		ru: 'лидер',
		en: [
			'leader',
			'boss',
			'manager',
			'employer',
			'supervisor',
			'captain'
		],
		desc: [
			'leader - человек во главе какой-то организации',
			'boss - хозяин чего-то',
			'manager - менеджер, управляющий (человек во главе какого-то отдела или департамента)',
			'employer - работодатель',
			'supervisor - руководитель, супервизор (человек, который должен наблюдать, как работают другие сотрудники)',
			'captain - капитан (человек во главе команды)'
		],
		ex: [
			'She was honoured as a community leader - Её уважали как общественного лидера',
			'Clear this with the boss - Согласуй это с шефом',
			'He will make a good manager - Из него выйдет хороший хозяин',
			'Who is your current employer? - Кто ваш нынешний работодатель?',
			'The supervisor held an informal meeting in his office - Инспектор провёл неформальную встречу в своем кабинете',
			'How many go to a crew with you, captain? - Из скольких человек состоит ваша команда, капитан?',
			''
		]
	},
	{
		ru: 'ложь',
		en: ['lie', 'fib', 'white lie', 'falsehood', 'fabrication'],
		desc: [
			'lie - что не является правдой',
			'fib - привирать, неформальный синоним lie',
			'white lie - ложь во спасение (врать из благих побуждений)',
			'falsehood - литературный синоним lie',
			'fabrication - фальшивка'
		],
		ex: [
			"I'm sick of your lies - Твоя ложь мне надоела",
			"He's been known to tell fibs - Всем известно, что он привирает",
			"It's a little white lie, everyone does it - Это маленькая белая ложь, все так делают",
			"That's what illusion and falsehood are - Вот чем является иллюзия и ложь",
			'Of course, it might all be complete fabrication - Конечно, всё это может быть полной выдумкой',
			'любовь'
		]
	},
	{
		ru: 'еда',
		en: ['meal', 'snack', 'feast', 'picnic', 'barbecue', 'takeaway'],
		desc: [
			'meal - еда, принятие пищи',
			'snack - легкая закуска',
			'feast - банкет',
			'picnic - пикник (еда на природе, но уже заранее приготовленная)',
			'barbecue - барбекю (еда на природе, но готовиться на месте)',
			'takeaway - готовая еда'
		],
		ex: [
			'She cooked a great meal - Она приготовила великолепную еду',
			'Can I fix you a snack? - Могу ли я приготовить вам закуску?',
			'There were hundreds of guests at the royal wedding feast - Сотни гостей присутствовали на королевском свадебном банкете',
			'The picnic was her suggestion - Этот пикник предложила она',
			'He cooked an amazing three-headed barbecued beef - Он приготовил потрясающую трехглавую говядину на барбекю',
			'We ordered some Chinese takeaway - Мы заказали китайскую еду на вынос',
			''
		]
	},
	{
		ru: 'смесь, сочетание',
		en: ['mixture', 'blend', 'combination', 'compound'],
		desc: [
			'mixture - смесь, количество каких-то смешанных элементов',
			'blend - смесь чего-то',
			'combination - сочетание ',
			'compound - соединение каких-то элементов'
		],
		ex: [
			'Refrigerate the mixture for few hours - Охладить смесь в течение нескольких часов',
			'Sprinkle the blend over your carpet - Посыпьте смесью ваш ковер',
			'This combination also helps balance protein - Это сочетание восполняет белковый баланс блюда',
			'This is a compound found in green tea - Это соединение содержится в зеленом чае',
			''
		]
	},
	{
		ru: 'сайт',
		en: ['site', 'website'],
		desc: [
			'site - обычно относится к отдельной странице или разделу',
			'website - относится к коллекции связанных страниц и функций'
		],
		ex: [
			'I found an interesting site about cooking recipes - Я нашел интересный сайт о рецептах приготовления пищи',
			'I visited a website that provides information about travel destinations - Я посетил веб-сайт, который предоставляет информацию о туристических направлениях',
			''
		]
	},
	{
		ru: 'город',
		en: ['town', 'city'],
		desc: ['town - небольшой город', 'city - просто город'],
		ex: [
			'I live in a big city - Я живу в большом городе',
			'I live in a small town - Я живу в маленьком городе',
			''
		]
	},
	{
		ru: 'экономика',
		en: ['economics', 'economy'],
		desc: [
			'economics - экономика, как наука',
			'economy - экономика, в контексте стран, городов, регионов и т.д'
		],
		ex: [
			'I studied economics - Я изучал экономику',
			'The economy of this region leaves much to be desired - Экономика этого региона оставляет желать лучшего',
			''
		]
	},
	{
		ru: 'человек',
		en: ['human', 'person', 'man'],
		desc: [
			'human - подчеркивает биологический аспект',
			'person - подчеркивает социальный и моральный аспект',
			'man - может относиться к человеку мужского пола или к человеку вообще, часто с более неформальным оттенком'
		],
		ex: [
			'Humans belong to the animal kingdom - Люди принадлежат к царству животных',
			"I don't like this person - Этот человек мне не нравится",
			"It's a strange man - Это странный человек (мужчина)",
			''
		]
	},
	{
		ru: 'грабитель',
		en: ['robber', 'burglar'],
		desc: [
			'robber - чаще с применением насилия',
			'burglar - как правило без насилия, взломщик'
		],
		ex: [
			'Police have apprehended a robber who attacked a woman - Полиция задержала грабителя, напавшего на женщину.',
			'Police detained a burglar of an apartment - Полиция задержала грабителя квартиры',
			''
		]
	},
	{
		ru: 'ошибка',
		en: ['mistake', 'error', 'fault', 'slip', 'blunder'],
		desc: [
			'mistake - более неформальный и относится к ошибкам в утверждениях и действиях',
			'error - более официальный и связан с техническими ошибками',
			'fault - указывает на вину человека в совершении ошибки',
			'slip - мелкая ошибка',
			'blunder - грубая ошибка'
		],
		ex: [
			'That move was a big mistake - Тот переезд был большой ошибкой',
			'There was an error in their calculations - В их вычислениях была ошибка',
			"It's not my fault - Я не виноват!",
			'He made a few slips in his calculations - В своих расчетах он допустил несколько ошибок',
			'He made a blunder - Он совершил большую ошибку',
			''
		]
	},
	{
		ru: 'ребёнок',
		en: [
			'child',
			'kid',
			'baby',
			'todder',
			'teenager',
			'youngster',
			'youth'
		],
		desc: [
			'Child - это общее слово для описания любого ребенка, который еще не перешел в категорию подростков (teenager). Это может быть ребенок любого возраста, от рождения до достижения 14 лет.',
			'Kid - это слово для описания ребенка, который может быть любого возраста, от рождения до достижения 14 лет. Это может быть использовано как в формальной, так и в неформальной речи. Неформальный синоним child',
			'Baby - это слово для описания совсем маленького ребенка, который еще не умеет ходить и говорить. Это обычно относится к детям до месяца или до года.',
			'Toddler - это слово для описания ребенка, который учится ходить. Это обычно относится к детям от одного до двух лет.',
			'Teenager - это слово для описания подростка, который находится в возрасте от 13 до 19 лет.',
			'Youngster - это слово для описания молодого человека или девушки, который находится в возрасте от 16 до 25 лет.',
			'Youth - это слово для описания молодого человека или девушки, который находится в возрасте от 16 до 25 лет.'
		],
		ex: [
			'My child is at home now. - Мой ребёнок сейчас дома.',
			'The baby is sleeping. - Младенец спит.',
			'The toddler is learning to walk. - Ребенок учится ходить.',
			'The teenager is going to the party. - Подросток идёт на вечеринку.',
			'The youngster is playing soccer. - Молодой человек играет в футбол.',
			'The youth is participating in the competition. - Молодой человек участвует в соревнованиях.',
			'The kid is playing with toys. - Ребенок играет с игрушками',
			''
		]
	},
	{
		ru: 'предложение',
		en: [
			'offer',
			'suggestion',
			'proposal',
			'recommendation',
			'proposition',
			'motion'
		],
		desc: [
			'offer — предложение (того, что реально можно дать, предоставить, сделать)',
			'suggestion — предложение (темы, предмета, действии, которые можно обсуждать)',
			'proposal — предложение (для обсуждения, рассмотрения;вносится официально официальному лицу, организации или группе)',
			'recommendation — предложение, рекомендация, совет(выдвинутые официальным вышестоящим лицом или группой; особенно предложения, заключенные в докладе)',
			'proposition — план действий, предложение (в политике или бизнесе)',
			'motion — предложение (выдвигаемое на собрании)'
		],
		ex: [
			'He got an interesting offer of job abroad. — Он получил предложение интересной работы за границей.',
			'That is an excellent suggestion. — Это отличное предложение',
			'They will consider our proposal at their next meeting. — Они рассмотрят наше предложение на следующем заседании',
			'We accept that recommendation and we shall act on it as quick as possible — Мы принимаем это предложение и начинаем действовать в соответствии с ним в ближайшем будущем',
			'I have a proposition to move. — У меня есть предложение',
			'The motion was carried unanimously. — Предложение было принято единогласно',
			''
		]
	},
	{
		ru: 'соревнование',
		en: ['competition', 'contest', 'match'],
		desc: [
			'competition - подчеркивает более широкую идею соперничества',
			'contest - часто включает в себя приз и более формальный контекст',
			'match - специально относится к соревнованию между двумя индивидуумами или командами'
		],
		ex: [
			'The company is facing stiff competition in the market - Компания столкнулась с жёсткой конкурентной борьбой на рынке',
			'The annual singing contest is a popular event in the town - Годовой конкурс пения — популярное событие в этом городе ',
			'The tennis match was intense, with both players giving it their all - Теннисный матч был интенсивным, с обеими игроками, которые дали все свои силы',
			''
		]
	},
	{
		ru: 'участник',
		en: ['contenstant', 'candidate', 'contender', 'applicant', 'entrant'],
		desc: [
			'contenstant - это широкий термин для обозначения человека, участвующего в конкурсе',
			'candidate - обычно используется для обозначения политических или официальных позиций',
			'contender - подразумевает большие шансы на успех',
			'applicant - используется для обозначения работы или возможности',
			'entrant - кто принимает участие в чём-то'
		],
		ex: [
			'The contestant on the TV show was a talented singer - Участник телешоу был талантливым певцом',
			'The candidate for mayor is a well-known businessperson - Кандидат на должность мэра — известный бизнесмен',
			'The team is a serious contender for the championship - Эта команда — серьёзный претендент на чемпионство',
			'The applicant for the job had impressive qualifications - Претендент на эту должность обладал впечатляющей квалификацией',
			'Each entrant had to agree to the contest rules - Каждому участнику пришлось согласиться с правилами конкурса',
			''
		]
	},
	{
		ru: 'смелость',
		en: ['courage', 'bravery', 'nerve', 'guts'],
		desc: [
			'courage - это более общий термин, показывающий смелость в трудных ситуациях',
			'bravery - более сильный термим, чем courage, храбрость.',
			'nerve - подчеркивает уверенность, необходимую для принятия мер',
			'guts - неформальный синоним courage'
		],
		ex: [
			'You have shown great courage in coming to testify - Вы проявили большое мужество, придя для дачи показаний ',
			'A policeman who chased a burglar despite a serious leg injury has received an award for bravery - Полицейский, который преследовал грабителя, несмотря на серьезную травму ноги, получил награду за храбрость',
			"I didn't have the nerve to disagree with him - У меня не хватило смелости не согласиться с ним",
			"I didn't have the guts to go on my own - У меня не хватило смелости пойти самому",
			''
		]
	},
	{
		ru: 'умение, способность',
		en: ['ability', 'skill', 'competence', 'talent', 'capability'],
		desc: [
			'ability - это природная способность делать что-то хорошо',
			'skill - умение, что-либо сделать, но в результате тренировок или опыта',
			'competence - склонность или личное качество, которое помогает хорошо выполнить работу, задание',
			'talent - это необычная природная одарённость, особенно касающаяся каких-то творческих моментов',
			'capability - это практическое умение что-то делать хорошо'
		],
		ex: [
			'I admire his ability to stay calm in a difficult situations - Мне нравится его способность оставаться спокойным в трудных ситуациях',
			'Portait paintig needs a lot of skill - Рисование портретов требует большого мастерства',
			'Does she have the necessary competence in foreing languages? - Обладает ли она необходимой компетенцией в области иностранных языков?',
			"She's done well in the theatre - we always knew she had talent - Она хорошо играла в театре - мы всегда знали, что у нее есть талант",
			'We have the capability to produce a better machine than this - У нас есть возможность создать машину лучше, чем эта',
			''
		]
	},
	{
		ru: 'гнев, злость, раздражительность',
		en: [
			'anger',
			'annoyance',
			'irritation',
			'resentment',
			'fury',
			'rage'
		],
		desc: [
			'anger - гнев, это чувство сильного раздражения',
			'annoyance - раздражительность, это чувство, когда ты слегка расстроен или нетерпелив',
			'irritation - легкое раздажение, это чувство недовольства или нетерпения',
			'resentment - недовольство, это чувство, когда ты испытываешь злость и расстройство, из-за того, что кто-то что-то сделал',
			'fury - ярость, это очень сильный гнев',
			'rage - неожиданный сильный гнев'
		],
		ex: [
			'He managed to control his anger - Он сумел контролировать своё гнев',
			'There was a tone of annoyance in her voice - В её голосе звучала нотка раздражения',
			'She wathed with irritation as he tired to fix the wheel again - Она смотрела с недовольством как он пытался починить снова колесо',
			'The decision casued a lot of resentment among local people - Это решение вызвало много недовольства среди местных людей',
			'He shouted at us in fury - Он в ярости кричал на нас',
			'Her face was red with rage - Его лицо покраснело от гнева',
			''
		]
	},
	{
		ru: 'ответ',
		en: ['answer', 'reply', 'response', 'acknowledgment [ɪkˈnɑlɪdʒmənt]'],
		desc: [
			'answer - ответ, это что-то что вы говорите или пишите, когда кто-то задал вам вопрос',
			'reply - ответ, как правило либо на письмо, либо на телефонный звонок',
			'response - что-то что вы делаете или говорите как реакция на что-то',
			'acknowledgment - письмо или записка, которую высылают, если что-то было получено'
		],
		ex: [
			'The answer to your question is yes - Ответ на твой вопрос - да',
			"We wrote last week, but haven't had a reply yet - Мы писали на прошлой недели, но до сих пор не получили ответ",
			'There was no response to our call for help - Не было ответа на наш зов о помощи',
			"We didn't even receive an from the acknowledgment council - Мы даже не получили никаго ответа от совета",
			'a letter of acknowledgment - письмо с подтверждением',
			''
		]
	},
	{
		ru: 'помощник, ассистент',
		en: ['assistant', 'helper', 'deputy', 'auxiliary'],
		desc: [
			'assistant - ассистент, это человек, который помогает кому-то, потому что это часть его работы',
			'helper - помощник, человек, который помогает кому-то выполнять часть работы или задачи, особенно без оплаты',
			'deputy - человек, который принимает решения когда управляюший или начальник отсутствует, заместитель начальника',
			'auxiliary - человек, который помогает другим работникам'
		],
		ex: [
			'His assistant makes all the appointments - Его помощник назначает все встречи',
			'The children can be my helpers for the day - Дети могут быть моими помощниками на этот день',
			"She's acting as deputy while her department manager is in hospital - Она действует как заместитель начальника, пока её менеджер по департаменту находится в больнице",
			'He works as a nursing auxiliary in the local hospital - Он работает как помощник медсестры в местной больнице',
			'auxiliary verb - вспомогательный глагол',
			''
		]
	},
	{
		ru: 'неприязнь',
		en: ['dislike', 'hatred', 'hate', 'disgust'],
		desc: [
			'Dislike - легкое или умеренное негативное чувство',
			'Hatred - ненависть к чему-то или кому-то',
			'Hate - ненависть к кому-то',
			'Disgust - интенсивное чувство отвращения или глубокого неодобрения'
		],
		ex: [
			'I dislike the taste of olives - Мне не нравится вкус оливок',
			'She has a deep hatred for her former boss - Она испытывает глубокую ненависть к своему бывшему боссу',
			'Her eyes were full of hate - Её глаза были полны ненависти',
			'The sight of the rotting food filled her with disgust - Вид гниющей еды вызвал у нее отвращение',
			''
		]
	},
	{
		ru: 'бой',
		en: ['fight', 'battle', 'war', 'conflict'],
		desc: [
			'Fight - это общий термин для обозначения физической или словесной перепалки',
			'Battle - это конкретный случай официального сражения между группами',
			'War - это длительный и организованный конфликт между нациями, государствами или группами',
			'Conflict - общий термин для обозначения ситуации, в которой противоборствующие силы или интересы находятся в оппозиции'
		],
		ex: [
			'The two friends got into a fight over a trivial matter - Два друга поссорились из-за пустяка',
			'The battle between the two armies lasted for hours - Битва между двумя армиями длилась несколько часов',
			'The war between the two nations lasted for decades - Война между двумя странами длилась десятилетиями',
			'The conflict between the two parties has been ongoing for years - Конфликт между двумя сторонами продолжается уже много лет'
		]
	},
	{
		ru: 'тема',
		en: ['subject', 'topic', 'subject matter', 'matter', 'theme'],
		desc: [
			'subject - предмет (область знания, которую изучают)',
			'topic - тема разговора',
			'subject matter - тема для книг или программ по телевидению',
			'matter - вопрос, проблема',
			'theme - тема чего-то'
		],
		ex: [
			'My favourite subject is math - Мой любимый предмет — математика',
			'It was a very sensitive topic - Это была очень деликатная тема',
			'There is very adult subject matter - У нас есть одна очень взрослая тема',
			'We cannot interfere in this matter - И мы не можем вмешиваться в этот вопрос',
			'A common theme connects the stories - Эти рассказы связаны общей темой',
			''
		]
	},
	{
		ru: 'талант',
		en: ['talent', 'gift', 'aptitude', 'knack'],
		desc: [
			'talent - природная способность в чём-то',
			'gift - дар',
			'aptitude - способность (которую можно развивать)',
			'knack - (неформально) склонность (в негативном ключе)'
		],
		ex: [
			'She is a real talent - Она — настоящий талант',
			'She has a gift for making people laugh - У неё дар смешить людей',
			'I have a very strong aptitude to memorising - Я имею исключительную способность к запоминанию',
			'He has a knack for getting into trouble - Он мастер попадать в неприятные истории'
		]
	},
	{
		ru: 'тип ',
		en: ['type', 'kind', 'sort', 'category', 'species', 'genre'],
		desc: [
			'type - общий термин',
			'kind, sort - вид, род',
			'category - категория',
			'species - группы живых существ',
			'genre - жанр'
		],
		ex: [
			'Each weapon type can be upgraded - Каждый тип оружия может быть улучшен',
			'She always really liked that kind of music - Она всегда любила этот род музыки',
			'I love any sort of big show - Я люблю любые масштабные шоу',
			'This category includes many diverse programs - Эта категория объединяет самые разные программы',
			'Among these are some plankton species - Есть среди них и планктонные виды',
			'This book is a classic of the mystery genre - Эта книга является классикой детективного жанра'
		]
	},
	{
		ru: 'работа',
		en: ['work', 'labour', 'drugdery'],
		desc: [
			'work - общий термин',
			'labour - труд',
			'drugdery - тяжелая работа, нудная работа'
		],
		ex: [
			'The real work took place underground - Основная работа была проделана под землей',
			'She was in labour for five hours - Она рожала пять часов',
			"It's drudgery going through terabytes of data - Это тяжелая работа, проходящая через терабайты данных"
		]
	},
	{
		ru: 'беспокойство',
		en: ['worry', 'anxiety'],
		desc: [
			'worry - общий термин',
			'anxiety - тревога (сильное беспокойство)'
		],
		ex: [
			"But I don't need your worry - Но мне не нужны твои переживания",
			'There is real anxiety about the effects of radiation - Существует реальное беспокойство из-за последствий радиации'
		]
	},
	{
		ru: 'дом',
		en: ['house', 'home'],
		desc: [
			'House - в контектсе здания',
			'Home - эмоциональная привязанность к чему-то'
		],
		ex: [
			'Our family lives in a large, bright house - Наша семья живет в большом, светлом доме',
			"I'm at home - Я дома"
		]
	},
	{
		ru: 'пляж, берег моря',
		en: ['beach', 'shore', 'coast', 'seaside'],
		desc: [
			'beach - область, которая находится у самого моря, как правило, покрытые песком или маленькими камнями',
			'shore - берег, это часть земли, которая находится на самом краю моря или озера',
			'coast - часть страны, которая находится у моря',
			'seaside - область возле моря куда едут люди, чтобы отдохнуть'
		],
		ex: [
			'Some children were digging in the sand on the beach - Некоторые дети копались в песке на пляже',
			'Stood stood on the shore waving as the boat sailed away - Она стояла на берегу и махала рукой, в то время как лодка отплывала всё дальше',
			'After ten weeks at sea, the sailors saw the coast of America - После десяти недель в море, моряки увидели береговую линию Америки',
			'a day at the seaside - день у моря (для отдыха)',
			'seaside hotels - отели на берегу моря'
		]
	},
	{
		ru: 'новичок, начинающий',
		en: ['beginner', 'apprentice', 'novice', 'learner'],
		desc: [
			'beginner - это человек, который начинает что-то изучать или чем-то заниматься с нуля',
			'apprentice - молодой человек, который работает ассистентом у употныго человека для того, чтобы чему-то у него учиться, подмастерье',
			'novice - это человек, который имеет очень малый опыт или слабые навыки в какой-то работе, или виде спорта, начинающий',
			'learner - человек, который чему-то учиться'
		],
		ex: [
			'This course is for absolute beginners - Этот курс для абсолютных новичков',
			"He's started work as a plumber's apprentice - Он начал работать учеником сантехника",
			"He's still a novice at rowing - Он всё ещё новичок в гребле",
			'The evening swimming classes are specially for adult learners - Вечерние занятия по плаванию специально для взрослых учеников'
		]
	},
	{
		ru: 'безумие',
		en: ['Madness', 'Frenzy', 'Insanity', 'Folly', 'Lunacy'],
		desc: [
			'Madness - безумие (состояние тяжелого психического расстройства или помешательства)',
			'Frenzy - неистовство (описывает интенсивное, дикое или неконтролируемое состояние ума или эмоций, часто связанное с гневом или возбуждением)',
			'Insanity - сумасшествие (юридический и медицинский термин для тяжелого психического расстройства или психоза)',
			'Folly - безрассудство (относится к недостатку здравого смысла, мудрости или рассудительности)',
			'Lunacy - устаревший термин помешательства'
		],
		ex: [
			'Her madness was evident in her erratic behavior and constant mood swings - Ее безумие проявлялось в неуравновешенном поведении и постоянных перепадах настроения',
			'The frenzy of the crowd was overwhelming as they cheered for their favorite team - Неистовая толпа болела за свою любимую команду',
			'The insanity of the war was evident in the destruction and chaos it left behind - Безумие войны проявилось в разрушениях и хаосе, которые она оставила после себя',
			"The folly of the company's decision to invest in the failing industry was evident in their financial losses - Безрассудство решения компании инвестировать в провальную отрасль проявилось в финансовых потерях",
			"The lunacy of the situation was evident in the absurdity of the characters' actions - Безумие ситуации проявилось в абсурдности действий персонажей"
		]
	}
]

export default noun