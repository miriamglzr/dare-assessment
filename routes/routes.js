import {axiosConfig} from '../../utils/axiosConfig';

//    LOG IN
export const loginUser = ({client_id, password}) => async dispatch => {
  const body = {client_id, password};
  let res;
  try {
    res = await axiosConfig.post ('api/login', body);
    console.log (res.status);
    if (res.data) {
      console.log (res.data); // show response message
      // (loadUser ());
    }
  } catch (error) {
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
