const host = process.env.DB_HOST || 'localhost';

module.exports = {
  server: {
    port: 4000
  },
  database: {
    url: 'http://localhost:9200',
    index :'catalog',
    type :'products'
  },
  

};
