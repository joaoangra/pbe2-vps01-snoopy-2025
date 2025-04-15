const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
  try {
    const cliente = await prisma.cliente.create({
      data: req.body,
    });
    res.status(201).json(cliente);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar cliente', message: error.message });
  }
};

const read = async (req, res) => {
  try {
    const clientes = await prisma.cliente.findMany({
      include: {  
        telefones: true,  
        pedidos: true,    
      },
    });
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar clientes', message: error.message });
  }
};

const readOne = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const cliente = await prisma.cliente.findUnique({
      where: { id },
      include: {  
        telefones: true,
        pedidos: true,
      },
    });

    if (!cliente) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }

    res.json(cliente);
  } catch (e) {
    res.status(500).json({ error: 'Erro ao buscar cliente', message: e.message });
  }
};

const update = async (req, res) => {
  try {
    const cliente = await prisma.cliente.update({
      data: req.body,
      where: { id: Number(req.params.id) },
    });
    res.status(202).json(cliente);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao atualizar cliente', message: e.message });
  }
};

const remove = async (req, res) => {
  try {
    const cliente = await prisma.cliente.delete({
      where: { id: Number(req.params.id) },
    });
    res.status(204).json(cliente);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao excluir cliente', message: e.message });
  }
};

module.exports = {
  create,
  read,
  readOne,  
  update,
  remove,
};
