// src/components/EmployeeList.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { deleteEmployee } from "../store/employeeSlice";
import { EmployeeForm } from "./EmployeeForm.tsx";

export const EmployeeList: React.FC = () => {
  const employees = useSelector((state: RootState) => state.employees.employees);
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteEmployee(id));
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Employee List</h2>
      <ul className="space-y-4">
        {employees.map((emp) => (
          <li key={emp.id} className="bg-gray-100 p-4 rounded-md flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold">{emp.name}</p>
              <p>{emp.position} - {emp.department}</p>
            </div>
            <div className="space-x-2">
              <EmployeeForm employee={emp} />
              <button
                onClick={() => handleDelete(emp.id)}
                className="text-white bg-red-500 px-3 py-1 rounded-md"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
