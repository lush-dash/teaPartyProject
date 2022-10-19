/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comms', [
      {
        user_id: 2,
        tea_id: 1,
        text: 'Действительно четкий чай',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        tea_id: 1,
        text: 'Не такой уж этот чай и четкий, если честно',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        tea_id: 1,
        text: 'Уроки сделали?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 5,
        tea_id: 1,
        text: 'Продам гараж',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        tea_id: 2,
        text: 'А я томат',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        tea_id: 3,
        text: 'f',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        tea_id: 4,
        text: 'Воистину нечеткий чай',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        tea_id: 5,
        text: 'Лучший',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        tea_id: 5,
        text: 'Пью сам и детям своим наливаю',
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
    await queryInterface.bulkDelete('Comms', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
