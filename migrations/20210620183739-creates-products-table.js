'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('Products', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        branchId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'Branches',
            key: 'id'
          }
        },
        categoryId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'Categories',
            key: 'id'
          }
        },
        attributeTypeId: {
          allowNull: true,
          type: Sequelize.INTEGER,
          references: {
            model: 'AttributeTypes',
            key: 'id'
          }
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        attributes: {
          allowNull: true,
          type: Sequelize.JSONB,
        },
        basePrice: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        description: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        ingredients: {
          allowNull: true,
          type: Sequelize.ARRAY(Sequelize.STRING),
        },
        avaiability: {
          allowNull: true,
          type: Sequelize.ARRAY(Sequelize.ENUM(
            'monday',
            'tuesday',
            'wednesday',
            'thursday',
            'friday',
            'saturday',
            'sunday'
            )
          )
        },
        isActive: {
          allowNull: false,
          type: Sequelize.BOOLEAN,
          defaultValue: true,
        },
        updatedAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('now'),
        },
        createdAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('now'),
        },
      }, { transaction });


      await transaction.commit();

    } catch(error) {
      await transaction.rollback();
      throw error
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};
