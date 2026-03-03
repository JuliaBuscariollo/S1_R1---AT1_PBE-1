import { Router } from "express";
import produtoController from "../controller/produto.controller.js";
import uploadImage from "../middleware/uploadImage.middleware.js";

const produtoRoutes = Router();

produtoRoutes.post('/produtos', uploadImage, produtoController.criarProduto);
produtoRoutes.get('/produtos', produtoController.listarProdutos);
produtoRoutes.get('/produtos', produtoController.buscarProdutoPorId);
produtoRoutes.put('/produtos/:id', produtoController.atualizarProduto);
produtoRoutes.delete('/produtos/:id', produtoController.deletarProduto);

export default produtoRoutes;