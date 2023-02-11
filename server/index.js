import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { OpenAIApi, Configuration } from "openai";
const app = express();
app.use(cors({ origin: "*" }));
const PORT = process.env.PORT || 6789;

const config = new Configuration({ apiKey: process.env.openai });
const openai = new OpenAIApi(config);
app.get("/image/generate/:prompt", async (req, res) => {
  const { prompt } = req.params;
  if (!prompt) {
    res.status(204).send({ success: false, message: "Prompt not found" });
    return;
  }
  const response = await openai.createImage({
    prompt,
    n: 5,
    size: "256x256",
  });
  res
    .status(200)
    .send({ success: true, images: response.data, message: "Image created" });
});
app.get("/generate/points/:prompt", async (req, res) => {
  const { prompt } = req.params;
  if (!prompt) {
    res.status(204).send({ success: false, message: "Prompt not found" });
    return;
  }
  const notes = await openai.createCompletion({
    model: "text-davinci-003",
    temperature: 0.3,
    max_tokens: 150,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });
  res
    .status(200)
    .json({ success: true, notes: notes.data, message: "Image created" });
});

app.listen(PORT, (ERROR) => {
  console.log(ERROR, `server is running on ${PORT}`);
});
