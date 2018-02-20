const express = require('express');
const bodyParser = require('body-parser');
const App = express();

const userExist = {
  name: '123',
  pass: '123'
};


App.use(bodyParser.json());

App.post('/api/user', (req, res)=>{
  const name = req.body.login;
  const pass = req.body.pass;

  if (userExist.name === name && userExist.pass === pass) {
    return res.json({
      userCheck: 'exist'
    })
  } else {
    return res.json({
      userCheck: 'not exist'
    })
  }

});

App.listen(4000, ()=>{
  console.log('server is started')
});