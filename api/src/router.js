const express = require('express');
const router = express.Router();


const Cliente = require('./Controllers/cliente');
const Pedido = require('./Controllers/pedido');
const Telefone = require('./Controllers/telefone');


router.get('/', (req, res) => {
    res.json({ titulo: 'SNOOPY PetShop API' });
});

router.post('/clientes', Cliente.create);
router.get('/clientes', Cliente.read);
router.get('/clientes/:id', Cliente.readOne);
router.patch('/clientes/:id', Cliente.update);
router.delete('/clientes/:id', Cliente.remove);

router.post('/pedidos', Pedido.create);
router.get('/pedidos', Pedido.read);
router.get('/pedidos/:id', Pedido.readOne);
router.patch('/pedidos/:id', Pedido.update);
router.delete('/pedidos/:id', Pedido.remove);

router.get('/telefones', Telefone.read);
router.get('/telefones/:id', Telefone.readOne);
router.post('/telefones', Telefone.create);
router.patch('/telefones/:id', Telefone.update);
router.delete('/telefones/:id', Telefone.remove);

module.exports = router;
