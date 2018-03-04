import React from 'react';
import FontAwesome from 'react-fontawesome';
import '../ChangeChartButton/ChartButton.css'

//components

class DelChartButton extends React.Component {
  render(){
    return(
      <button className='ChartButton'>
        <FontAwesome
          className='icon-change-chart-button'
          name='trash-alt'
        />
      </button>
    )
  }
}

export default DelChartButton;