Airport Code Extractor

This is a Node.js server that uses the OpenAI API to extract airport codes from text input. 

The server has two endpoints:

GET /openai - returns the airport codes extracted from the text.
WebSocket / - sends the airport codes extracted from the text over a WebSocket connection.

Getting Started

Install the dependencies by running npm install
Create a .env file in the root of the project and add your OpenAI API key as OPENAI_API_KEY
Start the server by running npm start

Usage

The server is listening on port 3000 or the port specified in the PORT environment variable.
The server is listening on host 000.000.0.0 or the host specified in the HOST environment variable.
The GET /openai endpoint will return the airport codes extracted from the text.
The WebSocket / endpoint will sends the airport codes extracted from the text over a WebSocket connection.

Environment Variables

OPENAI_API_KEY - Your OpenAI API key
PORT - The port the server should run on (default: 3000)
HOST - The host the server should run on (default: 000.000.0.0)

Built With

Express - A web framework for Node.js
WebSocket - A WebSockets library for Node.js
OpenAI - An AI platform for creating and deploying intelligent applications

License

This project is licensed under the GNU License - see the LICENSE file for details.

How to Contribute

If you would like to contribute to this project, please follow the CONTRIBUTING.md guidelines.

Support

If you need any help or have any questions, feel free to open an issue or contact the maintainers directly.