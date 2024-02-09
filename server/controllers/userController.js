import User from '../models/userModel.js';
import asyncHandler from '../middlewares/asyncHandler.js';

const createUser = asyncHandler(async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
});

export { createUser };
