module.exports = mongoose => {
    const schema = mongoose.Schema(
      {
        judul_design: String,
        thumbnail_design: String,
        deskripsi_design: String,
        link_design: String,
      },
      {
        timestamps: true,
      }
    );
  
    const Design = mongoose.model('Design', schema);
    return Design;
  };