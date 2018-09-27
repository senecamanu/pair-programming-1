'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('NoteUsers', [
      {
        UserId: 2,
        NoteId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 1,
        NoteId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 3,
        NoteId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
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
    return queryInterface.bulkDelete('NoteUsers', [], {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
