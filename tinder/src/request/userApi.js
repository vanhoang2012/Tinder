import axios from 'axios';

export const getUser = (resolve = () => {}, reject = () => {}) => {
  axios
    .get('https://randomuser.me/api')
    .then(response => {
      console.log('Hoang log get user', response);
      resolve(response?.data);
    })
    .catch(error => {
      console.log('Hoang log error', error);
      reject(error);
    });
};
