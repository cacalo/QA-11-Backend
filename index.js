const express = require('express')
const app = express();

let users = []

app.listen(4000,() =>{
  console.log("App running on port 4000")
})

app.get("/login", (request, response) =>{
  const jsonRequest = JSON.parse(JSON.stringify(request.query))
  handleLogin(jsonRequest)
  response.json({ name: "Gonzalo"})
})

app.post("/register", (request, response) =>{
  const jsonRequest = JSON.parse(JSON.stringify(request.query))
  handleRegister(jsonRequest)
  response.send("Response")
})


function handleRegister (data) {
  console.log("Trying to register an user");
  if(data){
    users.push(data);
  }
  console.log("List of all users:")
  console.log(users);
}

function handleLogin (data) {
  console.log("Trying to login the user " + data.email);
  const selectedUser =  users.filter(a => a.email === data.email)[0];
  console.log(selectedUser.password, data.password);
  if(selectedUser.password == data.password && selectedUser != undefined){
    console.log("Login successful");
  }
  else{
    console.log("Login unsuccessful");
  }
}