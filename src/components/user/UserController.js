'use strict';
import UserModel from './UserModel';

export default {
  createNewUser: async (req, res) => {
    const { firstName, lastName, description } = req.body;

    if (!firstName || !lastName) return res.status(400).send('please, give the required Data');
    try {
      const newUser = new UserModel.create(firstName, lastName, description);
      const getUser = await newUser.save();

      return res.status(200).json({ message: 'User Created Successfully...!', payload: getUser });
    } catch (error) {
      return new Error(error.message);
    }
  },
};
