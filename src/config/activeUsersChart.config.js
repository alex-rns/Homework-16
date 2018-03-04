const ActiveUsersChart = {
  chart: {
    type: 'spline',
    height: '250'
  },
  title: {
    text: null
  },
  xAxis: {
    tickWidth: 0,
    gridLineWidth: 1,
    labels: {
      enabled: false
    },
  },
  yAxis: {
    tickWidth: 0,
    description: null,
    title: '',
    max: 700,
    min: 100,
    tickInterval: 100,

  },
  plotOptions: {
    spline: {
      lineWidth: 6,
      marker: {
        enabled: false
      },
    },
    series: {
      color: '#5584ff'
    }
  },

  series: [{
    data: []
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

export default ActiveUsersChart;