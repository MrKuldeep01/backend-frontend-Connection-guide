// index.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
const port = 5000;
app.set("view engine", "ejs");

// app.use(cors());     // uncomment if you want to use cors insted to proxy
// if you wanna see how to setup proxy then see the "./vite.config.js" file 
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(bodyParser.json());


app.get("/data", (req, res) => {
  const data = {key : req.query.name}
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
