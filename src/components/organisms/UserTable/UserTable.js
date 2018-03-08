import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import './UserTable.css'
import onlineIndicator from '../../../assets/img/online-indicator.png'
import FontAwesome from 'react-fontawesome';



class UserTable extends React.Component {

  userNameBlock = (cell, row) => {
    return (
      <div className="user-name-block" style={{display:'flex', alignItems:'center'}}>
        <div className="user-image">
          <img className="user-photo" src={row.userPhoto} alt={row.userName}/>
          {
            row.active && (<img className="onlineIndicator" src={onlineIndicator} alt="onlineIndicator"/>)
          }
        </div>

        <div className="user-main-info">
          <p>{row.userName}</p>
          <span>{row.position}</span>
        </div>
      </div>
    )
  };



  lastActivityBlock =(cell, row) => {
    return(
      <div className="last-activity-block">
        <p className = {row.active ? 'online-now': ''}>
          <FontAwesome
          className='task-time-icon'
          name='clock'
        />
          {row.lastActivity}</p>
      </div>
    )
  };

  emailBlock =(cell, row) => {
    return(
      <div className="mail-and-phone-block">
        <p>
          {row.email}</p>
      </div>
    )
  };

  phoneBlock =(cell, row) => {
    return(
      <div className="mail-and-phone-block">
        <p>
          {row.phone}</p>
      </div>
    )
  };

  buttonBlock =() => {
    return(
      <div className="button-block">
        <FontAwesome
          className='dropdown-button-icon'
          name='ellipsis-v'
          size='2x'
        />
      </div>
    )
  };


  render() {


    return (
      <div>
        <BootstrapTable
          headerStyle={ { background: '#f6f7fa', font: '400 1.2vmax Roboto' }}
          containerStyle={ { background: '#fff' }}
          data={this.props.data}
          pagination>

          <TableHeaderColumn

            dataField='userName'
            isKey
            dataFormat={this.userNameBlock}
          >Name</TableHeaderColumn>

          <TableHeaderColumn
            dataField='lastActivity'
            dataFormat={this.lastActivityBlock}
          >Last activity</TableHeaderColumn>


          <TableHeaderColumn
            dataField='email'
            dataFormat={this.emailBlock}
          >Mail</TableHeaderColumn>


          <TableHeaderColumn
            dataField='phone'
            dataFormat={this.phoneBlock}
          >Phone</TableHeaderColumn>

          <TableHeaderColumn
            width='10%'
            dataField='button'
            dataFormat={this.buttonBlock}
          >

          </TableHeaderColumn>

        </BootstrapTable>
      </div>
    );

  }

}

export default UserTable;