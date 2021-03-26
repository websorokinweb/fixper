'use strict';

$(function () {

    // var scrolling = false;
    // $(window).on('scroll', function(){
    //    if( !scrolling ) {
    //       scrolling = true;
    //       (!window.requestAnimationFrame)
    //          ? setTimeout(autoHideHeader, 250)
    //          : requestAnimationFrame(autoHideHeader);
    //    }
    // });

    $('.header__info-crossbtn').on('click', function () {
        $('.header__info').addClass('header__info--hidden');
        if ($(window).width() < '1170') {
            $('.header').addClass('header--hidden-info');
        };
    });


    // Диаграммы

    // Инициализируем диаграммы и задаем общие параметры

    let circleGlobalOptions = {
        startAngle: 1.55,
        size: 100,
    };

    $('.diagram__bar').circleProgress(circleGlobalOptions).on('circle-animation-progress',
        function (event, progress, stepValue) {
    });

    // Инициализируем диаграммы и задаем общие параметры


    // Обработка значений и цветов

    let circleOptions = {};
    function getValue(id) {
        let circleId = id;
        let circleValue = $(`${circleId} .diagram__percent`).text();
        circleOptions = { value: circleValue.replace('%', '') / 100 };
        return circleOptions;
    };

    function setColor() {
        let circleColor = "#1A8220"
        let circleValue = circleOptions.value;
        if (circleValue <= 1 && circleValue > .60) {
            circleColor = "#A62420";
        } else if (circleValue <= .60 && circleValue >= .31) {
            circleColor = "#FFC464";
        };
        return circleOptions.color = circleColor;
    };

    function prepareCircle(id) {
        getValue(id);
        setColor();
        return circleOptions;
    };

    // Обработка значений и цветов


    // Открытие ответа

    $('.questions__list-btn').on('click', function () {
        $('.questions__wrapper').addClass('questions__wrapper--answer');
        $($(this).attr('href')).addClass('questions__answer--active');
        $('.questions__inner-graphic').removeClass('questions__inner-graphic--hidden');
    });

    // Мобильная версия

    $(".select__select").on('change', function(){
        // $('.questions__wrapper').addClass('questions__wrapper--answer');
        
    })

    // Мобильная версия

    // Открытие ответа


    // Инициализация диаграмм 

    $('#question-1, #question-mobile-1').on('click', function () {
        prepareCircle('#diagram-1');
        $(`#diagram-1 .diagram__bar`).circleProgress({
            value: circleOptions.value,
            fill: { color: circleOptions.color },
        });
        prepareCircle('#diagram-2');
        $(`#diagram-2 .diagram__bar`).circleProgress({
            value: circleOptions.value,
            fill: { color: circleOptions.color },
        });
        prepareCircle('#diagram-3');
        $(`#diagram-3 .diagram__bar`).circleProgress({
            value: circleOptions.value,
            fill: { color: circleOptions.color },
        });
    });

    $('#question-2').on('click', function () {
        prepareCircle('#diagram-4');
        $(`#diagram-4 .diagram__bar`).circleProgress({
            value: circleOptions.value,
            fill: { color: circleOptions.color },
        });
        prepareCircle('#diagram-5');
        $(`#diagram-5 .diagram__bar`).circleProgress({
            value: circleOptions.value,
            fill: { color: circleOptions.color },
        });
        prepareCircle('#diagram-6');
        $(`#diagram-6 .diagram__bar`).circleProgress({
            value: circleOptions.value,
            fill: { color: circleOptions.color },
        });
    });

    $('#question-3').on('click', function () {
        prepareCircle('#diagram-7');
        $(`#diagram-7 .diagram__bar`).circleProgress({
            value: circleOptions.value,
            fill: { color: circleOptions.color },
        });
        prepareCircle('#diagram-8');
        $(`#diagram-8 .diagram__bar`).circleProgress({
            value: circleOptions.value,
            fill: { color: circleOptions.color },
        });
        prepareCircle('#diagram-9');
        $(`#diagram-9 .diagram__bar`).circleProgress({
            value: circleOptions.value,
            fill: { color: circleOptions.color },
        });
    });

    $('#question-4').on('click', function () {
        prepareCircle('#diagram-10');
        $(`#diagram-10 .diagram__bar`).circleProgress({
            value: circleOptions.value,
            fill: { color: circleOptions.color },
        });
        prepareCircle('#diagram-11');
        $(`#diagram-11 .diagram__bar`).circleProgress({
            value: circleOptions.value,
            fill: { color: circleOptions.color },
        });
        prepareCircle('#diagram-12');
        $(`#diagram-12 .diagram__bar`).circleProgress({
            value: circleOptions.value,
            fill: { color: circleOptions.color },
        });
    });

    $('#question-5').on('click', function () {
        prepareCircle('#diagram-13');
        $(`#diagram-13 .diagram__bar`).circleProgress({
            value: circleOptions.value,
            fill: { color: circleOptions.color },
        });
        prepareCircle('#diagram-14');
        $(`#diagram-14 .diagram__bar`).circleProgress({
            value: circleOptions.value,
            fill: { color: circleOptions.color },
        });
        prepareCircle('#diagram-15');
        $(`#diagram-15 .diagram__bar`).circleProgress({
            value: circleOptions.value,
            fill: { color: circleOptions.color },
        });
    });

    $('#question-6').on('click', function () {
        prepareCircle('#diagram-16');
        $(`#diagram-16 .diagram__bar`).circleProgress({
            value: circleOptions.value,
            fill: { color: circleOptions.color },
        });
        prepareCircle('#diagram-17');
        $(`#diagram-17 .diagram__bar`).circleProgress({
            value: circleOptions.value,
            fill: { color: circleOptions.color },
        });
        prepareCircle('#diagram-18');
        $(`#diagram-18 .diagram__bar`).circleProgress({
            value: circleOptions.value,
            fill: { color: circleOptions.color },
        });
    });

    $('#question-7').on('click', function () {
        prepareCircle('#diagram-19');
        $(`#diagram-19 .diagram__bar`).circleProgress({
            value: circleOptions.value,
            fill: { color: circleOptions.color },
        });
        prepareCircle('#diagram-20');
        $(`#diagram-20 .diagram__bar`).circleProgress({
            value: circleOptions.value,
            fill: { color: circleOptions.color },
        });
        prepareCircle('#diagram-21');
        $(`#diagram-21 .diagram__bar`).circleProgress({
            value: circleOptions.value,
            fill: { color: circleOptions.color },
        });
    });

    $('#question-8').on('click', function () {
        prepareCircle('#diagram-22');
        $(`#diagram-22 .diagram__bar`).circleProgress({
            value: circleOptions.value,
            fill: { color: circleOptions.color },
        });
        prepareCircle('#diagram-23');
        $(`#diagram-23 .diagram__bar`).circleProgress({
            value: circleOptions.value,
            fill: { color: circleOptions.color },
        });
        prepareCircle('#diagram-24');
        $(`#diagram-24 .diagram__bar`).circleProgress({
            value: circleOptions.value,
            fill: { color: circleOptions.color },
        });
    });

    $('#question-9').on('click', function () {
        prepareCircle('#diagram-25');
        $(`#diagram-25 .diagram__bar`).circleProgress({
            value: circleOptions.value,
            fill: { color: circleOptions.color },
        });
        prepareCircle('#diagram-26');
        $(`#diagram-26 .diagram__bar`).circleProgress({
            value: circleOptions.value,
            fill: { color: circleOptions.color },
        });
        prepareCircle('#diagram-27');
        $(`#diagram-27 .diagram__bar`).circleProgress({
            value: circleOptions.value,
            fill: { color: circleOptions.color },
        });
    });

    $('#question-10').on('click', function () {
        prepareCircle('#diagram-28');
        $(`#diagram-28 .diagram__bar`).circleProgress({
            value: circleOptions.value,
            fill: { color: circleOptions.color },
        });
        prepareCircle('#diagram-29');
        $(`#diagram-29 .diagram__bar`).circleProgress({
            value: circleOptions.value,
            fill: { color: circleOptions.color },
        });
        prepareCircle('#diagram-30');
        $(`#diagram-30 .diagram__bar`).circleProgress({
            value: circleOptions.value,
            fill: { color: circleOptions.color },
        });
    });

    $('#question-11').on('click', function () {
        prepareCircle('#diagram-31');
        $(`#diagram-31 .diagram__bar`).circleProgress({
            value: circleOptions.value,
            fill: { color: circleOptions.color },
        });
        prepareCircle('#diagram-32');
        $(`#diagram-32 .diagram__bar`).circleProgress({
            value: circleOptions.value,
            fill: { color: circleOptions.color },
        });
        prepareCircle('#diagram-33');
        $(`#diagram-33 .diagram__bar`).circleProgress({
            value: circleOptions.value,
            fill: { color: circleOptions.color },
        });
    });

    // Инициализация диаграмм 


    // Закрытие ответа

    $('.questions__answer-btn').on('click', function () {
        $('.questions__wrapper').removeClass('questions__wrapper--answer');
        $(this).parent().removeClass('questions__answer--active');
    });

    // Закрытие ответа

    // Диаграммы

    $('.price__show').on('click', function () {
        $(this).addClass('price__show--hidden');
        $('.price__hide').addClass('price__hide--active');
        $('.price__list-another').addClass('price__list-another--active');
    });

    $('.price__hide').on('click', function () {
        $(this).removeClass('price__hide--active');
        $('.price__show').removeClass('price__show--hidden');
        $('.price__list-another').removeClass('price__list-another--active');
    });

    $('.team__items').slick({
        dots: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button class="slick-arrow slick-prev"><span>Назад</span></button>',
        nextArrow: '<button class="slick-arrow slick-next"><span>Далее</span><svg width="36" height="8" viewBox="0 0 36 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.3536 4.35355C35.5488 4.15829 35.5488 3.84171 35.3536 3.64645L32.1716 0.464466C31.9763 0.269204 31.6597 0.269204 31.4645 0.464466C31.2692 0.659728 31.2692 0.976311 31.4645 1.17157L34.2929 4L31.4645 6.82843C31.2692 7.02369 31.2692 7.34027 31.4645 7.53553C31.6597 7.7308 31.9763 7.7308 32.1716 7.53553L35.3536 4.35355ZM0 4.5L35 4.5V3.5L0 3.5L0 4.5Z" fill="black"/></svg></button>',
    });

    function findItems() {
        $('.team .slick-active').eq(2).addClass('team__item--last');
    };

    findItems();

    $('.team .slick-next').on('click', function () {
        findItems();
    });

    $('.reviews__items').slick({
        dots: true,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '<button class="slick-arrow slick-prev"><span>Назад</span></button>',
        nextArrow: '<button class="slick-arrow slick-next"><span>Далее</span><svg width="36" height="8" viewBox="0 0 36 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.3536 4.35355C35.5488 4.15829 35.5488 3.84171 35.3536 3.64645L32.1716 0.464466C31.9763 0.269204 31.6597 0.269204 31.4645 0.464466C31.2692 0.659728 31.2692 0.976311 31.4645 1.17157L34.2929 4L31.4645 6.82843C31.2692 7.02369 31.2692 7.34027 31.4645 7.53553C31.6597 7.7308 31.9763 7.7308 32.1716 7.53553L35.3536 4.35355ZM0 4.5L35 4.5V3.5L0 3.5L0 4.5Z" fill="black"/></svg></button>',
    });

    $('.answers__item-btn').on('click', function () {
        $(this).next().toggleClass('answers__item-content--active');
    });

    $('.select__select').selectric({
        disableOnMobile: false,
        nativeOnMobile: false,
        maxHeight: 305,
        onOpen: function() {
            $('.select__select-item--placeholder').hide()
        },
        onChange: function(){
            let selectedItem = $('.select__select-item.selected'),
                selectedItemIndex = 'answer-' + selectedItem.data('index');
            $('.questions__wrapper').addClass('questions__wrapper--answer');
            $('#' + selectedItemIndex).addClass('questions__answer--active');
            $('.questions__inner-graphic').removeClass('questions__inner-graphic--hidden');
        },
    });

    let mobileAnswersList = $('.selectric-scroll ul')
    // console.log(mobileAnswersList)

    for (var i = 0, len = mobileAnswersList.length; i < len; i++ ){
        // mobileAnswersList[i].attr('id', 'answer-' + i);
        console.log(mobileAnswersList[i]);
    }
    
});