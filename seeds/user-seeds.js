const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'thebseto',
    email: 'emailz@gmail.com',
    password: 'pswd123456'
  },
  {
    username: 'jwkjby1',
    email: 'influencer@gmail.com',
    password: 'pswd123456'
  },
  {
    username: 'ibkhfb',
    email: 'cfiuan2@gmail.com',
    password: 'pswd123456'
  },
  {
    username: 'djahsbdr3',
    email: 'ikdjfer3@gmail.com',
    password: 'pswd123456'
  },
  {
    username: 'gitcha4',
    email: 'ldjsgy4@gmail.com',
    password: 'pswd123456'
  },
  {
    username: 'mrproud5',
    email: 'sdjgn5@gmail.com',
    password: 'pswd123456'
  },
  {
    username: 'mpergens6',
    email: 'hnlegd6@gmail.com',
    password: 'pswd123456'
  },
  {
    username: 'daniel7',
    email: 'kpo7@gmail.com',
    password: 'pswd123456'
  },
  {
    username: 'sabrina8',
    email: 'lmon8@gmail.com',
    password: 'pswd123456'
  },
  {
    username: 'jmy9',
    email: 'bste@gmail.com',
    password: 'pswd123456'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
