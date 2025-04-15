const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
  const { preco, quantidade, ...rest } = req.body; // Extrai 'preco' e 'quantidade' para o cálculo do subtotal

  // Calculando o subTotal (preço * quantidade)
  const subTotal = preco * quantidade;

  try {
    // Criando o pedido com o 'subTotal' calculado
    const pedido = await prisma.pedido.create({
      data: {
        preco,        // Preço do produto
        quantidade,   // Quantidade do produto
        subTotal,     // SubTotal calculado
        ...rest       // Outros dados que possam ser passados no body
      }
    });

    // Retornando o pedido criado
    res.status(201).json(pedido);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar pedido', message: error.message });
  }
};

const read = async (req, res) => {
  try {
    const pedidos = await prisma.pedido.findMany();
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar pedidos', message: error.message });
  }
};

const readOne = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const pedido = await prisma.pedido.findUnique({
      where: { id },
    });

    if (!pedido) {
      return res.status(404).json({ error: 'Pedido não encontrado' });
    }

    res.json(pedido);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar pedido', message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const pedido = await prisma.pedido.update({
      data: req.body,
      where: { id: Number(req.params.id) },
    });
    res.status(202).json(pedido);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar pedido', message: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const pedido = await prisma.pedido.delete({
      where: { id: Number(req.params.id) },
    });
    res.status(204).json(pedido);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao remover pedido', message: error.message });
  }
};

module.exports = {
  create,
  read,
  readOne,
  update,
  remove,
};
