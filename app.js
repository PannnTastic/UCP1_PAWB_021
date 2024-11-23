const express = require('express');
const bodyParser = require('body-parser');
const db = require('./databases/db');
require('dotenv').config();
// const fertilizerRoutes = require('./routes/');
const pupuk = require('./routes/pupuk.js');
const bibit = require('./routes/bibit.js');

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use("/bibit", bibit);
app.use("/pupuk", pupuk);

app.get('/', (req, res) => {
    res.redirect('/bibit'); // Redirect ke halaman daftar bibit secara default
  });

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
