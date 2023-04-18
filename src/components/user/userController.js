'use strict';
import { UserModel } from '@/model';

export const greeting = (req, res) => {
  return res.status(200).json({ message: 'Greeting From User!!' });
};

export const multipleNewUsers = async (req, res) => {
  const arr = [
    { firstName: 'A', lastName: 'A', description: 'A' },
    { firstName: 'B', lastName: 'B', description: 'B' },
    { firstName: 'C', lastName: 'C', description: 'C' },
  ];
  try {
    const newUser = await UserModel.bulkCreate(arr);

    return res.status(200).json({ message: 'Multiple Users Created Successfully...!', payload: newUser });
  } catch (error) {
    return new Error(error.message);
  }
};

export const createNewUser = async (req, res) => {
  const { firstName, lastName, description } = req.body;

  if (!firstName || !lastName) return res.status(400).send('please, give the required Data');
  try {
    const newUser = await UserModel.create({ firstName, lastName, description });

    return res.status(200).json({ message: 'User Created Successfully...!', payload: newUser });
  } catch (error) {
    return new Error(error.message);
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await UserModel.findAll();

    return res.status(200).json({ message: 'users data', payload: users });
  } catch (error) {
    return new Error(error.message);
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).send('Invalid Credential');
  try {
    const getUser = await UserModel.findOne({
      where: { id },
    });

    return res.status(200).json({ message: 'get user data', payload: getUser });
  } catch (error) {
    return new Error(error.message);
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, description } = req.body;

  if (!id) return res.status(400).send('Invalid Credential');
  try {
    const getUser = await UserModel.update(
      { firstName, lastName, description },
      {
        where: { id },
      }
    );

    return res.status(200).json({ message: 'get user data', payload: getUser });
  } catch (error) {
    return new Error(error.message);
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).send('Invalid Credential');
  try {
    const getUser = await UserModel.destroy({
      where: { id },
    });

    return res.status(200).json({ message: 'user deleted..!', payload: getUser });
  } catch (error) {
    return new Error(error.message);
  }
};
