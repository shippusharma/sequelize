'use strict';

export const adminModel = (sequelize, Sequelize) => {
  return sequelize.define(
    'admin',
    {
      firstName: {
        type: Sequelize.STRING,
        allowNull: true,
        default: 'Shippu',
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: true,
        default: 'Sharma',
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
        default: 'Hello from Admin',
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
    }
  );
};
