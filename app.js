const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const creatorRoutes = require('./routes/creatorRoutes');
const gameRoutes = require('./routes/gameRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parse de JSON
app.use(express.json());
// Adicione a URL EXATA do seu frontend do Codespaces:
const corsOptions = {
    origin: 'https://solid-space-doodle-q76v4jvj4vvq3xjwv-5500.app.github.dev',
    credentials: true
  };
  
  app.use(cors(corsOptions));

// Conectando ao MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabasenew', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado ao MongoDB!');
}).catch(err => {
    console.log('Erro ao conectar ao MongoDB:', err);
});

// Usando rotas
app.use('/api/creators', creatorRoutes);
app.use('/api/games', gameRoutes);

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
