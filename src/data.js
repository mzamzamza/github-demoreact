import { addInvoice } from './invoices/invoicesRedux.js';
import invoicesReducer from './invoices/invoicesRedux.js';
import { configureStore } from '@reduxjs/toolkit';

//const store = configureStore({ reducer: invoicesReducer });

export const invoicesInitialData = [
  {
    name: 'Santa Monica',
    number: 1995,
    amount: '$10,800',
    due: '12/05/1995',
  },
  {
    name: 'Stankonia',
    number: 2000,
    amount: '$8,000',
    due: '10/31/2000',
  },
  {
    name: 'Ocean Avenue',
    number: 2003,
    amount: '$9,500',
    due: '07/22/2003',
  },
  {
    name: 'Tubthumper',
    number: 1997,
    amount: '$14,000',
    due: '09/01/1997',
  },
  {
    name: 'Wide Open Spaces',
    number: 1998,
    amount: '$4,600',
    due: '01/27/1998',
  },
];

// export function getInvoices() {
//   return useSelector((state) => state.invoiceList.value);
// }

export function getInvoice(number, invoices) {
  let foundInvoice = null;
  if (invoices && invoices.length)
    foundInvoice = invoices.find((invoice) => invoice.number === number);

  return foundInvoice;
}

const setInvoicesInitialStateThunk = (dispatch, getState) => {
  for (let i = 0; i < invoicesInitialData.length; i += 1) {
    dispatch(addInvoice(invoicesInitialData[i]));
  }
  const stateAfter = getState();
  console.log(stateAfter);
};

export const setInvoicesInitialState = () => {
  store.dispatch(setInvoicesInitialStateThunk);
};
