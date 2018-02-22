import React from 'react';
import './Select.css'
import FontAwesome from 'react-fontawesome';

class Select extends React.Component {

  onChange = (e) => {
    if (e.target.value === "Last Year") {
      fetch('/api/user/sales/year', {
        headers: {
          'Content-type': 'application/json'
        },
        method: 'get'
      })
        .then(res => res.json())
        .then(res => {
          console.log(res)

        })
    } else if (e.target.value === "Last Month") {
      fetch('/api/user/sales/month', {
        headers: {
          'Content-type': 'application/json'
        },
        method: 'get'
      })
        .then(res => res.json())
        .then(res => {
          console.log(res)

        })
    } else if (e.target.value === "Last Week") {
      fetch('/api/user/sales/week', {
        headers: {
          'Content-type': 'application/json'
        },
        method: 'get'
      })
        .then(res => res.json())
        .then(res => {
          console.log(res)

        })
    }
  };

  render() {
    return (
      <div className='select-wrapp'>
        <span className='select-label'>Period:</span>
        <select onChange={this.onChange} className='Select'>
          {this.props.data.map((item, index) => {
            return (
              <option
                className='select-option'
                key={index}
                value={item}
              >{item}</option>
            )
          })}
        </select>
        <FontAwesome
          className='select-caret'
          name='angle-down'
        />
      </div>
    )
  }
}

export default Select;