const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'So rad',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'This is the best',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'I love it',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'Great Post!',
    user_id: 3,
    post_id: 18
  },
  {
    comment_text: 'Fantastic Content, thanks for posting',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'Lovely',
    user_id: 1,
    post_id: 20
  },
  {
    comment_text: 'Hate it',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'Useless',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: 'I dont get it',
    user_id: 6,
    post_id: 12
  },
  {
    comment_text: 'Not true',
    user_id: 6,
    post_id: 20
  },
  {
    comment_text: 'Not helpful',
    user_id: 3,
    post_id: 14
  },
  {
    comment_text: 'Great point! We should talk some time',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'Intersting',
    user_id: 4,
    post_id: 9
  },
  {
    comment_text:
      'Sure',
    user_id: 5,
    post_id: 14
  },
  {
    comment_text: 'Why not',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'Yuppers',
    user_id: 8,
    post_id: 2
  },
  {
    comment_text:
      'Yikes',
    user_id: 2,
    post_id: 20
  },
  {
    comment_text: 'Not convinced',
    user_id: 4,
    post_id: 11
  },
  {
    comment_text:
      'Mind blown.',
    user_id: 5,
    post_id: 13
  },
  {
    comment_text:
      'Earth shattering.',
    user_id: 9,
    post_id: 16
  },
  {
    comment_text: 'No bueno',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'Por que?',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'Asi Asi',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text:
      'Que rico',
    user_id: 8,
    post_id: 10
  },
  {
    comment_text:
      'Estoy descansada',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'Que asco',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'No es para me',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'Ningun.',
    user_id: 4,
    post_id: 16
  },
  {
    comment_text: 'Just okay.',
    user_id: 4,
    post_id: 18
  },
  {
    comment_text: 'Its for the best.',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'Mellow yellow.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'Idk.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'Grammar',
    user_id: 3,
    post_id: 19
  },
  {
    comment_text: 'Spelling mistake.',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'So true.',
    user_id: 10,
    post_id: 14
  },
  {
    comment_text: 'For real.',
    user_id: 10,
    post_id: 8
  },
  {
    comment_text: 'I guess.',
    user_id: 10,
    post_id: 11
  },
  {
    comment_text: 'Meh.',
    user_id: 8,
    post_id: 5
  },
  {
    comment_text: 'Waste of time.',
    user_id: 8,
    post_id: 19
  },
  {
    comment_text: 'Boring.',
    user_id: 9,
    post_id: 19
  },
  {
    comment_text:
      'So many comments so little time',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'This is copyrighted.',
    user_id: 2,
    post_id: 11
  },
  {
    comment_text: 'Not entirely true',
    user_id: 4,
    post_id: 6
  },
  {
    comment_text: 'Im skeptical',
    user_id: 9,
    post_id: 6
  },
  {
    comment_text:
      'Hmmm. Interesting',
    user_id: 7,
    post_id: 9
  },
  {
    comment_text: 'So many words',
    user_id: 4,
    post_id: 19
  },
  {
    comment_text: 'My opinion.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text:
      'Two cents.',
    user_id: 2,
    post_id: 19
  },
  {
    comment_text: 'Sounds great',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'Cool',
    user_id: 10,
    post_id: 12
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
