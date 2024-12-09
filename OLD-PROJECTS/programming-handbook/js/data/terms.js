const terms = [
	{
		theme: `GIT`,
		cards: [
			{
				subtheme: `1. Термины`,
				content: `
				<ul>
				<li>Git или Гит — система контроля и управления версиями файлов.</li>
				<li>GitHub или Гитхаб — веб-сервис для размещения репозиториев и совместной разработки проектов.</li>


				<li>Репозиторий Git — каталог файловой системы, в котором находятся: файлы конфигурации, файлы журналов операций, выполняемых над репозиторием, индекс расположения файлов и хранилище, содержащее сами контролируемые файлы.</li>
				<li>Локальный репозиторий — репозиторий, расположенный на локальном компьютере разработчика в каталоге. Именно в нём происходит разработка и фиксация изменений, которые отправляются на удалённый репозиторий.</li>
				<li>Удалённый репозиторий — репозиторий, находящийся на удалённом сервере. Это общий репозиторий, в который приходят все изменения и из которого забираются все обновления.</li>
				<li>Форк (Fork) — копия репозитория. Его также можно рассматривать как внешнюю ветку для текущего репозитория. Копия вашего открытого репозитория на Гитхабе может быть сделана любым пользователем, после чего он может прислать изменения в ваш репозиторий через пулреквест.</li>
				<li>Обновиться из апстрима — обновить свою локальную версию форка до последней версии основного репозитория, от которого сделан форк.</li>
				<li>Обновиться из ориджина — обновить свою локальную версию репозитория до последней удалённой версии этого репозитория.</li>
				<li>Клонирование (Clone) — скачивание репозитория с удалённого сервера на локальный компьютер в определённый каталог для дальнейшей работы с этим каталогом как с репозиторием.</li>
				<li>Ветка (Branch) — это параллельная версия репозитория. Она включена в этот репозиторий, но не влияет на главную версию, тем самым позволяя свободно работать в параллельной. Когда вы внесли нужные изменения, то вы можете объединить их с главной версией.</li>
				<li>Мастер (Master) — главная или основная ветка репозитория.</li>
				<li>Коммит (Commit) — фиксация изменений или запись изменений в репозиторий. Коммит происходит на локальной машине.</li>
				<li>Пул (Pull) — получение последних изменений с удалённого сервера репозитория.</li>
				<li>Пуш (Push) — отправка всех неотправленных коммитов на удалённый сервер репозитория.</li>
				<li>Пулреквест (Pull Request) — запрос на слияние форка репозитория с основным репозиторием. Пулреквест может быть принят или отклонён вами, как владельцем репозитория.</li>
				<li>Мёрдж (Merge) — слияние изменений из какой-либо ветки репозитория с любой веткой этого же репозитория. Чаще всего слияние изменений из ветки репозитория с основной веткой репозитория.</li>
				<li>Кодревью — процесс проверки кода на соответствие определённым требованиям, задачам и внешнему виду.</li>
				</ul>
				`
			}
		]
	},
	{
		theme: `JavaScript`,
		cards: [
			{
				subtheme: `1. Термины`,
				content: `
				<ol>
	<li>Аргумент — значение, которое передается в функцию.</li>
	<li>Атрибут — пара «ключ-значение» в составе HTML-элемента. Атрибуты можно использовать для управления различными
		свойствами элемента, например адресом, на который он ссылается, или размерами элемента.</li>
	<li>Бесконечный цикл — цикл, который никогда не прекращается сам по себе (что нередко приводит к сбою интерпретатора).
		Может быть следствием неверно заданных условий цикла.</li>
	<li>Библиотека — содержащий функции и методы пакет JavaScript-кода, который можно подгрузить к веб-странице и
		использовать в своей программе.</li>
	<li>Булево значение — значение, которое может быть либо истинным (true), либо ложным (false).</li>
	<li>Верблюжья запись — общепринятый способ наименования переменных, когда отдельные слова, из которых состоит имя
		переменной (кроме самого первого слова), пишутся с заглавной буквы; например: myCamelCaseVariable.</li>
	<li>Возврат — выход из функции и возвращение в точку программы, откуда она была вызвана. Возврат происходит при
		достижении конца тела функции либо при выполнении оператора return (с помощью которого можно выйти из функции
		досрочно). При этом функция возвращает назад значение (если конкретное возвращаемое значение в функции не указано,
		будет возвращено пустое значение undefined).</li>

	<li>Вызов — выполнение функции. Чтобы вызвать функцию в JavaScript, нужно ввести ее имя, а
		затем пару круглых скобок (внутри которых указываются аргументы, если они
		есть).</li>

	<li>Выполнение — запуск
		некоторого кода, например программы или
		функции.</li>

	<li>Данные — хранимая в
		компьютерных программах информация, с которой выполняются некие действия.</li>

	<li>Декремент — уменьшение значения
		переменной (обычно на 1).</li>

	<li>Диалог — небольшое всплывающее
		окошко. Из JavaScript-кода можно открывать в браузере различные диалоги, такие
		как alert (отображение текстового сообщения) или prompt (запрос и
		получение ввода от пользователя).</li>

	<li>Индекс — число, соответствующее позиции значения в массиве. С помощью индекса можно получить доступ к
		определенному значению.</li>

	<li>Инкремент — увеличение значения
		переменной (обычно на 1).</li>

	<li>Интерпретатор — компьютерная
		программа, считывающая и
		исполняющая код. В составе веб-браузеров есть интерпретатор JavaScript, который используется в
		этой книге для запуска программ.</li>

	<li>Ключевое слово — слово, которое имеет специальное значение в JavaScript (например, for, return или
		function). Ключевые слова нельзя
		использовать в качестве имен переменных.</li>

	<li>Комментарий — фрагмент
		текста программы, который игнорируется интерпретатором JavaScript. Комментарии нужны
		лишь для того, чтобы пояснять работу
		программы тем, кто читает ее код.</li>

	<li>Конструктор — разновидность
		функции, используемой для
		создания объектов с одинаковыми
		встроенными свойствами.</li>

	<li>Массив — список значений в JavaScript. Каждому значению
		соответствует индекс, то есть
		порядковый номер этого значения в массиве. Индекс
		первого элемента равен 0, второго — 1 и
		т. д.</li>

	<li>Метод — функция, являющаяся свойством объекта.</li>

	<li>Обработчик события — функция, которая
		вызывается, когда определенное
		событие происходит с определенным HTML-элементом.</li>

	<li>Объект — набор пар «ключ-значение». Каждый ключ — это строка, которую можно связать с любым JavaScript-значением.
		Зная
		ключ, можно получить
		из объекта связанное с ним значение.</li>

	<li>Объектно-ориентированное программирование — стиль программирования, подразумевающий использование объектов и
		методов
		для
		структурирования кода и реализации основных возможностей программы.</li>

	<li>Пара «ключ-значение»
		— пара, состоящая из строки (называемой ключом) и связанного с ней значения
		(любого типа). Пары «ключ-значение» содержатся в JavaScript-объектах и позволяют
		задавать их свойства и методы.</li>

	<li>Переменная — способ
		связывания имени со значением. После того как переменной
		присвоено значение, к нему можно обращаться через имя переменной.</li>

	<li>Пробельный символ — неотображаемый на экране символ, например пробел,
		перенос строки, табуляция.</li>

	<li>Свойство — имя пары «ключ-значение», принадлежащей объекту.</li>

	<li>Синтаксис — правила объединения
		ключевых слов, знаков пунктуации и других символов в работающую
		JavaScript-программу.</li>

	<li>Событие — действие в браузере, например клик мышкой или нажатие клавиши. События можно как отслеживать, так и
		реагировать на них — при помощи
		обработчиков событий.</li>

	<li>Строка — последовательность
		символов, окруженная кавычками; представление текста в компьютерных
		программах.</li>

	<li>Строка селектора — строка, обозначающая один или несколько HTMLэлементов, которую можно передать jQuery-функции
		для
		поиска этих элементов.</li>

	<li>Тег — сетка, используемая
		для создания HTML-элементов. Все элементы начинаются с открывающего тега,
		и большинство из них заканчиваются
		закрывающим тегом. Теги определяют тип создаваемого элемента. Кроме того, в открывающем теге можно
		задать атрибуты элемента.</li>

	<li>Текстовый редактор — компьютерная программа для написания и редактирования простого текста без
		специального форматирования (например,
		выбора различных шрифтов и цветов).</li>

	<li>Управляющая конструкция —
		способ контроля за тем, когда и
		сколько раз выполняется фрагмент кода. Например, условные конструкции (по
		заданному условию определяющие, когда выполнять код) и циклы (выполняющие фрагмент кода
		повторно определенное количество раз).</li>

	<li>Условная конструкция — конструкция языка, которая выполняет код в зависимости от проверки условия. Если
		условие истинно (true), выполняется один
		фрагмент кода, а если условие ложно (false) — либо другой фрагмент, либо не делается ничего.
		Примеры условных конструкций: операторы if и if... else.</li>

	<li>Функция — состоящий из одной
		или более команд фрагмент кода, который можно вызывать (выполнять). С
		помощью функции можно повторять один и тот же набор действий в разных
		частях программы. Функция может
		принимать аргументы и возвращать обратно значение.</li>

	<li>Цикл — способ многократного
		выполнения фрагмента кода.</li>

	<li>Элемент — часть HTML-документа; например, заголовок, параграф или тело (body).
		Элемент обозначается открывающим и закрывающим тегами (которые определяют тип элемента) и
		включает в себя все, что находится
		между этими тегами. Дерево DOM состоит из элементов.</li>

	<li>Язык программирования — язык, с помощью которого программист может
		объяснить компьютеру, как нужно выполнить некую задачу.</li>

	<li>DOM (объектная модель документа) —
		способ, которым веб-браузеры упорядочивают
		HTML-элементы на веб-странице. Элементы организованы в виде древовидной
		структуры, которую называют деревом
		DOM. В JavaScript и jQuery есть
		методы для работы с DOM, то есть поиска, создания и изменения элементов.</li>

	<li>jQuery — JavaScript-библиотека, предоставляющая множество методов для работы с элементами DOM на веб-странице.
	</li>

	<li>Null — специальное значение, благодаря которому мы видим, что переменная намеренно оставлена пустой.</li>

	<li>Prototype — свойство конструктора. Методы, добавленные к свойству prototype,
		становятся доступны всем объектам, созданным через этотконструктор.</li>

	<li>Undefined — специальное значение, которое JavaScript использует, чтобы показать, что
		некоему свойству или переменной не было присвоено конкретное значение.</li>

	<li>JavaScript — язык программирования широкого
		спектра. На нём можно как создавать динамические интерфейсы, так и
		работать с базами данных и операционными системами. Основная область
		применения JavaScript — веб. С его помощью можно обмениваться данными
		между браузером и сервером, изменять HTML и CSS веб-страницы, создавать
		веб-приложения.</li>

	<li>Интерполяция в js - процесс встраивания выражения в
		часть шаблонной строки
		JavaScript модуль - это механизм
		структурирования и группирования кода, который позволяет инкапсулировать
		код в один файл и определять какие его части будут видны окружающей
		среде.</li>

	<li>Лексическое окружение - невидимый объект,
		который есть у любого блока, скрипта или функции в JavaScript. Этот объект состоит из двух частей:
		список переменных и ссылка на родительское окружение.</li>

	<li>Замыкание
		- это способность функции в js, запоминать лексическое окружение,
		в котором она была создана.</li>

	<li>ECMAScript - стандарт для языка JavaScript.</li>

	<li>Node.Js - среда для
		программирования на javascript вне
		браузера</li>

	<li>Приведение (или
		преобразование) типов — это процесс конвертации значения из одного типа в
		другой</li>

	<li>Ключевое слово — одно из зарезервированных слов
		языка JavaScript. JavaScript использует такие слова для собственных
		целей.</li>
		<li>Promise - возвращает объект, замещающий возвращаемое значение, которое на момент завершения функции ещё не известно.</li>
	<li>fetch - надстройка над промисами (Promise) для выполнения запрос к удаленному серверу</li>
</ol>
				`
			}
		]
	},
	{
		theme: `Функции`,
		cards: [
			{
				subtheme: `1. Термины`,
				content: `

				Функция — это блок кода, который может быть именован и вызван повторно. Иногда функцию ещё называют подпрограммой. <br><br>
Колбэк функция - это функция, которая передаётся в качестве аргумента в вызове другой функции. Если внутри одной функции определены другие функции, эти вложенные функции не обязательно являются callback функциями. Они могут быть просто локальными функциями, которые не передаются как аргументы в другие функции. Callback функцией считается только та функция, которая передается как аргумент и вызывается после завершения основной функции <br><br>
Функция замыкания
<ul>
<li>это способность функции в js, запоминать лексическое окружение, в котором она была создана</li>
<li>это функция, которая ссылается на переменные из окружающих её локальных областей видимости</li>
</ul>
Функция-конструктор - функция, которая создаёт пустой объект. Ключевое слово this получает ссылку на этот объект. Возвращает this. Создаётся через оператор new <br><br>
Рекурсивная функция - это функция, вызывающая саму себя <br><br>
Чистая функция <br><br>
<ul>
<li>всегда возвращает одинаковый результат при тех же вводных аргументах</li>
<li>это функция, которая не изменяет внешние переменные</li>
<li>это функция, которая не зависит от внешних переменных и от состояния программы</li>
<li>это функция, которая не взаимодействует с внешними ресурсами</li>
</ul>
Первоклассная функция - означает, что функции в языке программирования рассматриваются как объекты первого класса. Это значит, что функции могут:
<ul>
<li>Передаваться как аргументы другим функциям.</li>
<li>Возвращаться из других функций.</li>
<li>Присваиваться переменным.</li>
</ul>
Предикативная функция - это функция, которая проверяет значение на соответствие какому-то условию, а затем возвращает логическое значение.<br><br>
Функция высшего порядка - это функция, которая работает с другими функциями, либо принимая их в качестве аргументов, либо возвращая их (map, filter и reduce в JavaScript). Функции высшего порядка являются первоклассными, но не все первоклассные функции являются функциями высшего порядка<br><br>
Побочный эффект - это любые действия, изменяющие среду выполнения. К ним относятся любые файловые операции, такие как запись в файл, чтение файла, отправка или приём данных по сети и даже вывод в консоль.<br><br>
Параметры - это названия переменных, которые находятся в скобках при объявлении функции.<br><br>
Аргументы - это значения, которые передаются при вызове функции.<br><br>

Объявление функции (Function Declaration) в JavaScript — это способ определения функции с использованием специального синтаксиса, который включает ключевое слово function, имя функции и тело функции, заключенное в фигурные скобки. Этот метод позволяет создавать именованные функции, которые могут быть вызваны в любом месте кода, даже до их определения, благодаря механизму "подъема" (hoisting). Не могут быть анонимнымы.  Могут быть вызваны до объявления.<br><br>

Функциональное выражение (Function Expression) в JavaScript — это способ определения функции, при котором функция создается как часть выражения и может быть присвоена переменной. Это позволяет использовать функции как значения, что делает их более гибкими и удобными для передачи в другие функции или использования в качестве аргументов. Могут быть анонимнымы. Не могут быть вызваны до объявления.<br><br>

arguments - представляет собой массив-подобный объект, который содержит все аргументы, переданные функции при её вызове. Этот объект доступен внутри любой нестрелочной функции и позволяет работать с переменным количеством аргументов без необходимости заранее определять их в параметрах функции. В современных версиях JavaScript рекомендуется использовать остаточные параметры (...args) вместо объекта arguments, так как это более гибкий и читаемый способ работы с переменным количеством аргументов. <br><br>
				`
			}
		]
	},
	{
		theme: `Веб-программирование`,
		cards: [
			{
				subtheme: `1. Термины`,
				content: `
				Вёрстка — процесс создания структуры кода по отрисованному макету. <br><br>
Фронтенд - клиентская часть приложения(формы, кнопки и т.д) <br><br>
Верстальщик - тот, кто который по дизайнерским макетам собирает веб-страницы. Он использует HTML-код, чтобы всё правильно отображалось в каждом браузере и на каждом устройстве — телефоне, планшете и ноутбуке. <br><br>
Фронтенд-разработчик — это специалист, который создает пользовательские интерфейсы. Он отвечает за всю внешнюю часть сайта или приложения, с которой взаимодействуют люди: меню, карточки товаров в интернет-магазине, кнопки, формы обратной связи. <br><br>
Бэкенд-разработчик — это программист, который занимается внутренней частью сайта. Обязанности бэкэнд-разработчика — работа с админкой сайта, базами данных и всей внутренней архитектурой проекта <br><br>
Фулстек-разработчик – это разработчик, который должен разбираться во всем стеке технологий и используемых в проекте компонентов, как в части фронтенда, так и бэкенда. <br><br>
Бэкенд (back-end) — это часть сайта, которая находится на сервере, получает запрос от браузера, выполняет запрошенные действия и отправляет информацию обратно. <br><br>
Веб-разработка - создание сайтов и веб-приложений <br><br>
Принцип каскада - Стили читаются и применяются сверху вниз. Это не специфичность! <br><br>
Специфичность — это алгоритм, благодаря которому браузер определяет, какие именно стили из всего набора применить к элементу. В вычислениях участвуют CSS-селекторы. Если одному и тому же элементу подходит сразу несколько CSS-правил с разными селекторами, то браузер применяет те стили, вес селектора которых больше. Правило каскада «кто ниже, тот и выигрывает» при этом может нарушаться. <br><br>
fallback - резервный вариант для отображения того или иного элемента в случае проблем с отображением стилей, работой javascript или jquery. <br><br>
Overlay — выводит новый элемент поверх всех остальных элементов интерфейса. Например, вы кликаете на кнопку, и появляется диалоговое окно с выбором действий. Оверлей подходит для прототипирования бургер-меню, всплывающих модальных окон, системных сообщений, а также для всплывающих подсказок и экранной клавиатуры. <br><br>
Cпрайт – способ объединить много изображений в одно. <br><br>
Селекторы — это шаблоны, которые используются для привязки стилевых свойств к элементам в документе <br><br>
Лендинг (от англ. landing page — «посадочная страница») — это одностраничный сайт с краткой информацией о товаре, услуге или мероприятии. Его задача — превращать посетителей в клиентов. Пользователи переходят на лендинг по ссылкам с рекламных баннеров, постов из соцсетей, электронных писем или СМС. <br><br>
Парсинг - синтаксический анализ текста, осуществляемый специальными компьютерными программами и включающий в себя установление связей между словами и сочетаниями слов и приписывание им определённых синтаксических признаков <br><br>
Рендеринг -  процесс получения изображения по модели с помощью компьютерной программы. <br><br>
Сетевой трафик (интернет-трафик) — объём информации, передаваемой через компьютерную сеть за определённый период времени <br><br>
Вьюпорт — видимая область страницы в браузере, окно браузера включая полосу прокрутки. Относительно вьюпорта рассчитываются размеры тега <html> и относительные размеры его потомков. <br><br>
ТИЦ сайта – это тематический индекс цитирования, отображающий уровень авторитетности веб-сайта с точки зрения поисковой системы Яндекс. <br><br>
Page Rank (PR) – Google ввел этот показатель (в далеком 1996 году) для числового отображения авторитетности (важности) странички веб-ресурса для поисковой системы <br><br>
Интерактивный элемент - это элемент, который может получить фокус по клавише tab <br><br>
"Хлебные крошки" - это иерархические ссылки на сайте. Тоже пагинация. <br><br>
Бандлер — программа, которая упаковывает сложный проект со многими файлами и внешними зависимостями в один (иногда несколько) файл, который будет отправлен браузеру. <br><br>
Вендорные префиксы — те CSS-свойства, которые ещё официально не утверждены стандартом, либо пока не поддерживаются браузером в полной мере <br><br>
Валидация формы — это проверка содержимого её полей. Задача такой проверки — убедиться, что необходимые поля заполнены, а значения в них соответствуют ожидаемому формату <br><br>
Деплой (deploy) — это развертывание и запуск веб-приложения или сайта в его рабочей среде, то есть на сервере или хостинге. Разработчик загружает приложение, написанное на локальном компьютере, в специальное пространство, из которого оно доступно в интернете. <br><br>
React — это декларативная JavaScript-библиотека для создания пользовательских интерфейсов. Она позволяет собирать сложный UI из маленьких изолированных кусочков кода, называемых «компонентами». <br><br>
Реактивные фреймворки — это программирование на основе работы с данными, поэтому важно знать тип данных, который приходит в компоненты. Так как JavaScript не позволяет явно описывать типы данных, React-разработчики обычно используют в проектах TypeScript. <br><br>
JSX — расширение JavaScript для описания интерфейса прямо в JS с помощью синтаксиса, похожего на HTML <br><br>
TypeScript — строго типизированный язык программирования, основанный на JavaScript. Он является эволюцией синтаксиса JavaScript, поэтому любая программа JS синтаксически корректна на TypeScript <br><br>
Babel - компилятор кода js. Позволяет преобразовывать jsx в js. А также преобразует относительно новые возможности js в такие же, но написанные на более ранних версиях js, чтобы они работали в более старых версиях браузеров <br><br>
Мнемоника — это кодовое представление символа в HTML, который начинается со знака амперсанда & и завершается точкой с запятой ;. <br><br>
Cookie/Куки - небольшой текст (не более 4кб), который сервер может сохранять в браузере пользователя. С помощью кук сервер может идентифицировать пользователя и хранить данные каждого клиента между его запросами. С технической стороны, куки — это обычные HTTP-заголовки. <br><br>
JSON - популярный формат сериализации. Испольпользуется не только для js <br><br>
Сериализация данных - преобразование их, представив в виде иерархического описания <br><br>
REST API — стиль общения компонентов, при котором все необходимые данные указываются в параметрах запроса <br><br>
Синхронный код выполняется последовательно, один за другим. Это означает, что выполнение одной операции блокирует выполнение следующих операций до тех пор, пока текущая не завершится. Например, если функция выполняется долго, весь поток выполнения программы будет остановлен до её завершения <br><br>
Асинхронный код позволяет выполнять несколько операций одновременно без блокировки основного потока выполнения. Это достигается с помощью коллбеков, промисов или конструкций async/await. Асинхронные функции могут начать выполнение и продолжить работу, не дожидаясь завершения длительных операций <br><br>
SSH — протокол для безопасного соединения между компьютерами <br><br>
AJAX (Asynchronous JavaScript and XML) — это технология, позволяющая веб-приложениям взаимодействовать с сервером асинхронно, что означает, что данные могут быть отправлены и получены без необходимости перезагрузки всей страницы. <br><br>
Полифил (полифилл) — это код, реализующий какую-либо функциональность, которая не поддерживается в некоторых версиях веб-браузеров. Обычно реализуется как библиотека JavaScript, обеспечивающая поддержку веб-стандарта HTML5 в версиях браузеров, где поддержка этих функций частично или полностью отсутствует. <br><br>
«Дребезг», «Мигание» - Эффект связанный с мгновенной реакцией на пользовательский ввод. Приводит к миганию и нежелательному кратковременному изменению интерфейса программы <br><br>
<ul>
<li>дебаунс (устранение «дребезга») — Выполнение только последнего запроса из множества </li>
<li>тротлинг (пропускание кода) — Выполнение не чаще одного раза в заданный промежуток времени </li>
</ul>
				`
			}
		]
	},
	{
		theme: `Термины программирования`,
		cards: [
			{
				subtheme: `1. Термины`,
				content: `
Программирование — это процесс создания программ. <br><br>
Программа — это набор стольких инструкций, сколько нужно для того, чтобы описать все шаги, необходимые для выполнения цели программы. <br><br>
Язык программирования - это искусственный язык, созданный для написания компьютерных программ. <br><br>
Код - это текст из которого состоит программа. <br><br>
Выражение — это минимальный блок кода, имеющий значение (результат).  <br><br>
<ul>
<li>Например, 5 + 3 вернёт 8, а Math.random() — случайное число.</li>

</ul>Инструкция - это отдельная команда в коде, которая выполняет определённое действие.  <br><br>
<ul>
<li>Например, if позволяет создать ветвление в программе, for позволяет повторять одно и то же действие. </li>
<li>После инструкций желательно ставить точку с запятой, так как в определённы случаях её отсутствие может привести к ошибкам.</li>
<li>Инструкции ничего не вычисляют и не возвращают результат, поэтому они не являются выражениями</li>

</ul>Выражение-инструкция - это выражение, которое находится на отдельной строке кода <br><br>
Подпрограмма – это обособленный участок кода, который решает одну небольшую задачу. <br><br>
Файл <br><br>
<ul>
<li>область памяти на внешнем запоминающем устройстве, хранящая (содержащая) определенную информацию. </li>
<li>это набор сгруппированных данных, которому дали имя и записали на физическом носителе</li>

</ul>Файловая система — это способ организации информации на диске, при котором она разделяется на файлы, т. е. наборы данных, объединенные общим смыслом, записанные в одном или нескольких секторах. Самое важное: каждому файлу можно присвоить имя, которое поможет вам запомнить, что именно в нем содержится. <br><br>
Переменная <br><br>
<ul>
<li>способ сохранить информацию под определённым именем.</li>
<li>это контейнер, в котором содержатся данные.</li>

</ul>Привязка - синоним для переменной. <br><br>
Значение — это любая информация, которая хранится внутри переменной. <br><br>
Объявление переменной — написание имени переменной, первое её упоминание. Запись информации в переменную называется присваиванием значения. <br><br>
Экранирование - когда в строке встречается косая черта (\) это означает, что следующий символ имеет специальное значение. <br><br>
Отладка — этап разработки компьютерной программы, на котором обнаруживают, локализуют и устраняют ошибки. <br><br>
Плагины — модули, которые устанавливают для обработки конкретной задачи. <br><br>
Модуль <br><br>
<ul>
<li>узкоспециализированный код - код, который решает ровно одну задачу (например, валидация формы или работа всплывающего окна)</li>
<li>несколько функций, записанных в объект(неймспейс, пространство имен) например, объект Math. Набор функций и значений из одной области</li>
<li>набор функций (библиотека) - полезный набор инструментов, который может переноситься из проекта в проект</li>

</ul>Оператор <br><br>
<ul>
<li>команда или набор команд.</li>
<li>это встроенная функция, которая, как и все функции возвращает значение.</li>
<li>это то, что принимает одно или более значений</li>

</ul>Операнд(аргумент) – то, к чему применяется оператор. <br><br>
Синтаксический сахар — это синтаксические возможности, применение которых не влияет на поведение программы, но делает использование языка более удобным для человека. <br><br>
Цикл — это конструкция языка, которая выполняет блок кода больше одного раза  <br><br>
Итерация - одно выполнение тела цикла. <br><br>
Массив <br><br>
<ul>
<li>это объект с цифровыми именами строк</li>
<li>это совокупность множества элементов вида «ключ: значение»</li>

</ul>Индекс - порядковый номер значения в массиве <br><br>
Рефакторинг - процесс изменения внутренней структуры программы, не затрагивающий её внешнего поведения и имеющий целью облегчить понимание её работы. <br><br>
Приоритет операторов - определяет порядок, в котором операторы выполняются. Операторы с более высоким приоритетом выполняются первыми. <br><br>
Ассоциативность - определяет порядок, в котором обрабатываются операторы с одинаковым приоритетом.  <br><br>
Левая ассоциативность (слева направо) означает, что оно обрабатывается как (a OP b) OP c, в то время как правая ассоциативность (справа налево) означает, что они интерпретируются как a OP (b OP c). Операторы присваивания являются право-ассоциативными <br><br>
Литерал <br><br>
<ul>
<li>Запись в исходном коде компьютерной программы, которая представляет собой фиксированное значение.</li>
<li>нечто, вычисляющееся само в себя, например число 73 или строка "Hello"</li>

</ul>Спагетти-код (также индусский код) — плохо спроектированная, слабо структурированная, запутанная и трудная для понимания программа, особенно содержащая много операторов GOTO (особенно переходов назад), исключений и других конструкций, ухудшающих структурированность. Самый распространённый антипаттерн программирования. <br><br>
Регулярное выражение (Regular Expression, Regex) - это последовательность символов, которая определяет шаблон поиска в тексте. Оно используется для выполнения операций поиска, замены и сопоставления с текстом, основываясь на заданном шаблоне. <br><br>
Квантификаторы в регулярных выражениях - это символы или группы символов, которые определяют, сколько раз предшествующий элемент должен повторяться в строке, которую мы анализируем. Они помогают нам уточнить наши поисковые запросы, делая их более гибкими и точными. <br><br>
Линтер — это программа, которая форматирует код по определённым правилам <br><br>
Системы счисления - это метод записи чисел с помощью письменных знаков <br><br>
Позиционные СС - значение каждой цифры числа зависит от её позиции(разряда). Количество чисел СС определяет её название и называется её основанием <br><br>
Бит - обозначение минимальной единицы информации. Память компьютеров состоит из транзисторов. В них могут быть всего два состояния - тока нет, ток есть. Поэтому память в компьютере двоичная (0 - тока нет, 1 - ток есть) <br><br>
Числа с плавающей точкой — это приближённое представление вещественных чисел в программировании <br><br>
Деструктуризация - Разложение сложной структуры (объекта, массива, функции) на простые части (свойства, элементы, составляющие) в целях получения к ним доступа более эффективным способом <br><br>
Тип данных - определяют допустимые значения, а также допустимые операции с данными какого-либо типа <br><br>
Абсолютный путь — это полный адрес файла от корня диска. Например, /var/www/web/site/inc/sub.php <br><br>
Относительный путь - содержит адрес относительно текущей рабочей директории. Если сценарий лежит в папке /var/www/web/site, то для подключения файла используется такой путь: inc/sub.php <br><br>
API – Application Programming Interface, что значит программный интерфейс приложения. Это механизмы, которые позволяют двум программным компонентам взаимодействовать друг с другом, используя набор определений и протоколов. Например, система ПО метеослужбы содержит ежедневные данные о погоде. Приложение погоды на телефоне «общается» с этой системой через API и показывает ежедневные обновления погоды на телефоне.  <br><br>
Конкатенация - объединение строк. <br><br>
Алгоритм - набор инструкций для выполнения некоторой задачи <br><br>
База данных — это структурированная коллекция записей или данных, хранящихся в компьютерной системе и организованных так, что можно осуществлять быстрый поиск и извлечение нужной информации. <br><br>
Кодек - представляет собой кодировщик-декодировщик. Им описывается функциональная возможность, предоставляемая программным обеспечением, занимающимся кодированием и декодированием такого медиа, как аудио и видео. <br><br>
Сниппеты — это шаблоны, которые вы можете использовать для быстрой вставки кода, который вы часто используете. <br><br>
Стек - это структура данных, которая работает по принципу "последний вошел, первый вышел" (LIFO - last in, first out). Это означает, что последний элемент, добавленный в стек, будет первым, который будет удален из стека. <br><br>
Список - это иерархический набор объектов, где первый объект содержит ссылку на второй, второй - на третий и т.д. <br><br>
Драйвер - это программное обеспечение, которое позволяет операционной системе взаимодействовать с аппаратными устройствами, такими как принтеры, сканеры, звуковые карты и другие. Он переводит команды операционной системы в инструкции, понятные для устройства, и обеспечивает правильное функционирование устройства. <br><br>
Интерполяция - это метод, используемый для вычисления значений недостающих пикселей на изображении, основываясь на значениях соседних пикселей. Она применяется при изменении размера изображения, поворотах и других трансформациях, чтобы сохранить его качество и четкость <br><br>
Обфускация кода — это процесс приведения исходного кода программы к виду, сохраняющему исходную функциональность, но затрудняющему анализ, понимание алгоритмов работы и модификацию при декомпиляции <br><br>

				`
			},
			{
				subtheme: `Паттерны программирования`,
				content: `
				Паттерн программирования (или шаблон проектирования) представляет собой повторяющееся решение определенной проблемы, возникающей в процессе проектирования программного обеспечения. Это не конкретный код, а общее описание подхода к решению проблемы, которое может быть адаптировано под конкретные нужды приложения. Паттерны помогают разработчикам избегать "изобретения велосипеда", предоставляя проверенные решения для распространенных задач. <br><br>

				Основные характеристики паттернов:<br>
# Общая концепция: Паттерны описывают не конкретные реализации, а общие принципы и структуры.<br>
# Формализация: Обычно паттерн включает описание проблемы, мотивацию для решения, структуру классов и примеры реализации.<br>
# Типология: Паттерны делятся на три категории: порождающие (например, Singleton), структурные (например, Adapter) и поведенческие (например, Observer)
				`
			},
			{
				subtheme: `Архитектура программирования`,
				content: `
				Архитектура программирования относится к высокоуровневой структуре программной системы. Она определяет основные компоненты системы, их взаимодействия и отношения между ними. Архитектурные паттерны описывают общие схемы проектирования, которые могут быть применены к различным системам независимо от используемых технологий или языков программирования.<br><br>

				Основные аспекты архитектуры: <br>
# Структурная схема: Архитектура определяет, как различные части системы взаимодействуют друг с другом.<br>
# Высокий уровень абстракции: Архитектурные паттерны находятся на более высоком уровне абстракции по сравнению с паттернами проектирования и фокусируются на организации всей системы <br>
# Примеры архитектурных паттернов: MVC (Model-View-Controller), клиент-серверная архитектура, микросервисная архитектура.<br><br>

Датабиндинг — оно же “связывание данных”, механизм синхронизации данных и отображения<br>
Данные — какая-либо информация, вне зависимости от способа представления<br>
Отображение — часть интерфейса, независимо от способа реализации<br>
MV* - Способы организации логики в приложении<br>
В терминологии MVC:<br>
	- Модель — данные<br>
	- Представление — компоненты<br>
	- Контроллер — хранилище бизнес-логики<br><br>

Датабиндинг (или data binding) — это техника, используемая в разработке программного обеспечения, которая позволяет автоматически связывать данные между источниками данных и пользовательским интерфейсом<br><br>

Иммутабельность (или неизменяемость) в программировании обозначает свойство объектов, при котором их состояние не может быть изменено после создания. Это означает, что любые изменения, которые необходимо внести в объект, требуют создания нового объекта на основе существующего, а не модификации самого объекта<br><br>

Resource Sharing (повторное использование ресурсов) — принцип, при котором обновляются только изменённые данные, а старые данные остаются доступными по тем же ссылкам, что и раньше<br><br>
				`
			}
		]
	},
	{
		theme: `ООП (объектно-ориентированное программирование)`,
		cards: [
			{
				subtheme: `1. Термины`,
				content: `
				ООП (объектно-ориентированное программирование) — парадигма, в которой сущности в программе представляются в виде объектов. <br><br>
<ul>
<li>Наследование - создание новых классов на основе существующих.</li>
<li>Инкапсуляция - сокрытие состояния объекта от прямого доступа извне.</li>
<li>Полиморфизм - способность вызывать один и тот же метод для разных объектов, и каждый объект будет реагировать по-разному.</li>

</ul>Объект — экземпляр какого-то класса (некой абстрактной сущности, в которой описано поведение). Объект представляет собой набор свойств (пара «ключ-значение» — пара, состоящая из строки (называемой ключом) и связанного с ней значения (любого типа)) <br><br>
Класс - Это надстройка над объектами. Это форма, или шаблон, по которому создаются объекты. <br><br>
Прототип - это другой объект, используемый в качестве запасного источника свойств. <br><br>
Интерфейс в объектах - это набор правил, которые определяют, как объект должен вести себя. Он описывает, какие методы должны быть реализованы в объекте, но не содержит их конкретной реализации. В ООП, интерфейс обеспечивает структуру и обязательства для классов, которые его реализуют, определяя, как они должны взаимодействовать. Свойства,  являющиеся частью интерфейса, называются общедоступными. Другие, которые не должны быть доступны для внешнего кода, называются закрытыми. Имена закрытых свойств объекта в js принято начинать с символа подчёркивания (теперь можно использовать символ решётки) <br><br>
Множественное наследование - это значит, что класс может наследовать свойства и методы более чем от одного родительского класса <br><br>
Отсутствие множественного наследования - это значит, что класс не может наследовать свойства и методы более чем от одного родительского класса (в таких ЯП как Java, JavaScript)<br><br>

свойства-данные (data properties) - это все свойства (включая методы) в объекте <br><br>
свойства-аксессоры (accessor properties) - это функции, которые используются для присвоения и получения значения, но во внешнем коде они выглядят как обычные свойства объекта.
<ul>
<li>«геттер» (get) – для чтения </li>
<li>«сеттер» (set) – для записи </li>
</ul>

new.target — это специальное метасвойство в JavaScript, которое позволяет определить, был ли вызван текущий конструктор с использованием оператора new. <br><br>

Приватные свойства (#) - доступны только внутри самого класса, где они определены. Они не могут быть вызваны из экземпляров класса или его подклассов. В JavaScript приватные методы обозначаются с помощью символа # <br><br>

Защищенные свойства (_) - предполагают доступ из классов-наследников. Однако в стандартном JavaScript нет встроенной поддержки защищенных методов. Обычно используется соглашение о наименовании, например, префикс _, чтобы обозначить, что метод предназначен для использования только в классе и его подклассах <br><br>
				`
			}
		]
	}
]
export { terms }