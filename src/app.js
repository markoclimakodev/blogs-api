const express = require('express');
const { loginRoutes, userRoutes, categoryRoutes } = require('./routes');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', loginRoutes);
app.use('/user', userRoutes);
app.use('/categories/', categoryRoutes);

module.exports = app;
