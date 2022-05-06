const connection = require('../connection/connection');

const getCepModel = async (cep) => {
  const query = `SELECT * FROM cep_lookup.ceps WHERE cep = ?`;
  const [cepData] = await connection.execute(query, [cep]);

  if (cepData.length === 0) return false;

  return cepData;
};

module.exports = {
  getCepModel
};
