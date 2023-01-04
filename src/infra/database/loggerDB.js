const connection = require('./connection');

const insert = async (logger) => {
  const query = 'INSERT INTO logs (event, timestamp, person_id) VALUES (?, ?, ?)';

  await connection.execute(query, [
    logger.event,
    logger.timestamp,
    logger.personId,
  ]);
};

module.exports = { insert };