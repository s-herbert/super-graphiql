const Sequelize = require('sequelize');

// Replace with your database connection information.
const sequelize = new Sequelize('Database name', 'User', 'Password', {
  dialect: 'SQL server engine',
  define: {
    underscored: true,
  },
});

// The database model:
const models = {
  Student: sequelize.import('./student'),
  Subject: sequelize.import('./subject'),
  Class: sequelize.import('./class')
};

// Create the relations among the tables
Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;