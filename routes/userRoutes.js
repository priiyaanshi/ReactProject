const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    avatar: req.body.avatar || 'https://example.com/default_avatar.jpg'
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  
  try {
    const { first_name, last_name, email, avatar } = req.body;

    const user = await User.findByIdAndUpdate(req.params.id, {
      first_name,
      last_name,
      email,
      avatar
    }, { new: true});
    

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  console.log(`Deleting user with ID: ${req.params.id}`);
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      console.log(`User with ID: ${req.params.id} not found`);
      return res.status(404).json({ message: 'User not found' });
    }

    await User.deleteOne({ _id: req.params.id });
    console.log(`User with ID: ${req.params.id} deleted successfully`);
    res.json({ message: 'User deleted' });
  } catch (err) {
    console.error(`Error deleting user with ID: ${req.params.id}`, err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;




// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');

// router.get('/', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// router.post('/', async (req, res) => {
//   const user = new User({
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//     email: req.body.email,
//     avatar: req.body.avatar,
//   });
//   try {
//     const newUser = await user.save();
//     res.status(201).json(newUser);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// module.exports = router;

