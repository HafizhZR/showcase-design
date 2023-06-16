const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const db = require("./app/models");
const app = express();
require('dotenv').config();


const corsOptions = {
  origin: "*"
};
app.use(bodyParser.json());
// Register cors middleware 
app.use(cors(corsOptions));


// Konek ke database
const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

db.mongoose
  .connect(process.env.DB_URL, mongooseConfig)
  .then(() => console.log("Database connected"))
  .catch(err => {
    console.log(`Failed to connect to database: ${err.message}`);
    process.exit();
  });
  
  app.use(express.json());
// memanggil routes
require("./app/routes/design.routes")(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
