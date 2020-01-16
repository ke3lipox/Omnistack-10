const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistackFelipe:Ff*1597538246@cluster0-kgioz.mongodb.net/felipe?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);