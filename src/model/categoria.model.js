
import pool from "../config/db.js";

//CADASTRAR CATEGORIAS
const categoriaModel = {

  criarCategoria: async (descricaoCategoria) => {
  const query = `
    INSERT INTO categoria (descricaoCategoria)
    VALUES (?)
  `;

  const [result] = await pool.execute(query, [descricaoCategoria]);

  return result.insertId;
},
  listarOuBuscarCategoria: async (idCategoria = null) => {
    try {
      let query = `SELECT * FROM categoria`;
      let params = [];

      if (idCategoria !== null && idCategoria !== undefined) {
        query += ` WHERE idCategoria = ?`;
        params.push(idCategoria);
      }

      const [rows] = await pool.execute(query, params);

      if (idCategoria !== null && idCategoria !== undefined) {
        return rows[0] || null;
      }

      return rows;

    } catch (error) {
      console.error("Erro ao listar ou buscar Categoria:", error);
      throw error;
    }
  },

  // ATUALIZAR CATEGORIA
  atualizarCategoria: async (idCategoria, descricaoCategoria) => {
    const query = `
      UPDATE categoria
      SET descricaoCategoria = ?
      WHERE idCategoria = ?
    `;
    const [result] = await pool.execute(query, [
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
    const [result] = await pool.execute(query, [idCategoria]);
    return result.affectedRows;
  }
};

export default categoriaModel;