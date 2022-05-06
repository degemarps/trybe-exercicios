const cepService = require('../services/cep.service');

const getCepController = async (req, res, _next) => {
  const { cep } = req.params;
  const result = await cepService.getCepService(cep);

  if (result === 'inválido') return res.status(400).json({ error: { code: "invalidData", message: "CEP inválido" } });

  if (!result) return res.status(404).json({ error: { code: "notFound", message: "CEP não encontrado" } });

  res.status(200).json({ message: "ok" });
};

module.exports = {
  getCepController
}