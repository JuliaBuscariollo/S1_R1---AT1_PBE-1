import { Router } from "express";
import categoriaController from "../controller/categoria.controller.js";


const categoriaRoutes = Router();

categoriaRoutes.post('/categorias',categoriaController.criarCategoria);
categoriaRoutes.get('/categorias',categoriaController.listarOuBuscarCategoria);
categoriaRoutes.put('/categorias/:id',categoriaController.atualizarCategoria);
categoriaRoutes.delete('/categorias/:id',categoriaController.excluirCategoria);

export default categoriaRoutes;