import React from 'react';
import './Select.css'
import FontAwesome from 'react-fontawesome';

class Select extends React.Component {

  render() {
    return (
      <div className='select-wrapp'>
        <span className='select-label'>Period:</span>
        <select
          onChange={this.props.onChange}
          className='Select'>
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