const SalesChart = {
  chart: {
    type: 'pie',
    height: '300'
  },
  plotOptions: {
    pie: {
      borderColor: null,
      shadow: false,
      colors: ['#4b74e0', '#4164c2', '#3755a4', '#25396e', '#5584ff']
    }
  },
  title: {
    text: null,
    style: {
      color: '#8492af',
      font: '700 2.2vmax "Roboto", sans-serif'
    },
    verticalAlign: 'middle',
    floating: true,
    x: -90,
    y: 0
  },
  subtitle: {
    text: 'sales',
    style: {
      color: '#8492af',
      font: '300 1.5vmax "Roboto", sans-serif'
    },
    verticalAlign: 'middle',
    floating: true,
    x: -90,
    y: 24,

  },
  legend: {
    align: 'right',
    layout: 'vertical',
    verticalAlign: 'middle',
    itemMarginTop: 5,
    itemMarginBottom: 5,
    itemStyle: {
      font: '300 1.2vmax "Roboto", sans-serif',
      color: '#8492af',
      fontWeight: 400
    },
    itemCheckboxStyle: {
      height: '23px',
      width: '63px'
    },
    width: 160

  },
  series: [{
    innerSize: '60%',
    showInLegend: true,
    dataLabels: {
      enabled: false
    }
  }],
  credits: {
    enabled: false
  }
};

export default SalesChart;