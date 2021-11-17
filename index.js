const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// const users = [
//   {id:0,name: '0 abdul kader',Address : '0 dhaka'},
//   {id:1,name: '1 abdul kader',Address : '1 dhaka'},
//   {id:2,name: '2 abdul kader',Address : '2 dhaka'},
//   {id:3,name: '3 abdul kader',Address : '3 dhaka'},
//   {id:4,name: '4 abdul kader',Address : '4 dhaka'}
// ]
app.get('/users', (req,res) => {
  res.send({id:4,name: '4 abdul kader',Address : '4 dhaka'})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})