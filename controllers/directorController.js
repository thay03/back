const Director = require('../models/director');

// Criar novo usuário
exports.createDirector = async (req, res) => {
    try {
        const director = new Director (req.body);
        await director.save();
        res.status(201).json(director);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Listar todos os usuários
exports.getDirectors = async (req, res) => {
    try {
        
        directors= await Director.find();
        res.status(200).json(directors);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Buscar um usuário específico por ID
exports.getDirectorById = async (req, res) => {
    try {
        const director = await Director.findById(req.params.id);
        if (!director) {
            return res.status(404).json({ message: 'Diretor não encontrado' });
        }
        res.status(200).json(director);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Atualizar usuário
exports.updateDirector = async (req, res) => {
    try {
        const director = await Director.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!director) return res.status(404).json({ message: 'Diretor não encontrado' });

        res.status(200).json(director);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Excluir usuário
exports.deleteDirector = async (req, res) => {
    try {
        const director = await Director.findByIdAndDelete(req.params.id);
        if (!director) return res.status(404).json({ message: ' Diretor não encontrado' });

        res.status(200).json({ message: 'Diretor excluído com sucesso' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
