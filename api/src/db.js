const { Sequelize } = require("sequelize");
const ModelUser = require("./models/User");

const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,{
    logging: false, native: false
});


ModelUser(sequelize);


const { User } = sequelize.models;


module.exports = {
    conn: sequelize,
    ...sequelize.models
}