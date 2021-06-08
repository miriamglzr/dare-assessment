//We wont make any calls with axios, only add token to the headers
import axios from 'axios';

//This will be a function that chekcs if there is a token in the localStorage, and if so, it inserts it into the headers of any axios call
// needs to add the bearer before the token
const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
    localStorage.setItem ('token', token);
  } else {
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem ('token');
  }
};

export default setAuthToken;
