import express from 'express';
import 'dotenv/config';

const app = express()
const port = process.env.PORT || 5001


type User = {
  id: number,
  name: string,
  email: string,
  password: string
}

const users: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@gmail.com',
    password: 'password'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@gmail.com',
    password: 'password'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike@gmail.com',
    password: 'password'
  },
  {
    id: 4,
    name: 'Sarah Williams',
    email: 'sarah@gmail.com',
    password: 'password'
  },
  {
    id: 5,
    name: 'David Brown',
    email: 'david@gmail.com',
    password: 'password'
  }
]

app.get('/users', (req, res) => {
  return res.json(users)
})
app.get('/users/:id', (req, res) => {
  return res.json(users[req.params.id - 1])
})


app.listen(port, () => console.log('> Server is up and running on port : ' + port))