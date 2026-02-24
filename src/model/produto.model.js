import produtoController from "../controller/produto.controller.js";

const connection = require("../database/connection");

const produtoModel = {

  // CADASTRAR PRODUTO
  criarProduto: async (produto) => {
    const {
      idCategoria,
      nomeProduto,
      valorProduto,
      vinculoImagem
    } = produto;

    const query = `
      INSERT INTO produto
      (idCategoria, nomeProduto, valorProduto, vinculoImagem)
      VALUES (?, ?, ?, ?)
    `;

    const [result] = await connection(query, [
      idCategoria,
      nomeProduto,
      valorProduto,
      vinculoImagem
    ]);

    return result.insertId;
  },

  // LISTAR TODOS OS PRODUTOS
  listarProdutos: async () => {
    const query = `
      SELECT 
        p.idProduto,
        p.nomeProduto,
        p.valorProduto,
        p.vinculoImagem,
        p.dataCad,
        c.descricaoCategoria
      FROM produto p
      INNER JOIN categoria c ON p.idCategoria = c.idCategoria
    `;
    const [rows] = await connection.execute(query);
    return rows;
  },

  // BUSCAR PRODUTO POR ID
  buscarProdutoPorId: async (idProduto) => {
    const query = `
      SELECT * FROM produto
      WHERE idProduto = ?
    `;
    const [rows] = await connection.execute(query, [idProduto]);
    return rows[0];
  },

  // ATUALIZAR PRODUTO
  atualizarProduto: async (idProduto, produto) => {
    const {
      idCategoria,
      nomeProduto,
      valorProduto,
      vinculoImagem
    } = produto;

    const query = `
      UPDATE produto
      SET 
        idCategoria = ?,
        nomeProduto = ?,
        valorProduto = ?,
        vinculoImagem = ?
      WHERE idProduto = ?
    `;

    const [result] = await connection.execute(query, [
      idCategoria,
      nomeProduto,
      valorProduto,
      vinculoImagem,
      idProduto
    ]);

    return result.affectedRows;
  },

  // EXCLUIR PRODUTO
deletarProduto: async (idProduto) => {
    const query = `
      DELETE FROM produto
      WHERE idProduto = ?
    `;
    const [result] = await connection.execute(query, [idProduto]);
    return result.affectedRows;
  }
};

export default produtoModel;