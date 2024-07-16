function giveAnkiLists(string) {
	string = string.split('\n')
	let arr = []

	string.forEach(e => {
		arr.push(e.split(' - '))
	})

	for (let i = 0; i < arr.length; i++) {
		[arr[i][0], arr[i][1]] = [arr[i][1], arr[i][0]]
	}

	let result = '<div style="font-size: 1rem; text-align: left; color: gray;">\n'

	arr.forEach(e => {
		result += `<span>${e[0]} - ${e[1]}</span><br>\n`
	})

	result += '</div>'

	return result
}

let string = `браконьер		Браконьеры должны сидеть в тюрьме	poacher	[ˈpəʊtʃər]	Poachers should be in jail
выходной	У меня сегодня выходной	day off	I have the day off today
унижение		терпеть унижение	humiliation	[hjuːˌmɪlɪˈeɪʃn]	to suffer humiliation
канава		Он въехал на машине в канаву	ditch	[dɪʧ]	He drove the car into the ditch
стадо	стадо баранов	herd	[hɜːrd]	herd of sheep
зверь, животное, чудовище		красавица и чудовище	beast	[biːst]	beauty and the beast
уязвимости	 Они считают что у них есть две большие уязвимости	vulnerability	[ˌvʌlnərəˈbɪlətɪ]	мн.ч - vulnerabilities - [ˌvʌlnᵊrəˈbɪlətiz]	They believe they have two big vulnerabilities
распоряжение	Я в вашем распоряжении	disposal	[dɪˈspəʊzᵊl]	I am at your disposal
побережье	Они сняли на две недели виллу на берегу моря	seaside	[ˈsiːsaɪd]	They rented a seaside villa for two weeks
несправедливость	С несправедливостью было покончено	injustice	[ɪnˈʤʌstɪs]	Injustice was repressed
грабитель, взломщик	 Грабитель проник в дом через окно	burglar	[ˈbɜːɡlə]	The burglar came through the window
стрижка	Мне нужно постричься	haircut	[ˈheəkʌt]	I need a haircut
восхищение	 Она посмотрела на них с восхищением	admiration	[ˌædməˈreɪʃᵊn]	She looked at them in admiration
яхта	Они провели лето, путешествуя на яхте	yacht	[jɒt]	They spent the summer on their yacht
ужин	Что было на ужин?	supper	[ˈsʌpə]	What was served for supper?
времяпровождение	Чтение было её любимым занятием	pastime	[ˈpɑːstaɪm]	Reading was her favourite pastime
оборот	В данной компании большая текучка кадров	turnover	[ˈtɜːnˌəʊvə]	The company has a high turnover rate
домашние дела		Мы разделяем домашние обязанности	chores	[ʧɔːz]	We share the domestic chores
"девиз	Девиз бойскаутов — ""Будь готов!"""	motto	[ˈmɒtəʊ]	The Boy Scout motto is “Be prepared”
вредоносное ПО	Реагируя на всплывающее окно, вы получите хороший пример вредоносного ПО!	malware	[ˈmælwer]	Responding to the pop-up will get you a nice case of malware!
сочетание, связь, союз	сочинительный союз	conjunction	[kənˈʤʌŋkʃᵊn]	coordinating conjunction
слог	Ударение никогда не ставится на последний слог	syllable	[ˈsɪləbl]	The accent is never on the last syllable
1)единственное число	2)множественное число	1)глагол единственного числа 2)Узнать родительный это падеж или множественное число	1)singular - [ˈsɪŋɡjələ] 2)plural - [ˈplʊrəl]	1)singular verb 2)Find out if it's possessive or plural
нагреватель		Ты отключил обогреватель?	heater	[ˈhiːtə]	Did you turn the heater off?
фляжка; столовая	1)Фляжка содержит свежую воду 2)школьная столовая	canteen	[kænˈtiːn]	1)The canteen holds fresh water 2)school canteen
1)соотечественник	2)соотечественники	Мои соотечественники полнейшие дегенераты	1)countryman - [ˈkʌntrɪmən] 2)countrymen - [ˈkʌntrɪmən]	My countrymen are total degenerates
ведьма	Ведьму сожгли на костре	witch	[wɪtʃ]	A witch was burned at the stake
подушка	Беги наверх и принеси подушку	pillow	[ˈpɪləʊ]	Run upstairs and get a pillow
стиральная машина	washing machine	[ˈwɒʃɪŋ] [məˈʃiːn]
фокусник	magician	[məˈdʒɪʃn]
иллюзионист	Illusionist	[ɪˈluːʒənɪst]
пылесос	vacuum cleaner	[ˈvækjuːm] [ˈkliːnə]
безумие	madness	[ˈmædnəs]
поощрение, ободрение	Поощрение ребенка при приобретении каких-либо новых навыков	encouragement	[ɪnˈkɜːrɪdʒmənt]	Encouragement offered to the child to learn new skills
предатель, изменник	Ты предатель своей страны	traitor	[ˈtreɪtər]	You're a traitor to your country
точилка	sharpener	[ˈʃɑrpənər]
разговорник; фразеологический словарь	phrase-book	[ˈfreɪz bʊk]
чемодан	suitcase	[ˈsuːtkeɪs]
касса	cash-desk	[kæʃ]-[dɛsk]
туман	fog	[fɑːɡ]
досуг, свободное время		Как вы проводите свободное время?	leisure	[ˈliːʒər]	How do you spend your leisure?
1)хозяин квартиры	2)хозяйка квартиры		Хозяин и хозяйка квартиры очень злобные люди	1)Landlord - [ˈlændlɔːrd] 2)Landlady - [ˈlændleɪdɪ]	The landlord and landlady are very mean people
почтовый ящик	mailbox	[ˈmeɪlbɑːks]
благодарность, признательность		Она приняла его предложение с благодарностью	gratitude	[ˈɡrætɪtuːd]	She accepted his offer with gratitude
невежество		Простите мое невежество, но как это работает на практике?	ignorance	[ˈɪɡnərəns]	Excuse my ignorance, but how does it actually work?
кража с о взломом		Он попала в тюрьму за кражу со взломом	burglary	[ˈbɜːrɡlərɪ]	He got put inside for burglary
таможня		 They cleared customs	customs	[ˈkʌstəmz]	Они прошли таможню
шерсть		Шерстяной свитер покалывал мне кожу	wool	[wʊl]	The wool sweater prickled my skin
магазинный вор	shoplifter	[ˈʃɑːˌplɪftər]
магазинная кража	shoplifting	[ˈʃɑːplɪftɪŋ]
снежная буря	snowstorm	[ˈsnəʊstɔːrm]
узел		Знаменитый гордиев узел был рассечён ударом меча	knot	[nɑːt]	The famous Gordian Knot was cut with a sword blow
трудность, лишение, тяжелое испытание	В моей жизни было много лишений	hardship	[ˈhɑːrdʃɪp]	There have been a lot of hardships in my life
предательство, измена	Его предательство сделало её озлобленной	betrayal	[bɪˈtreɪəl]	His betrayal had made her bitter
убежище	refuge	|ˈrefjuːdʒ|	[5363]
предвкушение (ощущение предвкушения и возбуждения в ожидании чего-то предстоящего)	Мы ждали в лихорадочном предвкушении	anticipation	|ænˌtɪsɪˈpeɪʃn|	We waited in a fever of anticipation	[5778]
детская площадка	playground	|ˈpleɪɡraʊnd|	[5009]
бакалея, продукты питания	 Он нашёл работу — укладывать продукты в пакеты	groceries	[ˈɡrəʊsᵊriz]	He got a job bagging groceries	[-]
добыча	 Охотник становится добычей	prey	|preɪ|	The hunter becomes the prey	[5940]`

string = string.split('\n')

let arr = []
string.forEach(e => {
	arr.push(e.split('	'))
})



let arr2 = []
arr.forEach(e => {
	let obj = {}
	obj.en = e[2]
	obj.tr = e[3]
	obj.ru = e[0]
	obj.pos = ''

	arr2.push(obj)
})

console.log(JSON.stringify(arr2))





