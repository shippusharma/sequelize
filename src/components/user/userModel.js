'use strict';

export const userModel = (sequelize, Sequelize) => {
  return sequelize.define(
    'user',
    {
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        default: 'Shippu',
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        default: 'Sharma',
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
        default: 'Hello',
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
    }
  );
};
