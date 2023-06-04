import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/Header";
import { Register } from "./components/register/Register";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/user/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
