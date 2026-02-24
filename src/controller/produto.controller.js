const produtoModel = require("../models/produtoModel.js");

const produtoController = {

  // CADASTRAR PRODUTO
  criarProduto: async (req, res) => {
    try {
      const {
        idCategoria,
        nomeProduto,
        valorProduto
      } = req.body;

      const vinculoImagem = req.file ? req.file.filename : null;

      if (!idCategoria || !nomeProduto || !valorProduto) {
        return res.status(400).json({
          message: "Todos os campos obrigatórios devem ser preenchidos"
        });
      }

      const produto = {
        idCategoria,
        nomeProduto,
        valorProduto,
        vinculoImagem
      };

      const idProduto = await produtoModel.criarProduto(produto);

      res.status(201).json({
        message: "Produto cadastrado com sucesso",
        idProduto
      });

    } catch (error) {
      console.error("Erro ao criar produto:", error);
      res.status(500).json({
        message: "Erro ao cadastrar produto"
      });
    }
  },

  // LISTAR PRODUTOS
  listarProdutos: async (req, res) => {
    try {
      const produtos = await produtoModel.listarProdutos();
      res.status(200).json(produtos);
    } catch (error) {
      console.error("Erro ao listar produtos:", error);
      res.status(500).json({
        message: "Erro ao listar produtos"
      });
    }
  },

  // BUSCAR PRODUTO POR ID
  buscarProdutoPorId: async (req, res) => {
    try {
      const { id } = req.params;

      const produto = await produtoModel.buscarProdutoPorId(id);

      if (!produto) {
        return res.status(404).json({
          message: "Produto não encontrado"
        });
      }

      res.status(200).json(produto);

    } catch (error) {
      console.error("Erro ao buscar produto:", error);
      res.status(500).json({
        message: "Erro ao buscar produto"
      });
    }
  },

  // ATUALIZAR PRODUTO
  atualizarProduto: async (req, res) => {
    try {
      const { id } = req.params;
      const {
        idCategoria,
        nomeProduto,
        valorProduto
      } = req.body;

      const vinculoImagem = req.file ? req.file.filename : null;

      const produto = {
        idCategoria,
        nomeProduto,
        valorProduto,
        vinculoImagem
      };

      const atualizado = await produtoModel.atualizarProduto(id, produto);

      if (atualizado === 0) {
        return res.status(404).json({
          message: "Produto não encontrado"
        });
      }

      res.status(200).json({
        message: "Produto atualizado com sucesso"
      });

    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
      res.status(500).json({
        message: "Erro ao atualizar produto"
      });
    }
  },

  // EXCLUIR PRODUTO
  deletarProduto: async (req, res) => {
    try {
      const { id } = req.params;

      const excluido = await produtoModel.excluirProduto(id);

      if (excluido === 0) {
        return res.status(404).json({
          message: "Produto não encontrado"
        });
      }

      res.status(200).json({
        message: "Produto excluído com sucesso"
      });

    } catch (error) {
      console.error("Erro ao excluir produto:", error);
      res.status(500).json({
        message: "Erro ao excluir produto"
      });
    }
  }
};

export default produtoController;