import { configureStore } from '@reduxjs/toolkit';
import invoiceListReducer from './invoices/invoicesRedux';
import employeesReducer from './employees/employeesReducer';

export default configureStore({
  reducer: {
    invoiceList: invoiceListReducer,
    employees: employeesReducer,
  },
});
