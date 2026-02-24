import produtoController from "../../../versionamento/src/controllers/produto.controller.js";
import imagemController from "../controller/imagem.controller.js";
import uploadImage from "../middleware/uploadImage.middleware.js";
import uploadeFIle from "../middleware/uploadDocuments.middleware.js";
import { Router } from "express";

const imagemRoutes = Router();

imagemRoutes.post('/produtos/imagens', uploadImage, imagemController.uplouad);
imagemRoutes.post('/produtos/docs', uploadeFIle, imagemController.uplouad);

export default imagemRoutes