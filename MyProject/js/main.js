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
      en: 'I swam in the sea tomorrow',
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

      ru: 'Ей нравится классическая музыка',

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

      ru: 'Мой младший брат думает так',

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

      en: 'This men are disappointed',

      tr: '[ðɪs] [mɛn] [ɑː] [ˌdɪsəˈpɔɪntɪd]',

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

      ru: 'Это неинформативное видое',

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

      ru: 'Церковь очень красивя',

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
      default:
        languageQuestion = 'en';
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
  
  //includes offers1/offers1-getresult.js
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

if (document.querySelector('#template-homophone') !== null) {
  try {
    document.querySelector('.menu__link[href="homophone.html"]').dataset.current = 'true';
  } catch {
    console.log('.menu__link[href="homophone.html"] - не найдено');
  }

  const HOMOPHONE_ARRAY = [

    {

      enTr: '[biː]',

      enOne: 'be',

      ruOne: 'быть',

      enTwo: 'bee',

      ruTwo: 'пчела',

    },

    {

      enTr: '[miːt]',

      enOne: 'meat',

      ruOne: 'мясо',

      enTwo: 'meet',

      ruTwo: 'встречать',

    },

    {

      enTr: '[teɪl]',

      enOne: 'tail',

      ruOne: 'хвост',

      enTwo: 'tale',

      ruTwo: 'сказка',

    },

    {

      enTr: '[fiːt]',

      enOne: 'feat',

      ruOne: 'подвиг',

      enTwo: 'feet',

      ruTwo: 'нога',

    },

    {

      enTr: '[rɪˈsiːt]',

      enOne: 'receipt',

      ruOne: 'получение',

      enTwo: 'reseat',

      ruTwo: 'ряды',

    },

    {

      enTr: '[aɪ]',

      enOne: 'eye',

      ruOne: 'глаз',

      enTwo: 'I',

      ruTwo: 'я',

    },

    {

      enTr: '[pleɪn]',

      enOne: 'plain',

      ruOne: 'обычный',

      enTwo: 'plane',

      ruTwo: 'самолет',

    },

    {

      enTr: '[ðeə]',

      enOne: 'their',

      ruOne: 'их',

      enTwo: 'there',

      ruTwo: 'там',

    },

    {

      enTr: '[faɪnd]',

      enOne: 'find',

      ruOne: 'найти',

      enTwo: 'fined',

      ruTwo: 'оштрафованный',

    },

    {

      enTr: '[səʊl]',

      enOne: 'sole',

      ruOne: 'подошва',

      enTwo: 'soul',

      ruTwo: 'душа',

    },

    {

      enTr: '[biːn]',

      enOne: 'bean',

      ruOne: 'фасоль',

      enTwo: 'been',

      ruTwo: 'быть',

    },

    {

      enTr: '[rɪŋ]',

      enOne: 'ring',

      ruOne: 'кольцо',

      enTwo: 'wring',

      ruTwo: 'выжимать',

    },

    {

      enTr: '[tuː]',

      enOne: 'to',

      ruOne: 'к',

      enTwo: 'two',

      ruTwo: 'два',

    },

    {

      enTr: '[heə]',

      enOne: 'hair',

      ruOne: 'волосы',

      enTwo: 'hare',

      ruTwo: 'заяц',

    },

    {

      enTr: '[steə]',

      enOne: 'stair',

      ruOne: 'лестницы',

      enTwo: 'stare',

      ruTwo: 'пялиться',

    },

    {

      enTr: '[baɪ]',

      enOne: 'buy',

      ruOne: 'покупать',

      enTwo: 'by',

      ruTwo: 'по',

    },

    {

      enTr: '[raɪt]',

      enOne: 'right',

      ruOne: 'право',

      enTwo: 'write',

      ruTwo: 'писать',

    },

    {

      enTr: '[weə]',

      enOne: 'wear',

      ruOne: 'носить',

      enTwo: 'where',

      ruTwo: 'где',

    },

    {

      enTr: '[həʊl]',

      enOne: 'hole',

      ruOne: 'дыра',

      enTwo: 'whole',

      ruTwo: 'весь',

    },

    {

      enTr: '[reɪn]',

      enOne: 'reign',

      ruOne: 'правление',

      enTwo: 'rein',

      ruTwo: 'сдерживать',

    },

    {

      enTr: '[wiːk]',

      enOne: 'week',

      ruOne: 'неделя',

      enTwo: 'weak',

      ruTwo: 'слабый',

    },

    {

      enTr: '[rəʊd]',

      enOne: 'road',

      ruOne: 'дорога',

      enTwo: 'rode',

      ruTwo: 'ехал',

    },

    {

      enTr: '[wʊd]',

      enOne: 'wood',

      ruOne: 'древесина',

      enTwo: 'would',

      ruTwo: 'бы',

    },

    {

      enTr: '[meɪd]',

      enOne: 'made',

      ruOne: 'сделал',

      enTwo: 'maid',

      ruTwo: 'горничная',

    },

    {

      enTr: '[θrəʊn]',

      enOne: 'throne',

      ruOne: 'трон',

      enTwo: 'thrown',

      ruTwo: 'кинуть',

    },

    {

      enTr: '[hɪə]',

      enOne: 'hear',

      ruOne: 'слышать',

      enTwo: 'here',

      ruTwo: 'здесь',

    },

    {

      enTr: '[seɪl]',

      enOne: 'sail',

      ruOne: 'парус',

      enTwo: 'sale',

      ruTwo: 'продажа',

    },

    {

      enTr: '[nɪt]',

      enOne: 'knit',

      ruOne: 'вязать',

      enTwo: 'nit',

      ruTwo: 'гнида',

    },

    {

      enTr: '[njuː]',

      enOne: 'new',

      ruOne: 'новый',

      enTwo: 'knew',

      ruTwo: 'знал',

    },

    {

      enTr: '[weɪ]',

      enOne: 'way',

      ruOne: 'путь',

      enTwo: 'weigh',

      ruTwo: 'взвесить',

    },

  ];

  

  console.log(HOMOPHONE_ARRAY.length);

  
  const template = document.querySelector('#template-homophone').content.querySelector('.homophone__item');
  const homophoneContent = document.querySelector('.homophone__items');
  const btn = document.querySelector('#homophone__btn');
  const result = document.querySelector('.result');
  const start = document.querySelector('#homophone__start');
  
  const render = function (question, lengthOne, lengthTwo) {
    let Element = template.cloneNode(true);
    console.log(question);
  
    Element.querySelector('.homophone__span').textContent = question;
    Element.querySelector('.homophone__input--one').setAttribute('maxlength', `${lengthOne}`);
    Element.querySelector('.homophone__input--two').setAttribute('maxlength', `${lengthTwo}`);
    return Element;
  };
  
  const renderStart = (value) => {
    let fragment = document.createDocumentFragment();
  
    for (let i = 0; i < value; i++) {
      fragment.append(
        render(
          HOMOPHONE_ARRAY[randomNumberArr[i]].enTr,
          HOMOPHONE_ARRAY[randomNumberArr[i]].enOne.length,
          HOMOPHONE_ARRAY[randomNumberArr[i]].enTwo.length
        )
      );
    }
  
    homophoneContent.append(fragment);
  };
  
  function getResult(value) {
    let checkOne = homophoneContent.querySelectorAll('.check--one');
    let checkTwo = homophoneContent.querySelectorAll('.check--two');
    let checkEmptyOne = 0;
    let checkEmptyTwo = 0;
    let finalEmpty = 0;
    let newCheckOne = [];
    let newCheckTwo = [];
    let resultNumber = value;
    let strOne;
    let strTwo;
    let enWordOne;
    let enWordTwo;
  
    for (let i = 0; i < value; i++) {
      strOne = inputOne[i].value;
      strTwo = inputTwo[i].value;
      if (strOne == null || strOne.length == 0) {
        checkEmptyOne++;
        newCheckOne.push(i);
      }
      if (strTwo == null || strTwo.length == 0) {
        checkEmptyTwo++;
        newCheckTwo.push(i);
      }
    }
    if (checkEmptyOne > 0) {
      do {
        checkEmptyOne--;
        finalEmpty++;
        inputOne[newCheckOne[checkEmptyOne]].dataset.result = 'empty';
        inputOne[newCheckOne[checkEmptyOne]].placeholder = 'Поле пустое, введите значение';
      } while (checkEmptyOne);
    }
    if (checkEmptyTwo > 0) {
      do {
        checkEmptyTwo--;
        finalEmpty++;
        inputTwo[newCheckTwo[checkEmptyTwo]].dataset.result = 'empty';
        inputTwo[newCheckTwo[checkEmptyTwo]].placeholder = 'Поле пустое, введите значение';
      } while (checkEmptyTwo);
    }
    if (finalEmpty > 0) {
      return console.log(finalEmpty);
    }
  
    for (let i = 0; i < value; i++) {
      strOne = inputOne[i].value;
      strTwo = inputTwo[i].value;
  
      enWordOne = HOMOPHONE_ARRAY[randomNumberArr[i]].enOne;
      enWordTwo = HOMOPHONE_ARRAY[randomNumberArr[i]].enTwo;
      if (enWordOne === strOne) {
        inputOne[i].dataset.result = 'correctly';
        checkOne[i].textContent = '+ : ' + enWordOne + ' - ' + HOMOPHONE_ARRAY[randomNumberArr[i]].ruOne;
      }
      if (enWordTwo === strTwo) {
        inputTwo[i].dataset.result = 'correctly';
        checkTwo[i].textContent = '+ : ' + enWordTwo + ' - ' + HOMOPHONE_ARRAY[randomNumberArr[i]].ruTwo;
      }
      if (enWordOne !== strOne) {
        inputOne[i].dataset.result = 'mistake';
        checkOne[i].textContent = '- : ' + enWordOne + ' - ' + HOMOPHONE_ARRAY[randomNumberArr[i]].ruOne;
      }
      if (enWordTwo !== strTwo) {
        inputTwo[i].dataset.result = 'mistake';
        checkTwo[i].textContent = '- : ' + enWordTwo + ' - ' + HOMOPHONE_ARRAY[randomNumberArr[i]].ruTwo;
      }
      if ((enWordOne !== strOne && enWordTwo !== strTwo) || enWordOne !== strOne || enWordTwo !== strTwo) {
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
  let inputOne;
  let inputTwo;
  
  start.addEventListener('click', () => {
    let homophone = document.querySelector('.homophone__choose');
    choice = document.querySelector('.homophone__choice:checked');
  
    generateRandomNumbers(0, HOMOPHONE_ARRAY.length - 1, choice.value);
    renderStart(choice.value);
  
    homophone.classList.add('visually-hidden');
    btn.classList.remove('visually-hidden');
  
    span = homophoneContent.querySelectorAll('.homophone__span');
    inputOne = homophoneContent.querySelectorAll('.homophone__input--one');
    inputTwo = homophoneContent.querySelectorAll('.homophone__input--two');
  
    return choice;
  });
  
  btn.addEventListener('click', () => {
    getResult(choice.value);
  });
  
}

if (document.querySelector('#template-antonyms') !== null) {
  try {
    document.querySelector('.menu__link[href="antonyms.html"]').dataset.current = 'true';
  } catch {
    console.log('.menu__link[href="antonyms.html"] - не найдено');
  }

  const ANTONYMS_ARRAY = [

    {

      enOne: 'wide',

      enTwo: 'narrow',

      ruOne: 'широкий',

      ruTwo: 'узкий',

    },

    {

      enOne: 'Remember',

      enTwo: 'Forget',

      ruOne: 'запомнить',

      ruTwo: 'забыть',

    },

    {

      enOne: 'healthy',

      enTwo: 'ill',

      ruOne: 'здоровый',

      ruTwo: 'больной',

    },

    {

      enOne: 'poor',

      enTwo: 'rich',

      ruOne: 'бедный',

      ruTwo: 'богатый',

    },

    {

      enOne: 'optimist',

      enTwo: 'essimist',

      ruOne: 'оптимист',

      ruTwo: 'пессимист',

    },

    {

      enOne: 'expensive',

      enTwo: 'cheap',

      ruOne: 'дорого',

      ruTwo: 'дешево',

    },

    {

      enOne: 'empty',

      enTwo: 'full',

      ruOne: 'пустой',

      ruTwo: 'полный',

    },

    {

      enOne: 'difficult, hard',

      enTwo: 'easy',

      ruOne: 'трудный',

      ruTwo: 'легкий',

    },

    {

      enOne: 'different',

      enTwo: 'similar',

      ruOne: 'разный',

      ruTwo: 'схожий',

    },

    {

      enOne: 'fast, quick',

      enTwo: 'slow',

      ruOne: 'быстрый',

      ruTwo: 'медленный',

    },

    {

      enOne: 'clever, smart',

      enTwo: 'stupid',

      ruOne: 'умный',

      ruTwo: 'глупый, тупой',

    },

    {

      enOne: 'correct',

      enTwo: 'incorrect, wrong',

      ruOne: 'правильный',

      ruTwo: 'неправильный',

    },

    {

      enOne: 'deep',

      enTwo: 'shallow',

      ruOne: 'глубокий',

      ruTwo: 'мелкий',

    },

    {

      enOne: 'crazy',

      enTwo: 'reasonable, sensible',

      ruOne: 'сумасшедший',

      ruTwo: 'разумный, здравый',

    },

    {

      enOne: 'exact, precise',

      enTwo: 'inaccurate, inexact',

      ruOne: 'точный',

      ruTwo: 'неточный',

    },

    {

      enOne: 'dry',

      enTwo: 'wet',

      ruOne: 'сухой',

      ruTwo: 'мокрый',

    },

    {

      enOne: 'frequent',

      enTwo: 'rare',

      ruOne: 'частый',

      ruTwo: 'редкий',

    },

    {

      enOne: 'first',

      enTwo: 'last',

      ruOne: 'первый',

      ruTwo: 'последний',

    },

    {

      enOne: 'funny',

      enTwo: 'serious',

      ruOne: 'смешной, забавный',

      ruTwo: 'серьезный',

    },

    {

      enOne: 'accurate',

      enTwo: 'inaccurate',

      ruOne: 'точный',

      ruTwo: 'неточный',

    },

    {

      enOne: 'busy',

      enTwo: 'free',

      ruOne: 'занятый',

      ruTwo: 'свободный',

    },

    {

      enOne: 'calm, quiet',

      enTwo: 'noisy, excited',

      ruOne: 'спокойный, тихий ',

      ruTwo: 'шумный, взволнованный',

    },

    {

      enOne: 'cold, cool',

      enTwo: 'hot, warm',

      ruOne: 'холодный, прохладный',

      ruTwo: 'горячий, теплый',

    },

    {

      enOne: 'early',

      enTwo: 'late',

      ruOne: 'ранний',

      ruTwo: 'поздний',

    },

    {

      enOne: 'dead',

      enTwo: 'alive',

      ruOne: 'мертвый',

      ruTwo: 'живой',

    },

    {

      enOne: 'front',

      enTwo: 'back',

      ruOne: 'передний',

      ruTwo: 'задний',

    },

    {

      enOne: 'active',

      enTwo: 'inactive, passive',

      ruOne: 'активный',

      ruTwo: 'пассивный, бездействующий',

    },

    {

      enOne: 'big, large',

      enTwo: 'little, small',

      ruOne: 'большой',

      ruTwo: 'маленький',

    },

    {

      enOne: 'clean',

      enTwo: 'dirty',

      ruOne: 'чистый',

      ruTwo: 'грязный',

    },

    {

      enOne: 'attentive',

      enTwo: 'inattentive',

      ruOne: 'внимательный',

      ruTwo: 'невнимательный',

    },

    {

      enOne: 'brave',

      enTwo: 'cowardly',

      ruOne: 'храбрый',

      ruTwo: 'трусливый',

    },

    {

      enOne: 'terrible',

      enTwo: 'excellent',

      ruOne: 'ужасный',

      ruTwo: 'отличный',

    },

    {

      enOne: 'comfortable',

      enTwo: 'uncomfortable',

      ruOne: 'удобный',

      ruTwo: 'неудобный',

    },

    {

      enOne: 'best',

      enTwo: 'worst',

      ruOne: 'лучший',

      ruTwo: 'худший',

    },

    {

      enOne: 'tasty',

      enTwo: 'tasteless',

      ruOne: 'вкусный',

      ruTwo: 'безвкусный',

    },

    {

      enOne: 'educated',

      enTwo: 'uneducated',

      ruOne: 'образованный',

      ruTwo: 'необразованный',

    },

    {

      enOne: 'careful',

      enTwo: 'careless',

      ruOne: 'осторожный',

      ruTwo: 'беспечный',

    },

    {

      enOne: 'cruel',

      enTwo: 'kind',

      ruOne: 'жестокий',

      ruTwo: 'добрый',

    },

    {

      enOne: 'dangerous',

      enTwo: 'safe',

      ruOne: 'опасный',

      ruTwo: 'безопасный',

    },

    {

      enOne: 'beautiful',

      enTwo: 'ugly',

      ruOne: 'красивый',

      ruTwo: 'безобразный',

    },

    {

      enOne: 'cheerful',

      enTwo: 'gloomy',

      ruOne: 'радостный',

      ruTwo: 'мрачный',

    },

    {

      enOne: 'fresh',

      enTwo: 'stale',

      ruOne: 'свежий',

      ruTwo: 'несвежий',

    },

    {

      enOne: 'friendly',

      enTwo: 'unfriendly',

      ruOne: 'дружелюбный',

      ruTwo: 'недружелюбный',

    },

    {

      enOne: 'foreign',

      enTwo: 'domestic, local',

      ruOne: 'иностранный',

      ruTwo: 'отечественный, местный',

    },

    {

      enOne: 'fair, just',

      enTwo: 'unfair, unjust',

      ruOne: 'справедливый',

      ruTwo: 'несправедливый',

    },

    {

      enOne: 'far',

      enTwo: 'near',

      ruOne: 'далекий',

      ruTwo: 'близкий',

    },

    {

      enOne: 'even',

      enTwo: 'uneven',

      ruOne: 'ровный',

      ruTwo: 'неровный',

    },

    {

      enOne: 'stable',

      enTwo: 'unstable',

      ruOne: 'устойчивый',

      ruTwo: 'неустойчивый',

    },

    {

      enOne: 'decent',

      enTwo: 'indecent',

      ruOne: 'приличный',

      ruTwo: 'неприличный',

    },

    {

      enOne: 'faithful',

      enTwo: 'unfaithful',

      ruOne: 'верный',

      ruTwo: 'неверный',

    },

  ];

  

  console.log(ANTONYMS_ARRAY.length);

  
  const template = document.querySelector('#template-antonyms').content.querySelector('.antonyms__item');
  const antonymsContent = document.querySelector('.antonyms__items');
  const btn = document.querySelector('#antonyms__btn');
  const result = document.querySelector('.result');
  const start = document.querySelector('#antonyms__start');
  
  const render = function (question, length) {
    let Element = template.cloneNode(true);
    console.log(question);
  
    Element.querySelector('.antonyms__span').textContent = question;
    Element.querySelector('.antonyms__input').setAttribute('maxlength', `${length}`);
    return Element;
  };
  
  const renderStart = (value) => {
    let fragment = document.createDocumentFragment();
  
    for (let i = 0; i < value; i++) {
      fragment.append(render(ANTONYMS_ARRAY[randomNumberArr[i]].enOne, ANTONYMS_ARRAY[randomNumberArr[i]].enTwo.length));
    }
  
    antonymsContent.append(fragment);
  };
  
  function getResult(value) {
    var check = antonymsContent.querySelectorAll('.check');
    var str;
    let j = 0;
    let newCheck = [];
    let resultNumber = value;
    let currentValue;
    for (let i = 0; i < value; i++) {
      str = input[i].value;
      currentValue = ANTONYMS_ARRAY[randomNumberArr[i]].enTwo;
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
    for (let i = 0; i < value; i++) {
      str = input[i].value;
      currentValue = ANTONYMS_ARRAY[randomNumberArr[i]].enTwo;
  
      if (currentValue === str) {
        input[i].dataset.result = 'correctly';
        check[i].textContent = '+';
      }
      if (currentValue !== str) {
        input[i].dataset.result = 'mistake';
        check[i].textContent = '- : ' + currentValue;
        resultNumber--;
      }
    }
    result.textContent = 'Ваш результат: ' + resultNumber + ' из ' + value;
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
    let antonyms = document.querySelector('.antonyms__choose');
    choice = document.querySelector('.antonyms__choice:checked');
  
    generateRandomNumbers(0, ANTONYMS_ARRAY.length - 1, choice.value);
    renderStart(choice.value);
  
    antonyms.classList.add('visually-hidden');
    btn.classList.remove('visually-hidden');
  
    span = antonymsContent.querySelectorAll('.antonyms__span');
    input = antonymsContent.querySelectorAll('.antonyms__input');
  
    return choice;
  });
  
  btn.addEventListener('click', () => {
    getResult(choice.value);
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

if (document.querySelector('#template-quotes') !== null) {
  try {
    document.querySelector('.menu__link[href="guru-quotes.html"]').dataset.current = 'true';
  } catch {
    console.log('.menu__link[href="guru-quotes.html"] - не найдено');
  }

  'use strick';

  

  const GURU_QUOTES_ARRAY = [

    {

      title: 'collectiveResponsibility',

      arr: [

        'Никогда нельзя оскорблять огульно людей, которые не несут ответственности за то, что сделали другие люди',

        'Всегда надо смотреть на человека всех наций, всех паспортов конкретно, что это за человек, нельзя обобщать',

        'Те кто обобщают и говорят о так называемой коллективной ответственности, знайте, вот это и есть преступники и нацисты',

        'Никакой коллективной ответственности не существует ни юридически, ни по мозгу, ни по действиям и те, кто призывают к этому, они себя сразу сливают в одно болото с самыми страшными поступками большевиков, самыми страшными поступками 30-ых годов 20-ого века',

        'Никогда нельзя обобщать',

        'Те кто подленько вякают про коллективную ответственность, у них сознание преступное априори',

        'Кто говорит про любую коллективную ответственность это фашисты, это преступники априори, у них преступное сознание. Потому что они хотят конкретную вину конкретных преступников переложить на невиновных',

        'Никакой коллективной ответственности ни за что быть не может - только индивидуальная и конкретная',

      ],

    },

    {

      title: 'art',

      arr: [

        'Искусство это покрывало над уродством реальной жизни',

        'Искусство должно быть или гениальное, или никак',

        'Искусство над временем',

      ],

    },

    {

      title: 'brain',

      arr: ['Слова кодируют наш мозг', 'Мы это наш мозг', 'Люди различаются по подполям головного мозга'],

    },

    {

      title: 'gratitude',

      arr: [

        'Благодарность - одно из главных хороших качеств человека',

        'Благодарность - главное чувство человека',

        'Неблагодарность - худший недостаток человека',

        'Неблагодарность - самое мерзкое',

      ],

    },

    {

      title: 'human',

      arr: [

        'Человек - это интеллект',

        'Человек - это то, что он знает',

        'Человек - это то, что он есть, в том числе глазами, на что смотрит, что он слышит',

        'Человек - это то, что он смотрит, читает, слушает',

        'Человек стареет, когда он не нужен',

        'Когда человек не нужен, он стареет, умирает, деградирует',

        'Если человек не развивается, он деградирует',

        'Если человек себя не уважает - он по-настоящему и никого не будет уважать',

        'Чем человек более развит, тем он инфантильней и беззащитней, у него теряются инстинкты самосохранения',

        'Мы должны ценить человека не за то, чего в нём нет, а за то, что в нём есть',

        'Огромная ошибка не судить человека по внешности',

        'Человек делает ровно то, что ему позволяют',

        'Когда человек неудачник, он озлоблен',

        'В человеке главное интеллект - и его реализация',

        'Человек, личность - всегда над толпой, над суетой времени',

        'Когда человек не думает, он постоянно ошибается',

      ],

    },

    {

      title: 'tasteAndFate',

      arr: ['Вкус — это судьба', 'Судьба - это характер'],

    },

    {

      title: 'history',

      arr: [

        'Самое главное в истории - понять причинно - следственную связь',

        'История состоит из бреда, который производит толпа',

        'Историю нужно знать, чтобы не повторять ошибок в будущем',

        'В истории всё взаимосвязано',

        'В истории все ходы записаны',

        'В истории комическое и трагическое очень близко',

        'История - это документ плюс логика',

        'Историю нужно знать, чтобы понимать современность и предугадывать будущее',

        'Наука история - это наука молодая',

      ],

    },

    {

      title: 'scienceAndKnowledge',

      arr: [

        'В науке должны существовать документы и логика',

        'Закон науки: Пока не найдём лучшее, работаем с тем, что есть',

        'Метод это и есть наука',

        'Надо исходить из научной картины мира и слушать учёных',

        'Наука - это труд',

        'Научные знания брать сложнее, чем примитивные лозунги',

        'Только знания дают свободу',

      ],

    },

    {

      title: 'civilization',

      arr: [

        'Цивилизация(западная) одна, остальное культура',

        'Цивилизация - это когда внутри живут цивилизованные люди',

        'Степень развития цивилизации - это культура каждого отдельного человека',

        'Аристотель - это культурная основа нашей цивилизации',

      ],

    },

    {

      title: 'scientists',

      arr: [

        'Ученый не должен подчиняться догме',

        'У учёного есть первоисточники и логика',

        'Честь и достоинство учёного - это полная свобода научного поиска',

        'Принимать решения должны учёные',

      ],

    },

    {

      title: 'crowdAndGenius',

      arr: [

        'Гения от ничтожества отличает то, что ничтожество боится держать рядом с собой таланты',

        'Гения может оценить только гений',

        'Толпа, которая не понимает гения, не может его не уничтожить',

        'Толпа всегда предательница',

        'Никогда не ведитесь на толпу',

        'Никогда не верьте толпе, народу',

        'Топла не должна вестить на популистов',

        'Толпа безлика и бессмысленна - только индивид достоин внимания',

      ],

    },

    {

      title: 'envy',

      arr: [

        'Зависть всегда ходит рядом с подлостью',

        'Зависть и подлость должны быть наказуемы',

        'Зависть рождает ущербность',

        'Зависть - это двигатель мировой истории',

        'Смотрите на всё сквозь призму понимания того, что зависть пронизывает людишек: зависть к красоте, таланту, возрасту, расе, положению, деньгам и т.д. Всё прочее - мелочи, которые отвлекают от реальных мотивов поведения приматов',

      ],

    },

    {

      title: 'poverty',

      arr: [

        'Главным должно быть - не родить(это любой алкаш, наркоман, деградант может - и делает), а воспитать',

        'Все проблемы в мировой истории от тех, кто бессмысленно рожает',

        'Больше всего стимулируют рождаемость диктаторские режимы',

        'Эгоизм и ублюдство, когда рожают без денег',

        'Чем примитивнее вид, тем больше у него потомства',

        'Чем ниже уровень развития вида и индивида - тем больше отродья, и тем больше оно примитивнее',

      ],

    },

    {

      title: 'mob',

      arr: [

        'Все проблемы приличных людей именно от невежественного нищебродского быдла',

        'Все беды от черни: именно ее легко обмануть пропаганде, именно она ненавидят мир и красивую жизнь, именно быдло, чернь, нищеброды продают диктаторам своих без толку наделанных детей - чтобы сдать в одетые в униформу банды для разного рода агрессий. А страдают и приличные люди, кто живет по уму',

        'Большинство приматов сами виноваты в своей бедности',

        'Именно ущербному плебсу нравится разруха и агрессия',

        'Быдло не может бороться с быдлом',

        'Чернь должна знать своё место',

      ],

    },

    {

      title: 'personality',

      arr: [

        'Личность является основным двигателем исторического процесса, а не личности, толпа, страшно им завидуют и всячески мешают',

        'Личность - это характер',

        'Личность никогда не может быть рядом с чернью',

        'Личность — это основополагающая константа исторического процесса',

        'Масштаб личности определяется тем, что он может признать свои ошибки',

        'Величие личности, индивида, человека в его индивидуальном, личном, личностном пути',

        'Личность идёт только своим путём',

        'Личность - это интеллект',

      ],

    },

    {

      title: 'bravery',

      arr: ['Вы всё равно без храбрости не сможете хорошо прожить', 'Нужна храбрость'],

    },

    {

      title: 'life',

      arr: [

        'Перестаньте жить лозунгами',

        'Живите фактами, событиями, интеллектом',

        'Нельзя жить как коллектив, как стадо, потому что стадо всегда идёт либо на убой, либо других убивает, надо жить над этим',

        'Надо жить сейчас',

        'Жизнь - это игра',

      ],

    },

    {

      title: 'masterpieces',

      arr: ['Смотрите шедевры', 'Наслаждайтесь только шедеврами'],

    },

    {

      title: 'savingPeople',

      arr: [

        'Спасти всех невозможно, да и не нужно',

        'Нужно спасти только конкретных хороших людей',

        'Человечество спасти нельзя, отдельного человека можно',

      ],

    },

    {

      title: 'newsAndFuture',

      arr: [

        'Не смотрите новости',

        'Только дураки ждут новостей, умные знают новости заранее',

        'Чтобы знать будущее и современность, чтобы понимать, чтобы менять, чтобы не допускать, и так далее, читайте фундаментальные научные труды',

      ],

    },

    {

      title: 'crime',

      arr: [

        'Случайное преступление - это тоже преступление',

        'Ненаказанное преступление влечёт за собой новые преступления',

        'Всё дело в преступнике, а не в преступлении',

      ],

    },

    {

      title: 'callsToAction',

      arr: [

        'Делай что должен, и будь что будет',

        'Смотрите на биографию человека',

        'Бегите от банальных фраз',

        'Доверяйте только тем, кто сразу честно, искренне говорил то, что он думает и не менял свою позицию',

        'Не верьте липовой брутальности, верьте делам и принципиальности',

        'Ведитесь на знание и опыт',

        'Всегда прежде чем что-то сделать: изучать что-то, о чём-то подумать, поставьте вопрос: зачем. И у вас отпадёт масса направлений. Потому что незачем',

      ],

    },

    {

      title: 'ScaryAndMostImportantly',

      arr: [

        'Самое страшное - это знать много',

        'Самое главное - характер, юмор, ирония',

        'Главное - результат',

        'Главное - это влюблённость',

        'Главное - это просвещение, а не вера в мифы',

      ],

    },

    {

      title: 'beautyAndAesthetics',

      arr: [

        'Нет ничего важнее свободы и красоты',

        'Наслаждение в красоте. Наблюдать, чувствовать, ощущать, созидать красоту',

        'Во всём должна быть красота',

        'Красота - это и есть главный смысл',

        'Смысл - это эстетика',

        'Нет эстетики, нет ничего',

      ],

    },

    {

      title: 'evolutionAndRacism',

      arr: [

        'Эволюция - это неравномерный процесс',

        'Эволюция - это главный барьер на пути к расизму',

        'Пусть хоть марсиане прилетят, если они уважают культуру, готовы учиться, я сам их приму и буду должен их обустроить и обеспечить',

        'Прилетит марсианин.Если марсианин будет в Европе, в Париже вести себя прилично, он будет мне такой же брат',

      ],

    },

    {

      title: 'politics',

      arr: ['Если мы не занимаемся политикой, политика занимается нами', 'Политика - это штука убийственная'],

    },

    {

      title: 'opinion',

      arr: [

        'Мнение может быть только у образованного человека, у кого есть факты, логика, методология анализа',

        'У народа не может быть мнения',

      ],

    },

    {

      title: 'tradition',

      arr: ['Главное свойство любой традиции - временность', 'Любая традиция временна'],

    },

    {

      title: 'faith',

      arr: ['Вера всегда подводит', 'Духовность не может ничего изобрести'],

    },

    {

      title: 'books',

      arr: ['Книга - источник знаний', 'Книга - это основа нашей цивилизации', 'Дураку умные книги не помогут'],

    },

    {

      title: 'humor',

      arr: ['Юмор - это свойство повзрослевшего и опытного интеллекта', 'Юмор, сатира, ирония - это зрелость ума'],

    },

    {

      title: 'patriotism',

      arr: [

        'Патриотизм - это говорить правду народу',

        'Патриотизм - это когда люди живут лучше, а не хуже, когда страна процветает, а не нищает, когда есть рост и позитивная перспектива',

        'Патриотизм - это улучшение любимого предмета, а не шизофренические крики о том, как хороши минусы, пороки и провалы',

        'Только те, кто находятся в своей стране, имеют право говорить о патриотизме',

      ],

    },

    {

      title: 'personality',

      arr: [

        'Характер - это врождённое свойство отстаивать свою позицию',

        'Характер - это врождённое свойство чистоплотности, визической и моральной, нравственной, душевной, метафизической',

        'Характер - это преодоление трудностей ради достижения вами поставленной достойной цели',

        'Характер - это врожденное свойство возмущаться всем дурным и отстаивать всё хорошее, доброе',

        'Характер - насыщение информацией и методами, которые помогают бороться с плохим, отстаивать хорошее',

        'Характер - это биография',

        'Характер - это всегда поступок',

      ],

    },

    {

      title: 'leftismAndleftists',

      arr: [

        'Левачество - это ублюдские электросамокаты, которые мешают людям жить, ходить, которые ездят там, где не должны ездить априори',

        'Левачество - это грязные причёски в стиле "я у мамы дурочка"',

        'Левачество - это зимой короткие носки',

        'Левачество - это левацкая цензура, когда нельзя говорить о религиозных терористах',

        'Левачество - это засланные пломбированные вагоны с местечковыми скотами, которые уничтожают страну с великой культурой',

        'Левачество - это так называемые экоактивисты, которые терроризируют людей, мешают им жить и уничтожают шедевры',

        'Левачество - это самое страшное, что может быть',

        'Левачество - это нищета и беззаконие',

        'Леваки помогают собственным врагам - врагам цивилизации',

        'Все виды, все проявления левых - это просто агрессивные бездельники, которые ничего не создают, а только уничтожают то, что создано трудом и талантом других. Именно левые пускают исламских террористов в Европу, именно левые грабят безумными налогами тех, кто работает, именно левые помогают расистам из BLM нападать и грабить людей, именно левые изничтожают эстетиту в искусстве',

        'От левых - одни беды, все подобные движения должны быть запрещены юридически',

      ],

    },

    {

      title: 'stupidityAndIgnorance',

      arr: [

        'Глупость хуже подлости',

        'Глупость есть самая тяжёлая вина, потому что от неё страдают не только её носители, но и окружающие',

        'Невежество - это самая страшная штука, потому что из этого компоста вырастают преступления',

      ],

    },

    {

      title: 'historicalepochs',

      arr: [

        'Не бывает плохой эпохи - бывают позорные людишки, которые делают ее плохой',

        'Времена не настают, их делают люди',

      ],

    },

    {

      title: 'aboutIdiots',

      arr: [

        'Главная проблема нормальных людей - в окружающих идиотах',

        'Главная трагедия умных людей, что вокруг идиоты',

        'Проблема не в недостатке информации, а в идиотах, которые не желают думать самостоятельно, не желают приложить даже минимальное усилие в поиске истины или просто хоть каких-то фактов',

      ],

    },

    {

      title: 'conspiracyTheories',

      arr: [

        'Если бы были теории заговора, то в мире не было бы такого бардака, как сейчас',

        'Все теории заговора держаться на подлоге, неправильном переводе, домыслах, откровенной шизофрении',

      ],

    },

    {

      title: 'various',

      arr: [

        'Правильная философия - это комфортно себя расположить в реальной жизни',

        'Славяне не должны убивать друг друга. Славяне должны объединиться, и спасать всех белых, всю Европу',

        'Как правило, кто больше всех кричит о нравственности и морали, те сами являются безнравственными и аморальными',

        'Когда вы любите, вы живете',

        'Много неправильно знают(Про псевдоинтеллектуалов)',

        'У артиста должен быть путь и биография',

        'Нельзя терять человеческое достоинство в самой страшной ситуации',

        'Профессия правительства - дурить население',

        'Все или сразу, или никогда',

        'Самообразование на первом месте',

        'Чисто не там, где убирают, а там, где не сорят',

        'Дурость с браком - один из главных показателей интеллекта',

        'Трагическое и комическое ходят рука об руку',

        'Когда проблемы в настоящем, нужны мифы о хорошем прошлом',

        'Новое говорят те, кто раньше ошибались',

        'Художник начинается с копирования великих мастеров',

        'Нулей слушают только нули',

        'Основа капитализма - конкуренция',

        'Самый маленький комплекс всегда сильнее самого крупного интеллекта',

        'Любое познание происходит на основе сравнений',

        'Если нет положительных качеств, остается только скромность',

        'Для природы нет ничего ни плохого, ни хорошего, не нравственного, не безнравственного, есть только объективное',

        'Радость - это первый шаг к счастью',

        'Туристы - это мерзость, путешественник - это поэзия',

        'Нужно стремиться к настоящему во всём',

        'Творчество - это тестостерон',

        'Хорошие люди не должны страдать',

        'Надо уметь вступать в правильные союзы и слушать умных людей',

        'Наколка - это дебилизм и плебейство',

        'Закрытые системы быстрее рушатся. (про СССР в том числе)',

        'Те, кто начинают искать себя - это люди конченые, значит они пустые, ничего нет',

        'Против подонков все методы хороши',

        'Если нет таланта, его невозможно развить',

        'Есть те, кто слушают, а есть те, кто слышат',

        'Война мать коррупции',

        'Надежда на хорошее спасает, она нужна',

        'Чем примитивнее материал, тем больше у него аудитории',

        'Русофобия - это желание, чтобы русские люди жили плохо',

        '"Достижения человечества" - это всегда достижения лишь немногих конкретных личностей',

        'Демонстрацией силы могут быть только реальные достижения военного искусства',

        'Не все двуногие люди',

        'Не надо дуростью бороться с дуростью',

        'Беспамятство – страшнейшее из зол',

        'Величие государства - это комфортная, красивая жизнь граждан страны',

        'На пустое место очень легко ложится пропаганда',

        'Форма и есть содержание',

        'Смысл и качество жизни - это эстетика, искусство, культура. Уровень и качество того, что вы смотрите и слушаете',

        'Слова кодируют наши действия',

        'Права человека - это главное достижении европейской цивилизации',

        'За власть надо бороться, это закон истории',

        'Террорист - это человек без интеллекта, которому нечего делать',

        'Россия - культурная дочка Европы',

        'Наполеон - это явление природы',

        'Природа сильнее мракобесия',

        'Если вы идёте к психологу, вам нужен психиатр. А если вам нужен психиатр - вы идиот',

        'Потреблять нужно не новое, а лучшее',

        'Там где тоталитарное общество, там всегда будут катастрофы. Либо спланированные, либо случайные. Потому что нет свободы прессы Потому что наука не развита. Потому что нет цивилизации',

        'Всё надо заслужить, и на всё надо иметь право. На всё в жизни надо иметь право',

        'Страна такая, кто в ней живёт',

      ],

    },

  ];

  

  console.log('GURU_QUOTES_ARRAY.length: ' + GURU_QUOTES_ARRAY.length);

  
  const template = document.querySelector('#template-quotes').content.querySelector('.quotes__item');
  const quotes = document.querySelector('.quotes__items');
  const btn = document.querySelector('#quotes__start');
  
  const randomNumberAll = () => {
    let one;
    let two;
    const randomNumberOne = (min = 0, max = GURU_QUOTES_ARRAY.length - 1) => {
      one = Math.floor(Math.random() * (max - min + 1) + min);
      return one;
    };
  
    const randomNumberTwo = (min = 0, max = GURU_QUOTES_ARRAY[randomNumberOne()].arr.length - 1) => {
      two = Math.floor(Math.random() * (max - min + 1) + min);
      return two;
    };
  
    randomNumberTwo();
  
    return GURU_QUOTES_ARRAY[one].arr[two];
  };
  
  let newArray = [];
  
  var randomNumber = (value) => {
    let getOneNumber;
    let getTwoNumber;
    let one;
    let two;
    newArray = [];
  
    const generateRandomNumbers = (min, max, count) => {
      if (max - min + 1 < count) {
        max = 1;
        min = 0;
        count = 1;
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
  
    getOneNumber = () => {
      const NUMBER_MIN = 0;
      const NUMBER_MAX = GURU_QUOTES_ARRAY.length - 1;
      const NUMBER_COUNT = value;
      return generateRandomNumbers(NUMBER_MIN, NUMBER_MAX, NUMBER_COUNT);
    };
  
    one = getOneNumber();
    console.log('one ' + one);
  
    getTwoNumber = (arrg) => {
      let twoArray = [];
      arrg.forEach((el) => {
        console.log(el);
        const randomNumber = (min = 1, max = GURU_QUOTES_ARRAY[el].arr.length - 1) => {
          return Math.floor(Math.random() * (max - min + 1) + min);
        };
        return twoArray.push(randomNumber());
      });
      return twoArray;
    };
  
    two = getTwoNumber(one);
    console.log('two ' + two);
  
    for (var i = 0; i < value; i++) {
      newArray[i] = GURU_QUOTES_ARRAY[one[i]].arr[two[i]];
    }
  
    return newArray;
  };
  
  
  
  const renderQuotes = function (quotesNew) {
    var quotesElement = template.cloneNode(true);
  
    quotesElement.textContent = quotesNew;
    return quotesElement;
  };
  
  const renderStart = (value) => {
    var fragment = document.createDocumentFragment();
    console.log('inputs.value: ' + value);
  
    let arr = randomNumber(value);
  
    for (const el of arr) {
      fragment.appendChild(renderQuotes(el));
      quotes.appendChild(fragment);
    }
  };
  
  btn.addEventListener('click', () => {
    quotes.textContent = '';
  
    if (quotes.querySelector('li') === null) {
      const inputs = document.querySelector('.quotes__radio:checked');
  
      renderStart(inputs.value);
    }
  });
  
}
