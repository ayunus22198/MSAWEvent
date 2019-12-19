import { SCHEDULE_RETRIEVE, SCHEDULE_SET, UPDATE_SCHEDULE } from './types';
import axios from 'axios';

export const fetchEvents = () => dispatch => {
    axios.get('https://4ab5c827.ngrok.io/api/events').then((response) => {
      dispatch({
        type: SCHEDULE_RETRIEVE,
        payload: {
          friday: response.data.friday,
          saturday: response.data.saturday,
          sunday: response.data.sunday
        }
      })
    })
};

export const updateSelectableSchedule = (idUpdate, eventSelected, token) => dispatch => {
  axios.post('https://4ab5c827.ngrok.io/api/selectableEvent', { token, eventSelected, idUpdate }).then((user) => {
      dispatch({
        type: UPDATE_SCHEDULE,
        payload: { token, eventSelected, idUpdate }
      })
  })

};

export const setSchedule = (friday, saturday, sunday) => dispatch => {
  dispatch({
    type: SCHEDULE_SET,
    payload: { friday, saturday, sunday }
  })
};
