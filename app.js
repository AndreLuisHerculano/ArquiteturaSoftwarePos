const express = require('express');
const app = express();
const db = require('./models');
const clienteRoutes = require('./routes/cliente.routes');

app.use(express.json());
app.use('/clientes', clienteRoutes);

db.sequelize.sync();

module.exports = app;
