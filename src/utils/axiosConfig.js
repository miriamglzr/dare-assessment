import axios from 'axios';
import setAuthToken from './setAuthToken';

const baseUrl =
  'https://cors-anywhere.herokuapp.com/https://dare-nodejs-assessment.herokuapp.com/';

// Use axiosMgr.post (or .get .put .delete) to make post calls shorter outside this file
// ========================================================================================
export const axiosConfig = {
  get: async function (url, token = false) {
    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    };
    if (token) {
      if (localStorage.token) {
        setAuthToken (localStorage.token);
      }
    }
    // console.log (url);
    return await axios.get (baseUrl + url, config);
  },
  post: async function (url, body, token = false) {
    console.log ('axiosConfig is running');
    const config = {
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*', // this is to prevent the CORS error for the API request
      },
    };
    if (token) {
      if (localStorage.token) {
        setAuthToken (localStorage.token);
      }
    }
    console.log ('this should work');
    return await axios.post (baseUrl + url, body, config);
  },
};
