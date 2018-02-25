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
    ["Social Media",190],["Adwords", 190],["E-Commerce",480],["Websites",340],["Logo", 360]
  ],
  month: [
    ["Social Media",60],["Adwords", 100],["E-Commerce",190],["Websites",60],["Logo", 120]
  ],
  week: [
    ["Social Media",2],["Adwords", 10],["E-Commerce",120],["Websites",20],["Logo", 50]
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