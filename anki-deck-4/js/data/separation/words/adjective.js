const ADJECTIVE = [
	{ en: 'temporary', tr: '[ˈtɛmpᵊrᵊri]', ru: 'временный', pos: 2752 },
	{ en: 'numerous', tr: '[ˈnjuːmərəs]', ru: 'многочисленный', pos: 3409 },
	{ en: 'least', tr: '[liːst]', ru: 'наименьший', pos: 298 },
	{ en: 'unnecessary', tr: '[ʌnˈnɛsəsɛri]', ru: 'ненужный', pos: 4570 },
	{ en: 'educational', tr: '[ˌɛʤʊˈkeɪʃᵊnᵊl]', ru: 'образовательный', pos: 2124 },
	{ en: 'ordinary', tr: '[ˈɔːdᵊnᵊri]', ru: 'обычный', pos: 1866 },
	{ en: 'opposite', tr: '[ˈɒpəzɪt]', ru: 'противоположный', pos: 1759 },
	{ en: 'diverse', tr: '[daɪˈvɜːrs]', ru: 'разнообразный', pos: 2965 },
	{ en: 'average', tr: '[ˈævᵊrɪʤ]', ru: 'средний', pos: 898 },
	{
		en: 'spare',
		tr: '|sper|',
		ru: 'запасной; свободный',
		pos: 2591,
	},
	{ en: 'independent', tr: '[ˌɪndɪˈpendənt]', ru: 'независимый', pos: 877 },
	{ en: 'urgent', tr: '[ˈɜːʤᵊnt]', ru: 'срочный', pos: 3727 },
	{ en: 'wide', tr: '[waɪd]', ru: 'широкий', pos: 1299 },
	{ en: 'suitable [for]', tr: '[ˈsuːtəbᵊl]', ru: 'подходящий', pos: 4295 },
	{ en: 'flexible', tr: '[ˈflɛksəbᵊl]', ru: 'гибкий', pos: 3687 },

	{ en: 'artificial', tr: '[ˌɑːtɪˈfɪʃᵊl]', ru: 'искусственный', pos: 4061 },
	{ en: 'precious', tr: '[ˈprɛʃəs]', ru: 'драгоценный', pos: 4048 },
	{ en: 'unstable', tr: '[ʌnˈsteɪbᵊl]', ru: 'нестабильный', pos: 5858 },
	{ en: 'annual', tr: '[ˈænjuəl]', ru: 'ежегодный', pos: 1751 },
	{ en: 'equal', tr: '[ˈiːkwəl]', ru: 'равный', pos: 1310 },
	{ en: 'external', tr: '[ɪkˈstɜːnᵊl]', ru: 'внешний', pos: 3983 },
	{ en: 'determined', tr: '[dɪˈtɜːmɪnd]', ru: 'решительный', pos: 1103 },
	{ en: 'slight', tr: '[slaɪt]', ru: 'незначительный', pos: 2875 },
	{ en: 'spiritual', tr: '[ˈspɪrɪʧuəl]', ru: 'духовный', pos: 2729 },
	{ en: 'available', tr: '[əˈveɪləbᵊl]', ru: 'доступный', pos: 750 },

	{ en: 'smooth', tr: '[smuːð]', ru: 'гладкий', pos: 3528 },
	{ en: 'decisive', tr: '[dɪˈsaɪsɪv]', ru: 'решающий', pos: 4871 },
	{ en: 'internal', tr: '[ɪnˈtɜːnᵊl]', ru: 'внутренний', pos: 2091 },

	{ en: 'endless', tr: '[ˈɛndləs]', ru: 'бесконечный', pos: 4687 },
	{ en: 'following', tr: '[ˈfɑːləʊɪŋ]', ru: 'следующий', pos: 419 },
	{ en: 'lasting', tr: '[ˈlæstɪŋ]', ru: 'длительный', pos: 111 },
	{ en: 'vital', tr: '[ˈvaɪtl]', ru: 'жизненно важный', pos: 3038 },
	{ en: 'essential', tr: '[ɪˈsenʃl]', ru: 'самый необходимый', pos: 2328 },

	{ en: 'international', tr: '|ˌɪntərˈnæʃnəl|', ru: 'международный', pos: 556 },
	{ en: 'mysterious', tr: '|mɪˈstɪrɪəs|', ru: 'таинственный, непостижимый', pos: 4698 },

	{ en: 'precise', tr: '[prɪˈsaɪs]', ru: 'точный, четкий', pos: 3844 },
	{ en: 'situated', tr: '[ˈsɪʧueɪtɪd]', ru: 'расположенный', pos: 7114 },
	{ en: 'satisfactory', tr: '[ˌsætɪsˈfæktᵊri]', ru: 'удовлетворительный', pos: 5542 },
	{ en: 'obsolete', tr: '[ˈɒbsəliːt]', ru: 'устаревший', pos: 8498 },
	{ en: 'lively', tr: '[ˈlaɪvli]', ru: 'оживленный', pos: 5811 },
	{ en: 'indirect', tr: '[ˌɪndaɪˈrɛkt]', ru: 'косвенный', pos: 6271 },
	{ en: 'charitable', tr: '[ˈʧærətəbᵊl]', ru: 'благотворительный; милосердный', pos: 5983 },
	{ en: 'unnatural', tr: '[ʌnˈnæʧᵊrᵊl]', ru: 'неестественный', pos: 9208 },
	{ en: 'ripe', tr: '[raɪp]', ru: 'спелый', pos: 5626 },
	{ en: 'triumphant', tr: '[traɪˈʌmfənt]', ru: 'триумфальный', pos: 10039 },
	{ en: 'solemn', tr: '[ˈsɑːləm]', ru: 'важный, официальный', pos: 8467 },
	{ en: 'well-made', tr: '[wɛl]-[meɪd]', ru: 'хорошо сделанный', pos: 22000 },
	{ en: 'gifted', tr: '[ˈɡɪftɪd]', ru: 'одаренный', pos: 22000 },
	{ en: 'senseless', tr: '[ˈsensləs]', ru: 'бессмысленный', pos: 9985 },
	{ en: 'stark', tr: '[stɑːrk]', ru: 'суровый резкий', pos: 5763 },
	{ en: 'durable', tr: '|ˈdʊrəbl|', ru: 'прочный', pos: 8241 },
	{ en: 'gigantic', tr: '|dʒaɪˈɡæntɪk|', ru: 'гигантский', pos: 6015 },
	{ en: 'pristine', tr: '|ˈprɪstiːn|', ru: 'первозданный', pos: 8599 },
	{ en: 'cozy', tr: '|ˈkəʊzɪ|', ru: 'уютный', pos: 6940 },

	{ en: 'unforgettable', tr: '[ˌʌnfəˈɡetəbᵊl]', ru: 'незабываемый', pos: 12113 },
	{ en: 'spacious', tr: '[ˈspeɪʃəs]', ru: 'просторный', pos: 10338 },

	{ en: 'old-fashioned', tr: '[ˌəʊldˈfæʃᵊnd]', ru: 'старомодный', pos: 22000 },
	{ en: 'childish', tr: '[ˈʧaɪldɪʃ]', ru: 'детский', pos: 10865 },
	{ en: 'made-up', tr: '[meɪd]-[ʌp]', ru: 'выдуманый', pos: 22000 },
	{ en: 'favourable', tr: '[ˈfeɪvᵊrəbᵊl]', ru: 'благоприятный', pos: 22000 },
	{ en: 'illegible', tr: '[ɪˈlɛʤəbᵊl]', ru: 'неразборчивый', pos: 22000 },
	{ en: 'irreplaceable', tr: '|ˌɪrɪˈpleɪsəbl|', ru: 'незаменимый', pos: 14615 },
	{ en: 'auxiliary', tr: '[ɔːɡˈzɪlɪərɪ]', ru: 'вспомогательный', pos: 10802 },
	{ en: 'possessive', tr: '[pəˈzesɪv]', ru: 'притяжательный', pos: 14349 },
	{ en: 'shimmering', tr: '|ˈʃɪmərɪŋ|', ru: 'мерцающий', pos: 11366 },
	{ en: 'imaginable', tr: '|ɪˈmædʒɪnəbl|', ru: 'вообразимый, воображаемый', pos: 10420 },
	{ en: 'inaudible ', tr: '|ɪnˈɔːdəbl|', ru: 'неслышный, невнятный', pos: 1693 },
	{ en: 'delicious', tr: '|dɪˈlɪʃəs|', ru: 'восхитительный, очень вкусный', pos: 4126 },
	{ en: 'whole / entire', tr: '[həʊl] / [ɪnˈtaɪə]', ru: 'весь, целый', pos: 611 },
];

export default ADJECTIVE;
