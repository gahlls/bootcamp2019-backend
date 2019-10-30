module.exports = {
  dialect: 'postgres',
  host: '192.168.99.100',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true, // date of create and update of register
    underscored: true, // table user_group
    underscoredAll: true,
  },
};
