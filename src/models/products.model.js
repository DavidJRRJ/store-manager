const connection = require('../connection');

const productAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return result;
};

const productById = async (id) => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?', [id],
  );
  return result;
};

const productPost = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)', [name],
  );
  return insertId;
};

const productDelete = async (id) => {
  const result = await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ?', [id],
  );
  return result;
};

module.exports = {
  productAll,
  productById,
  productPost,
  productDelete,
};