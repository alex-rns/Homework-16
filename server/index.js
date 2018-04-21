const express = require('express');
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const App = express();

app.use(express.static(__dirname + '/public'));
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

//data

const report = {
  year: [300, 250, 100, 600, 200, 300, 100, 600, 300, 500, 600, 700],
  month: [400, 600, 200, 300, 100, 600, 700],
  week: [600, 200, 500, 600, 700]
};

const yourSales = {
  year: [
    ["Social Media", 195], ["Adwords", 185], ["E-Commerce", 482], ["Websites", 338], ["Logo", 360]
  ],
  month: [
    ["Social Media", 75], ["Adwords", 99], ["E-Commerce", 199], ["Websites", 55], ["Logo", 117]
  ],
  week: [
    ["Social Media", 2], ["Adwords", 11], ["E-Commerce", 119], ["Websites", 24], ["Logo", 46]
  ]
};

const activeUsers = {
  year: [300, 250, 100, 600, 200, 300, 100, 600, 300, 500, 600, 700],
  month: [400, 600, 200, 300, 100, 600, 700],
  week: [600, 200, 500, 600, 700]
};


const totalSales = [
  directSales = {
    data : [55,45],
    chartColor: ['#dadee6', '#6082fe'],
    percent: '45'
  },
  chanelSales = {
    data : [80,20],
    chartColor: ['#dadee6', '#a65db7'],
    percent: '20'
  },
  chanelTwoSales = {
    data : [75,25],
    chartColor: ['#dadee6', '#f03877'],
    percent: '25'
  },

];

const dataTask = [
  {
    title: 'New website for Symu.co',
    deadline: '5 days delays',
    deadlineCheck: true
  },
  {
    title: 'Free business PSD Template',
    deadline: '2 days delays',
    deadlineCheck: true
  },
  {
    title: 'New logo for JCD.pl',
    deadline: '5 days left'
  },
  {
    title: 'Free Icons Set vol. 3',
    deadline: '10 days left'
  },
];
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

//Active Users Chart

App.get('/api/user/activeUsers/year', (req, res) => {
  return res.json(activeUsers.year)
});

App.get('/api/user/activeUsers/month', (req, res) => {
  return res.json(activeUsers.month)
});

App.get('/api/user/activeUsers/week', (req, res) => {
  return res.json(activeUsers.week)
});


//Total Sales Chart

App.get('/api/user/totalSales/direct', (req, res) => {
  return res.json(totalSales[0])
});

App.get('/api/user/totalSales/chanel', (req, res) => {
  return res.json(totalSales[1])
});

App.get('/api/user/totalSales/chanelTwo', (req, res) => {
  return res.json(totalSales[2])
});


//Home Task

App.get('/api/user/home/task', (req, res) => {
  return res.json(dataTask)
});


App.listen(port, () => {
  console.log('server is started')

});