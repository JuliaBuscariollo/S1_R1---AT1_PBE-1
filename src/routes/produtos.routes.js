import { Router } from "express";
import produtoController from "../controller/produto.controller.js";
import produtoController from "../controller/produto.controller.js";

const produtoRoutes = Router();

produtoRoutes.post('/produtos', produtoController.criarProduto);
produtoRoutes.get('/produtos', produtoController.listarProdutos);
produtoRoutes.get('/produtos', produtoController.buscarProdutoPorId);
produtoRoutes.put('/produtos', produtoController.atualizarProduto);
produtoRoutes.put('/produtos', produtoController.deletarProduto);

export default produtoRoutes;