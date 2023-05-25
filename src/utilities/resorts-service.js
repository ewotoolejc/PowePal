// Service modules export business/app logic
// such as managing tokens, etc.
// Service modules often depend upon API modules
// for making AJAX requests to the server.

import * as resortsAPI from './resorts-api';

export async function addResort(resortData) {
  console.log(resortData);
  const resort = await resortsAPI.addResort(resortData);
  localStorage.setItem('resort', resort);
  return resort
}


// export async function login(credentials) {
//   // Delegate the AJAX request to the users-api.js
//   // module.
//   const token = await usersAPI.login(credentials);
//   localStorage.setItem('token', token);
//   return getUser();
// }

// export function logOut() {
//   localStorage.removeItem('token');
// }

// export function getToken() {
//   // getItem will return null if the key does not exists
//   const token = localStorage.getItem('token');
//   if (!token) return null;
//   const payload = JSON.parse(atob(token.split('.')[1]));
//   // A JWT's exp is expressed in seconds, not miliseconds
//   if (payload.exp * 1000 < Date.now()) {
//     // Token has expired
//     localStorage.removeItem('token');
//     return null;
//   }
//   return token;
// }

// export function getUser() {
//   const token = getToken();
//   return token ? JSON.parse(atob(token.split('.')[1])).user : null;
// }


// export function checkToken() {
//   // Just so that you don't forget how to use .then
//   return usersAPI.checkToken()
//     // checkToken returns a string, but let's 
//     // make it a Date object for more flexibility
//     .then(dateStr => new Date(dateStr));
// }