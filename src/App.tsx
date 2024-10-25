import React, { useEffect, useState } from "react";
import { makeServer } from "./mirage";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeForm } from "./components/EmployeeForm";

if ((process as any).env.NODE_ENV === "development") {
  makeServer();
}

const App = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("/api/employees")
      .then((res) => res.json())
      .then((data) => setEmployees(data.employees));
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Employee Management</h1>
      <EmployeeForm />
      <EmployeeList />
    </div>
  );
};

export default App;

//
//
// src/App.tsx



