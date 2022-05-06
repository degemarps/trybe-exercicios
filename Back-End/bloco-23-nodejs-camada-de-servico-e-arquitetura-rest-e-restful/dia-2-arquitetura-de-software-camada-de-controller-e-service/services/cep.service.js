const cepModel = require('../models/cep.model');

const getCepService = async (cep) => {
  const regex = /\d{5}-?\d{3}/;

  if (cep.match(regex) === null) return 'inválido';

  const cepData = await cepModel.getCepModel(cep);

  return cepData;
};

const creatCepService = async (cep, logradouro, bairro, localidade, uf) => {
  const cepCreated = await cepModel.createCepModel(cep, logradouro, bairro, localidade, uf);

  if (!cepCreated) return false;

  return true;
};

module.exports = {
  getCepService,
  creatCepService
};
