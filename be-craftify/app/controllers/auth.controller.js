const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models');
const User = db.user;

function generateToken(user) {
    const expiresIn = '1h'; 
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn });
    return token;
  }

exports.register = async (req, res) => {
    const { fullName, email, password, confirmPassword } = req.body;
  
    try {
      if (!fullName || !email || !password) {
        return res.status(400).send({ message: 'Harap lengkapi semua data' });
      }
  
      if (password !== confirmPassword) {
        return res.status(400).send({ message: 'Konfirmasi password tidak sesuai' });
      }
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).send({ message: 'Email sudah terdaftar' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = new User({
        fullName,
        email,
        password: hashedPassword,
      });
  
      await newUser.save();
  
      const token = generateToken(newUser);
  
      res.send({ message: 'Registrasi berhasil', token });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };
  

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: 'Email tidak terdaftar' });
    }

    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
      return res.status(401).send({ message: 'Password salah' });
    }

    const token = generateToken(user);

    res.send({ message: 'Login berhasil', token });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
