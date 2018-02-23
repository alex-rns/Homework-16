const express = require('express');
const bodyParser = require('body-parser');
const App = express();


//Login

const userExist = {
  name: '123',
  pass: '123'
};

App.use(bodyParser.json());

App.post('/api/user', (req, res) => {
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

//Sales Chart

App.get('/api/user/sales/year', (req, res) => {
  return res.json([
    ["Websites",6],["Logo", 4],["Websites",6],["Logo", 4],["Social Media",7]
  ])
});

App.get('/api/user/sales/month', (req, res) => {
  return res.json([
    ["Websites",6],["Logo", 4],["Social Media",7]
  ])
});

App.get('/api/user/sales/week', (req, res) => {
  return res.json([
    ["Websites",6],["Logo", 4],["Social Media",7],["Adwords", 2], ["E-Commerce", 5],["Websites",6],["Logo", 4],["Social Media",7],["Adwords", 2], ["E-Commerce", 5]
  ])
});


//Report Chart
App.get('/api/user/report/year', (req, res) => {
  return res.json(
    [300, 250, 100, 600, 200, 300, 100, 600, 300, 500, 600, 700]
  )
});

App.get('/api/user/report/month', (req, res) => {
  return res.json([600, 300, 500, 600, 700])
});

App.get('/api/user/report/week', (req, res) => {
  return res.json([100, 600, 200, 300, 100, 600,300, 250, 100, 600, 200, 700])
});



App.listen(4000, () => {
  console.log('server is started')
});