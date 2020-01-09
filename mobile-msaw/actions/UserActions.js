import { USER_LOGIN, UPDATE_SCHEDULE } from './types';
import axios from 'axios';

export const userLogin = (user) => dispatch => {
  axios.post('https://backend-msaw.herokuapp.com/api/login', { user }).then((response)=> {
    dispatch({
      type: USER_LOGIN,
      payload: { user }
    });
  })
}

export const userRetrieve = (user) => dispatch => {
  axios.get('https://backend-msaw.herokuapp.com/api/login', { user }).then((response)=> {
    dispatch({
      type: USER_LOGIN,
      payload: { user }
    });
  })
}
