const { User } = require('../models');

// Sample user seeds
const userData = [{
        username: 'Emilie',
        password: 'emilie'
    },
    {
        username: 'Imran',
        password: 'imran'
    },
    {
        username: 'Rob',
        password: 'rob'
    }
];
const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;