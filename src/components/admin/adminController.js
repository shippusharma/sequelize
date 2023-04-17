'use strict';
import { adminModel } from './adminModel';

export const createNewAdmin = async (req, res) => {
  const { firstName, lastName, description } = req.body;

  if (!firstName || !lastName) return res.status(400).send('please, give the required Data');
  try {
    const newUser = await adminModel.create({ firstName, lastName, description });

    return res.status(200).json({ message: 'Admin Registered', payload: newUser });
  } catch (error) {
    return new Error(error.message);
  }
};

export const getAllAdmin = async (req, res) => {
  try {
    const users = await adminModel.findAll();

    return res.status(200).json({ message: 'Admina Data', payload: users });
  } catch (error) {
    return new Error(error.message);
  }
};

export const getAdmin = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).send('Invalid Credential');
  try {
    const getUser = await adminModel.findOne({
      where: { id },
    });

    return res.status(200).json({ message: 'Admin Data', payload: getUser });
  } catch (error) {
    return new Error(error.message);
  }
};

export const updateAdmin = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, description } = req.body;

  if (!id) return res.status(400).send('Invalid Credential');
  try {
    const getUser = await adminModel.update(
      { firstName, lastName, description },
      {
        where: { id },
      }
    );

    return res.status(200).json({ message: 'Admin Updated', payload: getUser });
  } catch (error) {
    return new Error(error.message);
  }
};

export const deleteAdmin = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).send('Invalid Credential');
  try {
    const getUser = await adminModel.destroy({
      where: { id },
    });

    return res.status(200).json({ message: 'Admin Deleted', payload: getUser });
  } catch (error) {
    return new Error(error.message);
  }
};
