import categoriaController from "../controller/categoria.controller.js";
const connection = require("../database/connection");

const categoriaModel = {

  // CADASTRAR CATEGORIA
  criarCategoria: async (descricaoCategoria) => {
    const query = `
      INSERT INTO categoria (descricaoCategoria)
      VALUES (?)
    `;
    const [result] = await connection.execute(query, [descricaoCategoria]);
    return result.insertId;
  },

  // LISTAR TODAS AS CATEGORIAS
  listarCategorias: async () => {
    const query = `SELECT * FROM categoria`;
    const [rows] = await connection.execute(query);
    return rows;
  },

  // BUSCAR CATEGORIA POR ID
  buscarCategoriaPorId: async (idCategoria) => {
    const query = `
      SELECT * FROM categoria
      WHERE idCategoria = ?
    `;
    const [rows] = await connection.execute(query, [idCategoria]);
    return rows[0];
  },

  // ATUALIZAR CATEGORIA
  atualizarCategoria: async (idCategoria, descricaoCategoria) => {
    const query = `
      UPDATE categoria
      SET descricaoCategoria = ?
      WHERE idCategoria = ?
    `;
    const [result] = await connection.execute(query, [
      descricaoCategoria,
      idCategoria
    ]);
    return result.affectedRows;
  },

  // EXCLUIR CATEGORIA
  excluirCategoria: async (idCategoria) => {
    const query = `
      DELETE FROM categoria
      WHERE idCategoria = ?
    `;
    const [result] = await connection.execute(query, [idCategoria]);
    return result.affectedRows;
  }
};

export default categoriaModel;