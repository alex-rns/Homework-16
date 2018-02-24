const SalesChart = {
  chart: {
    type: 'pie',
    height: '290'
  },
  plotOptions: {
    pie: {
      shadow: false,
      colors: ['#4b74e0', '#4164c2', '#3755a4', '#25396e', '#5584ff']
    }
  },
  title: {
    verticalAlign: 'middle',
    floating: true,
    x: -65,
    y: 0
  },
  legend: {
    align: 'right',
    layout: 'vertical',
    verticalAlign: 'middle',
    itemMarginTop: 5,
    itemMarginBottom: 5
  },
  series: [{
    innerSize: '60%',
    showInLegend:true,
    dataLabels: {
      enabled: false
    }
  }],
  credits: {
    enabled: false
  }
};

export default SalesChart;