import React from 'react';
import './Calendar.css'
import CalendarImg from '../../../assets/img/16.jpg'

class Calendar extends React.Component {
  render() {
    return (
      <div className='Calendar'>
        <img src={CalendarImg} alt="Calendar"/>
      </div>

    )
  }
}

export default Calendar;