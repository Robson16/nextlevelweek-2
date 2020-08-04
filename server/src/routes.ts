import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();

// GET: Buscar ou listar uma informação
// POST: Criar alguma nova informação
// PUT: Atualizar uma informação
// DELETE: Apagar uma informação

// Resquest Body (request.body): Dados para criação au atualização de um resgistro
// Route Params  (request.params): Identificar qual recurso eu quero atualizar ou deletar
// Query Params  (request.query): Paginação, filtros, ordenação

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;