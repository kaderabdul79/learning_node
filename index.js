const express = require('express')
const app = express()
var cors = require('cors')
const port = 4000
app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const users = [
  {id:0,name: 'abdul',Address : '0 dhaka'},
  {id:1,name: 'kader',Address : '1 dhaka'},
  {id:2,name: 'hasan',Address : '2 dhaka'},
  {id:3,name: 'rim',Address : '3 dhaka'},
  {id:4,name: 'kim',Address : '4 dhaka'}
]
app.get('/users', (req,res) => {
  // res.send(users)
  const search = req.query.search;
  if(search){
    const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
    res.send(searchResult);
  }else{
    res.send(users)
  }
})

app.post('/users',(req,res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log('hitting from post',req.body);
  // res.send('inside post');
  //res.send(JSON.stringify(newUser))
  res.json(newUser)
})

app.get('/user/:id', (req,res) => {
  // console.log(req.params.id)
  const id = req.params.id;
  const user = users[id];
  console.log(res.send(user))
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})