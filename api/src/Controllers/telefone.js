const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
  const telefone = await prisma.telefone.create({
    data: req.body,
  });
  res.status(201).json(telefone);
};

const read = async (req, res) => {
  const telefones = await prisma.telefone.findMany();
  res.json(telefones);
};

const readOne = async (req, res) => {
  try {
    const id = Number(req.params.id); 

    const telefone = await prisma.telefone.findUnique({
      where: { id },
    });

    if (!telefone) {
      return res.status(404).json({ error: 'Telefone não encontrado' });
    }

    res.json(telefone);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar telefone' });
  }
};

const update = async (req, res) => {
  try {
    const telefone = await prisma.telefone.update({
      data: req.body,
      where: { id: Number(req.params.id) },
    });
    res.status(202).json(telefone);
  } catch (error) {
    res.status(400).json(error);
  }
};

const remove = async (req, res) => {
  try {
    const telefone = await prisma.telefone.delete({
      where: { id: Number(req.params.id) },
    });
    res.status(204).json(telefone);
  } catch (error) {
    res.status(400).json(error);
  }
};


module.exports = {
  create,
  read,
  readOne,  
  update,
  remove,
};
