let verb = [
	{
		ru: 'демонстрировать, выполнять, выступать',
		en: ['perform', 'carry out', 'fulfil', 'execute'],
		desc: [
			'perform - выполнить действие',
			'carry out - проводить, осуществить',
			'fulfil - выполнять',
			'execute - (формально) выполнить, что было спланировано или была договорённость'
		],
		ex: [
			'The doctor had to perform surgery immediately - Врачу пришлось провести операцию немедленно',
			'Also we can carry out competitor analysis - Также мы можем проводить анализ конкурентов',
			'But we must also fulfil past commitments - Но нам надо и выполнять прежние обязательства',
			'A computing device may interpret and execute instructions - Так что компьютер может интерпретировать и выполнять инструкции',
			''
		]
	},
	{
		ru: 'защищать',
		en: ['protect', 'defend', 'guard', 'shield', 'shelter'],
		desc: [
			'protect - общий термин',
			'defend - защищать от кого-то',
			'guard - охранять',
			'shield - защищать кого-то как щит',
			'shelter - укрывать'
		],
		ex: [
			'It will protect you from infections - Это поможет защитить вас от инфекций',
			'Every dog will defend its teritory - Любая собака будет защищать свой дом',
			'His one duty is to guard the king - Их задачей было охранять самого короля',
			'I tried to shield you from this - Я пытался защитить тебя от этого',
			'They had no shelter during the rain - Им негде было укрыться во время дождя',
			''
		]
	},
	{
		ru: 'тащить, тянуть',
		en: ['pull', 'drag', 'haul', 'tow', 'jerk'],
		desc: [
			'pull - общий термин',
			'drag - тащить что-то по земле; перетащить что-то компьютерной мышкой',
			'haul - тащить что-то с усилием',
			'tow - буксировать',
			'jerk - дернуть'
		],
		ex: [
			'You can push it or pull it - Вы можете только нажимать или тянуть их',
			'Now help me drag these bodies over to the well - Теперь помоги мне перетащить эти тела к стене',
			"She can't haul him back for questioning on her own - Она не может тащить его обратно на допрос сама",
			'Our car had been towed away - К тому времени нашу машину уже отбуксировали',
			'Он неожиданно дёрнул головой - He gave a sudden jerk of his head',
			''
		]
	},
	{
		ru: 'поднять',
		en: ['raise', 'lift', 'hoist', 'pick up', 'elevate'],
		desc: [
			'raise - поднять что-то выше уровня (чаще с абстрактными понятиями)',
			'lift - поднять что-то выше уровня (чаще про что-то конктретное)',
			'hoist - технический термин',
			'pick up - поднять что-то руками; забрать кого-то на машине',
			'elevate - (формальный)'
		],
		ex: [
			'The team need to raise their game - Команде необходимо поднять уровень своей игры.',
			"I couldn't even lift my foot - Я даже не мог поднять ногу",
			'The cargo was hoisted up onto the ship - Груз был поднят на борт корабля',
			'He stopped to pick up a penny - Он остановился чтобы подобрать монетку',
			'Они наблюдали как статую медленно поднимали на позицию - They watched as the statue was slowly elevated into position',
			''
		]
	},
	{
		ru: 'светить',
		en: ['shine', 'glow', 'blaze', 'dazzle', 'glitter'],
		desc: [
			'shine - светиться, сиять, блистать',
			'glow - светиться (в темноте)',
			'blaze - полыхать, гореть',
			'dazzle - ослеплять',
			'glitter - мерцать, сверкать'
		],
		ex: [
			'She had shining black hair - У неё были чёрные блестящие волосы',
			'This toy glows in the dark - Эта игрушка светится в темноте',
			'The sun blazed down on the dry earth - Солнце нещадно жгло высохшую землю',
			'She dazzled me with a smile - Она подарила мне ослепительную улыбку',
			'All is not gold that glitters - Не все то золото, что блестит',
			''
		]
	},
	{
		ru: 'остановиться, прекратить',
		en: ['stop', 'end', 'pause', 'cease'],
		desc: [
			'stop - общий термин',
			'end - когда что-то прекращается',
			'pause - приостановить',
			'cease - (формальный) прекратить'
		],
		ex: [
			'He wanted them to stop fighting - И призвал прекратить с ними бороться',
			'Yes, you should end this friendship - И они требуют прекратить эту дружбу',
			'Sometimes it can be useful to temporarily pause a large transaction - Иногда удобно приостановить на время большую операцию',
			'The fighting along the border has temporarily ceased - Боевые действия вдоль границы временно прекратились',
			''
		]
	},
	{
		ru: 'следовать',
		en: ['follow', 'chase', 'pursue', 'stalk'],
		desc: [
			'Follow - может быть более нейтральным',
			'Chase (доганять, преследовать) - преследовать с целью догнать',
			'Pursue - может быть более официальным вариантом chase',
			'Stalk - преследовать со злым умыслом'
		],
		ex: [
			'I will follow your advice - Я последую вашим советам',
			'The police are chasing the car - Полиция преследует машину',
			'The police were pursuing an escaped prisoner - Полиция преследовала сбежавшего заключённого',
			'He stalked his prey in the forest - Он преследовал свою добычу в лесу',
			''
		]
	},
	{
		ru: 'получить',
		en: ['get', 'obtain', 'gain', 'secure', 'acquire'],
		desc: [
			'Get - получить что-то',
			'Obtain (заполучить) - означает предпринять какое-то действие, чтобы получить что-то',
			'Gain - получить что-то как результат труда или попыток (акцент на результат)',
			'Secure - добиться чего-то что является чем-то важным',
			'Acquire - формальный термин, означает стать владельцем чего-либо '
		],
		ex: [
			'I got a new letter - Я получил новое письмо',
			'He obtained a degree in engineering - Он получил диплом по инженерному делу',
			'Она набрала вес после беременности - She gained weight after the pregnancy',
			'The company secured a large contract - Компания получила крупный контракт',
			'The company acquired a new subsidiary - Компания получила новую дочернюю компанию',
			''
		]
	},
	{
		ru: 'давать, дарить',
		en: ['give', 'present [prɪˈzent]', 'donate', 'confer', 'grant'],
		desc: [
			'Give - общий термин',
			'Present (вручить, преподносить) - более официальный термин, используется с with',
			'Donate - означает «подарить» или «пожертвовать», донатить',
			'Confer (даровать) - формальный термин, может быть более дискуссионным',
			'Grant - офицально даровать что-либо'
		],
		ex: [
			'She gave me a gift - Она подарила мне подарок',
			'The company presented him with a gift - Компания преподнесла ему подарок',
			"There's one other blessing you must confer - Есть и другое благословение, которое ты должен даровать",
			'He donated money to the charity - Он пожертвовал деньги благотворительной организации',
			'The government granted a loan to the business - Правительство предоставило кредит бизнесу',
			''
		]
	},
	{
		ru: 'идти, ехать',
		en: ['go', 'leave', 'depart', 'set off', 'disappear'],
		desc: [
			'Go - общий термин',
			'Leave - уходить, покидать',
			'Depart - (формально) отправляться куда-то',
			'Set off - отправиться в путь',
			'Disappear - исчезнуть'
		],
		ex: [
			"I'm going to the store - Я иду в магазин",
			'He left the house early this morning - Он рано утром ушел из дома',
			'The train departs at 5 pm - Поезд отправляется в 5 часов вечера',
			'They set off on their hiking trip this morning - Они отправились в свой поход сегодня утром',
			'The magician made the rabbit disappear - Фокусник заставил кролика исчезнуть',
			''
		]
	},
	{
		ru: 'направлять',
		en: ['guide', 'direct', 'lead', 'steer', 'conduct'],
		desc: [
			'guide - показать путь до места',
			'direct - давать инструкции как куда-то прийти',
			'lead - вести за собой',
			'steer - заставить кого-то или что-то двигаться в указанном направлении',
			'conduct - (формально) проводить или сопроводить кого-то'
		],
		ex: [
			'She guided us through the busy streets to the cathedral - Она провела нас к собору по шумным улицам',
			'They were directed to work at the archives - Их направили работать в архив',
			'He leads a full, active life - Он ведёт полноценную, активную жизнь',
			'The boat steered out to sea - Судно направлялось в открытое море',
			'He conducted us to the palace - Он проводил нас во дворец',
			''
		]
	},
	{
		ru: 'вредить',
		en: ['harm', 'damage', 'hurt', 'injure', 'wound'],
		desc: [
			'harm - физический вред',
			'damage - что-то ломать или уничтожать',
			'hurt - ощущать боль; поранить кого-то',
			'injure - причинить боль кому-то, или получить травму',
			'wound - получить или нанести кому-то открытую рану'
		],
		ex: [
			"She didn't think to harm me - Она не думала вредить мне",
			'The snow damaged the roof - Снег повредил крышу',
			'My back hurts - У меня болит спина',
			'She fell and injured herself - Она упала и ушиблась',
			'The wound left a deep scar - После раны остался глубокий шрам',
			''
		]
	},
	{
		ru: 'увеличить, возрастать',
		en: ['increase', 'expand', 'enlarge', 'extend'],
		desc: [
			'increase - увеличить уровень чего-то',
			'expand - расширять',
			'enlarge - увеличить [сделать что-то больше]',
			'extend - продливать'
		],
		ex: [
			'The amount of work increased - Объем работы увеличился',
			'Reading helped expand her vocabulary - Чтение помогло расширить её словарный запас',
			'We had the photo enlarged - Нам увеличили фотографию',
			'She extended her visit by another day - Она продлила свой визит ещё на день',
			''
		]
	},
	{
		ru: 'убить',
		en: [
			'kill',
			'murder',
			'assassinate',
			'execute',
			'slaughter',
			'put down'
		],
		desc: [
			'kill - общий термин',
			'murder - убить намеренно',
			'assassinate - убить знаменитого человека',
			'execute - казнить [убить по пригову]',
			'slaughter - устроить массовое убийство',
			'put down - усыпить [убить старое или больное животное]'
		],
		ex: [
			'He accidentally killed this man - Он случайно убил этого человека',
			'He deliberately murdered this man - Он намеренно убил этого человека',
			'He assassinated a prominent politician - Он убил видного политического деятеля',
			'The executioner executed the prisoner - Палач казнил заключённого',
			'Thousands of people were brutally slaughtered by soldiers - Тысячи людей были зверски убиты солдатами',
			'The old dog was put down - Старую собаку усыпили',
			''
		]
	},
	{
		ru: 'нравиться',
		en: ['like', 'enjoy', 'love', 'appreciate'],
		desc: [
			'like - общий термин',
			'enjoy - наслаждаться',
			'love - любить',
			'appreciate - ценить'
		],
		ex: [
			'He likes to read - Он любит читать',
			'I always enjoy travelling in Europe - Я всегда наслаждаюсь поездками по Европе',
			'I love this woman - Я люблю эту женщину',
			'I will appreciate other people more - Я буду больше ценить других людей',
			''
		]
	},
	{
		ru: 'забыть',
		en: ['forget', 'Leave'],
		desc: [
			'forget - забывать что-то сделать или забывать кого-то',
			'leave - в значении забыть какую-то вещь'
		],
		ex: [
			'I forgot his name - Я забыл его имя',
			'I forgot to do it - Я забыл сделать это',
			'I left my bag at home - Я забыл/оставил свою сумку дома',
			''
		]
	},
	{
		ru: 'останавливаться',
		en: ['stop ', 'stay'],
		desc: [
			'stop - если просто куда-то шли и остановились',
			'stay - пишется в значении погостить'
		],
		ex: [
			'We stopped near the bus stop - Мы остановились возле остановки ',
			'We stayed at a hotel - Мы остановились в гостинице',
			''
		]
	},
	{
		ru: 'обвинять',
		en: ['blame ', 'accuse'],
		desc: [
			'blame - означает винить кого-то за что-то плохое или проблему',
			'accuse - означает обвинить кого-то в совершении преступления или недобросовестных действиях'
		],
		ex: [
			'He was accused of a felony - Его обвинили в тяжком преступлении',
			'They blamed her for the accident - Они обвинили её в случившемся',
			''
		]
	},
	{
		ru: 'справляться',
		en: ['cope', 'can handle'],
		desc: [
			'cope - обычно подразумевает управление сложной ситуацией или эмоциональным испытанием, часто с ощущением борьбы или выносливости',
			'can handle - подразумевает возможность управлять или справляться с чем-то, часто в более общем смысле'
		],
		ex: [
			"She had to cope with her husband's death - Она должна была справиться с смертью мужа",
			'She can handle the situation without help - Она может справиться с ситуацией без помощи',
			''
		]
	},
	{
		ru: 'предполагать',
		en: ['guess', 'suppose'],
		desc: [
			'guess - подразумевает неопределенность и отсутствие доказательств',
			'suppose - подразумевает более высокий уровень уверенности на основе доступной информации'
		],
		ex: [
			"I'm going to guess that it will rain tomorrow. (Here, the speaker is uncertain about the weather.) - Я предположу, что завтра будет дождь.(Здесь говорящий не уверен в погоде.)",
			'Suppose it rains tomorrow; we should bring an umbrella. (Here, the speaker has some information about the weather and is making an reasonable assumption.) - Предположим, что завтра будет дождь; мы должны принести зонт.(Здесь говорящий имеет некоторые сведения о погоде и делает обоснованное предположение)',
			''
		]
	},
	{
		ru: 'запрещать',
		en: ['prohibit', 'forbit'],
		desc: [
			'prohibit - более формальной термин ',
			'forbit - более общий и может использоваться в разных вариантах '
		],
		ex: [
			"By court order, he's been forbidden to leave the house - По решению суда, ему запретили выходить из дома",
			'I forbid you to go to this party - Я запрещаю тебе идти на эту вечеринку',
			''
		]
	},
	{
		ru: 'спасать, спасение',
		en: ['save', 'rescue'],
		desc: [
			'save - означает предотвратить причинение вреда или возникновение опасности',
			'rescue - означает вывести кого-то или что-то из уже существующей опасной или вредной ситуации'
		],
		ex: [
			'You saved me from ruin - Вы спасли меня от гибели',
			'You rescued me from drug addiction - Вы спасли меня от наркозависимости',
			''
		]
	},
	{
		ru: 'менять',
		en: [
			'change',
			'alter',
			'modify',
			'convert',
			'vary',
			'shift',
			'transform'
		],
		desc: [
			'change - это наиболее общий термин',
			'alter - подразумевает более конкретное или детальное изменение',
			'modify - обычно подразумевает изменение или адаптацию чего-то',
			'convert - подразумевает более значительное или глубокое изменение',
			'vary -  подразумевает изменение или различие в каком-то аспекте',
			'shift - подразумевает изменение положения или фокуса',
			'transform - подразумевает изменение сущности или природы'
		],
		ex: [
			'Change your shirt for a larger one. - Поменяй рубашку на более большую',
			"We've had to alter our plans. - Нам пришлось изменить наши планы",
			'The engine was modified to improve its performance. - Двигатель был модифицирован для улучшения его характеристик',
			"We're going to convert the spare bedroom into an office. - Мы собираемся переоборудовать запасную спальню в офис",
			"Try to vary the children's diet a little. - Попробуйте немного разнообразить рацион детей",
			"We've shifted over to low-fat milk - Мы перешли на обезжиренное молоко",
			'The riverside area has been transformed into a shopping and sports complex. - Прибрежная зона была преобразована в торгово-спортивный комплекс',
			''
		]
	},
	{
		ru: 'собирать',
		en: ['collect', 'gather', 'assemble', 'hoard '],
		desc: [
			'collect - это общее слово для описания процесса собирания или сбора вещей или данных',
			'gather - для описания процесса собирания или сбора вещей или людей',
			'assemble - для описания процесса собирания или сбора вещей или частей для создания целого объекта',
			'hoard - для описания процесса собирания или сбора вещей или ресурсов для последующего использования или хранения'
		],
		ex: [
			'The museum collects rare artifacts. - Музей собирает редкие артефакты',
			'The family gathered around the table for dinner. - Семья собралась вокруг стола для обеда',
			'The engineer assembled the new machine. - Инженер собрал новую машину',
			'The squirrel hoarded nuts for the winter. - Сорока собирала орехи для зимы',
			''
		]
	},
	{
		ru: 'жаловаться',
		en: ['complain', 'object', 'protest', 'grumble', 'whine'],
		desc: [
			'complain - это общий термин для выражения жалобы',
			'object - это формальное выражение несогласия',
			'protest -  это публичное выражение неудовлетворения',
			'grumble - это легкая жалоба, ворчать',
			'whine - это жалоба на высоких тонах, похожая на детскую, ныть, плакаться'
		],
		ex: [
			"I have no complaints about the quality of his work, but I don't enjoy his company - У меня нет жалоб на качество его работы, но я не люблю его компанию",
			"I object to the new policy because it affects our team's workflow - Я возражаю против новой политики, потому что она затрагивает наш рабочий процесс",
			"The protesters gathered in the city square to demonstrate against the government's decision - Протестующие собрались на площади, чтобы протестовать против решения правительства",
			"I'm grumbling about the traffic because it's taking too long - Я жалуюсь на пробки, потому что они занимают слишком много времени",
			"Stop whining about the game; you're just not good at it - Стоп, не жалуйся о игре; ты просто не хороший игрок",
			''
		]
	},
	{
		ru: 'копировать',
		en: ['copy', 'reproduce', 'duplicate', 'clone', 'replicate'],
		desc: [
			'copy - подразумевает менее точную имитацию',
			'reproduce - означает создать более точное представление',
			'duplicate - относится к точной копии',
			'clone - конкретно означает создание генетически идентичной версии',
			'replicate - подразумевает создание идентичной или очень похожей версии'
		],
		ex: [
			'I made a copy of the painting using acrylic paints - Я сделал копию картины с помощью акриловых красок',
			'The printer can reproduce high-quality images from digital files - Принтер может воспроизводить высококачественные изображения из цифровых файлов',
			'The company issued a duplicate invoice to correct the error on the first one - Компания выписала дубликат счета-фактуры, чтобы исправить ошибку в первом счете-фактуре',
			'Scientists successfully cloned a sheep using somatic cell nuclear transfer - Ученые успешно клонировали овцу с помощью ядерного переноса соматических клеток',
			'The researchers were able to replicate the results of the previous study - Исследователи смогли повторить результаты ',
			'предыдущего исследования',
			''
		]
	},
	{
		ru: 'резать',
		en: ['cut', 'slice', 'chop', 'slash'],
		desc: [
			'cut - это наиболее общий термин, разрезать что-то на части',
			'slice - относится к тонким, плоским разрезам',
			'chop - подразумевает грубые, силовые разрезы',
			'slash - описывает чертежный разрез, который оставляет продолговатый след'
		],
		ex: [
			'She cut the bread into slices - Она нарезала хлеб ломтиками',
			'She sliced the tomatoes for the salad - Она нарезала помидоры для салата',
			'He chopped the onions for the stew - Он нарезал лук для рагу',
			"The swordsman slashed at his opponent's armor - Фехтовальщик разрезал доспехи своего противника",
			''
		]
	},
	{
		ru: 'умереть',
		en: ['die', 'passed away', 'be gone'],
		desc: [
			'die - общий термин',
			'passed away - более вежливый термин, чем die, скончаться, уйти из жизни',
			'be gone - более вежливый термин, чем die'
		],
		ex: [
			'That man died a long time ago - Этот человек давно умер',
			'The woman passed away a week ago - Женщина скончалась неделю назад',
			"When I'm gone, do whatever you want - Когда меня не станет, делайте что хотите",
			''
		]
	},
	{
		ru: 'победить',
		en: [
			'win', 'defead',
			'beat', 'conquer',
			'overcome', 'triumph',
			'thrash'
		],
		desc: [
			'win - более общий термин ',
			'defead - одержать победу над кем-то',
			'beat - когда вы выигрываете у своего конкурента, или у команды',
			'conquer - подразумевает получение контроля или доминирования',
			'overcome - означает успешно справиться с проблемой',
			'triumph - означает грандиозную или славную победу',
			'thrash - неформальный термен, означает более интенсивную или жестокую победу'
		],
		ex: [
			'I never win at cards - Я никогда не выигрываю в карты',
			'The team suffered a defeat in the championship game - Команда потерпела поражение в игре чемпионата',
			'The boxer beat his opponent in the match - Боксер победил своего соперника в матче',
			'The army conquered the city after a long siege - Армия захватила город после долгой осады',
			'The athlete overcame her injury to win the gold medal - Спортсменка преодолела травму и завоевала золотую медаль',
			'The team triumphed in the championship game, winning their first title in decades - Команда победила в матче за звание чемпиона, завоевав свой первый титул за последние десятилетия',
			'The wrestler thrashed his opponent in the match - Борец разгромил своего соперника в матче',
			''
		]
	},
	{
		ru: 'пятнать',
		en: ['sully - [ˈsʌlɪ]', 'tarnish - [ˈtɑːrnɪʃ]'],
		desc: [
			'sully - подчеркивает более преднамеренную и серьезную форму повреждения, часто репутации или характера',
			'tarnish - чаще используется для описания окисления или обесцвечивания физической поверхности, а также может использоваться метафорически, подобно sully'
		],
		ex: [
			'This woman has sullied (tarnished) her honor - Эта женщина запятнала свою честь',
			'There are many metals, such as gold, which never exhibit rust or tarnish - Есть много металлов, например золото, которые никогда не ржавеют и не потускнеют',
			''
		]
	},
	{
		ru: 'завершить, выполнить',
		en: ['accomplish', 'acheive', 'carry out', 'pull off'],
		desc: [
			'accomplish - успешно завершить начатое дело',
			'acheive - добиться успеха после очень усердных попыток это сделать',
			'carry out - что-то сделать, особенно что было запланированно',
			'pull off - успешно что-либо сделать, особенно если это было неожиданно'
		],
		ex: [
			"You won't accomplish anything by arguing - Споря, вы ничего не добьетесь",
			'Have you achieved all your aims? - Достигли ли вы всех своих целей?',
			'Doctors carried out tests on the patients - Врачи проводили обследование пациентов',
			'The deal will be great for the company. If we can pull it off - Сделка будет очень выгодной для компании. Если нам удастся ее провернуть',
			''
		]
	},
	{
		ru: 'злить, раздражать, выводить из себя',
		en: ['annoy', 'irritate', 'bother', 'bug'],
		desc: [
			'annoy - заставлять кого-то чувствовать лёгкий гнев или нетерпение',
			'irritate - заставлять кого-то чувствовать гнев или нетерпение',
			'bother - заставлять кого-то чувствовать лёгкое расстройство или лёгкое раздражение',
			'bug (informal) - заставлять кого-то чувствовать лёгкий гнев, особенно когда вы делаете это на протяжении долгого времени'
		],
		ex: [
			'Their rude behaviour really annoyed us - Их грубое поведение очень разозлило нас',
			'It irritates me when the trains run late - Меня раздражает когда поезда прибывают поздно',
			'It bothers me that it takes so long to get a reply - Меня беспокоит, что уходит столько времени на получение ответа',
			'That noise is realy bugging me - Этот шум меня действительно раздражает',
			''
		]
	},
	{
		ru: 'спрашивать',
		en: ['ask', 'demand', 'beg', 'request'],
		desc: [
			'ask - задать вопрос, чтобы заставить кого-то сделать что-то',
			'demand - настойчиво просить чего-то, требовать',
			'beg - умолять, просить кого-то эмоционально что-то сделать',
			'request - попросить чего-либо вежливо, или формально'
		],
		ex: [
			'Ask your father to teach you how to drive - Попроси твоего отца научить тебя водить машину',
			'I demand an explanation for your behaviour - Я требую объяснения за твоё поведение',
			'His mother begged him not to go - Его мать умоляла его не идти',
			'I am enclosing the leaflets you requested - Я посылаю брошюры, которые вы просили',
			''
		]
	},
	{
		ru: 'не согласиться',
		en: ['disagree', 'differ', 'argue', 'dispute', 'contradict'],
		desc: [
			'Disagree - значит иметь другое мнение или идею',
			'Differ - значит отличаться или иметь разницу',
			'Argue - это излагать свое мнение или пытаться убедить',
			'Dispute - это оспаривать или оспаривать что-то',
			'Contradict - говорить или делать что-то противоположное тому, что сказал или сделал кто-то другой'
		],
		ex: [
			'I disagree with your opinion - Я не согласен с вашим мнением',
			'The two theories differ in their explanations - Обе теории различаются в своих объяснениях',
			'I argue that the policy is flawed - Я утверждаю, что политика несовершенна',
			'The company disputes the allegations - Компания оспаривает обвинения',
			'Her statement contradicts what she said earlier - Ее заявление противоречит тому, что она говорила ранее',
			''
		]
	},
	{
		ru: 'не одобрять',
		en: ['disapprove', 'object', 'criticize', 'condemn'],
		desc: [
			'Disapprove - значит иметь неблагоприятное мнение, не обязательно выражая активное несогласие',
			'Object - значит активно выражать несогласие или несогласие',
			'Criticize - это оценивать и подробно указывать на недостатки или изъяны',
			'Condemn - самое сильное выражение, подразумевающее суровое моральное осуждение чего-то совершенно неприемлемого'
		],
		ex: [
			'I disapprove of the new policy - Я не одобряю новую политику',
			'I object to the proposal - Я возражаю против этого предложения',
			'The paper criticized the new movie - Газета раскритиковала новый фильм',
			'The government condemned the human rights abuses in the country - Правительство осудило нарушения прав человека в стране',
			''
		]
	},
	{
		ru: 'потерпеть неудачу',
		en: ['fail', 'neglect', 'omit', 'overlook'],
		desc: [
			'Fail - подразумевает отсутствие усилий или достижений',
			'Neglect (пренебрегать) - подразумевает недостаток внимания или заботы',
			'Omit (пропускать) - подразумевает намеренный выбор не учитывать или исключить',
			'Overlook (упускать из виду) - значит не обратить внимания или не заметить'
		],
		ex: [
			'The student failed the exam due to lack of preparation - Студент не сдал экзамен из-за недостаточной подготовки',
			'The owner neglected the garden, and it became overgrown - Хозяин пренебрегал садом, и он зарос',
			'The author omitted some details to make the story more concise - Автор опустил некоторые детали, чтобы сделать рассказ более кратким',
			'I overlooked the important detail in the report - Я упустил из виду важную деталь в отчете',
			''
		]
	},
	{
		ru: 'найти',
		en: ['find', 'discover', 'come across', 'encounter'],
		desc: [
			'Find - это общий термин, обозначающий местонахождение чего-то потерянного',
			'Discover - подразумевает нахождение чего-то нового или ранее неизвестного',
			'Come across (наткнуться) - (неформально) подразумевает случайную встречу с чем-то',
			'Encounter - (формально) означает встречу или контакт с чем-то или кем-то'
		],
		ex: [
			'I found the book on the shelf - Я нашел книгу на полке',
			'She discovered a new species of plant in the jungle - Она открыла новый вид растений в джунглях',
			'I came across an old friend while shopping - Я наткнулся на старого друга во время шопинга',
			'I encountered a bear while hiking - Я встретил медведя во время похода'
		]
	},
	{
		ru: 'предложить',
		en: ['suggest', 'recommend', 'advise', 'propose'],
		desc: [
			'suggest - предложить идею для обсуждения',
			'recommend - рекомендовать',
			'advise - консультировать, советовать',
			'propose - (формал) предлагать'
		],
		ex: [
			'She suggested a compromise to us - Она предложила нам компромиссное решение',
			'A friend recommended this restaurant - Этот ресторан порекомендовал один из моих друзей',
			'He advised us what to do - Он посоветовал нам, что делать',
			'How do you propose solving this problem? - Как вы предлагаете решить эту проблему?',
			''
		]
	},
	{
		ru: 'обучать',
		en: ['teach', 'educate', 'train', 'coach', 'instruct', 'tutor'],
		desc: [
			'teach - общий термин',
			'educate - воспитывать',
			'train - тренировать',
			'coach - тренировать (в индивидуальном порядке)',
			'instruct - (формально) инструктировать',
			'tutor - (формально) преподавать в малых группах'
		],
		ex: [
			'I taught history for many years - Я много лет преподавал историю',
			'We must educate our youngsters better - Мы должны лучше воспитывать нашу молодёжь',
			'I could train myself into anything - Я могу тренировать себя в чём угодно',
			'No one tries to overly coach him - Никто не пытается его чрезмерно тренировать',
			'We were instructed where to meet - Нас проинструктировали, где встречаться',
			'She tutored me in Spanish - Она занималась со мной по испанскому',
			''
		]
	},
	{
		ru: 'думать',
		en: [
			'think',
			'assume',
			'reason',
			'conclude',
			'work out',
			'figure out'
		],
		desc: [
			'think - общий термин',
			'assume - предполагать',
			'reason - рассуждать',
			'conclude - заключить (прийти к выводы)',
			'work out - пытаться что-то понять',
			'figure out - выяснить'
		],
		ex: [
			"I'll think about it - Я подумаю об этом",
			'I can only assume that it was a mistake - Я могу лишь предположить, что это была ошибка',
			"I'm trying to reason with you - Я пытаюсь рассуждать вместе с вами",
			"I'm going to conclude that you're wrong - Я прихожу к выводу, что вы ошибаетесь",
			"I can't work out whether this is dangerous or not - Я не могу понять что это и опасно или нет",
			'You have to figure out these new problems - Вы должны выяснить эти новые проблемы',
			''
		]
	},
	{
		ru: 'пытаться',
		en: ['try', 'attempt', 'strive', 'endeavour'],
		desc: [
			'try - общий термин',
			'attempt - пытаться сделать что-то трудное',
			'strive - прилагать усилия',
			'endeavour - (формально) стремиться'
		],
		ex: [
			'You can do it if you try hard enough - Если хорошенько постараться, всё получится',
			'He made no attempt to apologize - Он даже не пытался извиниться',
			'Japan will strive together with its friends to achieve these reforms - Япония вместе со своими друзьями будет прилагать усилия для осуществления этой реформы',
			'We will endeavour to provide help - Мы будем стремиться к оказанию помощи',
			''
		]
	},
	{
		ru: 'хотеть',
		en: ['want', 'wish', 'long', 'desire'],
		desc: [
			'want - общий термин',
			'wish - желать',
			'long - очень чего-то хотеть',
			'desire - (формальный) сильно желать'
		],
		ex: [
			'I want you to kill him - Я хочу, чтобы ты его убил его',
			'I wish you all the best - Я желаю тебе всего самого лучшего',
			'I long for a cup of tea - Мне хочется выпить чашку чая',
			'Such a person can desire anything - Такой человек может желать чего угодно',
			''
		]
	},
	{
		ru: 'наблюдать',
		en: ['watch', 'look', 'observe', 'stare'],
		desc: [
			'watch - на что-то смотреть и изучать',
			'look - повернуть глаза и куда-то ими смотреть',
			'observe - изучать что-то с большим вниманием',
			'stare - пялиться (пристально смотреть)'
		],
		ex: [
			'I have been watching TV for two hours - Я смотрю телевизор уже два часа',
			"Look at the sky! It's going to rain - Посмотри на небо! Собирается дождь",
			'The police have been observing his movements - Полиция уже некоторое время наблюдает за его передвижениями',
			'Why are you staring at me? - Почему ты пялишься на меня?'
		]
	},
	{
		ru: 'учиться',
		en: ['study', 'learn'],
		desc: [
			`Study - имеет значение "изучать" и обычно обозначает процесс получения знаний (как правило, теоретических).
		Также означает учиться в каком-то заведении.`,
			`Learn - обозначает "учить" и "учиться", подразумевая, что этот процесс имеет какой-то результат. Здесь часто играет роль практический опыт и тренировки.`,
		],
		ex: [
			'Do you study? - Ты учишься?',
			'Do you study at this school? - Ты учишься в этой школе?',
			'Do you learn English? - Ты учишь английский?',
			'Did you learn English? - Ты выучил английский?',
		],
	},
	{
		ru: 'забыть',
		en: ['forget', 'Leave'],
		desc: ['forget - забывать что-то сделать или забывать кого-то', 'leave - в значении забыть какую-то вещь'],
		ex: ['I forgot his name - Я забыл его имя', 'I forgot to do it - Я забыл сделать это', 'I left my bag at home - Я забыл/оставил свою сумку дома'],
	},
	{
		ru: 'останавливаться',
		en: ['stop', 'stay'],
		desc: ['stop - если просто куда-то шли и остановились', 'stay - в значении погостить'],
		ex: ['We stopped near the bus stop - Мы остановились возле остановки', 'We stayed at a hotel - Мы остановились в гостинице'],
	},
	{
		ru: 'обвинять',
		en: ['blame', 'accuse'],
		desc: ['blame - означает винить кого-то за что-то плохое или проблему', 'accuse - означает обвинить кого-то в совершении преступления или недобросовестных действиях'],
		ex: ['He was accused of a felony - Его обвинили в тяжком преступлении', 'They blamed her for the accident - Они обвинили её в случившемся'],
	},
	{
		ru: 'справляться',
		en: ['cope', 'can handle'],
		desc: ['cope - обычно подразумевает управление сложной ситуацией или эмоциональным испытанием, часто с ощущением борьбы или выносливости', 'can handle - подразумевает возможность управлять или справляться с чем-то, часто в более общем смысле'],
		ex: ["She had to cope with her husband's death - Она должна была справиться с смертью мужа", "She can handle the situation without help - Она может справиться с ситуацией без помощи"],
	},
	{
		ru: 'предполагать',
		en: ['guess', 'suppose'],
		desc: ['guess - подразумевает неопределенность и отсутствие доказательств', 'suppose - подразумевает более высокий уровень уверенности на основе доступной информации'],
		ex: [`I'm going to guess that it will rain tomorrow. (Here, the speaker is uncertain about the weather.) - Я предположу, что завтра будет дождь.(Здесь говорящий не уверен в погоде.)`, 'Suppose it rains tomorrow; we should bring an umbrella. (Here, the speaker has some information about the weather and is making an reasonable assumption.) - Предположим, что завтра будет дождь; мы должны принести зонт.(Здесь говорящий имеет некоторые сведения о погоде и делает обоснованное предположение)'],
	},
	{
		ru: 'запрещать',
		en: ['prohibit', 'forbit'],
		desc: [
			'prohibit - более формальной термин',
			'forbit - более общий и может использоваться в разных вариантах '
		],
		ex: [
			"By court order, he's been forbidden to leave the house - По решению суда, ему запретили выходить из дома",
			'I forbid you to go to this party - Я запрещаю тебе идти на эту вечеринку'
		]
	},
	{
		ru: 'менять',
		en: [
			'change',
			'alter',
			'modify',
			'convert',
			'vary',
			'shift',
			'transform'
		],
		desc: [
			'change - это наиболее общий термин',
			'alter - подразумевает более конкретное или детальное изменение',
			'modify - обычно подразумевает изменение или адаптацию чего-то',
			'convert - подразумевает более значительное или глубокое изменение',
			'vary -  подразумевает изменение или различие в каком-то аспекте',
			'shift - подразумевает изменение положения или фокуса',
			'transform - подразумевает изменение сущности или природы'
		],
		ex: [
			'Change your shirt for a larger one. - Поменяй рубашку на более большую',
			"We've had to alter our plans. - Нам пришлось изменить наши планы",
			'The engine was modified to improve its performance. - Двигатель был модифицирован для улучшения его характеристик',
			"We're going to convert the spare bedroom into an office. - Мы собираемся переоборудовать запасную спальню в офис",
			"Try to vary the children's diet a little. - Попробуйте немного разнообразить рацион детей",
			"We've shifted over to low-fat milk - Мы перешли на обезжиренное молоко",
			'The riverside area has been transformed into a shopping and sports complex. - Прибрежная зона была преобразована в торгово-спортивный комплекс'
		]
	},
	{
		ru: 'собирать',
		en: [
			'collect',
			'gather',
			'assemble',
			'hoard',
		],
		desc: [
			'collect - это общее слово для описания процесса собирания или сбора вещей или данных',
			'gather - для описания процесса собирания или сбора вещей или людей',
			'assemble - для описания процесса собирания или сбора вещей или частей для создания целого объекта',
			'hoard - для описания процесса собирания или сбора вещей или ресурсов для последующего использования или хранения'
		],
		ex: [
			'The museum collects rare artifacts. - Музей собирает редкие артефакты.',
			'The family gathered around the table for dinner. - Семья собралась вокруг стола для обеда.',
			'The engineer assembled the new machine. - Инженер собрал новую машину.',
			'The squirrel hoarded nuts for the winter. - Сорока собирала орехи для зимы.'
		]
	},
	{
		ru: 'жаловаться',
		en: ['complain', 'object', 'protest', 'grumble', 'whine'],
		desc: [
			'complain - это общий термин для выражения жалобы',
			'object - это формальное выражение несогласия',
			'protest -  это публичное выражение неудовлетворения',
			'grumble - это легкая жалоба, ворчать',
			'whine - это жалоба на высоких тонах, похожая на детскую, ныть, плакаться'
		],
		ex: [
			"I have no complaints about the quality of his work, but I don't enjoy his company - У меня нет жалоб на качество его работы, но я не люблю его компанию",
			"I object to the new policy because it affects our team's workflow - Я возражаю против новой политики, потому что она затрагивает наш рабочий процесс",
			"The protesters gathered in the city square to demonstrate against the government's decision - Протестующие собрались на площади, чтобы протестовать против решения правительства",
			"I'm grumbling about the traffic because it's taking too long - Я жалуюсь на пробки, потому что они занимают слишком много времени",
			"Stop whining about the game; you're just not good at it - Стоп, не жалуйся о игре; ты просто не хороший игрок"
		]
	},
	{
		ru: 'копировать',
		en: ['copy', 'reproduce', 'duplicate', 'clone', 'replicate'],
		desc: [
			'copy - подразумевает менее точную имитацию',
			'reproduce - означает создать более точное представление',
			'duplicate - относится к точной копии',
			'clone - конкретно означает создание генетически идентичной версии',
			'replicate - подразумевает создание идентичной или очень похожей версии'
		],
		ex: [
			'I made a copy of the painting using acrylic paints - Я сделал копию картины с помощью акриловых красок',
			'The printer can reproduce high-quality images from digital files - Принтер может воспроизводить высококачественные изображения из цифровых файлов',
			'The company issued a duplicate invoice to correct the error on the first one - Компания выписала дубликат счета-фактуры, чтобы исправить ошибку в первом счете-фактуре',
			'Scientists successfully cloned a sheep using somatic cell nuclear transfer - Ученые успешно клонировали овцу с помощью ядерного переноса соматических клеток',
			'The researchers were able to replicate the results of the previous study - Исследователи смогли повторить результаты предыдущего исследования'
		]
	},
	{
		ru: 'резать',
		en: ['cut', 'slice', 'chop', 'slash'],
		desc: [
			'cut - это наиболее общий термин, разрезать что-то на части',
			'slice - относится к тонким, плоским разрезам',
			'chop - подразумевает грубые, силовые разрезы',
			'slash - описывает чертежный разрез, который оставляет продолговатый след'
		],
		ex: [
			'She cut the bread into slices - Она нарезала хлеб ломтиками',
			'She sliced the tomatoes for the salad - Она нарезала помидоры для салата',
			'He chopped the onions for the stew - Он нарезал лук для рагу',
			"The swordsman slashed at his opponent's armor - Фехтовальщик разрезал доспехи своего противника"
		]
	},
	{
		ru: 'умереть',
		en: ['die', 'passed away', 'be gone'],
		desc: [
			'die - общий термин',
			'passed away - более вежливый термин, чем die, скончаться, уйти из жизни',
			'be gone - более вежливый термин, чем die'
		],
		ex: [
			'That man died a long time ago - Этот человек давно умер',
			'The woman passed away a week ago - Женщина скончалась неделю назад',
			"When I'm gone, do whatever you want - Когда меня не станет, делайте что хотите"
		]
	},
	{
		ru: 'победить',
		en: [
			'win', 'defead',
			'beat', 'conquer',
			'overcome', 'triumph',
			'thrash'
		],
		desc: [
			'win - более общий термин ',
			'defead - одержать победу над кем-то',
			'beat - когда вы выигрываете у своего конкурента, или у команды',
			'conquer - подразумевает получение контроля или доминирования',
			'overcome - означает успешно справиться с проблемой',
			'triumph - означает грандиозную или славную победу',
			'thrash - неформальный термен, означает более интенсивную или жестокую победу'
		],
		ex: [
			'I never win at cards - Я никогда не выигрываю в карты',
			'The team suffered a defeat in the championship game - Команда потерпела поражение в игре чемпионата',
			'The boxer beat his opponent in the match - Боксер победил своего соперника в матче',
			'The army conquered the city after a long siege - Армия захватила город после долгой осады',
			'The athlete overcame her injury to win the gold medal - Спортсменка преодолела травму и завоевала золотую медаль',
			'The team triumphed in the championship game, winning their first title in decades - Команда победила в матче за звание чемпиона, завоевав свой первый титул за последние десятилетия',
			'The wrestler thrashed his opponent in the match - Борец разгромил своего соперника в матче'
		]
	},
	{
		ru: 'пятнать',
		en: ['sully - [ˈsʌlɪ]', 'tarnish - [ˈtɑːrnɪʃ]'],
		desc: [
			'sully - подчеркивает более преднамеренную и серьезную форму повреждения, часто репутации или характера',
			'tarnish - чаще используется для описания окисления или обесцвечивания физической поверхности, а также может использоваться метафорически, подобно sully'
		],
		ex: [
			'This woman has sullied (tarnished) her honor - Эта женщина запятнала свою честь',
			'There are many metals, such as gold, which never exhibit rust or tarnish - Есть много металлов, например золото, которые никогда не ржавеют и не потускнеют'
		]
	},
	{
		ru: 'завершить, выполнить',
		en: ['accomplish', 'acheive', 'carry out', 'pull off'],
		desc: [
			'accomplish - успешно завершить начатое дело',
			'acheive - добиться успеха после очень усердных попыток это сделать',
			'carry out - что-то сделать, особенно что было запланированно',
			'pull off - успешно что-либо сделать, особенно если это было неожиданно'
		],
		ex: [
			"You won't accomplish anything by arguing - Споря, вы ничего не добьетесь",
			'Have you achieved all your aims? - Достигли ли вы всех своих целей?',
			'Doctors carried out tests on the patients - Врачи проводили обследование пациентов',
			'The deal will be great for the company. If we can pull it off - Сделка будет очень выгодной для компании. Если нам удастся ее провернуть'
		]
	},
	{
		ru: 'злить, раздражать, выводить из себя',
		en: ['annoy', 'irritate', 'bother', 'bug'],
		desc: [
			'annoy - заставлять кого-то чувствовать лёгкий гнев или нетерпение',
			'irritate - заставлять кого-то чувствовать гнев или нетерпение',
			'bother - заставлять кого-то чувствовать лёгкое расстройство или лёгкое раздражение',
			'bug (informal) - заставлять кого-то чувствовать лёгкий гнев, особенно когда вы делаете это на протяжении долгого времени'
		],
		ex: [
			'Their rude behaviour really annoyed us - Их грубое поведение очень разозлило нас',
			'It irritates me when the trains run late - Меня раздражает когда поезда прибывают поздно',
			'It bothers me that it takes so long to get a reply - Меня беспокоит, что уходит столько времени на получение ответа',
			'That noise is realy bugging me - Этот шум меня действительно раздражает'
		]
	},
	{
		ru: 'спрашивать',
		en: ['ask', 'demand', 'beg', 'request'],
		desc: [
			'ask - задать вопрос, чтобы заставить кого-то сделать что-то',
			'demand - настойчиво просить чего-то, требовать',
			'beg - умолять, просить кого-то эмоционально что-то сделать',
			'request - попросить чего-либо вежливо, или формально'
		],
		ex: [
			'Ask your father to teach you how to drive - Попроси твоего отца научить тебя водить машину',
			'I demand an explanation for your behaviour - Я требую объяснения за твоё поведение',
			'His mother begged him not to go - Его мать умоляла его не идти',
			'I am enclosing the leaflets you requested - Я посылаю брошюры, которые вы просили'
		]
	},
	{
		ru: 'блокировать, препятствовать',
		en: ['block', 'hinder', 'hamper', 'hold back', 'obstruct'],
		desc: [
			'block - когда вы препятствуете чтобы что-то прошло мимо чего-то другого',
			'hinder - создавать трудности для кого-то, чтобы он сделал что-то, препятствовать',
			'hamper - препятствовать чему-либо, что это произошло, либо препятствовать нормальному движению чего-либо, тормозить',
			'hold back - не двигаться вперёд, или препятствовать кому-либо или чему-либо от движения вперёд, придержать',
			'obstruct - более официальное слово, предотвращять чтобы кто-то делал что-то'
		],
		ex: [
			'The pipe is blocked with dead leaves - Труба заблокирована опавшими листьями',
			'Snow hindered the efforts of the rescuers - Снег мешал спасателям',
			'Lack of funds is hampering our development project - Нехватка средств мешает нашему проекту развития',
			'Most of the crowd held back until they saw it was safe - Большая часть толпы сдерживалась, пока не убедилась, что это безопасно',
			'He obstructed their plans by making many complaints - Он препятствовал их планам, высказывая множество претензий'
		]
	},
	{
		ru: 'ломать',
		en: ['break, crack, smash, burst'],
		desc: [
			'break - когда что-то разделяется на части случайно или намеренно',
			'crack - сделать длинный тонкий разлом в чем-либо, расколоть',
			'smash - разломить что-то на куски с использованием силы, громить, крушить',
			'burst - когда что-то резко открывается или резко взрывается'
		],
		ex: [
			'She broke her leg when she was skiing - Она сломала ногу, катаясь на лыжах',
			'The stone cracked the glass - Камень расколол стекло',
			'Demonstrators smashed the windows of police cars - Демонстранты разбили стекла полицейских машин',
			'One of the tyres had burst - Одна из шин лопнула'
		]
	},
	{
		ru: 'посвящать',
		en: [
			'dedicate',
			'devote',
		],
		desc: [
			'dedicate - часто используется для физических объектов и конкретных действий',
			'devote - подразумевает более сильную эмоциональную связь и используется для абстрактных понятий или постоянных действий'
		],
		ex: [
			"He dedicated the poem to his wife - Он посвятил поэму своей жене",
			'He was a devoted father and husband - Он был преданным отцом и мужем',
		]
	},
	{
		ru: 'не согласиться',
		en: ['disagree', 'differ', 'argue', 'dispute', 'contradict'],
		desc: [
			'Disagree - значит иметь другое мнение или идею',
			'Differ - значит отличаться или иметь разницу',
			'Argue - это излагать свое мнение или пытаться убедить',
			'Dispute - это оспаривать или оспаривать что-то',
			'Contradict - говорить или делать что-то противоположное тому, что сказал или сделал кто-то другой'
		],
		ex: [
			'I disagree with your opinion - Я не согласен с вашим мнением',
			'The two theories differ in their explanations - Обе теории различаются в своих объяснениях',
			'I argue that the policy is flawed - Я утверждаю, что политика несовершенна',
			'The company disputes the allegations - Компания оспаривает обвинения',
			'Her statement contradicts what she said earlier - Ее заявление противоречит тому, что она говорила ранее',
		]
	},
	{
		ru: 'не одобрять',
		en: ['disapprove', 'object', 'criticize', 'condemn'],
		desc: [
			'Disapprove - значит иметь неблагоприятное мнение, не обязательно выражая активное несогласие',
			'Object - значит активно выражать несогласие или несогласие',
			'Criticize - это оценивать и подробно указывать на недостатки или изъяны',
			'Condemn - самое сильное выражение, подразумевающее суровое моральное осуждение чего-то совершенно неприемлемого'
		],
		ex: [
			'I disapprove of the new policy - Я не одобряю новую политику',
			'I object to the proposal - Я возражаю против этого предложения',
			'The paper criticized the new movie - Газета раскритиковала новый фильм',
			'The government condemned the human rights abuses in the country - Правительство осудило нарушения прав человека в стране',
		]
	},
	{
		ru: 'найти',
		en: ['find', 'discover', 'come across', 'encounter'],
		desc: [
			'Find - это общий термин, обозначающий местонахождение чего-то потерянного',
			'Discover - подразумевает нахождение чего-то нового или ранее неизвестного',
			'Come across (наткнуться) - (неформально) подразумевает случайную встречу с чем-то',
			'Encounter - (формально) означает встречу или контакт с чем-то или кем-то'
		],
		ex: [
			'I found the book on the shelf - Я нашел книгу на полке',
			'She discovered a new species of plant in the jungle - Она открыла новый вид растений в джунглях',
			'I came across an old friend while shopping - Я наткнулся на старого друга во время шопинга',
			'I encountered a bear while hiking - Я встретил медведя во время похода'
		]
	},
	{
		ru: 'спасать, спасение',
		en: ['save', 'rescue'],
		desc: [
			'save - означает предотвратить причинение вреда или возникновение опасности',
			'rescue - означает вывести кого-то или что-то из уже существующей опасной или вредной ситуации'
		],
		ex: [
			'You saved me from ruin - Вы спасли меня от гибели',
			'You rescued me from drug addiction - Вы спасли меня от наркозависимости'
		]
	},
	{
		ru: 'потерпеть неудачу',
		en: ['fail', 'neglect', 'omit', 'overlook'],
		desc: [
			'Fail - подразумевает отсутствие усилий или достижений',
			'Neglect (пренебрегать) - подразумевает недостаток внимания или заботы',
			'Omit (пропускать) - подразумевает намеренный выбор не учитывать или исключить',
			'Overlook (упускать из виду) - значит не обратить внимания или не заметить'
		],
		ex: [
			'The student failed the exam due to lack of preparation - Студент не сдал экзамен из-за недостаточной подготовки',
			'The owner neglected the garden, and it became overgrown - Хозяин пренебрегал садом, и он зарос',
			'The author omitted some details to make the story more concise - Автор опустил некоторые детали, чтобы сделать рассказ более кратким',
			'I overlooked the important detail in the report - Я упустил из виду важную деталь в отчете',
		]
	},
]

export default verb