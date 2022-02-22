import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function LoginLinks() {
  return (
    <div>
      <div>
        <Link to={"/login"}>Login</Link>
      </div>
      <div>
        <Link to={"/register"}>Register new user</Link>
      </div>
    </div>
  );
}

async function fetchJSON(url) {
  const res = await fetch(url);
  return await res.json();
}

function useLoader(loadingFn) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState();
  useEffect(async () => {
    setLoading(true);
    try {
      setData(await loadingFn());
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);
  return { loading, error, data };
}

function FrontPage() {
  const { loading, error, data } = useLoader(
    async () => await fetchJSON("/api/login")
  );
  const user = data;

  if (loading) {
    return <div>Loading ...</div>;
  }
  return (
    <div>
      <h1>My Movie Database Is</h1>
      {error && (
        <div style={{ border: "1px solid red", background: "Pink" }}>
          An error has occured: {error.toString()}
        </div>
      )}
      {user ? <div>{user.fullName}</div> : <LoginLinks />}
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
