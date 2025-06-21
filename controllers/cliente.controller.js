const clienteService = require('../services/cliente.service');

exports.create = async (req, res) => {
  const cliente = await clienteService.create(req.body);
  res.status(201).json(cliente);
};

exports.findAll = async (req, res) => {
  const clientes = await clienteService.findAll();
  res.json(clientes);
};

exports.count = async (req, res) => {
  const count = await clienteService.count();
  res.json({ total: count });
};

exports.findById = async (req, res) => {
  const cliente = await clienteService.findById(req.params.id);
  if (cliente) res.json(cliente);
  else res.status(404).json({ message: "Cliente não encontrado" });
};

exports.findByName = async (req, res) => {
  const clientes = await clienteService.findByName(req.params.name);
  res.json(clientes);
};

exports.update = async (req, res) => {
  const updated = await clienteService.update(req.params.id, req.body);
  if (updated) res.json(updated);
  else res.status(404).json({ message: "Cliente não encontrado" });
};

exports.remove = async (req, res) => {
  const deleted = await clienteService.remove(req.params.id);
  if (deleted) res.json({ message: "Deletado com sucesso" });
  else res.status(404).json({ message: "Cliente não encontrado" });
};