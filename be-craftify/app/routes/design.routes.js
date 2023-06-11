module.exports = app => {
    const design = require('../controllers/design.controller');
    const auth = require('../controllers/auth.controller');
    const designRoute = require('express').Router();
    const authRoute = require('express').Router();
    const multer = require('multer');
    const storage = multer.memoryStorage();
    const upload = multer({ storage });
  
    designRoute.get('/', design.findAll);
    designRoute.get('/:id', design.show);
    designRoute.post('/', upload.single('thumbnail_design'), design.create);
    designRoute.put('/:id', upload.single('thumbnail_design'), design.update);
    designRoute.delete('/:id', design.delete);
  
    authRoute.post('/register', auth.register);
    authRoute.post('/login', auth.login);
  
    app.use('/design', designRoute);
    app.use('/auth', authRoute);
    //GET localhost:8000/design
    //GET localhost:8000/design/id
    //POST localhost:8000/design
    //PUT localhost:8000/design/id
    //DELETE localhost:8000/design/id
  };
  