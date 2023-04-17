'use strict';

export const userModel = (sequelize, Sequelize) => {
  return sequelize.define(
    'user',
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
        default: 'Hello',
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
    }
  );
};
