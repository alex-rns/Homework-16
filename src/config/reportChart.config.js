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
    gridLineWidth: 1,
    labels: {
      enabled: false
    },
  },
  yAxis: {
    description: null,
    title: '',
  },
  series: [{
    data: [300, 250, 100, 600, 200, 300, 100, 600, 300, 500, 600, 700]
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