import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getEmployees } from '../employees/employeesReducer';
import EmployeeCard from '../employees/EmployeeCard';

const EmployeesComponent = ({ employeeData }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (employeeData && employeeData.status === 'idle') {
      dispatch(getEmployees());
    }
  }, [employeeData, dispatch]);
  console.log('employeeData@EmployeesComponent');
  console.log(employeeData);
  return (
    <div>
      <p>Employeeeezzzz</p>
      <p>Employeedata status: {employeeData.status}</p>
      {employeeData && employeeData.length && (
        <p>
          data:{' '}
          {employeeData.map((item, index) => (
            <EmployeeCard id={item.id} />
          ))}
        </p>
      )}
    </div>
  );
};

const mapStateToProps = function (state) {
  console.log(state);
  return {
    employeeData: state.employees.employeeData,
  };
};

export default connect(mapStateToProps)(EmployeesComponent);
