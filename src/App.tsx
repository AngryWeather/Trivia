import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/Header";
import { Register } from "./components/register/Register";
import { Login } from "./components/login/Login";
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";
import { QuestionSettings } from "./components/question-settings/QuestionSettings";
import { Questions } from "./components/questions/Questions";
import { Logout } from "./components/logout/Logout";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/user/register" element={<Register />}></Route>
          <Route path="/user/login" element={<Login></Login>}></Route>
          <Route path="/user/logout" element={<Logout></Logout>}></Route>
          <Route
            path="/"
            element={<QuestionSettings></QuestionSettings>}
          ></Route>
          <Route path="/questions" element={<Questions></Questions>}></Route>
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
