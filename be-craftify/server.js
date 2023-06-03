const express = require("express");
const cors = require("cors");
const db = require("./app/models");
const app = express();

const corsOptions = {
  origin: "*"
};

// Register cors middleware 
app.use(cors(corsOptions));
app.use(express.json());

// Konek ke database
const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

db.mongoose
  .connect(db.url, mongooseConfig)
  .then(() => console.log("Database connected"))
  .catch(err => {
    console.log(`Failed to connect to database: ${err.message}`);
    process.exit();
  });

// memanggil routes
require("./app/routes/design.routes")(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
