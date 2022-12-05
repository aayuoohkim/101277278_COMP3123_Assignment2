import EmployeeList from "./view-employees";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./login";
import AddEmployee from "./add-employee";
import UpdateEmployee from "./update-employee";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/viewEmployees" element={<EmployeeList />} />
        <Route path="/addEmployee" element={<AddEmployee />} />
        <Route path="/updateEmployee" element={<UpdateEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
