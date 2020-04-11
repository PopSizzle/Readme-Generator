var axios = require("axios");

const queryUrl = `https://api.github.com/users/Analoo`;

    axios.get(queryUrl).then(function(res) {

      avatarURL = res.data.avatar_url;
      githubEmail = res.data.email;
    })