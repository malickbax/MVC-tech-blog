const { Post } = require('../models');

// Posting sample comment
const postData = [{
        title: 'test comment 1 is right here',
        content: 'Eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        user_id: 1

    },
    {
        title: 'test comment 2 is here',
        content: 'Amet aliquam id diam maecenas ultricies mi  Ut etiam sit amet nisl purus in mollis eget magna',
        user_id: 2
    },
    {
        title: 'test comment 3 is here too',
        content: 'ultricies mi  Ut etiam sit amet nisl Ut etiam sit amet nisl purus in mollis magna lorem.',
        user_id: 3
    }
];
const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;