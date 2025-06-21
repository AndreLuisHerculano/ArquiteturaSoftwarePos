const db = require('../models');
const { Op } = require('sequelize'); // ⬅️ Importar operador LIKE
const Cliente = db.Cliente;

exports.create = async (data) => {
  return await Cliente.create(data);
};

exports.findAll = async () => {
  return await Cliente.findAll();
};

exports.count = async () => {
  return await Cliente.count();
};

exports.findById = async (id) => {
  return await Cliente.findByPk(id);
};

exports.findByName = async (nome) => {
  return await Cliente.findAll({
    where: {
      nome: {
        [Op.like]: `%${nome}%`
      }
    }
  });
};

exports.update = async (id, data) => {
  const cliente = await Cliente.findByPk(id);
  if (!cliente) return null;
  return await cliente.update(data);
};

exports.remove = async (id) => {
  const deleted = await Cliente.destroy({ where: { id } });
  return deleted > 0;
};
