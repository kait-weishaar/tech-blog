// import models
const Post = require('./Post');
const Like = require('./Like');
const User = require('./user');
const Comment = require('./Comment');

// associations

//User has many posts
User.hasMany(Post, {
  foreignKey: 'user_id'
});

//Posts belong to users
Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

//User belongs to posts through like
User.belongsToMany(Post, {
  through: Like,
  as: 'likes',

  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.belongsToMany(User, {
  through: Like,
  as: 'likes',
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

Like.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Like.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

User.hasMany(Like, {
  foreignKey: 'user_id'
});

Post.hasMany(Like, {
  foreignKey: 'post_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Like, Comment };
