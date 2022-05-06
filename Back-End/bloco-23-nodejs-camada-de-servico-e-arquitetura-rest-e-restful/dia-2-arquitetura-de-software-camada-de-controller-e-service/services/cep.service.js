const cepModel = require('../models/cep.model');

const getCepService = async (cep) => {
  const regex = /\d{5}-?\d{3}/;

  if (cep.match(regex) === null) return 'inválido';

  const cepData = await cepModel.getCepModel(cep);

  return cepData;
};

module.exports = {
  getCepService
};
