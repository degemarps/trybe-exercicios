const isValidSaleDate = (req, res, next) => {
  const { infos } = req.body;
  const regex = /^\d{2}\/\d{2}\/\d{4}$/;

  if (!infos.saleDate) return res.status(400).json({ message: 'O campo saleDate é obrigatório' });

  if (infos.saleDate.match(regex) === null) {
    return res.status(400).json({ message: 'O campo saleDate não é uma data válida' });
  };
  
  next();
};

module.exports = isValidSaleDate;