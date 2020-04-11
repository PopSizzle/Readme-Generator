var axios = require("axios");

function githubInfo(username){
    const queryUrl = `https://api.github.com/users/${username}`;

        axios.get(queryUrl).then(function(res) {

        avatarURL = res.data.avatar_url;
        githubEmail = res.data.email;
        })
}

module.exports = githubInfo;