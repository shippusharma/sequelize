'use strict';
import { DataTypes } from 'sequelize';
import { db } from '../../server';

const UserModel = db.define(
  'user',
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
      default: 'Shippu',
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
      default: 'Sharma',
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      default: 'Hello',
    },
  },
  {
    timestamps: true,
  }
);

export default UserModel;
