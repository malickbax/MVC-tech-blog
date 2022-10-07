const { Comment } = require('../models');

// Comment samples
const commentData = [{
        comment_text: "Sample comment here. This is an expample.",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Les matinées sont froides en avril",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "En mai aussie elles le sont",
        user_id: 3,
        post_id: 3
    }
];
const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;