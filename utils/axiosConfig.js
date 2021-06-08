import axios from 'axios';
import setAuthToken from './setAuthToken';

// const baseUrl = 'http://localhost:5000/';
const baseUrl = 'https://dare-nodejs-assessment.herokuapp.com/';

// Use axiosMgr.post (or .get .put .delete) to make post calls shorter outside this file
// ========================================================================================
export const axiosConfig = {
  get: async function (url, token = false) {
    const config = {headers: {'Content-type': 'application/json'}};
    if (token) {
      if (localStorage.token) {
        setAuthToken (localStorage.token);
      }
    }
    // console.log (url);
    return await axios.get (baseUrl + url, config);
  },
  post: async function (url, body, token = false) {
    const config = {
      headers: {'Content-type': 'application/json'},
    };
    if (token) {
      if (localStorage.token) {
        setAuthToken (localStorage.token);
      }
    }
    return await axios.post (baseUrl + url, body, config);
  },

  put: async function (url, body, token = false) {
    const config = {
      headers: {'Content-type': 'application/json'},
    };
    if (token) {
      if (localStorage.token) {
        setAuthToken (localStorage.token);
      }
    }
    return await axios.put (baseUrl + url, body, config);
  },

  delete: async function (url, token = false) {
    const config = {
      headers: {'Content-type': 'application/json'},
    };
    if (token) {
      if (localStorage.token) {
        setAuthToken (localStorage.token);
      }
    }
    return await axios.delete (baseUrl + url, config);
  },
};
