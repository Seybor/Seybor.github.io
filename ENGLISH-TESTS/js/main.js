'use strict';
if (document.querySelector('#template-one') !== null) {
  try {
    document.querySelector('.menu__link[href="index.html"]').dataset.current = 'true';
  } catch {
    console.log('.menu__link[href="index.html"] - не найдено');
  }
  const MAIN_ARRAY = [
    {
      ru: 'Пожалуйста, помоги мне!',
      en: 'Please help me!',
    },
    {
      ru: 'Закрой эту дверь',
      en: 'Close this door',
    },
    {
      ru: 'Я мог бы купить эту вещь',
      en: 'I could buy this think',
    },
    {
      ru: 'Это не помогает мне',
      en: 'It does not help me',
    },
    {
      ru: 'Я хочу сказать тебе, что это не мотивирует меня',
      en: 'I want to tell you that it does not motivate me',
    },
    {
      ru: 'Я хочу сказать, что это не мотивирует меня',
      en: 'I want to say that it does not motivate me',
    },
    {
      ru: 'Я умею кататься на велосипеде',
      en: 'I can ride a bike',
    },
    {
      ru: 'Нам срочно это нужно',
      en: 'We need it urgently',
    },
    {
      ru: 'Я обычно прихожу домой в восемь часов вечера',
      en: `I usually come home at eight o'clock in the evening`,
    },
    {
      ru: 'Мне нужно тебе кое-что сказать',
      en: 'I need to tell you something',
    },
    {
      ru: 'Он хотел бы заказать этот чай',
      en: 'He would like to order this tea',
    },
    {
      ru: 'Она слишком мало спит',
      en: 'She sleeps too little',
    },
    {
      ru: 'Я полностью с этим согласен',
      en: 'I absolutely agree with it',
    },
    {
      ru: 'Давай прогуляемся',
      en: `Let's go for a walk`,
    },
    {
      ru: 'Я хочу выпить чашку чай',
      en: 'I want to drink a cup of tea',
    },
    {
      ru: 'Я хочу улучшить мою речь, аудирование и грамматику',
      en: 'I want to improve my speaking, listening and grammar',
    },
    {
      ru: 'Я съем один бутерброд на завтрак',
      en: 'I will eat one sandwich for breakfast',
    },
    {
      ru: 'Ситуация не изменится немедленно',
      en: 'The situation will not change immediately',
    },
    {
      ru: 'Проблема будет не очень большая',
      en: `The problem won't be very big`,
    },
    {
      ru: 'Я не получу те деньги',
      en: `I won't get that money`,
    },
    {
      ru: 'Её не будет в офисе завтра',
      en: `She won't be in the office tomorrow`,
    },
    {
      ru: 'Я думаю, она не сдаст этот тест',
      en: 'I think she will not pass this test',
    },
    {
      ru: 'Ты пойдёшь за покупками сейчас?',
      en: 'Will you go shopping now?',
    },
    {
      ru: 'Ты купишь машину?',
      en: 'Will you buy a car?',
    },
    {
      ru: 'Мы будем плавать в океане сегодня?',
      en: 'Will we swim in the ocean today?',
    },
    {
      ru: 'Ты будешь учиться действительно усердно?',
      en: 'Will you study really hard?',
    },
    {
      ru: 'Это время будет удобным для тебя?',
      en: 'Will this time be convenient for you?',
    },
    {
      ru: 'Когда ты окончишь университет?',
      en: 'When will you graduate from university?',
    },
    {
      ru: 'Когда ты окончишь этот университет?',
      en: 'When will you graduate from this university?',
    },
    {
      ru: 'Когда ты окончишь школу?',
      en: 'When will you graduate from school?',
    },
    {
      ru: 'Когда ты доберёшься сюда?',
      en: 'When will you get here?',
    },
    {
      ru: 'Когда ты доберёшься до работы?',
      en: 'When will you get to work?',
    },
    {
      ru: 'Что станет дороже?',
      en: 'What will become more expensive?',
    },
    {
      ru: 'Какой ответ ты выберешь?',
      en: 'Which answer will you choose?',
    },
    {
      ru: 'Кто там будет присутствовать?',
      en: 'Who will be present there? ',
    },
    {
      ru: 'Ты будешь дома завтра?',
      en: 'Will you be at home tomorrow?',
    },
    {
      ru: 'Он пойдёт с тобой в зоопарк?',
      en: 'Will he go to the zoo with you?',
    },
    {
      ru: 'Это не будет так легко для них',
      en: `It won't be so easy for them`,
    },
    {
      ru: 'Я постараюсь тренироваться более интенсивно',
      en: `I'll try to train more intensively`,
    },
    {
      ru: 'Он будет стараться тренироваться намного интенсивнее',
      en: `He'll try to train much more intensively`,
    },
    {
      ru: 'Когда ты будешь готов поговорить об этой вещи?',
      en: 'When will you be ready to talk about this thing?',
    },
    {
      ru: 'Она задала мне вопрос',
      en: 'She asked me a question',
    },
    {
      ru: 'Она задала мне от него вопрос',
      en: 'She asked me a question from him',
    },
    {
      ru: 'Он рассказал мне эту историю',
      en: 'He told me this story ',
    },
    {
      ru: 'Она снова рассказала мне эту вещь',
      en: 'She told me this thing again',
    },
    {
      ru: 'Я задал ему вопрос',
      en: 'I asked him a question',
    },
    {
      ru: 'Я поделился этой ссылкой с моими друзьями',
      en: 'I shared this link with my friends',
    },
    {
      ru: 'Я поделился с ним этой информацией',
      en: 'I shared this information with him',
    },
    {
      ru: 'Я мог понять его очень хорошо',
      en: 'I could understand him very well',
    },
    {
      ru: 'Эта вещь сильно помогла мне',
      en: 'This thing helped me a lot',
    },
    {
      ru: 'Он сказал коеч-то очень интересное',
      en: 'He said something very interesting',
    },
    {
      ru: 'Я часто видел её, когда я там работал',
      en: 'I often saw her, when I worked there',
    },
    {
      ru: 'Я не жил в деревне',
      en: `I didn't live in the village`,
    },
    {
      ru: 'Я не понял, как это лучше сделать',
      en: `I didn't understand how to do it better`,
    },
    {
      ru: 'Она вышла за него замуж?',
      en: 'Did she marry him?',
    },
    {
      ru: 'Ты хотел пригласить своих друзей на празднование своего дня рождения?',
      en: 'Did you want to invite your friends to your birthday party ?',
    },
    {
      ru: 'Сколько у тебя было свободного времени?',
      en: 'How much free time did you have?',
    },
    {
      ru: 'Сколько у тебя было денег с собой?',
      en: 'How much money did you have with you?',
    },
    {
      ru: 'Которая песня тебе понравилась больше?',
      en: 'Which song did you like more?',
    },
    {
      ru: 'Какую книгу ты прочитал?',
      en: 'What book did you read?',
    },
    {
      ru: 'Мне казалось, что я был прав',
      en: 'It seemed to me that I was right',
    },
    {
      ru: 'Всё казалось таким сложным',
      en: 'Everything seemed so difficult',
    },
    {
      ru: 'Этот тест казался таким лёгким',
      en: 'This test seemed so easy',
    },
    {
      ru: 'Эта вещь казалось такой важной',
      en: 'This thing seemed so important',
    },
    {
      ru: 'Как он объяснил это?',
      en: 'How did he explain it?',
    },
    {
      ru: 'Сколько у тебя было времени?',
      en: 'How much time did you have?',
    },
    {
      ru: 'Она не объяснила эту вещь',
      en: `She didn't explain this thing`,
    },
    {
      ru: 'Сколько денег ты заработал там?',
      en: 'How much money did you earn there?',
    },
    {
      ru: 'Мы часто звонили друг другу',
      en: 'We often called each other',
    },
    {
      ru: 'Она мне перезвонила',
      en: 'She called me back',
    },
    {
      ru: 'Я действительно улучшил свою речь',
      en: 'I really improved my speaking',
    },
    {
      ru: 'Как ты улучшил свою грамматику?',
      en: 'How did you improve your grammar?',
    },
    {
      ru: 'Я сильно улучшил свою грамматику',
      en: 'I improved my grammar a lot',
    },
    {
      ru: 'Я улучшил свою грамматику, аудирование и речь здесь',
      en: 'I improved my grammar, listening and speaking here',
    },
    {
      ru: 'Я действительно улучшил свою речь',
      en: 'I really improved my speaking',
    },
    {
      ru: 'Как ты улучшил свою грамматику?',
      en: 'How did you improve your grammar?',
    },
    {
      ru: 'Я сильно улучшил свою грамматику',
      en: 'I improved my grammar a lot',
    },
    {
      ru: 'Я улучшил свою грамматику, аудирование и речь здесь',
      en: 'I improved my grammar, listening and speaking ',
    },
    {
      ru: 'Он умер очень старым',
      en: 'He died very old',
    },
    {
      ru: 'Он прыгнул так высоко',
      en: 'He jumped so high',
    },
    {
      ru: 'Он часто пользовался интернетом',
      en: 'He often used the internet',
    },
    {
      ru: 'Я также хотел продолжить',
      en: 'I also wanted to continue',
    },
    {
      ru: 'Мне нужно было больше практики',
      en: 'I needed more practice',
    },
    {
      ru: 'Я хранил этот секрет',
      en: 'I kept this secret',
    },
    {
      ru: 'Я сдержал это обещание',
      en: 'I kept this promise',
    },
    {
      ru: 'Он не сдержал это обещание',
      en: `He didn't keep that promise`,
    },
    {
      ru: 'Она не сохранила этот секрет',
      en: `She didn't keep this secret`,
    },
    {
      ru: 'Что ты ел на обед?',
      en: 'What did you eat for lunch?',
    },
    {
      ru: 'Что он ел на ужин?',
      en: 'What did he eat for dinner?',
    },
    {
      ru: 'Она съела торт',
      en: 'She ate a cake',
    },
    {
      ru: 'Что это означало?',
      en: 'What did it mean?',
    },
    {
      ru: 'Что ты имел в виду?',
      en: 'What did you mean?',
    },
    {
      ru: 'Это означало другую вещь',
      en: 'It meant another thing',
    },
    {
      ru: 'Это стоило слишком мало',
      en: 'It cost too little',
    },
    {
      ru: 'Я пошёл на работу',
      en: 'I went to work',
    },
    {
      ru: 'Он часто ходил в кино',
      en: 'He often went to the cinema',
    },
    {
      ru: 'Мой друг стал программистом',
      en: 'My friend became a programmer',
    },
    {
      ru: 'Она стала юристом',
      en: 'She became a lawyer',
    },
    {
      ru: 'Я часто видел её на работе',
      en: 'I often saw her at work',
    },
    {
      ru: 'Она преподавала этот предмет в школе',
      en: 'She taught this subject at school',
    },
    {
      ru: 'Она преподавала математику',
      en: 'She taught maths',
    },
    {
      ru: 'Ты выбрал правильный ответ',
      en: 'You chose the correct answer',
    },
    {
      ru: 'Я думаю, он знал это лучше',
      en: 'I think he knew it better',
    },
    {
      ru: 'Он сказал это очень тихо',
      en: 'He said it very quently ',
    },
    {
      ru: 'Он говорил очень громко',
      en: 'He spoke very loudly',
    },
    {
      ru: 'Я всё понял',
      en: 'I understood everything',
    },
    {
      ru: 'Как ты выучил английский?',
      en: 'How did you learn Chinese?',
    },
    {
      ru: 'Она не пришла на эту вечеринку',
      en: `She didn't came to this party`,
    },
    {
      ru: 'Я всё понял очень легко',
      en: 'I understood everything very easily',
    },
    {
      ru: 'Я обнаружил несколько новых слов в этом тексте',
      en: 'I discovered some new words in this text',
    },
    {
      ru: 'Я не плавал в море',
      en: `I didn't swim in the sea`,
    },
    {
      ru: 'Я плавал в озере',
      en: 'I swam in the lake',
    },
    {
      ru: 'Она не могла поверить ему',
      en: `She couldn't believe him`,
    },
    {
      ru: 'Я также слышал это по телевизору',
      en: 'I also heard it on TV',
    },
    {
      ru: 'Сколько ошибок она сделала?',
      en: 'How many mistakes did she make?',
    },
    {
      ru: 'Я положил это около моего комьютера',
      en: 'I put it near my computer',
    },
    {
      ru: 'В том месте было очень опасно',
      en: 'It was very dangerous in that place',
    },
    {
      ru: 'Там было очень опасно',
      en: 'It was very dangerous there',
    },
    {
      ru: 'Там было скучно',
      en: 'It was boring there',
    },
    {
      ru: 'Он боялся этого',
      en: 'He was afraid of it',
    },
    {
      ru: 'Они боялись этих изменений',
      en: 'They were afraid of these changes',
    },
    {
      ru: 'Она думает, это было что-то особенное',
      en: 'She thinks it was something special',
    },
    {
      ru: 'Это не был лучший результат',
      en: `It wasn't the best result`,
    },
    {
      ru: 'Это не был мой лучший результат',
      en: `It wasn't my best result`,
    },
    {
      ru: 'Это не было на письменном столе',
      en: `It wasn't on the desk`,
    },
    {
      ru: 'Он не был готов к этому тесту',
      en: `He wasn't ready for this test`,
    },
    {
      ru: 'Я думаю, это был не лучший ответ',
      en: `I think it wasn't the best answer`,
    },
    {
      ru: 'Это был неправильный ответ?',
      en: 'Was it the wrong answer?',
    },
    {
      ru: 'Это был правильный ответ?',
      en: 'Was it the correct answer?',
    },
    {
      ru: 'Это было в прошлом веке?',
      en: 'Was it last century?',
    },
    {
      ru: 'Это было интересно?',
      en: 'Was it interesting?',
    },
    {
      ru: 'Она болела на прошлой недели?',
      en: 'Was she ill last week?',
    },
    {
      ru: 'Он был в аэропорту?',
      en: 'Was he at the airport?',
    },
    {
      ru: 'Она действительно боялась этого?',
      en: 'Was she really afraid of it?',
    },
    {
      ru: 'Ты был в гостинице?',
      en: 'Were you in the living room?',
    },
    {
      ru: 'Они были в своей комнате?',
      en: 'Were they in the their room?',
    },
    {
      ru: 'Он был в саду?',
      en: 'Was he in the garden?',
    },
    {
      ru: 'Он был в своём саду?',
      en: 'Was he in his garden?',
    },
    {
      ru: 'Ты был в ванной?',
      en: 'Were you in the bathroom?',
    },
    {
      ru: 'В каком углу это было?',
      en: 'Which corner was it in?',
    },
    {
      ru: 'Насколько это было трудно для тебя?',
      en: 'How difficult was it for you?',
    },
    {
      ru: 'Какие вопросы были правильным?',
      en: 'Which questions were correct?',
    },
    {
      ru: 'Какой вопрос был правильным?',
      en: 'Which question was correct?',
    },
    {
      ru: 'Как у него были дела?',
      en: 'How was he?',
    },
    {
      ru: 'Как у тебя были дела?',
      en: 'How were you?',
    },
    {
      ru: 'Какой был её ответ?',
      en: 'What was her answer?',
    },
    {
      ru: 'Какой ответ был правильным?',
      en: 'Which answer was correct?',
    },
    {
      ru: 'Какие ответы были неправильными?',
      en: 'Which answers were wrong?',
    },
    {
      ru: 'Насколько это было трудно для тебя?',
      en: 'How difficult was it for you?',
    },
    {
      ru: 'Насколько это было эффективно?',
      en: 'How effective was it?',
    },
    {
      ru: 'Насколько это было интересно?',
      en: 'How interesting was it?',
    },
    {
      ru: 'Я вовсе не был больным',
      en: `I wasn't ill at all`,
    },
    {
      ru: 'Это вовсе не было эффективно',
      en: `It wasn't effective at all`,
    },
    {
      ru: 'Это совсем не было эффективно',
      en: `It wasn't effective at all`,
    },
    {
      ru: 'Это было совсем не интересно',
      en: `It wasn't interesting at all`,
    },
    {
      ru: 'Это совсем не мотивировало меня',
      en: `It didn't motivate me at all`,
    },
    {
      ru: 'Они не поженились в прошлом году',
      en: `They didn't get married last year`,
    },
    {
      ru: 'Он был женат на ней',
      en: 'He was married to her',
    },
    {
      ru: 'Я знаю, что они не были женаты',
      en: `I know that they weren't married`,
    },
    {
      ru: 'Он с ней не чувствовал себя счастливым',
      en: `He didn't feel happy with her`,
    },
    {
      ru: 'Я знаю, что я достигну своей цели рано или поздно',
      en: `I know that I'll achieve my aim sooner or later`,
    },
    {
      ru: 'Она перепрыгнула через верёвку',
      en: 'She jumped over the rope',
    },
    {
      ru: 'Она перепрыгнула через эту верёвку',
      en: 'She jumped over this rope',
    },
    {
      ru: 'Он перепрыгнул через забор',
      en: 'He jumped over the fence',
    },
    {
      ru: 'Его машина часто ломается',
      en: 'His car often breaks down',
    },
    {
      ru: 'Эта машина так часто ломается',
      en: 'This car breaks down so often',
    },
    {
      ru: 'Ты можешь отправить мне это по электронной почте',
      en: 'You can send me it by email',
    },
    {
      ru: 'Они отправили мне эту информацию',
      en: 'They sent me this information',
    },
    {
      ru: 'Я думаю, ему следует сделать это',
      en: 'I think he should do it',
    },
    {
      ru: 'Это будет стоить более двух тысяч долларов скоро',
      en: 'It will cost more than two thusand dollars soon',
    },
    {
      ru: 'Это зависело от разных факторов',
      en: 'It depended on different factors',
    },
    {
      ru: 'Ему нравится водить',
      en: 'He likes driving',
    },
    {
      ru: 'Я знаю, что носители языка обычно говорят очень быстро',
      en: 'I know that native speakers usually speak very fast',
    },
    {
      ru: 'Я не был готов услышать это',
      en: 'I was not ready to hear it',
    },
    {
      ru: 'Как долго ты будешь оставаться в отеле?',
      en: 'How long will you stay at this hotel?',
    },
    {
      ru: 'Он хочет перестать курить',
      en: 'He wants to stop smoking',
    },
    {
      ru: 'Я сделаю эту вещь с большим удовольствием',
      en: 'I will do this think with greate pleasure',
    },
    {
      ru: 'Он убежал',
      en: 'He ran away',
    },
    {
      ru: 'Ему нужно немного поспать',
      en: 'He needs to sleep a bit',
    },
    {
      ru: 'Он каждый раз говорит эту вещь',
      en: 'He says this thing every time',
    },
    {
      ru: 'Ты можешь положить эту коробку на землю',
      en: 'You can put thiss box on the ground',
    },
    {
      ru: 'Он будет работать намного усерднее, потому что ему нужны эти деньги',
      en: 'He will work much harder because he needs this money',
    },
    {
      ru: 'Я хотел бы выпить стакан сока',
      en: 'I would like to drink a glass of juice',
    },
    {
      ru: 'Я бы купил другую вещь',
      en: 'I would buy another thing',
    },
    {
      ru: 'Мы могли бы сделать это сейчас',
      en: 'We could do it now',
    },
    {
      ru: 'Это принесло мне настоящее счатье',
      en: 'It brought me real happiness',
    },
    {
      ru: 'Ты закончишь это вовремя?',
      en: 'Will you finish it on time?',
    },
    {
      ru: 'Она продала свой старый дом',
      en: 'She sold her old house',
    },
    {
      ru: 'Я не забуду её доброту',
      en: `I won't forget her kindness`,
    },
    {
      ru: 'Она часто резала рыбу',
      en: 'She often cut fish',
    },
    {
      ru: 'Он порезался',
      en: 'He cut himself',
    },
    {
      ru: 'Он пьёт слишком много алкоголя, и это очень вредно для его здоровья',
      en: 'He drinks too much alcohol and it is very bad for his health',
    },
    {
      ru: 'Эта цена включает в себя эти услуги',
      en: 'This price includes these services',
    },
    {
      ru: 'Они включат это в счёт',
      en: 'They will include it in the bill',
    },
    {
      ru: 'Он не включит это в твой счёт',
      en: `He won't include it in your bill`,
    },
    {
      ru: 'Они включают это в цену',
      en: 'They include it in the price',
    },
    {
      ru: 'Я не хочу переезжать в другую страну',
      en: `I don't want to move to another country`,
    },
    {
      ru: 'Ты можешь сравнить эти два ресторана',
      en: 'You can compare these two restaurants',
    },
    {
      ru: 'Я понимаю, что мне нужно намного больше денег, если я хочу купить это',
      en: 'I understand that I need much more money if I want to buy it',
    },
    {
      ru: 'Она держит свои деньги дома',
      en: 'She keeps her money at home',
    },
    {
      ru: 'Он держит свои деньги в банке',
      en: 'He keeps his money in a bank',
    },
    {
      ru: 'Я рассказал ей этот секрет',
      en: 'I told her this secret',
    },
    {
      ru: 'Я поделился с ней этой информацией',
      en: 'I shared this information with her',
    },
    {
      ru: 'Я хочу задать тебе несколько вопросов',
      en: 'I want to ask you some questions',
    },
    {
      ru: 'Я чувствую, что мне нужно улучшить свою речь',
      en: 'I feel that I need to improve my speaking',
    },
    {
      ru: 'Она каталась на осле и это было так необычно',
      en: 'She rode a donkey and it was so unusual',
    },
    {
      ru: 'Я путешествую очень редко, потому что очень занят',
      en: `I travel very rarely because I'm very busy`,
    },
    {
      ru: 'Она умеет говорить на двух иностранных языках',
      en: 'She can speak two foreign languages',
    },
    {
      ru: 'Ты говоришь на каких-либо иностранных языках?',
      en: 'Do you speak any foreign languages?',
    },
    {
      ru: 'Ты можешь говорить на каких-либо иностранных языках?',
      en: 'Can you speak any foreign languages?',
    },
    {
      ru: 'Этот видеоблоггер показал это в своём видео',
      en: 'This video blogger showed it in his video',
    },
    {
      ru: 'Когда они поженяться?',
      en: 'When will they get married?',
    },
    {
      ru: 'Он женился на ней в прошлом году',
      en: 'He married her last year',
    },
    {
      ru: 'Она готовит вкусную еду',
      en: 'She cooks delicious food',
    },
    {
      ru: 'Она всегда готовила вкусную еду',
      en: 'She always cooked tasty food',
    },
    {
      ru: 'Они строят очень модный дом',
      en: 'They build a very fashionable house',
    },
    {
      ru: 'Они не строят очень модные дома',
      en: 'They do not build very fashionable houses',
    },
    {
      ru: 'Он часто улыбается',
      en: 'He often smiles',
    },
    {
      ru: 'Она улыбнулась мне',
      en: 'She smiled at me',
    },
    {
      ru: 'Я в основном пользовался тем словарём',
      en: 'I mostly used that dictionary',
    },
    {
      ru: 'Он в основном показывает хорошие результаты',
      en: 'He mostly shows a good result',
    },
    {
      ru: 'Как долго это длилось?',
      en: 'How long did it last?',
    },
    {
      ru: 'Как долго это было?',
      en: 'How long was it?',
    },
    {
      ru: 'Я правильно это написал?',
      en: 'Did I write it correctly?',
    },
    {
      ru: 'Я не мог понять эту речь',
      en: `I couldn't understand this speech`,
    },
    {
      ru: 'Время проходило так медленно',
      en: 'Time passed so slowly',
    },
    {
      ru: 'Время проходит очень быстро',
      en: 'Time passes very quickly',
    },
    {
      ru: 'Я мог купить тот дом, но я этого не сделал',
      en: `I could buy that house but I didn't do it`,
    },
    {
      ru: 'Я не думаю, что цена упадёт',
      en: `I don't think that the price will fall`,
    },
    {
      ru: 'Он говорит, что они построят этот мост в следующем году',
      en: 'He says that they will build this bridge next year',
    },
    {
      ru: 'Я не могу выбрать между этими двумя вещами',
      en: `I can't choose between these two things`,
    },
    {
      ru: 'Тот урок длился час',
      en: 'That lesson lasted an hour',
    },
    {
      ru: 'Я думаю, я последую твоему совету',
      en: 'I think I will follow your advice',
    },
    {
      ru: 'Просто следую за мной!',
      en: 'Just follow me!',
    },
    {
      ru: 'Просто делай это!',
      en: 'Just do it!',
    },
    {
      ru: 'Сколько денег ты получал, когда ты работал здесь?',
      en: 'How much money did you get when you worked here?',
    },
    {
      ru: 'Я уверен, тебе это поможет',
      en: 'I am sure it will help you',
    },
    {
      ru: 'Просто игнорируй это!',
      en: 'Just ignore it!',
    },
    {
      ru: 'Я плавал в море вчера',
      en: 'I swam in the sea yesterday',
    },
  ];
  
  console.log(MAIN_ARRAY.length);
  
  const template = document.querySelector('#template-one').content.querySelector('.testing__item');
  const questionContent = document.querySelector('.testing__items');
  const btn = document.querySelector('#testing__btn');
  const result = document.querySelector('.result');
  const start = document.querySelector('#testing__start');
  
  const renderQuestions = function (question, length) {
    var questionElement = template.cloneNode(true);
  
    questionElement.querySelector('.testing__span').textContent = question;
    questionElement.querySelector('.testing__input').setAttribute('maxlength', `${length}`);
    return questionElement;
  };
  
  const renderStart = (value, lang) => {
    var fragment = document.createDocumentFragment();
    console.log(value);
    console.log(lang);
    if (lang === 'en') {
      for (var i = 0; i < value; i++) {
        fragment.appendChild(renderQuestions(MAIN_ARRAY[newArray[i]].en, MAIN_ARRAY[newArray[i]].ru.length));
      }
    }
    if (lang === 'ru') {
      for (var i = 0; i < value; i++) {
        fragment.appendChild(renderQuestions(MAIN_ARRAY[newArray[i]].ru, MAIN_ARRAY[newArray[i]].en.length));
      }
    }
    if (lang === 'all') {
      for (var i = 0; i < value; i++) {
        const randomNumber = (min = 1, max = 2) => {
          return Math.floor(Math.random() * (max - min + 1) + min);
        };
        let number = randomNumber();
        if (number === 1) {
          fragment.appendChild(renderQuestions(MAIN_ARRAY[newArray[i]].ru, MAIN_ARRAY[newArray[i]].en.length));
        }
        if (number === 2) {
          fragment.appendChild(renderQuestions(MAIN_ARRAY[newArray[i]].en, MAIN_ARRAY[newArray[i]].ru.length));
        }
      }
    }
  
    questionContent.appendChild(fragment);
  };
  
  function getResult(value) {
    var check = questionContent.querySelectorAll('.check');
    var str;
    var re;
    let j = 0;
    let newCheck = [];
    let resultNumber = choice.value;
    for (let i = 0; i < choice.value; i++) {
      str = input[i].value;
      if (value === 1) {
        re = MAIN_ARRAY[newArray[i]].ru;
      }
      if (value === 2) {
        re = MAIN_ARRAY[newArray[i]].en;
      }
      if (str == null || str.length == 0) {
        j++;
        newCheck.push(i);
      }
    }
    if (j > 0) {
      do {
        j--;
        input[newCheck[j]].dataset.result = 'empty';
        input[newCheck[j]].placeholder = 'Поле пустое, введите значение';
      } while (j);
      return newCheck;
    }
    for (let i = 0; i < choice.value; i++) {
      str = input[i].value;
  
      if (value === 1) {
        re = MAIN_ARRAY[newArray[i]].en;
      }
      if (value === 2) {
        re = MAIN_ARRAY[newArray[i]].ru;
      }
      if (value === 3) {
        console.log(span[i].textContent);
        if (span[i].textContent === MAIN_ARRAY[newArray[i]].ru) {
          re = MAIN_ARRAY[newArray[i]].en;
        }
        if (span[i].textContent === MAIN_ARRAY[newArray[i]].en) {
          re = MAIN_ARRAY[newArray[i]].ru;
        }
      }
      if (re === str) {
        input[i].dataset.result = 'correctly';
        check[i].textContent = '+';
      }
      if (re !== str) {
        input[i].dataset.result = 'mistake';
        check[i].textContent = '- : ' + re;
        resultNumber--;
      }
    }
    result.textContent = 'Ваш результат: ' + resultNumber + ' из ' + choice.value;
  }
  
  let newArray = [];
  
  var randomNumber = (bigArray, value) => {
    var checkNumber = true;
    do {
      end: for (var i = 0; i < value; i++) {
        newArray[i] = Math.floor(Math.random() * (bigArray.length - 1 - 0 + 1) + 0);
  
        if (i === value - 1) {
          checkNumber = true;
          for (var j = 0; j < value; j++) {
            for (var k = j + 1; k < value; k++) {
              if (newArray[j] === newArray[k]) {
                checkNumber = false;
                break end;
              }
            }
          }
        }
      }
    } while (checkNumber === false);
    return console.log(newArray);
  };
  
  let choice;
  let span;
  let input;
  
  start.addEventListener('click', () => {
    let testing = document.querySelector('.testing__choose');
    let language = document.querySelector('.testing__languages:checked');
    choice = document.querySelector('.testing__choice:checked');
  
    randomNumber(MAIN_ARRAY, choice.value);
    renderStart(choice.value, language.value);
  
    testing.classList.add('visually-hidden');
    btn.classList.remove('visually-hidden');
  
    span = questionContent.querySelectorAll('.testing__span');
    input = questionContent.querySelectorAll('.testing__input');
  
    return choice;
  });
  
  btn.addEventListener('click', () => {
    let language = document.querySelector('.testing__languages:checked');
  
    if (language.value === 'ru') {
      getResult(1);
    }
    if (language.value === 'en') {
      getResult(2);
    }
    if (language.value === 'all') {
      getResult(3);
    }
  });
  
}

if (document.querySelector('#template-offers__one') !== null) {
  try {
    document.querySelector('.menu__link[href="offers1.html"]').dataset.current = 'true';
  } catch {
    console.log('.menu__link[href="offers1.html"] - не найдено');
  }

  const OFFERS_A1_51_57 = [

    {

      ru: 'Я обожаю читать книги вечером',

      en: 'I enjoy reading books in the evening',

      tr: '[aɪ] [ɪnˈʤɔɪ] [ˈriːdɪŋ] [bʊks] [ɪn] [ði] [ˈiːvnɪŋ]',

    },

    {

      ru: 'Мне действительно нравится кататься на велосипеде',

      en: 'I really like cycling',

      tr: '[aɪ] [ˈrɪəli] [laɪk] [ˈsaɪklɪŋ]',

    },

    {

      ru: 'Это стоит два миллиона фунтов',

      en: 'It costs two million pounds',

      tr: '[ɪt] [kɒsts] [tuː] [ˈmɪljən] [paʊndz]',

    },

    {

      ru: 'У меня есть много миллионов долларов',

      en: 'I have many millions of dollars',

      tr: '[aɪ] [hæv] [ˈmɛni] [ˈmɪljənz] [ɒv] [ˈdɒləz]',

    },

    {

      ru: 'Я могу сделать это в начале',

      en: 'I can do it in the beginning',

      tr: '[aɪ] [kæn] [duː] [ɪt] [ɪn] [ðə] [bɪˈɡɪnɪŋ]',

    },

    {

      ru: 'Я могу сделать это в начале этого дня',

      en: 'I can do it at the beginning of this day',

      tr: '[aɪ] [kæn] [duː] [ɪt] [æt] [ðə] [bɪˈɡɪnɪŋ] [ɒv] [ðɪs] [deɪ]',

    },

    {

      ru: 'Мне нужен опыт работы вначале',

      en: 'I need work experience in the beginning',

      tr: '[aɪ] [niːd] [wɜːk] [ɪkˈspɪəriəns] [ɪn] [ðə] [bɪˈɡɪnɪŋ]',

    },

    {

      ru: 'Мне нужен некоторый опыт работы в первую очередь',

      en: 'I need some work experience first of all',

      tr: '[aɪ] [niːd] [sʌm] [wɜːk] [ɪkˈspɪəriəns] [fɜːst] [ɒv] [ɔːl]',

    },

    {

      ru: 'Я предпочитаю делать это в свободное время',

      en: 'I prefer to do it in my free time',

      tr: '[aɪ] [priˈfɜː] [tuː] [duː] [ɪt] [ɪn] [maɪ] [friː] [taɪm]',

    },

    {

      ru: 'Он прекрасно понимает это',

      en: 'He perfectly understands it',

      tr: '[hiː] [ˈpɜːfɪktli] [ˌʌndəˈstændz] [ɪt]',

    },

    {

      ru: 'Я тебя прекрасно понимаю',

      en: 'I perfectly understand you',

      tr: '[aɪ] [ˈpɜːfɪktli] [ˌʌndəˈstænd] [juː]',

    },

    {

      ru: 'Я прекрасно понимаю как это работает',

      en: 'I perfectly understand how it works',

      tr: '[aɪ] [ˈpɜːfɪktli] [ˌʌndəˈstænd] [haʊ] [ɪt] [wɜːks]',

    },

    {

      ru: 'Я прекрасно понимаю твою точку зрения',

      en: 'I perfectly understand your point of view',

      tr: '[aɪ] [ˈpɜːfɪktli] [ˌʌndəˈstænd] [jɔː] [pɔɪnt] [ɒv] [vjuː]',

    },

    {

      ru: 'Я хочу свободно говорить по-английски',

      en: 'I want to speak English fluently',

      tr: '[aɪ] [wɒnt] [tuː] [spiːk] [ˈɪŋɡlɪʃ] [ˈfluːəntli]',

    },

    {

      ru: 'Она хочет улучшить свой словарный запас в первую очередь',

      en: 'She wants to improve her vocabulary first of all',

      tr: '[ʃiː] [wɒnts] [tuː] [ɪmˈpruːv] [hɜː] [vəˈkæbjəlᵊri] [fɜːst] [ɒv] [ɔːl]',

    },

    {

      ru: 'Я вижу, ты часто ездишь за границу',

      en: 'I see you often go abroad',

      tr: '[aɪ] [siː] [juː] [ˈɒfᵊn] [ɡəʊ] [əˈbrɔːd]',

    },

    {

      ru: 'Он говорит по-английски без акцента',

      en: 'He speaks English without an accent',

      tr: '[hiː] [spiːks] [ˈɪŋɡlɪʃ] [wɪˈðaʊt] [ən] [ˈæksᵊnt]',

    },

    {

      ru: 'Это случается время от времени',

      en: 'It happens from time to time',

      tr: '[ɪt] [ˈhæpᵊnz] [frɒm] [taɪm] [tuː] [taɪm]',

    },

    {

      ru: 'Эта вещь случается время от времени',

      en: 'This thing happens from time to time',

      tr: '[ðɪs] [θɪŋ] [ˈhæpᵊnz] [frɒm] [taɪm] [tuː] [taɪm]',

    },

    {

      ru: 'Он работает в другом отделе',

      en: 'He works in another department',

      tr: '[hiː] [wɜːks] [ɪn] [əˈnʌðə] [dɪˈpɑːtmənt]',

    },

    {

      ru: 'Ей очень нравится классическая музыка',

      en: 'She really likes classical music',

      tr: '[ʃiː] [ˈrɪəli] [laɪks] [ˈklæsɪkᵊl] [ˈmjuːzɪk]',

    },

    {

      ru: 'Я хожу на плавание дважды в неделю',

      en: 'I go swimming twice a week',

      tr: '[aɪ] [ɡəʊ] [ˈswɪmɪŋ] [twaɪs] [ə] [wiːk]',

    },

    {

      ru: 'Я хожу на плавание два раза в неделю',

      en: 'I go swimming two times a week',

      tr: '[aɪ] [ɡəʊ] [ˈswɪmɪŋ] [tuː] [taɪmz] [ə] [wiːk]',

    },

    {

      ru: 'Я занимаюсь плаванием два или три раза в неделю',

      en: 'I go swimming two or three times a week',

      tr: '[aɪ] [ɡəʊ] [ˈswɪmɪŋ] [tuː] [ɔː] [θriː] [taɪmz] [ə] [wiːk]',

    },

    {

      ru: 'Она работает продавцом магазина',

      en: 'She works as a shop assistant',

      tr: '[ʃiː] [wɜːks] [æz] [ə] [ʃɒp] [əˈsɪstᵊnt]',

    },

    {

      ru: 'Она часто летает в Соединенённые Штаты',

      en: 'She often flies to the United States',

      tr: '[ʃiː] [ˈɒfᵊn] [flaɪz] [tuː] [ðə] [juːˈnaɪtɪd] [steɪts]',

    },

    {

      ru: 'Я хожу в бассейн каждый день',

      en: 'I go to the swimming pool every day',

      tr: '[aɪ] [ɡəʊ] [tuː] [ðə] [ˈswɪmɪŋ] [puːl] [ˈɛvri] [deɪ]',

    },

    {

      ru: 'У него большая семья',

      en: 'He has a large family',

      tr: '[hiː] [hæz] [ə] [lɑːʤ] [ˈfæmɪli]',

    },

    {

      ru: 'Я живу в большом городе',

      en: 'I live in a big city',

      tr: '[aɪ] [lɪv] [ɪn] [ə] [bɪɡ] [ˈsɪti]',

    },

    {

      ru: 'У него финансовые проблемы',

      en: 'He has financial problems',

      tr: '[hiː] [hæz] [faɪˈnænʃᵊl] [ˈprɒbləmz]',

    },

    {

      ru: 'Я вижу реальный прогресс',

      en: 'I see real progress',

      tr: '[aɪ] [siː] [rɪəl] [ˈprəʊɡrɛs]',

    },

    {

      ru: 'У него есть другая идея',

      en: 'He has another idea',

      tr: '[hiː] [hæz] [əˈnʌðər] [aɪˈdɪə]',

    },

    {

      ru: 'У него есть странный вопрос',

      en: 'He has a strange question',

      tr: '[hiː] [hæz] [ə] [streɪnʤ] [ˈkwɛsʧən]',

    },

    {

      ru: 'Мы учим основные правила в начале',

      en: 'We learn basic rules in the beginning',

      tr: '[wiː] [lɜːn] [ˈbeɪsɪk] [ruːlz] [ɪn] [ðə] [bɪˈɡɪnɪŋ]',

    },

    {

      ru: 'Он хочет иметь средний уровень для начала',

      en: 'He wants to have an intermediate level for a start',

      tr: '[hiː] [wɒnts] [tuː] [hæv] [ən] [ˌɪntəˈmiːdiət] [ˈlɛvᵊl] [fɔːr] [ə] [stɑːt]',

    },

    {

      ru: 'У неё очень приятная улыбка',

      en: 'She has a very pleasant smile',

      tr: '[ʃiː] [hæz] [ə] [ˈvɛri] [ˈplɛzᵊnt] [smaɪl]',

    },

    {

      ru: 'Они гостеприимные люди',

      en: 'They are hospitable people',

      tr: '[ðeɪ] [ɑː] [hɒˈspɪtəbᵊl] [ˈpiːpᵊl]',

    },

    {

      ru: 'Она умная',

      en: 'She is smart',

      tr: '[ʃiː] [ɪz] [smɑːt]',

    },

    {

      ru: 'Она умная девушка',

      en: 'She is a smart girl',

      tr: '[ʃiː] [ɪz] [ə] [smɑːt] [ɡɜːl]',

    },

    {

      ru: 'Это долгий процесс',

      en: 'It is long process',

      tr: '[ɪt] [ɪz] [lɒŋ] [ˈprəʊsɛs]',

    },

    {

      ru: 'Это наше лучшее достижение',

      en: 'It is our best achievement',

      tr: '[ɪt] [ɪz] [ˈaʊə] [bɛst] [əˈʧiːvmənt]',

    },

    {

      ru: 'Я думаю, это реальное достижение для нас',

      en: 'I think it is a real achievement for us',

      tr: '[aɪ] [θɪŋk] [ɪt] [ɪz] [ə] [rɪəl] [əˈʧiːvmənt] [fɔːr] [ʌs]',

    },

    {

      ru: 'Он умный парень',

      en: 'He is smart guy',

      tr: '[hiː] [ɪz] [smɑːt] [ɡaɪ]',

    },

    {

      ru: 'Ты такой щедрый',

      en: 'You are so generous',

      tr: '[juː] [ɑː] [səʊ] [ˈʤɛnᵊrəs]',

    },

    {

      ru: 'Он очень щедрый человек',

      en: 'He is a very generous person',

      tr: '[hiː] [ɪz] [ə] [ˈvɛri] [ˈʤɛnᵊrəs] [ˈpɜːsᵊn]',

    },

    {

      ru: 'Это очень важная деталь',

      en: 'It is a very important detail',

      tr: '[ɪt] [ɪz] [ə] [ˈvɛri] [ɪmˈpɔːtᵊnt] [ˈdiːteɪl]',

    },

    {

      ru: 'Это удивительный результат',

      en: 'It is an amazing result',

      tr: '[ɪt] [ɪz] [ən] [əˈmeɪzɪŋ] [rɪˈzʌlt]',

    },

    {

      ru: 'У неё потрясающий голос',

      en: 'She has an amazing voice',

      tr: '[ʃiː] [hæz] [ən] [əˈmeɪzɪŋ] [vɔɪs]',

    },

    {

      ru: 'Я прекрасно понимаю, что это уникальная возможность',

      en: 'I perfectly understand that it is a unique opportunity',

      tr: '[aɪ] [ˈpɜːfɪktli] [ˌʌndəˈstænd] [ðæt] [ɪt] [ɪz] [ə] [juːˈniːk] [ˌɒpəˈʧuːnəti]',

    },

    {

      ru: 'Это очень смешное видео',

      en: 'It is a very funny video',

      tr: '[ɪt] [ɪz] [ə] [ˈvɛri] [ˈfʌni] [ˈvɪdiəʊ]',

    },

    {

      ru: 'Это очень большое число',

      en: 'It is a very large number',

      tr: '[ɪt] [ɪz] [ə] [ˈvɛri] [lɑːʤ] [ˈnʌmbə]',

    },

    {

      ru: 'Он очень добр к нам',

      en: 'He is very kind to us',

      tr: '[hiː] [ɪz] [ˈvɛri] [kaɪnd] [tuː] [ʌs]',

    },

    {

      ru: 'Я счастлив быть здесь',

      en: 'I am happy to be here',

      tr: '[aɪ] [æm] [ˈhæpi] [tuː] [biː] [hɪə]',

    },

    {

      ru: 'Они из разных стран',

      en: 'They are from different countries',

      tr: '[ðeɪ] [ɑː] [frɒm] [ˈdɪfᵊrᵊnt] [ˈkʌntriz]',

    },

    {

      ru: 'Он думает иначе',

      en: 'He thinks differently',

      tr: '[hiː] [θɪŋks] [ˈdɪfᵊrᵊntli]',

    },

    {

      ru: 'У тебя хорошая работа',

      en: 'You have a good job',

      tr: '[juː] [hæv] [ə] [ɡʊd] [ʤɒb]',

    },

    {

      ru: 'Он боится этого',

      en: 'He is afraid of it',

      tr: '[hiː] [ɪz] [əˈfreɪd] [ɒv] [ɪt]',

    },

    {

      ru: 'Она родом из Лос-Анджелеса',

      en: 'She comes from Los Angeles',

      tr: '[ʃiː] [kʌmz] [frɒm] [lɒs] [ˈeɪnʤᵊlz]',

    },

    {

      ru: 'Он родом из Нью Йорка',

      en: 'He comes from New York',

      tr: '[hiː] [kʌmz] [frɒm] [njuː] [jɔːk]',

    },

    {

      ru: 'Она такая уставшая',

      en: 'She is so tired',

      tr: '[ʃiː] [ɪz] [səʊ] [taɪəd]',

    },

    {

      ru: 'Я здесь в данный момент',

      en: 'I am here at the moment',

      tr: '[aɪ] [æm] [hɪər] [æt] [ðə] [ˈməʊmənt]',

    },

    {

      ru: 'Она живёт в прекрасном месте',

      en: 'She lives in a lovely place',

      tr: '[ʃiː] [lɪvz] [ɪn] [ə] [ˈlʌvli] [pleɪs]',

    },

    {

      ru: 'Это прекрасное место',

      en: 'It is a lovely place',

      tr: '[ɪt] [ɪz] [ə] [ˈlʌvli] [pleɪs]',

    },

    {

      ru: 'Это чрезвычайно важная вещь',

      en: 'It is an extremely important think',

      tr: '[ɪt] [ɪz] [ən] [ɪkˈstriːmli] [ɪmˈpɔːtᵊnt] [θɪŋk]',

    },

    {

      ru: 'Это чрезвычайно сложная вещь',

      en: 'It is an extremely difficult think',

      tr: '[ɪt] [ɪz] [ən] [ɪkˈstriːmli] [ˈdɪfɪkᵊlt] [θɪŋk]',

    },

    {

      ru: 'Это чрезвычайно важно',

      en: 'It is extremely important',

      tr: '[ɪt] [ɪz] [ɪkˈstriːmli] [ɪmˈpɔːtᵊnt]',

    },

    {

      ru: 'Он говорит, что это чрезвычайно важно для всех нас',

      en: 'He says that it is extremely important for all of us',

      tr: '[hiː] [sɛz] [ðæt] [ɪt] [ɪz] [ɪkˈstriːmli] [ɪmˈpɔːtᵊnt] [fɔːr] [ɔːl] [ɒv] [ʌs]',

    },

    {

      ru: 'Это кажется лучшим решением этой проблемы',

      en: 'It seems the best solution to this problem',

      tr: '[ɪt] [siːmz] [ðə] [bɛst] [səˈluːʃᵊn] [tuː] [ðɪs] [ˈprɒbləm]',

    },

    {

      ru: 'Мне нужно найти решение это проблемы',

      en: 'I need to find a solution to this problem',

      tr: '[aɪ] [niːd] [tuː] [faɪnd] [ə] [səˈluːʃᵊn] [tuː] [ðɪs] [ˈprɒbləm]',

    },

    {

      ru: 'Это кажется лучшим решением',

      en: 'It seems the best decision',

      tr: '[ɪt] [siːmz] [ðə] [bɛst] [dɪˈsɪʒᵊn]',

    },

    {

      ru: 'Это типичная ошибка изучающих английский язык',

      en: 'It is a typical mistake of English learners',

      tr: '[ɪt] [ɪz] [ə] [ˈtɪpɪkᵊl] [mɪˈsteɪk] [ɒv] [ˈɪŋɡlɪʃ] [ˈlɜːnəz]',

    },

    {

      ru: 'Это самая типичная ошибка изучающих английский язык',

      en: 'It is the most typical mistake of English learners',

      tr: '[ɪt] [ɪz] [ðə] [məʊst] [ˈtɪpɪkᵊl] [mɪˈsteɪk] [ɒv] [ˈɪŋɡlɪʃ] [ˈlɜːnəz]',

    },

    {

      ru: 'Это самая распространённая ошибка изучающих английский язык',

      en: 'It is the most common mistake of English learners',

      tr: '[ɪt] [ɪz] [ðə] [məʊst] [ˈkɒmən] [mɪˈsteɪk] [ɒv] [ˈɪŋɡlɪʃ] [ˈlɜːnəz]',

    },

    {

      ru: 'Это лежит на крыше',

      en: 'It lies on the roof',

      tr: '[ɪt] [laɪz] [ɒn] [ðə] [ruːf]',

    },

    {

      ru: 'Я думаю, это пустая трата времени',

      en: 'I think it is a waste of time',

      tr: '[aɪ] [θɪŋk] [ɪt] [ɪz] [ə] [weɪst] [ɒv] [taɪm]',

    },

    {

      ru: 'Это кажется пустой тратой времени для меня',

      en: 'It seems a waste of time for me',

      tr: '[ɪt] [siːmz] [ə] [weɪst] [ɒv] [taɪm] [fɔː] [miː]',

    },

    {

      ru: 'Я думаю, это действительно ужасно',

      en: 'I think it is really terrible',

      tr: '[aɪ] [θɪŋk] [ɪt] [ɪz] [ˈrɪəli] [ˈtɛrəbᵊl]',

    },

    {

      ru: 'Мы можем видеть это в официальном документе',

      en: 'We can see it in the official document',

      tr: '[wiː] [kæn] [siː] [ɪt] [ɪn] [ði] [əˈfɪʃᵊl] [ˈdɒkjəmənt]',

    },

    {

      ru: 'Та игра кажется такой интересной',

      en: 'That game seems so interesting',

      tr: '[ðæt] [ɡeɪm] [siːmz] [səʊ] [ˈɪntrɛstɪŋ]',

    },

    {

      ru: 'Эти мужчины выглядят очень слабыми',

      en: 'This men look very weak',

      tr: '[ðɪs] [mɛn] [lʊk] [ˈvɛri] [wiːk]',

    },

    {

      ru: 'Эта вещь очень сильно мотивирует меня',

      en: 'This thing motivates me greatly',

      tr: '[ðɪs] [θɪŋ] [ˈməʊtɪveɪts] [miː] [ˈɡreɪtli]',

    },

    {

      ru: 'Моему брату нравится эта музыка тоже',

      en: 'My brother likes this music, too',

      tr: '[maɪ] [ˈbrʌðə] [laɪks] [ðɪs] [ˈmjuːzɪk], [tuː]',

    },

    {

      ru: 'Моя сестра работает ветеринаром',

      en: 'My sister work as a vet',

      tr: '[maɪ] [ˈsɪstə] [wɜːk] [æz] [ə] [vɛt]',

    },

    {

      ru: 'У его сестры есть парень',

      en: 'His sister has a boyfriend',

      tr: '[hɪz] [ˈsɪstə] [hæz] [ə] [ˈbɔɪˌfrɛnd]',

    },

    {

      ru: 'Этот год кажется нам очень сложным',

      en: 'This year seems very difficult for us',

      tr: '[ðɪs] [jɪə] [siːmz] [ˈvɛri] [ˈdɪfɪkᵊlt] [fɔːr] [ʌs]',

    },

    {

      ru: 'Мой брат работает фрилансером',

      en: 'My brother works as a freelancer',

      tr: '[maɪ] [ˈbrʌðə] [wɜːks] [æz] [ə] [ˈfriːˌlɑːnsə]',

    },

    {

      ru: 'Мои друзья часто говорят мне эти вещи',

      en: 'My friends often tell me these things',

      tr: '[maɪ] [frɛndz] [ˈɒfᵊn] [tɛl] [miː] [ðiːz] [θɪŋz]',

    },

    {

      ru: 'Эти женщины выглядят так красиво',

      en: 'These women look so beautiful',

      tr: '[ðiːz] [ˈwɪmɪn] [lʊk] [səʊ] [ˈbjuːtɪfᵊl]',

    },

    {

      ru: 'Наша жизнь кажется очень короткой',

      en: 'Our life seems very short',

      tr: '[ˈaʊə] [laɪf] [siːmz] [ˈvɛri] [ʃɔːt]',

    },

    {

      ru: 'Тот путь кажется короче',

      en: 'That way seems shorter',

      tr: '[ðæt] [weɪ] [siːmz] [ˈʃɔːtə]',

    },

    {

      ru: 'Мой отец работает менеджером по продажам',

      en: 'My father works as a sales manager',

      tr: '[maɪ] [ˈfɑːðə] [wɜːks] [æz] [ə] [seɪlz] [ˈmænɪʤə]',

    },

    {

      ru: 'Две картины висят на стене',

      en: 'Two pictures hand on the wall',

      tr: '[tuː] [ˈpɪkʧəz] [hænd] [ɒn] [ðə] [wɔːl]',

    },

    {

      ru: 'Тот проект приносит им слишком мало денег',

      en: 'That project brings them too little money',

      tr: '[ðæt] [ˈprɒʤɛkt] [brɪŋz] [ðɛm] [tuː] [ˈlɪtᵊl] [ˈmʌni]',

    },

    {

      ru: 'Моя мама выходит в отпуск несколько раз в год',

      en: 'My mother go on holiday several times a year',

      tr: '[maɪ] [ˈmʌðə] [ɡəʊ] [ɒn] [ˈhɒlədeɪ] [ˈsɛvᵊrᵊl] [taɪmz] [ə] [jɪə]',

    },

    {

      ru: 'Этот человек пытается найти новую работу',

      en: 'This person tries to find a new job',

      tr: '[ðɪs] [ˈpɜːsᵊn] [traɪz] [tuː] [faɪnd] [ə] [njuː] [ʤɒb]',

    },

    {

      ru: 'Некоторые картины висят на стене',

      en: 'Some pictures hand on the wall',

      tr: '[sʌm] [ˈpɪkʧəz] [hænd] [ɒn] [ðə] [wɔːl]',

    },

    {

      ru: 'Я вижу, что время действительно летит',

      en: 'I see that time really flies',

      tr: '[aɪ] [siː] [ðæt] [taɪm] [ˈrɪəli] [flaɪz]',

    },

    {

      ru: 'Этот интернет-магазин принимает кредитные карты',

      en: 'This online store/shop takes credit cards',

      tr: '[ðɪs] [ˈɒnˌlaɪn] [stɔː]/[ʃɒp] [teɪks] [ˈkrɛdɪt] [kɑːdz]',

    },

    {

      ru: 'Этот онлайн-магазин работает двадцать четыре часа в сутки',

      en: 'This online store/shop works twenty four hours a day',

      tr: '[ðɪs] [ˈɒnˌlaɪn] [stɔː]/[ʃɒp] [wɜːks] [ˈtwɛnti] [fɔːr] [aʊəz] [ə] [deɪ]',

    },

    {

      ru: 'Мой друг пытается водить очень осторожно',

      en: 'My friends tries to drive very carefully',

      tr: '[maɪ] [frɛndz] [traɪz] [tuː] [draɪv] [ˈvɛri] [ˈkeəfᵊli]',

    },

    {

      ru: 'Такие вещи часто случаются',

      en: 'Such things often happen',

      tr: '[sʌʧ] [θɪŋz] [ˈɒfᵊn] [ˈhæpᵊn]',

    },

    {

      ru: 'Мой младший брат так думает',

      en: 'My younger brother thinks so',

      tr: '[maɪ] [ˈjʌŋə] [ˈbrʌðə] [θɪŋks] [səʊ]',

    },

    {

      ru: 'Эта фраза означает следующее',

      en: 'This phrase means the following',

      tr: '[ðɪs] [freɪz] [miːnz] [ðə] [ˈfɒləʊɪŋ]',

    },

    {

      ru: 'Мой отец обычно ездит в отпуск дважды в год',

      en: 'My father usually goes on holiday twice a year',

      tr: '[maɪ] [ˈfɑːðə] [ˈjuːʒʊəli] [ɡəʊz] [ɒn] [ˈhɒlədeɪ] [twaɪs] [ə] [jɪə]',

    },

    {

      ru: 'Тот плакат висит на стене',

      en: 'That poster hangs on the wall',

      tr: '[ðæt] [ˈpəʊstə] [hæŋz] [ɒn] [ðə] [wɔːl]',

    },

    {

      ru: 'Эти часы стоят триста долларов',

      en: 'This watch costs three hundred dollars',

      tr: '[ðɪs] [wɒʧ] [kɒsts] [θriː] [ˈhʌndrəd] [ˈdɒləz]',

    },

    {

      ru: 'Моей сестре действительно нравятся эти туфли',

      en: 'My sister really likes these shoes',

      tr: '[maɪ] [ˈsɪstə] [ˈrɪəli] [laɪks] [ðiːz] [ʃuːz]',

    },

    {

      ru: 'У этого костюма хорошая цена',

      en: 'This suit has a good price',

      tr: '[ðɪs] [suːt] [hæz] [ə] [ɡʊd] [praɪs]',

    },

    {

      ru: 'Это очень модный костюм',

      en: 'It is a very fashionable suit',

      tr: '[ɪt] [ɪz] [ə] [ˈvɛri] [ˈfæʃᵊnəbᵊl] [suːt]',

    },

    {

      ru: 'Вся эта одежда по распродаже',

      en: 'All these clothes are on sale',

      tr: '[ɔːl] [ðiːz] [kləʊðz] [ɑːr] [ɒn] [seɪl]',

    },

    {

      ru: 'Её муж бухгалтер',

      en: 'Her husband is an accountant',

      tr: '[hɜː] [ˈhʌzbənd] [ɪz] [ən] [əˈkaʊntᵊnt]',

    },

    {

      ru: 'Эта женщина медсестра',

      en: 'This woman is a nurse',

      tr: '[ðɪs] [ˈwʊmən] [ɪz] [ə] [nɜːs]',

    },

    {

      ru: 'Эти лекции такие скучные',

      en: 'These lectures are so boring',

      tr: '[ðiːz] [ˈlɛkʧəz] [ɑː] [səʊ] [ˈbɔːrɪŋ]',

    },

    {

      ru: 'Эти мужчины очень разочарованы',

      en: 'These men are very disappointed',

      tr: '[ðiːz] [men] [ɑː] [ˈveri] [ˌdɪsəˈpɔɪntɪd]',

    },

    {

      ru: 'Этот комментарий такой длинный',

      en: 'This comment is so long',

      tr: '[ðɪs] [ˈkɒmɛnt] [ɪz] [səʊ] [lɒŋ]',

    },

    {

      ru: 'Эти женщины коллеги',

      en: 'These women are colleagues',

      tr: '[ðiːz] [ˈwɪmɪn] [ɑː] [ˈkɒliːɡz]',

    },

    {

      ru: 'Эта лампа такая яркая',

      en: 'This lamp is so bright',

      tr: '[ðɪs] [læmp] [ɪz] [səʊ] [braɪt]',

    },

    {

      ru: 'Я думаю, этот мальчик реальный гений',

      en: 'I think this boy is a real genius',

      tr: '[aɪ] [θɪŋk] [ðɪs] [bɔɪ] [ɪz] [ə] [rɪəl] [ˈʤiːniəs]',

    },

    {

      ru: 'Моё главное хобби это изучёние иностранных языков',

      en: 'My main hobby is learning foreign languages',

      tr: '',

    },

    {

      ru: 'Английский язык это моё основное хобби',

      en: 'English is my main hobby',

      tr: '[ˈɪŋɡlɪʃ] [ɪz] [maɪ] [meɪn] [ˈhɒbi]',

    },

    {

      ru: 'Эти выражения являются новыми для нас',

      en: 'These expressions are new for us',

      tr: '[ðiːz] [ɪkˈsprɛʃᵊnz] [ɑː] [njuː] [fɔːr] [ʌs]',

    },

    {

      ru: 'Эта коробка действительно тяжёлая',

      en: 'This box is really heavy',

      tr: '[ðɪs] [bɒks] [ɪz] [ˈrɪəli] [ˈhɛvi]',

    },

    {

      ru: 'Моё полотенце в ванной',

      en: 'My towel is in the bathroom',

      tr: '[maɪ] [taʊəl] [ɪz] [ɪn] [ðə] [ˈbɑːθruːm]',

    },

    {

      ru: 'Эта игрушка в спальне',

      en: 'This toy is in the bedroom',

      tr: '[ðɪs] [tɔɪ] [ɪz] [ɪn] [ðə] [ˈbɛdruːm]',

    },

    {

      ru: 'Её основное хобби это садоводство',

      en: 'Her main hobby is gardening',

      tr: '[hɜː] [meɪn] [ˈhɒbi] [ɪz] [ˈɡɑːdnɪŋ]',

    },

    {

      ru: 'Ребёнок в школе',

      en: 'The child is at school',

      tr: '[ðə] [ʧaɪld] [ɪz] [æt] [skuːl]',

    },

    {

      ru: 'Я думаю, что настоящее счастье намного больше, чем просто деньги',

      en: 'I think that real happiness is much more than just money',

      tr: '[aɪ] [θɪŋk] [ðæt] [rɪəl] [ˈhæpɪnəs] [ɪz] [mʌʧ] [mɔː] [ðæn] [ʤʌst] [ˈmʌni]',

    },

    {

      ru: 'У тебя блестящие идеи как всегда',

      en: 'You have brilliant ideas as always',

      tr: '[juː] [hæv] [ˈbrɪljənt] [aɪˈdɪəz] [æz] [ˈɔːlweɪz]',

    },

    {

      ru: 'Многие люди говорят, что здоровье важнее денег',

      en: 'Many people say that health is more important than money',

      tr: '[ˈmɛni] [ˈpiːpᵊl] [seɪ] [ðæt] [hɛlθ] [ɪz] [mɔːr] [ɪmˈpɔːtᵊnt] [ðæn] [ˈmʌni]',

    },

    {

      ru: 'Я вижу, ты полон энтузиазма',

      en: 'I see you are full of enthusiasm',

      tr: '[aɪ] [siː] [juː] [ɑː] [fʊl] [ɒv] [ɪnˈθjuːziæzᵊm]',

    },

    {

      ru: 'Это неинформативное видео',

      en: 'It is an uninformative video',

      tr: '[ɪt] [ɪz] [ən] [ˌʌnɪnˈfɔːmətɪv] [ˈvɪdiəʊ]',

    },

    {

      ru: 'Это видео неинформативное',

      en: 'This video is uninformative',

      tr: '[ðɪs] [ˈvɪdiəʊ] [ɪz] [ˌʌnɪnˈfɔːmətɪv]',

    },

    {

      ru: 'Это информативное видео',

      en: 'It is an informative video',

      tr: '[ɪt] [ɪz] [ən] [ɪnˈfɔːmətɪv] [ˈvɪdiəʊ]',

    },

    {

      ru: 'Это видео информативное',

      en: 'This video is informative',

      tr: '[ðɪs] [ˈvɪdiəʊ] [ɪz] [ɪnˈfɔːmətɪv]',

    },

    {

      ru: 'Работа полна ошибок',

      en: 'The work is full of mistakes',

      tr: '[ðə] [wɜːk] [ɪz] [fʊl] [ɒv] [mɪˈsteɪks]',

    },

    {

      ru: 'Эти документы полны ошибок',

      en: 'These documents are full of mistakes',

      tr: '[ðiːz] [ˈdɒkjəmənts] [ɑː] [fʊl] [ɒv] [mɪˈsteɪks]',

    },

    {

      ru: 'Это солнечный день',

      en: 'It is a sunny day',

      tr: '[ɪt] [ɪz] [ə] [ˈsʌni] [deɪ]',

    },

    {

      ru: 'Студент очень амбициозный',

      en: 'The student is very ambitious',

      tr: '[ðə] [ˈstjuːdᵊnt] [ɪz] [ˈvɛri] [æmˈbɪʃəs]',

    },

    {

      ru: 'Он очень амбициозный студент',

      en: 'He is a very ambitious student',

      tr: '[hiː] [ɪz] [ə] [ˈvɛri] [æmˈbɪʃəs] [ˈstjuːdᵊnt]',

    },

    {

      ru: 'Женщина очень стройная',

      en: 'The woman is very slim',

      tr: '[ðə] [ˈwʊmən] [ɪz] [ˈvɛri] [slɪm]',

    },

    {

      ru: 'Она очень стройная девушка',

      en: 'She is a very slim girl',

      tr: '[ʃiː] [ɪz] [ə] [ˈvɛri] [slɪm] [ɡɜːl]',

    },

    {

      ru: 'Шутка очень смешная',

      en: 'The joke is very funny',

      tr: '[ðə] [ʤəʊk] [ɪz] [ˈvɛri] [ˈfʌni]',

    },

    {

      ru: 'Это дождливый день',

      en: 'It is a rainy day',

      tr: '[ɪt] [ɪz] [ə] [ˈreɪni] [deɪ]',

    },

    {

      ru: 'Видео такое неинформативное',

      en: 'The video is so uninformative',

      tr: '[ðə] [ˈvɪdiəʊ] [ɪz] [səʊ] [ˌʌnɪnˈfɔːmətɪv]',

    },

    {

      ru: 'Это очень красивая церковь',

      en: 'It is a very beautiful church',

      tr: '[ɪt] [ɪz] [ə] [ˈvɛri] [ˈbjuːtɪfᵊl] [ʧɜːʧ]',

    },

    {

      ru: 'Церковь очень красивая',

      en: 'The church is very beautiful',

      tr: '[ðə] [ʧɜːʧ] [ɪz] [ˈvɛri] [ˈbjuːtɪfᵊl]',

    },

    {

      ru: 'Он очень опытный учитель',

      en: 'He is a very experienced teacher',

      tr: '[hiː] [ɪz] [ə] [ˈvɛri] [ɪkˈspɪəriənst] [ˈtiːʧə]',

    },

    {

      ru: 'Дорога пустая',

      en: 'The road is empty',

      tr: '[ðə] [rəʊd] [ɪz] [ˈɛmpti]',

    },

    {

      ru: 'Это очень узкая улица',

      en: 'It is a very narrow street',

      tr: '[ɪt] [ɪz] [ə] [ˈvɛri] [ˈnærəʊ] [striːt]',

    },

    {

      ru: 'Дети в кровати',

      en: 'The children are in bed',

      tr: '[ðə] [ˈʧɪldrən] [ɑːr] [ɪn] [bɛd]',

    },

    {

      ru: 'Малыш в кровати',

      en: 'The baby is in bed',

      tr: '[ðə] [ˈbeɪbi] [ɪz] [ɪn] [bɛd]',

    },

    {

      ru: 'Земля круглая',

      en: 'The Earth is round',

      tr: '[ði] [ɜːθ] [ɪz] [raʊnd]',

    },

    {

      ru: 'Я вижу солнце',

      en: 'I see the sun',

      tr: '[aɪ] [siː] [ðə] [sʌn]',

    },

    {

      ru: 'Я вижу луну',

      en: 'I see the moon',

      tr: '[aɪ] [siː] [ðə] [muːn]',

    },

    {

      ru: 'Она очень опытный врач',

      en: 'She is a very experienced doctor',

      tr: '[ʃiː] [ɪz] [ə] [ˈvɛri] [ɪkˈspɪəriənst] [ˈdɒktə]',

    },

    {

      ru: 'Это пустая бутылка',

      en: 'It is an empty bottle',

      tr: '[ɪt] [ɪz] [ən] [ˈɛmpti] [ˈbɒtᵊl]',

    },

    {

      ru: 'Это полная бутылка',

      en: 'It is a full bottle',

      tr: '[ɪt] [ɪz] [ə] [fʊl] [ˈbɒtᵊl]',

    },

    {

      ru: 'Полиция там',

      en: 'The police are there',

      tr: '[ðə] [pəˈliːs] [ɑː] [ðeə]',

    },

    {

      ru: 'Текст сложный для понимания',

      en: 'The text is difficult for understanding',

      tr: '[ðə] [tɛkst] [ɪz] [ˈdɪfɪkᵊlt] [fɔːr] [ˌʌndəˈstændɪŋ]',

    },

    {

      ru: 'Ответ очевиден',

      en: 'The answer is obvious',

      tr: '[ði] [ˈɑːnsər] [ɪz] [ˈɒbviəs]',

    },

  ];

  

  console.log(OFFERS_A1_51_57.length);

  
  const findChoose = document.querySelector('.offers1__choose');
  
  const findBtnStart = document.querySelector('#offers1__start');
  
  const findContainerForContent = document.querySelector('.offers1__content-container');
  const findQuestion = findContainerForContent.querySelector('.offers1__question');
  const findRightAnswer = findContainerForContent.querySelector('.offers1__right-answer');
  const findResponseField = findContainerForContent.querySelector('.offers1__responsefield');
  const findAnswerArr = findContainerForContent.querySelector('.offers1__answer-arr');
  const findContainerBottomWrapper = findContainerForContent.querySelector('.content-container__bottom-wrapper');
  
  const findResults = document.querySelector('.offers1__results');
  const findBtnAgain = findResults.querySelector('#offers1__btn-again');
  
  const findScore = document.querySelector('.offers1__score');
  const findScoreTotal = findScore.querySelector('#offers1__score-total');
  const findScoreValue = findScore.querySelector('#offers1__score-value');
  
  const findBtnResult = findContainerForContent.querySelector('#offers1__btn-check');
  const findBtnNext = findContainerForContent.querySelector('#offers1__btn-next');
  
  const findTemplate = document.querySelector('#template-offers__one').content.querySelector('.offers1__word');
  
  const renderOffer = (word) => {
    let currentElement = findTemplate.cloneNode(true);
  
    currentElement.textContent = word;
    currentElement.id = word;
  
    return currentElement;
  };
  
  const renderOfferStart = (valueOfLanguage, offersArray, offersArrayMistakes) => {
    let fragment = document.createDocumentFragment();
    console.log('render.js - renderOfferStart - valueOfLanguage: ' + valueOfLanguage);
  
    switch (valueOfLanguage) {
      case 'en':
        languageQuestion = 'en';
        languageAnswer = 'ru';
        break;
      case 'ru':
        languageQuestion = 'ru';
        languageAnswer = 'en';
        break;
      case 'all':
        if (valueOfQuestions % 2 != 0) {
          languageQuestion = 'ru';
          languageAnswer = 'en';
        } else {
          languageQuestion = 'en';
          languageAnswer = 'ru';
        }
        break;
      case 'tr-en':
        languageQuestion = 'tr';
        languageAnswer = 'en';
        break;
      case 'en-tr':
        languageQuestion = 'en';
        languageAnswer = 'tr';
        break;
      case 'tr-ru':
        languageQuestion = 'tr';
        languageAnswer = 'ru';
        break;
      case 'ru-tr':
        languageQuestion = 'ru';
        languageAnswer = 'tr';
        break;
      default:
        languageQuestion = 'en';
        languageAnswer = 'ru';
    }
  
    let offer = OFFERS_A1_51_57[offersArray[renderСounters]][languageAnswer].split(' ');
    findQuestion.textContent = OFFERS_A1_51_57[offersArray[renderСounters]][languageQuestion];
    console.log('offer ' + offer);
    let mistakes = OFFERS_A1_51_57[offersArrayMistakes[renderMistakesCounter]][languageAnswer]
      .split(' ')
      .concat(OFFERS_A1_51_57[offersArrayMistakes[renderMistakesCounter + 1]][languageAnswer].split(' '));
    console.log('mistakes ' + mistakes);
    renderMistakesCounter += 2;
    let arrOfferMistakes = offer.concat(mistakes);
    console.log('arrOfferMistakes ' + arrOfferMistakes);
  
    for (let i = arrOfferMistakes.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let t = arrOfferMistakes[i];
      arrOfferMistakes[i] = arrOfferMistakes[j];
      arrOfferMistakes[j] = t;
    }
  
    console.log(arrOfferMistakes);
  
    for (let i = 0; i < arrOfferMistakes.length; i++) {
      fragment.append(renderOffer(arrOfferMistakes[i]));
    }
  
    findAnswerArr.textContent = '';
    findResponseField.textContent = '';
    findRightAnswer.textContent = '';
  
    findAnswerArr.append(fragment);
  };
  
  const generateRandomNumbers = (count, arr) => {
    let min = 0;
    let max = arr.length - 1;
    if (max - min + 1 < count) {
      throw new Error('Невозможно сгенерировать указанное количество уникальных чисел');
    }
  
    const numbers = [];
    while (numbers.length < count) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    return numbers;
  };
  
  const generateRandomMistakes = (count, arr, generatedArr) => {
    count = count * 2;
    let min = 0;
    let max = arr.length - 1;
    if (max - min + 1 < count) {
      throw new Error('Невозможно сгенерировать указанное количество уникальных чисел');
    }
  
    const numbers = [];
    while (numbers.length < count) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!numbers.includes(randomNumber) && !generatedArr.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    return numbers;
  };
  
  let valueOfQuestions = 0;
  let valueOfQuestionsAll = 0;
  let valueOfLanguage;
  let scoreValue = 0;
  let valueArr = [];
  let offersArray;
  let offersArrayMistakes;
  let renderСounters = 0;
  let renderMistakesCounter = 0;
  let languageQuestion;
  let languageAnswer;
  
  findBtnStart.addEventListener('click', () => {
    findResponseField.style.backgroundColor = '#fff';
    const findValueOfQuestions = findChoose.querySelector('.offers1__choice:checked');
    const findValueOfLanguage = findChoose.querySelector('.offers1__languages:checked');
  
    console.log(findValueOfQuestions.value + ' ' + findValueOfLanguage.value);
    findChoose.style.display = 'none';
    findContainerForContent.style.display = 'block';
    findContainerBottomWrapper.style.display = 'block';
  
    findBtnResult.classList.remove('visually-hidden');
  
    valueOfQuestions = findValueOfQuestions.value;
    valueOfQuestionsAll = findValueOfQuestions.value;
    valueOfLanguage = findValueOfLanguage.value;
  
    offersArray = generateRandomNumbers(findValueOfQuestions.value, OFFERS_A1_51_57);
    console.log('offersArray ' + offersArray);
    offersArrayMistakes = generateRandomMistakes(findValueOfQuestions.value, OFFERS_A1_51_57, offersArray);
    console.log('offersArrayMistakes ' + offersArrayMistakes);
    renderOfferStart(findValueOfLanguage.value, offersArray, offersArrayMistakes);
  });
  
  findResponseField.addEventListener('click', (evt) => {
    console.log(evt.target.id);
    if (evt.target.id !== 'responsefield') {
      findAnswerArr.append(evt.target);
      const index = valueArr.indexOf(evt.target.textContent);
      if (index > -1) {
        valueArr.splice(index, 1);
      }
      console.log(valueArr);
    }
  });
  
  findAnswerArr.addEventListener('click', (evt) => {
    console.log(evt.target.id);
    if (evt.target.id !== 'answers') {
      findResponseField.append(evt.target);
      valueArr.push(evt.target.textContent);
      console.log(valueArr);
    }
  });
  
  findBtnResult.addEventListener('click', (evt) => {
    evt.preventDefault();
  
    const result = valueArr.join(' ');
    valueArr = [];
    console.log(result);
  
    if (result === OFFERS_A1_51_57[offersArray[renderСounters]][languageAnswer]) {
      console.log('ДА');
      findResponseField.style.backgroundColor = 'green';
      scoreValue++;
    } else {
      console.log('НЕТ');
      findResponseField.style.backgroundColor = 'red';
      findRightAnswer.textContent = OFFERS_A1_51_57[offersArray[renderСounters]][languageAnswer];
    }
  
    if (valueOfQuestions > 1) {
      valueOfQuestions--;
      findBtnResult.classList.add('visually-hidden');
      findBtnNext.classList.remove('visually-hidden');
    } else {
      valueOfQuestions--;
      findContainerBottomWrapper.style.display = 'none';
      findResults.style.display = 'block';
      findScoreTotal.textContent = valueOfQuestionsAll;
      findScoreValue.textContent = scoreValue;
    }
  
    renderСounters++;
    console.log(valueOfQuestions);
  });
  
  findBtnNext.addEventListener('click', (evt) => {
    evt.preventDefault();
  
    renderOfferStart(valueOfLanguage, offersArray, offersArrayMistakes);
  
    findBtnResult.classList.remove('visually-hidden');
    findBtnNext.classList.add('visually-hidden');
  
    findResponseField.style.backgroundColor = '#fff';
  });
  
  findBtnAgain.addEventListener('click', () => {
    findChoose.style.display = 'block';
    findContainerForContent.style.display = 'none';
    findResults.style.display = 'none';
  
    valueOfQuestions = 0;
    scoreValue = 0;
    renderСounters = 0;
    renderMistakesCounter = 0;
  });
  
}

if (document.querySelector('#template-transcription') !== null) {
  try {
    document.querySelector('.menu__link[href="transcription.html"]').dataset.current = 'true';
  } catch {
    console.log('.menu__link[href="transcription.html"] - не найдено');
  }

  'use strick';

  

  const TRANSCRIPTION_ARRAY = [

    {

      en: 'cap',

      tr: '[kæp]',

      ru: 'шапка, кепка',

    },

    {

      en: 'coat',

      tr: '[kəʊt]',

      ru: 'пальто',

    },

    {

      en: 'skirt',

      tr: '[skɜ:t] ',

      ru: 'юбка',

    },

    {

      en: 'boots',

      tr: '[bu:ts]',

      ru: 'ботинки',

    },

    {

      en: 'trousers',

      tr: "['traʊzəz]",

      ru: 'брюки(мн.число)',

    },

    {

      en: 'trainers',

      tr: '[ˈtreɪnəz]',

      ru: 'кроссовки(мн.число)',

    },

    {

      en: 'shoes',

      tr: '[ʃuː]',

      ru: 'обувь, туфли(мн.число)',

    },

    {

      en: 'honey',

      tr: '[ˈhʌnɪ]',

      ru: 'мёд(милый, милая)',

    },

    {

      en: 'cup',

      tr: '[kʌp]',

      ru: 'чашка, кубок, кружка',

    },

    {

      en: 'glass',

      tr: '[glɑːs]',

      ru: 'стакан, стекло',

    },

    {

      en: 'pleasure',

      tr: '[ˈpleʒə]',

      ru: 'удовольствие',

    },

    {

      en: 'opportunity',

      tr: '[ɒpəˈtjuːnɪtɪ]',

      ru: 'возможность',

    },

    {

      en: 'village',

      tr: '[ˈvɪlɪʤ]',

      ru: 'деревня',

    },

    {

      en: 'miracle',

      tr: '[ˈmɪrəkl]',

      ru: 'чудо',

    },

    {

      en: 'gym',

      tr: '[ʤɪm]',

      ru: 'спортзал, тренажёрный зал',

    },

    {

      en: 'camel',

      tr: '[ˈkæməl]',

      ru: 'верблюд',

    },

    {

      en: 'wallet',

      tr: '[ˈwɒlɪt]',

      ru: 'бумажник',

    },

    {

      en: 'lawyer',

      tr: '[ˈlɔːjə]',

      ru: 'юрист, адвокат',

    },

    {

      en: 'law',

      tr: '[lɔː]',

      ru: 'закон',

    },

    {

      en: 'studies',

      tr: '[ˈstʌdiz]',

      ru: 'учёба',

    },

    {

      en: 'garden',

      tr: '[gɑːdn]',

      ru: 'сад',

    },

    {

      en: 'corner',

      tr: '[ˈkɔːnə]',

      ru: 'угол',

    },

    {

      en: 'yard',

      tr: '[jɑːd]',

      ru: 'двор',

    },

    {

      en: 'fence',

      tr: '[fens]',

      ru: 'забор',

    },

    {

      en: 'meeting',

      tr: '[ˈmiːtɪŋ]',

      ru: 'встреча',

    },

    {

      en: 'pie',

      tr: '[paɪ]',

      ru: 'пирог',

    },

    {

      en: 'parcel',

      tr: '[pɑːsl]',

      ru: 'посылка',

    },

    {

      en: 'kindness',

      tr: '[ˈkaɪndnɪs]',

      ru: 'доброта',

    },

    {

      en: 'bill',

      tr: '[bɪl]',

      ru: 'счёт',

    },

    {

      en: 'accident',

      tr: '[ˈæksɪdənt]',

      ru: 'происшествие, авария, несчастный случай',

    },

    {

      en: 'criminal',

      tr: '[ˈkrɪmɪnl]',

      ru: 'преступник',

    },

    {

      en: 'view',

      tr: '[vjuː]',

      ru: 'вид, зрение',

    },

    {

      en: 'donkey',

      tr: '[ˈdɒŋkɪ]',

      ru: 'осёл',

    },

    {

      en: 'knowledge',

      tr: '[ˈnɒlɪʤ]',

      ru: 'знания',

    },

    {

      en: 'circus',

      tr: '[ˈsɜːkəs]',

      ru: 'цирк',

    },

    {

      en: 'such',

      tr: '[sʌʧ]',

      ru: 'такой',

    },

    {

      en: 'careful',

      tr: '[ˈkeəf(ə)l]',

      ru: 'осторожный',

    },

    {

      en: 'upset',

      tr: '[ʌpˈset]',

      ru: 'расстроенный',

    },

    {

      en: 'unhappy',

      tr: '[ʌnˈhæpɪ]',

      ru: 'несчатный',

    },

    {

      en: 'foreign',

      tr: '[ˈfɒrɪn]',

      ru: 'иностранный',

    },

    {

      en: 'homemade',

      tr: '[ˈhəʊmeɪd]',

      ru: 'домашний, домашнего изготовления',

    },

    {

      en: 'urgently',

      tr: '[ˈɜːʤəntlɪ]',

      ru: 'срочно',

    },

    {

      en: 'suddenly',

      tr: '[ˈsʌdnlɪ]',

      ru: 'вдруг, внезапно',

    },

    {

      en: 'fluently',

      tr: '[ˈfluːəntlɪ]',

      ru: 'свободно, бегло',

    },

    {

      en: 'mostly',

      tr: '[ˈməʊstlɪ]',

      ru: 'в основном',

    },

    {

      en: 'worse',

      tr: '[wɜːs]',

      ru: 'хуже',

    },

    {

      en: 'behind',

      tr: '[bɪˈhaɪnd]',

      ru: 'позади, за',

    },

    {

      en: 'sooner',

      tr: '[suːn]',

      ru: 'скорее',

    },

    {

      en: 'some',

      tr: '[sʌm]',

      ru: 'некоторые, несколько, немного',

    },

    {

      en: 'several',

      tr: '[ˈsevrəl]',

      ru: 'несколько',

    },

  ];

  

  console.log(TRANSCRIPTION_ARRAY.length);

  
  const template = document.querySelector('#template-transcription').content.querySelector('.transcription__item');
  const transcriptionContent = document.querySelector('.transcription__items');
  const btn = document.querySelector('#transcription__btn');
  const result = document.querySelector('.result');
  const start = document.querySelector('#transcription__start');
  
  const renderTranscription = function (question, length) {
    let transcriptionElement = template.cloneNode(true);
    console.log(question);
  
    transcriptionElement.querySelector('.transcription__span').textContent = question;
    transcriptionElement.querySelector('.transcription__input').setAttribute('maxlength', `${length}`);
    return transcriptionElement;
  };
  
  const renderStart = (value) => {
    let fragment = document.createDocumentFragment();
  
    for (let i = 0; i < value; i++) {
      fragment.append(
        renderTranscription(TRANSCRIPTION_ARRAY[randomNumberArr[i]].tr, TRANSCRIPTION_ARRAY[randomNumberArr[i]].en.length)
      );
    }
  
    transcriptionContent.append(fragment);
  };
  
  function getResult(value) {
    let check = transcriptionContent.querySelectorAll('.check');
    let checkEmpty = 0;
    let newCheck = [];
    let resultNumber = value;
    let str;
    let checkTransription;
  
    for (let i = 0; i < value; i++) {
      str = input[i].value;
      if (str == null || str.length == 0) {
        checkEmpty++;
        newCheck.push(i);
      }
    }
    if (checkEmpty > 0) {
      do {
        checkEmpty--;
        input[newCheck[checkEmpty]].dataset.result = 'empty';
        input[newCheck[checkEmpty]].placeholder = 'Поле пустое, введите значение';
      } while (checkEmpty);
      return newCheck;
    }
  
    for (let i = 0; i < value; i++) {
      str = input[i].value;
  
      checkTransription = TRANSCRIPTION_ARRAY[randomNumberArr[i]].en;
      if (checkTransription === str) {
        input[i].dataset.result = 'correctly';
        check[i].textContent = '+ : ' + checkTransription + ' - ' + TRANSCRIPTION_ARRAY[randomNumberArr[i]].ru;
      }
      if (checkTransription !== str) {
        input[i].dataset.result = 'mistake';
        check[i].textContent = '- : ' + checkTransription + ' - ' + TRANSCRIPTION_ARRAY[randomNumberArr[i]].ru;
        resultNumber--;
      }
    }
  
    result.textContent = 'Ваш результат: ' + resultNumber + ' из ' + choice.value;
  }
  
  const randomNumberArr = [];
  
  const generateRandomNumbers = (min, max, count) => {
    if (max - min + 1 < count) {
      min = 0;
      max = 1;
      count = 1;
    }
  
    while (randomNumberArr.length < count) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!randomNumberArr.includes(randomNumber)) {
        randomNumberArr.push(randomNumber);
      }
    }
  
    console.log(randomNumberArr);
    return randomNumberArr;
  };
  
  let choice;
  let span;
  let input;
  
  start.addEventListener('click', () => {
    let transcription = document.querySelector('.transcription__choose');
    choice = document.querySelector('.transcription__choice:checked');
  
    generateRandomNumbers(0, TRANSCRIPTION_ARRAY.length - 1, choice.value);
    renderStart(choice.value);
  
    transcription.classList.add('visually-hidden');
    btn.classList.remove('visually-hidden');
  
    span = transcriptionContent.querySelectorAll('.transcription__span');
    input = transcriptionContent.querySelectorAll('.transcription__input');
  
    return choice;
  });
  
  btn.addEventListener('click', () => {
    getResult(choice.value);
  });
  
}

if (document.querySelector('#template-transcription__new') !== null) {
  try {
    document.querySelector('.menu__link[href="transcriptionNew.html"]').dataset.current = 'true';
  } catch {
    console.log('.menu__link[href="transcriptionNew.html"] - не найдено');
  }

  const TR_NEW_ONE_ARR = [

    { en: 'is', tr: '[ɪz]' },

    { en: 'are', tr: '[ɑː]' },

    { en: 'am', tr: '[æm]' },

    { en: 'a', tr: '[ə]' },

    { en: 'an', tr: '[ən]' },

    { en: 'his', tr: '[hɪz]' },

    { en: 'me', tr: '[miː]' },

    { en: 'you', tr: '[juː]' },

    { en: 'your', tr: '[jɔː]' },

    { en: 'has', tr: '[hæz]' },

    { en: 'how', tr: '[haʊ]' },

    { en: 'grade', tr: '[ɡreɪd]' },

    { en: 'tribe', tr: '[traɪb]' },

    { en: 'bite', tr: '[baɪt]' },

    { en: 'slave', tr: '[sleɪv]' },

    { en: 'ride', tr: '[raɪd]' },

    { en: 'phrase', tr: '[freɪz]' },

    { en: 'smoke', tr: '[sməʊk]' },

    { en: 'mice', tr: '[maɪs]' },

    { en: 'role', tr: '[rəʊl]' },

    { en: 'white', tr: '[waɪt]' },

    { en: 'fry', tr: '[fraɪ]' },

    { en: 'clue', tr: '[kluː]' },

    { en: 'base', tr: '[beɪs]' },

    { en: 'stone', tr: '[stəʊn]' },

    { en: 'twice', tr: '[twaɪs]' },

    { en: 'trade', tr: '[treɪd]' },

    { en: 'fuse', tr: '[fjuːz]' },

    { en: 'cone', tr: '[kəʊn]' },

    { en: 'plate', tr: '[pleɪt]' },

    { en: 'tie', tr: '[taɪ]' },

    { en: 'poke', tr: '[pəʊk]' },

    { en: 'cradle', tr: '[kreɪdl]' },

    { en: 'crane', tr: '[kreɪn]' },

    { en: 'knife', tr: '[naɪf]' },

    { en: 'try', tr: '[traɪ]' },

    { en: 'frame', tr: '[freɪm]' },

    { en: 'wake', tr: '[weɪk]' },

    { en: 'gate', tr: '[ɡeɪt]' },

    { en: 'snake', tr: '[sneɪk]' },

    { en: 'huge', tr: '[hjuːʤ]' },

    { en: 'rate', tr: '[reɪt]' },

    { en: 'choke', tr: '[ʧəʊk]' },

    { en: 'take', tr: '[teɪk]' },

    { en: 'fame', tr: '[feɪm]' },

    { en: 'pole', tr: '[pəʊl]' },

    { en: 'spade', tr: '[speɪd]' },

    { en: 'shame', tr: '[ʃeɪm]' },

    { en: 'state', tr: '[steɪt]' },

    { en: 'ace', tr: '[eɪs]' },

    { en: 'like', tr: '[laɪk]' },

    { en: 'broke', tr: '[brəʊk]' },

    { en: 'phase', tr: '[feɪz]' },

    { en: 'pile', tr: '[paɪl]' },

    { en: 'tune', tr: '[tjuːn]' },

    { en: 'bake', tr: '[beɪk]' },

    { en: 'mate', tr: '[meɪt]' },

    { en: 'note', tr: '[nəʊt]' },

    { en: 'smile', tr: '[smaɪl]' },

    { en: 'pie', tr: '[paɪ]' },

    { en: 'pine', tr: '[paɪn]' },

    { en: 'rule', tr: '[ruːl]' },

    { en: 'grace', tr: '[ɡreɪs]' },

    { en: 'game', tr: '[ɡeɪm]' },

    { en: 'June', tr: '[ʤuːn]' },

    { en: 'fate', tr: '[feɪt]' },

    { en: 'rope', tr: '[rəʊp]' },

    { en: 'lane', tr: '[leɪn]' },

    { en: 'cape', tr: '[keɪp]' },

    { en: 'dine', tr: '[daɪn]' },

    { en: 'grave', tr: '[ɡreɪv]' },

    { en: 'rice', tr: '[raɪs]' },

    { en: 'cave', tr: '[keɪv]' },

    { en: 'save', tr: '[seɪv]' },

    { en: 'make', tr: '[meɪk]' },

    { en: 'tale', tr: '[teɪl]' },

    { en: 'gaze', tr: '[ɡeɪz]' },

    { en: 'sole', tr: '[səʊl]' },

    { en: 'no', tr: '[nəʊ]' },

    { en: 'gale', tr: '[ɡeɪl]' },

    { en: 'race', tr: '[reɪs]' },

    { en: 'change', tr: '[ʧeɪnʤ]' },

    { en: 'cute', tr: '[kjuːt]' },

    { en: 'true', tr: '[truː]' },

    { en: 'rise', tr: '[raɪz]' },

    { en: 'due', tr: '[djuː]' },

    { en: 'joke', tr: '[ʤəʊk]' },

    { en: 'chose', tr: '[ʧəʊz]' },

    { en: 'nine', tr: '[naɪn]' },

    { en: 'dome', tr: '[dəʊm]' },

    { en: 'wave', tr: '[weɪv]' },

    { en: 'brake', tr: '[breɪk]' },

    { en: 'blue', tr: '[bluː]' },

    { en: 'size', tr: '[saɪz]' },

    { en: 'Pete', tr: '[piːt]' },

    { en: 'flame', tr: '[fleɪm]' },

    { en: 'grape', tr: '[ɡreɪp]' },

    { en: 'sly', tr: '[slaɪ]' },

    { en: 'toe', tr: '[təʊ]' },

    { en: 'price', tr: '[praɪs]' },

    { en: 'nose', tr: '[nəʊz]' },

    { en: 'ice', tr: '[aɪs]' },

    { en: 'slice', tr: '[slaɪs]' },

    { en: 'bye', tr: '[baɪ]' },

    { en: 'lie', tr: '[laɪ]' },

    { en: 'date', tr: '[deɪt]' },

    { en: 'she', tr: '[ʃiː]' },

    { en: 'pike', tr: '[paɪk]' },

    { en: 'taste', tr: '[teɪst]' },

    { en: 'zone', tr: '[zəʊn]' },

    { en: 'sue', tr: '[sjuː]' },

    { en: 'prone', tr: '[prəʊn]' },

    { en: 'hide', tr: '[haɪd]' },

    { en: 'slide', tr: '[slaɪd]' },

    { en: 'blade', tr: '[bleɪd]' },

    { en: 'line', tr: '[laɪn]' },

    { en: 'slope', tr: '[sləʊp]' },

    { en: 'die', tr: '[daɪ]' },

    { en: 'safe', tr: '[seɪf]' },

    { en: 'pose', tr: '[pəʊz]' },

    { en: 'case', tr: '[keɪs]' },

    { en: 'drive', tr: '[draɪv]' },

    { en: 'prime', tr: '[praɪm]' },

    { en: 'globe', tr: '[ɡləʊb]' },

    { en: 'shade', tr: '[ʃeɪd]' },

    { en: 'space', tr: '[speɪs]' },

    { en: 'shine', tr: '[ʃaɪn]' },

    { en: 'bike', tr: '[baɪk]' },

    { en: 'me', tr: '[miː]' },

    { en: 'shoe', tr: '[ʃuː]' },

    { en: 'fine', tr: '[faɪn]' },

    { en: 'grove', tr: '[ɡrəʊv]' },

    { en: 'nice', tr: '[naɪs]' },

    { en: 'title', tr: '[taɪtl]' },

    { en: 'lake', tr: '[leɪk]' },

    { en: 'sake', tr: '[seɪk]' },

    { en: 'lime', tr: '[laɪm]' },

    { en: 'smoke', tr: '[sməʊk]' },

    { en: 'save', tr: '[seɪv]' },

    { en: 'hope', tr: '[həʊp]' },

    { en: 'place', tr: '[pleɪs]' },

    { en: 'be', tr: '[biː]' },

    { en: 'ale', tr: '[eɪl]' },

    { en: 'go', tr: '[ɡəʊ]' },

    { en: 'cite', tr: '[saɪt]' },

    { en: 'same', tr: '[seɪm]' },

    { en: 'tone', tr: '[təʊn]' },

    { en: 'pipe', tr: '[paɪp]' },

    { en: 'lame', tr: '[leɪm]' },

    { en: 'wipe', tr: '[waɪp]' },

    { en: 'sky', tr: '[skaɪ]' },

    { en: 'wise', tr: '[waɪz]' },

    { en: 'stale', tr: '[steɪl]' },

    { en: 'dry', tr: '[draɪ]' },

    { en: 'stroke', tr: '[strəʊk]' },

    { en: 'bride', tr: '[braɪd]' },

    { en: 'dime', tr: '[daɪm]' },

    { en: 'he', tr: '[hiː]' },

    { en: 'dame', tr: '[deɪm]' },

    { en: 'site', tr: '[saɪt]' },

    { en: 'cage', tr: '[keɪʤ]' },

    { en: 'mine', tr: '[maɪn]' },

    { en: 'tape', tr: '[teɪp]' },

    { en: 'dice', tr: '[daɪs]' },

    { en: 'waste', tr: '[weɪst]' },

    { en: 'time', tr: '[taɪm]' },

    { en: 'cake', tr: '[keɪk]' },

    { en: 'code', tr: '[kəʊd]' },

    { en: 'drove', tr: '[drəʊv]' },

    { en: 'radio', tr: '[ˈreɪdiəʊ]' },

    { en: 'file', tr: '[faɪl]' },

    { en: 'stable', tr: '[steɪbl]' },

    { en: 'rode', tr: '[rəʊd]' },

    { en: 'use', tr: '[juːz]' },

    { en: 'shake', tr: '[ʃeɪk]' },

    { en: 'I', tr: '[aɪ]' },

    { en: 'face', tr: '[feɪs]' },

    { en: 'glue', tr: '[ɡluː]' },

    { en: 'cry', tr: '[kraɪ]' },

    { en: 'dope', tr: '[dəʊp]' },

    { en: 'kite', tr: '[kaɪt]' },

    { en: 'ripe', tr: '[raɪp]' },

    { en: 'fly', tr: '[flaɪ]' },

    { en: 'fade', tr: '[feɪd]' },

    { en: 'mole', tr: '[məʊl]' },

    { en: 'pale', tr: '[peɪl]' },

    { en: 'Steve', tr: '[stiːv]' },

    { en: 'side', tr: '[saɪd]' },

    { en: 'cycle', tr: '[saɪkl]' },

    { en: 'wife', tr: '[waɪf]' },

    { en: 'spine', tr: '[spaɪn]' },

    { en: 'robe', tr: '[rəʊb]' },

    { en: 'brave', tr: '[breɪv]' },

    { en: 'hose', tr: '[həʊz]' },

    { en: 'those', tr: '[ðəʊz]' },

    { en: 'tide', tr: '[taɪd]' },

    { en: 'rose', tr: '[rəʊz]' },

    { en: 'stole', tr: '[stəʊl]' },

    { en: 'puke', tr: '[pjuːk]' },

    { en: 'fake', tr: '[feɪk]' },

    { en: 'hi', tr: '[haɪ]' },

    { en: 'name', tr: '[neɪm]' },

    { en: 'stove', tr: '[stəʊv]' },

    { en: 'vibe', tr: '[vaɪb]' },

    { en: 'range', tr: '[reɪnʤ]' },

    { en: 'dye', tr: '[daɪ]' },

    { en: 'shy', tr: '[ʃaɪ]' },

    { en: 'bone', tr: '[bəʊn]' },

    { en: 'lace', tr: '[leɪs]' },

    { en: 'pace', tr: '[peɪs]' },

    { en: 'cue', tr: '[kjuː]' },

    { en: 'lone', tr: '[ləʊn]' },

    { en: 'phone', tr: '[fəʊn]' },

    { en: 'mile', tr: '[maɪl]' },

    { en: 'hike', tr: '[haɪk]' },

    { en: 'late', tr: '[leɪt]' },

    { en: 'cope', tr: '[kəʊp]' },

    { en: 'home', tr: '[həʊm]' },

    { en: 'table', tr: '[teɪbl]' },

    { en: 'sane', tr: '[seɪn]' },

    { en: 'hate', tr: '[heɪt]' },

    { en: 'wide', tr: '[waɪd]' },

    { en: 'noble', tr: '[nəʊbl]' },

    { en: 'swine', tr: '[swaɪn]' },

    { en: 'tube', tr: '[tjuːb]' },

    { en: 'dose', tr: '[dəʊs]' },

    { en: 'wine', tr: '[waɪn]' },

    { en: 'able', tr: '[eɪbl]' },

    { en: 'maze', tr: '[meɪz]' },

    { en: 'slap', tr: '[slæp]' },

    { en: 'dam', tr: '[dæm]' },

    { en: 'flat', tr: '[flæt]' },

    { en: 'rag', tr: '[ræɡ]' },

    { en: 'tax', tr: '[tæks]' },

    { en: 'fact', tr: '[fækt]' },

    { en: 'than', tr: '[ðæn]' },

    { en: 'crack', tr: '[kræk]' },

    { en: 'slam', tr: '[slæm]' },

    { en: 'cat', tr: '[kæt]' },

    { en: 'stand', tr: '[stænd]' },

    { en: 'plan', tr: '[plæn]' },

    { en: 'can', tr: '[kæn]' },

    { en: 'lap', tr: '[læp]' },

    { en: 'ban', tr: '[bæn]' },

    { en: 'patch', tr: '[pæʧ]' },

    { en: 'camp', tr: '[kæmp]' },

    { en: 'trap', tr: '[træp]' },

    { en: 'drag', tr: '[dræɡ]' },

    { en: 'crash', tr: '[kræʃ]' },

    { en: 'Sam', tr: '[sæm]' },

    { en: 'flash', tr: '[flæʃ]' },

    { en: 'hat', tr: '[hæt]' },

    { en: 'land', tr: '[lænd]' },

    { en: 'fan', tr: '[fæn]' },

    { en: 'fun', tr: '[fʌn]' },

    { en: 'pack', tr: '[pæk]' },

    { en: 'ant', tr: '[ænt]' },

    { en: 'mad', tr: '[mæd]' },

    { en: 'that', tr: '[ðæt]' },

    { en: 'tag', tr: '[tæɡ]' },

    { en: 'sack', tr: '[sæk]' },

    { en: 'lab', tr: '[læb]' },

    { en: 'gas', tr: '[ɡæs]' },

    { en: 'cab', tr: '[kæb]' },

    { en: 'cap', tr: '[kæp]' },

    { en: 'at', tr: '[æt]' },

    { en: 'dad', tr: '[dæd]' },

    { en: 'hand', tr: '[hænd]' },

    { en: 'pat', tr: '[pæt]' },

    { en: 'lack', tr: '[læk]' },

    { en: 'thank', tr: '[θæŋk]' },

    { en: 'bat', tr: '[bæt]' },

    { en: 'van', tr: '[væn]' },

    { en: 'ad', tr: '[æd]' },

    { en: 'Pam', tr: '[pæm]' },

    { en: 'act', tr: '[ækt]' },

    { en: 'back', tr: '[bæk]' },

    { en: 'tap', tr: '[tæp]' },

    { en: 'flag', tr: '[flæɡ]' },

    { en: 'pan', tr: '[pæn]' },

    { en: 'glad', tr: '[ɡlæd]' },

    { en: 'ban', tr: '[bæn]' },

    { en: 'cash', tr: '[kæʃ]' },

    { en: 'tank', tr: '[tæŋk]' },

    { en: 'bank', tr: '[bæŋk]' },

    { en: 'sad', tr: '[sæd]' },

    { en: 'and', tr: '[ænd]' },

    { en: 'sand', tr: '[sænd]' },

    { en: 'lamp', tr: '[læmp]' },

    { en: 'map', tr: '[mæp]' },

    { en: 'snap', tr: '[snæp]' },

    { en: 'pack', tr: '[pæk]' },

    { en: 'rank', tr: '[ræŋk]' },

    { en: 'leg', tr: '[leɡ]' },

    { en: 'text', tr: '[tekst]' },

    { en: 'tell', tr: '[tel]' },

    { en: 'bend', tr: '[bend]' },

    { en: 'bet', tr: '[bet]' },

    { en: 'chest', tr: '[ʧest]' },

    { en: 'desk', tr: '[desk]' },

    { en: 'end', tr: '[end]' },

    { en: 'send', tr: '[send]' },

    { en: 'let', tr: '[let]' },

    { en: 'well', tr: '[wel]' },

    { en: 'get', tr: '[ɡet]' },

    { en: 'ten', tr: '[ten]' },

    { en: 'help', tr: '[help]' },

    { en: 'rest', tr: '[rest]' },

    { en: 'red', tr: '[red]' },

    { en: 'west', tr: '[west]' },

    { en: 'net', tr: '[net]' },

    { en: 'them', tr: '[ðem]' },

    { en: 'blend', tr: '[blend]' },

    { en: 'trend', tr: '[trend]' },

    { en: 'shed', tr: '[ʃed]' },

    { en: 'belt', tr: '[belt]' },

    { en: 'left', tr: '[left]' },

    { en: 'fresh', tr: '[freʃ]' },

    { en: 'chess', tr: '[ʧes]' },

    { en: 'pen', tr: '[pen]' },

    { en: 'next', tr: '[nekst]' },

    { en: 'web', tr: '[web]' },

    { en: 'sent', tr: '[sent]' },

    { en: 'shelf', tr: '[ʃelf]' },

    { en: 'test', tr: '[test]' },

    { en: 'wet', tr: '[wet]' },

    { en: 'then', tr: '[ðen]' },

    { en: 'rent', tr: '[rent]' },

    { en: 'when', tr: '[wen]' },

    { en: 'spend', tr: '[spend]' },

    { en: 'hell', tr: '[hel]' },

    { en: 'self', tr: '[self]' },

    { en: 'set', tr: '[set]' },

    { en: 'Ben', tr: '[ben]' },

    { en: 'tend', tr: '[tend]' },

    { en: 'lend', tr: '[lend]' },

    { en: 'check', tr: '[ʧek]' },

    { en: 'sell', tr: '[sel]' },

    { en: 'deck', tr: '[dek]' },

    { en: 'pet', tr: '[pet]' },

    { en: 'flesh', tr: '[fleʃ]' },

    { en: 'best', tr: '[best]' },

    { en: 'nest', tr: '[nest]' },

    { en: 'step', tr: '[step]' },

    { en: 'jet', tr: '[ʤet]' },

    { en: 'stop', tr: '[stɒp]' },

    { en: 'dog', tr: '[dɒɡ]' },

    { en: 'pop', tr: '[pɒp]' },

    { en: 'lost', tr: '[lɒst]' },

    { en: 'slot', tr: '[slɒt]' },

    { en: 'crop', tr: '[krɒp]' },

    { en: 'hot', tr: '[hɒt]' },

    { en: 'on', tr: '[ɒn]' },

    { en: 'pot', tr: '[pɒt]' },

    { en: 'dot', tr: '[dɒt]' },

    { en: 'brush', tr: '[brʌʃ]' },

    { en: 'bug', tr: '[bʌɡ]' },

    { en: 'bus', tr: '[bʌs]' },

    { en: 'club', tr: '[klʌb]' },

    { en: 'drug', tr: '[drʌɡ]' },

    { en: 'gut', tr: '[ɡʌt]' },

    { en: 'lump', tr: '[lʌmp]' },

    { en: 'plus', tr: '[plʌs]' },

    { en: 'pump', tr: '[pʌmp]' },

    { en: 'shut', tr: '[ʃʌt]' },

    { en: 'please', tr: '[pliːz]' },

    { en: 'beach', tr: '[biːʧ]' },

    { en: 'bitch', tr: '[bɪʧ]' },

    { en: 'bean', tr: '[biːn]' },

    { en: 'bin', tr: '[bɪn]' },

    { en: 'peak', tr: '[piːk]' },

    { en: 'pick', tr: '[pɪk]' },

    { en: 'ease', tr: '[iːz]' },

    { en: 'been', tr: '[biːn]' },

    { en: 'bin', tr: '[bɪn]' },

    { en: 'seek', tr: '[siːk]' },

    { en: 'sick', tr: '[sɪk]' },

    { en: 'green', tr: '[ɡriːn]' },

    { en: 'grin', tr: '[ɡrɪn]' },

    { en: 'deep', tr: '[diːp]' },

    { en: 'dip', tr: '[dɪp]' },

    { en: 'teen', tr: '[tiːn]' },

    { en: 'tin', tr: '[tɪn]' },

    { en: 'sheep', tr: '[ʃiːp]' },

    { en: 'ship', tr: '[ʃɪp]' },

    { en: 'sin', tr: '[sɪn]' },

    { en: 'seen', tr: '[siːn]' },

    { en: 'least', tr: '[liːst]' },

    { en: 'list', tr: '[lɪst]' },

    { en: 'lead', tr: '[liːd]' },

    { en: 'lid', tr: '[lɪd]' },

    { en: 'reach', tr: '[riːʧ]' },

    { en: 'rich', tr: '[rɪʧ]' },

    { en: 'eat', tr: '[iːt]' },

    { en: 'it', tr: '[ɪt]' },

    { en: 'snake', tr: '[sneɪk]' },

    { en: 'snack', tr: '[snæk]' },

    { en: 'Jake', tr: '[ʤeɪk]' },

    { en: 'Jack', tr: '[ʤæk]' },

    { en: 'save', tr: '[seɪv]' },

    { en: 'safe', tr: '[seɪf]' },

    { en: 'rate', tr: '[reɪt]' },

    { en: 'rat', tr: '[ræt]' },

    { en: 'mate', tr: '[meɪt]' },

    { en: 'mat', tr: '[mæt]' },

    { en: 'plane', tr: '[pleɪn]' },

    { en: 'plan', tr: '[plæn]' },

    { en: 'tape', tr: '[teɪp]' },

    { en: 'tap', tr: '[tæp]' },

    { en: 'fate', tr: '[feɪt]' },

    { en: 'fat', tr: '[fæt]' },

    { en: 'sake', tr: '[seɪk]' },

    { en: 'sack', tr: '[sæk]' },

    { en: 'base', tr: '[beɪs]' },

    { en: 'bus', tr: '[bʌs]' },

    { en: 'made', tr: '[meɪd]' },

    { en: 'mad', tr: '[mæd]' },

    { en: 'Sam', tr: '[sæm]' },

    { en: 'same', tr: '[seɪm]' },

    { en: 'sand', tr: '[sænd]' },

    { en: 'send', tr: '[send]' },

    { en: 'pat', tr: '[pæt]' },

    { en: 'pet', tr: '[pet]' },

    { en: 'band', tr: '[bænd]' },

    { en: 'bend', tr: '[bend]' },

    { en: 'bad', tr: '[bæd]' },

    { en: 'bed', tr: '[bed]' },

    { en: 'mad', tr: '[mæd]' },

    { en: 'made', tr: '[meɪd]' },

    { en: 'pan', tr: '[pæn]' },

    { en: 'pen', tr: '[pen]' },

    { en: 'man', tr: '[mæn]' },

    { en: 'men', tr: '[men]' },

    { en: 'land', tr: '[lænd]' },

    { en: 'lend', tr: '[lend]' },

    { en: 'drank', tr: '[dræŋk]' },

    { en: 'drunk', tr: '[drʌŋk]' },

    { en: 'match', tr: '[mæʧ]' },

    { en: 'much', tr: '[mʌʧ]' },

    { en: 'huge', tr: '[hjuːʤ]' },

    { en: 'hug', tr: '[hʌɡ]' },

    { en: 'hard', tr: '[hɑːd]' },

    { en: 'harm', tr: '[hɑːm]' },

    { en: 'harsh', tr: '[hɑːʃ]' },

    { en: 'mark', tr: '[mɑːk]' },

    { en: 'park', tr: '[pɑːk]' },

    { en: 'part', tr: '[pɑːt]' },

    { en: 'shark', tr: '[ʃɑːk]' },

    { en: 'smart', tr: '[smɑːt]' },

    { en: 'spark', tr: '[spɑːk]' },

    { en: 'star', tr: '[stɑː]' },

    { en: 'start', tr: '[stɑːt]' },

    { en: 'born', tr: '[bɔːn]' },

    { en: 'corn', tr: '[kɔːn]' },

    { en: 'for', tr: '[fɔː]' },

    { en: 'form', tr: '[fɔːm]' },

    { en: 'forth', tr: '[fɔːθ]' },

    { en: 'nor', tr: '[nɔː]' },

    { en: 'norm', tr: '[nɔːm]' },

    { en: 'north', tr: '[nɔːθ]' },

    { en: 'pork', tr: '[pɔːk]' },

    { en: 'port', tr: '[pɔːt]' },

    { en: 'short', tr: '[ʃɔːt]' },

    { en: 'sort', tr: '[sɔːt]' },

    { en: 'her', tr: '[hɜː]' },

    { en: 'herb', tr: '[hɜːb]' },

    { en: 'term', tr: '[tɜːm]' },

    { en: 'burst', tr: '[bɜːst]' },

    { en: 'turn', tr: '[tɜːn]' },

    { en: 'hurt', tr: '[hɜːt]' },

    { en: 'herd', tr: '[hɜːd]' },

    { en: 'fur', tr: '[fɜː]' },

    { en: 'girl', tr: '[ɡɜːl]' },

    { en: 'bird', tr: '[bɜːd]' },

    { en: 'birth', tr: '[bɜːθ]' },

    { en: 'dirt', tr: '[dɜːt]' },

    { en: 'firm', tr: '[fɜːm]' },

    { en: 'first', tr: '[fɜːst]' },

    { en: 'shirt', tr: '[ʃɜːt]' },

    { en: 'sir', tr: '[sɜː]' },

    { en: 'skirt', tr: '[skɜːt]' },

    { en: 'third', tr: '[θɜːd]' },

    { en: 'hare', tr: '[heə]' },

    { en: 'care', tr: '[keə]' },

    { en: 'share', tr: '[ʃeə]' },

    { en: 'stare', tr: '[steə]' },

    { en: 'rare', tr: '[reə]' },

    { en: 'dare', tr: '[deə]' },

    { en: 'fare', tr: '[feə]' },

    { en: 'more', tr: '[mɔː]' },

    { en: 'store', tr: '[stɔː]' },

    { en: 'tore', tr: '[tɔː]' },

    { en: 'here', tr: '[hɪə]' },

    { en: 'mere', tr: '[mɪə]' },

    { en: 'cure', tr: '[kjʊə]' },

    { en: 'pure', tr: '[pjʊə]' },

    { en: 'fire', tr: '[faɪə]' },

    { en: 'wire', tr: '[waɪə]' },

    { en: 'tire', tr: '[taɪə]' },

    { en: 'hire', tr: '[haɪə]' },

    { en: 'bench', tr: '[benʧ]' },

    { en: 'bunch', tr: '[bʌnʧ]' },

    { en: 'catch', tr: '[kæʧ]' },

    { en: 'charm', tr: '[ʧɑːm]' },

    { en: 'check', tr: '[ʧek]' },

    { en: 'chest', tr: '[ʧest]' },

    { en: 'chin', tr: '[ʧɪn]' },

    { en: 'chop', tr: '[ʧɒp]' },

    { en: 'chunk', tr: '[ʧʌŋk]' },

    { en: 'French', tr: '[frenʧ]' },

    { en: 'lunch', tr: '[lʌnʧ]' },

    { en: 'march', tr: '[mɑːʧ]' },

    { en: 'match', tr: '[mæʧ]' },

    { en: 'much', tr: '[mʌʧ]' },

    { en: 'patch', tr: '[pæʧ]' },

    { en: 'pitch', tr: '[pɪʧ]' },

    { en: 'porch', tr: '[pɔːʧ]' },

    { en: 'rich', tr: '[rɪʧ]' },

    { en: 'scratch', tr: '[skræʧ]' },

    { en: 'stretch', tr: '[streʧ]' },

    { en: 'such', tr: '[sʌʧ]' },

    { en: 'switch', tr: '[swɪʧ]' },

    { en: 'ash', tr: '[æʃ]' },

    { en: 'brush', tr: '[brʌʃ]' },

    { en: 'cash', tr: '[kæʃ]' },

    { en: 'crash', tr: '[kræʃ]' },

    { en: 'crush', tr: '[krʌʃ]' },

    { en: 'dish', tr: '[dɪʃ]' },

    { en: 'fish', tr: '[fɪʃ]' },

    { en: 'flash', tr: '[flæʃ]' },

    { en: 'flesh', tr: '[fleʃ]' },

    { en: 'harsh', tr: '[hɑːʃ]' },

    { en: 'rush', tr: '[rʌʃ]' },

    { en: 'shake', tr: '[ʃeɪk]' },

    { en: 'shame', tr: '[ʃeɪm]' },

    { en: 'shape', tr: '[ʃeɪp]' },

    { en: 'share', tr: '[ʃeə]' },

    { en: 'shrimp', tr: '[ʃrɪmp]' },

    { en: 'shrug', tr: '[ʃrʌɡ]' },

    { en: 'sharp', tr: '[ʃɑːp]' },

    { en: 'back', tr: '[bæk]' },

    { en: 'black', tr: '[blæk]' },

    { en: 'block', tr: '[blɒk]' },

    { en: 'brick', tr: '[brɪk]' },

    { en: 'buck', tr: '[bʌk]' },

    { en: 'check', tr: '[ʧek]' },

    { en: 'click', tr: '[klɪk]' },

    { en: 'clock', tr: '[klɒk]' },

    { en: 'crack', tr: '[kræk]' },

    { en: 'deck', tr: '[dek]' },

    { en: 'dock', tr: '[dɒk]' },

    { en: 'duck', tr: '[dʌk]' },

    { en: 'kick', tr: '[kɪk]' },

    { en: 'lack', tr: '[læk]' },

    { en: 'lock', tr: '[lɒk]' },

    { en: 'luck', tr: '[lʌk]' },

    { en: 'neck', tr: '[nek]' },

    { en: 'pack', tr: '[pæk]' },

    { en: 'pick', tr: '[pɪk]' },

    { en: 'rock', tr: '[rɒk]' },

    { en: 'sack', tr: '[sæk]' },

    { en: 'shock', tr: '[ʃɒk]' },

    { en: 'sick', tr: '[sɪk]' },

    { en: 'sock', tr: '[sɒk]' },

    { en: 'stack', tr: '[stæk]' },

    { en: 'stick', tr: '[stɪk]' },

    { en: 'stock', tr: '[stɒk]' },

    { en: 'thick', tr: '[θɪk]' },

    { en: 'track', tr: '[træk]' },

    { en: 'trick', tr: '[trɪk]' },

    { en: 'truck', tr: '[trʌk]' },

    { en: 'tuck', tr: '[tʌk]' },

    { en: 'whale', tr: '[weɪl]' },

    { en: 'when', tr: '[wen]' },

    { en: 'where', tr: '[weə]' },

    { en: 'while', tr: '[waɪl]' },

    { en: 'white', tr: '[waɪt]' },

    { en: 'why', tr: '[waɪ]' },

    { en: 'who', tr: '[huː]' },

    { en: 'whose', tr: '[huːz]' },

    { en: 'whom', tr: '[huːm]' },

    { en: 'beef', tr: '[biːf]' },

    { en: 'breeze', tr: '[briːz]' },

    { en: 'cheek', tr: '[ʧiːk]' },

    { en: 'cheese', tr: '[ʧiːz]' },

    { en: 'deem', tr: '[diːm]' },

    { en: 'deep', tr: '[diːp]' },

    { en: 'fee', tr: '[fiː]' },

    { en: 'feed', tr: '[fiːd]' },

    { en: 'feel', tr: '[fiːl]' },

    { en: 'flee', tr: '[fliː]' },

    { en: 'fleet', tr: '[fliːt]' },

    { en: 'free', tr: '[friː]' },

    { en: 'freeze', tr: '[friːz]' },

    { en: 'Greek', tr: '[ɡriːk]' },

    { en: 'green', tr: '[ɡriːn]' },

    { en: 'greet', tr: '[ɡriːt]' },

    { en: 'heel', tr: '[hiːl]' },

    { en: 'keep', tr: '[kiːp]' },

    { en: 'meet', tr: '[miːt]' },

    { en: 'need', tr: '[niːd]' },

    { en: 'peel', tr: '[piːl]' },

    { en: 'see', tr: '[siː]' },

    { en: 'seed', tr: '[siːd]' },

    { en: 'seek', tr: '[siːk]' },

    { en: 'seem', tr: '[siːm]' },

    { en: 'sheep', tr: '[ʃiːp]' },

    { en: 'sheet', tr: '[ʃiːt]' },

    { en: 'sleep', tr: '[sliːp]' },

    { en: 'sleeve', tr: '[sliːv]' },

    { en: 'speech', tr: '[spiːʧ]' },

    { en: 'speed', tr: '[spiːd]' },

    { en: 'street', tr: '[striːt]' },

    { en: 'sweep', tr: '[swiːp]' },

    { en: 'sweet', tr: '[swiːt]' },

    { en: 'teen', tr: '[tiːn]' },

    { en: 'three', tr: '[θriː]' },

    { en: 'tree', tr: '[triː]' },

    { en: 'weed', tr: '[wiːd]' },

    { en: 'wheel', tr: '[wiːl]' },

    { en: 'beach', tr: '[biːʧ]' },

    { en: 'bean', tr: '[biːn]' },

    { en: 'beast', tr: '[biːst]' },

    { en: 'beat', tr: '[biːt]' },

    { en: 'cheap', tr: '[ʧiːp]' },

    { en: 'cheat', tr: '[ʧiːt]' },

    { en: 'deal', tr: '[diːl]' },

    { en: 'dream', tr: '[driːm]' },

    { en: 'each', tr: '[iːʧ]' },

    { en: 'ease', tr: '[iːz]' },

    { en: 'eat', tr: '[iːt]' },

    { en: 'heal', tr: '[hiːl]' },

    { en: 'heat', tr: '[hiːt]' },

    { en: 'lead', tr: '[liːd]' },

    { en: 'leaf', tr: '[liːf]' },

    { en: 'lean', tr: '[liːn]' },

    { en: 'leap', tr: '[liːp]' },

    { en: 'least', tr: '[liːst]' },

    { en: 'leave', tr: '[liːv]' },

    { en: 'meal', tr: '[miːl]' },

    { en: 'mean', tr: '[miːn]' },

    { en: 'neat', tr: '[niːt]' },

    { en: 'peak', tr: '[piːk]' },

    { en: 'plea', tr: '[pliː]' },

    { en: 'plead', tr: '[pliːd]' },

    { en: 'please', tr: '[pliːz]' },

    { en: 'preach', tr: '[priːʧ]' },

    { en: 'reach', tr: '[riːʧ]' },

    { en: 'read', tr: '[riːd]' },

    { en: 'seal', tr: '[siːl]' },

    { en: 'seat', tr: '[siːt]' },

    { en: 'speak', tr: '[spiːk]' },

    { en: 'steam', tr: '[stiːm]' },

    { en: 'stream', tr: '[striːm]' },

    { en: 'tea', tr: '[tiː]' },

    { en: 'teach', tr: '[tiːʧ]' },

    { en: 'team', tr: '[tiːm]' },

    { en: 'treat', tr: '[triːt]' },

    { en: 'weak', tr: '[wiːk]' },

    { en: 'weave', tr: '[wiːv]' },

    { en: 'wheat', tr: '[wiːt]' },

    { en: 'break', tr: '[breɪk]' },

    { en: 'head', tr: '[hed]' },

    { en: 'real', tr: '[rɪəl]' },

    { en: 'boom', tr: '[buːm]' },

    { en: 'boost', tr: '[buːst]' },

    { en: 'boot', tr: '[buːt]' },

    { en: 'booth', tr: '[buːð]' },

    { en: 'cool', tr: '[kuːl]' },

    { en: 'food', tr: '[fuːd]' },

    { en: 'loop', tr: '[luːp]' },

    { en: 'mood', tr: '[muːd]' },

    { en: 'moon', tr: '[muːn]' },

    { en: 'noon', tr: '[nuːn]' },

    { en: 'pool', tr: '[puːl]' },

    { en: 'proof', tr: '[pruːf]' },

    { en: 'roof', tr: '[ruːf]' },

    { en: 'room', tr: '[ruːm]' },

    { en: 'root', tr: '[ruːt]' },

    { en: 'shoot', tr: '[ʃuːt]' },

    { en: 'smooth', tr: '[smuːð]' },

    { en: 'soon', tr: '[suːn]' },

    { en: 'spoon', tr: '[spuːn]' },

    { en: 'too', tr: '[tuː]' },

    { en: 'tooth', tr: '[tuːθ]' },

    { en: 'troops', tr: '[truːps]' },

    { en: 'book', tr: '[bʊk]' },

    { en: 'cook', tr: '[kʊk]' },

    { en: 'foot', tr: '[fʊt]' },

    { en: 'good', tr: '[ɡʊd]' },

    { en: 'hook', tr: '[hʊk]' },

    { en: 'look', tr: '[lʊk]' },

    { en: 'wood', tr: '[wʊd]' },

    { en: 'bring', tr: '[brɪŋ]' },

    { en: 'cling', tr: '[klɪŋ]' },

    { en: 'hang', tr: '[hæŋ]' },

    { en: 'king', tr: '[kɪŋ]' },

    { en: 'long', tr: '[lɒŋ]' },

    { en: 'ring', tr: '[rɪŋ]' },

    { en: 'sing', tr: '[sɪŋ]' },

    { en: 'song', tr: '[sɒŋ]' },

    { en: 'spring', tr: '[sprɪŋ]' },

    { en: 'string', tr: '[strɪŋ]' },

    { en: 'strong', tr: '[strɒŋ]' },

    { en: 'swim', tr: '[swɪm]' },

    { en: 'thing', tr: '[θɪŋ]' },

    { en: 'wrong', tr: '[rɒŋ]' },

    { en: 'bright', tr: '[braɪt]' },

    { en: 'eight', tr: '[eɪt]' },

    { en: 'fight', tr: '[faɪt]' },

    { en: 'high', tr: '[haɪ]' },

    { en: 'light', tr: '[laɪt]' },

    { en: 'might', tr: '[maɪt]' },

    { en: 'night', tr: '[naɪt]' },

    { en: 'right', tr: '[raɪt]' },

    { en: 'sign', tr: '[saɪn]' },

    { en: 'sight', tr: '[saɪt]' },

    { en: 'slight', tr: '[slaɪt]' },

    { en: 'tight', tr: '[taɪt]' },

    { en: 'weigh', tr: '[weɪ]' },

    { en: 'weight', tr: '[weɪt]' },

    { en: 'cloud', tr: '[klaʊd]' },

    { en: 'found', tr: '[faʊnd]' },

    { en: 'ground', tr: '[ɡraʊnd]' },

    { en: 'house', tr: '[haʊs]' },

    { en: 'loud', tr: '[laʊd]' },

    { en: 'mount', tr: '[maʊnt]' },

    { en: 'mouse', tr: '[maʊs]' },

    { en: 'mouth', tr: '[maʊθ]' },

    { en: 'out', tr: '[aʊt]' },

    { en: 'out', tr: '[aʊt]' },

    { en: 'pound', tr: '[paʊnd]' },

    { en: 'proud', tr: '[praʊd]' },

    { en: 'round', tr: '[raʊnd]' },

    { en: 'shout', tr: '[ʃaʊt]' },

    { en: 'sound', tr: '[saʊnd]' },

    { en: 'south', tr: '[saʊθ]' },

    { en: 'boy', tr: '[bɔɪ]' },

    { en: 'joy', tr: '[ʤɔɪ]' },

    { en: 'oi', tr: '[ɔɪ]' },

    { en: 'boil', tr: '[bɔɪl]' },

    { en: 'choice', tr: '[ʧɔɪs]' },

    { en: 'coin', tr: '[kɔɪn]' },

    { en: 'join', tr: '[ʤɔɪn]' },

    { en: 'noise', tr: '[nɔɪz]' },

    { en: 'oil', tr: '[ɔɪl]' },

    { en: 'point', tr: '[pɔɪnt]' },

    { en: 'soil', tr: '[sɔɪl]' },

    { en: 'bay', tr: '[beɪ]' },

    { en: 'clay', tr: '[kleɪ]' },

    { en: 'day', tr: '[deɪ]' },

    { en: 'gray', tr: '[ɡreɪ]' },

    { en: 'lay', tr: '[leɪ]' },

    { en: 'may', tr: '[meɪ]' },

    { en: 'pay', tr: '[peɪ]' },

    { en: 'play', tr: '[pleɪ]' },

    { en: 'pray', tr: '[preɪ]' },

    { en: 'ray', tr: '[reɪ]' },

    { en: 'say', tr: '[seɪ]' },

    { en: 'spray', tr: '[spreɪ]' },

    { en: 'stay', tr: '[steɪ]' },

    { en: 'tray', tr: '[treɪ]' },

    { en: 'way', tr: '[weɪ]' },

    { en: 'jail', tr: '[ʤeɪl]' },

    { en: 'jam', tr: '[ʤæm]' },

    { en: 'jar', tr: '[ʤɑː]' },

    { en: 'jazz', tr: '[ʤæz]' },

    { en: 'jeans', tr: '[ʤiːnz]' },

    { en: 'jet', tr: '[ʤet]' },

    { en: 'jet', tr: '[ʤet]' },

    { en: 'job', tr: '[ʤɒb]' },

    { en: 'joint', tr: '[ʤɔɪnt]' },

    { en: 'joke', tr: '[ʤəʊk]' },

    { en: 'jump', tr: '[ʤʌmp]' },

    { en: 'just', tr: '[ʤʌst]' },

    { en: 'phone', tr: '[fəʊn]' },

    { en: 'phrase', tr: '[freɪz]' },

    { en: 'sphere', tr: '[sfɪə]' },

    { en: 'all', tr: '[ɔːl]' },

    { en: 'ball', tr: '[bɔːl]' },

    { en: 'call', tr: '[kɔːl]' },

    { en: 'fall', tr: '[fɔːl]' },

    { en: 'hall', tr: '[hɔːl]' },

    { en: 'mall', tr: '[mɔːl]' },

    { en: 'small', tr: '[smɔːl]' },

    { en: 'tall', tr: '[tɔːl]' },

    { en: 'wall', tr: '[wɔːl]' },

    { en: 'queen', tr: '[kwiːn]' },

    { en: 'quick', tr: '[kwɪk]' },

    { en: 'quit', tr: '[kwɪt]' },

    { en: 'quite', tr: '[kwaɪt]' },

    { en: 'quote', tr: '[kwəʊt]' },

    { en: 'square', tr: '[skweə]' },

    { en: 'squeeze', tr: '[skwiːz]' },

    { en: 'scheme', tr: '[skiːm]' },

    { en: 'school', tr: '[skuːl]' },

    { en: 'booth', tr: '[buːð]' },

    { en: 'breathe', tr: '[briːð]' },

    { en: 'cloth', tr: '[klɒθ]' },

    { en: 'smooth', tr: '[smuːð]' },

    { en: 'thus', tr: '[ðʌs]' },

    { en: 'with', tr: '[wɪð]' },

    { en: 'breath', tr: '[breθ]' },

    { en: 'depth', tr: '[depθ]' },

    { en: 'fifth', tr: '[fɪfθ]' },

    { en: 'forth', tr: '[fɔːθ]' },

    { en: 'length', tr: '[leŋθ]' },

    { en: 'ninth', tr: '[naɪnθ]' },

    { en: 'north', tr: '[nɔːθ]' },

    { en: 'seventh', tr: '[sevnθ]' },

    { en: 'sixth', tr: '[sɪksθ]' },

    { en: 'strength', tr: '[streŋθ]' },

    { en: 'tenth', tr: '[tenθ]' },

    { en: 'thank', tr: '[θæŋk]' },

    { en: 'strengthen', tr: '[streŋθn]' },

    { en: 'thanks', tr: '[θæŋks]' },

    { en: 'theme', tr: '[θiːm]' },

    { en: 'thick', tr: '[θɪk]' },

    { en: 'thigh', tr: '[θaɪ]' },

    { en: 'third', tr: '[θɜːd]' },

    { en: 'thrive', tr: '[θraɪv]' },

    { en: 'tooth', tr: '[tuːθ]' },

    { en: 'warmth', tr: '[wɔːmθ]' },

  ];

  

  console.log(TR_NEW_ONE_ARR.length);

  
  const TR_NEW_TWO_ARR = [
    { en: 'duty', tr: '[ˈdjuːti]' },
    { en: 'data', tr: '[ˈdeɪtə]' },
    { en: 'baby', tr: '[ˈbeɪbi]' },
    { en: 'Peter', tr: '[ˈpiːtə]' },
    { en: 'pepper', tr: '[ˈpepə]' },
    { en: 'reading', tr: '[ˈriːdɪŋ]' },
    { en: 'meaning', tr: '[ˈmiːnɪŋ]' },
    { en: 'teaching', tr: '[ˈtiːʧɪŋ]' },
    { en: 'speaker', tr: '[ˈspiːkə]' },
    { en: 'weakness', tr: '[ˈwiːknəs]' },
    { en: 'teammate', tr: '[ˈtiːmmeɪt]' },
    { en: 'knowledge', tr: '[ˈnɑːlɪdʒ]' },
    { en: 'sugar', tr: '[ˈʃʊɡər]' },
    { en: 'promise', tr: '[ˈprɑːmɪs]' },
    { en: 'publish', tr: '[ˈpʌblɪʃ]' },
    { en: 'Bible', tr: '[ˈbaɪbl]' },
    { en: 'British', tr: '[ˈbrɪtɪʃ]' },
    { en: 'finish', tr: '[ˈfɪnɪʃ]' },
    { en: 'parish', tr: '[ˈpærɪʃ]' },
    { en: 'publish', tr: '[ˈpʌblɪʃ]' },
    { en: 'vanish', tr: '[ˈvænɪʃ]' },
    { en: 'whisper', tr: '[ˈwɪspə]' },
    { en: 'feeling', tr: '[ˈfiːlɪŋ]' },
    { en: 'fifteen', tr: '[fɪfˈtiːn]' },
    { en: 'indeed', tr: '[ɪnˈdiːd]' },
    { en: 'meeting', tr: '[ˈmiːtɪŋ]' },
    { en: 'needle', tr: '[ˈniːdl]' },
    { en: 'nineteen', tr: '[naɪnˈtiːn]' },
    { en: 'seventeen', tr: '[sevnˈtiːn]' },
    { en: 'sixteen', tr: '[sɪkˈstiːn]' },
    { en: 'thirteen', tr: '[θɜːˈtiːn]' },
    { en: 'dealer', tr: '[ˈdiːlə]' },
    { en: 'eager', tr: '[ˈiːɡə]' },
    { en: 'meaning', tr: '[ˈmiːnɪŋ]' },
    { en: 'reading', tr: '[ˈriːdɪŋ]' },
    { en: 'teaching', tr: '[ˈtiːʧɪŋ]' },
    { en: 'treatment', tr: '[ˈtriːtmənt]' },
    { en: 'ready', tr: '[ˈredi]' },
    { en: 'cooking', tr: '[ˈkʊkɪŋ]' },
    { en: 'notebook', tr: '[ˈnəʊtbʊk]' },
    { en: 'banking', tr: '[ˈbæŋkɪŋ]' },
    { en: 'blessing', tr: '[ˈblesɪŋ]' },
    { en: 'burning', tr: '[ˈbɜːnɪŋ]' },
    { en: 'changing', tr: '[ˈʧeɪnʤɪŋ]' },
    { en: 'cooking', tr: '[ˈkʊkɪŋ]' },
    { en: 'dining', tr: '[ˈdaɪnɪŋ]' },
    { en: 'drinking', tr: '[ˈdrɪŋkɪŋ]' },
    { en: 'eating', tr: '[ˈiːtɪŋ]' },
    { en: 'evening', tr: '[ˈiːvnɪŋ]' },
    { en: 'feeling', tr: '[ˈfiːlɪŋ]' },
    { en: 'fishing', tr: '[ˈfɪʃɪŋ]' },
    { en: 'flying', tr: '[ˈflaɪɪŋ]' },
    { en: 'funding', tr: '[ˈfʌndɪŋ]' },
    { en: 'hunting', tr: '[ˈhʌntɪŋ]' },
    { en: 'landing', tr: '[ˈlændɪŋ]' },
    { en: 'leading', tr: '[ˈliːdɪŋ]' },
    { en: 'living', tr: '[ˈlɪvɪŋ]' },
    { en: 'meaning', tr: '[ˈmiːnɪŋ]' },
    { en: 'meeting', tr: '[ˈmiːtɪŋ]' },
    { en: 'missing', tr: '[ˈmɪsɪŋ]' },
    { en: 'morning', tr: '[ˈmɔːnɪŋ]' },
    { en: 'painting', tr: '[ˈpeɪntɪŋ]' },
    { en: 'parking', tr: '[ˈpɑːkɪŋ]' },
    { en: 'planning', tr: '[ˈplænɪŋ]' },
    { en: 'rating', tr: '[ˈreɪtɪŋ]' },
    { en: 'reading', tr: '[ˈriːdɪŋ]' },
    { en: 'running', tr: '[ˈrʌnɪŋ]' },
    { en: 'saving', tr: '[ˈseɪvɪŋ]' },
    { en: 'shopping', tr: '[ˈʃɒpɪŋ]' },
    { en: 'spending', tr: '[ˈspendɪŋ]' },
    { en: 'standing', tr: '[ˈstændɪŋ]' },
    { en: 'starting', tr: '[ˈstɑːtɪŋ]' },
    { en: 'striking', tr: '[ˈstraɪkɪŋ]' },
    { en: 'swimming', tr: '[ˈswɪmɪŋ]' },
    { en: 'teaching', tr: '[ˈtiːʧɪŋ]' },
    { en: 'testing', tr: '[ˈtestɪŋ]' },
    { en: 'thinking', tr: '[ˈθɪŋkɪŋ]' },
    { en: 'timing', tr: '[ˈtaɪmɪŋ]' },
    { en: 'trading', tr: '[ˈtreɪdɪŋ]' },
    { en: 'training', tr: '[ˈtreɪnɪŋ]' },
    { en: 'voting', tr: '[ˈvəʊtɪŋ]' },
    { en: 'wedding', tr: '[ˈwedɪŋ]' },
    { en: 'writing', tr: '[ˈraɪtɪŋ]' },
    { en: 'highlight', tr: '[ˈhaɪlaɪt]' },
    { en: 'insight', tr: '[ˈɪnsaɪt]' },
    { en: 'lighting', tr: '[ˈlaɪtɪŋ]' },
    { en: 'lightly', tr: '[ˈlaɪtli]' },
    { en: 'lightning', tr: '[ˈlaɪtnɪŋ]' },
    { en: 'midnight', tr: '[ˈmɪdnaɪt]' },
    { en: 'nightmare', tr: '[ˈnaɪtmeə]' },
    { en: 'slightly', tr: '[ˈslaɪtli]' },
    { en: 'sunlight', tr: '[ˈsʌnlaɪt]' },
    { en: 'tighten', tr: '[ˈtaɪtn]' },
    { en: 'fighter', tr: '[ˈfaɪtə]' },
    { en: 'speaker', tr: '[ˈspiːkə]' },
    { en: 'highly', tr: '[ˈhaɪlɪ]' },
    { en: 'counter', tr: '[ˈkaʊntə]' },
    { en: 'counter', tr: '[ˈkaʊntə]' },
    { en: 'discount', tr: '[ˈdɪskaʊnt]' },
    { en: 'outer', tr: '[ˈaʊtə]' },
    { en: 'outfit', tr: '[ˈaʊtfɪt]' },
    { en: 'outlet', tr: '[ˈaʊtlet]' },
    { en: 'outline', tr: '[ˈaʊtlaɪn]' },
    { en: 'output', tr: '[ˈaʊtpʊt]' },
    { en: 'outside', tr: '[ˌaʊtˈsaɪd]' },
    { en: 'toilet', tr: '[ˈtɔɪlɪt]' },
    { en: 'birthday', tr: '[ˈbɜːθdeɪ]' },
    { en: 'display', tr: '[dɪˈspleɪ]' },
    { en: 'okay', tr: '[əʊˈkeɪ]' },
    { en: 'payment', tr: '[ˈpeɪmənt]' },
    { en: 'portray', tr: '[pɔːˈtreɪ]' },
    { en: 'physical', tr: '[ˈfɪzɪkl]' },
    { en: 'photo', tr: '[ˈfəʊtəʊ]' },
    { en: 'physics', tr: '[ˈfɪzɪks]' },
    { en: 'baseball', tr: '[ˈbeɪsbɔːl]' },
    { en: 'football', tr: '[ˈfʊtbɔːl]' },
    { en: 'hallway', tr: '[ˈhɔːlweɪ]' },
    { en: 'install', tr: '[ɪnˈstɔːl]' },
    { en: 'equal', tr: '[ˈiːkwəl]' },
    { en: 'frequent', tr: '[ˈfriːkwənt]' },
    { en: 'liquid', tr: '[ˈlɪkwɪd]' },
    { en: 'question', tr: '[ˈkwesʧən]' },
    { en: 'quickly', tr: '[ˈkwɪkli]' },
    { en: 'request', tr: '[rɪˈkwest]' },
    { en: 'scholar', tr: '[ˈskɒlə]' },
    { en: 'clothing', tr: '[ˈkləʊðɪŋ]' },
    { en: 'gather', tr: '[ˈɡæðə]' },
    { en: 'gathering', tr: '[ˈɡæðərɪŋ]' },
    { en: 'bother', tr: '[ˈbɒðə]' },
    { en: 'thereby', tr: '[ˈðeəˈbaɪ]' },
    { en: 'together', tr: '[təˈɡeðə]' },
    { en: 'within', tr: '[wɪˈðɪn]' },
    { en: 'ethical', tr: '[ˈeθɪkl]' },
    { en: 'ethics', tr: '[ˈeθɪks]' },
    { en: 'ethnic', tr: '[ˈeθnɪk]' },
    { en: 'method', tr: '[ˈmeθəd]' },
    { en: 'monthly', tr: '[ˈmʌnθli]' },
    { en: 'northwest', tr: '[ˌnɔːθˈwest]' },
    { en: 'southeast', tr: '[saʊθˈiːst]' },
    { en: 'southwest', tr: '[saʊθˈwest]' },
    { en: 'themselves', tr: '[ðəmˈselvz]' },
    { en: 'thirty', tr: '[ˈθɜːti]' },
    { en: 'thousand', tr: '[ˈθaʊzənd]' },
    { en: 'warehouse', tr: '[ˈweəhaʊs]' },
    { en: 'halo', tr: '[ˈheɪləʊ]' },
    { en: 'hello', tr: '[həˈləʊ]' },
  ];
  
  console.log(TR_NEW_TWO_ARR.length);
  
  const TR_NEW_THREE_ARR = [
    { en: 'psychology', tr: '[saɪˈkɑːlədʒɪ]' },
    { en: 'abandon', tr: '[əˈbændən]' },
    { en: 'ambassador', tr: '[æmˈbæsədər]' },
    { en: 'pronunciation', tr: '[prəˌnʌnsɪˈeɪʃn]' },
    { en: 'excellent', tr: '[ˈeksələnt]' },
    { en: 'interchangeably', tr: '[ˌɪntərˈʧeɪnʤəblɪ]' },
    { en: 'interesting', tr: '[ˈɪntrestɪŋ]' },
    { en: 'ongoing', tr: '[ˈɒŋɡəʊɪŋ]' },
    { en: 'operating', tr: '[ˈɒpreɪtɪŋ]' },
    { en: 'outsider', tr: '[ˌaʊtˈsaɪdə]' },
    { en: 'outstanding', tr: '[aʊtˈstændɪŋ]' },
    { en: 'biography', tr: '[baɪˈɒɡrəfi]' },
    { en: 'demographic', tr: '[deməˈɡræfɪk]' },
    { en: 'elephant', tr: '[ˈelɪfənt]' },
    { en: 'phenomenon', tr: '[fəˈnɒmɪnən]' },
    { en: 'philosophical', tr: '[ˌfɪləˈsɒfɪkl]' },
    { en: 'philosophy', tr: '[fɪˈlɒsəfi]' },
    { en: 'photograph', tr: '[ˈfəʊtəɡrɑːf]' },
    { en: 'photographer', tr: '[fəˈtɒɡrəfə]' },
    { en: 'photography', tr: '[fəˈtɒɡrəfi]' },
    { en: 'physically', tr: '[ˈfɪzɪkli]' },
    { en: 'telephone', tr: '[ˈtelɪfəʊn]' },
    { en: 'basketball', tr: '[ˈbɑːskɪtbɔːl]' },
    { en: 'footballer', tr: '[ˈfʊtbɔːlə]' },
    { en: 'consequently', tr: '[ˈkɒnsɪkwəntli]' },
    { en: 'equally', tr: '[ˈiːkwəli]' },
    { en: 'equivalent', tr: '[ɪˈkwɪvələn]' },
    { en: 'frequency', tr: '[ˈfriːkwənsi]' },
    { en: 'scholarship', tr: '[ˈskɒləʃɪp]' },
    { en: 'furthermore', tr: '[ˈfɜːðəˈmɔː]' },
    { en: 'nevertheless', tr: '[nevəðəˈles]' },
    { en: 'enthusiasm', tr: '[ɪnˈθjuːziæzm]' },
    { en: 'everything', tr: '[ˈevriθɪŋ]' },
    { en: 'theology', tr: '[θiˈɒləʤi]' },
    { en: 'therapist', tr: '[ˈθerəpɪst]' },
  ];
  
  console.log(TR_NEW_THREE_ARR.length);
  

  const fChoose = document.querySelector('.tr__choose');

  

  const fBtnStart = document.querySelector('#tr__start');

  

  const fContainerForContent = document.querySelector('.tr__content-container');

  const fQuestion = fContainerForContent.querySelector('.tr__question');

  const fRightAnswer = fContainerForContent.querySelector('.tr__right-answer');

  const fResponseField = fContainerForContent.querySelector('.tr__responsefield');

  const fAnswerArr = fContainerForContent.querySelector('.tr__answer-arr');

  const fContainerBottomWrapper = fContainerForContent.querySelector('.content-container__bottom-wrapper');

  

  const fResults = document.querySelector('.tr__results');

  const fBtnAgain = fResults.querySelector('#tr__btn-again');

  

  const fScore = document.querySelector('.tr__score');

  const fScoreTotal = fScore.querySelector('#tr__score-total');

  const fScoreValue = fScore.querySelector('#tr__score-value');

  

  const fBtnResult = fContainerForContent.querySelector('#tr__btn-check');

  const fBtnNext = fContainerForContent.querySelector('#tr__btn-next');

  

  const fTemplate = document.querySelector('#template-transcription__new').content.querySelector('.tr__word');

  
  const renderWords = (word) => {
    let currentElement = fTemplate.cloneNode(true);
  
    currentElement.textContent = word;
    currentElement.id = word;
  
    return currentElement;
  };
  
  const renderWordsStart = (valueOfLang, wordsArray, wordsArrayMistakes, arrForRender) => {
    let fragment = document.createDocumentFragment();
    console.log('render.js - renderWordsStart - valueOfLang: ' + valueOfLang);
  
    switch (valueOfLang) {
      case 'en':
        typeQuestion = 'en';
        typeAnswer = 'tr';
        break;
      case 'tr':
        typeQuestion = 'tr';
        typeAnswer = 'en';
        break;
      default:
        typeQuestion = 'en';
        typeAnswer = 'tr';
    }
  
    let words = arrForRender[wordsArray[renderСounters]][typeAnswer].replace(/[\[\]]/g, '').split('');
  
    fQuestion.textContent = arrForRender[wordsArray[renderСounters]][typeQuestion];
    console.log('words ' + words);
  
    let mistakes = arrForRender[wordsArrayMistakes[renderMistakesCounter]][typeAnswer]
      .replace(/[\[\]]/g, '')
      .split('')
      .concat(arrForRender[wordsArrayMistakes[renderMistakesCounter + 1]][typeAnswer].replace(/[\[\]]/g, '').split(''));
  
    console.log('mistakes ' + mistakes);
    renderMistakesCounter += 2;
    let arrwordsMistakes = words.concat(mistakes);
    console.log('arrwordsMistakes ' + arrwordsMistakes);
  
    for (let i = arrwordsMistakes.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let t = arrwordsMistakes[i];
      arrwordsMistakes[i] = arrwordsMistakes[j];
      arrwordsMistakes[j] = t;
    }
  
    console.log(arrwordsMistakes);
  
    for (let i = 0; i < arrwordsMistakes.length; i++) {
      fragment.append(renderWords(arrwordsMistakes[i]));
    }
  
    fAnswerArr.textContent = '';
    fResponseField.textContent = '';
    fRightAnswer.textContent = '';
  
    fAnswerArr.append(fragment);
  };
  
  const generateRandomNumbers = (count, arr) => {
    let min = 0;
    let max = arr.length - 1;
    if (max - min + 1 < count) {
      throw new Error('Невозможно сгенерировать указанное количество уникальных чисел');
    }
  
    const numbers = [];
    while (numbers.length < count) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    return numbers;
  };
  
  const generateRandomMistakes = (count, arr, generatedArr) => {
    count = count * 2;
    let min = 0;
    let max = arr.length - 1;
    if (max - min + 1 < count) {
      throw new Error('Невозможно сгенерировать указанное количество уникальных чисел');
    }
  
    const numbers = [];
    while (numbers.length < count) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!numbers.includes(randomNumber) && !generatedArr.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    return numbers;
  };
  

  let valueOfQuestions = 0;

  let valueOfQuestionsAll = 0;

  let valueOfDifficult;

  let valueOfLang;

  let scoreValue = 0;

  let valueArr = [];

  let wordsArray;

  let wordsArrayMistakes;

  let renderСounters = 0;

  let renderMistakesCounter = 0;

  let typeQuestion;

  let typeAnswer;

  let difficult;

  let arrForRender;

  

  fBtnStart.addEventListener('click', () => {

    fResponseField.style.backgroundColor = '#fff';

    const fValueOfQuestions = fChoose.querySelector('.tr__choice:checked');

    const fValueOfLang = fChoose.querySelector('.tr__lang:checked');

    const fValueOfDifficult = fChoose.querySelector('.tr__difficult:checked');

  

    console.log(fValueOfQuestions.value + ' ' + fValueOfLang.value + ' ' + fValueOfDifficult.value);

    console.log(fValueOfQuestions.value + ' ' + fValueOfLang.value + ' ' + fValueOfDifficult.value);

    fChoose.style.display = 'none';

    fContainerForContent.style.display = 'block';

    fContainerBottomWrapper.style.display = 'block';

  

    fBtnResult.classList.remove('visually-hidden');

  

    valueOfQuestions = fValueOfQuestions.value;

    valueOfQuestionsAll = fValueOfQuestions.value;

    valueOfDifficult = fValueOfDifficult.value;

    valueOfLang = fValueOfLang.value;

  

    switch (valueOfDifficult) {

      case 'easy':

        arrForRender = TR_NEW_ONE_ARR;

        break;

      case 'middle':

        arrForRender = TR_NEW_TWO_ARR;

        break;

      case 'hard':

        arrForRender = TR_NEW_THREE_ARR;

        break;

      default:

        arrForRender = TR_NEW_ONE_ARR;

    }

  

    console.log(arrForRender);

    wordsArray = generateRandomNumbers(fValueOfQuestions.value, arrForRender);

    console.log('wordsArray ' + wordsArray);

    wordsArrayMistakes = generateRandomMistakes(fValueOfQuestions.value, arrForRender, wordsArray);

    console.log('wordsArrayMistakes ' + wordsArrayMistakes);

    renderWordsStart(fValueOfLang.value, wordsArray, wordsArrayMistakes, arrForRender);

  });

  

  fResponseField.addEventListener('click', (evt) => {

    console.log(evt.target.id);

    if (evt.target.id !== 'responsefield') {

      fAnswerArr.append(evt.target);

      const index = valueArr.indexOf(evt.target.textContent);

      if (index > -1) {

        valueArr.splice(index, 1);

      }

      console.log(valueArr);

    }

  });

  

  fAnswerArr.addEventListener('click', (evt) => {

    console.log(evt.target.id);

    if (evt.target.id !== 'answers') {

      fResponseField.append(evt.target);

      valueArr.push(evt.target.textContent);

      console.log(valueArr);

    }

  });

  

  fBtnResult.addEventListener('click', (evt) => {

    evt.preventDefault();

    let result;

  

    switch (valueOfLang) {

      case 'en':

        result = '[' + valueArr.join('') + ']';

        break;

      case 'tr':

        result = valueArr.join('');

        break;

      default:

        result = '[' + valueArr.join('') + ']';

    }

  

    valueArr = [];

    console.log('handler - result: ' + result);

  

    if (result === arrForRender[wordsArray[renderСounters]][typeAnswer]) {

      console.log('ДА');

      fResponseField.style.backgroundColor = 'green';

      scoreValue++;

    } else {

      console.log('НЕТ');

      fResponseField.style.backgroundColor = 'red';

      fRightAnswer.textContent = arrForRender[wordsArray[renderСounters]][typeAnswer];

    }

  

    if (valueOfQuestions > 1) {

      valueOfQuestions--;

      fBtnResult.classList.add('visually-hidden');

      fBtnNext.classList.remove('visually-hidden');

    } else {

      valueOfQuestions--;

      fContainerBottomWrapper.style.display = 'none';

      fResults.style.display = 'block';

      fScoreTotal.textContent = valueOfQuestionsAll;

      fScoreValue.textContent = scoreValue;

    }

  

    renderСounters++;

    console.log(valueOfQuestions);

  });

  

  fBtnNext.addEventListener('click', (evt) => {

    evt.preventDefault();

  

    renderWordsStart(valueOfLang, wordsArray, wordsArrayMistakes, arrForRender);

  

    fBtnResult.classList.remove('visually-hidden');

    fBtnNext.classList.add('visually-hidden');

  

    fResponseField.style.backgroundColor = '#fff';

  });

  

  fBtnAgain.addEventListener('click', () => {

    fChoose.style.display = 'block';

    fContainerForContent.style.display = 'none';

    fResults.style.display = 'none';

  

    valueOfQuestions = 0;

    scoreValue = 0;

    renderСounters = 0;

    renderMistakesCounter = 0;

  });

  
}

if (document.querySelector('#template-words') !== null) {
  try {
    document.querySelector('.menu__link[href="words.html"]').dataset.current = 'true';
  } catch {
    console.log('.menu__link[href="words.html"] - не найдено');
  }
  'use strick';
  
  const WORDS__ARRAY = [
    {
      en: 'which',
      ru: 'который, какой',
    },
    {
      en: 'some',
      ru: 'некоторые, несколько, немного',
    },
    {
      en: 'because',
      ru: 'потому что',
    },
    {
      en: 'such',
      ru: 'такой',
    },
    {
      en: 'each',
      ru: 'каждый',
    },
    {
      en: 'less',
      ru: 'меньше',
    },
    {
      en: 'once',
      ru: 'однажды, один раз',
    },
    {
      en: 'enough',
      ru: 'достаточно',
    },
    {
      en: 'sure',
      ru: 'уверенный',
    },
    {
      en: 'several',
      ru: 'несколько',
    },
    {
      en: 'letter',
      ru: 'письмо',
    },
    {
      en: 'subject',
      ru: 'тема, предмет',
    },
    {
      en: 'near',
      ru: 'рядом (с), близко(с), около',
    },
    {
      en: 'difficult',
      ru: 'сложно, трудно, сложный, трудный',
    },
    {
      en: 'opportunity',
      ru: 'возможность',
    },
    {
      en: 'single',
      ru: 'холост, одиночный, единичный',
    },
    {
      en: 'society',
      ru: 'общество',
    },
    {
      en: 'wrong',
      ru: 'неправильный, неверный, ложный',
    },
    {
      en: 'poor',
      ru: ' бедный',
    },
    {
      en: 'article',
      ru: 'статья, артикль',
    },
    {
      en: 'necessary',
      ru: 'необходимый, необходимо',
    },
    {
      en: 'modern',
      ru: 'современный',
    },
    {
      en: 'village',
      ru: 'деревня',
    },
    {
      en: 'successful',
      ru: 'успешный',
    },
    {
      en: 'app(application)',
      ru: 'приложение',
    },
    {
      en: 'exercise',
      ru: 'упражнение',
    },
    {
      en: 'useful',
      ru: 'полезный',
    },
    {
      en: 'afternoon',
      ru: 'днём',
    },
    {
      en: 'pound',
      ru: 'фунт',
    },
    {
      en: 'suddenly',
      ru: 'вдруг, внезапно',
    },
    {
      en: 'advice',
      ru: 'совет',
    },
    {
      en: 'wonderful',
      ru: 'прекрасный, замечательный, удивительный, чудесный',
    },
    {
      en: 'absolutely',
      ru: 'абсолютно, совершенно, совсем, полностью',
    },
    {
      en: 'pleasure',
      ru: 'удовольствие',
    },
    {
      en: 'tonigth',
      ru: 'сегодня вечером ',
    },
    {
      en: 'forest',
      ru: 'лес, лесной',
    },
    {
      en: 'careful',
      ru: 'осторожный ',
    },
    {
      en: 'sad',
      ru: 'грустный, печальный',
    },
    {
      en: 'abroad',
      ru: 'за границей',
    },
    {
      en: 'upset',
      ru: 'расстроенный',
    },
    {
      en: 'singer',
      ru: 'певец',
    },
    {
      en: 'alright(all right)',
      ru: 'в порядке ',
    },
    {
      en: 'correctly',
      ru: 'правильно, корректно',
    },
    {
      en: 'fluently',
      ru: 'свободно, бегло',
    },
    {
      en: 'pet',
      ru: 'домашнее животное',
    },
    {
      en: 'miracle',
      ru: 'чудо',
    },
    {
      en: 'toy',
      ru: 'игрушка',
    },
    {
      en: 'hard-working(hardworking)',
      ru: 'трудолюбивый ',
    },
    {
      en: 'unhappy',
      ru: 'несчатный',
    },
    {
      en: 'trousers',
      ru: 'брюки',
    },
    {
      en: 'worse',
      ru: 'хуже',
    },
    {
      en: 'fat',
      ru: 'толстый, жирный',
    },
    {
      en: 'nowadays',
      ru: 'в наши дни, в наше время',
    },
    {
      en: 'casual',
      ru: 'повседневный',
    },
    {
      en: 'informal',
      ru: 'неформальный',
    },
    {
      en: 'against',
      ru: 'против',
    },
    {
      en: 'urgently',
      ru: 'срочно',
    },
    {
      en: `Let's`,
      ru: 'давай',
    },
    {
      en: 'goods',
      ru: 'товар, товары',
    },
    {
      en: 'listening',
      ru: 'аудирование',
    },
    {
      en: 'speaking',
      ru: 'разговорная речь',
    },
    {
      en: 'sandwich',
      ru: 'сэндвич, бутерброд',
    },
    {
      en: 'gym',
      ru: 'спортзал, тренажёрный зал',
    },
    {
      en: 'surname(family name, last name)',
      ru: 'фамилия',
    },
    {
      en: 'camel',
      ru: 'верблюд',
    },
    {
      en: 'perfect',
      ru: 'идеальный',
    },
    {
      en: 'perfectly',
      ru: 'идеально',
    },
    {
      en: 'loud',
      ru: 'громкий',
    },
    {
      en: 'loudly',
      ru: 'громко',
    },
    {
      en: 'championship',
      ru: 'чемпионат',
    },
    {
      en: 'competition',
      ru: 'соревнование',
    },
    {
      en: 'bridge',
      ru: 'мост',
    },
    {
      en: 'wallet',
      ru: 'бумажник',
    },
    {
      en: 'bag',
      ru: 'сумка',
    },
    {
      en: 'quiet',
      ru: 'тихий',
    },
    {
      en: 'quietly',
      ru: 'тихо',
    },
    {
      en: 'lawyer',
      ru: 'юрист, адвокат',
    },
    {
      en: 'law',
      ru: 'закон',
    },
    {
      en: 'desk',
      ru: 'письменный стол',
    },
    {
      en: 'studies',
      ru: 'учёба',
    },
    {
      en: 'ill',
      ru: 'больной',
    },
    {
      en: 'special',
      ru: 'особый, специальный',
    },
    {
      en: 'terrible',
      ru: 'ужасный',
    },
    {
      en: 'terribly',
      ru: 'ужасно',
    },
    {
      en: 'away',
      ru: 'прочь',
    },
    {
      en: 'worst',
      ru: 'наихудший',
    },
    {
      en: 'floor',
      ru: 'этаж, пол',
    },
    {
      en: 'tree',
      ru: 'дерево',
    },
    {
      en: 'foreign',
      ru: 'иностранный',
    },
    {
      en: 'only',
      ru: 'только, лишь',
    },
    {
      en: 'pocket',
      ru: 'карман',
    },
    {
      en: 'alone',
      ru: 'один, одинокий',
    },
    {
      en: 'garden',
      ru: 'сад',
    },
    {
      en: 'corner',
      ru: 'угол',
    },
    {
      en: 'incorrect',
      ru: 'неправильный',
    },
    {
      en: 'behind',
      ru: 'позади, за',
    },
    {
      en: 'yard',
      ru: 'двор',
    },
    {
      en: 'unusual',
      ru: 'необычный',
    },
    {
      en: 'motivating',
      ru: 'мотивирующий',
    },
    {
      en: 'lonely',
      ru: 'одинокий',
    },
    {
      en: 'fence',
      ru: 'забор',
    },
    {
      en: 'homemade',
      ru: 'домашний, домашнего изготовления',
    },
    {
      en: 'sooner',
      ru: 'скорее',
    },
    {
      en: 'meeting',
      ru: 'встреча',
    },
    {
      en: 'by',
      ru: 'по, у, к, мимо, на',
    },
    {
      en: 'topic',
      ru: 'тема',
    },
    {
      en: 'a bit',
      ru: 'немного, чуть-чуть',
    },
    {
      en: 'ground',
      ru: 'земля(под ногами)',
    },
    {
      en: 'pie',
      ru: 'пирог',
    },
    {
      en: 'parcel',
      ru: 'посылка',
    },
    {
      en: 'kindness',
      ru: 'доброта',
    },
    {
      en: 'happiness',
      ru: 'счастье',
    },
    {
      en: 'bill',
      ru: 'счёт',
    },
    {
      en: 'chance',
      ru: 'шанс',
    },
    {
      en: 'accident',
      ru: 'происшествие, авария',
    },
    {
      en: 'criminal',
      ru: 'преступник',
    },
    {
      en: 'view',
      ru: 'вид, зрение',
    },
    {
      en: 'donkey',
      ru: 'осёл',
    },
    {
      en: 'knowledge',
      ru: 'знания',
    },
    {
      en: 'several',
      ru: 'несколько',
    },
    {
      en: 'circus',
      ru: 'цирк',
    },
    {
      en: 'tasty',
      ru: 'вкусный',
    },
    {
      en: 'delicious',
      ru: 'очень вкусный, восхитительный',
    },
    {
      en: 'mostly(mainly)',
      ru: 'в основном',
    },
    {
      en: 'fashinable',
      ru: 'модный',
    },
    {
      en: 'speech',
      ru: 'речь',
    },
    {
      en: 'between',
      ru: 'между',
    },
    {
      en: 'just',
      ru: 'просто, лишь, справедливый',
    },
  ];
  
  console.log('WORDS__ARRAY ' + WORDS__ARRAY.length);
  
  const template = document.querySelector('#template-words').content.querySelector('.words__item');
  const wordsContent = document.querySelector('.words__items');
  const btn = document.querySelector('#words__btn');
  const result = document.querySelector('.result');
  const start = document.querySelector('#words__start');
  
  const renderWords = function (words, id, lang) {
    let wordsElement = template.cloneNode(true);
    let wordsSpan = wordsElement.querySelectorAll('.words__label > span');
    let wordsInputs = wordsElement.querySelectorAll('.words__input');
  
    let howSort = Math.floor(Math.random() * (1 - 0 + 1) + 0);
  
    // console.log('howsort ' + howSort);
    // console.log('lang ' + lang);
  
    wordsElement.querySelector('.words__guess').textContent = words;
  
    randomNumberSmall(0, WORDS__ARRAY.length - 1, 3, id);
  
    numbersSmall.push(id);
    if (howSort === 0) {
      numbersSmall.sort((a, b) => a - b);
    }
    if (howSort === 1) {
      numbersSmall.sort((a, b) => b - a);
    }
    // console.log(numbersSmall);
  
    if (lang === 'en') {
      for (let i = 0; i < 4; i++) {
        wordsInputs[i].name = WORDS__ARRAY[id].en;
        wordsInputs[i].value = numbersSmall[i];
      }
      for (let i = 0; i < 4; i++) {
        wordsSpan[i].textContent = WORDS__ARRAY[numbersSmall[i]].ru;
      }
    }
    if (lang === 'ru') {
      for (let i = 0; i < 4; i++) {
        wordsInputs[i].name = WORDS__ARRAY[id].ru;
        wordsInputs[i].value = numbersSmall[i];
      }
      for (let i = 0; i < 4; i++) {
        wordsSpan[i].textContent = WORDS__ARRAY[numbersSmall[i]].en;
      }
    }
  
    return wordsElement;
  };
  
  const renderStart = (value, lang) => {
    let fragment = document.createDocumentFragment();
    if (lang === 'en') {
      for (let i = 0; i < value; i++) {
        fragment.appendChild(renderWords(WORDS__ARRAY[numbers[i]].en, numbers[i], 'en'));
      }
    }
    if (lang === 'ru') {
      for (let i = 0; i < value; i++) {
        fragment.appendChild(renderWords(WORDS__ARRAY[numbers[i]].ru, numbers[i], 'ru'));
      }
    }
    if (lang === 'all') {
      for (let i = 0; i < value; i++) {
        if (i % 2 === 0) {
          fragment.appendChild(renderWords(WORDS__ARRAY[numbers[i]].ru, numbers[i], 'ru'));
        }
        if (i % 2 === 1) {
          fragment.appendChild(renderWords(WORDS__ARRAY[numbers[i]].en, numbers[i], 'en'));
        }
      }
    }
  
    wordsContent.appendChild(fragment);
  };
  
  function getResult() {
    let check = wordsContent.querySelectorAll('.words__input:checked');
    let noCheck = wordsContent.querySelectorAll('.words__input:not(:checked)');
    let resultNumber = 0;
    const choice = document.querySelector('.words__choice:checked');
  
    noCheck.forEach((el) => {
      el.dataset.result = '';
    });
  
    numbers.forEach((el, id) => {
      console.log(el + ' ' + check[id].value);
      if (el == check[id].value) {
        resultNumber++;
        check[id].dataset.result = 'correctly';
      } else {
        check[id].dataset.result = 'mistake';
      }
    });
  
    result.textContent = 'Ваш результат: ' + resultNumber + ' из ' + choice.value;
  }
  
  const numbers = [];
  
  const randomNumberBig = (min, max, count) => {
    if (max - min + 1 < count) {
      min = 0;
      max = 1;
      count = 1;
    }
  
    while (numbers.length < count) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    console.log('numbers ' + numbers);
    return numbers;
  };
  
  let numbersSmall = [];
  const randomNumberSmall = (min, max, count, currentValue) => {
    numbersSmall = [];
    if (max - min + 1 < count) {
      min = 0;
      max = 1;
      count = 1;
    }
  
    // console.log('currentValue ' + currentValue);
    while (numbersSmall.length < count) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      if (randomNumber === currentValue) {
        console.log(randomNumber + '!!!!!!!!!!!' + currentValue);
        continue;
      }
      if (!numbersSmall.includes(randomNumber)) {
        numbersSmall.push(randomNumber);
      }
    }
    // console.log('45 words-random.js numbersSmall ' + numbersSmall);
    return numbersSmall;
  };
  
  let span;
  let itemArr;
  
  start.addEventListener('click', () => {
    const testing = document.querySelector('.words__choose');
    const choice = document.querySelector('.words__choice:checked');
    const language = document.querySelector('.words__languages:checked');
  
    randomNumberBig(0, WORDS__ARRAY.length - 1, choice.value);
    renderStart(choice.value, language.value, numbers);
  
    testing.classList.add('visually-hidden');
    btn.classList.remove('visually-hidden');
  
    span = wordsContent.querySelectorAll('.words__guess');
    itemArr = wordsContent.querySelectorAll('.words__item');
  
    return choice;
  });
  
  btn.addEventListener('click', () => {
    getResult();
  });
  
}
