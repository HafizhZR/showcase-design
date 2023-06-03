const db = require("../models");
const Design = db.design;

exports.create = (req, res) => {
    const { judul_design, deskripsi_design, link_design } = req.body;
    const thumbnail_design = req.file.buffer;
    const thumbnailBase64 = thumbnail_design.toString('base64');
  
    Design.create({ judul_design, thumbnail_design: thumbnailBase64 , deskripsi_design, link_design })
      .then(() => res.send({ message: "Design berhasil disimpan" }))
      .catch(err => res.status(500).send({ message: err.message }));
  };

exports.findAll = (req, res) => {
  Design.find()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.show = (req, res) => {
  const id = req.params.id;

  Design.findById(id)
    .then(data => {
      if (!data) {
        res.status(404).send({ message: `Design dengan ID ${id} tidak ditemukan` });
      } else {
        res.send(data);
      }
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.update = (req, res) => {
    const id = req.params.id;
    const { judul_design, deskripsi_design, link_design } = req.body;
    const thumbnail_design = req.file ? req.file.buffer : null;
  
    const updatedData = {
      judul_design,
      deskripsi_design,
      link_design
    };
  
    if (thumbnail_design) {
      const thumbnailBase64 = thumbnail_design.toString('base64'); // Mengubah buffer menjadi base64
      updatedData.thumbnail_design = thumbnailBase64;
    }
  
    Design.findByIdAndUpdate(
      id,
      updatedData,
      { new: true }
    )
      .then(updatedDesign => {
        if (!updatedDesign) {
          return res.status(404).send({ message: `Design dengan ID ${id} tidak ditemukan` });
        }
  
        res.send({ message: "Design berhasil diperbarui", data: updatedDesign });
      })
      .catch(err => res.status(500).send({ message: err.message }));
  };
  

exports.delete = (req, res) => {
  const id = req.params.id;

  Design.findByIdAndDelete(id)
    .then(() => res.send({ message: "Design berhasil dihapus" }))
    .catch(err => res.status(500).send({ message: err.message }));
};
