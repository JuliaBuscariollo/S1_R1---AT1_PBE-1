const categoriaModel = require("../models/categoriaModel.js");

const categoriaController = {

  // CADASTRAR CATEGORIA
  criarCategoria: async (req, res) => {
    try {
      const { descricaoCategoria } = req.body;

      if (!descricaoCategoria) {
        return res.status(400).json({
          message: "Descrição da categoria é obrigatória"
        });
      }

      const idCategoria = await categoriaModel.criarCategoria(descricaoCategoria);

      res.status(201).json({
        message: "Categoria cadastrada com sucesso",
        idCategoria
      });

    } catch (error) {
      console.error("Erro ao criar categoria:", error);
      res.status(500).json({
        message: "Erro ao cadastrar categoria"
      });
    }
  },

  // LISTAR CATEGORIAS
  listarCategorias: async (req, res) => {
    try {
      const categorias = await categoriaModel.listarCategorias();
      res.status(200).json(categorias);
    } catch (error) {
      console.error("Erro ao listar categorias:", error);
      res.status(500).json({
        message: "Erro ao listar categorias"
      });
    }
  },

  // BUSCAR CATEGORIA POR ID
  buscarCategoriaPorId: async (req, res) => {
    try {
      const { id } = req.params;

      const categoria = await categoriaModel.buscarCategoriaPorId(id);

      if (!categoria) {
        return res.status(404).json({
          message: "Categoria não encontrada"
        });
      }

      res.status(200).json(categoria);

    } catch (error) {
      console.error("Erro ao buscar categoria:", error);
      res.status(500).json({
        message: "Erro ao buscar categoria"
      });
    }
  },

  // ATUALIZAR CATEGORIA
  atualizarCategoria: async (req, res) => {
    try {
      const { id } = req.params;
      const { descricaoCategoria } = req.body;

      const atualizado = await categoriaModel.atualizarCategoria(
        id,
        descricaoCategoria
      );

      if (atualizado === 0) {
        return res.status(404).json({
          message: "Categoria não encontrada"
        });
      }

      res.status(200).json({
        message: "Categoria atualizada com sucesso"
      });

    } catch (error) {
      console.error("Erro ao atualizar categoria:", error);
      res.status(500).json({
        message: "Erro ao atualizar categoria"
      });
    }
  },

  // EXCLUIR CATEGORIA
  excluirCategoria: async (req, res) => {
    try {
      const { id } = req.params;

      const excluida = await categoriaModel.excluirCategoria(id);

      if (excluida === 0) {
        return res.status(404).json({
          message: "Categoria não encontrada"
        });
      }

      res.status(200).json({
        message: "Categoria excluída com sucesso"
      });

    } catch (error) {
      console.error("Erro ao excluir categoria:", error);
      res.status(500).json({
        message: "Erro ao excluir categoria"
      });
    }
  }
};

export default categoriaController;