import User from '../../models/user';
import dbConnect from '../../config/dbConnect';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    dbConnect();

    const { name, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: 'Password Does Not Match',
      });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    res.status(201).json({
      success: true,
      message: 'User Registered Successfully',
      data: user,
    });
  }
}
