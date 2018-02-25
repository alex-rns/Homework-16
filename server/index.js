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
    ["Social Media",195],["Adwords", 185],["E-Commerce",482],["Websites",338],["Logo", 360]
  ],
  month: [
    ["Social Media",75],["Adwords", 99],["E-Commerce",199],["Websites",55],["Logo", 117]
  ],
  week: [
    ["Social Media",2],["Adwords", 11],["E-Commerce",119],["Websites",24],["Logo", 46]
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