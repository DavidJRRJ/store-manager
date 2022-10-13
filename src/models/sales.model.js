const connection = require('../connection');

const salesGetAll = async () => {
  const [result] = await connection.execute(
    `SELECT sale_id as saleId, date, product_id as productId, quantity  FROM sales_products sp
    INNER JOIN sales s ON sp.sale_id = s.id`,
  );

  return result;
};

const salesGetId = async (id) => {
  const [result] = await connection.execute(
    `SELECT date, product_id as productId, quantity 
    FROM sales_products sp
    INNER JOIN sales s ON sp.sale_id = s.id
    WHERE sp.sale_id = ?
    ORDER BY sale_id, product_id`,
    [id],
  );
  return result;
};

module.exports = {
  salesGetAll,
  salesGetId,
};