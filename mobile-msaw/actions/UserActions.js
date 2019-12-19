import { USER_LOGIN, UPDATE_SCHEDULE } from './types';
import axios from 'axios';

export const userLogin = (user) => dispatch => {
  axios.post('https://4ab5c827.ngrok.io/api/login', { user }).then((response)=> {
    console.log('user ', response.data.user);
    dispatch({
      type: USER_LOGIN,
      payload: { user }
    });
  })
}

export const userSubmitSelectableEvent = (idOfEvent, userPhoneId) => dispatch => {
  axios.post('https://4ab5c827.ngrok.io/api/selectableEvent', { idOfEvent, userPhoneId }).then((user)=> {
    dispatch({
      type: UPDATE_SCHEDULE,
      payload: { userPhoneId, idOfEvent }
    });
  })
}
