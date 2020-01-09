import { USER_LOGIN, UPDATE_SCHEDULE } from './types';
import axios from 'axios';

export const userLogin = (user) => dispatch => {
  axios.post('https://ff58c38a.ngrok.io/api/login', { user }).then((response)=> {
    dispatch({
      type: USER_LOGIN,
      payload: { user }
    });
  })
}

export const userRetrieve = (user) => dispatch => {
  axios.get('https://ff58c38a.ngrok.io/api/login', { user }).then((response)=> {
    dispatch({
      type: USER_LOGIN,
      payload: { user }
    });
  })
}

export const userSubmitSelectableEvent = (idOfEvent, userPhoneId) => dispatch => {
  axios.post('https://ff58c38a.ngrok.io/api/selectableEvent', { idOfEvent, userPhoneId }).then((user)=> {
    dispatch({
      type: UPDATE_SCHEDULE,
      payload: { userPhoneId, idOfEvent }
    });
  })
}
