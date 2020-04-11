var axios = require("axios");

function githubInfo(username){
    const queryUrl = `https://api.github.com/users/PopSizzle`;

        axios.get(queryUrl).then(function(res) {

        let avatarURL = res.avatar_url;
        let githubEmail = res.email;
        console.log(avatarURL);
        console.log(githubEmail);
        })
}

// module.exports = githubInfo;