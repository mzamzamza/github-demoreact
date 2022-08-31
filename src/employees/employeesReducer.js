import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getEmployees = createAsyncThunk('getEmployees', async () => {
  try {
    const response = await axios.get(
      'https://dummy.restapiexample.com/api/v1/employees'
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
});

export const employeesSlice = createSlice({
  name: 'Employees',
  initialState: {
    employeeData: { status: 'idle', data: [] },
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employeeData.push(action.payload);
    },
    initializeEmployees: (state, action) => {
      state.employeeData = action.payload;
    },
    removeEmployee: (state, action) => {
      for (let i = 0; i < state.employeeData.length; i++) {
        if (state.employeeData[i].data.id == action.payload)
          state.employeeData.splice(i, 1);
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getEmployees.pending, (state, action) => {
        state.employeeData.status = 'loading';
        console.log('loading');
      })
      .addCase(getEmployees.fulfilled, (state, action) => {
        state.employeeData.status = 'succeeded';
        // Add any fetched posts to the array
        console.log('succeeded');
        console.log(state);
        state.employeeData = action.payload.data;
      })
      .addCase(getEmployees.rejected, (state, action) => {
        state.employeeData.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addEmployee, initializeEmployees, removeEmployee } =
  employeesSlice.actions;

export default employeesSlice.reducer;
