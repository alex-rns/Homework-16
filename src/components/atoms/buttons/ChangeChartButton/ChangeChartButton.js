import React from 'react';
import FontAwesome from 'react-fontawesome';
import './ChartButton.css'

//components

class ChangeChartButton extends React.Component {
  render(){
    return(
      <button className='ChartButton'>
          <FontAwesome
            className='icon-change-chart-button'
            name='pencil-alt'
          />
      </button>
    )
  }
}

export default ChangeChartButton;