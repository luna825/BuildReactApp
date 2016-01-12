var axios = require('axios')

function getUserInfo (username) {
    return axios.get('https://api.github.com/users/'+ username);
}

function getUserRepos (username) {
    return axios.get('https://api.github.com/users/'+ username +'/repos');
}

var helper = {
    getGithubInfo : function(username) {
        return axios.all([getUserInfo(username),getUserRepos(username)])
            .then(function (arr) {
                return {
                    bio:arr[0].data,
                    repos:arr[1].data
                }
            });
    }
}

module.exports=helper;