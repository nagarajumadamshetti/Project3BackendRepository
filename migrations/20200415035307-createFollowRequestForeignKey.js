'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('FollowRequests', ['userId'], {
      type: 'foreign key',
      name: 'custom_fkey_followRequest',
      references: { //Required field
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      
      Example:
      return queryInterface.dropTable('users');
    */
  }
};
