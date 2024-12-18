const express = require('express');
const app = express();
const port = 3000;
const postsObj = require('./data/posts')
const postsRouter = require('./routers/posts')


app.get('/', (req, res) => {
  res.send('server dei posts')
})

app.use('/posts', postsRouter)

app.listen(port, () => {
  console.log(`porta: ${port}`)
})