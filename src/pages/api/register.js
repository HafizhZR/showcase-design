import User from '../../../models/user';
import dbConnect from '../../../config/dbConnect';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    dbConnect();

    const { name, email, password, confirmPassword } = req.body;

    const user = await User.create({
      name,
      email,
      password,
      confirmPassword,
    });

    res.status(201).json({
      success: true,
      message: 'User Registered Successfully',
      data: user,
    });
  }
}
