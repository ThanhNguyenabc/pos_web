import express from "express";
import cors from "cors";
import Routes from "./routes/index";

const PORT = 8081;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", Routes);

app.listen(PORT, () => {
  console.log("Running");
});
