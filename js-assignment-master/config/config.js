const config = {
  development: {
    server: {
      port: 3000,
      host: 'localhost'
    },
    database: {
      host: 'db',
      port: 8000,
      username: 'myuser',
      password: 'mypassword',
      database: 'mydb'
    },
  },
  test: {
    server: {
      port: 3000,
      host: 'localhost'
    },
    database: {
      host: 'localhost',
      port: 8000,
      username: 'myuser',
      password: 'mypassword',
      database: 'mydb'
    },
  }
};

const env = process.env.NODE_ENV || 'development';

const configuration = config[env];

module.exports = configuration;