const bcrypjs = require('bcryptjs');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'admin',
          email: 'admin@gmail.com',
          password_hash: await bcrypjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],

      {},
    );
  },
};
