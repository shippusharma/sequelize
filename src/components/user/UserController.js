'use strict';
import db from '../../model/index';

export default {
  multipleNewUsers: async (req, res) => {
    const arr = [
      { firstName: 'A', lastName: 'A', description: 'A' },
      { firstName: 'B', lastName: 'B', description: 'B' },
      { firstName: 'C', lastName: 'C', description: 'C' },
    ];
    try {
      const newUser = await db.user.bulkCreate(arr);

      return res.status(200).json({ message: 'Multiple Users Created Successfully...!', payload: newUser });
    } catch (error) {
      return new Error(error.message);
    }
  },

  createNewUser: async (req, res) => {
    const { firstName, lastName, description } = req.body;

    if (!firstName || !lastName) return res.status(400).send('please, give the required Data');
    try {
      const newUser = await db.user.create({ firstName, lastName, description });

      return res.status(200).json({ message: 'User Created Successfully...!', payload: newUser });
    } catch (error) {
      return new Error(error.message);
    }
  },

  getAllUser: async (req, res) => {
    try {
      const users = await db.user.findAll();

      return res.status(200).json({ message: 'users data', payload: users });
    } catch (error) {
      return new Error(error.message);
    }
  },

  getUser: async (req, res) => {
    const { id } = req.params;
    if (!id) return res.status(400).send('Invalid Credential');
    try {
      const getUser = await db.user.findOne({
        where: { id },
      });

      return res.status(200).json({ message: 'get user data', payload: getUser });
    } catch (error) {
      return new Error(error.message);
    }
  },

  updateUser: async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, description } = req.body;

    if (!id) return res.status(400).send('Invalid Credential');
    try {
      const getUser = await db.user.update(
        { firstName, lastName, description },
        {
          where: { id },
        }
      );

      return res.status(200).json({ message: 'get user data', payload: getUser });
    } catch (error) {
      return new Error(error.message);
    }
  },

  deleteUser: async (req, res) => {
    const { id } = req.params;
    if (!id) return res.status(400).send('Invalid Credential');
    try {
      const getUser = await db.user.destroy({
        where: { id },
      });

      return res.status(200).json({ message: 'user deleted..!', payload: getUser });
    } catch (error) {
      return new Error(error.message);
    }
  },
};
