
import imagemController from "../controller/imagem.controller.js";
import uploadImage from "../middleware/uploadImage.middleware.js";
import { Router } from "express";

const imagemRoutes = Router();

imagemRoutes.post('/produtos/imagens', uploadImage, imagemController.uplouad);


export default imagemRoutes