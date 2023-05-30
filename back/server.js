const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
dotenv.config();

const DB = process.env.DB_URL;

mongoose.connect(DB, { useNewUrlParser: true });

const { Schema } = mongoose;

const HostingSchema = new Schema(
  {
    img: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    }
  },
  { timestamps: true }
);

const Hosting = mongoose.model("hosting", HostingSchema);
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/hosting", async (req, res) => {
  try {
    const get = await Hosting.find({});
    res.send(get);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

app.get("/hosting/:id", async (req, res) => {
  try {
    const getId = req.params.id;
    const getHostingId = await Hosting.findById(getId);
    res.send(getHostingId);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

app.post("/hosting", (req, res) => {
  const getBody = req.body;
  const postHosting = new Hosting(getBody);
  postHosting.save();
  res.send(postHosting);
});

app.delete("/hosting/:id", async (req, res) => {
  try {
    const deletBody = req.params.id;
    const deletHosting = await Hosting.findByIdAndDelete(deletBody);
    res.send(deletHosting);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("server qalxdi, port:", PORT);
});
