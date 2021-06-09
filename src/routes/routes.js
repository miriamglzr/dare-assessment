import {axiosConfig} from '../utils/axiosConfig';
import setAuthToken from '../utils/setAuthToken';

// ======= LOG IN =========

export const loginUser = ({client_id, client_secret}) => {
  const body = {client_id, client_secret};
  let res;
  try {
    res = axiosConfig.post ('api/login', body);
    res.then (function (result) {
      // console.log (result); // "Some User token"
      if (result.data) {
        //  console.log (result.data); // show response message
        setAuthToken (result.data.token);
      }
    });
  } catch (error) {
    console.log ('error');
    localStorage.removeItem ('token');
  }
};

// ========= GET CLIENTS ===========

export const getClients = async () => {
  console.log ('route get Clients!');
  try {
    const res = axiosConfig.get (`api/clients`, true);
    let dataPromise = await res.then (function (result) {
      if (result.data.error === 'Unauthorized') {
        dataPromise = ['please log in and try again'];
        // show response message
        localStorage.removeItem ('token');
      }
      return result.data;
    });
    return dataPromise;
  } catch (error) {
    console.log (error);
    localStorage.removeItem ('token');
  }
};

// ========= GET POLICIES ===========

export const getPolicies = async () => {
  // console.log ('route get Policies!');
  try {
    const res = axiosConfig.get (`api/policies`, true);
    let dataPromise = await res.then (function (result) {
      if (result.data.error === 'Unauthorized') {
        dataPromise = ['please log in and try again'];
        // show response message
        localStorage.removeItem ('token');
      }
      return result.data;
    });
    return dataPromise;
  } catch (error) {
    console.log (error);
    localStorage.removeItem ('token');
  }
};
