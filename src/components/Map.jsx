import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Map() {
  const [allCountries, setAllCountry] = useState([]);
  const [country, setCountry] = useState({ shir: 55.751574, dolg: 37.573856 });
  const [myMap, setMyMap] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/')
      .then((res) => res.json())
      .then((data) => {
        setCountry(data);
      });
    // console.log('useEffect 1');
    ymaps.ready(() => {
      const map = new ymaps.Map('map', {
        center: [country.shir, country.dolg],
        zoom: 2,
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
    // console.log('useEffect 2');
    ymaps.ready(() => {
      const MyIconContentLayout = ymaps.templateLayoutFactory.createClass( // Создаём макет содержимого.
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>',
      );

      allCountries.forEach((el) => {
        const myGeocoder = ymaps.geocode(el.place);
        myGeocoder.then(
          (res) => {
            const coordinates = res.geoObjects.get(0).geometry.getCoordinates();
            const myPlacemarkWithContent = new ymaps.Placemark(coordinates, {
              hintContent: el.title,
              balloonContent: el.title,
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

            myPlacemarkWithContent.events.add(['click'], () => {
              navigate(`/tea/${el.id}`);
            });
          },
        );
      });
    });
  }, [myMap, country]);

  return (
    <div
      className="img-fluid"
      id="map"
      style={{
        width: 1200, height: 500, padding: '3%', backgroundColor: '#cbdfbd', borderRadius: '30px',
      }}
    />
  );
}
