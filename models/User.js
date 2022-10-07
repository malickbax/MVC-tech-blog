// Import sequelize
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Import Bcrypt
const bcrypt = require("bcrypt");

class User extends Model {
// Checking if password matches that in the DB/hashed
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password); 
  }
}
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isEmail: true },
      unique: true,
    },

// Password length requirement below 
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [5] },
    },
  },
  {
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
// CREDIT: Worked on this part with the help of coder colleague Brams Lo
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    }, 
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

// Export User 
module.exports = User;