const connPool = require('../databse/db_connection.js');

const getQuestions = (callback) => {
  connPool.query('SELECT * FROM questions', (error, result) => {
    if (error) {
      return callback(error);
    }
    return callback(null, result)
  });
}

const getAnswers = (callback) => {
  connPool.query('SELECOT * FROM answers', (error, result) => {
  if (error) {
    return callback(error);
  }
  return callback(null, result)
  });
}

module.exports = {
  getQuestions,
  getAnswers
 }
