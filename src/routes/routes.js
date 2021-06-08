import {axiosConfig} from '../utils/axiosConfig';
import setAuthToken from '../utils/setAuthToken';

// ======= LOG IN =========

export const loginUser = ({client_id, client_secret}) => {
  const body = {client_id, client_secret};

  console.log (body);
  let res;
  try {
    res = axiosConfig.post ('api/login', body);
    res.then (function (result) {
      console.log (result); // "Some User token"

      if (result.data) {
        console.log ('this is data response');
        console.log (result.data); // show response message
        setAuthToken (result.data.token);
      }
    });
  } catch (error) {
    console.log ('error');
    const errorMsg = error.response.data.errors[0].msg;
    const errorStat = error.response.status;
    console.log (errorMsg);
    console.log (errorStat);
  }
};

// ========= GET CLIENTS ===========

export const getClients = () => {
  console.log ('route get Clients!');
  try {
    let res = axiosConfig.get (`api/clients`, true);
    res.then (function (result) {
      if (result.data.error === 'Unauthorized') {
        console.log ('please log in and try again');
        console.log (result.data); // show response message
        setAuthToken (result.data.token);
      } else if (result) {
        console.log (result.data);
      }
    });
  } catch (error) {
    console.log (error);
  }
};

export const getPolicies = () => {
  console.log ('route get Policies!');
  try {
    let res = axiosConfig.get (`api/policies`, true);
    res.then (function (result) {
      if (result.data.error === 'Unauthorized') {
        console.log ('please log in and try again');
        console.log (result.data); // show response message
        setAuthToken (result.data.token);
      } else if (result) {
        console.log (result.data);
      }
    });
  } catch (error) {
    console.log (error);
  }
};
