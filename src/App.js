import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, text) => {
    setAlert({ msg: message, text: text })
    setTimeout(() => {
      setAlert(null)
    }, 2500);
  }
  const toggle = () => {
    if (mode === 'light') {  //#505459
      setmode("dark");
      document.body.style.backgroundColor = '#303234';
      showAlert("Dark mode has been enabled", "dark")
      document.title = "TextUtils-Dark"
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils"
    }
  }
  return (
    <>
      <Router>
        <Navbar title={"TextUtils"} about={"About TextUtils"} mode={mode} toggle={toggle} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about"
              element={<About mode={mode} />}>
            </Route>
            <Route exact path="/"
              element={<TextForm showAlert={showAlert} mode={mode} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
