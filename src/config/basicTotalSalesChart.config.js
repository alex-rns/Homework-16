const TotalSalesChart = {

  chart: {
    type: 'pie',
    height: '190',
    width:'190',
  },


  title: {
    text: '',
    verticalAlign: 'middle',
    style: {
      fontFamily: 'Roboto',
      color: '#6082fe',
      fontSize:'30',
      fontWeight: '700'
    }
  },


  series: [{
    data: [55,45],
    innerSize: '80%',
    dataLabels: {
      enabled: false
    }
  }],

  legend: {
    enabled: false
  },

  credits: {
    enabled: false
  }
};

export default TotalSalesChart;