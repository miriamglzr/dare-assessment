import {axiosConfig} from '../utils/axiosConfig';

//  LOG IN

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
        // (loadUser ());
      }
    });
  } catch (error) {
    console.log ('error');
    console.log (error);
    console.log (res);
    const errorMsg = error.response.data.errors[0].msg;
    const errorStat = error.response.status;
    //log out
  }
};

export const getClients = () => async dispatch => {
  try {
    let res = await axiosConfig.get (`api/clients`, true);
    console.log (res);
    console.log (res.data);
  } catch (error) {
    console.log (error);
  }
};

export const getPolicies = () => async dispatch => {
  try {
    let res = await axiosConfig.get (`api/policies`, true);
    console.log (res);
    console.log (res.data);
  } catch (error) {
    console.log (error);
  }
};
