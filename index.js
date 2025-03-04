require('dotenv').config()
const express = require('express');
const app = express();
const port = 4000;
const githubdata={
  "login": "Shreya271",
  "id": 145209480,
  "node_id": "U_kgDOCKe4iA",
  "avatar_url": "https://avatars.githubusercontent.com/u/145209480?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Shreya271",
  "html_url": "https://github.com/Shreya271",
  "followers_url": "https://api.github.com/users/Shreya271/followers",
  "following_url": "https://api.github.com/users/Shreya271/following{/other_user}",
  "gists_url": "https://api.github.com/users/Shreya271/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Shreya271/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Shreya271/subscriptions",
  "organizations_url": "https://api.github.com/users/Shreya271/orgs",
  "repos_url": "https://api.github.com/users/Shreya271/repos",
  "events_url": "https://api.github.com/users/Shreya271/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Shreya271/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "SHREYA MISHRA",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 1,
  "following": 2,
  "created_at": "2023-09-16T13:55:24Z",
  "updated_at": "2025-03-04T03:52:45Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
  res.send("Shreya@11");
});

app.get('/login', (req, res) => {
  res.send('<h1>Please login at chai aur code</h1>'); 
});


app.get('/youtube', (req, res) => {
    res.send('<h2> chai aur code</h2>'); 
  });
app.get('/github', (req, res) => {
    res.json(githubdata)
  });

  
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
