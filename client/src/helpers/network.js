function safePost(url, body){
    return new Promise((resolve, reject) => {
      return fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(body)
      }).then(response => {
        response.json().then(json => {
          if (!response.ok){
            return reject(json);
          }
          resolve(json);
        }).catch(e => reject(e));
      }).catch(e => reject(e))
    })
  };

  function safeGet(url){
    return new Promise((resolve, reject) => {
      return fetch(url, {
        method: "get",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Authorization": localStorage.getItem("token")
        },
      }).then(response => {
        response.json().then(json => {
          if (!response.ok){
            return reject(json);
          }
          resolve(json);
        }).catch(e => reject(e));
      }).catch(e => reject(e))
    })
  };


  export function loginRequest(email,password){
      const url = "http://localhost:8882/users/login";
      const body = {
          email: email,
          password: password
      }
      console.log(safePost(url,body))
      return safePost(url,body);
  }

  export function getDashboard(){
    const url = "http://localhost:8882/dashboard";
    return safeGet(url);
  }