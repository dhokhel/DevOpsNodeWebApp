'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello FS2025 DevOps Course! Neu wird der DockerBuild jede 2 Minuten ausgeführt!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
