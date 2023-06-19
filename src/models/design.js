import mongoose from 'mongoose';

const designSchema = new mongoose.Schema({
  judul_design: String,
  thumbnail_design: String,
  deskripsi_design: String,
  link_design: String,
});

export default mongoose.models.Design || mongoose.model('Design', designSchema);
