import React from 'react'
import { Routes, Route, } from "react-router-dom";
import { paths } from './utils/path';
import Header from './components/Header/Header'
import EmployeeMap from './screens/User/EmployeeMap';
import User from './screens/User/User';
import Clients from './screens/User/Clients';
import Contacts from './screens/User/Contacts';
import Sites from './screens/User/Sites';
import Assets from './screens/User/Assets';
import PostcodeReports from './screens/User/PostcodeReports';
import UserCreate from './screens/User/UserCreate';
import Login from './screens/Login';
const App = () => {
  return (
    <>
    <Header/>
    <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path={paths.users} element={<User />} />
        <Route exact path={paths.usersCreate} element={<UserCreate />} />
        <Route exact path={paths.employeeMap} element={<EmployeeMap />} />
        <Route exact path={paths.clients} element={<Clients />} />
        <Route exact path={paths.contacts} element={<Contacts />}  />
        <Route exact path={paths.sites} element={<Sites />}  />
        <Route exact path={paths.assets} element={<Assets />}  />
        <Route exact path={paths.postCodeReport} element={<PostcodeReports />} />
    </Routes>
    </>
  )
}

export default App