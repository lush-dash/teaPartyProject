/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Teas', [
      {
        title: 'Молочный Улун',
        place: 'Индия',
        img: 'https://miychay.com/upload/iblock/7c6/7c664063ba5e6215cb3567de3330c187.jpg',
        description: 'Четкий чай',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Белый Трюфель',
        place: 'Китай',
        img: 'https://shop.evalar.ru/upload/iblock/236/236034ee8fcfaa011de7ffc6f39ae967.jpg',
        description: 'Дорогой чай',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Эрл Грей',
        place: 'Шри-Ланка',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR31knP-xlrgoIUDlUXraDeQHon658RD8a7LQ&usqp=CAU',
        description: 'обычный чай',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Больная Печень',
        place: 'Кения',
        img: 'https://img.vkusvill.ru/pim/images/site_LargeWebP/b98f8e8f-0a10-4f54-b520-00868c4747ac.webp?1656418347.7419',
        description: 'Нечеткий чай',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Лисма',
        place: 'Индонезия',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9F_Vy7sYmDpt6iUvkb_Dwkwi681XKLi73dd2VtAxuWIyoRcnbP16gxv1RgqW3lw5-Ums&usqp=CAU',
        description: 'недорогой чай',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Teas', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
