import express from 'express';
const ClientesRouter = express.Router();

// Middleware 
ClientesRouter.use(express.json());

ClientesRouter.get('/clientes', (req, res) => {
    res.send("clientes");
});

ClientesRouter.post('/clientes', (req, res) => {
    console.log("Resivido");
    res.send("Datos recividos");
});
ClientesRouter.post('/clientes/:id/pedidos', (req, res) => {
    const id = req.params.id;
    res.send(`Nuevo pedido creado para el cliente con ID ${id}`);
});

ClientesRouter.delete('/clientes/:id', (req, res) => {
    const id = req.params.id;
    const pedidoId = req.params.pedidoId;
    res.send(`cliente con ID ${id} eliminado`);
});

ClientesRouter.delete('/clientes/:id/pedidos', (req, res) => {
    const id = req.params.id;
    const pedidoId = req.params.pedidoId;
    res.send(`Pedido con ID ${pedidoId} del cliente con ID ${id} eliminado`);
});
ClientesRouter.put('/clientes/:id/pedidos', (req, res) => {
    const id = req.params.id;
    const pedidoId = req.params.pedidoId;
    // Lógica para actualizar el pedido con el ID proporcionado del cliente con el ID proporcionado
    res.send(`Pedido con ID ${pedidoId} del cliente con ID ${id} actualizado`);
});

ClientesRouter.put('/clientes/:id', (req, res) => {
    const id = req.params.id;
    const pedidoId = req.params.pedidoId;
    // Lógica para actualizar el pedido con el ID proporcionado del cliente con el ID proporcionado
    res.send(`  cliente con ID ${id} actualizado`);
});

ClientesRouter.get('/clientes/:id/pedidos', (req, res) => {
    const id = req.params.id;
    const pedidoId = req.params.pedidoId;
    // Lógica para obtener los detalles de envío del pedido con el ID proporcionado del cliente con el ID proporcionado
    res.send(`Detalles de envío del cliente con ID ${id}`);
});

export default ClientesRouter;