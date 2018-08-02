var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

app.use(cors());
app.use(bodyParser.json());

let data = [
  {
    id: 1,
    title:
      "History buffs of Reddit, what is one of the most fascinating stories you've learned that no one seems to talk about and can't be found in textbooks?",
    author: 'Hysterria',
    score: 5131,
    permalink:
      '/r/AskReddit/comments/928ow1/history_buffs_of_reddit_what_is_one_of_the_most/',
    body:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod dolores architecto quam atque repudiandae placeat, vero reprehenderit ipsum quisquam unde.'
  },
  {
    id: 2,
    author: 'mrsfran',
    permalink:
      '/r/AskReddit/comments/920g6l/what_was_the_most_fun_day_of_your_life_so_far/',
    score: 2694,
    title: 'What was the most FUN day of your life so far?',
    body:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod dolores architecto quam atque repudiandae placeat, vero reprehenderit ipsum quisquam unde.'
  },
  {
    id: 3,
    author: 'harrytwatter7',
    permalink:
      '/r/AskReddit/comments/923a07/whats_a_stereotype_that_you_see_broken_more_often/',
    score: 1499,
    title: 'What’s a stereotype that you see broken more often than not?',
    body:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod dolores architecto quam atque repudiandae placeat, vero reprehenderit ipsum quisquam unde.'
  },
  {
    id: 4,
    title:
      'What college course did you walk into thinking you would ace but, in the end, was a big old slice of humble pie?',
    author: 'aaron_the_moor',
    score: 2234,
    permalink:
      '/r/AskReddit/comments/924hgh/what_college_course_did_you_walk_into_thinking/',
    body:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod dolores architecto quam atque repudiandae placeat, vero reprehenderit ipsum quisquam unde.'
  },
  {
    id: 5,
    title:
      "You've died, gone to heaven, and appear in front of God. He asks for feedback like it's a video game beta test. What do you say?",
    author: 'HairyHighlight',
    score: 4754,
    permalink:
      '/r/AskReddit/comments/922n2h/youve_died_gone_to_heaven_and_appear_in_front_of/',
    body:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod dolores architecto quam atque repudiandae placeat, vero reprehenderit ipsum quisquam unde.'
  }
];

app.get('/data', function(req, res) {
  res.json(data);
});

app.post('/data', function(req, res) {
  const newPost = req.body;
  console.log(req.body);
  if (newPost && newPost.id) {
    data = data.concat(newPost);
    res.json(data);
  } else {
    res.sendStatus(403);
  }
});

app.listen(1337, function() {
  console.log('Example app listening on port 1337!');
});
