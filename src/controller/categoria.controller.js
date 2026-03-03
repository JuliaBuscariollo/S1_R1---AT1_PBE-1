import categoriaModel from "../model/categoria.model.js";

const categoriaController = {

  // CADASTRAR CATEGORIA
  criarCategoria: async (req, res) => {
    try {
      const { descricaoCategoria } = req.body;
      console.log(req.body);

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

  listarOuBuscarCategoria: async (req, res) => {
    try {
      const  id  = Number(req.query.id);

      // Se vier ID, busca categoria específica
      if (id) {
        const categoria = await categoriaModel.listarOuBuscarCategoria(id);

        if (!categoria) {
          return res.status(404).json({
            message: "Categoria não encontrada"
          });
        }

        return res.status(200).json(categoria);
      }

      // Se não vier ID, lista todas
      const categorias = await categoriaModel.listarOuBuscarCategoria();
      return res.status(200).json(categorias);

    } catch (error) {
      console.error("Erro ao processar categoria:", error);
      return res.status(500).json({
        message: "Erro ao processar categoria"
      });
    }
  },

  // ATUALIZAR CATEGORIA
  atualizarCategoria: async (req, res) => {
    try {
      const { id } = req.params;
      const { descricaoCategoria } = req.body;
      console.log(req.params, descricaoCategoria);

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