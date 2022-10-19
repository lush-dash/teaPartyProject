ymaps.ready(() => {
  const myMap = new ymaps.Map('map', {
    center: [55.751574, 37.573856],
    zoom: 4,
  }, {
    searchControlProvider: 'yandex#search',
  });

  // Создаём макет содержимого.
  const MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>',
  );

  const myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: 'Собственный значок метки',
    balloonContent: 'Это красивая метка',
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: 'https://cdn-icons-png.flaticon.com/512/7782/7782342.png',
    // Размеры метки.
    iconImageSize: [30, 42],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-5, -38],
  });

  const myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
    hintContent: '<Название чая>'
    balloonContent: '<Место для карточки>',
    iconContent: '12',
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#imageWithContent',
    // Своё изображение иконки метки.
    iconImageHref: 'https://cdn-icons-png.flaticon.com/512/7782/7782342.png',
    // Размеры метки.
    iconImageSize: [48, 48],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-24, -24],
    // Смещение слоя с содержимым относительно слоя с картинкой.
    iconContentOffset: [15, 15],
    // Макет содержимого.
    iconContentLayout: MyIconContentLayout,
  });

  myMap.geoObjects
    // .add(myPlacemark)
    .add(myPlacemarkWithContent);
});
