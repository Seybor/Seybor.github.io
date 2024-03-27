const R_A2 = [
	{
		en: 'to associate',
		tr: '[əˈsəʊʃiət]',
		ru: 'ассоциировать',
		ru_example: 'Не ассоциируй меня с ним!',
		en_example: "Don't associate me with him!"
	},
	{
		en: 'to disturb',
		ru: 'беспокоить',
		ru_example: 'Не беспокой её! Она молиться',
		en_example: "Don't disturb her. She's praying",
		tr: '[dɪˈstɜːb]'
	},
	{
		en: 'to ache',
		ru: 'болеть',
		ru_example: 'Его сердце болело за неё',
		en_example: 'His heart was aching for her',
		tr: '[eɪk]'
	},
	{
		en: 'to chat',
		ru: 'болтать, беседовать',
		ru_example: ' Я болтаю с моим другом в данный момент',
		en_example: "I'm chating with my friend at the moment",
		tr: '[ʧæt]'
	},
	{
		en: 'to owe',
		ru: 'быть должным',
		ru_example: 'Он должен ему очень большую сумму денег сейчас',
		en_example: 'He owes him a very  big sum of money now',
		tr: '[əʊ]'
	},
	{
		en: 'to climb',
		ru: 'взобраться',
		ru_example: 'Гарри поднялся по лестнице',
		en_example: 'Harry climbed the stairs',
		tr: '[klaɪm]'
	},
	{
		en: 'to influence*',
		tr: '[ˈɪnflʊəns]',
		ru: 'влиять [на кого-то]',
		ru_example: 'Это событие повлияло на меня очень сильно',
		en_example: 'This event influenced me greatly'
	},
	{
		en: 'to admire',
		ru: 'восхищаться',
		ru_example: 'Я восхищаюсь ее твердой решимостью добиться успеха',
		en_example: 'I admire her gritty determination to succeed',
		tr: '[ədˈmaɪə]'
	},
	{
		en: 'to recover',
		ru: 'выздороветь',
		ru_example: 'Я быстро выздоровел',
		en_example: 'I recovered quickly',
		tr: '[rɪˈkʌvər]'
	},
	{
		en: 'to cause*',
		tr: '[kɔːz]*',
		ru: 'вызывать',
		ru_example: 'Что вызвало его смерть?',
		en_example: 'What caused his death?'
	},
	{
		en: 'to subtract',
		ru: 'вычитать',
		ru_example: 'Вычтите эту сумму из моей зарплаты',
		en_example: 'Subtract this amount from my paycheck',
		tr: '[səbˈtrækt]'
	},
	{
		en: 'to iron',
		ru: 'гладить [утюгом]',
		ru_example: 'Я уже погладил свой костюм',
		en_example: "I've already ironed my suit",
		tr: '[ˈaɪərn]'
	},
	{
		en: 'to vote [for]',
		tr: '[vəʊt] [[fɔː]]',
		ru: 'голосовать [за кого-то]',
		ru_example: 'Он проголосовал за второго кандидата',
		en_example: 'He voted for the second candidate'
	},
	{
		en: 'to trust',
		ru: 'доверять',
		ru_example: 'Я ему просто не доверяю',
		en_example: "I just don't trust him",
		tr: '[trʌst]'
	},
	{
		en: 'to donate',
		ru: 'жертвовать, дарить',
		ru_example: 'Он сказал, что пожертвовал два миллиона долларова на благотворительность',
		en_example: "He said that he'd donated two million dollars to charity",
		tr: '[ˈdəʊneɪt]'
	},
	{
		en: 'to delay',
		ru: 'задерживать, откладывать',
		ru_example: 'Мы решили отложить поездку',
		en_example: 'We decided to delay the trip',
		tr: '[dɪˈleɪ]'
	},
	{
		en: 'to deserve',
		ru: 'заслуживать',
		ru_example: 'Ты действительно заслуживаешь этого сейчас',
		en_example: 'You really deserve it now',
		tr: '[dɪˈzɜːv]'
	},
	{
		en: 'to avoid',
		ru: 'избегать',
		ru_example: 'Я стараюсь не есть жирную пищу',
		en_example: 'I try to avoid fatty foods',
		tr: '[əˈvɔɪd]'
	},
	{
		en: 'to invent',
		ru: 'изобретать',
		ru_example: 'Томас Эдисон изобрёл фонограф',
		en_example: 'Thomas Edison invented the phonograph',
		tr: '[ɪnˈvɛnt]'
	},
	{
		en: 'to search*',
		tr: '[sɜːʧ]*',
		ru: 'искать',
		ru_example: 'Я искал тебя',
		en_example: 'I search for you'
	},
	{
		en: 'to concern',
		ru: 'касаться',
		ru_example: 'Эта проблема касается всех нас',
		en_example: 'The problem concerns us all',
		tr: '[kənˈsɜːn]'
	},
	{
		en: 'boil',
		ru: 'кипятить, варить',
		ru_example: 'Чай закипает',
		en_example: 'Tea is boiling',
		tr: '[bɔɪl]'
	},
	{
		en: 'to shout [at/to]',
		tr: '[ʃaʊt] [[æt]/[tuː]]',
		ru: 'кричать [на кого-то/кому-то]',
		ru_example: 'Он крикнул ей, но она не слышала его',
		en_example: "He shouted to her, but she didn't hear him"
	},
	{
		en: 'to bark',
		ru: 'лаять',
		ru_example: 'Посмотри на собаку! Она лает',
		en_example: "Look at the dog! It's barking",
		tr: '[bɑːk]'
	},
	{
		en: 'to cure*',
		tr: '[kjʊə]*',
		ru: 'лечить',
		ru_example: 'Он лечит людей',
		en_example: 'He cures people'
	},
	{
		en: 'to pray',
		ru: 'молиться',
		ru_example: 'Не беспокой меня! Я молюсь',
		en_example: "Don't disturb me. I'm praying",
		tr: '[preɪ]'
	},
	{
		en: 'to punish',
		ru: 'наказать',
		ru_example: 'Она была наказана за ложь',
		en_example: 'She was punished for lying',
		tr: '[ˈpʌnɪʃ]'
	},
	{
		en: 'to hire',
		ru: 'нанимать',
		ru_example: 'Его наняли для выполнения этой работы',
		en_example: 'He was hired to do this job',
		tr: '[ˈhaɪə]'
	},
	{
		en: 'to remind [of]',
		tr: '[rɪˈmaɪnd] [[ʌv]]',
		ru: 'напоминать [о чём-то]',
		ru_example: 'Это напоминает мне о ней',
		en_example: 'It reminds me of her'
	},
	{
		en: 'to insist [on]',
		tr: '[ɪnˈsɪst] [[ɒn]]',
		ru: 'настоять [на чём-то]',
		ru_example: 'Я не хочу настаивать на том, чтобы ты сделал это',
		en_example: "I don't want to insist on doing it"
	},
	{
		en: 'to lack*',
		tr: '[læk]',
		ru: 'не хватать',
		ru_example: 'Ей не хватает опыта',
		en_example: 'She lacks experience'
	},
	{
		en: 'to accuse [of]',
		tr: '[əˈkjuːz] [[ɒv]]',
		ru: 'обвинять [в чём-то] ',
		ru_example: 'Они обвинил его в убийстве',
		en_example: 'They accused him of murder'
	},
	{
		en: 'to exchange',
		ru: 'обменивать',
		ru_example: 'Она обменяла свое пальто на меньшее размером',
		en_example: 'She exchanged her coat for one a size smaller',
		tr: '[ɪksˈʧeɪnʤ]'
	},
	{
		en: 'to hug',
		ru: 'обнимать',
		ru_example: 'Он крепко прижал её к себе',
		en_example: 'He hugged her close to him',
		tr: '[hʌɡ]'
	},
	{
		en: 'to treat',
		ru: 'обращаться [с кем-то]',
		ru_example: 'С ним обращались очень грубо',
		en_example: 'He was treated very rudely',
		tr: '[triːt]'
	},
	{
		en: 'to announce',
		ru: 'объявлять',
		ru_example: 'Они анонсировали новую игру',
		en_example: "They've announced a new game",
		tr: '[əˈnaʊns]'
	},
	{
		en: 'to approve [off]',
		tr: '[əˈpruːv] [[ɒf]]',
		ru: 'одобрять [что-то]',
		ru_example: 'Мы одобряем твоё решение',
		en_example: 'We approve of your decision'
	},
	{
		en: 'to reply* [to]',
		tr: '[rɪˈplaɪ]* [[tuː]]',
		ru: 'ответить [на что-то]',
		ru_example: 'Он ответил на моё письмо немедленно',
		en_example: 'He reply to my letter immediately'
	},
	{
		en: 'to differ',
		tr: '[ˈdɪfə]',
		ru: 'отличаться',
		ru_example: 'Моё мнение по этому поводу отличается от вашего',
		en_example: 'My opinion on this differs from yours'
	},
	{
		en: 'to deny',
		ru: 'отрицать',
		ru_example: 'Да, я был там. Я не отрицаю этого',
		en_example: "Yes, I was there. I don't deny it",
		tr: '[dɪˈnaɪ]'
	},
	{
		en: 'to hunt',
		ru: 'охотиться',
		ru_example: 'Он любит охотиться и ловить рыбу',
		en_example: 'He likes to hunt and fish',
		tr: '[hʌnt]'
	},
	{
		en: 'to faint',
		ru: 'падать в обморок',
		ru_example: 'Она чуть не упала в обморок от боли',
		en_example: 'She almost fainted from the pain',
		tr: '[feɪnt]'
	},
	{
		en: 'to retell',
		ru: 'пересказывать',
		ru_example: 'Перескажи этот текст',
		en_example: 'Retell this text',
		tr: '[ˌriːˈtɛl]'
	},
	{
		en: 'to print',
		ru: 'печатать, распечатать',
		ru_example: 'Его книгу больше не печатают',
		en_example: 'His book is no longer in print',
		tr: '[prɪnt]'
	},
	{
		en: 'to bake',
		ru: 'печь, выпекать',
		ru_example: ' Твоя мама сейчас печёт печенье?',
		en_example: 'Is your mother baking cookies now?',
		tr: '[beɪk]'
	},
	{
		en: 'to damage',
		ru: 'повреждать',
		ru_example: 'Снег повредил крышу',
		en_example: 'The snow damaged the roof',
		tr: '[ˈdæmɪʤ]'
	},
	{
		en: 'to lift',
		ru: 'поднимать',
		ru_example: 'Уровень моря очень сильно поднялся',
		en_example: 'There was so much lift of sea',
		tr: '[lɪft]'
	},
	{
		en: 'to subscribe [to]',
		tr: '[səbˈskraɪb] [[tuː]]',
		ru: 'подписываться [на что-то]',
		ru_example: 'Я подписался на этот канал',
		en_example: 'I subscribed to this channel'
	},
	{
		en: 'to afford',
		ru: 'позволить себе',
		ru_example: 'Я не могу позволить себе потратить два часа на этого человека',
		en_example: "I can't afford to spend two hours with this person",
		tr: '[əˈfɔːd]'
	},
	{
		en: 'to allow',
		ru: 'позволять',
		ru_example: 'Курить воспрещается',
		en_example: 'Smoking is not allowed',
		tr: '[əˈlaʊ]'
	},
	{
		en: 'to congratulate [on]',
		tr: '[kənˈɡræʧəleɪt] [[ɒn]]',
		ru: 'поздравлять [с чем-то]',
		ru_example: 'Я хочу поздравить тебя с твоим днём рождения',
		en_example: 'I want to congratulate you on your birthday'
	},
	{
		en: 'to purchase*',
		tr: '[ˈpɜːʧəs]*',
		ru: 'покупать',
		ru_example: 'Я купил эту вещь',
		en_example: 'I purchased this item'
	},
	{
		en: 'to rely [on]',
		tr: '[rɪˈlaɪ] [[ɒn]]',
		ru: 'полагаться [на кого-то]',
		ru_example: 'Я не могу положиться на него',
		en_example: "I can't rely on him"
	},
	{
		en: 'to suggest',
		ru: 'предлагать',
		ru_example: 'Я предложил подождать',
		en_example: 'I suggested waiting',
		tr: '[səˈʤɛst]'
	},
	{
		en: 'to warn',
		ru: 'предупреждать',
		ru_example: 'Она предупредила его, чтобы вёл себя тихо',
		en_example: 'She warned him to be quiet',
		tr: '[wɔːn]'
	},
	{
		en: 'to land',
		ru: 'приземляться',
		ru_example: 'Самолёт приземлится через час',
		en_example: 'The plane will land in an hour',
		tr: '[lænd]'
	},
	{
		en: 'to apply',
		ru: 'применять, относиться, подать заявку',
		ru_example: 'применять двойной стандарт',
		en_example: 'to apply a double standard',
		tr: '[əˈplaɪ]'
	},
	{
		en: 'to publish',
		ru: 'публиковать',
		ru_example: 'The newspaper is published daily',
		en_example: 'Эта газета выходит ежедневно',
		tr: '[ˈpʌblɪʃ]'
	},
	{
		en: 'to confuse',
		ru: 'путать',
		ru_example: 'Я всегда путаю этого человека с его братом',
		en_example: 'I always confuse him with his brother',
		tr: '[kənˈfjuːz]'
	},
	{
		en: 'to ruin',
		tr: '[ˈruːɪn]',
		ru: 'разрушать',
		ru_example: 'Он стал зависимым от наркотиков, и это разрушило его жизнь',
		en_example: 'He became addicted to drugs and it ruined his life'
	},
	{
		en: 'to injure',
		ru: 'ранить',
		ru_example: 'Она упала и ушиблась',
		en_example: 'She fell and injured herself',
		tr: '[ˈɪndʒər]'
	},
	{
		en: 'to calculate',
		ru: 'рассчитать',
		ru_example: 'Вычислите периметр прямоугольника',
		en_example: 'Calculate the perimeter of the rectangle',
		tr: '[ˈkælkjəleɪt]'
	},
	{
		en: 'to plant',
		ru: 'сажать',
		ru_example: 'посадить дерево',
		en_example: 'to plant a tree',
		tr: '[plɑːnt]'
	},
	{
		en: 'to escape* [from]',
		tr: '[ɪˈskeɪp]* [[frɒm]]',
		ru: 'скрыться [от] / сбежать [из]',
		ru_example: 'Он попытался сбежать из тюрьмы',
		en_example: 'He tried to escape from prison'
	},
	{
		en: 'to decrease',
		ru: 'снижаться',
		ru_example: 'Правительство хочет снизить рост населения',
		en_example: 'The government wants to decrease population growth',
		tr: '[dɪˈkriːs]'
	},
	{
		en: 'to commit',
		ru: 'совершать',
		ru_example: 'Я вверяю свою душу Богу',
		en_example: 'I commit my soul to God',
		tr: '[kəˈmɪt]'
	},
	{
		en: 'to regret',
		ru: 'сожалеть',
		ru_example: 'Я не жалею, что переехал в Йорк',
		en_example: "I don't regret moving to York",
		tr: '[rɪˈɡrɛt]'
	},
	{
		en: 'to doubt',
		ru: 'сомневаться',
		ru_example: 'Я никогда не сомневался, что она придёт',
		en_example: 'I never doubted that she would come',
		tr: '[daʊt]'
	},
	{
		en: 'to report*',
		tr: '[rɪˈpɔːt]*',
		ru: 'сообщить',
		ru_example: 'Они сообщили, что скоро будут здесь',
		en_example: 'They reported that they will be here soon'
	},
	{
		en: 'to consist [of]',
		tr: '[kənˈsɪst] [[ʌv]]',
		ru: 'состоять [из чего-то]',
		ru_example: 'Книга состоит из пяти глав',
		en_example: 'The book consist of five chapters'
	},
	{
		en: 'to specialise [in]',
		tr: '[ˈspɛʃᵊlaɪz]',
		ru: 'специализироваться [в чём-то]',
		ru_example: 'Я специализируюсь в медицине',
		en_example: 'I specialize in medicine'
	},
	{
		en: 'to argue',
		ru: 'спорить',
		ru_example: 'Не спорь со мной!',
		en_example: "Don't argue with me!",
		tr: '[ˈɑːɡjuː]'
	},
	{
		en: 'to cope',
		ru: 'справляться',
		ru_example: 'Я справляюсь с этими трудностями довольно хорошо сейчас',
		en_example: 'I am coping with this difficulties pretty well',
		tr: '[kəʊp]'
	},
	{
		en: 'to quarrel',
		ru: 'ссориться',
		ru_example: 'Дети всё время ссорятся',
		en_example: 'The children quarrel all the time',
		tr: '[ˈkwɒrᵊl]'
	},
	{
		en: 'to stimulate',
		ru: 'стимулировать',
		ru_example: 'Книга возбудила её воображение',
		en_example: 'The book stimulated her imagination',
		tr: '[ˈstɪmjəleɪt]'
	},
	{
		en: 'to knock',
		ru: 'стучать',
		ru_example: 'Послушай! Кто-то стучит в дверь',
		en_example: 'Listen! Someone is knocking at the door',
		tr: '[nɒk]'
	},
	{
		en: 'to judge',
		ru: 'судить',
		ru_example: 'Кто ты такой, чтобы судить меня?',
		en_example: 'Who are you to judge me?',
		tr: '[ˈʤʌʤ]'
	},
	{
		en: 'to push',
		ru: 'толкать',
		ru_example: 'Перестаньте меня отталкивать!',
		en_example: "Don't you push me back!",
		tr: '[pʊʃ]'
	},
	{
		en: 'to succeed [in]',
		tr: '[səkˈsiːd]',
		ru: 'удаваться, преуспеть [что-то сделать]',
		ru_example: 'Мне удалось сделать это очень хорошо',
		en_example: 'I succeeded in doing it very well'
	},
	{
		en: 'to kick',
		ru: 'ударить ногой',
		ru_example: 'Он распахнул дверь ударом ноги',
		en_example: 'He kicked open the door',
		tr: '[kɪk]'
	},
	{
		en: 'to multiply',
		ru: 'умножить',
		ru_example: 'Три умножить на четыре равно двенадцать',
		en_example: 'Three multiplied by four makes twelve',
		tr: '[ˈmʌltɪplaɪ]'
	},
	{
		en: 'to praise',
		ru: 'хвалить',
		ru_example: 'Мы благодарим Бога за ваше благополучное прибытие',
		en_example: 'We praise God for your safe arrival',
		tr: '[preɪz]'
	},
	{
		en: 'to value',
		ru: 'ценить',
		ru_example: 'Она ценит время которое проводит со своей семьей',
		en_example: 'She values the time she spends with her family',
		tr: '[ˈvæljuː]'
	},
	{
		en: 'to cite',
		ru: 'цитировать',
		ru_example: 'цитировать закон',
		en_example: 'to cite a law',
		tr: '[saɪt]'
	},
	{
		en: 'to brush',
		ru: 'чистить',
		ru_example: 'Чисть зубы каждый день',
		en_example: 'Brush your teeth every day',
		tr: '[brʌʃ]'
	},
	{
		en: 'to kid',
		ru: 'шутить',
		ru_example: 'Не сердись, я просто шутил',
		en_example: "Don't get mad, I was only kidding",
		tr: '[kɪd]'
	}
]

export default R_A2;
