//import fetch from 'isomorphic-fetch';
// возвращает данные
export function getIssues() {
   return fetch('https://api.github.com/repos/Yomguithereal/baobab/issues')
       .then( (response) =>  response.json());/*.then(::console.log)*/
}