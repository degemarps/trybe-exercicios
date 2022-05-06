const connection = require('../connection/connection');

const getCepModel = async (cep) => {
  const query = `SELECT * FROM cep_lookup.ceps WHERE cep = ?`;
  const [cepData] = await connection.execute(query, [cep]);

  if (cepData.length === 0) return false;

  return cepData;
};

const createCepModel = async (cep, logradouro, bairro, localidade, uf) => {
  const existCep = await getCepModel(cep);

  if (existCep) return false;

  const query = `INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)`;

  const [cepCreated] = await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);

  if (cepCreated.affectedRows === 1) return true;
};

module.exports = {
  getCepModel,
  createCepModel
};
