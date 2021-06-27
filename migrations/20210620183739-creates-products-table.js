module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('products', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
        },
        branch_id: {
          allowNull: false,
          type: Sequelize.UUID,
          references: {
            model: 'branches',
            key: 'id',
          },
        },
        category_id: {
          allowNull: false,
          type: Sequelize.UUID,
          references: {
            model: 'categories',
            key: 'id',
          },
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        // attributeTypeId: {
        //   allowNull: true,
        //   type: Sequelize.INTEGER,
        //   references: {
        //     model: 'AttributeTypes',
        //     key: 'id'
        //   }
        // },
        attributes: {
          allowNull: true,
          type: Sequelize.JSONB,
          // [
          //   {
          //     type: size,
          //     attributes: [p, m, g]
          //   },
          //   {
          //     type: additional,
          //     attributes: [
          //       {}
          //     ]
          //   }
          // ]
        },
        base_price: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        description: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        ingredients: {
          allowNull: true,
          type: Sequelize.TEXT,
        },
        avaiability: {
          allowNull: true,
          type: Sequelize.STRING,
          // ('monday',
          // 'tuesday',
          // 'wednesday',
          // 'thursday',
          // 'friday',
          // 'saturday',
          // 'sunday')
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
    await queryInterface.dropTable('products');
  },
};
