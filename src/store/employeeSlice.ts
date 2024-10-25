import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
}

interface EmployeeState {
  employees: Employee[];
}

const initialState: EmployeeState = {
  employees: [
    { id: 1, name: "Vamshi", position: "Developer", department: "IT" },
    { id: 2, name: "Krishna", position: "Administrator", department: "IT" },
    { id: 3, name: "Sapender", position: "Manager", department: "HR" },
    { id: 4, name: "Hardik", position: "Developer", department: "IT" },
    { id: 5, name: "Chirag", position: "Developer", department: "IT" },
    { id: 6, name: "Ridhdhi", position: "Manager", department: "IT" },
    { id: 7, name: "Satoniya", position: "Manager", department: "IT" },
    { id: 8, name: "Jogani", position: "Developer", department: "IT" },
    { id: 9, name: "Kathiria", position: "Developer", department: "IT" },
    { id: 10, name: "Kaur", position: "Recruter", department: "HR" },
  ],
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees.push(action.payload);
    },
    updateEmployee: (state, action: PayloadAction<Employee>) => {
      const index = state.employees.findIndex((e) => e.id === action.payload.id);
      if (index !== -1) {
        state.employees[index] = action.payload;
      }
    },
    deleteEmployee: (state, action: PayloadAction<number>) => {
      state.employees = state.employees.filter((e) => e.id !== action.payload);
    },
  },
});

export const { addEmployee, updateEmployee, deleteEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
