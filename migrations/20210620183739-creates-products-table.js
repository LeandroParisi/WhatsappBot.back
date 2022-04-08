module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('Products', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
        },
        category_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'categories',
            key: 'id',
          },
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        image: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        attributes: {
          allowNull: false,
          type: Sequelize.JSONB,
          defaultValue: '[]',
        },
        base_price: {
          allowNull: true,
          type: Sequelize.DECIMAL(10, 2),
        },
        description: {
          allowNull: true,
          type: Sequelize.TEXT,
        },
        ingredients: {
          allowNull: false,
          type: Sequelize.ARRAY(Sequelize.STRING),
          defaultValue: [],
        },
        avaiability: {
          allowNull: false,
          type: Sequelize.ARRAY(Sequelize.INTEGER),
          defaultValue: [],
        },
        is_active: {
          allowNull: false,
          type: Sequelize.BOOLEAN,
          defaultValue: true,
        },
        updated_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('now'),
        },
        created_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('now'),
        },
      }, { transaction });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  },
};
