const TOP_ADJ = [
	{
		en: 'able',
		tr: '[ˈeɪbl]',
		ru: 'способный (сделать что-то, быть кем-то)'
	},
	{ en: 'accurate', tr: '[ˈækjʊrɪt]', ru: 'точный' },
	{ en: 'alternative', tr: '[ɔːlˈtɜːnətɪv]', ru: 'альтернативный ' },
	{ en: 'ancient', tr: '[ˈeɪnʃ(ə)nt]', ru: 'древний' },
	{
		en: 'apparent',
		tr: '[əˈpærənt]',
		ru: 'очевидный (с долей неуверенности)'
	},
	{
		en: 'appropriate',
		tr: '[əˈprəʊprɪɪt]',
		ru: 'подходящий (уместный)'
	},
	{ en: 'armed', tr: '[ɑːmd]', ru: 'вооруженный ' },
	{ en: 'blind', tr: '[blaɪnd]', ru: 'слепой ' },
	{
		en: 'broad',
		tr: '[brɔːd]',
		ru: 'широкий (часто для абстрактных понятий)'
	},
	{ en: 'competitive', tr: '[kəmˈpɛtɪtɪv]', ru: 'конкурентоспособный' },
	{ en: 'complex', tr: '[ˈkɒmplɛks]', ru: 'сложный (комплексный)' },
	{ en: 'complicated', tr: '[ˈkɒmplɪkeɪtɪd]', ru: 'сложный ' },
	{ en: 'comprehensive', tr: '[ˌkɒmprɪˈhɛnsɪv]', ru: 'всеобъемлющий' },
	{ en: 'concerned', tr: '[kənˈsɜːnd]', ru: 'обеспокоенный' },
	{ en: 'considerable', tr: '[kənˈsɪdərəbl]', ru: 'значительный' },
	{ en: 'consistent', tr: '[kənˈsɪstənt]', ru: 'последовательный' },
	{
		en: 'constitutional',
		tr: '[ˌkɒnstɪˈtjuːʃənl]',
		ru: 'конституционный '
	},
	{
		en: 'conventional',
		tr: '[kənˈvɛnʃənl]',
		ru: 'обычный, традиционный'
	},
	{ en: 'corporate', tr: '[ˈkɔːpərɪt]', ru: 'корпоративный ' },
	{ en: 'crucial', tr: '[ˈkruːʃəl]', ru: 'решающий (значимый)' },
	{ en: 'current', tr: 'ˈkʌrənt]', ru: 'текущий (нынешный)' },
	{ en: 'defensive', tr: '[dɪˈfɛnsɪv]', ru: 'оборонительный' },
	{
		en: 'developing',
		tr: '[dɪˈvɛləpɪŋ]',
		ru: 'находящийся в разработке'
	},
	{
		en: 'domestic',
		tr: '[dəʊˈmɛstɪk]',
		ru: 'домашний (внутренний - в политич.смысле)'
	},
	{ en: 'eastern', tr: '[ˈiːstən]', ru: 'восточный ' },
	{ en: 'enormous', tr: '[ɪˈnɔːməs]', ru: 'громадный' },
	{
		en: 'extraordinary',
		tr: '[ɪksˈtrɔːdnri]',
		ru: 'необычайный, экстраординарный'
	},
	{ en: 'fellow', tr: '[ˈfɛləʊ]', ru: 'товарищеский' },
	{ en: 'giant', tr: '[ˈʤaɪənt]', ru: 'гигантский' },
	{ en: 'handy', tr: '[ˈhændi]', ru: 'удобный, сподручный' },
	{ en: 'holy', tr: '[ˈhəʊli]', ru: 'святой ' },
	{ en: 'inner', tr: '[ˈɪnə]', ru: 'внутренний ' },
	{ en: 'joint', tr: '[ʤɔɪnt]', ru: 'совместный' },
	{ en: 'long-term', tr: '[ˈlɒŋtɜːm]', ru: 'долгосрочный ' },
	{
		en: 'loose',
		tr: '[luːs]',
		ru: 'свободный (ненатянутый, напр. об одежде)'
	},
	{ en: 'minor', tr: '[ˈmaɪnə]', ru: 'незначительный, младший' },
	{
		en: 'modern / contemporary',
		tr: '[ˈmɒdən] / [kənˈtɛmpərəri]',
		ru: 'современный '
	},
	{ en: 'mutual', tr: '[ˈmjuːtjʊəl]', ru: 'взаимный' },
	{ en: 'northern', tr: '[ˈnɔːðən]', ru: 'северный' },
	{
		en: 'obvious',
		tr: '[ˈɒbvɪəs]',
		ru: 'очевидный (полная уверенность)'
	},
	{ en: 'ongoing', tr: '[ˈɒŋˌgəʊɪŋ]', ru: 'продолжающийся' },
	{ en: 'pale', tr: '[peɪl]', ru: 'бледный' },
	{ en: 'pregnant', tr: '[ˈprɛgnənt]', ru: 'беременная' },
	{ en: 'prominent', tr: '[ˈprɒmɪnənt]', ru: 'заметный (выступающий)' },
	{ en: 'proper', tr: '[ˈprɒpə]', ru: 'тщательный (правильный)' },
	{ en: 'pure (water)', tr: '[pjʊə]', ru: 'чистый (без примесей)' },
	{ en: 'racial', tr: '[ˈreɪʃəl]', ru: 'расовый' },
	{ en: 'rare', tr: '[reə]', ru: 'редкий' },
	{ en: 'raw', tr: '[rɔː]', ru: 'сырой' },
	{ en: 'reasonable', tr: '[ˈriːznəbl]', ru: 'разумный' },
	{
		en: 'relevant',
		tr: '[ˈrɛlɪvənt]',
		ru: 'релевантный (имеющий отношение к чему-то)'
	},
	{ en: 'remote', tr: '[rɪˈməʊt]', ru: 'удаленный (дистанционный)' },
	{
		en: 'rough',
		tr: '[rʌf]',
		ru: 'грубый (про материал или характер человека)'
	},
	{ en: 'rural', tr: '[ˈrʊərəl]', ru: 'сельский' },
	{ en: 'senior', tr: '[ˈsiːnjə]', ru: 'старший ' },
	{ en: 'sensitive', tr: '[ˈsɛnsɪtɪv]', ru: 'чувствительный' },
	{ en: 'separate', tr: '[ˈsɛprɪt]', ru: 'отдельный ' },
	{
		en: 'severe (pain)',
		tr: '[sɪˈvɪə]',
		ru: 'жестокий (напр. условия, боль, погода)'
	},
	{ en: 'so-called', tr: '[ˈsəʊˈkɔːld]', ru: 'так называемый' },
	{
		en: 'solar',
		tr: '[ˈsəʊlə]',
		ru: 'солнечный (напр. Солнечная система)'
	},
	{ en: 'southern', tr: '[ˈsʌðən]', ru: 'южный' },
	{ en: 'stable', tr: '[ˈsteɪbl]', ru: 'стабильный ' },
	{ en: 'steady', tr: '[ˈstɛdi]', ru: 'устойчивый ' },
	{ en: 'still', tr: '[stɪl]', ru: 'замерший' },
	{ en: 'straight', tr: '[streɪt]', ru: 'прямой' },
	{
		en: 'supposed',
		tr: '[səˈpəʊzd]',
		ru: 'предполагаемый, подразумеваемый'
	},
	{ en: 'sure', tr: '[ʃʊə]', ru: 'уверенный' },
	{ en: 'tight', tr: '[taɪt]', ru: 'плотный, узкий' },
	{ en: 'tiny', tr: '[ˈtaɪni]', ru: 'крошечный ' },
	{ en: 'tough', tr: '[tʌf]', ru: 'крепкий, сильный' },
	{ en: 'tremendous', tr: '[trɪˈmɛndəs]', ru: 'огромный ' },
	{ en: 'ultimate', tr: '[ˈʌltɪmɪt]', ru: 'окончательный' },
	{ en: 'upper', tr: '[ˈʌpə]', ru: 'верхний' },
	{ en: 'urban', tr: '[ˈɜːbən]', ru: 'городской ' },
	{ en: 'vast', tr: '[vɑːst]', ru: 'широкий (обширный)' },
	{ en: 'violent', tr: '[ˈvaɪələnt]', ru: 'жестокий (насильственный)' },
	{ en: 'vulnerable', tr: '[ˈvʌlnərəbl]', ru: 'уязвимый' },
	{ en: 'western', tr: '[ˈwɛstən]', ru: 'западный' }
]
