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
      ru: 'Мне казалось, что я был прав?',
      en: 'It seemed to me that I was right',
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

      enTwo: 'weak ',

      ruTwo: 'слабый',

    },

    {

      enTr: '[rəʊd]',

      enOne: 'road',

      ruOne: 'дорога',

      enTwo: 'rode ',

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

      enTwo: 'knew ',

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
