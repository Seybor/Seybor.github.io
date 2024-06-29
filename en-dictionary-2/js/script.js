const s = (e) => document.querySelector(e)
const all = (els) => document.querySelectorAll(els)

const CONTENT = {
	be: `<h1>BE</h1>
<h2>Фразовый глагол</h2>
<ol>
	<li>be away - отсутствовать</li>
</ol>
<h2>Местоположение</h2>
<ol>
	<li>be at home - быть дома</li>
	<li>be at school - быть в школе</li>
	<li>be at work - быть на работе</li>
	<li>be here - быть здесь</li>
	<li>be there - быть там</li>
	<li>be in bed - быть в постели</li>
	<li>be in class - быть на занятии</li>
	<li>be in the kitchen - быть на кухне</li>
	<li>be in the living room - быть в гостиной</li>
	<li>be on vacation - быть в отпуске</li>
</ol>
<h2>Состояние</h2>
<ol>
	<li>be afraid (of) - бояться</li>
	<li>be angry (with) - злиться</li>
	<li>be busy - быть занятым</li>
	<li>be cold - мёрзнуть</li>
	<li>be curious - быть любопытным</li>
	<li>be depressed - быть в депрессии</li>
	<li>be excited - быть взволнованным</li>
	<li>be happy - быть счастливым</li>
	<li>be hungry - быть голодным</li>
	<li>be ill - быть больным</li>
	<li>be nervous - быть нервным</li>
	<li>be sad - быть грустным</li>
	<li>be sick - быть больным</li>
	<li>be sleepy - быть сонным</li>
	<li>be sorry - сожалеть</li>
	<li>be surprised - быть удивлённым</li>
	<li>be thirsty - быть жаждущим</li>
	<li>be tired - быть уставшим</li>
	<li>be interested (in) - интересоваться чем-то</li>
	<li>be bored with - наскучило что-то
		<blockquote>
			<p>Ему наскучил это формат образования - He is bored with this format of education</p>
		</blockquote>
	</li>
	<li>be short of - нехватка чего-то
		<blockquote>
			<p>У меня не хватает времени - I am short of time</p>
		</blockquote>
	</li>
</ol>
<h2>Другое</h2>
<ol>
	<li>be a student - быть студентом</li>
	<li>be a teacher - быть учителем</li>
	<li>be careful - быть осторожным</li>
	<li>be late - опаздывать</li>
	<li>be on time - быть вовремя</li>
	<li>be ready - быть готовым</li>
	<li>be right - быть правым</li>
	<li>be sure - быть уверенным</li>
	<li>be wrong - быть неправым</li>
	<li>be supposed to - быть должным (сделать)</li>
	<li>be more exact - быть более точным
		<blockquote>
			<p>Точнее говоря, я хочу это - To be more exact, I want it</p>
		</blockquote>
	</li>
	<li>to be dressed in a new suit - быть одетым в новый костюм
		<blockquote>
			<p>Он сегодня одет в новый костюм - He is dressed in a new suit today</p>
		</blockquote>
	</li>
</ol>`,
	do: `<h1>DO</h1>
<h2>Фразовый глагол</h2>
<h2>Выражения</h2>
<ol>
<li>do the housework - делать работу по дому</li>
<li>do the gardening - заниматься садом</li>
<li>do the washing - стирать</li>
<li>do the washing-up - мыть посуду</li>
<li>do business with - вести дела с (кем-то)</li>
</ol>
`,
	get: `<h1>GET</h1>
<h2>Фразовый глагол</h2>
<ol>
<li>get away - уехать</li>
<li>get back - вернуться</li>
<li>get down - сесть</li>
<li>get in - войти</li>
<li>get out - выйти</li>
<li>get up - встать</li>
<li>get along - ладить</li>
<li>get around - обходить</li>
<li>get by - проживать</li>
<li>get on - садиться</li>
<li>get over - преодолевать</li>
<li>get through - справляться с чем-то</li>
</ol>
<h2>Общение</h2>
<ol>
<li>get a call - получать звонок</li>
<li>get a message - получать сообщение</li>
<li>get a note - получать заметку</li>
<li>get a photo - получать фотографию</li>
<li>get a phone call - получать телефонный звонок</li>
<li>get a tour - получать экскурсию</li>
<li>get a trip - получать путешествие</li>
</ol>
<h2>Получение чего-то</h2>
<ol>
<li>get a job - получить работу</li>
<li>get a new car - купить новую машину</li>
<li>get a phone - купить телефон</li>
<li>get a ticket - купить билет</li>
<li>get a gift - получить подарок</li>
<li>get a loan - получить кредит</li>
<li>get a raise - получить повышение</li>
<li>get a visa - получить визу</li>
</ol>
<h2>Другое</h2>
<ol>
<li>get away with - уходить от ответственности</li>
<li>get back at - отомстить</li>
<li>get by with - проживать с минимальными средствами</li>
<li>get in touch - связаться</li>
<li>get it done - выполнить задачу</li>
<li>get off - сойти с поезда</li>
<li>get on with - ладить с кем-то</li>
<li>get out of - выйти из</li>
<li>get over with - преодолевать</li>
<li>get wet - промокнуть</li>
<li>get free - освободиться</li>
<li>get a promotion - получить повышение</li>
<li>get in trouble - попасть в беду</li>
</ol>
`,
	have: `<h1>HAVE</h1>
<h2>Фразовый глагол</h2>
<h2>Бытовые действия</h2>
<ol>
	<li>have a bath/shower - принять ванну/душ</li>
	<li>have a haircut - подстричься</li>
	<li>have a manicure - сделать маникюр</li>
	<li>have a party - устроить вечеринку</li>
	<li>have a rest - отдохнуть</li>
	<li>have a walk - пойти на прогулку</li>
	<li>have a wedding - сыграть свадьбу</li>
	<li>have fun - повеселиться</li>
	<li>have a chat - поболтать</li>
	<li>have a conversation - поговорить</li>
	<li>have a disussion - побеседовать</li>
	<li>have a trouble - иметь неприятность</li>
	<li>have difficulty - испытывать трудности</li>
	<li>have a baby - родить ребёнка</li>
	<li>have a row - спорить, скандалить</li>
</ol>
<h2>Приём пищи</h2>
<ol>
	<li>have coffee - пить кофе</li>
	<li>have a drink - выпивать</li>
	<li>have a meal - принимать пищу</li>
	<li>have a sandwich - есть сэндвич</li>
	<li>have a snack - перекусить</li>
	<li>have breakfast - завтракать</li>
	<li>have dinner - ужинать</li>
	<li>have lunch - принимать ланч</li>
	<li>have supper - есть перед сном</li>
	<li>have tea - пить чай</li>
</ol>
<h2>Другое</h2>
<ol>
	<li>have a bad day - пережить трудный день</li>
	<li>have an accident - попасть в аварию</li>
	<li>have a heart attack - пережить инфаркт</li>
	<li>have an operation - лечь на операцию</li>
	<li>have a problem - иметь проблему</li>
	<li>have a reason - иметь причину</li>
	<li>have a secret - иметь секрет</li>
	<li>have a success - иметь успех</li>
	<li>have a surprise - иметь сюрприз</li>
	<li>have a try - попытаться</li>
	<li>have a vacation - отправиться в отпуск</li>
	<li>have a dream - мечтать, иметь мечту</li>
	<li>have a look - взглянуть</li>
	<li>have a swim - плавать</li>
</ol>`,
	make: `<h1>MAKE</h1>
<h2>Фразовый глагол</h2>
<h2>Выражения</h2>
<ol>
<li>make a choice - делать выбор</li>
<li>make a decision - принимать решение</li>
<li>make a mistake - совершать ошибку</li>
<li>make a plan - строить планы</li>
<li>make a promise - давать обещание</li>
<li>make a suggestion - делать предложение</li>
<li>make an effort - прилагать усилия</li>
<li>make an excuse - придумывать оправдание</li>
<li>make an impression - производить впечатление</li>
<li>make an offer - делать предложение</li>
<li>make arrangements - делать приготовления</li>
<li>make changes - вносить изменения</li>
<li>make contact - устанавливать контакт</li>
<li>make fun of - насмехаться над</li>
<li>make money - зарабатывать деньги</li>
<li>make progress - добиваться прогресса</li>
<li>make room - освобождать место</li>
<li>make sense - иметь смысл</li>
<li>make sure - убедиться</li>
<li>make the bed - заправлять постель</li>
<li>make a reservation - забронировать что-то</li>
<li>make coffee/tea - делать кофе/чай</li>
<li>make breakfast - делать завтрак</li>
<li>make a video - снимать видео</li>
<li>make an appointment - назначить встречу</li>
<li>make a bad - застилать постель</li>
<li>make a noise - шуметь</li>
<li>make a mess - устравить беспорядок</li>
</ol>
`,
	take: `<h1>TAKE</h1>
<h2>Фразовый глагол</h2>
<ol>
<li>take off - взлетать; снимать (одежду)</li>
<li>take on - брать на себя</li>
<li>take out - вынимать, вытаскивать</li>
<li>take over - брать под контроль</li>
<li>take up - брать в руки</li>
<li>take away - забирать, отнимать</li>
<li>take back - отнимать обратно</li>
<li>take in - принимать, принимать в себя</li>
</ol>
<h2>Действия</h2>
<ol>
<li>take a break - сделать перерыв</li>
<li>take a chance - рисковать</li>
<li>take a closer look - рассмотреть более подробно</li>
<li>take a decision - принять решение</li>
<li>take a drink - пить</li>
<li>take a shower/bath - принять душ/ванную</li>
<li>take a step - сделать шаг</li>
<li>take a walk - прогуляться</li>
<li>take a look - взглянуть</li>
<li>take action - принимать меры</li>
<li>take care (of) - заботиться о ком-то</li>
<li>take control - контролировать</li>
<li>take it easy - не напрягаться</li>
<li>take it from here - продолжать самому</li>
<li>take it to heart - принимать к сведению</li>
<li>take part - участвовать, принимать участие</li>
<li>take place - происходить</li>
<li>take time - тратить время</li>
<li>take your time - не торопиться</li>
<li>take a ride - прокатиться</li>
<li>take a nap - вздремнуть</li>
<li>take an exam - сдавать экзамен</li>
<li>take a picture - сделать снимок</li>
<li>took a liking to - приглянуться</li>
</ol>
<h2>Общение</h2>
<ol>
<li>take a call - брать звонок</li>
<li>take a message - брать сообщение</li>
<li>take a meeting - встречаться</li>
<li>take a note - брать заметку</li>
<li>take a photo - фотографировать</li>
<li>take a phone call - брать телефонный звонок</li>
<li>take a tour - делать экскурсию</li>
<li>take a trip - ездить в путешествие</li>
<li>take a walk with - прогуляться с кем-то</li>
</ol>
<h2>Другое</h2>
<ol>
<li>take it into account - принимать это во внимание
<blockquote>
<p>Постарайся принять это во внимание - Try to take it into account</p>
</blockquote>
</li>
<li>take it for granted - принимать это как должное
<blockquote>
<p>Ты не можешь принимать это как должное - You can't take it for granted</p>
</blockquote>
</li>
<li>take offense - обижаться
<blockquote>
<p>I'll try not to take offense at that remark - Я постараюсь не обижаться на это замечание</p>
</blockquote>
</li>
</ol>
`
}

all('.nav__link').forEach(e => {
	e.addEventListener('click', (evt) => {
		evt.preventDefault()

		s('.content__inner').textContent = ''

		s('.content__inner').insertAdjacentHTML('beforeend', CONTENT[e.dataset.type]);

	})
})