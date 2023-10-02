module.exports = {
  "posts":[
    {
      "id":1,
      "title":"First Post",
      "content":"Content of the first post.",
      "user_id":1,
      "tags":["Tutorial", "Introduction"],
      "date":"2023-01-01"
    },
    {
      "id":2,
      "title":"Second Post",
      "content":"Content of the second post.",
      "user_id":2,
      "tags":["Article", "Advanced"],
      "date":"2023-01-05"
    },
    {
      "id":3,
      "title":"Third Post",
      "content":"Content of the third post.",
      "user_id":3,
      "tags":["Tutorial"],
      "date":"2023-01-10"
    },
    {
      "id":4,
      "title":"Fourth Post",
      "content":"Content of the fourth post.",
      "user_id":4,
      "tags":["Article"],
      "date":"2023-01-12"
    },
    {
      "id":5,
      "title":"Fifth Post",
      "content":"Content of the fifth post.",
      "user_id":5,
      "tags":["Tutorial", "Intermediate"],
      "date":"2023-01-15"
    },
    {
      "id":6,
      "title":"Sixth Post",
      "content":"Content of the sixth post.",
      "user_id":1,
      "tags":["Tutorial", "Beginner"],
      "date":"2023-01-18"
    },
    {
      "id":7,
      "title":"Seventh Post",
      "content":"Content of the seventh post.",
      "user_id":2,
      "tags":["Article", "Opinion"],
      "date":"2023-01-20"
    },
    {
      "id":8,
      "title":"Eighth Post",
      "content":"Content of the eighth post.",
      "user_id":3,
      "tags":["Tutorial", "Advanced"],
      "date":"2023-01-22"
    },
    {
      "id":9,
      "title":"Ninth Post",
      "content":"Content of the ninth post.",
      "user_id":4,
      "tags":["Article", "Review"],
      "date":"2023-01-25"
    },
    {
      "id":10,
      "title":"Tenth Post",
      "content":"Content of the tenth post.",
      "user_id":5,
      "tags":["Tutorial", "Expert"],
      "date":"2023-01-28"
    }
  ],
  users:[
    {
      "id":1,
      "name":"Alice",
      "email":"alice@example.com"
    },
    {
      "id":2,
      "name":"Bob",
      "email":"bob@example.com"
    },
    {
      "id":3,
      "name":"Charlie",
      "email":"charlie@example.com"
    },
    {
      "id":4,
      "name":"David",
      "email":"david@example.com"
    },
    {
      "id":5,
      "name":"Eva",
      "email":"eva@example.com"
    }
  ],
  comments:[
    {
      id:1,
      post_id:1,
      body:"Great post, Alice!",
      date:new Date('2017-07-03')
    },
    {
      id:2,
      post_id:2,
      body:"Thanks for the insight, Bob.",
      date:new Date('2017-08-17')
    },
    {
      id:3,
      post_id:3,
      body:"Loved this.",
      date:new Date('2017-09-05')
    },
    {
      id:4,
      post_id:3,
      body:"Informative post, Charlie.",
      date:new Date('2017-10-01')
    },
    {
      id:5,
      post_id:4,
      body:"Keep up the good work, David.",
      date:new Date('2017-10-21')
    },
    {
      id:6,
      post_id:5,
      body:"Interesting thoughts!",
      date:new Date('2017-11-03')
    },
    {
      id:7,
      post_id:5,
      body:"Very well said, Eva.",
      date:new Date('2017-11-20')
    },
    {
      id:8,
      post_id:6,
      body:"I agree with Alice.",
      date:new Date('2017-12-01')
    },
    {
      id:9,
      post_id:7,
      body:"Bob, you're always insightful.",
      date:new Date('2017-12-15')
    },
    {
      id:10,
      post_id:8,
      body:"Charlie, this is an excellent piece.",
      date:new Date('2018-01-01')
    },
    {
      id:11,
      post_id:9,
      body:"David, this was a great read!",
      date:new Date('2018-01-15')
    },
    {
      id:12,
      post_id:10,
      body:"Eva, thanks for sharing.",
      date:new Date('2018-02-01')
    },
    {
      id:13,
      post_id:6,
      body:"A good post, Alice.",
      date:new Date('2018-02-10')
    },
    {
      id:14,
      post_id:7,
      body:"Bob, I learned a lot from this.",
      date:new Date('2018-02-20')
    },
    {
      id:15,
      post_id:8,
      body:"Charlie, keep it up!",
      date:new Date('2018-03-01')
    }
  ]
}
