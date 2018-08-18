import { getToken } from "./authentication";

function loginRequest({email, password}){
  return new Promise((resolve, reject) => {
    fetch("http://localhost:8882/users/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        email,
        password
      })
    }).then(response => {
      response.json().then(json => {
        if (!response.ok){
          return reject(json);
        }
        resolve(json);
      }).catch(e => reject(e));
    }).catch(e => reject(e))
  });
}

function signupRequest({name, email, password, type, occupation, interested_areas}){
  return new Promise((resolve, reject) => {
    fetch("http://localhost:8882/users/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        name,
        email,
        password,
        type,
        occupation,
        interested_areas,
      })
    }).then(response => {
      response.json().then(json => {
        if (!response.ok){
          return reject(json);
        }
        resolve(json);
      }).catch(e => reject(e));
    }).catch(e => reject(e))
  });
}

function getDashboard(){
  return new Promise((resolve, reject) => {
    fetch("http://localhost:8882/dashboard", {
      headers: {
       'Authorization': getToken() 
      }
    }).then(response => {
      if (!response.ok){
        reject(new Error("Unathorized"));
        return;
      }
      response.json().then(json => {
        resolve(json.data);
      }).catch(e => reject(e));
    }).catch(err => reject(err))
  })
}

export {
  loginRequest,
  signupRequest,
  getDashboard
}