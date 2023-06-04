import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/Header";
import { Register } from "./components/register/Register";
import { Login } from "./components/login/Login";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/user/register" element={<Register />}></Route>
        <Route path="/user/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
