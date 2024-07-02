const express = require('express');
const router = express.Router();
const User = require('../models/User');
const handleResponse = (res, data, statusCode = 200) => {
    res.status(statusCode).json(data);
};
const userFields = (req) => ({
  first_name: req.body.first_name,
  last_name: req.body.last_name,
  email: req.body.email,
  avatar: req.body.avatar
});

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    handleResponse(res, users);
  } catch (err) {
    handleResponse(res, {message:err.message}, 500);
  }
});

router.post('/', async (req, res) => {
  const user = new User(userFields(req));
  try {
    const newUser = await user.save();
    handleResponse(res, newUser, 201);
  } catch (err) {
    handleResponse(res, {message:err.message}, 400);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { first_name, last_name, email, avatar } = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, userFields(req), {new: true});
    if (!user) {
      return handleResponse(res, { message: 'User not found'}, 404);
    }
    handleResponse(res, user);
  } catch (err) {
    handleResponse(res, {message:err.message}, 400);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return handleResponse(res, {message: 'User not found'}, 404);
    }
    handleResponse(res, {message: 'User deleted'});
  } catch (err) {
    handleResponse(res, {message:err.message}, 500);
  }
});

module.exports = router;

