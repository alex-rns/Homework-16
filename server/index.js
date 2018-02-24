const express = require('express');
const bodyParser = require('body-parser');
const App = express();

//data

const report = {
  year: [300, 250, 100, 600, 200, 300, 100, 600, 300, 500, 600, 700],
  month: [400, 600, 200, 300, 100, 600, 700],
  week: [600, 200, 500, 600, 700]
};

const yourSales = {
  year: [
    ["Social Media",19],["Adwords", 19],["E-Commerce",48],["Websites",34],["Logo", 36]
  ],
  month: [
    ["Social Media",6],["Adwords", 10],["E-Commerce",19],["Websites",6],["Logo", 12]
  ],
  week: [
    ["Social Media",0],["Adwords", 1],["E-Commerce",12],["Websites",2],["Logo", 5]
  ]
};



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
  return res.json(yourSales.year)
});

App.get('/api/user/sales/month', (req, res) => {
  return res.json(yourSales.month)
});

App.get('/api/user/sales/week', (req, res) => {
  return res.json(yourSales.week)
});


//Report Chart

App.get('/api/user/report/year', (req, res) => {
  return res.json(report.year)
});

App.get('/api/user/report/month', (req, res) => {
  return res.json(report.month)
});

App.get('/api/user/report/week', (req, res) => {
  return res.json(report.week)
});



App.listen(4000, () => {
  console.log('server is started')
});