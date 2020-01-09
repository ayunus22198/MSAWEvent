import { USER_LOGIN, UPDATE_SCHEDULE } from './types';
import axios from 'axios';

export const userLogin = (user) => dispatch => {
  axios.post('https://7ebd18d2.ngrok.io/api/login', { user }).then((response)=> {
    dispatch({
      type: USER_LOGIN,
      payload: { user }
    });
  })
}

export const userRetrieve = (user) => dispatch => {
  axios.get('https://7ebd18d2.ngrok.io/api/login', { user }).then((response)=> {
    dispatch({
      type: USER_LOGIN,
      payload: { user }
    });
  })
}

export const userSubmitSelectableEvent = (idOfEvent, userPhoneId) => dispatch => {
  axios.post('https://7ebd18d2.ngrok.io/api/selectableEvent', { idOfEvent, userPhoneId }).then((user)=> {
    dispatch({
      type: UPDATE_SCHEDULE,
      payload: { userPhoneId, idOfEvent }
    });
  })
}
