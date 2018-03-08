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
    labels: {
      style: {
        color: "#cdd3df",
        fontSize: "16px",
        fontWeight: "700"
      }
    }

  },
  plotOptions: {
    spline: {
      lineWidth: 6,
      marker: {
        enabled: false
      },
    },
    series: {
      color: {
        linearGradient: { x1: 0, x2: 1, y1: 0, y2: 0 },
        stops: [
          [0, '#5782fd'],
          [1, '#fe3a76']
        ]
      }
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