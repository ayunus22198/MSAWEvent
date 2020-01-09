import { SCHEDULE_RETRIEVE, SCHEDULE_SET, UPDATE_SCHEDULE } from './types';
import axios from 'axios';

export const fetchEvents = () => dispatch => {
    axios.get('https://7ebd18d2.ngrok.io/api/events').then((response) => {
      dispatch({
        type: SCHEDULE_RETRIEVE,
        payload: {
          friday: response.data.friday.sort((a,b) => {
            return new Date(a.dateBegin).getTime() - new Date(b.dateBegin).getTime()
          }),
          saturday: response.data.saturday.sort((a,b) => {
            return new Date(a.dateBegin).getTime() - new Date(b.dateBegin).getTime()
          }),
          sunday: response.data.sunday.sort((a,b) => {
            return new Date(a.dateBegin).getTime() - new Date(b.dateBegin).getTime()
          }),
        }
      })
    })
};

export const updateSelectableSchedule = (eventSelected, token, idOfClickedBlock) => dispatch => {
  axios.post('https://7ebd18d2.ngrok.io/api/selectableEvent', { token, eventSelected, idOfClickedBlock }).then((user) => {
      dispatch({
        type: UPDATE_SCHEDULE,
        payload: { token, eventSelected, idOfClickedBlock }
      })
  })

};

export const setSchedule = (friday, saturday, sunday) => dispatch => {
  dispatch({
    type: SCHEDULE_SET,
    payload: { friday, saturday, sunday }
  })
};
