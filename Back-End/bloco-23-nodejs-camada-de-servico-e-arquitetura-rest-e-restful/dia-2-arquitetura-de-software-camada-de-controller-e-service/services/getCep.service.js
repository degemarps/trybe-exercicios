const cepModel = require('../models/getCep.model');

const getCepService = async (cep) => {
  const cepData = await cepModel.getCepModel(cep);

  return cepData;
};

module.exports = {
  getCepService
};
