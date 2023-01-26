Airport Code Extractor

A simple Node.js server that uses the OpenAI API to extract airport codes from text input.

Getting Started

Install the dependencies by running npm install
Create a .env file in the root of the project and add your OpenAI API key as OPENAI_API_KEY
Start the server by running npm start

Usage

The server has two endpoints:

GET /openai - returns the airport codes extracted from the text.
WebSocket / - sends the airport codes extracted from the text over a WebSocket connection.

Environment Variables

OPENAI_API_KEY - Your OpenAI API key
PORT - The port the server should run on (default: 3000)
HOST - The host the server should run on (default: 192.168.1.1)

Built With

Express - A web framework for Node.js
WebSocket - A WebSockets library for Node.js
OpenAI - An AI platform for creating and deploying intelligent applications

License

This project is licensed under the GNU License - see the LICENSE file for details.