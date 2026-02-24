import { Router } from "express";
import categoriaController from "../controller/categoria.controller.js";


const categoriaRoutes = Router();

categoriaRoutes.post('/categorias',categoriaController.criarCategoria);
categoriaRoutes.get('/categorias',categoriaController.listarCategorias);
categoriaRoutes.get('/categorias',categoriaController.buscarCategoriaPorId);
categoriaRoutes.put('/categorias',categoriaController.atualizarCategoria);
categoriaRoutes.put('/categorias',categoriaController.excluirCategoria);

export default categoriaRoutes;