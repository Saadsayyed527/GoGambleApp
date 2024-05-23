const User = require('../models/User');

// Register a new user
const registerUser = async (req, res) => {
  const { email } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ email });
      await user.save();
    }
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Play the jackpot game
const playGame = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const win = Math.random() < 0.5; // 50% chance to win
    if (win) {
      user.balance = user.balance * 1.2; // Win: increase balance by 20%
    } else {
      user.balance = user.balance * 0.75; // Lose: decrease balance by 25%
    }
    await user.save();
    res.status(200).json({ balance: user.balance, win });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { registerUser, playGame };
