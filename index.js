require('dotenv').config()
const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
  res.send("Shreya@11");
});

app.get('/login', (req, res) => {
  res.send('<h1>Please login at chai aur code</h1>'); // ✅ Fixed closing tag
});


app.get('/youtube', (req, res) => {
    res.send('<h2> chai aur code</h2>'); // ✅ Fixed closing tag
  });
  
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
