const express = require('express');
const WebSocket = require('ws');
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const app = express();
const wss = new WebSocket.Server({ server: app });

const port = process.env.PORT || 3000;
const host = process.env.HOST || '000.000.0.0';

app.get('/openai', async (req, res) => {
   
      // code for generating the response from OpenAI
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Extract the airport codes from this text:\n\nText: \"I want to fly from Los Angeles to Miami.\"\nAirport codes: LAX, MIA\n\nText: \"I want to fly from Orlando to Boston\"\nAirport codes:",
        temperature: 0,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["\n"],
      });
    res.send(response);
  });

  wss.on('connection', (ws) => {
    ws.on('message', async (msg) => {
      // code for generating the response from OpenAI
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Extract the airport codes from this text:\n\nText: \"I want to fly from Los Angeles to Miami.\"\nAirport codes: LAX, MIA\n\nText: \"I want to fly from Orlando to Boston\"\nAirport codes:",
        temperature: 0,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["\n"],
      });
      ws.send(response);
    });
  });

  app.listen(port, host, () => {
    console.log(`Server started at http://${host}:${port}`);
  });
  