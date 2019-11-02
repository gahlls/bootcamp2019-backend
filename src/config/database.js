require('dotenv').config();

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true, // date of create and update of register
    underscored: true, // table user_group
    underscoredAll: true,
  },
};
