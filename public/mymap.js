// const tea = require('../src/db/models');

// export default function init() {
//   const myMap = new ymaps.Map('map', {
//     center: [55.751574, 37.573856],
//     zoom: 4,
//   }, {
//     searchControlProvider: 'yandex#search',
//   });

//   // Создаём макет содержимого.
//   const MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
//     '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>',
//   );

//   const myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
//     hintContent: tea,
//     balloonContent: 'А эта — новогодняя',
//     iconContent: '12',
//   }, {
//     // Опции.
//     // Необходимо указать данный тип макета.
//     iconLayout: 'default#imageWithContent',
//     // Своё изображение иконки метки.
//     iconImageHref: 'https://cdn-icons-png.flaticon.com/512/5826/5826992.png',
//     // Размеры метки.
//     iconImageSize: [48, 48],
//     // Смещение левого верхнего угла иконки относительно
//     // её "ножки" (точки привязки).
//     iconImageOffset: [-24, -24],
//     // Смещение слоя с содержимым относительно слоя с картинкой.
//     iconContentOffset: [15, 15],
//     // Макет содержимого.
//     iconContentLayout: MyIconContentLayout,
//   });

//   myMap.geoObjects
//     .add(myPlacemarkWithContent);
// }

// module.exports = { init };

// // Создаём макет содержимого.
// const MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
//   '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>',
// );

// const myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
//   hintContent: 'ddd',
//   balloonContent: '<Место для карточки>',
//   iconContent: '12',
// }, {
//   // Опции.
//   // Необходимо указать данный тип макета.
//   iconLayout: 'default#imageWithContent',
//   // Своё изображение иконки метки.
//   iconImageHref: 'https://cdn-icons-png.flaticon.com/512/7782/7782342.png',
//   // Размеры метки.
//   iconImageSize: [48, 48],
//   // Смещение левого верхнего угла иконки относительно
//   // её "ножки" (точки привязки).
//   iconImageOffset: [-24, -24],
//   // Смещение слоя с содержимым относительно слоя с картинкой.
//   iconContentOffset: [15, 15],
//   // Макет содержимого.
//   iconContentLayout: MyIconContentLayout,
//   myMap.geoObjects
//     .add(myPlacemarkWithContent);
// });
