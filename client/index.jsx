import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

function FrontPage() {
  return (
    <div>
      <h1>Movie Database</h1>
      <div>
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register new user</Link>
      </div>
    </div>
  );
}

function Login() {
  return <h1>Hello this is login</h1>;
}

function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<FrontPage />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDom.render(<Application />, document.getElementById("app"));
