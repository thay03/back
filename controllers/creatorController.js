const Creator = require('../models/creator');
const bcrypt = require('bcryptjs');

// Criar novo usuário
exports.createCreator = async (req, res) => {
    try {
        const { name, password, profile } = req.body;
        const creator = new Creator({ name, password, profile });
        await creator.save();
        res.status(201).json(creator);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Listar todos os usuários
exports.getCreator = async (req, res) => {
    try {
        const creators = await Creator.find();
        res.status(200).json(creators);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Buscar um usuário específico por ID
exports.getCreatorById = async (req, res) => {
    try {
        const creator = await Creator.findById(req.params.id);
        if (!creator) {
            return res.status(404).json({ message: 'Criador não encontrado' });
        }
        res.status(200).json(creator);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Fazer login
exports.login = async (req, res) => {
    const { name, password } = req.body;
    try {
        const creator = await Creator.findOne({ name });
        if (!creator) return res.status(400).json({ message: 'Criador não encontrado' });

        const isMatch = await bcrypt.compare(password, creator.password);
        if (!isMatch) return res.status(400).json({ message: 'Senha incorreta' });

        res.status(200).json({ message: 'Login bem-sucedido', creator });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Atualizar usuário
exports.updateCreator = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, password, profile } = req.body;

        const updatedCreator = await Creator.findByIdAndUpdate(id, { name, password, profile }, { new: true });
        if (!updatedCreator) return res.status(404).json({ message: 'Criador não encontrado' });

        res.status(200).json(updatedCreator);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Excluir usuário
exports.deleteCreator = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCreator= await Creator.findByIdAndDelete(id);
        if (!deletedCreator) return res.status(404).json({ message: 'Criador não encontrado' });

        res.status(200).json({ message: 'Criador excluído com sucesso' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
