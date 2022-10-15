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

const salesInsertData = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO sales (date) VALUE (NOW())',
  );
  return insertId;
};

const salesInsertProduct = async (product, saleDataId) => {
  const { productId, quantity } = product;
  const [{ insertId }] = await connection.execute(
    'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [saleDataId, productId, quantity],
  );
  return insertId;
};

module.exports = {
  salesGetAll,
  salesGetId,
  salesInsertData,
  salesInsertProduct,
};