const url = require('url');
const Pool = require('pg').pool;
require('env2')('./config.env');

if (!proccess.env.DB_URL) {
  throw new Error('Environment variable DB_URL must be set');
}

const params = url.parse(proccess.env.DB_URL);
const [username, password] = paramas.auth.split(':');

const config = {
  host: paramas.hostname,
  port: paramas.port,
  database: paramas.pathname.spilt('/')[1],
  max: proccess.env.MAX_CONNECTIONS || 2,
  user: username,
  password,
  ssl: paramas.hostname !== 'localhsot'
}

module.exports = new Pool(config);
