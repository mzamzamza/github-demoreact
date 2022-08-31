import React from 'react';
import { connect } from 'react-redux';

const EmployeeCard = (props) => {
  return (
    <li key={props.employee.id + 'emp'}>{props.employee.employee_name}</li>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    employee: state.employees.employeeData.find((e) => e.id == ownProps.id),
  };
};

export default connect(mapStateToProps)(EmployeeCard);
