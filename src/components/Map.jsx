import React, { useEffect, useState } from 'react';

export default function Map({}) {
  const [allCountries, setAllCountry] = useState([]);
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
    fetch('/api/allCountry')
      .then((res) => res.json())
      .then((data) => {
        setAllCountry(data);
      });
    ymaps.ready(() => {
      const MyIconContentLayout = ymaps.templateLayoutFactory.createClass( // Создаём макет содержимого.
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>',
      );

      allCountries.forEach((el) => {
        const myPlacemarkWithContent = new ymaps.Placemark([el?.shir, el?.dolg], {
          hintContent: 'Собственный значок метки с контентом',
          balloonContent: 'А эта — новогодняя',
          iconContent: '12',
        }, {
          iconLayout: 'default#imageWithContent', // Необходимо указать данный тип макета.
          iconImageHref: 'https://cdn-icons-png.flaticon.com/512/5826/5826992.png', // Своё изображение иконки метки.
          iconImageSize: [48, 48], // Размеры метки.
          iconImageOffset: [-24, -24], // Смещение левого верхнего угла иконки относительно, её "ножки" (точки привязки).
          iconContentOffset: [15, 15], // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentLayout: MyIconContentLayout, // Макет содержимого.
        });
        myMap?.geoObjects
          .add(myPlacemarkWithContent);
      });
    });
  }, [country, myMap]);
  return (
    <>
      {country?.shir && <div id="map" style={{ width: 1150, height: 500 }} />}
    </>
  );
}
