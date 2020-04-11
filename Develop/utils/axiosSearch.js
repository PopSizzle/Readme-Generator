var axios = require("axios");

const queryUrl = `https://api.github.com/users/PopSizzle/repos?per_page=100`;

    axios.get(queryUrl).then(function(res) {
      console.log(res);
    })