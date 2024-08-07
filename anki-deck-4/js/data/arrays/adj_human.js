const adj_human = [
	{ en: 'willing', tr: '[ˈwɪlɪŋ]', ru: 'добровольный; желающий', pos: 30 },
	{ en: 'unclear', tr: '|ˌʌnˈklɪr| ', ru: 'неясный, непонятный', pos: 51 },
	{ en: 'leading', tr: '|ˈliːdɪŋ|', ru: 'ведущий, передовой', pos: 322 },
	{ en: 'tough', tr: '[tʌf]', ru: 'жесткий, трудный', pos: 732 },
	{ en: 'related [to]', tr: '|rɪˈleɪtɪd|', ru: 'связанный, родственный', pos: 860 },
	{ en: 'amazed', tr: '[əˈmeɪzd]', ru: 'поражённый', pos: 960 },
	{ en: 'aware', tr: '[əˈweə]', ru: 'осведомлённый', pos: 985 },
	{ en: 'responsible', tr: '[rɪˈspɒnsəbᵊl]', ru: 'ответственный', pos: 1217 },
	{ en: 'convinced', tr: '[kənˈvɪnst]', ru: 'убеждён', pos: 1300 },
	{ en: 'tiring', tr: '[ˈtaɪərɪŋ]', ru: 'утомительный', pos: 1335 },
	{ en: 'dry', tr: '[draɪ]', ru: 'сухой', pos: 1374 },
	{ en: 'capable [of] / able', tr: '[ˈkeɪpəbᵊl] / |ˈeɪbl|', ru: 'способный', pos: 1400 },
	{ en: 'complicated', tr: '[ˈkɒmplɪkeɪtɪd]', ru: 'сложный', pos: 1498 },
	{ en: 'guilty', tr: '[ˈɡɪlti]', ru: 'виновный', pos: 1571 },
	{ en: 'scared', tr: '[skeəd]', ru: 'испуганный', pos: 1591 },
	{ en: 'fascinated', tr: '[ˈfæsɪneɪtɪd]', ru: 'очарованный', pos: 1677 },
	{ en: 'helpful', tr: '|ˈhelpfl|', ru: 'полезный', pos: 1806 },
	{ en: 'bored', tr: '[bɔːd]', ru: 'скучающий', pos: 1868 },
	{ en: 'satisfied', tr: '[ˈsætɪsfaɪd]', ru: 'удовлетворённый', pos: 1929 },
	{ en: 'wet', tr: '[wet]', ru: 'мокрый', pos: 2116 },
	{ en: 'sensitive [to]', tr: '[ˈsɛnsɪtɪv]', ru: 'чувствительный', pos: 2173 },
	{ en: 'thin', tr: '[θɪn]', ru: 'тонкий', pos: 2172 },
	{ en: 'embarrassed', tr: '|ɪmˈbærəs|', ru: 'смущённый', pos: 2186 },
	{ en: 'ridiculous', tr: '[rɪˈdɪkjələs]', ru: 'смешной, нелепый', pos: 2258 },
	{ en: 'isolated', tr: '[ˈaɪsəleɪtɪd]', ru: 'изолированный', pos: 2346 },
	{ en: 'thick', tr: '[θɪk]', ru: 'толстый', pos: 2392 },
	{ en: 'divorced', tr: '[dɪˈvɔːst]', ru: 'разведённый', pos: 2425 },
	{ en: 'lean', tr: '[liːn]', ru: 'стройный, тощий (о фигуре)', pos: 2446 },
	{ en: 'valuable', tr: '[ˈvæljəbᵊl]', ru: 'ценный', pos: 2513 },
	{ en: 'annoying', tr: '[əˈnɔɪɪŋ]', ru: 'неприятный [раздражающий]', pos: 2622 },
	{ en: 'nasty', tr: '|ˈnæstɪ|', ru: 'противный, неприятный, скверный', pos: 2638 },
	{ en: 'homeless', tr: '[ˈhəʊmləs]', ru: 'бездомный (про людей)', pos: 2682 },
	{ en: 'painful', tr: '[ˈpeɪnfᵊl]', ru: 'болезненный', pos: 2700 },
	{ en: 'delighted', tr: '[dɪˈlaɪtɪd]', ru: 'восхищенный, радостный', pos: 2740 },
	{ en: 'intelligent', tr: '[ɪnˈtelɪdʒənt]', ru: 'умный', pos: 2945 },
	{ en: 'disgusting', tr: '[dɪsˈɡʌstɪŋ]', ru: 'отвратительный', pos: 3035 },
	{ en: 'supportive', tr: '|səˈpɔːrtɪv|', ru: 'поддерживающий', pos: 3111 },
	{ en: 'harsh', tr: '|hɑːrʃ|', ru: 'суровый, жесткий', pos: 3240 },
	{ en: 'anxious [about]', tr: '[ˈæŋkʃəs]', ru: 'обеспокоенный', pos: 3371 },
	{ en: 'pleasant', tr: '[ˈplezᵊnt]', ru: 'приятный', pos: 3374 },
	{ en: 'sensible', tr: '[ˈsɛnsəbᵊl]', ru: 'разумный, здравомыслящий', pos: 3390 },
	{ en: 'unemployed', tr: '|ˌʌnɪmˈplɔɪd|', ru: 'безработный', pos: 3406 },
	{ en: 'exhausted', tr: '[ɪɡˈzɔːstɪd]', ru: 'истощённый', pos: 3422 },
	{ en: 'reliable', tr: '[rɪˈlaɪəbᵊl]', ru: 'надёжный', pos: 3479 },
	{ en: 'annoyed / irritated', tr: '[əˈnɔɪd] / [ˈɪrɪteɪtɪd]', ru: 'раздражённый', pos: 3525 },
	{ en: 'tricky', tr: '[ˈtrɪkɪ]', ru: 'сложный, хитрый', pos: 3526 },
	{ en: 'awkward', tr: '[ˈɔːkwərd]', ru: 'неуклюжий, неловкий, неудобный', pos: 3641 },
	{ en: 'cautious', tr: '[ˈkɔːʃəs]', ru: 'осторожный', pos: 3647 },
	{ en: 'loyal', tr: '[ˈlɔɪəl]', ru: 'лояльный', pos: 3674 },
	{ en: 'suspicious', tr: '[səˈspɪʃəs]', ru: 'подозрительный', pos: 3689 },
	{ en: 'rude', tr: '|ruːd|', ru: 'грубый, неприличный (про поведение, речь)', pos: 3718 },
	{ en: 'straightforward', tr: '[ˌstreɪtˈfɔːrwərd]', ru: 'простой, прямой, откровенный', pos: 3952 },
	{ en: 'enthusiastic', tr: '[ɪnˌθjuːziˈæstɪk]', ru: 'восторженный', pos: 4066 },
	{ en: 'cruel', tr: '[ˈkruːəl]', ru: 'жестокий', pos: 4132 },
	{ en: 'miserable', tr: '|ˈmɪzrəbl|', ru: 'несчастный, жалкий, убогий', pos: 4153 },
	{ en: 'soaked', tr: '[səʊkt]', ru: 'промокший', pos: 4643 },
	{ en: 'thoughtful', tr: '[ˈθɔːtfᵊl]', ru: 'заботливый; задумчивый', pos: 4740 },
	{ en: 'faithful', tr: '[ˈfeɪθfᵊl]', ru: 'верный', pos: 4776 },
	{ en: 'ashamed', tr: '|əˈʃeɪmd|', ru: 'пристыженный', pos: 4818 },
	{ en: 'beloved', tr: '[bɪˈlʌvd]', ru: 'возлюбленный(-ая)', pos: 4995 },
	{ en: 'naughty', tr: '[ˈnɔːtɪ]', ru: 'невоспитанный', pos: 5041 },
	{ en: 'incapable [of] / unable', tr: '[ɪnˈkeɪpəbᵊl] / [ʌnˈeɪbᵊl]', ru: 'неспособный', pos: 5127 },
	{ en: 'frank', tr: '[fræŋk]', ru: 'откровенный', pos: 5143 },
	{ en: 'irresponsible', tr: '[ˌɪrɪˈspɒnsəbᵊl]', ru: 'безответственный', pos: 5172 },
	{ en: 'furious', tr: '[ˈfjʊəriəs]', ru: 'яростный', pos: 5215 },
	{ en: 'stressful', tr: '|ˈstresfl|', ru: 'стрессовый, напряженный', pos: 5289 },
	{ en: 'accustomed [to doing]', tr: '[əˈkʌstəmd]', ru: 'привыкший', pos: 5391 },
	{ en: 'jealous [of]', tr: '[ˈʤɛləs]', ru: 'ревнивный [кого-то]', pos: 5465 },
	{ en: 'humiliating', tr: '[hjuːˈmɪlɪeɪtɪŋ]', ru: 'унизительный', pos: 5469 },
	{ en: 'predictable', tr: '[prɪˈdɪktəbᵊl]', ru: 'предсказуемый', pos: 5499 },
	{ en: 'foolish', tr: '[ˈfuːlɪʃ]', ru: 'глупый, дурацкий', pos: 5528 },
	{ en: 'dull', tr: '[dʌl]', ru: 'скучный, нудный', pos: 5626 },
	{ en: 'sincere', tr: '[sɪnˈsɪə]', ru: 'искренний', pos: 5691 },
	{ en: 'unwilling', tr: '[ʌnˈwɪlɪŋ]', ru: 'не желающий', pos: 5700 },
	{ en: 'hopeless', tr: '[ˈhəʊpləs]', ru: 'безнадёжный', pos: 5893 },
	{ en: 'knowledgeable', tr: '[ˈnɒlɪʤəbᵊl]', ru: 'знающий', pos: 5894 },
	{ en: 'selfish', tr: '[ˈselfɪʃ]', ru: 'эгоистичный', pos: 5955 },
	{ en: 'courageous', tr: '[kəˈreɪʤəs]', ru: 'отважный', pos: 6081 },
	{ en: 'arrogant', tr: '[ˈærəɡᵊnt]', ru: 'высокомерный', pos: 6184 },
	{ en: 'unaware', tr: '[ˌʌnəˈweə]', ru: 'не подозревающий', pos: 6335 },
	{ en: 'curly', tr: '[ˈkɜːli]', ru: 'кудрявый', pos: 7073 },
	{ en: 'cheerful', tr: '|ˈtʃɪrfl|', ru: 'весёлый', pos: 7572 },
	{ en: 'gloomy', tr: '[ˈɡluːmɪ]', ru: 'мрачный, угрюмый, хмурый', pos: 7676 },
	{ en: 'indifferent', tr: '[ɪnˈdɪfᵊrᵊnt]', ru: 'безразличный', pos: 7756 },
	{ en: 'harmless', tr: '[ˈhɑːmləs]', ru: 'безвредный', pos: 7798 },
	{ en: 'versatile', tr: '|ˈvɜːrsətl|', ru: 'разносторонний, многогранный', pos: 8344 },
	{ en: 'invaluable', tr: '[ɪnˈvæljəbᵊl]', ru: 'бесценный', pos: 9118 },
	{ en: 'malicious', tr: '[məˈlɪʃəs]', ru: 'злонамеренный', pos: 9875 },
	{ en: 'fearless', tr: '[ˈfɪələs]', ru: 'бесстрашный', pos: 10008 },
	{ en: 'сareless', tr: '|ˈkerləs|', ru: 'неосторожный, беззаботный', pos: 10156 },
	{ en: 'immortal', tr: '[ɪˈmɔːrtl]', ru: 'бессмертный', pos: 10366 },
	{ en: 'envious', tr: '[ˈɛnviəs]', ru: 'завистливый', pos: 10763 },
	{ en: 'unattractive', tr: '[ˌʌnəˈtræktɪv]', ru: 'непривлекательный', pos: 12111 },
	{ en: 'inhuman', tr: '[ɪnˈhjuːmən]', ru: 'бесчеловечный', pos: 12802 },
	{ en: 'pushy', tr: '[ˈpʊʃɪ]', ru: 'настойчивый', pos: 12936 },
	{ en: 'indecisive', tr: '[ˌɪndɪˈsaɪsɪv]', ru: 'нерешительный', pos: 14469 },
	{ en: 'easygoing', tr: '[ˌiːzɪˈɡəʊɪŋ]', ru: 'спокойный; легкий в общении', pos: 15024 },
	{ en: 'well-behaved', tr: '[ˌwel bɪˈheɪvd]', ru: 'хорошо воспитанный', pos: 22000 },
	{ en: 'self-confident', tr: '[ˌsɛlfˈkɒnfɪdᵊnt]', ru: 'самоуверенный', pos: 22000 },
	{ en: 'overprotective', tr: '[ˌəʊvəprəˈtɛktɪv]', ru: 'чрезмерно заботливый', pos: 22000 },
	{ en: 'skilful', tr: '[ˈskɪlfᵊl]', ru: 'умелый', pos: 22000 },
	{ en: 'dissatisfied [with]', tr: '[ˌdɪsˈsætɪsfaɪd]', ru: 'неудовлетворённый', pos: 22000 },
	{ en: 'well-known', tr: '[wɛl]-[nəʊn]', ru: 'хорошо известный', pos: 22000 },
]

export default adj_human