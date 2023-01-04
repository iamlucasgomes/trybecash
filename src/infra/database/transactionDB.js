const connection = require('./connection');

const insert = async (transaction, peopleId) => {
  const query = `INSERT INTO transactions 
  (name, description, price, type, person_id) 
  VALUES (?, ?, ?, ?, ?)`;

  const [result] = await
    connection.execute(
      query,
      [transaction.name, transaction.description, transaction.price, transaction.type, peopleId],
    );

  return result.insertId;
};

module.exports = {
  insert,
};