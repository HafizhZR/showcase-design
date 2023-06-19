import Design from '../../models/design';
import dbConnect from '../../config/dbConnect';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    dbConnect();

    const design = await Design.find();

    res.status(200).json({
      success: true,
      message: 'Design Fetched Successfully',
      data: design,
    });
  }
}
