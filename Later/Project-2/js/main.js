$(function () {
    $(".menu a").on("click", function (a) {
        //отменяем стандартную обработку нажатия по ссылке
        a.preventDefault();
        //забираем идентификатор блока с атрибута href
        var id = $(this).attr("href"),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $("body,html").animate({ scrollTop: top }, 1500);
    });

    $(".menu__btn, .menu a").on("click", function () {
        $(".header__top-inner").toggleClass("header__top-inner--active");
    });

    var mixer = mixitup(".gallery__content");

    $(".slider-blog__inner").slick({
        arrows: false,
        dots: true,
    });
});

// Получаем элемент header
var header = document.getElementById("header__top");
// Добавляем обработчик события прокрутки окна
window.addEventListener("scroll", function () {
    // Проверяем, насколько прокручена страница
    if (window.scrollY > 320) {
        // Если страница прокручена, меняем цвет header
        header__top.style.background = "rgba(128, 128, 128, 0.5)";
    } else {
        // Если страница не прокручена, возвращаем исходный цвет header
        header__top.style.background = "transparent";
    }
});

var showMoreButton = document.getElementById("gallery__add");
var contentContainer = document.getElementById("gallery__content");
var visibleElements = 6; // Начальное количество видимых элементов
var totalElements = contentContainer.children.length; // Общее количество элементов

// Скрываем все элементы, кроме первых видимых
for (var i = visibleElements; i < totalElements; i++) {
    contentContainer.children[i].style.display = "none";
}

showMoreButton.addEventListener("click", function () {
    // При клике на кнопку, показываем следующие элементы
    for (var i = visibleElements; i < visibleElements + 3; i++) {
        if (contentContainer.children[i]) {
            contentContainer.children[i].style.display = "flex";
        }
    }
    visibleElements += 3; // Увеличиваем количество видимых элементов

    // Если все элементы уже отображены, скрываем кнопку "Показать еще"
    if (visibleElements >= totalElements) {
        showMoreButton.style.display = "none";
    }
});
