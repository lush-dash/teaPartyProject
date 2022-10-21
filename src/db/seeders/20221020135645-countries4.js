/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Countries', [
      {
        name: 'Moscow',
        shir: 55.751574,
        dolg: 37.573856,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Minsk',
        shir: 53.9,
        dolg: 27.5667,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Astana',
        shir: 51.1801,
        dolg: 71.446,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Kiev',
        shir: 50.4547,
        dolg: 30.5238,
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
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
