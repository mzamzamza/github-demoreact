import { createSlice } from '@reduxjs/toolkit';
import { invoicesInitialData } from '../data';

export const invoiceListSlice = createSlice({
  name: 'Invoices',
  initialState: {
    invoiceList: invoicesInitialData,
  },
  reducers: {
    addInvoice: (state, action) => {
      state.invoiceList.push(action.payload);
    },
    removeInvoice: (state, action) => {
      for (let i = 0; i < state.invoiceList.length; i++) {
        if (state.invoiceList[i].number == action.payload)
          state.invoiceList.splice(i, 1);
      }
    },
  },
});

export const { addInvoice, removeInvoice } = invoiceListSlice.actions;

export default invoiceListSlice.reducer;
