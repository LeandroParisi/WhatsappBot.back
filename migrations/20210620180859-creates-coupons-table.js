module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction()

    try {
      await queryInterface.createTable('coupons', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.INTEGER,
          autoIncrement: true,
        },
        coupom_code: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        discount_type: {
          allowNull: false,
          type: Sequelize.ENUM('percentage', 'absolute_value'),
        },
        discount: {
          allowNull: false,
          type: Sequelize.DECIMAL(10, 2),
        },
        used: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
        price_limit: {
          type: Sequelize.DECIMAL(10, 2),
          allowNull: true,
        },
        date_limit: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        distance_limit_in_km: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        uses_limit: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        free_delivery: {
          allowNull: false,
          type: Sequelize.BOOLEAN,
          defaultValue: true,
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
      }, { transaction })

      await queryInterface.addIndex('coupons', ['coupom_code'], { transaction })

      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('coupons')
  },
}
