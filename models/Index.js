// Importing all required elements
const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

User.hasMany(Post, {
  foreignKey: "user_id",
});
Post.belongsTo(User, {
  foreignKey: "user_id",
});

// Comment being associated to User
Comment.belongsTo(User, {
  foreignKey: "user_id",
});
Comment.belongsTo(Post, {
  foreignKey: "post_id",
});
// CREDIT: Worked on this part with the help of coder colleague Brams Lo
User.hasMany(Comment, {
  foreignKey: "user_id",
});
Post.hasMany(Comment, {
  foreignKey: "post_id",
});

module.exports = { User, Post, Comment };