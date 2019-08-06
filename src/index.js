const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');


mongoose.connect('mongodb+srv://semana:semana@cluster0-fbgem.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});
const app = express();

app.use(cors());
app.use('/files', express.static(path.resolve(__dirname, '../', 'uploads', 'resized')));
app.use(require('./routes'));
app.listen(3333);