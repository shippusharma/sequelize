'use strict';
import { BookModel } from '@/model';

export const createNewBook = async (req, res) => {
  const { bookName, title, userId } = req.body;
  try {
    const newBook = await BookModel.create({ bookName, title, userId });
    return res.status(200).json({ message: 'Book Created Successfully...!', payload: newBook });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAllBooks = async (req, res) => {
  try {
    const books = await BookModel.findAll();
    return res.status(200).json({ message: 'Books Data', payload: books });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
