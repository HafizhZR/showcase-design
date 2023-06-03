module.exports = app => {
    const design = require ("../controllers/design.controller")
    const route = require("express"). Router();
    const multer = require('multer');
    const storage = multer.memoryStorage();
    const upload = multer({ storage });

    route.get("/", design.findAll);
    route.get("/:id", design.show);
    route.post('/', upload.single('thumbnail_design'), design.create);
    route.put("/:id", upload.single('thumbnail_design'), design.update);
    route.delete("/:id", design.delete);

    app.use("/design", route);

    //GET localhost:8000/design
    //GET localhost:8000/design/id
    //POST localhost:8000/design
    //PUT localhost:8000/design/id
    //DELETE localhost:8000/design/id
}