const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const creatorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  profile: { type: String, enum: ['game-master', 'creator'], required: true }
});

// Criptografar senha antes de salvar
creatorSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const Creator = mongoose.model('Creator', creatorSchema);

module.exports = Creator;
