import pool from "../config/db.js";

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

    const [result] = await pool.execute(query, [
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
    const [rows] = await pool.execute(query);
    return rows;
  },

  // BUSCAR PRODUTO POR ID
  buscarProdutoPorId: async (idProduto) => {
    const query = `
      SELECT * FROM produto
      WHERE idProduto = ?
    `;
    const [rows] = await pool.execute(query, [idProduto]);
    return rows[0];
  },

  // ATUALIZAR PRODUTO
  atualizarProduto: async (idProduto, produto, valorProduto) => {

    const query = `
      UPDATE produto
      SET 
        nomeProduto = ?,
        valorProduto = ?
      WHERE idProduto = ?
    `;

    const [result] = await pool.execute(query, [
      produto,
      valorProduto,
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
    const [result] = await pool.execute(query, [idProduto]);
    return result.affectedRows;
  }
};

export default produtoModel;