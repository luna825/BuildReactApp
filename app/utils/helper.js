import axios from 'axios';

function getUserInfo (username) {
    return axios.get(`https://api.github.com/users/${username}`);
}

function getUserRepos (username) {
    return axios.get(`https://api.github.com/users/${username}/repos`);
}

const helpers = {
    getGithubInfo(username) {
        return axios.all([getUserInfo(username),getUserRepos(username)])
            .then((arr) => ({bio:arr[0].data,repos:arr[1].data}))
    }
}

export default helpers;