const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const port = 5000;


app.use(cors()); 
app.use(express.json()); 

// Rotas
app.use('/api', taskRoutes);

app.listen(port, () => {
  console.log(`Servidor backend rodando em http://localhost:${port}`);
});