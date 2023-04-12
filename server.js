const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 80;

const app = express();

app.use(express.static('dist'));

app.get('/*', (request, response) => {
  response.sendFile(path.resolve(__dirname, './dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at: http://127.0.0.1:${PORT}`);
});
