'use strict';
if (document.querySelector('#template-offers') !== null) {
  try {
    document.querySelector('.menu__link[href="index.html"]').dataset.current = 'true';
  } catch {
    console.log('.menu__link[href="index.html"] - не найдено');
  }
  const MAIN_ARRAY = [
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
      en: 'Who will be present there?',
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
      ru: 'Ты хотел пригласить своих друзей на празднование своего дня рождения?',
      en: 'Did you want to invite your friends to your birthday party?',
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
      en: 'I improved my grammar, listening and speaking',
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
      en: 'He said it very quently',
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
      en: 'How did you learn English?',
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
      ru: 'Просто следуй за мной!',
      en: 'Just follow me!',
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
  

  const findChoose = document.querySelector('.offers__choose');

  

  const findBtnStart = document.querySelector('#offers__start');

  

  const findContainerForContent = document.querySelector('.offers__content-container');

  const findQuestion = findContainerForContent.querySelector('.offers__question');

  const findRightAnswer = findContainerForContent.querySelector('.offers__right-answer');

  const findResponseField = findContainerForContent.querySelector('.offers__responsefield');

  const findAnswerArr = findContainerForContent.querySelector('.offers__answer-arr');

  const findContainerBottomWrapper = findContainerForContent.querySelector('.content-container__bottom-wrapper');

  

  const findResults = document.querySelector('.offers__results');

  const findBtnAgain = findResults.querySelector('#offers__btn-again');

  

  const findScore = document.querySelector('.offers__score');

  const findScoreTotal = findScore.querySelector('#offers__score-total');

  const findScoreValue = findScore.querySelector('#offers__score-value');

  

  const findBtnResult = findContainerForContent.querySelector('#offers__btn-check');

  const findBtnNext = findContainerForContent.querySelector('#offers__btn-next');

  

  const findTemplate = document.querySelector('#template-offers').content.querySelector('.offers__word');

  
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
        languageAnswer = 'ru';
    }
  
    let offer = MAIN_ARRAY[offersArray[renderСounters]][languageAnswer].split(' ');
    findQuestion.textContent = MAIN_ARRAY[offersArray[renderСounters]][languageQuestion];
    console.log('offer ' + offer);
    let mistakes = MAIN_ARRAY[offersArrayMistakes[renderMistakesCounter]][languageAnswer]
      .split(' ')
      .concat(MAIN_ARRAY[offersArrayMistakes[renderMistakesCounter + 1]][languageAnswer].split(' '));
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
    const findValueOfQuestions = findChoose.querySelector('.offers__choice:checked');
    const findValueOfLanguage = findChoose.querySelector('.offers__languages:checked');
  
    console.log(findValueOfQuestions.value + ' ' + findValueOfLanguage.value);
  
    findChoose.style.display = 'none';
    findContainerForContent.style.display = 'block';
    findContainerBottomWrapper.style.display = 'block';
  
    findBtnResult.classList.remove('visually-hidden');
  
    valueOfQuestions = findValueOfQuestions.value;
    valueOfQuestionsAll = findValueOfQuestions.value;
    valueOfLanguage = findValueOfLanguage.value;
  
    offersArray = generateRandomNumbers(findValueOfQuestions.value, MAIN_ARRAY);
    console.log('offersArray ' + offersArray);
    offersArrayMistakes = generateRandomMistakes(findValueOfQuestions.value, MAIN_ARRAY, offersArray);
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
  
    if (result === MAIN_ARRAY[offersArray[renderСounters]][languageAnswer]) {
      console.log('ДА');
      findResponseField.style.backgroundColor = 'green';
      scoreValue++;
    } else {
      console.log('НЕТ');
      findResponseField.style.backgroundColor = 'red';
      findRightAnswer.textContent = MAIN_ARRAY[offersArray[renderСounters]][languageAnswer];
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

  
  const OFFERS_A1_58_62 = [
    {
      ru: 'Она не пьёт кофе по утрам',
      en: "She doesn't drink coffee in the mornings",
      tr: '[ʃiː] [dʌznt] [drɪŋk] [ˈkɒfi] [ɪn] [ðə] [ˈmɔːnɪŋz]',
    },
    {
      ru: 'Он не пьёт чай утром',
      en: "He doesn't drink tea in the morning",
      tr: '[hiː] [dʌznt] [drɪŋk] [tiː] [ɪn] [ðə] [ˈmɔːnɪŋ]',
    },
    {
      ru: 'Я не ем слишком много по вечерам',
      en: "I don't eat too much in the evenings",
      tr: '[aɪ] [dəʊnt] [iːt] [tuː] [mʌʧ] [ɪn] [ði] [ˈiːvnɪŋz]',
    },
    {
      ru: 'Я не ем слишком много вечером',
      en: "I don't eat too much in the evening",
      tr: '[aɪ] [dəʊnt] [iːt] [tuː] [mʌʧ] [ɪn] [ði] [ˈiːvnɪŋ]',
    },
    {
      ru: 'Я не понимаю, почему так много людей не ведут здоровый образ жизни',
      en: "I don't understand why so many people don't lead a healthy lifestyle",
      tr: '[aɪ] [dəʊnt] [ˌʌndəˈstænd] [waɪ] [səʊ] [ˈmeni] [ˈpiːpl] [dəʊnt] [liːd] [ə] [ˈhelθi] [ˈlaɪfˌstaɪl]',
    },
    {
      ru: 'Я не езжу на велосипеде каждую неделю',
      en: "I don't go cycling every week",
      tr: '[aɪ] [dəʊnt] [ɡəʊ] [ˈsaɪklɪŋ] [ˈevri] [wiːk]',
    },
    {
      ru: 'Он не работает вечером, потому что проводит время со своей семьёй',
      en: "He doesn't work in the evening because he spends time with his family",
      tr: '[hiː] [dʌznt] [wɜːk] [ɪn] [ði] [ˈiːvnɪŋ] [bɪˈkɒz] [hiː] [spendz] [taɪm] [wɪð] [hɪz] [ˈfæmɪli]',
    },
    {
      ru: 'Мы не встречаемся на выходных',
      en: "We don't meet at the weekends",
      tr: '[wiː] [dəʊnt] [miːt] [æt] [ðə] [ˌwiːkˈendz]',
    },
    {
      ru: 'Я больше не хочу платить за это',
      en: "I don't want to pay for it anymore",
      tr: '[aɪ] [dəʊnt] [wɒnt] [tuː] [peɪ] [fɔːr] [ɪt] [ˌeniˈmɔː]',
    },
    {
      ru: 'Он больше не хочет это слышать',
      en: "He doesn't want to hear it anymore",
      tr: '[hiː] [dʌznt] [wɒnt] [tuː] [hɪər] [ɪt] [ˌeniˈmɔː]',
    },
    {
      ru: 'Он не играет на скрипке, но он играет на гитаре',
      en: "He doesn't play the violin but he plays the guitar",
      tr: '[hiː] [dʌznt] [pleɪ] [ðə] [ˌvaɪəˈlɪn] [bʌt] [hiː] [pleɪz] [ðə] [ɡɪˈtɑː]',
    },
    {
      ru: 'Он не пытается ничего изменить',
      en: "He doesn't try to change anything",
      tr: '[hiː] [dʌznt] [traɪ] [tuː] [ʧeɪnʤ] [ˈeniθɪŋ]',
    },
    {
      ru: 'Он пытается ничего не изменить',
      en: 'He tries to change nothing',
      tr: '[hiː] [traɪz] [tuː] [ʧeɪnʤ] [ˈnʌθɪŋ]',
    },
    {
      ru: 'Я не делаю покупки каждый день',
      en: "I don't do the shopping every day",
      tr: '[aɪ] [dəʊnt] [duː] [ðə] [ˈʃɒpɪŋ] [ˈevri] [deɪ]',
    },
    {
      ru: 'Он не обедает на работе',
      en: "He doesn't have lunch at work",
      tr: '[hiː] [dʌznt] [hæv] [lʌnʧ] [æt] [wɜːk]',
    },
    {
      ru: 'Я не вижу никакой разницы между этими двумя вещами',
      en: "I don't see any difference between these two things",
      tr: '[aɪ] [dəʊnt] [siː] [ˈeni] [ˈdɪfrns] [bɪˈtwiːn] [ðiːz] [tuː] [θɪŋz]',
    },
    {
      ru: 'Я вижу некоторые различия между этими вещами',
      en: 'I see some differences between these things',
      tr: '[aɪ] [siː] [sʌm] [ˈdɪfrnsɪz] [bɪˈtwiːn] [ðiːz] [θɪŋz]',
    },
    {
      ru: 'Он не катается на лыжах',
      en: "He doesn't go skiing",
      tr: '[hiː] [dʌznt] [ɡəʊ] [ˈskiːɪŋ]',
    },
    {
      ru: 'Ей не нравится кататься на сноуборде',
      en: "She doesn't like showboarding",
      tr: '[ʃiː] [dʌznt] [laɪk] [ˈsnəʊˌbɔːdɪŋ]',
    },
    {
      ru: 'Я не делаю покупки каждый день',
      en: "I don't do the shopping every day",
      tr: '[aɪ] [dəʊnt] [duː] [ðə] [ˈʃɒpɪŋ] [ˈevri] [deɪ]',
    },
    {
      ru: 'Я не хожу за покупками каждый день',
      en: "I don't go shopping so often",
      tr: '[aɪ] [dəʊnt] [ɡəʊ] [ˈʃɒpɪŋ] [səʊ] [ˈɒfn]',
    },
    {
      ru: 'Она не работает по выходным',
      en: "She doesn't work at the weekends",
      tr: '[ʃiː] [dʌznt] [wɜːk] [æt] [ðə] [ˌwiːkˈendz]',
    },
    {
      ru: 'Он не ходит в спортзал дважды в неделю',
      en: "He doesn't go to the gym twice a week",
      tr: '[hiː] [dʌznt] [ɡəʊ] [tuː] [ðə] [ʤɪm] [twaɪs] [ə] [wiːk]',
    },
    {
      ru: 'Я не пользуюсь общественным транспортом так часто',
      en: "I don't use public transport so often",
      tr: '[aɪ] [dəʊnt] [juːz] [ˈpʌblɪk] [ˈtrænspɔːt] [səʊ] [ˈɒfn]',
    },
    {
      ru: 'Я не езжу на работу на автобусе',
      en: "I don't go to work by bus",
      tr: '[aɪ] [dəʊnt] [ɡəʊ] [tuː] [wɜːk] [baɪ] [bʌs]',
    },
    {
      ru: 'Я не хожу плавать так часто',
      en: "I don't go swimming so often",
      tr: '[aɪ] [dəʊnt] [ɡəʊ] [ˈswɪmɪŋ] [səʊ] [ˈɒfn]',
    },
    {
      ru: 'Я не интересуюсь этим',
      en: 'I am not interested in it',
      tr: '[aɪ] [æm] [nɒt] [ˈɪntrestɪd] [ɪn] [ɪt]',
    },
    {
      ru: 'Я не в кафе сейчас',
      en: 'I am not a cafe now',
      tr: '[aɪ] [æm] [nɒt] [ə] [ˈkæfeɪ] [naʊ]',
    },
    {
      ru: 'Он совсем не устал',
      en: 'He is not tired at all',
      tr: '[hiː] [ɪz] [nɒt] [taɪəd] [æt] [ɔːl]',
    },
    {
      ru: 'Я не рад этому',
      en: 'I am not happy about it',
      tr: '[aɪ] [æm] [nɒt] [ˈhæpi] [əˈbaʊt] [ɪt]',
    },
    {
      ru: 'Я не в отпуске сейчас',
      en: 'I am not on holiday now',
      tr: '[aɪ] [æm] [nɒt] [ɒn] [ˈhɒlədeɪ] [naʊ]',
    },
    {
      ru: 'Это не распространённая ошибка среди студентов',
      en: "It isn't a common mistake among students",
      tr: '[ɪt] [ˈɪznt] [ə] [ˈkɒmən] [mɪˈsteɪk] [əˈmʌŋ] [ˈstjuːdnts]',
    },
    {
      ru: 'Я думаю, это не лучшее решение этой проблемы',
      en: "I think it isn't the best solution to this problem",
      tr: '[aɪ] [θɪŋk] [ɪt] [ˈɪznt] [ðə] [best] [səˈluːʃn] [tuː] [ðɪs] [ˈprɒbləm]',
    },
    {
      ru: 'Я думаю, это не лучшее решение',
      en: "I think it isn't the best decision",
      tr: '[aɪ] [θɪŋk] [ɪt] [ˈɪznt] [ðə] [best] [dɪˈsɪʒn]',
    },
    {
      ru: 'Он не носитель языка',
      en: "He isn't a native speaker",
      tr: '[hiː] [ˈɪznt] [ə] [ˈneɪtɪv] [ˈspiːkə]',
    },
    {
      ru: 'Я не думаю, что это лучший ответ на тот вопрос',
      en: "I don't think that it the best answer to that question",
      tr: '[aɪ] [dəʊnt] [θɪŋk] [ðæt] [ɪt] [ðə] [best] [ˈɑːnsə] [tuː] [ðæt] [ˈkwesʧən]',
    },
    {
      ru: 'Это не кажется неэффективным',
      en: "It doesn't seem ineffective",
      tr: '[ɪt] [dʌznt] [siːm] [ˌɪnɪˈfektɪv]',
    },
    {
      ru: 'Это совсем не эффективно',
      en: 'It is not effective at all',
      tr: '[ɪt] [ɪz] [nɒt] [ɪˈfektɪv] [æt] [ɔːl]',
    },
    {
      ru: 'Она не хочет там учиться, потому что это не так дешево',
      en: "She doesn't want to study there because it isn't so cheap",
      tr: '[ʃiː] [dʌznt] [wɒnt] [tuː] [ˈstʌdi] [ðeə] [bɪˈkɒz] [ɪt] [ˈɪznt] [səʊ] [ʧiːp]',
    },
    {
      ru: 'Это действительно странно, что он не сожалеет об этом',
      en: "It's really strange that he isn't sorry about it",
      tr: '[ɪts] [ˈrɪəli] [streɪnʤ] [ðæt] [hiː] [ˈɪznt] [ˈsɒri] [əˈbaʊt] [ɪt]',
    },
    {
      ru: 'Она говорит, что они не хотят извиняться за это',
      en: "She says that they don't want to apologize for it",
      tr: '[ʃiː] [sez] [ðæt] [ðeɪ] [dəʊnt] [wɒnt] [tuː] [əˈpɒləʤaɪz] [fɔːr] [ɪt]',
    },
    {
      ru: 'Он не пьёт алкоголь, потому что знает, что это не хорошо для его здоровья',
      en: "He doesn't drink alcohol because he knows that it isn't good for his health",
      tr: '[hiː] [dʌznt] [drɪŋk] [ˈælkəhɒl] [bɪˈkɒz] [hiː] [nəʊz] [ðæt] [ɪt] [ˈɪznt] [ɡʊd] [fɔː] [hɪz] [helθ]',
    },
    {
      ru: 'Он не в бассейне сейчас',
      en: "He isn't in the swimming pool now",
      tr: '[hiː] [ˈɪznt] [ɪn] [ðə] [ˈswɪmɪŋ] [puːl] [naʊ]',
    },
    {
      ru: 'Я думаю, это не лучшая клиника в области',
      en: "I think it isn't the best clinic in the area",
      tr: '[aɪ] [θɪŋk] [ɪt] [ˈɪznt] [ðə] [best] [ˈklɪnɪk] [ɪn] [ði] [ˈeəriə]',
    },
    {
      ru: 'Он не хочет жить там, потому что это очень скучное место',
      en: "He doesn't want to live there because it's a very boring place",
      tr: '[hiː] [dʌznt] [wɒnt] [tuː] [lɪv] [ðeə] [bɪˈkɒz] [ɪts] [ə] [ˈveri] [ˈbɔːrɪŋ] [pleɪs]',
    },
    {
      ru: 'Я не знаю, что делать с этим',
      en: "I don't know what to do with it",
      tr: '[aɪ] [dəʊnt] [nəʊ] [wɒt] [tuː] [duː] [wɪð] [ɪt]',
    },
    {
      ru: 'Она не знает, как добраться до этого места',
      en: "She doesn't know how to get to this place",
      tr: '[ʃiː] [dʌznt] [nəʊ] [haʊ] [tuː] [ɡet] [tuː] [ðɪs] [pleɪs]',
    },
    {
      ru: 'Я не знаю, куда идти',
      en: "I don't know where to go",
      tr: '[aɪ] [dəʊnt] [nəʊ] [weə] [tuː] [ɡəʊ]',
    },
    {
      ru: 'Я не чувствую себя достаточно уверенно',
      en: "I don't feel confident enough",
      tr: '[aɪ] [dəʊnt] [fiːl] [ˈkɒnfɪdnt] [ɪˈnʌf]',
    },
    {
      ru: 'Я не хочу читать эту книгу, потому что она такая скучная',
      en: "I don't want to read this book because it's so boring",
      tr: '[aɪ] [dəʊnt] [wɒnt] [tuː] [riːd] [ðɪs] [bʊk] [bɪˈkɒz] [ɪts] [səʊ] [ˈbɔːrɪŋ]',
    },
    {
      ru: 'Я не хочу читать этот журнал, потому что он такой скучный',
      en: "I don't want to read this magazine because it's so boring",
      tr: '[aɪ] [dəʊnt] [wɒnt] [tuː] [riːd] [ðɪs] [ˌmæɡəˈziːn] [bɪˈkɒz] [ɪts] [səʊ] [ˈbɔːrɪŋ]',
    },
    {
      ru: 'Я не хочу останавливаться, поэтому я делаю больше упражнений, чтобы чувствовать больше уверенности',
      en: "I don't want to stop so I do more exercises to feel more confidence",
      tr: '[aɪ] [dəʊnt] [wɒnt] [tuː] [stɒp] [səʊ] [aɪ] [duː] [mɔːr] [ˈeksəsaɪzɪz] [tuː] [fiːl] [mɔː] [ˈkɒnfɪdns]',
    },
    {
      ru: 'Мой отец не ездит на работу на автобусе',
      en: "My father doesn't go to work by bus",
      tr: '[maɪ] [ˈfɑːðə] [dʌznt] [ɡəʊ] [tuː] [wɜːk] [baɪ] [bʌs]',
    },
    {
      ru: 'Деньги интересуют её',
      en: 'Money interests her',
      tr: '[ˈmʌni] [ˈɪntrests] [hɜː]',
    },
    {
      ru: 'Деньги интересны ей',
      en: 'Money is interesting for her',
      tr: '[ˈmʌni] [ɪz] [ˈɪntrestɪŋ] [fɔː] [hɜː]',
    },
    {
      ru: 'Мой друг не хочет ничего менять в своей жизни',
      en: "My friends doesn't want to change anything in his life",
      tr: '[maɪ] [frendz] [dʌznt] [wɒnt] [tuː] [ʧeɪnʤ] [ˈeniθɪŋ] [ɪn] [hɪz] [laɪf]',
    },
    {
      ru: 'Эта клиника не существует',
      en: "This clinic doesn't exist",
      tr: '[ðɪs] [ˈklɪnɪk] [dʌznt] [ɪɡˈzɪst]',
    },
    {
      ru: 'Эта вещь не приносит ему удовлетворения',
      en: "This thing doesn't bring him satisfaction",
      tr: '[ðɪs] [θɪŋ] [dʌznt] [brɪŋ] [hɪm] [ˌsætɪsˈfækʃn]',
    },
    {
      ru: 'Её одноклассник не разделяет её точку зрения',
      en: "Her classmate doesn't share her point of view",
      tr: '[hɜː] [ˈklɑːsmeɪt] [dʌznt] [ʃeə] [hɜː] [pɔɪnt] [ɒv] [vjuː]',
    },
    {
      ru: 'Мой одногруппник не разделяет мою точку зрения',
      en: "Your classmates doesn't share my point of view",
      tr: '[jɔː] [ˈklɑːsmeɪt] [dʌznt] [ʃeə] [maɪ] [pɔɪnt] [ɒv] [vjuː]',
    },
    {
      ru: 'Мои одноклассники не думают об этом серьёзно',
      en: "My classmates don't think about it seriously",
      tr: '[maɪ] [ˈklɑːsmeɪts] [dəʊnt] [θɪŋk] [əˈbaʊt] [ɪt] [ˈsɪəriəsli]',
    },
    {
      ru: 'Наш директор не свободен в данный момент',
      en: "Our director isn't free at the moment",
      tr: '[ˈaʊə] [daɪˈrektər] [ˈɪznt] [friː] [æt] [ðə] [ˈməʊmənt]',
    },
    {
      ru: 'Их поддержка не так велика',
      en: "Their support isn't so big",
      tr: '[ðeə] [səˈpɔːt] [ˈɪznt] [səʊ] [bɪɡ]',
    },
    {
      ru: 'Это предложение работы не так интересно мне',
      en: "This job offer isn't so interesting for me",
      tr: '[ðɪs] [ʤɒb] [ˈɒfər] [ˈɪznt] [səʊ] [ˈɪntrestɪŋ] [fɔː] [miː]',
    },
    {
      ru: 'Сообщество не очень большое в настоящее время',
      en: "The community isn't very big at present",
      tr: '[ðə] [kəˈmjuːnəti] [ˈɪznt] [ˈveri] [bɪɡ] [æt] [ˈpreznt]',
    },
    {
      ru: 'Я чувствую, что у меня иногда недостаточно уверенности, когда я говорю по-английски, но я работаю над этим',
      en: "I feel that sometimes I don't have enough confidence when I speak English but I work on it",
      tr: '[aɪ] [fiːl] [ðæt] [ˈsʌmtaɪmz] [aɪ] [dəʊnt] [hæv] [ɪˈnʌf] [ˈkɒnfɪdᵊns] [wɛn] [aɪ] [spiːk] [ˈɪŋɡlɪʃ] [bʌt] [aɪ] [wɜːk] [ɒn] [ɪt]',
    },
    {
      ru: 'Он не чувствует себя достаточно уверенно, когда он говорит по-английски',
      en: "He doesn't feel confident enough when he speaks English",
      tr: '[hiː] [dʌznt] [fiːl] [ˈkɒnfɪdᵊnt] [ɪˈnʌf] [wɛn] [hiː] [spiːks] [ˈɪŋɡlɪʃ]',
    },
    {
      ru: 'Я знаю, что многие люди говорят, что время - это деньги, но я думаю, что время - это намного больше, чем деньги, потому что мы не можем вернуть его назад',
      en: "I know that many people say that time is money but I think that time is much more than money because we can't turn it back",
      tr: '[aɪ] [nəʊ] [ðæt] [ˈmɛni] [ˈpiːpᵊl] [seɪ] [ðæt] [taɪm] [ɪz] [ˈmʌni] [bʌt] [aɪ] [θɪŋk] [ðæt] [taɪm] [ɪz] [mʌʧ] [mɔː] [ðæn] [ˈmʌni] [bɪˈkɒz] [wiː] [kɑːnt] [tɜːn] [ɪt] [bæk]',
    },
    {
      ru: 'У него хорошо оплачиваемая работа',
      en: 'He has a well-paid job',
      tr: '[hiː] [hæz] [ə] [wɛl]-[peɪd] [ʤɒb]',
    },
    {
      ru: 'Его работа не такая хорошо оплачиваемая',
      en: "His job isn't so well-paid",
      tr: '[hɪz] [ʤɒb] [ˈɪznt] [səʊ] [wɛl]-[peɪd]',
    },
  ];
  
  console.log(OFFERS_A1_58_62.length);
  
  const OFFERS_A1_63_71 = [
    {
      ru: 'Это развивает наши профессиональные навыки?',
      en: 'Does it develop our professional skills?',
      tr: '[dʌz] [ɪt] [dɪˈveləp] [ˈaʊə] [prəˈfeʃᵊnᵊl] [skɪlz]',
    },
    {
      ru: 'Он ведёт здоровый образ жизни?',
      en: 'Does he lead a healthy lifestyle?',
      tr: '[dʌz] [hiː] [liːd] [ə] [ˈhelθi] [ˈlaɪfˌstaɪl]',
    },
    {
      ru: 'Ты зависишь от своих родителей финансово?',
      en: 'Do you depend on your parents financially?',
      tr: '[duː] [juː] [dɪˈpend] [ɒn] [jɔː] [ˈpeərᵊnts] [faɪˈnænʃᵊli]',
    },
    {
      ru: 'Он финансово зависит от своих родителей?',
      en: 'Does he depends on his parents financially?',
      tr: '[dʌz] [hiː] [dɪˈpendz] [ɒn] [hɪz] [ˈpeərᵊnts] [faɪˈnænʃᵊli]',
    },
    {
      ru: 'Это развивает наше воображение?',
      en: 'Does it develop our imagination?',
      tr: '[dʌz] [ɪt] [dɪˈveləp] [ˈaʊər] [ɪˌmæʤɪˈneɪʃᵊn]',
    },
    {
      ru: 'Ты изучаешь английский самостоятельно?',
      en: 'Do you learn english by yourself?',
      tr: '[duː] [juː] [lɜːn] [ˈɪŋɡlɪʃ] [baɪ] [jɔːˈself]',
    },
    {
      ru: 'Ты знаешь, что я изучаю английский самостоятельно?',
      en: 'Do you know that I learn english by myself?',
      tr: '[duː] [juː] [nəʊ] [ðæt] [aɪ] [lɜːn] [ˈɪŋɡlɪʃ] [baɪ] [maɪˈself]',
    },
    {
      ru: 'Ты знаешь, что она учит английский самостоятельно?',
      en: 'Do you know that she learns english on her own?',
      tr: '[duː] [juː] [nəʊ] [ðæt] [ʃiː] [lɜːnz] [ˈɪŋɡlɪʃ] [ɒn] [hɜːr] [əʊn]',
    },
    {
      ru: 'Она знает, что он изучает английский самостоятельно?',
      en: 'Do you know that he learns english on his own?',
      tr: '[duː] [juː] [nəʊ] [ðæt] [hiː] [lɜːnz] [ˈɪŋɡlɪʃ] [ɒn] [hɪz] [əʊn]',
    },
    {
      ru: 'У тебя такие же результаты?',
      en: 'Do you have the same results?',
      tr: '[duː] [juː] [hæv] [ðə] [seɪm] [rɪˈzʌlts]',
    },
    {
      ru: 'У нас разные результаты?',
      en: 'Do we have different results?',
      tr: '[duː] [wiː] [hæv] [ˈdɪfᵊrᵊnt] [rɪˈzʌlts]',
    },
    {
      ru: 'Ты хочешь путешествовать по миру?',
      en: 'Do you want to travel around the world?',
      tr: '[duː] [juː] [wɒnt] [tuː] [ˈtrævᵊl] [əˈraʊnd] [ðə] [wɜːld]',
    },
    {
      ru: 'Твой брат хочет путешествовать по миру?',
      en: 'Does your brother want to travel around the world?',
      tr: '[dʌz] [jɔː] [ˈbrʌðə] [wɒnt] [tuː] [ˈtrævᵊl] [əˈraʊnd] [ðə] [wɜːld]',
    },
    {
      ru: 'Она хочет путешествовать по стране?',
      en: 'Does she want to travel around the country?',
      tr: '[dʌz] [ʃiː] [wɒnt] [tuː] [ˈtrævᵊl] [əˈraʊnd] [ðə] [ˈkʌntri]',
    },
    {
      ru: 'Ты часто делаешь ошибки, когда говоришь на иностранном языке?',
      en: 'Do you often make mistakes when you speak a foreign language?',
      tr: '[duː] [juː] [ˈɒfᵊn] [meɪk] [mɪˈsteɪks] [wen] [juː] [spiːk] [ə] [ˈfɒrən] [ˈlæŋɡwɪʤ]',
    },
    {
      ru: 'Она часто делает ошибки, когда она говорит по-испански?',
      en: 'Does she often make mistakes when she speaks Spanish?',
      tr: '[dʌz] [ʃiː] [ˈɒfᵊn] [meɪk] [mɪˈsteɪks] [wen] [ʃiː] [spiːks] [ˈspænɪʃ]',
    },
    {
      ru: 'Ты знаешь как ответить на этот вопрос?',
      en: 'Do you know how to answer this question?',
      tr: '[duː] [juː] [nəʊ] [haʊ] [tuː] [ˈɑːnsə] [ðɪs] [ˈkwesʧən]',
    },
    {
      ru: 'Ты знаешь как ответить на мой вопрос?',
      en: 'Do you know how to answer my question?',
      tr: '[duː] [juː] [nəʊ] [haʊ] [tuː] [ˈɑːnsə] [maɪ] [ˈkwesʧən]',
    },
    {
      ru: 'У него в настоящий момент есть какие-либо вопросы?',
      en: 'Does he have any questions at the moment?',
      tr: '[dʌz] [hiː] [hæv] [ˈeni] [ˈkwesʧənz] [æt] [ðə] [ˈməʊmənt]',
    },
    {
      ru: 'Тебя интересуют иностранные языки?',
      en: 'Are you interested in foreign languages?',
      tr: '[ɑː] [juː] [ˈɪntrestɪd] [ɪn] [ˈfɒrən] [ˈlæŋɡwɪʤɪz]',
    },
    {
      ru: 'Иностранные языки интересуют тебя?',
      en: 'Do foreign languages interest you?',
      tr: '[duː] [ˈfɒrən] [ˈlæŋɡwɪʤɪz] [ˈɪntrest] [juː]',
    },
    {
      ru: 'Иностранные языки интересны тебе?',
      en: 'Are foreign languages interesting for you?',
      tr: '[ɑː] [ˈfɒrən] [ˈlæŋɡwɪʤɪz] [ˈɪntrestɪŋ] [fɔː] [juː]',
    },
    { ru: 'Ты действительно шокирован?', en: 'Are you really shocked?', tr: '[ɑː] [juː] [ˈrɪəli] [ʃɒkt]' },
    {
      ru: 'Это для тебя большое достижение?',
      en: 'Is it a big achievement for you?',
      tr: '[ɪz] [ɪt] [ə] [bɪɡ] [əˈʧiːvmənt] [fɔː] [juː]',
    },
    {
      ru: 'Ты действительно уверен в этом?',
      en: 'Are you really sure about it?',
      tr: '[ɑː] [juː] [ˈrɪəli] [ʃɔːr] [əˈbaʊt] [ɪt]',
    },
    { ru: 'Это далеко или близко?', en: 'Is it far or near?', tr: '[ɪz] [ɪt] [fɑːr] [ɔː] [nɪə]' },
    { ru: 'Ты действительно удивлён?', en: 'Are you really surprised?', tr: '[ɑː] [juː] [ˈrɪəli] [səˈpraɪzd]' },
    { ru: 'Это недорогие часы?', en: 'Is it an inexpensive watch?', tr: '[ɪz] [ɪt] [ən] [ˌɪnɪkˈspensɪv] [wɒʧ]' },
    {
      ru: 'Ты гордишься своими достижениями?',
      en: 'Are you proud of your achievements?',
      tr: '[ɑː] [juː] [praʊd] [ɒv] [jɔːr] [əˈʧiːvmənts]',
    },
    {
      ru: 'Он гордится этим успехом?',
      en: 'Is he proud of this success?',
      tr: '[ɪz] [hiː] [praʊd] [ɒv] [ðɪs] [səkˈses]',
    },
    {
      ru: 'Ты гордишься своими успехами?',
      en: 'Are you proud of your successes?',
      tr: '[ɑː] [juː] [praʊd] [ɒv] [jɔː] [səkˈsesɪz]',
    },
    {
      ru: 'Это действительно необходимо сделать завтра?',
      en: 'Is it really necessary to do it tomorrow?',
      tr: '[ɪz] [ɪt] [ˈrɪəli] [ˈnesəsᵊri] [tuː] [duː] [ɪt] [təˈmɒrəʊ]',
    },
    {
      ru: 'Ты действительно устал от этого?',
      en: 'Are you really tired of it?',
      tr: '[ɑː] [juː] [ˈrɪəli] [taɪəd] [ɒv] [ɪt]',
    },
    {
      ru: 'Она действительно устала от этой рутины?',
      en: 'Is she really tired of this routine?',
      tr: '[ɪz] [ʃiː] [ˈrɪəli] [taɪəd] [ɒv] [ðɪs] [ruːˈtiːn]',
    },
    {
      ru: 'Это полезное приложение?',
      en: 'Is it a useful application?',
      tr: '[ɪz] [ɪt] [ə] [ˈjuːsfᵊl] [ˌæplɪˈkeɪʃᵊn]',
    },
    { ru: 'Они рядом с этим местом?', en: 'Are they near this place?', tr: '[ɑː] [ðeɪ] [nɪə] [ðɪs] [pleɪs]' },
    { ru: 'Это слева?', en: 'Is it on the left?', tr: '[ɪz] [ɪt] [ɒn] [ðə] [left]' },
    { ru: 'Это справа?', en: 'Is it on the right?', tr: '[ɪz] [ɪt] [ɒn] [ðə] [raɪt]' },
    {
      ru: 'Это с левой стороны стола?',
      en: 'Is it on the left side of the table?',
      tr: '[ɪz] [ɪt] [ɒn] [ðə] [left] [saɪd] [ɒv] [ðə] [ˈteɪbᵊl]',
    },
    {
      ru: 'Тебе нравятся такого рода шутки?',
      en: 'Do you like this kind of jokes?',
      tr: '[duː] [juː] [laɪk] [ðɪs] [kaɪnd] [ɒv] [ʤəʊks]',
    },
    {
      ru: 'Ты уважаешь такого рода людей?',
      en: 'Do you respect this kind of people?',
      tr: '[duː] [juː] [rɪˈspekt] [ðɪs] [kaɪnd] [ɒv] [ˈpiːpᵊl]',
    },
    { ru: 'Ты часто опаздываешь?', en: 'Are you often late?', tr: '[ɑː] [juː] [ˈɒfᵊn] [leɪt]' },
    { ru: 'Он очень усердно учится?', en: 'Does he study very hard?', tr: '[dʌz] [hiː] [ˈstʌdi] [ˈveri] [hɑːd]' },
    { ru: 'Она очень хорошо танцует?', en: 'Does she dance very well?', tr: '[dʌz] [ʃiː] [dɑːns] [ˈveri] [wel]' },
    {
      ru: 'Это экономический кризис?',
      en: 'Is it an economic crisis?',
      tr: '[ɪz] [ɪt] [ən] [ˌiːkəˈnɒmɪk] [ˈkraɪsɪs]',
    },
    {
      ru: 'Она зарабатывает достаточно денег, чтобы купить дом?',
      en: 'Does she earn enough money to buy a house?',
      tr: '[dʌz] [ʃiː] [ɜːn] [ɪˈnʌf] [ˈmʌni] [tuː] [baɪ] [ə] [haʊs]',
    },
    {
      ru: 'У тебя есть более стабильный доход?',
      en: 'Do you have a more stable income?',
      tr: '[duː] [juː] [hæv] [ə] [mɔː] [ˈsteɪbᵊl] [ˈɪnkʌm]',
    },
    {
      ru: 'Ты специально это делаешь?',
      en: 'Do you do it on purpose?',
      tr: '[duː] [juː] [duː] [ɪt] [ɒn] [ˈpɜːpəs]',
    },
    {
      ru: 'Они специально всё портят?',
      en: 'Do they spoil everything on purpose?',
      tr: '[duː] [ðeɪ] [spɔːɪl] [ˈevriθɪŋ] [ɒn] [ˈpɜːpəs]',
    },
    {
      ru: 'Ты понимаешь, почему это происходит с нами?',
      en: 'Do you understand why it happens to us?',
      tr: '[duː] [juː] [ˌʌndəˈstænd] [waɪ] [ɪt] [ˈhæpᵊnz] [tuː] [ʌs]',
    },
    {
      ru: 'Ты показываешь более хороший результат?',
      en: 'Do you show a better result?',
      tr: '[duː] [juː] [ʃəʊ] [ə] [ˈbetə] [rɪˈzʌlt]',
    },
    {
      ru: 'У тебя последняя модель?',
      en: 'Do you have the latest model?',
      tr: '[duː] [juː] [hæv] [ðə] [ˈleɪtɪst] [ˈmɒdᵊl]',
    },
    {
      ru: 'Полиция контролирует это?',
      en: 'Do the police control it?',
      tr: '[duː] [ðə] [pəˈliːs] [kənˈtrəʊl] [ɪt]',
    },
    {
      ru: 'То приложение кажется очень полезным?',
      en: 'Does that application seem very useful?',
      tr: '[dʌz] [ðæt] [ˌæplɪˈkeɪʃᵊn] [siːm] [ˈveri] [ˈjuːsfᵊl]',
    },
    {
      ru: 'Твой брат всегда так рано встаёт?',
      en: 'Does your brother always get up so early?',
      tr: '[dʌz] [jɔː] [ˈbrʌðər] [ˈɔːlweɪz] [ɡet] [ʌp] [səʊ] [ˈɜːli]',
    },
    {
      ru: 'Этот ребёнок кажется очень талантливым?',
      en: 'Does the child seem very talented?',
      tr: '[dʌz] [ðə] [ʧaɪld] [siːm] [ˈveri] [ˈtæləntɪd]',
    },
    {
      ru: 'Курс кажется эффективным?',
      en: 'Does the course seem effective?',
      tr: '[dʌz] [ðə] [kɔːs] [siːm] [ɪˈfektɪv]',
    },
    {
      ru: 'Эта история кажется очень смешной?',
      en: 'Does this story seem very funny?',
      tr: '[dʌz] [ðɪs] [ˈstɔːri] [siːm] [ˈveri] [ˈfʌni]',
    },
    {
      ru: 'Тот университет предоставляет отличные условия для обучения?',
      en: 'Does that university provide excellent conditions for education?',
      tr: '[dʌz] [ðæt] [ˌjuːnɪˈvɜːsəti] [prəˈvaɪd] [ˈeksᵊlᵊnt] [kənˈdɪʃᵊnz] [fɔːr] [ˌeʤʊˈkeɪʃᵊn]',
    },
    {
      ru: 'Тот мужчина работает водителем такси?',
      en: 'Does that man work as a taxi driver?',
      tr: '[dʌz] [ðæt] [mæn] [wɜːk] [æz] [ə] [ˈtæksi] [ˈdraɪvə]',
    },
    {
      ru: 'Твой учитель указывает на твои ошибки?',
      en: 'Does your teacher point out your mistakes?',
      tr: '[dʌz] [jɔː] [ˈtiːʧə] [pɔɪnt] [aʊt] [jɔː] [mɪˈsteɪks]',
    },
    {
      ru: 'Твой знакомый работает инструктором по фитнесу?',
      en: 'Does your acquaintance work as a fitness instructor?',
      tr: '[dʌz] [jɔːr] [əˈkweɪntᵊns] [wɜːk] [æz] [ə] [ˈfɪtnəs] [ɪnˈstrʌktə]',
    },
    {
      ru: 'Твой знакомый рекомендует это?',
      en: 'Does your acquaintance recommend it?',
      tr: '[dʌz] [jɔːr] [əˈkweɪntᵊns] [ˌrekəˈmend] [ɪt]',
    },
    {
      ru: 'Большинство иммигрантов адаптируются к этим условиям?',
      en: 'Do most immigrants adapt to these conditions?',
      tr: '[duː] [məʊst] [ˈɪmɪɡrənts] [əˈdæpt] [tuː] [ðiːz] [kənˈdɪʃᵊnz]',
    },
    {
      ru: 'Эти иммигранты живут в Америке?',
      en: 'Do these immigrants live in America?',
      tr: '[duː] [ðiːz] [ˈɪmɪɡrənts] [lɪv] [ɪn] [əˈmerɪkə]',
    },
    {
      ru: 'Твой лучший друг разделяет твою точку зрения?',
      en: 'Does your best friend share your point of view?',
      tr: '[dʌz] [jɔː] [best] [frend] [ʃeə] [jɔː] [pɔɪnt] [ɒv] [vjuː]',
    },
    {
      ru: 'Твои друзья разделяют твоё мнение?',
      en: 'Do your friends share your opinion?',
      tr: '[duː] [jɔː] [frendz] [ʃeə] [jɔːr] [əˈpɪnjən]',
    },
    {
      ru: 'Этот мужчина страдает от депрессии?',
      en: 'Does this man suffer from depression?',
      tr: '[dʌz] [ðɪs] [mæn] [ˈsʌfə] [frɒm] [dɪˈpreʃᵊn]',
    },
    {
      ru: 'Эта компания испытывает очень серьёзные трудности?',
      en: 'Does this company experience very serious difficulties?',
      tr: '[dʌz] [ðɪs] [ˈkʌmpəni] [ɪkˈspɪəriəns] [ˈveri] [ˈsɪəriəs] [ˈdɪfɪkᵊltiz]',
    },
    {
      ru: 'Это очень сёрьёзная проблема?',
      en: 'Is it a very serious problem?',
      tr: '[ɪz] [ɪt] [ə] [ˈveri] [ˈsɪəriəs] [ˈprɒbləm]',
    },
    {
      ru: 'Это хороший знак для нас?',
      en: 'Is it a good sign for us?',
      tr: '[ɪz] [ɪt] [ə] [ɡʊd] [saɪn] [fɔːr] [ʌs]',
    },
    { ru: 'Это дорожный знак?', en: 'Is it a road sign?', tr: '[ɪz] [ɪt] [ə] [rəʊd] [saɪn]' },
    { ru: 'Тот мужчина болен?', en: 'Is that man ill?', tr: '[ɪz] [ðæt] [mæn] [ɪl]' },
    { ru: 'Этот путь довольно короткий?', en: 'Is this way quite short?', tr: '[ɪz] [ðɪs] [weɪ] [kwaɪt] [ʃɔːt]' },
    {
      ru: 'История очень интересная?',
      en: 'Is the story very interesting?',
      tr: '[ɪz] [ðə] [ˈstɔːri] [ˈveri] [ˈɪntrestɪŋ]',
    },
    {
      ru: 'Твой начальник против этого решения?',
      en: 'Is your boss against this decision?',
      tr: '[ɪz] [jɔː] [bɒs] [əˈɡenst] [ðɪs] [dɪˈsɪʒᵊn]',
    },
    { ru: 'Уроки бесплатные?', en: 'Are the lessons free?', tr: '[ɑː] [ðə] [ˈlesᵊnz] [friː]' },
    { ru: 'Эта машина надежная?', en: 'Is this car reliable?', tr: '[ɪz] [ðɪs] [kɑː] [rɪˈlaɪəbᵊl]' },
    {
      ru: 'Мальчики в этой группе очень ленивые?',
      en: 'Are the boys in this group very lazy?',
      tr: '[ɑː] [ðə] [bɔɪz] [ɪn] [ðɪs] [ɡruːp] [ˈveri] [ˈleɪzi]',
    },
    {
      ru: 'Эти изменения очень неожиданные для них?',
      en: 'Are these changes very unexpected for them?',
      tr: '[ɑː] [ðiːz] [ˈʧeɪnʤɪz] [ˈveri] [ˌʌnɪkˈspektɪd] [fɔː] [ðem]',
    },
    {
      ru: 'Дом просторный для твоей семьи?',
      en: 'Is the house spacious for your family?',
      tr: '[ɪz] [ðə] [haʊs] [ˈspeɪʃəs] [fɔː] [jɔː] [ˈfæmɪli]',
    },
    {
      ru: 'Образование бесплатное в твоей стране?',
      en: 'Is education free in your country?',
      tr: '[ɪz] [ˌeʤʊˈkeɪʃᵊn] [friː] [ɪn] [jɔː] [ˈkʌntri]',
    },
    {
      ru: 'Эти оценки очень хороши для вас?',
      en: 'Are these grade very good for you?',
      tr: '[ɑː] [ðiːz] [ɡreɪd] [ˈveri] [ɡʊd] [fɔː] [juː]',
    },
    {
      ru: 'Те люди также заинтересованы в этом?',
      en: 'Are those people also interested in it?',
      tr: '[ɑː] [ðəʊz] [ˈpiːpᵊl] [ˈɔːlsəʊ] [ˈɪntrestɪd] [ɪn] [ɪt]',
    },
    {
      ru: 'Эти новости очень удивительны для нас?',
      en: 'Is this news very surprising for you?',
      tr: '[ɪz] [ðɪs] [njuːz] [ˈveri] [səˈpraɪzɪŋ] [fɔː] [juː]',
    },
    {
      ru: 'Та область переполнена туристами?',
      en: 'Is that area overcrowded with tourists?',
      tr: '[ɪz] [ðæt] [ˈeəriə] [ˌəʊvəˈkraʊdɪd] [wɪð] [ˈtʊərɪsts]',
    },
    {
      ru: 'Второй урок тоже бесплатный?',
      en: 'Is the second lesson also free?',
      tr: '[ɪz] [ðə] [ˈsekənd] [ˈlesᵊn] [ˈɔːlsəʊ] [friː]',
    },
    {
      ru: 'Эта оценка довольно высокая для тебя?',
      en: 'Is this mark quite high for you?',
      tr: '[ɪz] [ðɪs] [mɑːk] [kwaɪt] [haɪ] [fɔː] [juː]',
    },
    {
      ru: 'Эта оценка достаточно высокая для тебя?',
      en: 'Is this mark high enough for you?',
      tr: '[ɪz] [ðɪs] [mɑːk] [haɪ] [ɪˈnʌf] [fɔː] [juː]',
    },
    {
      ru: 'Полицейский в этом районе?',
      en: 'Is the policeman in this district?',
      tr: '[ɪz] [ðə] [pəˈliːsmən] [ɪn] [ðɪs] [ˈdɪstrɪkt]',
    },
    {
      ru: 'Стоимость жизни в наши дни намного выше?',
      en: 'Is the cost of living much higher nowadays?',
      tr: '[ɪz] [ðə] [kɒst] [ɒv] [ˈlɪvɪŋ] [mʌʧ] [ˈhaɪə] [ˈnaʊədeɪz]',
    },
    { ru: 'Этот парень очень покладистый?', en: 'Is this guy very easy', tr: '[ɪz] [ðɪs] [ɡaɪ] [ˈveri] [ˈiːzi]' },
    {
      ru: 'Тебе подходит время нашей встречи?',
      en: 'Does the time of our meeting* suit you?',
      tr: '[dʌz] [ðə] [taɪm] [ɒv] [ˈaʊə] [ˈmiːtɪŋ]* [suːt] [juː]',
    },
    { ru: 'Этот костюм подходит тебе?', en: 'Does this suit suit you?', tr: '[dʌz] [ðɪs] [suːt] [suːt] [juː]' },
    {
      ru: 'Твой друг чувствует себя достаточно уверенно, когда говорит на иностранном языке?',
      en: 'Does your friend feel confident enough when he speaks a foreign language?',
      tr: '[dʌz] [jɔː] [frend] [fiːl] [ˈkɒnfɪdᵊnt] [ɪˈnʌf] [wen] [hiː] [spiːks] [ə] [ˈfɒrən] [ˈlæŋɡwɪʤ]',
    },
    {
      ru: 'Этот дом стоит свыше двух миллионов долларов?',
      en: 'Does this house cost over two million dollars?',
      tr: '[dʌz] [ðɪs] [haʊs] [kɒst] [ˈəʊvə] [tuː] [ˈmɪljən] [ˈdɒləz]',
    },
    {
      ru: 'Твоя жена часто делает покупки?',
      en: 'Does your wife often do the shopping?',
      tr: '[dʌz] [jɔː] [waɪf] [ˈɒfᵊn] [duː] [ðə] [ˈʃɒpɪŋ]',
    },
    {
      ru: 'То время для них удобно?',
      en: 'Is that time convenient for them?',
      tr: '[ɪz] [ðæt] [taɪm] [kənˈviːniənt] [fɔː] [ðem]',
    },
    {
      ru: 'Эта вещь зависит от меня?',
      en: 'Does this thing depend on me?',
      tr: '[dʌz] [ðɪs] [θɪŋ] [dɪˈpend] [ɒn] [miː]',
    },
    {
      ru: 'Твой друг верен в этом?',
      en: 'Is your friend sure about it?',
      tr: '[ɪz] [jɔː] [frend] [ʃɔːr] [əˈbaʊt] [ɪt]',
    },
    {
      ru: 'Его друзья действительно уверены в этом?',
      en: 'Are his friends really sure about it?',
      tr: '[ɑː] [hɪz] [frendz] [ˈrɪəli] [ʃɔːr] [əˈbaʊt] [ɪt]',
    },
    { ru: 'Этих знаний достаточно?', en: 'Is this knowledge enough?', tr: '[ɪz] [ðɪs] [ˈnɒlɪʤ] [ɪˈnʌf]' },
    {
      ru: 'У мальчика действительно выдающиеся результаты?',
      en: 'Does the boy really have outstanding results?',
      tr: '[dʌz] [ðə] [bɔɪ] [ˈrɪəli] [hæv] [aʊtˈstændɪŋ] [rɪˈzʌlts]',
    },
    {
      ru: 'Девочка показывается выдающийся результат?',
      en: 'Does the girl show an outstanding result?',
      tr: '[dʌz] [ðə] [ɡɜːl] [ʃəʊ] [ən] [aʊtˈstændɪŋ] [rɪˈzʌlt]',
    },
    {
      ru: 'Мальчик чувствует себя очень уставшим?',
      en: 'Does the boy feel very tired?',
      tr: '[dʌz] [ðə] [bɔɪ] [fiːl] [ˈveri] [taɪəd]',
    },
    {
      ru: 'Тест чрезвыйчайно сложный?',
      en: 'Is the test extremely difficult?',
      tr: '[ɪz] [ðə] [test] [ɪkˈstriːmli] [ˈdɪfɪkᵊlt]',
    },
    {
      ru: 'Твоя работа очень стрессовая?',
      en: 'Is your job very stressful?',
      tr: '[ɪz] [jɔː] [ʤɒb] [ˈveri] [ˈstresfᵊl]',
    },
    {
      ru: 'Их работа действительно стрессовая?',
      en: 'Is their job really stressful?',
      tr: '[ɪz] [ðeə] [ʤɒb] [ˈrɪəli] [ˈstresfᵊl]',
    },
    {
      ru: 'У твоей жены стрессовая работа?',
      en: 'Does your wife have a stressful job?',
      tr: '[dʌz] [jɔː] [waɪf] [hæv] [ə] [ˈstresfᵊl] [ʤɒb]',
    },
    {
      ru: 'Почему тебе нужно гораздо больше времени, чтобы полностью это закончить?',
      en: 'Why do you need much more time to finish it completely?',
      tr: '[waɪ] [duː] [juː] [niːd] [mʌʧ] [mɔː] [taɪm] [tuː] [ˈfɪnɪʃ] [ɪt] [kəmˈpliːtli]',
    },
    {
      ru: 'Почему тебе нужно сделать это как можно скорее?',
      en: 'Why do you need to do it as soon as possible?',
      tr: '[waɪ] [duː] [juː] [niːd] [tuː] [duː] [ɪt] [æz] [suːn] [æz] [ˈpɒsəbᵊl]',
    },
    {
      ru: 'Как ты следишь за своим здоровьем?',
      en: 'How do you look after your health?',
      tr: '[haʊ] [duː] [juː] [lʊk] [ˈɑːftə] [jɔː] [helθ]',
    },
    {
      ru: 'Как долго он добирается до школы?',
      en: 'How long does he get to school?',
      tr: '[haʊ] [lɒŋ] [dʌz] [hiː] [ɡet] [tuː] [skuːl]',
    },
    {
      ru: 'Как долго она добирается домой?',
      en: 'How long does she get home?',
      tr: '[haʊ] [lɒŋ] [dʌz] [ʃiː] [ɡet] [həʊm]',
    },
    {
      ru: 'Сколько раз в неделю ты ходишь в бассейн?',
      en: 'How many times a week do you go to the swimming pool?',
      tr: '[haʊ] [ˈmeni] [taɪmz] [ə] [wiːk] [duː] [juː] [ɡəʊ] [tuː] [ðə] [ˈswɪmɪŋ] [puːl]',
    },
    {
      ru: 'Сколько раз в неделю он ходит на работу?',
      en: 'How many times a week does he go to work?',
      tr: '[haʊ] [ˈmeni] [taɪmz] [ə] [wiːk] [dʌz] [hiː] [ɡəʊ] [tuː] [wɜːk]',
    },
    {
      ru: 'Почему он предпочитает изучать английский сам?',
      en: 'Why does he prefer to learn English on his own?',
      tr: '[waɪ] [dʌz] [hiː] [priˈfɜː] [tuː] [lɜːn] [ˈɪŋɡlɪʃ] [ɒn] [hɪz] [əʊn]',
    },
    {
      ru: 'Какие интересы есть у девочки?',
      en: 'What interests does girl have?',
      tr: '[wɒt] [ˈɪntrests] [dʌz] [ɡɜːl] [hæv]',
    },
    {
      ru: 'Какой твой уровень английского?',
      en: 'What is your English level?',
      tr: '[wɒt] [ɪz] [jɔːr] [ˈɪŋɡlɪʃ] [ˈlevᵊl]',
    },
    {
      ru: 'Какой уровень английского у тебя?',
      en: 'What English level do you have?',
      tr: '[wɒt] [ˈɪŋɡlɪʃ] [ˈlevᵊl] [duː] [juː] [hæv]',
    },
    {
      ru: 'Как часто ты читаешь этот журнал?',
      en: 'How often do you read this magazine?',
      tr: '[haʊ] [ˈɒfᵊn] [duː] [juː] [riːd] [ðɪs] [ˌmæɡəˈziːn]',
    },
    {
      ru: 'Что тебя больше всего пугает?',
      en: 'What frightens you most of all?',
      tr: '[wɒt] [ˈfraɪtᵊnz] [juː] [məʊst] [ɒv] [ɔːl]',
    },
    { ru: 'Что пугает тебя?', en: 'What frightens you?', tr: '[wɒt] [ˈfraɪtᵊnz] [juː]' },
    { ru: 'Кто ходит туда с тобой?', en: 'Who goes there with you?', tr: '[huː] [ɡəʊz] [ðeə] [wɪð] [juː]' },
    {
      ru: 'Что кажется таким удивительным?',
      en: 'What seems so surprising?',
      tr: '[wɒt] [siːmz] [səʊ] [səˈpraɪzɪŋ]',
    },
    { ru: 'Кто продаёт этот дом?', en: 'Who sells this house?', tr: '[huː] [selz] [ðɪs] [haʊs]' },
    { ru: 'Кому это нравится?', en: 'Who likes it?', tr: '[huː] [laɪks] [ɪt]' },
    { ru: 'Что так удивительно?', en: 'What is so surprising?', tr: '[wɒt] [ɪz] [səʊ] [səˈpraɪzɪŋ]' },
    { ru: 'Что делает тебя счастливым', en: 'What makes happy you?', tr: '[wɒt] [meɪks] [ˈhæpi] [juː]' },
    { ru: 'Что делает тебя злым?', en: 'What makes angry you?', tr: '[wɒt] [meɪks] [ˈæŋɡri] [juː]' },
    { ru: 'Что делает людей счастливыми?', en: 'What makes people happy?', tr: '[wɒt] [meɪks] [ˈpiːpᵊl] [ˈhæpi]' },
    { ru: 'Кто говорит это?', en: 'Who says it?', tr: '[huː] [sez] [ɪt]' },
    { ru: 'Что ты слышишь?', en: 'What do you hear?', tr: '[wɒt] [duː] [juː] [hɪə]' },
    { ru: 'Кто ещё знает это?', en: 'Who else knows it?', tr: '[huː] [els] [nəʊz] [ɪt]' },
    { ru: 'Что ещё помогает тебе?', en: 'What else helps you?', tr: '[wɒt] [els] [helps] [juː]' },
    { ru: 'Что интересует его больше?', en: 'What interests him more?', tr: '[wɒt] [ˈɪntrests] [hɪm] [mɔː]' },
    { ru: 'Что интересует тебя?', en: 'What interests you?', tr: '[wɒt] [ˈɪntrests] [juː]' },
    { ru: 'Что интересно тебе?', en: 'What is interesting for you?', tr: '[wɒt] [ɪz] [ˈɪntrestɪŋ] [fɔː] [juː]' },
    {
      ru: 'Что здесь такого удивительного?',
      en: 'What is so surprising here?',
      tr: '[wɒt] [ɪz] [səʊ] [səˈpraɪzɪŋ] [hɪə]',
    },
    {
      ru: 'Что обычно привлекает твоё внимание?',
      en: 'What usually attracts your attention?',
      tr: '[wɒt] [ˈjuːʒʊəli] [əˈtrækts] [jɔːr] [əˈtenʃᵊn]',
    },
    {
      ru: 'Какое место привлекает тебя больше?',
      en: 'Which place attracts you more?',
      tr: '[wɪʧ] [pleɪs] [əˈtrækts] [juː] [mɔː]',
    },
    {
      ru: 'Какие места привлекают тебя больше?',
      en: 'Which places attract you more?',
      tr: '[wɪʧ] [ˈpleɪsɪz] [əˈtrækt] [juː] [mɔː]',
    },
    { ru: 'Что зависит от тебя?', en: 'What depends on you?', tr: '[wɒt] [dɪˈpendz] [ɒn] [juː]' },
    {
      ru: 'Ей нравится ходить по магазинам',
      en: 'She likes going shopping',
      tr: '[ʃiː] [laɪks] [ˈɡəʊɪŋ] [ˈʃɒpɪŋ]',
    },
    {
      ru: 'Мне нравится играть в настольный теннис',
      en: 'I like playing table tennis',
      tr: '[aɪ] [laɪk] [ˈpleɪɪŋ] [ˈteɪbᵊl] [ˈtenɪs]',
    },
    {
      ru: 'Она действительно обожает готовить',
      en: 'She really enjoys cooking',
      tr: '[ʃiː] [ˈrɪəli] [ɪnˈʤɔɪz] [ˈkʊkɪŋ]',
    },
    { ru: 'Ему нравится заниматься дзюдо', en: 'He likes doing judo', tr: '[hiː] [laɪks] [ˈduːɪŋ] [ˈʤuːdəʊ]' },
    { ru: 'Ему нравится заниматься карате', en: 'He likes doing karate', tr: '[hiː] [laɪks] [ˈduːɪŋ] [kəˈrɑːti]' },
    { ru: 'Ему нравится играть в гольф', en: 'He likes playing golf', tr: '[hiː] [laɪks] [ˈpleɪɪŋ] [ɡɒlf]' },
    {
      ru: 'Ей нравится играть на пианино',
      en: 'She likes playing the piano',
      tr: '[ʃiː] [laɪks] [ˈpleɪɪŋ] [ðə] [piˈænəʊ]',
    },
    {
      ru: 'Ей нравится играть на скрипке',
      en: 'She likes playing the violin',
      tr: '[ʃiː] [laɪks] [ˈpleɪɪŋ] [ðə] [ˌvaɪəˈlɪn]',
    },
    {
      ru: 'Ему нравится играть на гитаре',
      en: 'He likes playing the guitar',
      tr: '[hiː] [laɪks] [ˈpleɪɪŋ] [ðə] [ɡɪˈtɑː]',
    },
    {
      ru: 'Мне нравится гулять в парке',
      en: 'I like walking in the park',
      tr: '[aɪ] [laɪk] [ˈwɔːkɪŋ] [ɪn] [ðə] [pɑːk]',
    },
    {
      ru: 'Ей нравится читать в постели',
      en: 'She likes reading in bed',
      tr: '[ʃiː] [laɪks] [ˈriːdɪŋ] [ɪn] [bed]',
    },
    {
      ru: 'Я ненавижу ничего не делать, потому что это настоящая пустая трата времени, и мы не можем вернуть его назад',
      en: "I hate doing nothing because it's a real waste of time and we can't turn it back",
      tr: '[aɪ] [heɪt] [ˈduːɪŋ] [ˈnʌθɪŋ] [bɪˈkɒz] [ɪts] [ə] [rɪəl] [weɪst] [ɒv] [taɪm] [ænd] [wiː] [kɑːnt] [tɜːn] [ɪt] [bæk]',
    },
    {
      ru: 'Я обожаю заниматься спортом, потому что это очень хорошо для моего сдоровья',
      en: 'I enjoy doing sport because it is very good for my health',
      tr: '[aɪ] [ɪnˈʤɔɪ] [ˈduːɪŋ] [spɔːt] [bɪˈkɒz] [ɪt] [ɪz] [ˈveri] [ɡʊd] [fɔː] [maɪ] [helθ]',
    },
    {
      ru: 'Я люблю делать те физические упражнения, потому что они очень хороши для моего тела',
      en: "I'm fond of doing those physical exercises because they're very good for my body",
      tr: '[aɪm] [fɒnd] [ɒv] [ˈduːɪŋ] [ðəʊz] [ˈfɪzɪkᵊl] [ˈeksəsaɪzɪz] [bɪˈkɒz] [ðeə] [ˈveri] [ɡʊd] [fɔː] [maɪ] [ˈbɒdi]',
    },
    {
      ru: 'Я обожаю ходить кататься на велосипеде, потому что я могу потерять несколько калорий и дышать свежим воздухом в то же самое время',
      en: 'I enjoy going cycling because I can lose some calories and breathe fresh air at the same time',
      tr: '[aɪ] [ɪnˈʤɔɪ] [ˈɡəʊɪŋ] [ˈsaɪklɪŋ] [bɪˈkɒz] [aɪ] [kæn] [luːz] [sʌm] [ˈkælᵊriz] [ænd] [briːð] [freʃ] [eər] [æt] [ðə] [seɪm] [taɪm]',
    },
    {
      ru: 'Я люблю делать эти упражнения, потому что это делает меня сильнее',
      en: "I'm fond of doing these exercises because it makes me stronger",
      tr: '[aɪm] [fɒnd] [ɒv] [ˈduːɪŋ] [ðiːz] [ˈeksəsaɪzɪz] [bɪˈkɒz] [ɪt] [meɪks] [miː] [ˈstrɒŋɡə]',
    },
    {
      ru: 'Я обожаю делать эти упражнения, потому что они чрезвычайно полезны',
      en: 'I enjoy doing these exercises because they are extremely useful',
      tr: '[aɪ] [ɪnˈʤɔɪ] [ˈduːɪŋ] [ðiːz] [ˈeksəsaɪzɪz] [bɪˈkɒz] [ðeɪ] [ɑːr] [ɪkˈstriːmli] [ˈjuːsfᵊl]',
    },
  ];
  
  console.log(OFFERS_A1_63_71.length);
  
  const OFFERS_A1_72_76 = [
    {
      ru: 'Конечно, я понимаю, что все люди делают ошибки иногда, но мы учимся на них',
      en: 'Of course, I understand that all people make mistakes sometimes but we learn from them',
      tr: '[ɒv] [kɔːs] [aɪ] [ˌʌndəˈstænd] [ðæt] [ɔːl] [ˈpiːpᵊl] [meɪk] [mɪˈsteɪks] [ˈsʌmtaɪmz] [bʌt] [wiː] [lɜːn] [frɒm] [ðem]',
    },
    {
      ru: 'Я должен тратить больше времени на это, если я действительно хочу иметь гораздо лучшие результаты',
      en: 'I must spend more time on it if I really want to have much better results',
      tr: '[aɪ] [mʌst] [spend] [mɔː] [taɪm] [ɒn] [ɪt] [ɪf] [aɪ] [ˈrɪəli] [wɒnt] [tuː] [hæv] [mʌʧ] [ˈbetə] [rɪˈzʌlts]',
    },
    {
      ru: 'Не бросай эти бумаги',
      en: "Don't throw these papers?",
      tr: '[dəʊnt] [θrəʊ] [ðiːz] [ˈpeɪpəz]',
    },
    {
      ru: 'Эта фабрика производит одежду',
      en: 'This factory produces clothes',
      tr: '[ðɪs] [ˈfæktᵊri] [ˈprɒdjuːsɪz] [kləʊðz]',
    },
    {
      ru: 'Мне нравится гулять в парке',
      en: 'I like walking in the park',
      tr: '[aɪ] [laɪk] [ˈwɔːkɪŋ] [ɪn] [ðə] [pɑːk]',
    },
    {
      ru: 'Уроки начинаются очень рано',
      en: 'The lessons begin very early',
      tr: '[ðə] [ˈlesᵊnz] [bɪˈɡɪn] [ˈveri] [ˈɜːli]',
    },
    {
      ru: 'Ты можешь выбросить это',
      en: 'You can throw it away',
      tr: '[juː] [kæn] [θrəʊ] [ɪt] [əˈweɪ]',
    },
    {
      ru: 'Я часто хожу на работу',
      en: 'I often walk to work',
      tr: '[aɪ] [ˈɒfᵊn] [wɔːk] [tuː] [wɜːk]',
    },
    {
      ru: 'Я часто хожу на работу пешком',
      en: 'I often go to work on foot',
      tr: '[aɪ] [ˈɒfᵊn] [ɡəʊ] [tuː] [wɜːk] [ɒn] [fʊt]',
    },
    {
      ru: 'Всё может измениться скоро',
      en: 'Everything can change soon',
      tr: '[ˈevriθɪŋ] [kæn] [ʧeɪnʤ] [suːn]',
    },
    {
      ru: 'Ты можешь помочь нам?',
      en: 'Can you help us?',
      tr: "[kæn] [juː] [help] [ʌs]'",
    },
    {
      ru: 'Он говорит, что они хотят пожениться в следующем месяце',
      en: 'He says that they want to get married next month',
      tr: '[hiː] [sez] [ðæt] [ðeɪ] [wɒnt] [tuː] [ɡet] [ˈmærɪd] [nekst] [mʌnθ]',
    },
    {
      ru: 'Он старается не обращать внимания на эту критику',
      en: 'He tries not to pay attention to this criticism',
      tr: '[hiː] [traɪz] [nɒt] [tuː] [peɪ] [əˈtenʃᵊn] [tuː] [ðɪs] [ˈkrɪtɪsɪzᵊm]',
    },
    {
      ru: 'Я стараюсь не обращать внимания на эти вещи',
      en: 'I try not to pay attention to these things',
      tr: '[aɪ] [traɪ] [nɒt] [tuː] [peɪ] [əˈtenʃᵊn] [tuː] [ðiːz] [θɪŋz]',
    },
    {
      ru: 'Твой учитель всегда указывает на твои ошибки?',
      en: 'Does your teacher always point out your mistakes?',
      tr: '[dʌz] [jɔː] [ˈtiːʧər] [ˈɔːlweɪz] [pɔɪnt] [aʊt] [jɔː] [mɪˈsteɪks]',
    },
    {
      ru: 'Я хочу достичь этой цели как можно скорее',
      en: 'I want to achieve this aim as soon as possible',
      tr: '[aɪ] [wɒnt] [tuː] [əˈʧiːv] [ðɪs] [eɪm] [æz] [suːn] [æz] [ˈpɒsəbᵊl]',
    },
    {
      ru: 'Я знаю, что мне нужно контролировать себя',
      en: 'I know that I need to control myself',
      tr: '[aɪ] [nəʊ] [ðæt] [aɪ] [niːd] [tuː] [kənˈtrəʊl] [maɪˈself]',
    },
    {
      ru: 'Я прекрасно осознаю, что могу найти работу получше',
      en: 'I perfectly realise that I can find a better job',
      tr: '[aɪ] [ˈpɜːfɪktli] [ˈrɪəlaɪz] [ðæt] [aɪ] [kæn] [faɪnd] [ə] [ˈbetə] [ʤɒb]',
    },
    {
      ru: 'Он хочет разрезать эту верёвку ножом',
      en: 'He wants to cut this rope with a knife',
      tr: '[hiː] [wɒnts] [tuː] [kʌt] [ðɪs] [rəʊp] [wɪð] [ə] [naɪf]',
    },
    {
      ru: 'Он никогда не пьёт алкоголь',
      en: 'He never drinks alcohol',
      tr: '[hiː] [ˈnevə] [drɪŋks] [ˈælkəhɒl]',
    },
    {
      ru: 'Ты согласен, что только усердная работа может привести нас к настоящему успеху?',
      en: 'Do you agree that only hard work can lead us to real success?',
      tr: "[duː] [juː] [əˈɡriː] [ðæt] [ˈəʊnli] [hɑːd] [wɜːk] [kæn] [liːd] [ʌs] [tuː] [rɪəl] [səkˈses]'",
    },
    {
      ru: 'Она носит тяжёлые сумки и это очень плохо для её здоровья',
      en: "She carries very heavy bags and it's very bag for her health",
      tr: '[ʃiː] [ˈkæriz] [ˈveri] [ˈhevi] [bæɡz] [ænd] [ɪts] [ˈveri] [bæɡ] [fɔː] [hɜː] [helθ]',
    },
    {
      ru: 'Мне нужно закончить этот проект как можно скорее',
      en: 'I need to finish this project as soon as possible',
      tr: '[aɪ] [niːd] [tuː] [ˈfɪnɪʃ] [ðɪs] [ˈprɒʤekt] [æz] [suːn] [æz] [ˈpɒsəbᵊl]',
    },
    {
      ru: 'Тебе нужно повернуть налево сейчас',
      en: 'You need to turn left now',
      tr: '[juː] [niːd] [tuː] [tɜːn] [left] [naʊ]',
    },
    {
      ru: 'Я вижу очень красивую церковь перед этим зданием',
      en: 'I see a very beautiful church in front of this building',
      tr: '[aɪ] [siː] [ə] [ˈveri] [ˈbjuːtɪfᵊl] [ʧɜːʧ] [ɪn] [frʌnt] [ɒv] [ðɪs] [ˈbɪldɪŋ]',
    },
    {
      ru: 'Что ты видишь перед собой?',
      en: 'What do you see in front of you?',
      tr: '[wɒt] [duː] [juː] [siː] [ɪn] [frʌnt] [ɒv] [juː]',
    },
    {
      ru: 'Ты можешь рассчитывать на мою помощь',
      en: 'You can count on my help',
      tr: '[juː] [kæn] [kaʊnt] [ɒn] [maɪ] [help]',
    },
    {
      ru: 'Что означает этот знак?',
      en: 'What does this sign mean?',
      tr: '[wɒt] [dʌz] [ðɪs] [saɪn] [miːn]',
    },
    {
      ru: 'Уроки начинаются в 8 утра',
      en: 'The lessons start at 8 a.m.',
      tr: "[ðə] [ˈlesᵊnz] [stɑːt] [æt] 8 [eɪ].[em].'",
    },
    {
      ru: 'Я знаю, что это не так лёгко сдать тот тест',
      en: "I know that it isn't so easy to pass that test",
      tr: '[aɪ] [nəʊ] [ðæt] [ɪt] [ˈɪznt] [səʊ] [ˈiːzi] [tuː] [pɑːs] [ðæt] [test]',
    },
    {
      ru: 'Это его совсем не интересует',
      en: "It doesn't interest him at all",
      tr: '[ɪt] [dʌznt] [ˈɪntrest] [hɪm] [æt] [ɔːl]',
    },
    {
      ru: 'Ты всегда можешь рассчитывать на меня',
      en: 'You can always count on me',
      tr: '[juː] [kæn] [ˈɔːlweɪz] [kaʊnt] [ɒn] [miː]',
    },
    {
      ru: 'Что означает это предложение?',
      en: 'What does this sentence mean?',
      tr: "[wɒt] [dʌz] [ðɪs] [ˈsentəns] [miːn]'",
    },
    {
      ru: 'Я бы очень хотел поблагодарить тебя за всю твою помощь',
      en: "I'd really like to thank you for all your help",
      tr: '[aɪd] [ˈrɪəli] [laɪk] [tuː] [θæŋk] [juː] [fɔːr] [ɔːl] [jɔː] [help]',
    },
    {
      ru: 'Он пытается найти более хорошую работу, но безуспешно',
      en: 'He tries to find a better job but no without success',
      tr: '[hiː] [traɪz] [tuː] [faɪnd] [ə] [ˈbetə] [ʤɒb] [bʌt] [nəʊ] [wɪˈðaʊt] [səkˈses]',
    },
    {
      ru: 'Что ты обычно носишь?',
      en: 'What do you usually wear?',
      tr: '[wɒt] [duː] [juː] [ˈjuːʒʊəli] [weə]',
    },
    {
      ru: 'Она владеет этим домом',
      en: 'She own this house',
      tr: '[ʃiː] [əʊn] [ðɪs] [haʊs]',
    },
    {
      ru: 'Другими словами этот дом принадлежит ей',
      en: 'In other words, this house belongs to her',
      tr: '[ɪn] [ˈʌðə] [wɜːdz] [ðɪs] [haʊs] [bɪˈlɒŋz] [tuː] [hɜː]',
    },
    {
      ru: 'Я не могу представить свои жизнь без спорта',
      en: "I can't imagine my life without sport",
      tr: '[aɪ] [kɑːnt] [ɪˈmæʤɪn] [maɪ] [laɪf] [wɪˈðaʊt] [spɔːt]',
    },
    {
      ru: 'Я стараюсь не тратить так много денег на это',
      en: 'I try not to spend so much money on it',
      tr: '[aɪ] [traɪ] [nɒt] [tuː] [spend] [səʊ] [mʌʧ] [ˈmʌni] [ɒn] [ɪt]',
    },
    {
      ru: 'Я знаю, что что-то не так',
      en: 'I know that something is wrong',
      tr: '[aɪ] [nəʊ] [ðæt] [ˈsʌmθɪŋ] [ɪz] [rɒŋ]',
    },
    {
      ru: 'Это должно привести меня к успеху',
      en: 'It must lead me to success',
      tr: '[ɪt] [mʌst] [liːd] [miː] [tuː] [səkˈses]',
    },
    {
      ru: 'Сколько стоит новая модель?',
      en: 'How much does a new model cost?',
      tr: "[haʊ] [mʌʧ] [dʌz] [ə] [njuː] [ˈmɒdᵊl] [kɒst]'",
    },
    {
      ru: 'Я хотел бы поблагодарить его за всё',
      en: "I'd like to thank him for everything",
      tr: '[aɪd] [laɪk] [tuː] [θæŋk] [hɪm] [fɔːr] [ˈevriθɪŋ]',
    },
    {
      ru: 'Тебе нужно повернуть направо на перекрёстке',
      en: 'You need to turn right at the crossroads',
      tr: '[juː] [niːd] [tuː] [tɜːn] [raɪt] [æt] [ðə] [ˈkrɒsˌrəʊdz]',
    },
    {
      ru: 'Тебе следует повернуть налево на перекрёстке',
      en: 'You should turn left at the crossroads',
      tr: '[juː] [ʃʊd] [tɜːn] [left] [æt] [ðə] [ˈkrɒsˌrəʊdz]',
    },
    {
      ru: 'Не так легко сдать этот экзамен',
      en: "It isn't so easy to pass this exam",
      tr: '[ɪt] [ˈɪznt] [səʊ] [ˈiːzi] [tuː] [pɑːs] [ðɪs] [ɪɡˈzæm]',
    },
    {
      ru: 'Кому принадлежит эта вилла?',
      en: 'Who owns this villa?',
      tr: "[huː] [əʊnz] [ðɪs] [ˈvɪlə]'",
    },
    {
      ru: 'Я думаю, что тебе нужно слышать голос своего сердца, когда ты не уверен в чем-то, и тебе нужно решить, что делать дальше',
      en: "I think that you need to listen to the voice of your heart when you aren't sure about something and you need to decide what to do next",
      tr: '[aɪ] [θɪŋk] [ðæt] [juː] [niːd] [tuː] [ˈlɪsᵊn] [tuː] [ðə] [vɔɪs] [ɒv] [jɔː] [hɑːt] [wen] [juː] [ɑːnt] [ʃɔːr] [əˈbaʊt] [ˈsʌmθɪŋ] [ænd] [juː] [niːd] [tuː] [dɪˈsaɪd] [wɒt] [tuː] [duː] [nekst]',
    },
    {
      ru: 'Когда ты слушаешь советы других людей, это не означает, что тебе нужно это сделать',
      en: "When you listen to others people's advice, it doesn't mean that you need to do it",
      tr: '[wen] [juː] [ˈlɪsᵊn] [tuː] [ˈʌðəz] [ˈpiːpᵊlz] [ədˈvaɪs] [ɪt] [dʌznt] [miːn] [ðæt] [juː] [niːd] [tuː] [duː] [ɪt]',
    },
    {
      ru: 'Мне кажется, что ты можешь сравнить разные методы и выбрать то, что тебе лучше подходит',
      en: 'It seems to me that you can compare different methods and choose what suits you better',
      tr: '[ɪt] [siːmz] [tuː] [miː] [ðæt] [juː] [kæn] [kəmˈpeə] [ˈdɪfᵊrᵊnt] [ˈmeθədz] [ænd] [ʧuːz] [wɒt] [suːts] [juː] [ˈbetə]',
    },
    {
      ru: 'Мне нужно заполнить эту форму',
      en: 'I need to fill in this form',
      tr: '[aɪ] [niːd] [tuː] [fɪl] [ɪn] [ðɪs] [fɔːm]',
    },
    {
      ru: 'Я так сильно по тебе скучаю',
      en: 'I miss you so much',
      tr: '[aɪ] [mɪs] [juː] [səʊ] [mʌʧ]',
    },
    {
      ru: 'Он носит очень стильный ремень',
      en: 'He wears a very stylish belt',
      tr: '[hiː] [weəz] [ə] [ˈveri] [ˈstaɪlɪʃ] [belt]',
    },
    {
      ru: 'Я хотел бы пригласить тебя в ресторан',
      en: "I'd like to invite you to the restaurant",
      tr: '[aɪd] [laɪk] [tuː] [ɪnˈvaɪt] [juː] [tuː] [ðə] [ˈrestᵊrɒnt]',
    },
    {
      ru: 'Кто поддерживает тебя больше всего?',
      en: 'Who supports you most of all?',
      tr: '[huː] [səˈpɔːts] [juː] [məʊst] [ɒv] [ɔːl]',
    },
    {
      ru: 'Тебе нужно заполнить пробелы',
      en: 'You need to fill in the gaps',
      tr: '[juː] [niːd] [tuː] [fɪl] [ɪn] [ðə] [ɡæps]',
    },
    {
      ru: 'Я хочу сказать, что это очень важно для всех нас',
      en: "I want to say that it's very important for all of us",
      tr: '[aɪ] [wɒnt] [tuː] [seɪ] [ðæt] [ɪts] [ˈveri] [ɪmˈpɔːtᵊnt] [fɔːr] [ɔːl] [ɒv] [ʌs]',
    },
    {
      ru: 'Они информируют меня, когда что-то действительно важно',
      en: 'They inform me when something is really important',
      tr: '[ðeɪ] [ɪnˈfɔːm] [miː] [wen] [ˈsʌmθɪŋ] [ɪz] [ˈrɪəli] [ɪmˈpɔːtᵊnt]',
    },
    {
      ru: 'Они не могут нарушить этот закон',
      en: "They can't break this law",
      tr: '[ðeɪ] [kɑːnt] [breɪk] [ðɪs] [lɔː]',
    },
    {
      ru: 'Он поёт как один очень известный певец',
      en: 'He sings like one very famous singer',
      tr: '[hiː] [sɪŋz] [laɪk] [wʌn] [ˈveri] [ˈfeɪməs] [ˈsɪŋə]',
    },
    {
      ru: 'Компания хочет сократить некоторых рабочих',
      en: 'The company wants to reduce some workers',
      tr: '[ðə] [ˈkʌmpəni] [wɒnts] [tuː] [rɪˈdjuːs] [sʌm] [ˈwɜːkəz]',
    },
    {
      ru: 'Компании следует сократить некоторых рабочих',
      en: 'The company should reduce some workers',
      tr: '[ðə] [ˈkʌmpəni] [ʃʊd] [rɪˈdjuːs] [sʌm] [ˈwɜːkəz]',
    },
    {
      ru: 'Они не могут сократить расходы в настоящее время',
      en: "They can't reduce the costs at present",
      tr: '[ðeɪ] [kɑːnt] [rɪˈdjuːs] [ðə] [kɒsts] [æt] [ˈprezᵊnt]',
    },
    {
      ru: 'Я не хочу тратить впустую своё время, потому что оно действительно летит, и мне нужно сделать так много вещей в моей жизни',
      en: "I don't want to west my time because it really flies and I need to do so many things in my life",
      tr: '[aɪ] [dəʊnt] [wɒnt] [tuː] [west] [maɪ] [taɪm] [bɪˈkɒz] [ɪt] [ˈrɪəli] [flaɪz] [ænd] [aɪ] [niːd] [tuː] [duː] [səʊ] [ˈmeni] [θɪŋz] [ɪn] [maɪ] [laɪf]',
    },
    {
      ru: 'Я хотел бы пожелать тебе крепкого здоровья, настоящего счастья, больших денег и успехов в жизни',
      en: "I'd like to wish you strong health, real happiness, big money and success in life",
      tr: '[aɪd] [laɪk] [tuː] [wɪʃ] [juː] [strɒŋ] [helθ] [rɪəl] [ˈhæpɪnəs] [bɪɡ] [ˈmʌni] [ænd] [səkˈses] [ɪn] [laɪf]',
    },
    {
      ru: 'Она говорит, что ей действительно нравится путешествовать, и она также часто добавляет, что это расширяет её кругозор',
      en: 'She says that she really like travelling and she also often adds that it broadens her horizons',
      tr: '[ʃiː] [sez] [ðæt] [ʃiː] [ˈrɪəli] [laɪk] [ˈtrævᵊlɪŋ] [ænd] [ʃiː] [ˈɔːlsəʊ] [ˈɒfᵊn] [ædz] [ðæt] [ɪt] [ˈbrɔːdᵊnz] [hɜː] [həˈraɪzᵊnz]',
    },
    {
      ru: 'Я не хочу быть неудачником в жизни, поэтому я стараюсь делать всё возможное, чтобы развивать свои таланты и делать что-то полезное для других',
      en: "I don't want to be a loser in life, so I try to do my best to develop my talents and do something useful for others",
      tr: '[aɪ] [dəʊnt] [wɒnt] [tuː] [biː] [ə] [ˈluːzər] [ɪn] [laɪf] [səʊ] [aɪ] [traɪ] [tuː] [duː] [maɪ] [best] [tuː] [dɪˈveləp] [maɪ] [ˈtælᵊnts] [ænd] [duː] [ˈsʌmθɪŋ] [ˈjuːsfᵊl] [fɔːr] [ˈʌðəz]',
    },
    {
      ru: 'Я надеюсь на лучшее, но ожидаю худшего',
      en: 'I hope for the best but expect the worst',
      tr: '[aɪ] [həʊp] [fɔː] [ðə] [best] [bʌt] [ɪkˈspekt] [ðə] [wɜːst]',
    },
    {
      ru: 'Почему это тебя так сильно пугает?',
      en: 'Why does it frighten you so much?',
      tr: '[waɪ] [dʌz] [ɪt] [ˈfraɪtᵊn] [juː] [səʊ] [mʌʧ]',
    },
    {
      ru: 'Он может прибыть поздно, как всегда',
      en: 'He can arrive late as always',
      tr: '[hiː] [kæn] [əˈraɪv] [leɪt] [æz] [ˈɔːlweɪz]',
    },
    {
      ru: 'Он хочет стать предпринимателем',
      en: 'He wants to become an entrepreneur',
      tr: '[hiː] [wɒnts] [tuː] [bɪˈkʌm] [ən] [ˌɒntrəprəˈnɜː]',
    },
    {
      ru: 'Вы не могли бы мне помочь, пожалуйста?',
      en: 'Could you help me, please?',
      tr: "[kʊd] [juː] [help] [miː] [pliːz]'",
    },
    {
      ru: 'Я обычно смотрю эти видео несколько раз',
      en: 'I usually watch these videos several times',
      tr: '[aɪ] [ˈjuːʒʊəli] [wɒʧ] [ðiːz] [ˈvɪdiəʊz] [ˈsevᵊrᵊl] [taɪmz]',
    },
    {
      ru: 'Я думаю, людям следует быть более вежливыми',
      en: 'I think people should be more polite',
      tr: '[aɪ] [θɪŋk] [ˈpiːpᵊl] [ʃʊd] [biː] [mɔː] [pəˈlaɪt]',
    },
    {
      ru: 'Конечно, я осознаю важность этих событий',
      en: 'Certainly, I realise the importance of these events',
      tr: '[ˈsɜːtnli] [aɪ] [ˈrɪəlaɪz] [ði] [ɪmˈpɔːtᵊns] [ɒv] [ðiːz] [ɪˈvents]',
    },
    {
      ru: 'Мой будильник обычно меня будит',
      en: 'My alarm clock usually wakes me up',
      tr: '[maɪ] [əˈlɑːm] [klɒk] [ˈjuːʒʊəli] [weɪks] [miː] [ʌp]',
    },
    {
      ru: 'Я поддерживаю связь со своими старыми друзьями',
      en: 'I keep in touch with my old friends',
      tr: '[aɪ] [kiːp] [ɪn] [tʌʧ] [wɪð] [maɪ] [əʊld] [frendz]',
    },
    {
      ru: 'Давай разделим это на три части!',
      en: "Let's divide it into three parts!",
      tr: '[lets] [dɪˈvaɪd] [ɪt] [ˈɪntuː] [θriː] [pɑːts]',
    },
    {
      ru: 'Наш учитель обычно делит нас на несколько групп',
      en: 'Our teacher usually divides us into several groups',
      tr: '[ˈaʊə] [ˈtiːʧə] [ˈjuːʒʊəli] [dɪˈvaɪdz] [ʌs] [ˈɪntuː] [ˈsevᵊrᵊl] [ɡruːps]',
    },
  ];
  
  console.log(OFFERS_A1_72_76.length);
  

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
  
    let offer = arrOfQuestions[offersArray[renderСounters]][languageAnswer].split(' ');
    findQuestion.textContent = arrOfQuestions[offersArray[renderСounters]][languageQuestion];
    console.log('offer ' + offer);
    let mistakes = arrOfQuestions[offersArrayMistakes[renderMistakesCounter]][languageAnswer]
      .split(' ')
      .concat(arrOfQuestions[offersArrayMistakes[renderMistakesCounter + 1]][languageAnswer].split(' '));
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
  let arrOfQuestions;
  
  findBtnStart.addEventListener('click', () => {
    findResponseField.style.backgroundColor = '#fff';
    const findValueOfLessons = findChoose.querySelector('.offers1__lessons:checked');
    const findValueOfQuestions = findChoose.querySelector('.offers1__choice:checked');
    const findValueOfLanguage = findChoose.querySelector('.offers1__languages:checked');
  
    console.log(findValueOfLessons.value + ' ' + findValueOfQuestions.value + ' ' + findValueOfLanguage.value);
  
    switch (findValueOfLessons.value) {
      case '1':
        arrOfQuestions = OFFERS_A1_51_57;
        break;
      case '2':
        arrOfQuestions = OFFERS_A1_58_62;
        break;
      case '3':
        arrOfQuestions = OFFERS_A1_63_71;
        break;
      case '4':
        arrOfQuestions = OFFERS_A1_72_76;
        break;
      default:
        arrOfQuestions = OFFERS_A1_51_57;
    }
  
    console.log('arrOfQuestions' + ' ' + arrOfQuestions.length);
  
    findChoose.style.display = 'none';
    findContainerForContent.style.display = 'block';
    findContainerBottomWrapper.style.display = 'block';
  
    findBtnResult.classList.remove('visually-hidden');
  
    valueOfQuestions = findValueOfQuestions.value;
    valueOfQuestionsAll = findValueOfQuestions.value;
    valueOfLanguage = findValueOfLanguage.value;
  
    offersArray = generateRandomNumbers(findValueOfQuestions.value, arrOfQuestions);
    console.log('offersArray ' + offersArray);
    offersArrayMistakes = generateRandomMistakes(findValueOfQuestions.value, arrOfQuestions, offersArray);
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
  
    if (result === arrOfQuestions[offersArray[renderСounters]][languageAnswer]) {
      console.log('ДА');
      findResponseField.style.backgroundColor = 'green';
      scoreValue++;
    } else {
      console.log('НЕТ');
      findResponseField.style.backgroundColor = 'red';
      findRightAnswer.textContent = arrOfQuestions[offersArray[renderСounters]][languageAnswer];
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

if (document.querySelector('#template-transcription__new') !== null) {
  try {
    document.querySelector('.menu__link[href="transcription.html"]').dataset.current = 'true';
  } catch {
    console.log('.menu__link[href="transcription.html"] - не найдено');
  }

  const PRONUNCIATION_BRITISH = [

    { en: 'Ben', tr: '[ben]' },

    { en: 'Bible', tr: '[ˈbaɪbᵊl]' },

    { en: 'British', tr: '[ˈbrɪtɪʃ]' },

    { en: 'China', tr: '[ˈʧaɪnə]' },

    { en: 'Chinese', tr: '[ʧaɪˈniːz]' },

    { en: 'French', tr: '[frenʧ]' },

    { en: 'German', tr: '[ˈʤɜːmən]' },

    { en: 'Greek', tr: '[ɡriːk]' },

    { en: 'I', tr: '[aɪ]' },

    { en: 'Jack', tr: '[ʤæk]' },

    { en: 'Jake', tr: '[ʤeɪk]' },

    { en: 'June', tr: '[ʤuːn]' },

    { en: 'March', tr: '[mɑːʧ]' },

    { en: 'Mexican', tr: '[ˈmeksɪkᵊn]' },

    { en: 'Mexico', tr: '[ˈmeksɪkəʊ]' },

    { en: 'Pam', tr: '[pæm]' },

    { en: 'Pete', tr: '[piːt]' },

    { en: 'Peter', tr: '[ˈpiːtə]' },

    { en: 'Sam', tr: '[sæm]' },

    { en: 'Steve', tr: '[stiːv]' },

    { en: 'a', tr: '[eɪ]' },

    { en: 'abandon', tr: '[əˈbændən]' },

    { en: 'able', tr: '[ˈeɪbᵊl]' },

    { en: 'accounting', tr: '[əˈkaʊntɪŋ]' },

    { en: 'ace', tr: '[eɪs]' },

    { en: 'acknowledge', tr: '[əkˈnɒlɪʤ]' },

    { en: 'acknowledgement', tr: '[əkˈnɒlɪʤmənt]' },

    { en: 'act', tr: '[ækt]' },

    { en: 'active', tr: '[ˈæktɪv]' },

    { en: 'activist', tr: '[ˈæktɪvɪst]' },

    { en: 'ad', tr: '[æd]' },

    { en: 'advertising', tr: '[ˈædvətaɪzɪŋ]' },

    { en: 'afternoon', tr: '[ɑːftəˈnuːn]' },

    { en: 'afterwards', tr: '[ˈɑːftəwədz]' },

    { en: 'age', tr: '[eɪʤ]' },

    { en: 'aggressive', tr: '[əˈɡresɪv]' },

    { en: 'agree', tr: '[əˈɡriː]' },

    { en: 'agreement', tr: '[əˈɡriːmənt]' },

    { en: 'aircraft', tr: '[ˈeəkrɑːft]' },

    { en: 'ale', tr: '[eɪl]' },

    { en: 'all', tr: '[ɔːl]' },

    { en: 'alter', tr: '[ˈɒltə]' },

    { en: 'alternative', tr: '[ɒlˈtɜːnətɪv]' },

    { en: 'although', tr: '[ɔːlˈðəʊ]' },

    { en: 'altogether', tr: '[ɔːltəˈɡeðə]' },

    { en: 'am', tr: '[æm]' },

    { en: 'ambassador', tr: '[æmˈbæsədə]' },

    { en: 'an', tr: '[æn]' },

    { en: 'and', tr: '[ænd]' },

    { en: 'ant', tr: '[ænt]' },

    { en: 'apologize', tr: '[əˈpɒləʤaɪz]' },

    { en: 'are', tr: '[ɑː]' },

    { en: 'article', tr: '[ˈɑːtɪkᵊl]' },

    { en: 'artistic', tr: '[ɑːˈtɪstɪk]' },

    { en: 'ash', tr: '[æʃ]' },

    { en: 'asked', tr: '[ɑːskt]' },

    { en: 'at', tr: '[æt]' },

    { en: 'attack', tr: '[əˈtæk]' },

    { en: 'baby', tr: '[ˈbeɪbi]' },

    { en: 'back', tr: '[bæk]' },

    { en: 'bad', tr: '[bæd]' },

    { en: 'bag', tr: '[bæɡ]' },

    { en: 'bake', tr: '[beɪk]' },

    { en: 'ball', tr: '[bɔːl]' },

    { en: 'ban', tr: '[bæn]' },

    { en: 'band', tr: '[bænd]' },

    { en: 'bank', tr: '[bæŋk]' },

    { en: 'banking', tr: '[ˈbæŋkɪŋ]' },

    { en: 'base', tr: '[beɪs]' },

    { en: 'baseball', tr: '[ˈbeɪsbɔːl]' },

    { en: 'basic', tr: '[ˈbeɪsɪk]' },

    { en: 'basket', tr: '[ˈbɑːskɪt]' },

    { en: 'basketball', tr: '[ˈbɑːskɪtbɔːl]' },

    { en: 'bat', tr: '[bæt]' },

    { en: 'bay', tr: '[beɪ]' },

    { en: 'be', tr: '[biː]' },

    { en: 'beach', tr: '[biːʧ]' },

    { en: 'bean', tr: '[biːn]' },

    { en: 'beast', tr: '[biːst]' },

    { en: 'beat', tr: '[biːt]' },

    { en: 'bed', tr: '[bed]' },

    { en: 'beef', tr: '[biːf]' },

    { en: 'been', tr: '[biːn]' },

    { en: 'beg', tr: '[beɡ]' },

    { en: 'begin', tr: '[bɪˈɡɪn]' },

    { en: 'beginning', tr: '[bɪˈɡɪnɪŋ]' },

    { en: 'behalf', tr: '[bɪˈhɑːf]' },

    { en: 'belt', tr: '[belt]' },

    { en: 'bench', tr: '[benʧ]' },

    { en: 'bend', tr: '[bend]' },

    { en: 'best', tr: '[best]' },

    { en: 'bet', tr: '[bet]' },

    { en: 'better', tr: '[ˈbetə]' },

    { en: 'big', tr: '[bɪɡ]' },

    { en: 'bigger', tr: '[ˈbɪɡə]' },

    { en: 'bike', tr: '[baɪk]' },

    { en: 'bin', tr: '[bɪn]' },

    { en: 'biography', tr: '[baɪˈɒɡrəfi]' },

    { en: 'bird', tr: '[bɜːd]' },

    { en: 'birth', tr: '[bɜːθ]' },

    { en: 'birthday', tr: '[ˈbɜːθdeɪ]' },

    { en: 'bitch', tr: '[bɪʧ]' },

    { en: 'bite', tr: '[baɪt]' },

    { en: 'bitter', tr: '[ˈbɪtə]' },

    { en: 'black', tr: '[blæk]' },

    { en: 'blade', tr: '[bleɪd]' },

    { en: 'blend', tr: '[blend]' },

    { en: 'blessing', tr: '[ˈblesɪŋ]' },

    { en: 'block', tr: '[blɒk]' },

    { en: 'blue', tr: '[bluː]' },

    { en: 'boil', tr: '[bɔɪl]' },

    { en: 'bold', tr: '[bəʊld]' },

    { en: 'bolt', tr: '[bəʊlt]' },

    { en: 'bone', tr: '[bəʊn]' },

    { en: 'book', tr: '[bʊk]' },

    { en: 'boom', tr: '[buːm]' },

    { en: 'boost', tr: '[buːst]' },

    { en: 'boot', tr: '[buːt]' },

    { en: 'booth', tr: '[buːð]' },

    { en: 'border', tr: '[ˈbɔːdə]' },

    { en: 'boring', tr: '[ˈbɔːrɪŋ]' },

    { en: 'born', tr: '[bɔːn]' },

    { en: 'bother', tr: '[ˈbɒðə]' },

    { en: 'bowl', tr: '[bəʊl]' },

    { en: 'box', tr: '[bɒks]' },

    { en: 'boy', tr: '[bɔɪ]' },

    { en: 'boys', tr: '[bɔɪz]' },

    { en: 'brake', tr: '[breɪk]' },

    { en: 'branch', tr: '[brɑːnʧ]' },

    { en: 'brave', tr: '[breɪv]' },

    { en: 'break', tr: '[breɪk]' },

    { en: 'breath', tr: '[breθ]' },

    { en: 'breathe', tr: '[briːð]' },

    { en: 'breeze', tr: '[briːz]' },

    { en: 'brick', tr: '[brɪk]' },

    { en: 'bride', tr: '[braɪd]' },

    { en: 'bright', tr: '[braɪt]' },

    { en: 'bring', tr: '[brɪŋ]' },

    { en: 'broke', tr: '[brəʊk]' },

    { en: 'broker', tr: '[ˈbrəʊkə]' },

    { en: 'brown', tr: '[braʊn]' },

    { en: 'brush', tr: '[brʌʃ]' },

    { en: 'buck', tr: '[bʌk]' },

    { en: 'bucket', tr: '[ˈbʌkɪt]' },

    { en: 'budget', tr: '[ˈbʌʤɪt]' },

    { en: 'bug', tr: '[bʌɡ]' },

    { en: 'bull', tr: '[bʊl]' },

    { en: 'bullet', tr: '[ˈbʊlɪt]' },

    { en: 'bunch', tr: '[bʌnʧ]' },

    { en: 'burning', tr: '[ˈbɜːnɪŋ]' },

    { en: 'burst', tr: '[bɜːst]' },

    { en: 'bus', tr: '[bʌs]' },

    { en: 'buses', tr: '[ˈbʌsɪz]' },

    { en: 'butter', tr: '[ˈbʌtə]' },

    { en: 'bye', tr: '[baɪ]' },

    { en: 'cab', tr: '[kæb]' },

    { en: 'cabinet', tr: '[ˈkæbɪnɪt]' },

    { en: 'cable', tr: '[ˈkeɪbᵊl]' },

    { en: 'cage', tr: '[keɪʤ]' },

    { en: 'cake', tr: '[keɪk]' },

    { en: 'calendar', tr: '[ˈkælɪndə]' },

    { en: 'call', tr: '[kɔːl]' },

    { en: 'called', tr: '[kɔːld]' },

    { en: 'calm', tr: '[kɑːm]' },

    { en: 'camp', tr: '[kæmp]' },

    { en: 'can', tr: '[kæn]' },

    { en: 'cancer', tr: '[ˈkænsə]' },

    { en: 'cap', tr: '[ˈkæp]' },

    { en: 'cape', tr: '[keɪp]' },

    { en: 'car', tr: '[kɑː]' },

    { en: 'card', tr: '[kɑːd]' },

    { en: 'care', tr: '[keə]' },

    { en: 'carpet', tr: '[ˈkɑːpɪt]' },

    { en: 'cart', tr: '[kɑːt]' },

    { en: 'case', tr: '[keɪs]' },

    { en: 'cash', tr: '[kæʃ]' },

    { en: 'cat', tr: '[kæt]' },

    { en: 'catch', tr: '[kæʧ]' },

    { en: 'cave', tr: '[keɪv]' },

    { en: 'cell', tr: '[sel]' },

    { en: 'chain', tr: '[ʧeɪn]' },

    { en: 'chamber', tr: '[ˈʧeɪmbə]' },

    { en: 'change', tr: '[ʧeɪnʤ]' },

    { en: 'changing', tr: '[ˈʧeɪnʤɪŋ]' },

    { en: 'channel', tr: '[ˈʧænᵊl]' },

    { en: 'chapter', tr: '[ˈʧæptə]' },

    { en: 'charge', tr: '[ʧɑːʤ]' },

    { en: 'charm', tr: '[ʧɑːm]' },

    { en: 'chart', tr: '[ʧɑːt]' },

    { en: 'cheap', tr: '[ʧiːp]' },

    { en: 'cheat', tr: '[ʧiːt]' },

    { en: 'check', tr: '[ʧek]' },

    { en: 'cheek', tr: '[ʧiːk]' },

    { en: 'cheese', tr: '[ʧiːz]' },

    { en: 'chess', tr: '[ʧes]' },

    { en: 'chest', tr: '[ʧest]' },

    { en: 'chicken', tr: '[ˈʧɪkɪn]' },

    { en: 'child', tr: '[ʧaɪld]' },

    { en: 'chill', tr: '[ʧɪl]' },

    { en: 'chin', tr: '[ʧɪn]' },

    { en: 'choice', tr: '[ʧɔɪs]' },

    { en: 'choke', tr: '[ʧəʊk]' },

    { en: 'chop', tr: '[ʧɒp]' },

    { en: 'chose', tr: '[ʧəʊz]' },

    { en: 'chunk', tr: '[ʧʌŋk]' },

    { en: 'church', tr: '[ʧɜːʧ]' },

    { en: 'circle', tr: '[ˈsɜːkᵊl]' },

    { en: 'cite', tr: '[saɪt]' },

    { en: 'citizen', tr: '[ˈsɪtɪzᵊn]' },

    { en: 'citizenship', tr: '[ˈsɪtɪznʃɪp]' },

    { en: 'city', tr: '[ˈsɪti]' },

    { en: 'civic', tr: '[ˈsɪvɪk]' },

    { en: 'civil', tr: '[ˈsɪvᵊl]' },

    { en: 'claim', tr: '[kleɪm]' },

    { en: 'classic', tr: '[ˈklæsɪk]' },

    { en: 'clay', tr: '[kleɪ]' },

    { en: 'clean', tr: '[kliːn]' },

    { en: 'click', tr: '[klɪk]' },

    { en: 'cliff', tr: '[klɪf]' },

    { en: 'climate', tr: '[ˈklaɪmət]' },

    { en: 'cling', tr: '[klɪŋ]' },

    { en: 'clinic', tr: '[ˈklɪnɪk]' },

    { en: 'clinical', tr: '[ˈklɪnɪkᵊl]' },

    { en: 'clip', tr: '[klɪp]' },

    { en: 'clock', tr: '[klɒk]' },

    { en: 'close', tr: '[kləʊz]' },

    { en: 'closer', tr: '[ˈkləʊzə]' },

    { en: 'cloth', tr: '[klɒθ]' },

    { en: 'clothing', tr: '[ˈkləʊðɪŋ]' },

    { en: 'cloud', tr: '[klaʊd]' },

    { en: 'club', tr: '[klʌb]' },

    { en: 'clue', tr: '[kluː]' },

    { en: 'cluster', tr: '[ˈklʌstə]' },

    { en: 'code', tr: '[kəʊd]' },

    { en: 'coin', tr: '[kɔɪn]' },

    { en: 'combination', tr: '[kɒmbɪˈneɪʃᵊn]' },

    { en: 'combine', tr: '[kəmˈbaɪn]' },

    { en: 'comment', tr: '[ˈkɒment]' },

    { en: 'commodity', tr: '[kəˈmɒdəti]' },

    { en: 'companies', tr: '[ˈkʌmpəniz]' },

    { en: 'compete', tr: '[kəmˈpiːt]' },

    { en: 'competitor', tr: '[kəmˈpetɪtə]' },

    { en: 'complain', tr: '[kəmˈpleɪn]' },

    { en: 'complaint', tr: '[kəmˈpleɪnt]' },

    { en: 'complete', tr: '[kəmˈpliːt]' },

    { en: 'complex', tr: '[ˈkɒmpleks]' },

    { en: 'complexity', tr: '[kəmˈpleksəti]' },

    { en: 'component', tr: '[kəmˈpəʊnənt]' },

    { en: 'composition', tr: '[kɒmpəˈzɪʃᵊn]' },

    { en: 'computer', tr: '[kəmˈpjuːtə]' },

    { en: 'concerning', tr: '[kənˈsɜːnɪŋ]' },

    { en: 'cone', tr: '[kəʊn]' },

    { en: 'confident', tr: '[ˈkɒnfɪdᵊnt]' },

    { en: 'confirm', tr: '[kənˈfɜːm]' },

    { en: 'conflict', tr: '[ˈkɒnflɪkt]' },

    { en: 'confuse', tr: '[kənˈfjuːz]' },

    { en: 'consequently', tr: '[ˈkɒnsɪkwəntli]' },

    { en: 'conservation', tr: '[kɒnsəˈveɪʃᵊn]' },

    { en: 'consider', tr: '[kənˈsɪdə]' },

    { en: 'consist', tr: '[kənˈsɪst]' },

    { en: 'consistent', tr: '[kənˈsɪstᵊnt]' },

    { en: 'container', tr: '[kənˈteɪnə]' },

    { en: 'contest', tr: '[ˈkɒntest]' },

    { en: 'context', tr: '[ˈkɒntekst]' },

    { en: 'continent', tr: '[ˈkɒntɪnənt]' },

    { en: 'contract', tr: '[ˈkɒntrækt]' },

    { en: 'contrast', tr: '[ˈkɒntrɑːst]' },

    { en: 'control', tr: '[kənˈtrəʊl]' },

    { en: 'conversion', tr: '[kənˈvɜːʃᵊn]' },

    { en: 'cook', tr: '[kʊk]' },

    { en: 'cooking', tr: '[ˈkʊkɪŋ]' },

    { en: 'cool', tr: '[kuːl]' },

    { en: 'cooperation', tr: '[kəʊɒpᵊrˈeɪʃᵊn]' },

    { en: 'cope', tr: '[kəʊp]' },

    { en: 'copy', tr: '[ˈkɒpi]' },

    { en: 'cord', tr: '[kɔːd]' },

    { en: 'core', tr: '[kɔː]' },

    { en: 'corn', tr: '[kɔːn]' },

    { en: 'corner', tr: '[ˈkɔːnə]' },

    { en: 'correct', tr: '[kəˈrekt]' },

    { en: 'cost', tr: '[kɒst]' },

    { en: 'costly', tr: '[ˈkɒstli]' },

    { en: 'count', tr: '[kaʊnt]' },

    { en: 'counter', tr: '[ˈkaʊntə]' },

    { en: 'cow', tr: '[kaʊ]' },

    { en: 'crack', tr: '[kræk]' },

    { en: 'cradle', tr: '[ˈkreɪdᵊl]' },

    { en: 'craft', tr: '[krɑːft]' },

    { en: 'crane', tr: '[kreɪn]' },

    { en: 'crash', tr: '[kræʃ]' },

    { en: 'crazy', tr: '[ˈkreɪzi]' },

    { en: 'cream', tr: '[kriːm]' },

    { en: 'credibility', tr: '[kredəˈbɪləti]' },

    { en: 'credit', tr: '[ˈkredɪt]' },

    { en: 'criminal', tr: '[ˈkrɪmɪnᵊl]' },

    { en: 'critic', tr: '[ˈkrɪtɪk]' },

    { en: 'critical', tr: '[ˈkrɪtɪkᵊl]' },

    { en: 'criticize', tr: '[ˈkrɪtɪsaɪz]' },

    { en: 'crop', tr: '[krɒp]' },

    { en: 'cross', tr: '[krɒs]' },

    { en: 'crush', tr: '[krʌʃ]' },

    { en: 'cry', tr: '[kraɪ]' },

    { en: 'crystal', tr: '[ˈkrɪstᵊl]' },

    { en: 'cue', tr: '[kjuː]' },

    { en: 'cup', tr: '[kʌp]' },

    { en: 'cure', tr: '[kjʊə]' },

    { en: 'current', tr: '[ˈkʌrᵊnt]' },

    { en: 'currently', tr: '[ˈkʌrᵊntli]' },

    { en: 'curve', tr: '[kɜːv]' },

    { en: 'customer', tr: '[ˈkʌstəmə]' },

    { en: 'cut', tr: '[kʌt]' },

    { en: 'cute', tr: '[kjuːt]' },

    { en: 'cycle', tr: '[ˈsaɪkᵊl]' },

    { en: 'dad', tr: '[dæd]' },

    { en: 'dam', tr: '[dæm]' },

    { en: 'dame', tr: '[deɪm]' },

    { en: 'dare', tr: '[deə]' },

    { en: 'data', tr: '[ˈdeɪtə]' },

    { en: 'date', tr: '[deɪt]' },

    { en: 'day', tr: '[deɪ]' },

    { en: 'days', tr: '[deɪz]' },

    { en: 'deal', tr: '[diːl]' },

    { en: 'dealer', tr: '[ˈdiːlə]' },

    { en: 'decent', tr: '[ˈdiːsᵊnt]' },

    { en: 'decide', tr: '[dɪˈsaɪd]' },

    { en: 'deck', tr: '[dek]' },

    { en: 'dedicate', tr: '[ˈdedɪkeɪt]' },

    { en: 'deem', tr: '[diːm]' },

    { en: 'deep', tr: '[diːp]' },

    { en: 'deficit', tr: '[ˈdefɪsɪt]' },

    { en: 'degree', tr: '[dɪˈɡriː]' },

    { en: 'delight', tr: '[dɪˈlaɪt]' },

    { en: 'deliver', tr: '[dɪˈlɪvə]' },

    { en: 'democrat', tr: '[ˈdeməkræt]' },

    { en: 'democratic', tr: '[deməˈkrætɪk]' },

    { en: 'demographic', tr: '[deməˈɡræfɪk]' },

    { en: 'depth', tr: '[depθ]' },

    { en: 'desk', tr: '[desk]' },

    { en: 'dice', tr: '[daɪs]' },

    { en: 'die', tr: '[daɪ]' },

    { en: 'differ', tr: '[ˈdɪfə]' },

    { en: 'dig', tr: '[dɪɡ]' },

    { en: 'digital', tr: '[ˈdɪʤɪtᵊl]' },

    { en: 'dignity', tr: '[ˈdɪɡnəti]' },

    { en: 'dime', tr: '[daɪm]' },

    { en: 'dine', tr: '[daɪn]' },

    { en: 'dining', tr: '[ˈdaɪnɪŋ]' },

    { en: 'dinner', tr: '[ˈdɪnə]' },

    { en: 'dip', tr: '[dɪp]' },

    { en: 'dirt', tr: '[dɜːt]' },

    { en: 'disaster', tr: '[dɪˈzɑːstə]' },

    { en: 'discount', tr: '[ˈdɪskaʊnt]' },

    { en: 'dish', tr: '[dɪʃ]' },

    { en: 'disk', tr: '[dɪsk]' },

    { en: 'display', tr: '[dɪˈspleɪ]' },

    { en: 'distance', tr: '[ˈdɪstᵊns]' },

    { en: 'district', tr: '[ˈdɪstrɪkt]' },

    { en: 'disturbing', tr: '[dɪˈstɜːbɪŋ]' },

    { en: 'dock', tr: '[dɒk]' },

    { en: 'doctor', tr: '[ˈdɒktə]' },

    { en: 'dog', tr: '[dɒɡ]' },

    { en: 'dogs', tr: '[dɒɡz]' },

    { en: 'dome', tr: '[dəʊm]' },

    { en: 'dope', tr: '[dəʊp]' },

    { en: 'dose', tr: '[dəʊs]' },

    { en: 'dot', tr: '[dɒt]' },

    { en: 'down', tr: '[daʊn]' },

    { en: 'downtown', tr: '[ˈdaʊntaʊn]' },

    { en: 'draft', tr: '[drɑːft]' },

    { en: 'drag', tr: '[dræɡ]' },

    { en: 'drank', tr: '[dræŋk]' },

    { en: 'dream', tr: '[driːm]' },

    { en: 'drinking', tr: '[ˈdrɪŋkɪŋ]' },

    { en: 'drive', tr: '[draɪv]' },

    { en: 'driver', tr: '[ˈdraɪvə]' },

    { en: 'driving', tr: '[ˈdraɪvɪŋ]' },

    { en: 'drove', tr: '[drəʊv]' },

    { en: 'drug', tr: '[drʌɡ]' },

    { en: 'drunk', tr: '[drʌŋk]' },

    { en: 'dry', tr: '[draɪ]' },

    { en: 'duck', tr: '[dʌk]' },

    { en: 'due', tr: '[djuː]' },

    { en: 'duty', tr: '[ˈdjuːti]' },

    { en: 'dye', tr: '[daɪ]' },

    { en: 'each', tr: '[iːʧ]' },

    { en: 'eager', tr: '[ˈiːɡə]' },

    { en: 'earnings', tr: '[ˈɜːnɪŋz]' },

    { en: 'ease', tr: '[iːz]' },

    { en: 'eat', tr: '[iːt]' },

    { en: 'eating', tr: '[ˈiːtɪŋ]' },

    { en: 'economic', tr: '[iːkəˈnɒmɪk]' },

    { en: 'edge', tr: '[eʤ]' },

    { en: 'effect', tr: '[ɪˈfekt]' },

    { en: 'effective', tr: '[ɪˈfektɪv]' },

    { en: 'eight', tr: '[eɪt]' },

    { en: 'elbow', tr: '[ˈelbəʊ]' },

    { en: 'elder', tr: '[ˈeldə]' },

    { en: 'elegant', tr: '[ˈelɪɡᵊnt]' },

    { en: 'elephant', tr: '[ˈelɪfənt]' },

    { en: 'eligible', tr: '[ˈelɪʤəbᵊl]' },

    { en: 'emerging', tr: '[ɪˈmɜːʤɪŋ]' },

    { en: 'end', tr: '[end]' },

    { en: 'engage', tr: '[ɪnˈɡeɪʤ]' },

    { en: 'engagement', tr: '[ɪnˈɡeɪʤmənt]' },

    { en: 'enter', tr: '[ˈentə]' },

    { en: 'enthusiasm', tr: '[ɪnˈθjuːziæzᵊm]' },

    { en: 'equal', tr: '[ˈiːkwəl]' },

    { en: 'equally', tr: '[ˈiːkwəli]' },

    { en: 'equivalent', tr: '[ɪˈkwɪvᵊlᵊnt]' },

    { en: 'error', tr: '[ˈerə]' },

    { en: 'ethical', tr: '[ˈeθɪkᵊl]' },

    { en: 'ethics', tr: '[ˈeθɪks]' },

    { en: 'ethnic', tr: '[ˈeθnɪk]' },

    { en: 'evening', tr: '[ˈiːvnɪŋ]' },

    { en: 'ever', tr: '[ˈevə]' },

    { en: 'everything', tr: '[ˈevriθɪŋ]' },

    { en: 'exact', tr: '[ɪɡˈzækt]' },

    { en: 'exactly', tr: '[ɪɡˈzæktli]' },

    { en: 'exam', tr: '[ɪɡˈzæm]' },

    { en: 'example', tr: '[ɪɡˈzɑːmpᵊl]' },

    { en: 'excellent', tr: '[ˈeksᵊlᵊnt]' },

    { en: 'except', tr: '[ɪkˈsept]' },

    { en: 'exclusive', tr: '[ɪksˈkluːsɪv]' },

    { en: 'exist', tr: '[ɪɡˈzɪst]' },

    { en: 'existing', tr: '[ɪɡˈzɪstɪŋ]' },

    { en: 'expand', tr: '[ɪksˈpænd]' },

    { en: 'expect', tr: '[ɪkˈspekt]' },

    { en: 'expensive', tr: '[ɪkˈspensɪv]' },

    { en: 'expensively', tr: '[ɪkˈspensɪvli]' },

    { en: 'explicit', tr: '[ɪksˈplɪsɪt]' },

    { en: 'explicitly', tr: '[ɪksˈplɪsɪtli]' },

    { en: 'exploit', tr: '[ɪksˈplɔɪt]' },

    { en: 'explore', tr: '[ɪkˈsplɔː]' },

    { en: 'expose', tr: '[ɪksˈpəʊz]' },

    { en: 'express', tr: '[ɪkˈspres]' },

    { en: 'extend', tr: '[ɪkˈstend]' },

    { en: 'extreme', tr: '[ɪkˈstriːm]' },

    { en: 'extremely', tr: '[ɪkˈstriːmli]' },

    { en: 'eyes', tr: '[aɪz]' },

    { en: 'face', tr: '[feɪs]' },

    { en: 'fact', tr: '[fækt]' },

    { en: 'factor', tr: '[ˈfæktə]' },

    { en: 'fade', tr: '[feɪd]' },

    { en: 'fake', tr: '[feɪk]' },

    { en: 'fall', tr: '[fɔːl]' },

    { en: 'fame', tr: '[feɪm]' },

    { en: 'families', tr: '[ˈfæmɪliz]' },

    { en: 'fan', tr: '[fæn]' },

    { en: 'fancy', tr: '[ˈfænsi]' },

    { en: 'fantastic', tr: '[fænˈtæstɪk]' },

    { en: 'fare', tr: '[feə]' },

    { en: 'farmer', tr: '[ˈfɑːmə]' },

    { en: 'fat', tr: '[fæt]' },

    { en: 'fate', tr: '[feɪt]' },

    { en: 'fee', tr: '[fiː]' },

    { en: 'feed', tr: '[fiːd]' },

    { en: 'feel', tr: '[fiːl]' },

    { en: 'feeling', tr: '[ˈfiːlɪŋ]' },

    { en: 'fellow', tr: '[ˈfeləʊ]' },

    { en: 'fiction', tr: '[ˈfɪkʃᵊn]' },

    { en: 'fifteen', tr: '[fɪfˈtiːn]' },

    { en: 'fifth', tr: '[fɪfθ]' },

    { en: 'fight', tr: '[faɪt]' },

    { en: 'fighter', tr: '[ˈfaɪtə]' },

    { en: 'file', tr: '[faɪl]' },

    { en: 'filter', tr: '[ˈfɪltə]' },

    { en: 'fine', tr: '[faɪn]' },

    { en: 'finger', tr: '[ˈfɪŋɡə]' },

    { en: 'fingers', tr: '[ˈfɪŋɡəz]' },

    { en: 'finish', tr: '[ˈfɪnɪʃ]' },

    { en: 'fire', tr: '[faɪə]' },

    { en: 'firm', tr: '[fɜːm]' },

    { en: 'first', tr: '[fɜːst]' },

    { en: 'fiscal', tr: '[ˈfɪskᵊl]' },

    { en: 'fish', tr: '[fɪʃ]' },

    { en: 'fisherman', tr: '[ˈfɪʃəmən]' },

    { en: 'fishing', tr: '[ˈfɪʃɪŋ]' },

    { en: 'fix', tr: '[fɪks]' },

    { en: 'flag', tr: '[flæɡ]' },

    { en: 'flame', tr: '[fleɪm]' },

    { en: 'flash', tr: '[flæʃ]' },

    { en: 'flat', tr: '[flæt]' },

    { en: 'flee', tr: '[fliː]' },

    { en: 'fleet', tr: '[fliːt]' },

    { en: 'flesh', tr: '[fleʃ]' },

    { en: 'flexibility', tr: '[fleksəˈbɪləti]' },

    { en: 'flexible', tr: '[ˈfleksəbᵊl]' },

    { en: 'flight', tr: '[flaɪt]' },

    { en: 'flow', tr: '[fləʊ]' },

    { en: 'fly', tr: '[flaɪ]' },

    { en: 'flying', tr: '[ˈflaɪɪŋ]' },

    { en: 'fog', tr: '[fɒɡ]' },

    { en: 'fold', tr: '[fəʊld]' },

    { en: 'follow', tr: '[ˈfɒləʊ]' },

    { en: 'food', tr: '[fuːd]' },

    { en: 'foot', tr: '[fʊt]' },

    { en: 'football', tr: '[ˈfʊtbɔːl]' },

    { en: 'footballer', tr: '[ˈfʊtbɔːlə]' },

    { en: 'for', tr: '[fɔː]' },

    { en: 'force', tr: '[fɔːs]' },

    { en: 'form', tr: '[fɔːm]' },

    { en: 'former', tr: '[ˈfɔːmə]' },

    { en: 'forth', tr: '[fɔːθ]' },

    { en: 'foster', tr: '[ˈfɒstə]' },

    { en: 'found', tr: '[faʊnd]' },

    { en: 'fox', tr: '[fɒks]' },

    { en: 'fragment', tr: '[ˈfræɡmənt]' },

    { en: 'frame', tr: '[freɪm]' },

    { en: 'framework', tr: '[ˈfreɪmwɜːk]' },

    { en: 'free', tr: '[friː]' },

    { en: 'freeze', tr: '[friːz]' },

    { en: 'frequency', tr: '[ˈfriːkwənsi]' },

    { en: 'frequent', tr: '[ˈfriːkwᵊnt]' },

    { en: 'fresh', tr: '[freʃ]' },

    { en: 'fry', tr: '[fraɪ]' },

    { en: 'full', tr: '[fʊl]' },

    { en: 'fully', tr: '[ˈfʊli]' },

    { en: 'fun', tr: '[fʌn]' },

    { en: 'funding', tr: '[ˈfʌndɪŋ]' },

    { en: 'fur', tr: '[fɜː]' },

    { en: 'furthermore', tr: '[ˈfɜːðəˈmɔː]' },

    { en: 'fuse', tr: '[fjuːz]' },

    { en: 'gain', tr: '[ɡeɪn]' },

    { en: 'gale', tr: '[ɡeɪl]' },

    { en: 'game', tr: '[ɡeɪm]' },

    { en: 'gap', tr: '[ɡæp]' },

    { en: 'garden', tr: '[ˈɡɑːdᵊn]' },

    { en: 'garlic', tr: '[ˈɡɑːlɪk]' },

    { en: 'gas', tr: '[ɡæs]' },

    { en: 'gate', tr: '[ɡeɪt]' },

    { en: 'gather', tr: '[ˈɡæðə]' },

    { en: 'gathering', tr: '[ˈɡæðərɪŋ]' },

    { en: 'gaze', tr: '[ɡeɪz]' },

    { en: 'gender', tr: '[ˈʤendə]' },

    { en: 'gene', tr: '[ʤiːn]' },

    { en: 'general', tr: '[ˈʤenᵊrᵊl]' },

    { en: 'gently', tr: '[ˈʤentli]' },

    { en: 'get', tr: '[ɡet]' },

    { en: 'girl', tr: '[ɡɜːl]' },

    { en: 'glad', tr: '[ɡlæd]' },

    { en: 'glimpse', tr: '[ɡlɪmps]' },

    { en: 'globe', tr: '[ˈɡləʊb]' },

    { en: 'glory', tr: '[ˈɡlɔːri]' },

    { en: 'glue', tr: '[ɡluː]' },

    { en: 'go', tr: '[ɡəʊ]' },

    { en: 'gold', tr: '[ɡəʊld]' },

    { en: 'golden', tr: '[ˈɡəʊldᵊn]' },

    { en: 'golf', tr: '[ɡɒlf]' },

    { en: 'good', tr: '[ɡʊd]' },

    { en: 'goods', tr: '[ɡʊdz]' },

    { en: 'grab', tr: '[ɡræb]' },

    { en: 'grace', tr: '[ɡreɪs]' },

    { en: 'grade', tr: '[ɡreɪd]' },

    { en: 'grain', tr: '[ɡreɪn]' },

    { en: 'grape', tr: '[ɡreɪp]' },

    { en: 'grateful', tr: '[ˈɡreɪtfᵊl]' },

    { en: 'grave', tr: '[ɡreɪv]' },

    { en: 'gray', tr: '[ɡreɪ]' },

    { en: 'green', tr: '[ɡriːn]' },

    { en: 'greet', tr: '[ɡriːt]' },

    { en: 'grey', tr: '[ɡreɪ]' },

    { en: 'grin', tr: '[ɡrɪn]' },

    { en: 'ground', tr: '[ɡraʊnd]' },

    { en: 'grove', tr: '[ɡrəʊv]' },

    { en: 'grow', tr: '[ɡrəʊ]' },

    { en: 'growing', tr: '[ˈɡrəʊɪŋ]' },

    { en: 'growth', tr: '[ɡrəʊθ]' },

    { en: 'gun', tr: '[ɡʌn]' },

    { en: 'gut', tr: '[ɡʌt]' },

    { en: 'gym', tr: '[ʤɪm]' },

    { en: 'half', tr: '[hɑːf]' },

    { en: 'halfway', tr: '[hɑːfˈweɪ]' },

    { en: 'hall', tr: '[hɔːl]' },

    { en: 'hallway', tr: '[ˈhɔːlweɪ]' },

    { en: 'halo', tr: '[ˈheɪləʊ]' },

    { en: 'hand', tr: '[hænd]' },

    { en: 'hands', tr: '[hændz]' },

    { en: 'hang', tr: '[hæŋ]' },

    { en: 'happened', tr: '[ˈhæpᵊnd]' },

    { en: 'hard', tr: '[hɑːd]' },

    { en: 'hare', tr: '[heə]' },

    { en: 'harm', tr: '[hɑːm]' },

    { en: 'harsh', tr: '[hɑːʃ]' },

    { en: 'has', tr: '[hæz]' },

    { en: 'hat', tr: '[hæt]' },

    { en: 'hate', tr: '[heɪt]' },

    { en: 'he', tr: '[hiː]' },

    { en: 'head', tr: '[hed]' },

    { en: 'heal', tr: '[hiːl]' },

    { en: 'heat', tr: '[hiːt]' },

    { en: 'heel', tr: '[hiːl]' },

    { en: 'hell', tr: '[hel]' },

    { en: 'hello', tr: '[heˈləʊ]' },

    { en: 'help', tr: '[help]' },

    { en: 'hence', tr: '[hens]' },

    { en: 'her', tr: '[hɜː]' },

    { en: 'herb', tr: '[hɜːb]' },

    { en: 'herd', tr: '[hɜːd]' },

    { en: 'here', tr: '[hɪə]' },

    { en: 'hi', tr: '[haɪ]' },

    { en: 'hide', tr: '[haɪd]' },

    { en: 'high', tr: '[haɪ]' },

    { en: 'higher', tr: '[ˈhaɪə]' },

    { en: 'highlight', tr: '[ˈhaɪlaɪt]' },

    { en: 'highly', tr: '[ˈhaɪli]' },

    { en: 'highway', tr: '[ˈhaɪweɪ]' },

    { en: 'hike', tr: '[haɪk]' },

    { en: 'hire', tr: '[ˈhaɪə]' },

    { en: 'his', tr: '[hɪz]' },

    { en: 'home', tr: '[həʊm]' },

    { en: 'homework', tr: '[ˈhəʊmwɜːk]' },

    { en: 'hook', tr: '[hʊk]' },

    { en: 'hope', tr: '[həʊp]' },

    { en: 'hose', tr: '[həʊz]' },

    { en: 'hot', tr: '[hɒt]' },

    { en: 'house', tr: '[haʊs]' },

    { en: 'household', tr: '[ˈhaʊshəʊld]' },

    { en: 'how', tr: '[haʊ]' },

    { en: 'however', tr: '[haʊˈevə]' },

    { en: 'hug', tr: '[hʌɡ]' },

    { en: 'huge', tr: '[hjuːʤ]' },

    { en: 'hungry', tr: '[ˈhʌŋɡri]' },

    { en: 'hunting', tr: '[ˈhʌntɪŋ]' },

    { en: 'hurt', tr: '[hɜːt]' },

    { en: 'ice', tr: '[aɪs]' },

    { en: 'immigrant', tr: '[ˈɪmɪɡrənt]' },

    { en: 'immigration', tr: '[ɪmɪˈɡreɪʃᵊn]' },

    { en: 'incident', tr: '[ˈɪnsɪdᵊnt]' },

    { en: 'include', tr: '[ɪnˈkluːd]' },

    { en: 'incredible', tr: '[ɪnˈkredəbᵊl]' },

    { en: 'incredibly', tr: '[ɪnˈkredəbᵊli]' },

    { en: 'indeed', tr: '[ɪnˈdiːd]' },

    { en: 'index', tr: '[ˈɪndeks]' },

    { en: 'infection', tr: '[ɪnˈfekʃᵊn]' },

    { en: 'insight', tr: '[ˈɪnsaɪt]' },

    { en: 'inspect', tr: '[ɪnˈspekt]' },

    { en: 'inspection', tr: '[ɪnˈspekʃᵊn]' },

    { en: 'install', tr: '[ɪnˈstɔːl]' },

    { en: 'instinct', tr: '[ˈɪnstɪŋkt]' },

    { en: 'instruct', tr: '[ɪnˈstrʌkt]' },

    { en: 'integrate', tr: '[ˈɪntɪɡreɪt]' },

    { en: 'integration', tr: '[ɪntɪˈɡreɪʃᵊn]' },

    { en: 'intelligent', tr: '[ɪnˈtelɪʤᵊnt]' },

    { en: 'interchangeably', tr: '[ɪntəˈʧeɪnʤəbᵊli]' },

    { en: 'interesting', tr: '[ˈɪntrestɪŋ]' },

    { en: 'is', tr: '[ɪz]' },

    { en: 'it', tr: '[ɪt]' },

    { en: 'jacket', tr: '[ˈʤækɪt]' },

    { en: 'jail', tr: '[ʤeɪl]' },

    { en: 'jam', tr: '[ʤæm]' },

    { en: 'jar', tr: '[ʤɑː]' },

    { en: 'jazz', tr: '[ʤæz]' },

    { en: 'jeans', tr: '[ʤiːnz]' },

    { en: 'jet', tr: '[ʤet]' },

    { en: 'job', tr: '[ʤɒb]' },

    { en: 'jobs', tr: '[ʤɒbz]' },

    { en: 'join', tr: '[ʤɔɪn]' },

    { en: 'joint', tr: '[ʤɔɪnt]' },

    { en: 'joke', tr: '[ʤəʊk]' },

    { en: 'joy', tr: '[ʤɔɪ]' },

    { en: 'judge', tr: '[ˈʤʌʤ]' },

    { en: 'jump', tr: '[ʤʌmp]' },

    { en: 'jungle', tr: '[ˈʤʌŋɡᵊl]' },

    { en: 'just', tr: '[ʤʌst]' },

    { en: 'keep', tr: '[kiːp]' },

    { en: 'kick', tr: '[kɪk]' },

    { en: 'king', tr: '[kɪŋ]' },

    { en: 'kitchen', tr: '[ˈkɪʧᵊn]' },

    { en: 'kite', tr: '[kaɪt]' },

    { en: 'knee', tr: '[niː]' },

    { en: 'kneel', tr: '[niːl]' },

    { en: 'knife', tr: '[naɪf]' },

    { en: 'knit', tr: '[nɪt]' },

    { en: 'knitting', tr: '[ˈnɪtɪŋ]' },

    { en: 'knock', tr: '[nɒk]' },

    { en: 'know', tr: '[nəʊ]' },

    { en: 'knowledge', tr: '[ˈnɒlɪʤ]' },

    { en: 'known', tr: '[nəʊn]' },

    { en: 'lab', tr: '[læb]' },

    { en: 'lace', tr: '[leɪs]' },

    { en: 'lack', tr: '[læk]' },

    { en: 'ladder', tr: '[ˈlædə]' },

    { en: 'lake', tr: '[leɪk]' },

    { en: 'lame', tr: '[leɪm]' },

    { en: 'lamp', tr: '[læmp]' },

    { en: 'land', tr: '[lænd]' },

    { en: 'landed', tr: '[ˈlændɪd]' },

    { en: 'landing', tr: '[ˈlændɪŋ]' },

    { en: 'landscape', tr: '[ˈlænskeɪp]' },

    { en: 'lane', tr: '[leɪn]' },

    { en: 'lap', tr: '[læp]' },

    { en: 'large', tr: '[lɑːʤ]' },

    { en: 'late', tr: '[leɪt]' },

    { en: 'later', tr: '[ˈleɪtə]' },

    { en: 'laughed', tr: '[lɑːft]' },

    { en: 'lay', tr: '[leɪ]' },

    { en: 'lead', tr: '[liːd]' },

    { en: 'leader', tr: '[ˈliːdə]' },

    { en: 'leading', tr: '[ˈliːdɪŋ]' },

    { en: 'leaf', tr: '[liːf]' },

    { en: 'lean', tr: '[liːn]' },

    { en: 'leap', tr: '[liːp]' },

    { en: 'least', tr: '[liːst]' },

    { en: 'leave', tr: '[liːv]' },

    { en: 'left', tr: '[left]' },

    { en: 'leg', tr: '[leɡ]' },

    { en: 'legislation', tr: '[leʤɪsˈleɪʃᵊn]' },

    { en: 'legislative', tr: '[ˈleʤɪslətɪv]' },

    { en: 'legislator', tr: '[ˈleʤɪsleɪtə]' },

    { en: 'lend', tr: '[lend]' },

    { en: 'length', tr: '[leŋθ]' },

    { en: 'let', tr: '[let]' },

    { en: 'letter', tr: '[ˈletə]' },

    { en: 'license', tr: '[ˈlaɪsᵊns]' },

    { en: 'lid', tr: '[lɪd]' },

    { en: 'lie', tr: '[laɪ]' },

    { en: 'light', tr: '[laɪt]' },

    { en: 'lighting', tr: '[ˈlaɪtɪŋ]' },

    { en: 'lightly', tr: '[ˈlaɪtli]' },

    { en: 'lightning', tr: '[ˈlaɪtnɪŋ]' },

    { en: 'like', tr: '[laɪk]' },

    { en: 'liked', tr: '[laɪkt]' },

    { en: 'lime', tr: '[laɪm]' },

    { en: 'line', tr: '[laɪn]' },

    { en: 'liquid', tr: '[ˈlɪkwɪd]' },

    { en: 'list', tr: '[lɪst]' },

    { en: 'living', tr: '[ˈlɪvɪŋ]' },

    { en: 'local', tr: '[ˈləʊkᵊl]' },

    { en: 'lock', tr: '[lɒk]' },

    { en: 'log', tr: '[lɒɡ]' },

    { en: 'logic', tr: '[ˈlɒʤɪk]' },

    { en: 'logical', tr: '[ˈlɒʤɪkᵊl]' },

    { en: 'lone', tr: '[ləʊn]' },

    { en: 'long', tr: '[lɒŋ]' },

    { en: 'look', tr: '[lʊk]' },

    { en: 'loop', tr: '[luːp]' },

    { en: 'lost', tr: '[lɒst]' },

    { en: 'loud', tr: '[laʊd]' },

    { en: 'low', tr: '[ləʊ]' },

    { en: 'lower', tr: '[ˈləʊə]' },

    { en: 'luck', tr: '[lʌk]' },

    { en: 'lucky', tr: '[ˈlʌki]' },

    { en: 'lump', tr: '[lʌmp]' },

    { en: 'lunch', tr: '[lʌnʧ]' },

    { en: 'lung', tr: '[lʌŋ]' },

    { en: 'mad', tr: '[mæd]' },

    { en: 'made', tr: '[meɪd]' },

    { en: 'magic', tr: '[ˈmæʤɪk]' },

    { en: 'magnetic', tr: '[mæɡˈnetɪk]' },

    { en: 'make', tr: '[meɪk]' },

    { en: 'maker', tr: '[ˈmeɪkə]' },

    { en: 'mall', tr: '[mɔːl]' },

    { en: 'man', tr: '[mæn]' },

    { en: 'map', tr: '[mæp]' },

    { en: 'maps', tr: '[mæps]' },

    { en: 'march', tr: '[mɑːʧ]' },

    { en: 'margin', tr: '[ˈmɑːʤɪn]' },

    { en: 'mark', tr: '[mɑːk]' },

    { en: 'marker', tr: '[ˈmɑːkə]' },

    { en: 'mask', tr: '[mɑːsk]' },

    { en: 'master', tr: '[ˈmɑːstə]' },

    { en: 'mat', tr: '[mæt]' },

    { en: 'match', tr: '[mæʧ]' },

    { en: 'mate', tr: '[meɪt]' },

    { en: 'matter', tr: '[ˈmætə]' },

    { en: 'maximum', tr: '[ˈmæksɪməm]' },

    { en: 'may', tr: '[meɪ]' },

    { en: 'maze', tr: '[meɪz]' },

    { en: 'me', tr: '[miː]' },

    { en: 'meal', tr: '[miːl]' },

    { en: 'mean', tr: '[miːn]' },

    { en: 'meaning', tr: '[ˈmiːnɪŋ]' },

    { en: 'meaningful', tr: '[ˈmiːnɪŋfᵊl]' },

    { en: 'meet', tr: '[miːt]' },

    { en: 'meeting', tr: '[ˈmiːtɪŋ]' },

    { en: 'men', tr: '[men]' },

    { en: 'mere', tr: '[mɪə]' },

    { en: 'method', tr: '[ˈmeθəd]' },

    { en: 'mice[maɪs]', tr: '[maɪs][[mɑː]ɪ[es]]' },

    { en: 'midnight', tr: '[ˈmɪdnaɪt]' },

    { en: 'might', tr: '[maɪt]' },

    { en: 'mile', tr: '[maɪl]' },

    { en: 'mine', tr: '[maɪn]' },

    { en: 'minister', tr: '[ˈmɪnɪstə]' },

    { en: 'missing', tr: '[ˈmɪsɪŋ]' },

    { en: 'mix', tr: '[mɪks]' },

    { en: 'mole', tr: '[məʊl]' },

    { en: 'monster', tr: '[ˈmɒnstə]' },

    { en: 'monthly', tr: '[ˈmʌnθli]' },

    { en: 'mood', tr: '[muːd]' },

    { en: 'moon', tr: '[muːn]' },

    { en: 'more', tr: '[mɔː]' },

    { en: 'morning', tr: '[ˈmɔːnɪŋ]' },

    { en: 'mortgage', tr: '[ˈmɔːɡɪʤ]' },

    { en: 'mount', tr: '[maʊnt]' },

    { en: 'mouse', tr: '[maʊs]' },

    { en: 'mouth', tr: '[maʊθ]' },

    { en: 'much', tr: '[mʌʧ]' },

    { en: 'murder', tr: '[ˈmɜːdə]' },

    { en: 'mutter', tr: '[ˈmʌtə]' },

    { en: 'name', tr: '[neɪm]' },

    { en: 'narrow', tr: '[ˈnærəʊ]' },

    { en: 'neat', tr: '[niːt]' },

    { en: 'neck', tr: '[nek]' },

    { en: 'need', tr: '[niːd]' },

    { en: 'needed', tr: '[ˈniːdɪd]' },

    { en: 'needle', tr: '[ˈniːdᵊl]' },

    { en: 'nest', tr: '[nest]' },

    { en: 'net', tr: '[net]' },

    { en: 'network', tr: '[ˈnetwɜːk]' },

    { en: 'never', tr: '[ˈnevə]' },

    { en: 'nevertheless', tr: '[nevəðəˈles]' },

    { en: 'next', tr: '[nekst]' },

    { en: 'nice', tr: '[naɪs]' },

    { en: 'night', tr: '[naɪt]' },

    { en: 'nightmare', tr: '[ˈnaɪtmeə]' },

    { en: 'nine', tr: '[naɪn]' },

    { en: 'nineteen', tr: '[naɪnˈtiːn]' },

    { en: 'ninth', tr: '[naɪnθ]' },

    { en: 'no', tr: '[nəʊ]' },

    { en: 'noble', tr: '[ˈnəʊbᵊl]' },

    { en: 'noise', tr: '[nɔɪz]' },

    { en: 'noon', tr: '[nuːn]' },

    { en: 'nor', tr: '[nɔː]' },

    { en: 'norm', tr: '[nɔːm]' },

    { en: 'north', tr: '[nɔːθ]' },

    { en: 'northwest', tr: '[nɔːθˈwest]' },

    { en: 'nose', tr: '[nəʊz]' },

    { en: 'note', tr: '[nəʊt]' },

    { en: 'notebook', tr: '[ˈnəʊtbʊk]' },

    { en: 'notice', tr: '[ˈnəʊtɪs]' },

    { en: 'noticed', tr: '[ˈnəʊtɪst]' },

    { en: 'now', tr: '[naʊ]' },

    { en: 'number', tr: '[ˈnʌmbə]' },

    { en: 'offer', tr: '[ˈɒfə]' },

    { en: 'office', tr: '[ˈɒfɪs]' },

    { en: 'officer', tr: '[ˈɒfɪsə]' },

    { en: 'official', tr: '[əˈfɪʃᵊl]' },

    { en: 'oi', tr: '[ɔɪ]' },

    { en: 'oil', tr: '[ɔɪl]' },

    { en: 'okay', tr: '[ˈəʊˈkeɪ]' },

    { en: 'old', tr: '[əʊld]' },

    { en: 'on', tr: '[ɒn]' },

    { en: 'ongoing', tr: '[ˈɒŋɡəʊɪŋ]' },

    { en: 'opening', tr: '[ˈəʊpnɪŋ]' },

    { en: 'operating', tr: '[ˈɒpᵊreɪtɪŋ]' },

    { en: 'operator', tr: '[ˈɒpᵊreɪtə]' },

    { en: 'orange', tr: '[ˈɒrɪnʤ]' },

    { en: 'order', tr: '[ˈɔːdə]' },

    { en: 'organism', tr: '[ˈɔːɡᵊnɪzᵊm]' },

    { en: 'original', tr: '[əˈrɪʤᵊnᵊl]' },

    { en: 'originally', tr: '[əˈrɪʤᵊnᵊli]' },

    { en: 'out', tr: '[aʊt]' },

    { en: 'outer', tr: '[ˈaʊtə]' },

    { en: 'outfit', tr: '[ˈaʊtfɪt]' },

    { en: 'outlet', tr: '[ˈaʊtlet]' },

    { en: 'outline', tr: '[ˈaʊtlaɪn]' },

    { en: 'output', tr: '[ˈaʊtpʊt]' },

    { en: 'outside', tr: '[aʊtˈsaɪd]' },

    { en: 'outsider', tr: '[aʊtˈsaɪdə]' },

    { en: 'outstanding', tr: '[aʊtˈstændɪŋ]' },

    { en: 'own', tr: '[əʊn]' },

    { en: 'owner', tr: '[ˈəʊnə]' },

    { en: 'ownership', tr: '[ˈəʊnəʃɪp]' },

    { en: 'pace', tr: '[peɪs]' },

    { en: 'pack', tr: '[pæk]' },

    { en: 'page', tr: '[peɪʤ]' },

    { en: 'painter', tr: '[ˈpeɪntə]' },

    { en: 'painting', tr: '[ˈpeɪntɪŋ]' },

    { en: 'pale', tr: '[peɪl]' },

    { en: 'palm', tr: '[pɑːm]' },

    { en: 'pan', tr: '[pæn]' },

    { en: 'parish', tr: '[ˈpærɪʃ]' },

    { en: 'park', tr: '[pɑːk]' },

    { en: 'parking', tr: '[ˈpɑːkɪŋ]' },

    { en: 'part', tr: '[pɑːt]' },

    { en: 'participant', tr: '[pɑːˈtɪsɪpᵊnt]' },

    { en: 'partner', tr: '[ˈpɑːtnə]' },

    { en: 'passing', tr: '[ˈpɑːsɪŋ]' },

    { en: 'pat', tr: '[pæt]' },

    { en: 'patch', tr: '[pæʧ]' },

    { en: 'pay', tr: '[peɪ]' },

    { en: 'payment', tr: '[ˈpeɪmənt]' },

    { en: 'peace', tr: '[piːs]' },

    { en: 'peak', tr: '[piːk]' },

    { en: 'peel', tr: '[piːl]' },

    { en: 'pen', tr: '[pen]' },

    { en: 'pencil', tr: '[ˈpensᵊl]' },

    { en: 'pencils', tr: '[ˈpensᵊlz]' },

    { en: 'pens', tr: '[penz]' },

    { en: 'pepper', tr: '[ˈpepə]' },

    { en: 'pet', tr: '[pet]' },

    { en: 'phase', tr: '[feɪz]' },

    { en: 'phenomenon', tr: '[fəˈnɒmɪnən]' },

    { en: 'philosophical', tr: '[fɪləˈsɒfɪkᵊl]' },

    { en: 'philosophy', tr: '[fɪˈlɒsəfi]' },

    { en: 'phone', tr: '[fəʊn]' },

    { en: 'photo', tr: '[ˈfəʊtəʊ]' },

    { en: 'photograph', tr: '[ˈfəʊtəɡrɑːf]' },

    { en: 'photographer', tr: '[fəˈtɒɡrəfə]' },

    { en: 'photography', tr: '[fəˈtɒɡrəfi]' },

    { en: 'phrase', tr: '[freɪz]' },

    { en: 'physical', tr: '[ˈfɪzɪkᵊl]' },

    { en: 'physically', tr: '[ˈfɪzɪkᵊli]' },

    { en: 'physics', tr: '[ˈfɪzɪks]' },

    { en: 'pick', tr: '[pɪk]' },

    { en: 'pie', tr: '[paɪ]' },

    { en: 'pig', tr: '[pɪɡ]' },

    { en: 'pike', tr: '[paɪk]' },

    { en: 'pile', tr: '[paɪl]' },

    { en: 'pillow', tr: '[ˈpɪləʊ]' },

    { en: 'pine', tr: '[paɪn]' },

    { en: 'pipe', tr: '[paɪp]' },

    { en: 'pitch', tr: '[pɪʧ]' },

    { en: 'pitcher', tr: '[ˈpɪʧə]' },

    { en: 'place', tr: '[pleɪs]' },

    { en: 'places', tr: '[ˈpleɪsɪz]' },

    { en: 'plan', tr: '[plæn]' },

    { en: 'plane', tr: '[pleɪn]' },

    { en: 'planner', tr: '[ˈplænə]' },

    { en: 'planning', tr: '[ˈplænɪŋ]' },

    { en: 'plastic', tr: '[ˈplæstɪk]' },

    { en: 'plate', tr: '[pleɪt]' },

    { en: 'play', tr: '[pleɪ]' },

    { en: 'plea', tr: '[pliː]' },

    { en: 'plead', tr: '[pliːd]' },

    { en: 'please', tr: '[pliːz]' },

    { en: 'plunge', tr: '[plʌnʤ]' },

    { en: 'plus', tr: '[plʌs]' },

    { en: 'pocket', tr: '[ˈpɒkɪt]' },

    { en: 'point', tr: '[pɔɪnt]' },

    { en: 'poke', tr: '[pəʊk]' },

    { en: 'pole', tr: '[pəʊl]' },

    { en: 'police', tr: '[pəˈliːs]' },

    { en: 'political', tr: '[pəˈlɪtɪkᵊl]' },

    { en: 'politician', tr: '[pɒlɪˈtɪʃᵊn]' },

    { en: 'politics', tr: '[ˈpɒlətɪks]' },

    { en: 'pool', tr: '[puːl]' },

    { en: 'pop', tr: '[pɒp]' },

    { en: 'porch', tr: '[pɔːʧ]' },

    { en: 'pork', tr: '[pɔːk]' },

    { en: 'port', tr: '[pɔːt]' },

    { en: 'portray', tr: '[pɔːˈtreɪ]' },

    { en: 'pose', tr: '[pəʊz]' },

    { en: 'poster', tr: '[ˈpəʊstə]' },

    { en: 'pot', tr: '[pɒt]' },

    { en: 'pound', tr: '[paʊnd]' },

    { en: 'pray', tr: '[preɪ]' },

    { en: 'prayer', tr: '[preə]' },

    { en: 'preach', tr: '[priːʧ]' },

    { en: 'pregnant', tr: '[ˈpreɡnənt]' },

    { en: 'presence', tr: '[ˈprezᵊns]' },

    { en: 'price', tr: '[praɪs]' },

    { en: 'prime', tr: '[praɪm]' },

    { en: 'principal', tr: '[ˈprɪnsəpᵊl]' },

    { en: 'principle', tr: '[ˈprɪnsəpᵊl]' },

    { en: 'prisoner', tr: '[ˈprɪznə]' },

    { en: 'problems', tr: '[ˈprɒbləmz]' },

    { en: 'producer', tr: '[prəˈdjuːsə]' },

    { en: 'program', tr: '[ˈprəʊɡræm]' },

    { en: 'programs', tr: '[ˈprəʊɡræmz]' },

    { en: 'progressive', tr: '[prəʊˈɡresɪv]' },

    { en: 'prologue', tr: '[ˈprəʊlɒɡ]' },

    { en: 'promise', tr: '[ˈprɒmɪs]' },

    { en: 'promising', tr: '[ˈprɒmɪsɪŋ]' },

    { en: 'prone', tr: '[prəʊn]' },

    { en: 'pronunciation', tr: '[prənʌnsiˈeɪʃᵊn]' },

    { en: 'proof', tr: '[pruːf]' },

    { en: 'prospect', tr: '[ˈprɒspekt]' },

    { en: 'protection', tr: '[prəˈtekʃᵊn]' },

    { en: 'protective', tr: '[prəˈtektɪv]' },

    { en: 'proud', tr: '[praʊd]' },

    { en: 'psychology', tr: '[saɪˈkɒləʤi]' },

    { en: 'public', tr: '[ˈpʌblɪk]' },

    { en: 'publicity', tr: '[pʌˈblɪsəti]' },

    { en: 'publicly', tr: '[ˈpʌblɪkli]' },

    { en: 'publish', tr: '[ˈpʌblɪʃ]' },

    { en: 'publisher', tr: '[ˈpʌblɪʃə]' },

    { en: 'puke', tr: '[pjuːk]' },

    { en: 'pull', tr: '[pʊl]' },

    { en: 'pump', tr: '[pʌmp]' },

    { en: 'punch', tr: '[pʌnʧ]' },

    { en: 'pure', tr: '[pjʊə]' },

    { en: 'queen', tr: '[kwiːn]' },

    { en: 'question', tr: '[ˈkwesʧən]' },

    { en: 'quick', tr: '[kwɪk]' },

    { en: 'quickly', tr: '[ˈkwɪkli]' },

    { en: 'quit', tr: '[kwɪt]' },

    { en: 'quite', tr: '[kwaɪt]' },

    { en: 'quote', tr: '[kwəʊt]' },

    { en: 'race', tr: '[reɪs]' },

    { en: 'rack', tr: '[ræk]' },

    { en: 'radical', tr: '[ˈrædɪkᵊl]' },

    { en: 'radio', tr: '[ˈreɪdiəʊ]' },

    { en: 'rag', tr: '[ræɡ]' },

    { en: 'rage', tr: '[reɪʤ]' },

    { en: 'ranch', tr: '[rɑːnʧ]' },

    { en: 'range', tr: '[reɪnʤ]' },

    { en: 'rank', tr: '[ræŋk]' },

    { en: 'rare', tr: '[reə]' },

    { en: 'rat', tr: '[ræt]' },

    { en: 'rate', tr: '[reɪt]' },

    { en: 'rating', tr: '[ˈreɪtɪŋ]' },

    { en: 'ray', tr: '[reɪ]' },

    { en: 'reach', tr: '[riːʧ]' },

    { en: 'read', tr: '[riːd]' },

    { en: 'reader', tr: '[ˈriːdə]' },

    { en: 'reading', tr: '[ˈriːdɪŋ]' },

    { en: 'ready', tr: '[ˈredi]' },

    { en: 'real', tr: '[rɪəl]' },

    { en: 'recording', tr: '[rɪˈkɔːdɪŋ]' },

    { en: 'red', tr: '[red]' },

    { en: 'regard', tr: '[rɪˈɡɑːd]' },

    { en: 'regarding', tr: '[rɪˈɡɑːdɪŋ]' },

    { en: 'regardless', tr: '[rɪˈɡɑːdləs]' },

    { en: 'regret', tr: '[rɪˈɡret]' },

    { en: 'render', tr: '[ˈrendə]' },

    { en: 'rent', tr: '[rent]' },

    { en: 'reporter', tr: '[rɪˈpɔːtə]' },

    { en: 'request', tr: '[rɪˈkwest]' },

    { en: 'rest', tr: '[rest]' },

    { en: 'rice', tr: '[raɪs]' },

    { en: 'rich', tr: '[rɪʧ]' },

    { en: 'ride', tr: '[raɪd]' },

    { en: 'right', tr: '[raɪt]' },

    { en: 'ring', tr: '[rɪŋ]' },

    { en: 'ripe', tr: '[raɪp]' },

    { en: 'rise', tr: '[raɪz]' },

    { en: 'river', tr: '[ˈrɪvə]' },

    { en: 'robe', tr: '[rəʊb]' },

    { en: 'rock', tr: '[rɒk]' },

    { en: 'rocket', tr: '[ˈrɒkɪt]' },

    { en: 'rode', tr: '[rəʊd]' },

    { en: 'role', tr: '[rəʊl]' },

    { en: 'rolling', tr: '[ˈrəʊlɪŋ]' },

    { en: 'roof', tr: '[ruːf]' },

    { en: 'room', tr: '[ruːm]' },

    { en: 'root', tr: '[ruːt]' },

    { en: 'rope', tr: '[rəʊp]' },

    { en: 'rose', tr: '[rəʊz]' },

    { en: 'round', tr: '[raʊnd]' },

    { en: 'row', tr: '[rəʊ]' },

    { en: 'rubber', tr: '[ˈrʌbə]' },

    { en: 'rule', tr: '[ruːl]' },

    { en: 'runner', tr: '[ˈrʌnə]' },

    { en: 'running', tr: '[ˈrʌnɪŋ]' },

    { en: 'rush', tr: '[rʌʃ]' },

    { en: 'sack', tr: '[sæk]' },

    { en: 'sad', tr: '[sæd]' },

    { en: 'safe', tr: '[seɪf]' },

    { en: 'sake', tr: '[seɪk]' },

    { en: 'same', tr: '[seɪm]' },

    { en: 'sand', tr: '[sænd]' },

    { en: 'sandwich', tr: '[ˈsænwɪʤ]' },

    { en: 'sane', tr: '[seɪn]' },

    { en: 'save', tr: '[seɪv]' },

    { en: 'saving', tr: '[ˈseɪvɪŋ]' },

    { en: 'say', tr: '[seɪ]' },

    { en: 'scale', tr: '[skeɪl]' },

    { en: 'scandal', tr: '[ˈskændᵊl]' },

    { en: 'scare', tr: '[skeə]' },

    { en: 'scheme', tr: '[skiːm]' },

    { en: 'scholar', tr: '[ˈskɒlə]' },

    { en: 'scholarship', tr: '[ˈskɒləʃɪp]' },

    { en: 'school', tr: '[skuːl]' },

    { en: 'scope', tr: '[skəʊp]' },

    { en: 'score', tr: '[skɔː]' },

    { en: 'scratch', tr: '[skræʧ]' },

    { en: 'scream', tr: '[skriːm]' },

    { en: 'screen', tr: '[skriːn]' },

    { en: 'screening', tr: '[ˈskriːnɪŋ]' },

    { en: 'script', tr: '[skrɪpt]' },

    { en: 'seal', tr: '[siːl]' },

    { en: 'seat', tr: '[siːt]' },

    { en: 'second', tr: '[ˈsekənd]' },

    { en: 'secretary', tr: '[ˈsekrətᵊri]' },

    { en: 'section', tr: '[ˈsekʃᵊn]' },

    { en: 'sector', tr: '[ˈsektə]' },

    { en: 'see', tr: '[siː]' },

    { en: 'seed', tr: '[siːd]' },

    { en: 'seek', tr: '[siːk]' },

    { en: 'seem', tr: '[siːm]' },

    { en: 'seemed', tr: '[siːmd]' },

    { en: 'seen', tr: '[siːn]' },

    { en: 'self', tr: '[self]' },

    { en: 'sell', tr: '[sel]' },

    { en: 'seller', tr: '[ˈselə]' },

    { en: 'send', tr: '[send]' },

    { en: 'sent', tr: '[sent]' },

    { en: 'service', tr: '[ˈsɜːvɪs]' },

    { en: 'set', tr: '[set]' },

    { en: 'setting', tr: '[ˈsetɪŋ]' },

    { en: 'seventeen', tr: '[sevᵊnˈtiːn]' },

    { en: 'seventh', tr: '[ˈsevᵊnθ]' },

    { en: 'shade', tr: '[ʃeɪd]' },

    { en: 'shadow', tr: '[ˈʃædəʊ]' },

    { en: 'shake', tr: '[ʃeɪk]' },

    { en: 'shame', tr: '[ʃeɪm]' },

    { en: 'shape', tr: '[ʃeɪp]' },

    { en: 'share', tr: '[ʃeə]' },

    { en: 'shark', tr: '[ʃɑːk]' },

    { en: 'sharp', tr: '[ʃɑːp]' },

    { en: 'she', tr: '[ʃiː]' },

    { en: 'shed', tr: '[ʃed]' },

    { en: 'sheep', tr: '[ʃiːp]' },

    { en: 'sheet', tr: '[ʃiːt]' },

    { en: 'shelf', tr: '[ʃelf]' },

    { en: 'shelter', tr: '[ˈʃeltə]' },

    { en: 'shine', tr: '[ʃaɪn]' },

    { en: 'ship', tr: '[ʃɪp]' },

    { en: 'shirt', tr: '[ʃɜːt]' },

    { en: 'shock', tr: '[ʃɒk]' },

    { en: 'shoe', tr: '[ʃuː]' },

    { en: 'shoot', tr: '[ʃuːt]' },

    { en: 'shooting', tr: '[ˈʃuːtɪŋ]' },

    { en: 'shopping', tr: '[ˈʃɒpɪŋ]' },

    { en: 'short', tr: '[ʃɔːt]' },

    { en: 'shout', tr: '[ʃaʊt]' },

    { en: 'show', tr: '[ʃəʊ]' },

    { en: 'shrimp', tr: '[ʃrɪmp]' },

    { en: 'shrug', tr: '[ʃrʌɡ]' },

    { en: 'shut', tr: '[ʃʌt]' },

    { en: 'shy', tr: '[ʃaɪ]' },

    { en: 'sick', tr: '[sɪk]' },

    { en: 'side', tr: '[saɪd]' },

    { en: 'sidewalk', tr: '[ˈsaɪdwɔːk]' },

    { en: 'sigh', tr: '[saɪ]' },

    { en: 'sight', tr: '[saɪt]' },

    { en: 'sign', tr: '[saɪn]' },

    { en: 'signal', tr: '[ˈsɪɡnᵊl]' },

    { en: 'significance', tr: '[sɪɡˈnɪfɪkᵊns]' },

    { en: 'significant', tr: '[sɪɡˈnɪfɪkᵊnt]' },

    { en: 'silver', tr: '[ˈsɪlvə]' },

    { en: 'sin', tr: '[sɪn]' },

    { en: 'sing', tr: '[sɪŋ]' },

    { en: 'sir', tr: '[sɜː]' },

    { en: 'site', tr: '[saɪt]' },

    { en: 'six', tr: '[sɪks]' },

    { en: 'sixteen', tr: '[sɪkˈstiːn]' },

    { en: 'sixth', tr: '[sɪksθ]' },

    { en: 'size', tr: '[saɪz]' },

    { en: 'skirt', tr: '[skɜːt]' },

    { en: 'sky', tr: '[skaɪ]' },

    { en: 'slam', tr: '[slæm]' },

    { en: 'slap', tr: '[slæp]' },

    { en: 'slave', tr: '[sleɪv]' },

    { en: 'sleep', tr: '[sliːp]' },

    { en: 'sleeve', tr: '[sliːv]' },

    { en: 'slice', tr: '[slaɪs]' },

    { en: 'slide', tr: '[slaɪd]' },

    { en: 'slight', tr: '[slaɪt]' },

    { en: 'slightly', tr: '[ˈslaɪtli]' },

    { en: 'slope', tr: '[sləʊp]' },

    { en: 'slot', tr: '[slɒt]' },

    { en: 'slow', tr: '[sləʊ]' },

    { en: 'slowly', tr: '[ˈsləʊli]' },

    { en: 'sly', tr: '[slaɪ]' },

    { en: 'small', tr: '[smɔːl]' },

    { en: 'smart', tr: '[smɑːt]' },

    { en: 'smile', tr: '[smaɪl]' },

    { en: 'smoke', tr: '[sməʊk]' },

    { en: 'smooth', tr: '[smuːð]' },

    { en: 'snack', tr: '[snæk]' },

    { en: 'snake', tr: '[sneɪk]' },

    { en: 'snap', tr: '[snæp]' },

    { en: 'snow', tr: '[snəʊ]' },

    { en: 'sock', tr: '[sɒk]' },

    { en: 'soil', tr: '[sɔɪl]' },

    { en: 'sold', tr: '[səʊld]' },

    { en: 'sole', tr: '[səʊl]' },

    { en: 'song', tr: '[sɒŋ]' },

    { en: 'soon', tr: '[suːn]' },

    { en: 'sort', tr: '[sɔːt]' },

    { en: 'sound', tr: '[saʊnd]' },

    { en: 'south', tr: '[saʊθ]' },

    { en: 'southeast', tr: '[saʊθˈiːst]' },

    { en: 'southwest', tr: '[saʊθˈwest]' },

    { en: 'space', tr: '[speɪs]' },

    { en: 'spade', tr: '[speɪd]' },

    { en: 'spark', tr: '[spɑːk]' },

    { en: 'speak', tr: '[spiːk]' },

    { en: 'speaker', tr: '[ˈspiːkə]' },

    { en: 'special', tr: '[ˈspeʃᵊl]' },

    { en: 'speech', tr: '[spiːʧ]' },

    { en: 'speed', tr: '[spiːd]' },

    { en: 'spend', tr: '[spend]' },

    { en: 'spending', tr: '[ˈspendɪŋ]' },

    { en: 'sphere', tr: '[sfɪə]' },

    { en: 'spine', tr: '[spaɪn]' },

    { en: 'spoon', tr: '[spuːn]' },

    { en: 'spray', tr: '[spreɪ]' },

    { en: 'spring', tr: '[sprɪŋ]' },

    { en: 'square', tr: '[skweə]' },

    { en: 'squeeze', tr: '[skwiːz]' },

    { en: 'stable', tr: '[ˈsteɪbᵊl]' },

    { en: 'stack', tr: '[stæk]' },

    { en: 'stage', tr: '[steɪʤ]' },

    { en: 'stale', tr: '[steɪl]' },

    { en: 'stand', tr: '[stænd]' },

    { en: 'standing', tr: '[ˈstændɪŋ]' },

    { en: 'star', tr: '[stɑː]' },

    { en: 'stare', tr: '[steə]' },

    { en: 'start', tr: '[stɑːt]' },

    { en: 'starting', tr: '[ˈstɑːtɪŋ]' },

    { en: 'state', tr: '[steɪt]' },

    { en: 'states', tr: '[steɪts]' },

    { en: 'stay', tr: '[steɪ]' },

    { en: 'steam', tr: '[stiːm]' },

    { en: 'step', tr: '[step]' },

    { en: 'stick', tr: '[stɪk]' },

    { en: 'stock', tr: '[stɒk]' },

    { en: 'stole', tr: '[stəʊl]' },

    { en: 'stone', tr: '[stəʊn]' },

    { en: 'stop', tr: '[stɒp]' },

    { en: 'store', tr: '[stɔː]' },

    { en: 'stove', tr: '[stəʊv]' },

    { en: 'straight', tr: '[streɪt]' },

    { en: 'straighten', tr: '[ˈstreɪtᵊn]' },

    { en: 'strange', tr: '[streɪnʤ]' },

    { en: 'stranger', tr: '[ˈstreɪnʤə]' },

    { en: 'stream', tr: '[striːm]' },

    { en: 'street', tr: '[striːt]' },

    { en: 'strength', tr: '[streŋθ]' },

    { en: 'strengthen', tr: '[ˈstreŋθᵊn]' },

    { en: 'stretch', tr: '[streʧ]' },

    { en: 'strict', tr: '[strɪkt]' },

    { en: 'striking', tr: '[ˈstraɪkɪŋ]' },

    { en: 'string', tr: '[strɪŋ]' },

    { en: 'stroke', tr: '[strəʊk]' },

    { en: 'strong', tr: '[strɒŋ]' },

    { en: 'strongly', tr: '[ˈstrɒŋli]' },

    { en: 'struggle', tr: '[ˈstrʌɡᵊl]' },

    { en: 'subject', tr: '[ˈsʌbʤɪkt]' },

    { en: 'such', tr: '[sʌʧ]' },

    { en: 'sue', tr: '[sjuː]' },

    { en: 'suffer', tr: '[ˈsʌfə]' },

    { en: 'suffering', tr: '[ˈsʌfərɪŋ]' },

    { en: 'sugar', tr: '[ˈʃʊɡə]' },

    { en: 'summer', tr: '[ˈsʌmə]' },

    { en: 'sunlight', tr: '[ˈsʌnlaɪt]' },

    { en: 'supper', tr: '[ˈsʌpə]' },

    { en: 'sweep', tr: '[swiːp]' },

    { en: 'sweet', tr: '[swiːt]' },

    { en: 'swim', tr: '[swɪm]' },

    { en: 'swimming', tr: '[ˈswɪmɪŋ]' },

    { en: 'swine', tr: '[swaɪn]' },

    { en: 'swing', tr: '[swɪŋ]' },

    { en: 'switch', tr: '[swɪʧ]' },

    { en: 'table', tr: '[ˈteɪbᵊl]' },

    { en: 'tactic', tr: '[ˈtæktɪk]' },

    { en: 'tag', tr: '[tæɡ]' },

    { en: 'take', tr: '[teɪk]' },

    { en: 'tale', tr: '[teɪl]' },

    { en: 'talk', tr: '[tɔːk]' },

    { en: 'talkative', tr: '[ˈtɔːkətɪv]' },

    { en: 'tall', tr: '[tɔːl]' },

    { en: 'tank', tr: '[tæŋk]' },

    { en: 'tap', tr: '[tæp]' },

    { en: 'tape', tr: '[teɪp]' },

    { en: 'target', tr: '[ˈtɑːɡɪt]' },

    { en: 'task', tr: '[tɑːsk]' },

    { en: 'taste', tr: '[teɪst]' },

    { en: 'tax', tr: '[tæks]' },

    { en: 'tea', tr: '[tiː]' },

    { en: 'teach', tr: '[tiːʧ]' },

    { en: 'teacher', tr: '[ˈtiːʧə]' },

    { en: 'teaches', tr: '[ˈtiːʧɪz]' },

    { en: 'teaching', tr: '[ˈtiːʧɪŋ]' },

    { en: 'team', tr: '[tiːm]' },

    { en: 'teammate', tr: '[ˈtiːmmeɪt]' },

    { en: 'teen', tr: '[tiːn]' },

    { en: 'teenager', tr: '[ˈtiːneɪʤə]' },

    { en: 'telephone', tr: '[ˈtelɪfəʊn]' },

    { en: 'tell', tr: '[tel]' },

    { en: 'ten', tr: '[ten]' },

    { en: 'tend', tr: '[tend]' },

    { en: 'tender', tr: '[ˈtendə]' },

    { en: 'tenth', tr: '[tenθ]' },

    { en: 'term', tr: '[tɜːm]' },

    { en: 'terrific', tr: '[təˈrɪfɪk]' },

    { en: 'test', tr: '[test]' },

    { en: 'testing', tr: '[ˈtestɪŋ]' },

    { en: 'text', tr: '[tekst]' },

    { en: 'textbook', tr: '[ˈtekstbʊk]' },

    { en: 'than', tr: '[ðæn]' },

    { en: 'thank', tr: '[θæŋk]' },

    { en: 'thanks', tr: '[θæŋks]' },

    { en: 'that', tr: '[ðæt]' },

    { en: 'them', tr: '[ðem]' },

    { en: 'theme', tr: '[θiːm]' },

    { en: 'themselves', tr: '[ðəmˈselvz]' },

    { en: 'then', tr: '[ðen]' },

    { en: 'theology', tr: '[θiˈɒləʤi]' },

    { en: 'therapist', tr: '[ˈθerəpɪst]' },

    { en: 'thereby', tr: '[ˈðeəˈbaɪ]' },

    { en: 'these', tr: '[ðiːz]' },

    { en: 'thick', tr: '[θɪk]' },

    { en: 'thigh', tr: '[θaɪ]' },

    { en: 'thing', tr: '[θɪŋ]' },

    { en: 'things', tr: '[θɪŋz]' },

    { en: 'thinking', tr: '[ˈθɪŋkɪŋ]' },

    { en: 'third', tr: '[θɜːd]' },

    { en: 'thirteen', tr: '[θɜːˈtiːn]' },

    { en: 'thirty', tr: '[ˈθɜːti]' },

    { en: 'those', tr: '[ðəʊz]' },

    { en: 'thousand', tr: '[ˈθaʊzənd]' },

    { en: 'three', tr: '[θriː]' },

    { en: 'thrive', tr: '[θraɪv]' },

    { en: 'throw', tr: '[θrəʊ]' },

    { en: 'thus', tr: '[ðʌs]' },

    { en: 'ticket', tr: '[ˈtɪkɪt]' },

    { en: 'tide', tr: '[taɪd]' },

    { en: 'tie', tr: '[taɪ]' },

    { en: 'tight', tr: '[taɪt]' },

    { en: 'tighten', tr: '[ˈtaɪtᵊn]' },

    { en: 'tightly', tr: '[ˈtaɪtli]' },

    { en: 'timber', tr: '[ˈtɪmbə]' },

    { en: 'time', tr: '[taɪm]' },

    { en: 'timing', tr: '[ˈtaɪmɪŋ]' },

    { en: 'tin', tr: '[tɪn]' },

    { en: 'tire', tr: '[ˈtaɪə]' },

    { en: 'title', tr: '[ˈtaɪtᵊl]' },

    { en: 'toe', tr: '[təʊ]' },

    { en: 'together', tr: '[təˈɡeðə]' },

    { en: 'toilet', tr: '[ˈtɔɪlɪt]' },

    { en: 'tomorrow', tr: '[təˈmɒrəʊ]' },

    { en: 'tone', tr: '[təʊn]' },

    { en: 'too', tr: '[tuː]' },

    { en: 'tooth', tr: '[tuːθ]' },

    { en: 'topic', tr: '[ˈtɒpɪk]' },

    { en: 'tore', tr: '[tɔː]' },

    { en: 'town', tr: '[taʊn]' },

    { en: 'trace', tr: '[treɪs]' },

    { en: 'track', tr: '[træk]' },

    { en: 'tracking', tr: '[ˈtrækɪŋ]' },

    { en: 'trade', tr: '[treɪd]' },

    { en: 'trading', tr: '[ˈtreɪdɪŋ]' },

    { en: 'traffic', tr: '[ˈtræfɪk]' },

    { en: 'tragic', tr: '[ˈtræʤɪk]' },

    { en: 'trailer', tr: '[ˈtreɪlə]' },

    { en: 'trainer', tr: '[ˈtreɪnə]' },

    { en: 'training', tr: '[ˈtreɪnɪŋ]' },

    { en: 'transaction', tr: '[trænˈzækʃᵊn]' },

    { en: 'trap', tr: '[træp]' },

    { en: 'tray', tr: '[treɪ]' },

    { en: 'treat', tr: '[triːt]' },

    { en: 'treatment', tr: '[ˈtriːtmənt]' },

    { en: 'tree', tr: '[triː]' },

    { en: 'trend', tr: '[trend]' },

    { en: 'tribe', tr: '[traɪb]' },

    { en: 'trick', tr: '[trɪk]' },

    { en: 'tried', tr: '[traɪd]' },

    { en: 'trigger', tr: '[ˈtrɪɡə]' },

    { en: 'troops', tr: '[truːps]' },

    { en: 'tropical', tr: '[ˈtrɒpɪkᵊl]' },

    { en: 'truck', tr: '[trʌk]' },

    { en: 'true', tr: '[truː]' },

    { en: 'try', tr: '[traɪ]' },

    { en: 'tube', tr: '[ʧuːb]' },

    { en: 'tuck', tr: '[tʌk]' },

    { en: 'tune', tr: '[ʧuːn]' },

    { en: 'turn', tr: '[tɜːn]' },

    { en: 'twice', tr: '[twaɪs]' },

    { en: 'uncle', tr: '[ˈʌŋkᵊl]' },

    { en: 'under', tr: '[ˈʌndə]' },

    { en: 'undergo', tr: '[ʌndəˈɡəʊ]' },

    { en: 'understanding', tr: '[ʌndəˈstændɪŋ]' },

    { en: 'undertake', tr: '[ʌndəˈteɪk]' },

    { en: 'unknown', tr: '[ʌnˈnəʊn]' },

    { en: 'upper', tr: '[ˈʌpə]' },

    { en: 'urge', tr: '[ɜːʤ]' },

    { en: 'us', tr: '[ʌs]' },

    { en: 'use', tr: '[juːz]' },

    { en: 'used', tr: '[juːzd]' },

    { en: 'user', tr: '[ˈjuːzə]' },

    { en: 'van', tr: '[væn]' },

    { en: 'vanish', tr: '[ˈvænɪʃ]' },

    { en: 'vertical', tr: '[ˈvɜːtɪkᵊl]' },

    { en: 'vibe', tr: '[vaɪb]' },

    { en: 'voice', tr: '[vɔɪs]' },

    { en: 'volt', tr: '[vəʊlt]' },

    { en: 'voter', tr: '[ˈvəʊtə]' },

    { en: 'voting', tr: '[ˈvəʊtɪŋ]' },

    { en: 'waited', tr: '[ˈweɪtɪd]' },

    { en: 'wake', tr: '[weɪk]' },

    { en: 'walk', tr: '[wɔːk]' },

    { en: 'walking', tr: '[ˈwɔːkɪŋ]' },

    { en: 'wall', tr: '[wɔːl]' },

    { en: 'wanted', tr: '[ˈwɒntɪd]' },

    { en: 'warehouse', tr: '[ˈweəhaʊs]' },

    { en: 'warmth', tr: '[wɔːmθ]' },

    { en: 'waste', tr: '[weɪst]' },

    { en: 'watched', tr: '[wɒʧt]' },

    { en: 'watches', tr: '[ˈwɒʧɪz]' },

    { en: 'wave', tr: '[weɪv]' },

    { en: 'way', tr: '[weɪ]' },

    { en: 'ways', tr: '[weɪz]' },

    { en: 'weak', tr: '[wiːk]' },

    { en: 'weakness', tr: '[ˈwiːknəs]' },

    { en: 'weave', tr: '[wiːv]' },

    { en: 'web', tr: '[web]' },

    { en: 'wedding', tr: '[ˈwedɪŋ]' },

    { en: 'weed', tr: '[wiːd]' },

    { en: 'weeks', tr: '[wiːks]' },

    { en: 'weigh', tr: '[weɪ]' },

    { en: 'weight', tr: '[weɪt]' },

    { en: 'well', tr: '[wel]' },

    { en: 'west', tr: '[west]' },

    { en: 'wet', tr: '[wet]' },

    { en: 'whale', tr: '[weɪl]' },

    { en: 'wheat', tr: '[wiːt]' },

    { en: 'wheel', tr: '[wiːl]' },

    { en: 'when', tr: '[wen]' },

    { en: 'where', tr: '[weə]' },

    { en: 'whether', tr: '[ˈweðə]' },

    { en: 'while', tr: '[waɪl]' },

    { en: 'whisper', tr: '[ˈwɪspə]' },

    { en: 'white', tr: '[waɪt]' },

    { en: 'who', tr: '[huː]' },

    { en: 'whom', tr: '[huːm]' },

    { en: 'whose', tr: '[huːz]' },

    { en: 'why', tr: '[waɪ]' },

    { en: 'wide', tr: '[waɪd]' },

    { en: 'wife', tr: '[waɪf]' },

    { en: 'willing', tr: '[ˈwɪlɪŋ]' },

    { en: 'window', tr: '[ˈwɪndəʊ]' },

    { en: 'wine', tr: '[waɪn]' },

    { en: 'wing', tr: '[wɪŋ]' },

    { en: 'winner', tr: '[ˈwɪnə]' },

    { en: 'wipe', tr: '[waɪp]' },

    { en: 'wire', tr: '[ˈwaɪə]' },

    { en: 'wise', tr: '[waɪz]' },

    { en: 'with', tr: '[wɪð]' },

    { en: 'within', tr: '[wɪˈðɪn]' },

    { en: 'wood', tr: '[wʊd]' },

    { en: 'words', tr: '[wɜːdz]' },

    { en: 'work', tr: '[wɜːk]' },

    { en: 'worked', tr: '[wɜːkt]' },

    { en: 'working', tr: '[ˈwɜːkɪŋ]' },

    { en: 'workshop', tr: '[ˈwɜːkʃɒp]' },

    { en: 'worth', tr: '[wɜːθ]' },

    { en: 'wow', tr: '[waʊ]' },

    { en: 'writing', tr: '[ˈraɪtɪŋ]' },

    { en: 'wrong', tr: '[rɒŋ]' },

    { en: 'you', tr: '[juː]' },

    { en: 'your', tr: '[jɔː]' },

    { en: 'zone', tr: '[zəʊn]' },

  ];

  

  console.log(PRONUNCIATION_BRITISH.length);

  
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
    { en: 'outside', tr: '[aʊtˈsaɪd]' },
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
    { en: 'northwest', tr: '[nɔːθˈwest]' },
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
    { en: 'pronunciation', tr: '[prənʌnsɪˈeɪʃn]' },
    { en: 'excellent', tr: '[ˈeksələnt]' },
    { en: 'interchangeably', tr: '[ɪntərˈʧeɪnʤəblɪ]' },
    { en: 'interesting', tr: '[ˈɪntrestɪŋ]' },
    { en: 'ongoing', tr: '[ˈɒŋɡəʊɪŋ]' },
    { en: 'operating', tr: '[ˈɒpreɪtɪŋ]' },
    { en: 'outsider', tr: '[aʊtˈsaɪdə]' },
    { en: 'outstanding', tr: '[aʊtˈstændɪŋ]' },
    { en: 'biography', tr: '[baɪˈɒɡrəfi]' },
    { en: 'demographic', tr: '[deməˈɡræfɪk]' },
    { en: 'elephant', tr: '[ˈelɪfənt]' },
    { en: 'phenomenon', tr: '[fəˈnɒmɪnən]' },
    { en: 'philosophical', tr: '[fɪləˈsɒfɪkl]' },
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
      case 'random':
        if (randomQuestion % 2 != 0) {
          typeQuestion = 'en';
          typeAnswer = 'tr';
          console.log('мда');
        } else {
          typeQuestion = 'tr';
          typeAnswer = 'en';
          console.log('нет');
        }
        randomQuestion++;
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

  let randomQuestion;

  

  fBtnStart.addEventListener('click', () => {

    fResponseField.style.backgroundColor = '#fff';

    const fValueOfQuestions = fChoose.querySelector('.tr__choice:checked');

    const fValueOfLang = fChoose.querySelector('.tr__lang:checked');

    const fValueOfDifficult = fChoose.querySelector('.tr__difficult:checked');

  

    console.log(fValueOfQuestions.value + ' ' + fValueOfLang.value + ' ' + fValueOfDifficult.value);

  

    fChoose.style.display = 'none';

    fContainerForContent.style.display = 'block';

    fContainerBottomWrapper.style.display = 'block';

  

    fBtnResult.classList.remove('visually-hidden');

  

    valueOfQuestions = fValueOfQuestions.value;

    valueOfQuestionsAll = fValueOfQuestions.value;

    valueOfDifficult = fValueOfDifficult.value;

    valueOfLang = fValueOfLang.value;

    randomQuestion = 1;

  

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

      case 'all':

        arrForRender = PRONUNCIATION_BRITISH;

        break;

      default:

        arrForRender = TR_NEW_ONE_ARR;

    }

  

    console.log(arrForRender);

    wordsArray = generateRandomNumbers(fValueOfQuestions.value, arrForRender);

    console.log('wordsArray ' + wordsArray);

    wordsArrayMistakes = generateRandomMistakes(fValueOfQuestions.value, arrForRender, wordsArray);

    console.log('wordsArrayMistakes ' + wordsArrayMistakes);

    renderWordsStart(valueOfLang, wordsArray, wordsArrayMistakes, arrForRender);

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

      case 'random':

        if (randomQuestion % 2 == 0) {

          result = '[' + valueArr.join('') + ']';

        } else {

          result = valueArr.join('');

        }

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
