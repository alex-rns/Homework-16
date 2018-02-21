const ReportChart = {
  chart: {
    type: 'spline',
    height: '250'
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    visible: false,

  },
  yAxis: {
    description: null,
    title: '',
  },
  series: [{
    data: [100, 200, 100, 600, 200, 300, 100, 600, 300, 500, 600, 700]
  }],
  credits: {
    enabled: false
  },
  legend: {
    enabled: false
  },
  tooltip: {
    shared: true,
    crosshairs: true
  },
};

export default ReportChart;