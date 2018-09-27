'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Yaya',
        lastName: 'Hidayatullah',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Muhammad',
        lastName: 'Mifzan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Seneca',
        lastName: 'Manu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Haji',
        lastName: 'Ayam Goreng',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Elom',
        lastName: 'Nusk',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', [
      {
        firstName: 'Yaya',
        lastName: 'Hidayatullah',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Muhammad',
        lastName: 'Mifzan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Seneca',
        lastName: 'Manu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Haji',
        lastName: 'Ayam Goreng',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Elom',
        lastName: 'Nusk',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
