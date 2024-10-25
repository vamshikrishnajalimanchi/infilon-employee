// src/components/EmployeeForm.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee, updateEmployee } from "../store/employeeSlice";

interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
}

interface EmployeeFormProps {
  employee?: Employee;
}

export const EmployeeForm: React.FC<EmployeeFormProps> = ({ employee }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<Employee>(
    employee || { id: Math.random(), name: "", position: "", department: "" }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (employee) {
      dispatch(updateEmployee(formData));
    } else {
      dispatch(addEmployee(formData));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="border p-2 rounded-md w-full"
        required
      />
      <input
        type="text"
        name="position"
        value={formData.position}
        onChange={handleChange}
        placeholder="Position"
        className="border p-2 rounded-md w-full"
        required
      />
      <input
        type="text"
        name="department"
        value={formData.department}
        onChange={handleChange}
        placeholder="Department"
        className="border p-2 rounded-md w-full"
        required
      />
      <button
        type="submit"
        className="text-white bg-blue-500 px-4 py-2 rounded-md"
      >
        {employee ? "Update Employee" : "Add Employee"}
      </button>
    </form>
  );
};
