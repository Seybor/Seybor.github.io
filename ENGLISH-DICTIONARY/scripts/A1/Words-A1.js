const v = [
  { en: 'able', ru: 'способный', tr: '[ˈeɪbᵊl]' },
  { en: 'accent', ru: 'акцент, ударение', tr: '[ˈæksᵊnt]' },
  { en: 'account', ru: 'аккаунт, счет', tr: '[əˈkaʊnt]' },
  { en: 'accountant', ru: 'бухгалтер', tr: '[əˈkaʊntᵊnt]' },
  { en: 'accurate', ru: 'точный', tr: '[ˈækjərət]' },
  { en: 'acquaintance', ru: 'знакомый', tr: '[əˈkweɪntᵊns]' },
  { en: 'additional / extra', ru: 'дополнительный', tr: '[əˈdɪʃᵊnᵊl] / [ˈekstrə]' },
  { en: 'advanced', ru: 'продвинутый', tr: '[ədˈvɑːnst]' },
  { en: 'agency', ru: 'агенство', tr: '[ˈeɪʤᵊnsi]' },
  { en: 'air', ru: 'воздух', tr: '[eə]' },
  { en: 'alarm clock', ru: 'будильник', tr: '[əˈlɑːm] [klɒk]' },
  { en: 'amazing', ru: 'удивительный, изумительный, потрясающий', tr: '[əˈmeɪzɪŋ]' },
  { en: 'ambitious', ru: 'амбициозный', tr: '[æmˈbɪʃəs]' },
  { en: 'among', ru: 'среди', tr: '[əˈmʌŋ]' },
  { en: 'anniversary', ru: 'годовщина, юбилей', tr: '[ˌænɪˈvɜːsᵊri]' },
  { en: 'anymore', ru: 'больше не', tr: '[ˌeniˈmɔː]' },
  { en: 'architect', ru: 'архитектор', tr: '[ˈɑːkɪtekt]' },
  { en: 'area', ru: 'область', tr: '[ˈeəriə]' },
  { en: 'around', ru: 'вокруг', tr: '[əˈraʊnd]' },
  { en: 'artist', ru: 'художник', tr: '[ˈɑːtɪst]' },
  { en: 'attention', ru: 'внимание', tr: '[əˈtenʃᵊn]' },
  { en: 'attractive', ru: 'привлекательный', tr: '[əˈtræktɪv]' },
  { en: 'bargain', ru: 'выгодная покупка/сделка', tr: '[ˈbɑːɡɪn]' },
  { en: 'bedroom', ru: 'спальня', tr: '[ˈbedruːm]' },
  { en: 'behaviour', ru: 'поведение', tr: '[bɪˈheɪvjə]' },
  { en: 'belt', ru: 'ремень', tr: '[belt]' },
  { en: 'blonde', ru: 'светлый', tr: '[blɒnd]' },
  { en: 'bottle', ru: 'бутылка', tr: '[ˈbɒtᵊl]' },
  { en: 'bowling', ru: 'боулинг', tr: '[ˈbəʊlɪŋ]' },
  { en: 'breath', ru: 'дыхание', tr: '[breθ]' },
  { en: 'bright', ru: 'яркий', tr: '[braɪt]' },
  { en: 'brilliant', ru: 'блестящий, брилиант', tr: '[ˈbrɪljənt]' },
  { en: 'building', ru: 'здание', tr: '[ˈbɪldɪŋ]' },
  { en: 'case', ru: 'случай', tr: '[keɪs]' },
  { en: 'cash', ru: 'наличные', tr: '[kæʃ]' },
  { en: 'certainly', ru: 'конечно', tr: '[ˈsɜːtnli]' },
  { en: 'charity', ru: 'благотворительность', tr: '[ˈʧærəti]' },
  { en: 'chemistry', ru: 'химия', tr: '[ˈkemɪstri]' },
  { en: 'church', ru: 'церковь', tr: '[ʧɜːʧ]' },
  { en: 'class', ru: 'класс, занятие', tr: '[klɑːs]' },
  { en: 'classmate', ru: 'одноклассник, одногруппник', tr: '[ˈklɑːsmeɪt]' },
  { en: 'comfortable', ru: 'удобный', tr: '[ˈkʌmfᵊtəbᵊl]' },
  { en: 'common', ru: 'распространённый', tr: '[ˈkɒmən]' },
  { en: 'community', ru: 'сообщество', tr: '[kəˈmjuːnəti]' },
  { en: 'completely', ru: 'полностью', tr: '[kəmˈpliːtli]' },
  { en: 'composition', ru: 'сочинение, композиция', tr: '[ˌkɒmpəˈzɪʃᵊn]' },
  { en: 'condition', ru: 'состояние, условие', tr: '[kənˈdɪʃᵊn]' },
  { en: 'confidence', ru: 'уверенность', tr: '[ˈkɒnfɪdᵊns]' },
  { en: 'confident', ru: 'уверенный', tr: '[ˈkɒnfɪdᵊnt]' },
  { en: 'contest', ru: 'конкурс', tr: '[ˈkɒntest]' },
  { en: 'conversation', ru: 'разговор', tr: '[ˌkɒnvəˈseɪʃᵊn]' },
  { en: 'couple', ru: 'пара', tr: '[ˈkʌpᵊl]' },
  { en: 'cousin', ru: 'двоюродная сестра, двоюродный брат', tr: '[ˈkʌzᵊn]' },
  { en: 'crazy / mad', ru: 'сумасшедший', tr: '[ˈkreɪzi] / [mæd]' },
  { en: 'criticism', ru: 'критика', tr: '[ˈkrɪtɪsɪzᵊm]' },
  { en: 'crossroads', ru: 'перекрёсток', tr: '[ˈkrɒsˌrəʊdz]' },
  { en: 'custom', ru: 'обычай', tr: '[ˈkʌstəm]' },
  { en: 'cycling', ru: 'езда на велосипеде', tr: '[ˈsaɪklɪŋ]' },
  { en: 'deep', ru: 'глубоко, глубокий', tr: '[diːp]' },
  { en: 'delivery', ru: 'доставка', tr: '[dɪˈlɪvᵊri]' },
  { en: 'department', ru: 'отдел', tr: '[dɪˈpɑːtmənt]' },
  { en: 'dependent', ru: 'зависимый', tr: '[dɪˈpendənt]' },
  { en: 'depressed', ru: 'подавленный', tr: '[dɪˈprest]' },
  { en: 'depression', ru: 'депрессия', tr: '[dɪˈpreʃᵊn]' },
  { en: 'device', ru: 'устройство', tr: '[dɪˈvaɪs]' },
  { en: 'difference', ru: 'разница, различие', tr: '[ˈdɪfᵊrᵊns]' },
  { en: 'differently', ru: 'по-другому, иначе', tr: '[ˈdɪfᵊrᵊntli]' },
  { en: 'difficulty', ru: 'трудность', tr: '[ˈdɪfɪkᵊlti]' },
  { en: 'disappointed', ru: 'разочарованный', tr: '[ˌdɪsəˈpɔɪntɪd]' },
  { en: 'discovery', ru: 'открытие', tr: '[dɪˈskʌvᵊri]' },
  { en: 'discussion', ru: 'обсуждение', tr: '[dɪˈskʌʃᵊn]' },
  { en: 'dish', ru: 'блюдо', tr: '[dɪʃ]' },
  { en: 'district', ru: 'район', tr: '[ˈdɪstrɪkt]' },
  { en: 'diving', ru: 'дайвинг', tr: '[ˈdaɪvɪŋ]' },
  { en: 'divorced', ru: 'разведённый', tr: '[dɪˈvɔːst]' },
  { en: 'drawing', ru: 'рисование', tr: '[ˈdrɔːɪŋ]' },
  { en: 'easygoing', ru: 'легкий в общении, беззаботный, спокойный, покладистый', tr: '[ˌiːzɪˈɡəʊɪŋ]' },
  { en: 'employee', ru: 'работник, сотрудник', tr: '[ˌemplɔɪˈiː]' },
  { en: 'employer', ru: 'работодатель', tr: '[ɪmˈplɔɪə]' },
  { en: 'empty', ru: 'пустой', tr: '[ˈempti]' },
  { en: 'enthusiasm', ru: 'энтузиазм', tr: '[ɪnˈθjuːziæzᵊm]' },
  { en: 'entrepreneur', ru: 'предприниматель', tr: '[ˌɒntrəprəˈnɜː]' },
  { en: 'essay', ru: 'эссе, сочинение', tr: '[ˈeseɪ]' },
  { en: 'event', ru: 'событие', tr: '[ɪˈvent]' },
  { en: 'excellent', ru: 'отличный, отлично', tr: '[ˈeksᵊlᵊnt]' },
  { en: 'experienced', ru: 'опытный', tr: '[ɪkˈspɪəriənst]' },
  { en: 'explanation', ru: 'объяснение', tr: '[ˌekspləˈneɪʃᵊn]' },
  { en: 'expression', ru: 'выражение', tr: '[ɪkˈspreʃᵊn]' },
  { en: 'extremely', ru: 'чрезвычайно', tr: '[ɪkˈstriːmli]' },
  { en: 'feeling', ru: 'чувство', tr: '[ˈfiːlɪŋ]' },
  { en: 'field', ru: 'поле', tr: '[fiːld]' },
  { en: 'financial', ru: 'финансовый', tr: '[faɪˈnænʃᵊl]' },
  { en: 'financially', ru: 'финансово', tr: '[faɪˈnænʃᵊli]' },
  { en: 'firm', ru: 'фирма', tr: '[fɜːm]' },
  { en: 'fond', ru: 'любящий, нежный', tr: '[fɒnd]' },
  { en: 'fresh', ru: 'свежий', tr: '[freʃ]' },
  { en: 'gap', ru: 'пробел, пропуск', tr: '[ɡæp]' },
  { en: 'gardening', ru: 'садоводство', tr: '[ˈɡɑːdnɪŋ]' },
  { en: 'generous', ru: 'щедрый', tr: '[ˈʤenᵊrəs]' },
  { en: 'glad', ru: 'рад, довольный, радостный', tr: '[ɡlæd]' },
  { en: 'grade / mark', ru: 'оценка', tr: '[ɡreɪd] / [mɑːk]' },
  { en: 'granny', ru: 'бабушка, бабуля', tr: '[ˈɡræni]' },
  { en: 'greatly', ru: 'очень сильно, значительно', tr: '[ˈɡreɪtli]' },
  { en: 'guy', ru: 'парень', tr: '[ɡaɪ]' },
  { en: 'harmful', ru: 'вредный', tr: '[ˈhɑːmfᵊl]' },
  { en: 'heavy', ru: 'тяжелый', tr: '[ˈhevi]' },
  { en: 'horizon', ru: 'горизонт, кругозор', tr: '[həˈraɪzᵊn]' },
  { en: 'hospitable', ru: 'гостеприимный', tr: '[hɒˈspɪtəbᵊl]' },
  { en: 'huge', ru: 'огромный', tr: '[hjuːʤ]' },
  { en: 'illness', ru: 'болезнь', tr: '[ˈɪlnəs]' },
  { en: 'image', ru: 'изображение, имидж, образ', tr: '[ˈɪmɪʤ]' },
  { en: 'imagination', ru: 'воображение', tr: '[ɪˌmæʤɪˈneɪʃᵊn]' },
  { en: 'immigrant', ru: 'иммигрант', tr: '[ˈɪmɪɡrənt]' },
  { en: 'importance', ru: 'важность', tr: '[ɪmˈpɔːtᵊns]' },
  { en: 'income', ru: 'доход', tr: '[ˈɪnkʌm]' },
  { en: 'independent', ru: 'независимый', tr: '[ˌɪndɪˈpendənt]' },
  { en: 'ineffective', ru: 'неэффективный', tr: '[ˌɪnɪˈfektɪv]' },
  { en: 'inexpensive', ru: 'недорогой', tr: '[ˌɪnɪkˈspensɪv]' },
  { en: 'innocent', ru: 'невиновный', tr: '[ˈɪnəsᵊnt]' },
  { en: 'inside', ru: 'внутри', tr: '[ɪnˈsaɪd]' },
  { en: 'intermediate', ru: 'средний, промежуточный', tr: '[ˌɪntəˈmiːdiət]' },
  { en: 'irregular', ru: 'нерегулярный, неправильный', tr: '[ɪˈreɡjələ]' },
  { en: 'joke', ru: 'шутка', tr: '[ʤəʊk]' },
  { en: 'keen', ru: 'проницательный, увлечённый', tr: '[kiːn]' },
  { en: 'lake', ru: 'озеро', tr: '[leɪk]' },
  { en: 'latest', ru: 'последний', tr: '[ˈleɪtɪst]' },
  { en: 'learner', ru: 'ученик, учащийся', tr: '[ˈlɜːnə]' },
  { en: 'lifestyle', ru: 'образ жизни', tr: '[ˈlaɪfˌstaɪl]' },
  { en: 'lovely', ru: 'прекрасный', tr: '[ˈlʌvli]' },
  { en: 'low', ru: 'низкий', tr: '[ləʊ]' },
  { en: 'magazine', ru: 'журнал', tr: '[ˌmæɡəˈziːn]' },
  { en: 'main', ru: 'главный, основной', tr: '[meɪn]' },
  { en: 'melodic', ru: 'мелодичный', tr: '[mɪˈlɒdɪk]' },
  { en: 'membership', ru: 'членство', tr: '[ˈmembəʃɪp]' },
  { en: 'mind', ru: 'ум', tr: '[maɪnd]' },
  { en: 'mountaint', ru: 'гора', tr: 'mountaint' },
  { en: 'narrow', ru: 'узкий', tr: '[ˈnærəʊ]' },
  { en: 'necklace', ru: 'ожерелье', tr: '[ˈneklɪs]' },
  { en: 'nervous', ru: 'нервный', tr: '[ˈnɜːvəs]' },
  { en: 'no one / nobody', ru: 'никто', tr: '[nəʊ] [wʌn] / [ˈnəʊbədi]' },
  { en: 'noisy', ru: 'шумный', tr: '[ˈnɔɪzi]' },
  { en: 'nurse', ru: 'медсестра', tr: '[nɜːs]' },
  { en: 'obvious', ru: 'очевидный', tr: '[ˈɒbviəs]' },
  { en: 'opinion', ru: 'мнение', tr: '[əˈpɪnjən]' },
  { en: 'others', ru: 'другие', tr: '[ˈʌðəz]' },
  { en: 'outdoors', ru: 'на открытом воздухе', tr: '[ˌaʊtˈdɔːz]' },
  { en: 'outside', ru: 'снаружи', tr: '[ˌaʊtˈsaɪd]' },
  { en: 'outstanding', ru: 'выдающийся', tr: '[aʊtˈstændɪŋ]' },
  { en: 'overcrowded', ru: 'переполненный', tr: '[ˌəʊvəˈkraʊdɪd]' },
  { en: 'particularly', ru: 'особенно', tr: '[pəˈtɪkjələli]' },
  { en: 'partly', ru: 'частично', tr: '[ˈpɑːtli]' },
  { en: 'personal', ru: 'личный', tr: '[ˈpɜːsᵊnᵊl]' },
  { en: 'plane', ru: 'самолёт', tr: '[pleɪn]' },
  { en: 'pleasant', ru: 'приятный', tr: '[ˈplezᵊnt]' },
  { en: 'policeman', ru: 'полицеский', tr: '[pəˈliːsmən]' },
  { en: 'polite', ru: 'вежливый', tr: '[pəˈlaɪt]' },
  { en: 'poverty', ru: 'бедность', tr: '[ˈpɒvəti]' },
  { en: 'powerful', ru: 'мощный', tr: '[ˈpaʊəfᵊl]' },
  { en: 'pregnant', ru: 'беременная', tr: '[ˈpreɡnənt]' },
  { en: 'prestigious', ru: 'престижный', tr: '[presˈtɪʤəs]' },
  { en: 'pretty', ru: 'довольно, милый', tr: '[ˈprɪti]' },
  { en: 'profit', ru: 'прибыль', tr: '[ˈprɒfɪt]' },
  { en: 'profitable', ru: 'прибыльный', tr: '[ˈprɒfɪtəbᵊl]' },
  { en: 'promising', ru: 'многообещающий', tr: '[ˈprɒmɪsɪŋ]' },
  { en: 'pronunciation', ru: 'произношение', tr: '[prəˌnʌnsiˈeɪʃᵊn]' },
  { en: 'proud', ru: 'гордый', tr: '[praʊd]' },
  { en: 'public', ru: 'общественный, публичный', tr: '[ˈpʌblɪk]' },
  { en: 'purpose', ru: 'цель', tr: '[ˈpɜːpəs]' },
  { en: 'quality', ru: 'качество', tr: '[ˈkwɒləti]' },
  { en: 'quite / rather', ru: 'довольно', tr: '[kwaɪt] / [ˈrɑːðə]' },
  { en: 'rainy', ru: 'дождливый', tr: '[ˈreɪni]' },
  { en: 'rarely / seldom', ru: 'редко', tr: '[ˈreəli] / [ˈseldəm]' },
  { en: 'recording', ru: 'запись', tr: '[rɪˈkɔːdɪŋ]' },
  { en: 'regular', ru: 'регулярный, правильный', tr: '[ˈreɡjələ]' },
  { en: 'relative', ru: 'родственник', tr: '[ˈrelətɪv]' },
  { en: 'reliable', ru: 'надёжный', tr: '[rɪˈlaɪəbᵊl]' },
  { en: 'resort', ru: 'курорт', tr: '[rɪˈzɔːt]' },
  { en: 'risky', ru: 'рискованный', tr: '[ˈrɪski]' },
  { en: 'road', ru: 'дорога', tr: '[rəʊd]' },
  { en: 'rock', ru: 'рок, скала', tr: '[rɒk]' },
  { en: 'roof', ru: 'крыша', tr: '[ruːf]' },
  { en: 'round', ru: 'круглый', tr: '[raʊnd]' },
  { en: 'routine', ru: 'рутина', tr: '[ruːˈtiːn]' },
  { en: 'salary', ru: 'зарплата', tr: '[ˈsæləri]' },
  { en: 'sales', ru: 'продажи', tr: '[seɪlz]' },
  { en: 'satisfaction', ru: 'удовлетворение', tr: '[ˌsætɪsˈfækʃᵊn]' },
  { en: 'schoolboy', ru: 'школьник', tr: '[ˈskuːlbɔɪ]' },
  { en: 'schoolgirl', ru: 'школьница', tr: '[ˈskuːlɡɜːl]' },
  { en: 'scientist', ru: 'учёный', tr: '[ˈsaɪəntɪst]' },
  { en: 'scissors', ru: 'ножницы', tr: '[ˈsɪzəz]' },
  { en: 'separately', ru: 'отдельно', tr: '[ˈsepᵊrətli]' },
  { en: 'series / TV series', ru: 'сериал', tr: '[ˈsɪəriːz] / [ˌtiːˈviː] [ˈsɪəriːz]' },
  { en: 'shape', ru: 'форма', tr: '[ʃeɪp]' },
  { en: 'shocked', ru: 'шокированный', tr: '[ʃɒkt]' },
  { en: 'shocking', ru: 'шокируюищй', tr: '[ˈʃɒkɪŋ]' },
  { en: 'short', ru: 'короткий, низкий(о росте)', tr: '[ʃɔːt]' },
  { en: 'sick', ru: 'больной', tr: '[sɪk]' },
  { en: 'side', ru: 'сторона', tr: '[saɪd]' },
  { en: 'sight', ru: 'зрение', tr: '[saɪt]' },
  { en: 'silly', ru: 'глупый', tr: '[ˈsɪli]' },
  { en: 'skiing', ru: 'катание на лыжах', tr: '[ˈskiːɪŋ]' },
  { en: 'skirt', ru: 'юбка', tr: '[skɜːt]' },
  { en: 'slim', ru: 'стройный', tr: '[slɪm]' },
  { en: 'snowboarding', ru: 'катание на сноуборде', tr: '[ˈsnəʊˌbɔːdɪŋ]' },
  { en: 'soft', ru: 'мягкий', tr: '[sɒft]' },
  { en: 'spacious', ru: 'просторный', tr: '[ˈspeɪʃəs]' },
  { en: 'spare', ru: 'запасной, свободный', tr: '[speə]' },
  { en: 'spoilt', ru: 'испорченный', tr: '[spɔɪlt]' },
  { en: 'statement', ru: 'утверждение', tr: '[ˈsteɪtmənt]' },
  { en: 'step', ru: 'шаг', tr: '[step]' },
  { en: 'stressful', ru: 'стрессовый', tr: '[ˈstresfᵊl]' },
  { en: 'stylish', ru: 'стильный', tr: '[ˈstaɪlɪʃ]' },
  { en: 'success', ru: 'успех', tr: '[səkˈses]' },
  { en: 'such', ru: 'такой, такие', tr: '[sʌʧ]' },
  { en: 'surgeon', ru: 'хирург', tr: '[ˈsɜːʤᵊn]' },
  { en: 'surprising', ru: 'удивительный', tr: '[səˈpraɪzɪŋ]' },
  { en: 'tablet', ru: 'планшет, таблетка', tr: '[ˈtæblət]' },
  { en: 'talented', ru: 'талантливый', tr: '[ˈtæləntɪd]' },
  { en: 'tall', ru: 'высокий(о росте)', tr: '[tɔːl]' },
  { en: 'tax', ru: 'налог', tr: '[tæks]' },
  { en: 'thief', ru: 'вор', tr: '[θiːf]' },
  { en: 'thieves', ru: 'воры', tr: '[θiːvz]' },
  { en: 'thin', ru: 'худой', tr: '[θɪn]' },
  { en: 'thoroughly', ru: 'тщательно', tr: '[ˈθʌrəli]' },
  { en: 'tongue', ru: 'язык(как часть тела)', tr: '[tʌŋ]' },
  { en: 'towel', ru: 'полотенце', tr: '[taʊəl]' },
  { en: 'town', ru: 'город, городок', tr: '[taʊn]' },
  { en: 'translator', ru: 'переводчик', tr: '[trænzˈleɪtə]' },
  { en: 'uncomfortable', ru: 'неудобный', tr: '[ʌnˈkʌmfᵊtəbᵊl]' },
  { en: 'understanding', ru: 'понимание', tr: '[ˌʌndəˈstændɪŋ]' },
  { en: 'unexpected', ru: 'неожиданный', tr: '[ˌʌnɪkˈspektɪd]' },
  { en: 'unforgettable', ru: 'незабываемый', tr: '[ˌʌnfəˈɡetəbᵊl]' },
  { en: 'unfortunately', ru: 'к несчастью, к сожалению', tr: '[ʌnˈfɔːʧᵊnətli]' },
  { en: 'uninformative', ru: 'неинформативный', tr: '[ˌʌnɪnˈfɔːmətɪv]' },
  { en: 'unique', ru: 'уникальный', tr: '[juːˈniːk]' },
  { en: 'unofficial', ru: 'неофициальный', tr: '[ˌʌnəˈfɪʃᵊl]' },
  { en: 'vegetarian', ru: 'вегетарианец', tr: '[ˌveʤɪˈteəriən]' },
  { en: 'verb', ru: 'глагол', tr: '[vɜːb]' },
  { en: 'vet', ru: 'ветеринар', tr: '[vet]' },
  { en: 'violin', ru: 'скрипка', tr: '[ˌvaɪəˈlɪn]' },
  { en: 'vocabulary', ru: 'словарный запас', tr: '[vəˈkæbjəlᵊri]' },
  { en: 'wall', ru: 'стена', tr: '[wɔːl]' },
  { en: 'way', ru: 'путь', tr: '[weɪ]' },
  { en: 'weak', ru: 'слабый', tr: '[wiːk]' },
  { en: 'well-paid', ru: 'хорошо оплачиваемый', tr: '[ˈwelˈpeɪd]' },
  { en: 'wide', ru: 'широкий', tr: '[waɪd]' },
  { en: 'windy', ru: 'ветреный', tr: '[ˈwɪndi]' },
];

const arrRender = () => {

    table.style.tableLayout = 'auto'
    thead.style.display = 'table-header-group'
    tbody.textContent = ''

    v.forEach((el, id) => {
    const tr = document.createElement("tr");
    
    for (let i = 0; i < 4; i++) {
      let td = document.createElement("td");
      if (i === 0) {
        td.textContent = id + 1
      } else if (i === 1) {
        td.textContent = el.en
      } else if (i === 2) {
        td.textContent = el.tr
      } else if (i === 3) {
        td.textContent = el.ru
      }
      
      tr.append(td)
    }
    tbody.append(tr)
  })

}

arrRender()


const testArrRender = () => {

  table.style.tableLayout = 'fixed'
  tbody.textContent = ''
  tbody.style.cursor = 'pointer'

  thead.style.display = 'none'
  let counter = 0
  let validate = 0
  let tr = document.createElement("tr");
  let td = document.createElement("td");

  for(let i = 0; i < 3; i++) {
    td = document.createElement("td")

    if(i === 0) {
      td.textContent = 'lvl 1'
      td.dataset.check = true
      td.id = 'lvl1'
    } else if(i === 1) {
      td.textContent = 'lvl 2'
      td.dataset.check = true
      td.id = 'lvl2'
    } else {
      td.textContent = 'lvl 3'
      td.dataset.check = true
      td.id = 'lvl3'
    }

    td.style.backgroundColor = 'gray'

    tr.append(td)
  }

  tbody.append(tr)

  v.forEach((el, id) => {
    td = document.createElement("td");

    if(counter % 3 === 0) {
      tbody.append(tr)
      tr = document.createElement("tr")
    }

    if(validate === 0) {
      td.textContent = el.en
      td.dataset.level = 'lvl1'
      td.style.backgroundColor = 'green'

    } else if (validate === 1) {
      td.textContent = el.ru
      td.dataset.level = 'lvl2'
      td.style.backgroundColor = 'darkorange'

    } else if (validate === 2) {
      td.textContent = el.tr
      td.dataset.level = 'lvl3'
      
      td.style.backgroundColor = 'red'

      validate = -1
    }

    td.dataset.number = id
    td.dataset.minCheck = true
      
    tr.append(td)

    counter++
    validate++
    
    
  })

}

   tbody.addEventListener('mouseover', function(evt) {

    if(evt.target.dataset.number) {
      evt.target.dataset.color = evt.target.style.backgroundColor
      evt.target.style.backgroundColor = 'blue'
    }

   }) 

   tbody.addEventListener('mouseout', function(evt) {

    if(evt.target.dataset.number) {
      evt.target.style.backgroundColor = evt.target.dataset.color
    }

   }) 

   tbody.addEventListener('click', (evt) => {
    let check;

    if(evt.target.id === 'lvl1') {
      let lang
      let color
      check = document.querySelectorAll('td[data-level="lvl1"]')

      if(evt.target.dataset.check === 'true') {
        lang = 'ru'
        color = 'white'
        evt.target.dataset.check = 'false'
      } else {
        lang = 'en'
        color = 'black'
        evt.target.dataset.check = 'true'
      }

      check.forEach((el) => {
        el.textContent = v[el.dataset.number][lang]
        el.style.color = color
      })


    } else if(evt.target.id === 'lvl2') {
      let lang
      let color
      check = document.querySelectorAll('td[data-level="lvl2"]')

       if(evt.target.dataset.check === 'true') {
        lang = 'en'
        color = 'white'
        evt.target.dataset.check = 'false'
      } else {
        lang = 'ru'
        color = 'black'
        evt.target.dataset.check = 'true'
      }

      check.forEach((el) => {
        el.textContent = v[el.dataset.number][lang]
        el.style.color = color
      })
      
    } else if(evt.target.id === 'lvl3') {
      check = document.querySelectorAll('td[data-level="lvl3"]')


      if(evt.target.dataset.check === 'true') {
        check.forEach((el) => {
        el.textContent = `${v[el.dataset.number].en} - ${v[el.dataset.number].ru}`
        el.style.color = 'white'
      })
        evt.target.dataset.check = 'false'
      } else {
        check.forEach((el) => {
        el.textContent = v[el.dataset.number].tr
        el.style.color = 'black'
      })
        evt.target.dataset.check = 'true'
      }

    } else if(evt.target.dataset.number) {

      if(evt.target.dataset.level === 'lvl1') {

        if(evt.target.dataset.minCheck === 'true') {
            evt.target.textContent = v[evt.target.dataset.number].ru
            evt.target.style.color = 'white'
            evt.target.dataset.minCheck = 'false'
        } else {
            evt.target.textContent = v[evt.target.dataset.number].en
            evt.target.style.color = 'black'
            evt.target.dataset.minCheck = 'true'
        }
      } else if(evt.target.dataset.level === 'lvl2') {
         if(evt.target.dataset.minCheck === 'true') {
            evt.target.textContent = v[evt.target.dataset.number].en
            evt.target.style.color = 'white'
            evt.target.dataset.minCheck = 'false'
        } else {
            evt.target.textContent = v[evt.target.dataset.number].ru
            evt.target.style.color = 'black'
            evt.target.dataset.minCheck = 'true'
        }
      } else if(evt.target.dataset.level === 'lvl3') {
         if(evt.target.dataset.minCheck === 'true') {
            evt.target.textContent = `${v[evt.target.dataset.number].en} - ${v[evt.target.dataset.number].ru}`
            evt.target.style.color = 'white'
            evt.target.dataset.minCheck = 'false'
        } else {
            evt.target.textContent = v[evt.target.dataset.number].tr
            evt.target.style.color = 'black'
            evt.target.dataset.minCheck = 'true'
        }
      }
    }

   })


let ruSort = false
let enSort = true

thead.addEventListener('click', (evt) => {
  if(evt.target.dataset.type === 'en') {
    ruSort = false

    if(enSort) {
      v.reverse()
      arrRender()
    } else {
      v.sort((a, b) => a.en.localeCompare(b.en, 'en'));
      arrRender()
      enSort = true
    }
   
  } 

  if(evt.target.dataset.type === 'ru') {
    enSort = false

    if(ruSort) {
      v.reverse()
      arrRender()
    } else {
      v.sort((a, b) => a.ru.localeCompare(b.ru, 'ru'));
      arrRender()
      ruSort = true
    }
   
  }
})

 const shuffleArr = (arr) => {
    enSort = false
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let t = arr[i];
      arr[i] = arr[j];
      arr[j] = t;
    }
  };  


blend.addEventListener('click', () => {
  shuffleArr(v)
  arrRender()
})

check.addEventListener('click', () => {
  shuffleArr(v)
  testArrRender()
})