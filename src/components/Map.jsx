import React, { useEffect, useState } from 'react';
// import init from '../../public/mymap';
// const { init } = require('../../public/mymap');

export default function Map() {
  const [country, setCountry] = useState({ shir: 55.751574, dolg: 37.573856 });
  const [myMap, setMyMap] = useState(null);
  useEffect(() => {
    fetch('/api/')
      .then((res) => res.json())
      .then((data) => {
        setCountry(data);
      });
    ymaps.ready(() => {
      const map = new ymaps.Map('map', {
        center: [country.shir, country.dolg],
        zoom: 4,
      }, {
        searchControlProvider: 'yandex#search',
      });
      setMyMap(map);
    });
  }, []);
  useEffect(() => {
    ymaps.ready(() => {
      // Создаём макет содержимого.
      const MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>',
      );

      const myPlacemarkWithContent = new ymaps.Placemark([country?.shir, country?.dolg], {
        hintContent: 'Собственный значок метки с контентом',
        balloonContent: 'А эта — новогодняя',
        iconContent: '12',
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'https://cdn-icons-png.flaticon.com/512/5826/5826992.png',
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
      myMap?.geoObjects
        .add(myPlacemarkWithContent);
    });
  }, [country, myMap]);
  return (
    <div
      className="container"
      style={{
        borderRadius: '30px', padding: '2%', backgroundColor: '#cbdfbd',
      }}
    >
      {country?.shir && (
      <div
        id="map"
        style={{
          minWidth: '100%', minHeight: '100%', width: 'auto', height: 'auto', display: 'block', position: 'relative',
        }}
      />
      )}
    </div>

  );
}
